import { html } from 'lit-html';
import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import '../src/cosmoz-treenode-button-view';
import { adminFilesTree } from './data/tree-data';
import { ref } from 'lit-html/directives/ref.js';

export default {
	title: 'Components/CosmozTreenodeButtonView/Legacy',
	component: 'cosmoz-treenode-button-view',
	tags: ['autodocs'],
	argTypes: {
		buttonTextPlaceholder: { control: 'text' },
		dialogText: { control: 'text' },
		searchPlaceholder: { control: 'text' },
		searchGlobalPlaceholder: { control: 'text' },
		searchMinLength: { control: 'number' },
		searchDebounceTimeout: { control: 'number' },
		noReset: { control: 'boolean' },
		multiSelection: { control: 'boolean' },
		nodePath: { control: 'text' },
	},
};

const Template = (args) => {
	// @ts-expect-error legacy interface
	const tree = new DefaultTree(adminFilesTree);
	const selectedNode = args.nodePath
		? tree.getNodeByPathLocator(args.nodePath)
		: undefined;
	return html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${args.nodePath}
				.selectedNode=${selectedNode}
				button-text-placeholder=${args.buttonTextPlaceholder}
				dialog-text=${args.dialogText}
				search-placeholder=${args.searchPlaceholder}
				search-global-placeholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				.noReset=${args.noReset}
				.multiSelection=${args.multiSelection}
			></cosmoz-treenode-button-view>
		</div>
	`;
};

export const Default = Template.bind({});
Default.args = {
	buttonTextPlaceholder: 'Select a node',
	dialogText: 'Search or navigate to chosen destination',
	searchPlaceholder: 'Search...',
	searchGlobalPlaceholder: 'Click to search again but globally',
	searchMinLength: 3,
	searchDebounceTimeout: 2000,
	noReset: false,
	multiSelection: false,
	nodePath: '',
};

export const WithMultiSelection = Template.bind({});
WithMultiSelection.args = {
	...Default.args,
	multiSelection: true,
};

export const WithNoReset = Template.bind({});
WithNoReset.args = {
	...Default.args,
	noReset: true,
};

export const WithPreselectedNode = Template.bind({});
WithPreselectedNode.args = {
	...Default.args,
	nodePath: '1.2.3',
};

export const WithEvents = (args) => {
	// @ts-expect-error demo typing
	const tree = new DefaultTree(adminFilesTree);
	let logEl;
	const log = (msg: string) => {
		if (logEl) {
			logEl.textContent += '\n' + msg;
		}
	};

	return html`
		<style>
			.log {
				border: 1px solid #ccc;
				padding: 4px;
				height: 80px;
				overflow: auto;
				font-family: monospace;
				white-space: pre;
			}
		</style>
		<cosmoz-treenode-button-view
			.tree=${tree}
			.nodePath=${args.nodePath || '1.2.3'}
			button-text-placeholder=${args.buttonTextPlaceholder}
			dialog-text=${args.dialogText}
			search-placeholder=${args.searchPlaceholder}
			search-global-placeholder=${args.searchGlobalPlaceholder}
			.searchMinLength=${args.searchMinLength}
			.searchDebounceTimeout=${args.searchDebounceTimeout}
			.noReset=${args.noReset}
			.multiSelection=${args.multiSelection}
			@node-path-changed=${(e: any) =>
				log('node-path-changed → ' + e.detail.value)}
			@selected-node-changed=${(e: any) =>
				log(
					'selected-node-changed → ' +
						((e.detail.value && e.detail.value.pathLocator) || ''),
				)}
		></cosmoz-treenode-button-view>
		<pre class="log" ${ref((el) => (logEl = el))}>
Interact to see legacy events...</pre
		>
	`;
};

WithEvents.args = {
	...Default.args,
	nodePath: '1.2.3',
};
