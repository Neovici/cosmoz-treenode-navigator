import neoviciConfig from '@neovici/cfg/eslint/index.mjs';

// Ignore configuration
const ignores = {
	ignores: ['dist/**', 'node_modules/**', 'storybook-static/*'],
};

// Custom rules specific to this project
const customRules = {
	rules: {
		'max-lines-per-function': 0,
		'import/group-exports': 0,
	},
};

export default [ignores, ...neoviciConfig, customRules];
