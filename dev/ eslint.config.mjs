import nextPlugin from '@next/eslint-plugin-next';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';

const projectRules = {
	'@next/next/no-img-element': 'off',
	'linebreak-style': ['error', 'unix'],
	'react/jsx-pascal-case': ['error'],
	'react/button-has-type': ['error'],
	curly: ['error', 'all'],
	'@typescript-eslint/no-unused-vars': 'off',
	'unused-imports/no-unused-imports': 'error',
	'react-hooks/exhaustive-deps': 'off',
	'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
	'unused-imports/no-unused-vars': [
		'warn',
		{
			vars: 'all',
			varsIgnorePattern: '^_',
			args: 'after-used',
			argsIgnorePattern: '^_',
		},
	],
};

const eslintConfig = [
	{
		plugins: {
			'@typescript-eslint': typescriptPlugin,
		},
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				warnOnUnsupportedTypeScriptVersion: false,
			},
		},
		rules: {
			...typescriptPlugin.configs.strict.rules,
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/explicit-function-return-type': [
				'error',
				{
					allowedNames: ['Page', 'generateMetadata', 'Layout'],
				},
			],
		},
	},
	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'@next/next': nextPlugin,
			'unused-imports': unusedImports,
		},
		rules: {
			...reactPlugin.configs['jsx-runtime'].rules,
			...reactHooksPlugin.configs.recommended.rules,
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			...projectRules,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		ignores: ['.next/', 'src/types/'],
	},
];

export default eslintConfig;
