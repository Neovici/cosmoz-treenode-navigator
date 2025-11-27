import { html } from 'lit-html';
import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import '../src/cosmoz-treenode-button-view';
import { adminFilesTree } from './data/tree-data';

export default {
	title: 'Components/CosmozTreenodeButtonView',
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
	},
};

const Template = (args) => {
	const tree = new DefaultTree(adminFilesTree);
	return html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
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
Default.args! = {
	buttonTextPlaceholder: 'Select a node',
	dialogText: 'Search or navigate to chosen destination',
	searchPlaceholder: 'Search...',
	searchGlobalPlaceholder: 'Click to search again but globally',
	searchMinLength: 3,
	searchDebounceTimeout: 2000,
	noReset: false,
	multiSelection: false,
};

export const WithMultiSelection = Template.bind({});
WithMultiSelection.args! = {
	buttonTextPlaceholder: 'Select multiple nodes',
	dialogText: 'Search or navigate to chosen destination',
	searchPlaceholder: 'Search...',
	searchGlobalPlaceholder: 'Click to search again but globally',
	searchMinLength: 3,
	searchDebounceTimeout: 2000,
	noReset: false,
	multiSelection: true,
};

export const WithNoReset = Template.bind({});
WithNoReset.args! = {
	buttonTextPlaceholder: 'Select a node (no reset)',
	dialogText: 'Search or navigate to chosen destination',
	searchPlaceholder: 'Search...',
	searchGlobalPlaceholder: 'Click to search again but globally',
	searchMinLength: 3,
	searchDebounceTimeout: 2000,
	noReset: true,
	multiSelection: false,
};

const TemplateWithPreselection = (args) => {
	const tree = new DefaultTree(adminFilesTree);
	return html`
		<div style="padding: 20px;">
			<h3>Testing Navigation Behavior</h3>
			<p>
				This story demonstrates that the selected node path should remain
				visible even when navigating through the tree dialog.
			</p>
			<ol>
				<li>
					The button shows a pre-selected path: "C: / Program Files / Git"
				</li>
				<li>Click the button to open the dialog</li>
				<li>Click on folders or arrows to navigate around</li>
				<li>
					<strong>Expected:</strong> The button text should remain "C: / Program
					Files / Git"
				</li>
				<li>
					<strong>Bug (if present):</strong> The button text changes to "Select
					a node"
				</li>
			</ol>
			<cosmoz-treenode-button-view
				.tree=${tree}
				button-text-placeholder=${args.buttonTextPlaceholder}
				dialog-text=${args.dialogText}
				search-placeholder=${args.searchPlaceholder}
				search-global-placeholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				.noReset=${args.noReset}
				.multiSelection=${args.multiSelection}
				node-path="1.5.7"
			></cosmoz-treenode-button-view>
		</div>
	`;
};

export const WithPreselectedNode = TemplateWithPreselection.bind({});
WithPreselectedNode.args! = {
	buttonTextPlaceholder: 'Select a node',
	dialogText: 'Search or navigate to chosen destination',
	searchPlaceholder: 'Search...',
	searchGlobalPlaceholder: 'Click to search again but globally',
	searchMinLength: 3,
	searchDebounceTimeout: 2000,
	noReset: false,
	multiSelection: false,
};
