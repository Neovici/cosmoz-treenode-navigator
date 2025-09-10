export default {
	stories: [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	addons: ['@storybook/addon-docs'],
	docs: {
		autodocs: 'tag',
	},
};
