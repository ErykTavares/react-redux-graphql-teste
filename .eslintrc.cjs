module.exports = {
	settings: {
		react: {
			version: 'detect',
		},
	},
	root: true,
	env: { node: true, browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.js', 'vitest.config.ts'],
	parser: '@typescript-eslint/parser',
	overrides: [
		{
			files: ['src/**/*.ts', 'src/**/*.tsx', 'vitest.config.ts'],
		},
	],
	plugins: ['react', 'react-hooks', 'react-refresh', '@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		project: './tsconfig.app.json',
	},
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'@typescript-eslint/no-explicit-any': 'off',
	},
};
