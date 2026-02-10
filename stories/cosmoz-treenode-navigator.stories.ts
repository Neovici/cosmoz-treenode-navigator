import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { findByShadowTestId } from 'shadow-dom-testing-library';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-treenode-navigator';
import { adminFilesTree } from './data/tree-data';

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
		searchDebounceTimeout: 2000,
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
