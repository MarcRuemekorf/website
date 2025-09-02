const prettier = 'prettier --config dev/lint/prettier.config.mjs --ignore-path dev/lint/.prettierignore --write';
const eslint = 'eslint --config dev/lint/eslint.config.mjs --fix';

const config = {
	// ==============================
	// Frontend specific
	// ==============================
	'*.{ts,tsx}': [
		// tsc runs for all files instead of only the edited ones
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		() => './node_modules/.bin/tsc --noEmit --project . --pretty',
	],

	// ==============================
	// Any javascript file
	// ==============================
	'*.{js,jsm,ts,tsx,mjs}': [eslint, prettier],

	// ==============================
	// Global files
	// ==============================
	'*.{scss,json,css,md,html,sql}': [prettier],
};

export default config;