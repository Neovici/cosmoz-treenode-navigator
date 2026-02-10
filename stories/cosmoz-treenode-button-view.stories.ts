import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { findByShadowTestId } from 'shadow-dom-testing-library';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-treenode-button-view';
import { adminFilesTree } from './data/tree-data';

interface StoryArgs {
	searchMinLength: number;
	searchDebounceTimeout: number;
	showReset: boolean;
	nodePath: string;
}

const tree = new DefaultTree(adminFilesTree);

const meta: Meta<StoryArgs> = {
	title: 'Components/CosmozTreenodeButtonView',
	component: 'cosmoz-treenode-button-view',
	tags: ['autodocs'],
	argTypes: {
		searchMinLength: { control: 'number' },
		searchDebounceTimeout: { control: 'number' },
		showReset: { control: 'boolean' },
		nodePath: { control: 'text' },
	},
	args: {
		searchMinLength: 3,
		searchDebounceTimeout: 2000,
		showReset: false,
		nodePath: '',
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
	render: (args) => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${args.nodePath || ''}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				?show-reset=${args.showReset}
			></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement;

		await step('Renders with placeholder text', async () => {
			const button = await findByShadowTestId(el, 'open-button');
			expect(button).toBeTruthy();
			expect(button?.textContent?.trim()).toContain('Select a node');
		});
	},
};

export const WithPreselectedNode: Story = {
	args: {
		nodePath: '1.2.3',
	},
	render: (args) => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${args.nodePath || ''}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				?show-reset=${args.showReset}
			></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement;

		await step('Button renders selected path', async () => {
			await waitFor(async () => {
				const button = await findByShadowTestId(el, 'open-button');
				// nodePath '1.2.3' corresponds to 'C: / Windows / System' in the tree
				expect(button?.textContent?.trim()).toContain('C: / Windows / System');
			});
		});
	},
};
