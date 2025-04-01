import { html } from 'lit-html';
import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import '../src/cosmoz-treenode-navigator';
import { adminFilesTree } from './data/tree-data';

export default {
	title: 'Components/CosmozTreenodeNavigator',
	component: 'cosmoz-treenode-navigator',
	tags: ['autodocs'],
	argTypes: {
		searchPlaceholder: { control: 'text' },
		searchGlobalPlaceholder: { control: 'text' },
		searchMinLength: { control: 'number' },
		searchDebounceTimeout: { control: 'number' },
		opened: { control: 'boolean' },
	},
};

const Template = (args) => {
	const tree = new DefaultTree(adminFilesTree);
	return html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
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
Default.args! = {
	searchPlaceholder: 'Search...',
	searchGlobalPlaceholder: 'Click to search again but globally',
	searchMinLength: 3,
	searchDebounceTimeout: 2000,
	opened: true,
};

export const WithCustomPlaceholders = Template.bind({});
WithCustomPlaceholders.args! = {
	searchPlaceholder: 'Enter search term...',
	searchGlobalPlaceholder: 'Search in the entire tree',
	searchMinLength: 2,
	searchDebounceTimeout: 1000,
	opened: true,
};
