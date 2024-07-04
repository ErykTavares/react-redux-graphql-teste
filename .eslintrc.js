module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'vitest.config.ts'],
	parser: '@typescript-eslint/parser',
	overrides: [
		{
			files: ['src/**/*.ts', 'src/**/*.tsx', 'vitest.config.ts'],
		},
	],
	plugins: ['react', 'react-hooks', 'react-refresh'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
	},
};
