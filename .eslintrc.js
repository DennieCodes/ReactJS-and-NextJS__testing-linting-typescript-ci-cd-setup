module.exports = {
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:jest/recommended',
		'plugin:jest/style',
		'plugin:testing-library/react',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react'],

	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'], // Your TypeScript files extension

			// As mentioned in the comments, you should extend TypeScript plugins here,
			// instead of extending them outside the `overrides`.
			// If you don't want to extend any rules, you don't need an `extends` attribute.
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			rules: {
				'@typescript-eslint/require-await': 'error',
			},

			parserOptions: {
				project: ['./tsconfig.json'],
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
	],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
	},
};
