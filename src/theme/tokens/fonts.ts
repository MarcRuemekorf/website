import { defineTokens } from '@chakra-ui/react';

// Chakra default values:
// https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/theme/tokens/fonts.ts

const fallback = [
	'-apple-system',
	'BlinkMacSystemFont',
	'"Segoe UI"',
	'Helvetica',
	'Arial',
	'sans-serif',
	'"Apple Color Emoji"',
	'"Segoe UI Emoji"',
	'"Segoe UI Symbol"',
];

export const fonts = defineTokens.fonts({
	heading: {
		value: ['Inter', ...fallback].join(', '),
	},
	body: {
		value: ['Inter', ...fallback].join(', '),
	},
	mono: {
		value: [
			'JetBrains Mono',
			'SFMono-Regular',
			'Menlo',
			'Monaco',
			'Consolas',
			'"Liberation Mono"',
			'"Courier New"',
			'monospace',
		].join(', '),
	}
});

export default fonts;
