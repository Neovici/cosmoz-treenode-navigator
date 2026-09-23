import remarkGfm from 'remark-gfm';

export default {
	stories: [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		{
			name: '@storybook/addon-docs',
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
		'@storybook/addon-vitest',
		// Keeps light-dark() intact through vite's CSS minifier (tokens v4).
		'@neovici/cfg/storybook/preset.mjs',
	],
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
};
