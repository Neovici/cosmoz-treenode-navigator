import { html } from 'lit-html';
import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import '../src/cosmoz-treenode-navigator';
import { adminFilesTree } from './data/tree-data';

export default {
	title: 'Components/CosmozTreenodeNavigator/Legacy',
	component: 'cosmoz-treenode-navigator',
	tags: ['autodocs'],
	argTypes: {
		searchPlaceholder: { control: 'text' },
		searchGlobalPlaceholder: { control: 'text' },
		searchMinLength: { control: 'number' },
		searchDebounceTimeout: { control: 'number' },
		opened: { control: 'boolean' },
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
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.nodePath=${args.nodePath}
				.selectedNode=${selectedNode}
				.searchPlaceholder=${args.searchPlaceholder}
				.searchGlobalPlaceholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				.opened=${args.opened}
			></cosmoz-treenode-navigator>
		</div>
	`;
};

export const Default = Template.bind({});
Default.args = {
	searchPlaceholder: 'Search...',
	searchGlobalPlaceholder: 'Click to search again but globally',
	searchMinLength: 3,
	searchDebounceTimeout: 2000,
	opened: true,
	nodePath: '',
};

export const WithCustomPlaceholders = Template.bind({});
WithCustomPlaceholders.args = {
	...Default.args,
	searchPlaceholder: 'Enter search term...',
	searchGlobalPlaceholder: 'Search in the entire tree',
};
