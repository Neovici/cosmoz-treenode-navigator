import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a compatibility instance to use legacy config and plugins
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: eslint.configs.recommended,
});

export default [
	// Global ignores (replacing .eslintignore)
	{
		ignores: ['coverage/**', 'node_modules/**'],
	},

	// Import the base configuration from @neovici/cfg/eslint
	...compat.config({
		extends: ['./node_modules/@neovici/cfg/eslint'],
	}),

	// Override problematic rules that are deprecated in ESLint v9
	{
		rules: {
			// Disable deprecated rules
			'valid-jsdoc': 'off',
		},
	},

	// Add globals for browser environment
	{
		languageOptions: {
			globals: {
				// Browser globals
				CustomEvent: 'readonly',
				setTimeout: 'readonly',
			},
		},
	},

	// Test files configuration
	{
		files: ['**/*.test.js'],
		languageOptions: {
			globals: {
				// Test globals
				suite: 'readonly',
				test: 'readonly',
				setup: 'readonly',
				suiteSetup: 'readonly',
				suiteTeardown: 'readonly',
				teardown: 'readonly',
			},
		},
	},

	// Add a few modern rules that might be missing
	{
		rules: {
			// Modern JavaScript best practices (as warnings to avoid breaking existing code)
			'prefer-template': 'warn',
			'prefer-rest-params': 'warn',
			'prefer-spread': 'warn',
			'prefer-destructuring': ['warn', { object: true, array: false }],
			'no-useless-constructor': 'warn',
			'no-useless-rename': 'warn',
			'arrow-body-style': 'off',
			'sort-imports': ['warn', { ignoreDeclarationSort: true }],
		},
	},

	// Project-specific overrides from original .eslintrc
	{
		rules: {
			'max-lines-per-function': 'off',
			'import/group-exports': 'off',
		},
	},
];
