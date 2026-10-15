import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { findByShadowTestId } from 'shadow-dom-testing-library';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-treenode-navigator';
import { adminFilesTree } from './data/tree-data';
import { expectRows, findRow, search } from './test-helpers';

interface StoryArgs {
	searchMinLength: number;
	searchDebounceTimeout: number;
	opened: boolean;
	nodePath: string;
}

const tree = new DefaultTree(adminFilesTree);

const meta: Meta<StoryArgs> = {
	title: 'Components/CosmozTreenodeNavigator',
	component: 'cosmoz-treenode-navigator',
	tags: ['autodocs'],
	argTypes: {
		searchMinLength: { control: 'number' },
		searchDebounceTimeout: { control: 'number' },
		opened: { control: 'boolean' },
		nodePath: { control: 'text' },
	},
	args: {
		searchMinLength: 3,
		searchDebounceTimeout: 500,
		opened: true,
		nodePath: '',
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
	render: (args) => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.nodePath=${args.nodePath}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				.opened=${args.opened}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		await step('Instantiates the element', async () => {
			expect(el.tagName).toBe('COSMOZ-TREENODE-NAVIGATOR');
		});

		await step('Sets proper search placeholder', async () => {
			await waitFor(async () => {
				const searchInput = await findByShadowTestId(el, 'search-input');
				const input = searchInput.shadowRoot?.querySelector('input');
				expect(input?.placeholder).toBe('Search...');
			});
		});
	},
};

export const WithCustomSearchMinLength: Story = {
	args: {
		searchMinLength: 2,
		searchDebounceTimeout: 1000,
		opened: true,
	},
	render: (args) => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				.opened=${args.opened}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		await step('Sets search placeholder via i18next', async () => {
			await waitFor(async () => {
				const searchInput = await findByShadowTestId(el, 'search-input');
				const input = searchInput.shadowRoot?.querySelector('input');
				expect(input?.placeholder).toBe('Search...');
			});
		});
	},
};

const frame = (content: unknown) =>
	html`<div style="height: 480px; width: 500px; padding: 10px;">
		${content}
	</div>`;

/** Browse: no current node, so every root is open. Chevrons expand, a click highlights. */
export const Browse: Story = {
	render: () =>
		frame(
			html`<cosmoz-treenode-navigator
				.tree=${tree}
				.opened=${true}
			></cosmoz-treenode-navigator>`,
		),
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;
		await findRow(el, 'D:');
	},
};

/** Opens on the current node: it is highlighted, its ancestors and its own children are open, and the path shows where it sits. */
export const OpenOnCurrentNode: Story = {
	render: () =>
		frame(
			html`<cosmoz-treenode-navigator
				.tree=${tree}
				.nodePath=${'1.100.300'}
				.opened=${true}
			></cosmoz-treenode-navigator>`,
		),
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;
		await findByShadowTestId(el, 'path');
		await waitFor(async () => findRow(el, 'Music'));
	},
};

/** Search: matches show in place, under their ancestors, with every ancestor open. */
export const Searching: Story = {
	render: () =>
		frame(
			html`<cosmoz-treenode-navigator
				.tree=${tree}
				.searchDebounceTimeout=${100}
				.opened=${true}
			></cosmoz-treenode-navigator>`,
		),
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;
		await findRow(el, 'D:');
		await search(el, 'Music');
		await expectRows(el, [
			'C:',
			'Users',
			'Default',
			'Music',
			'John',
			'Music',
			'Public',
			'Public Music',
		]);
	},
};

const wideTree = new DefaultTree({
	1: {
		name: 'Stores',
		pathLocator: '1',
		children: Object.fromEntries(
			Array.from({ length: 100_000 }, (_, i) => [
				i + 2,
				{
					name: `Store ${String(i + 1).padStart(6, '0')}`,
					pathLocator: `1.${i + 2}`,
				},
			]),
		),
	},
});

/** A node with 100,000 children: sorted once, rendered virtualized. */
export const LargeTree: Story = {
	render: () =>
		frame(
			html`<cosmoz-treenode-navigator
				.tree=${wideTree}
				.nodePath=${'1.50001'}
				.opened=${true}
			></cosmoz-treenode-navigator>`,
		),
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;
		await waitFor(async () => findRow(el, 'Store 050000'), { timeout: 3000 });
	},
};
