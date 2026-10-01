import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import {
	findByShadowTestId,
	queryByShadowTestId,
} from 'shadow-dom-testing-library';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../src/cosmoz-treenode-navigator';
import { adminFilesTree } from './data/tree-data';
import {
	expectRows,
	findRow,
	search,
	selectedNames,
	toggleRow,
} from './test-helpers';

const tree = new DefaultTree(adminFilesTree);

// Both drives open, folders before files, then by name.
const ROOTS_OPEN = [
	'C:',
	'Program Files',
	'Users',
	'Windows',
	'D:',
	'Data',
	'Backup',
];

const meta: Meta = {
	title: 'Tests/CosmozTreenodeNavigator',
};

export default meta;

type Story = StoryObj;

const navigator = (nodePath = '') => html`
	<div style="height: 480px; width: 500px; padding: 10px;">
		<cosmoz-treenode-navigator
			.tree=${tree}
			.nodePath=${nodePath}
			.searchMinLength=${3}
			.searchDebounceTimeout=${100}
			.opened=${true}
		></cosmoz-treenode-navigator>
	</div>
`;

const getNavigator = (canvasElement: HTMLElement) =>
	canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement & {
		nodePath: string;
	};

export const OpensOnRoots: Story = {
	render: () => navigator(),
	play: async ({ canvasElement, step }) => {
		const el = getNavigator(canvasElement);

		await step('With no current node, every root is open', async () => {
			await expectRows(el, ROOTS_OPEN);
		});

		await step('Nothing is selected and there is no path', async () => {
			expect(selectedNames(el)).toEqual([]);
			expect(queryByShadowTestId(el, 'path')).toBeNull();
		});
	},
};

export const OpensOnCurrentNode: Story = {
	render: () => navigator('1.100'),
	play: async ({ canvasElement, step }) => {
		const el = getNavigator(canvasElement);

		await step('The current node is selected and opened', async () => {
			await expectRows(el, [
				'C:',
				'Program Files',
				'Users',
				'Default',
				'John',
				'Public',
				'Windows',
				'D:',
			]);
			expect(selectedNames(el)).toEqual(['Users']);
		});

		await step('The path shows where it sits', async () => {
			const path = await findByShadowTestId(el, 'path');
			expect(path.textContent?.replace(/\s+/gu, ' ').trim()).toBe('C: / Users');
		});
	},
};

export const ExpandAndSelect: Story = {
	render: () => navigator(),
	play: async ({ canvasElement, step }) => {
		const el = getNavigator(canvasElement);
		await expectRows(el, ROOTS_OPEN);

		await step('The chevron expands without selecting', async () => {
			await toggleRow(await findRow(el, 'Users'));
			await waitFor(async () => findRow(el, 'John'));
			expect(selectedNames(el)).toEqual([]);
		});

		await step(
			'Clicking a row highlights it and updates the path',
			async () => {
				await userEvent.click(await findRow(el, 'John'));
				expect(selectedNames(el)).toEqual(['John']);
				const path = await findByShadowTestId(el, 'path');
				expect(path.textContent).toContain('Users');
			},
		);

		await step('Highlighting does not change nodePath', async () => {
			expect(el.nodePath).toBe('');
		});

		await step('A path step selects that ancestor', async () => {
			const path = await findByShadowTestId(el, 'path');
			const crumb = [...path.querySelectorAll('button')].find(
				(b) => b.textContent?.trim() === 'C:',
			)!;
			await userEvent.click(crumb);
			await waitFor(() => expect(selectedNames(el)).toEqual(['C:']));
		});

		await step('Double-clicking a row confirms it', async () => {
			await userEvent.dblClick(await findRow(el, 'Windows'));
			await waitFor(() => expect(el.nodePath).toBe('1.2'));
		});
	},
};

export const Keyboard: Story = {
	render: () => navigator('1.100'),
	play: async ({ canvasElement, step }) => {
		const el = getNavigator(canvasElement);
		await waitFor(() => expect(selectedNames(el)).toEqual(['Users']));

		await step('ArrowDown in the search moves into the tree', async () => {
			const input = await search(el, '');
			input.focus();
			await userEvent.keyboard('{ArrowDown}');
			const users = await findRow(el, 'Users');
			await waitFor(() => expect(users.matches(':focus')).toBe(true));
		});

		await step(
			'Arrow keys move, Space highlights, Enter confirms',
			async () => {
				await userEvent.keyboard('{ArrowDown}');
				await userEvent.keyboard(' ');
				expect(selectedNames(el)).toEqual(['Default']);
				await userEvent.keyboard('{Enter}');
				await waitFor(() => expect(el.nodePath).toBe('1.100.200'));
			},
		);
	},
};

export const Search: Story = {
	render: () => navigator(),
	play: async ({ canvasElement, step }) => {
		const el = getNavigator(canvasElement);
		await expectRows(el, ROOTS_OPEN);

		await step('Matches show in place, under their ancestors', async () => {
			await search(el, 'John');
			await expectRows(el, ['C:', 'Users', 'John', 'D:', 'Data', 'John']);
		});

		await step('Clearing the search restores the tree', async () => {
			await search(el, '');
			await expectRows(el, ROOTS_OPEN);
		});

		await step('A search with no matches says so', async () => {
			await search(el, 'nothing like this');
			await waitFor(async () =>
				expect(await findByShadowTestId(el, 'no-results')).toBeTruthy(),
			);
		});
	},
};

export const SearchMinLength: Story = {
	render: () => navigator(),
	play: async ({ canvasElement, step }) => {
		const el = getNavigator(canvasElement);
		await expectRows(el, ROOTS_OPEN);

		await step('Shorter than the minimum does not search', async () => {
			await search(el, 'Jo');
			await new Promise((r) => setTimeout(r, 250));
			await expectRows(el, ROOTS_OPEN);
		});

		await step('Reaching the minimum searches', async () => {
			await search(el, 'Joh');
			await expectRows(el, ['C:', 'Users', 'John', 'D:', 'Data', 'John']);
		});
	},
};

export const WithInvalidNodePath: Story = {
	render: () => navigator('999.888.777'),
	play: async ({ canvasElement, step }) => {
		const el = getNavigator(canvasElement);

		await step('Falls back to the open roots, nothing selected', async () => {
			await expectRows(el, ROOTS_OPEN);
			expect(selectedNames(el)).toEqual([]);
		});
	},
};

export const WithPartiallyValidNodePath: Story = {
	render: () => navigator('1.2.999'),
	play: async ({ canvasElement, step }) => {
		const el = getNavigator(canvasElement);

		await step('Opens the last valid node (C:/Windows)', async () => {
			await waitFor(async () => findRow(el, 'System'));
			await findRow(el, 'Microsoft.NET');
		});

		await step(
			'Nothing is selected, since the path is not a node',
			async () => {
				expect(selectedNames(el)).toEqual([]);
			},
		);
	},
};
