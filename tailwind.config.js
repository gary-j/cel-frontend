/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./public/**/*.{ico,json,png,svg}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/tw-elements/dist/js/**/*.js',
	],
	theme: {
		extend: {
			boxShadow: {
				story: '8px 8px 32px 0 rgba(0, 60, 63, 0.12)',
			},
			colors: {
				alto: {
					50: '#f8f8f8',
					100: '#f0f0f0',
					200: '#e4e4e4',
					300: '#d5d5d5' /* <-- this one */,
					400: '#b4b4b4',
					500: '#9a9a9a',
					600: '#818181',
					700: '#6a6a6a',
					800: '#5a5a5a',
					900: '#4e4e4e',
				},
				'blue-stone': {
					50: '#ecfffe',
					100: '#bdfcff',
					200: '#7bf8ff',
					300: '#31f2ff',
					400: '#00f8ff',
					500: '#00edec',
					600: '#00bbbf',
					700: '#009197',
					800: '#007077',
					900: '#00565b' /* <-- this one */,
				},
				carnation: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#ffc9ca',
					300: '#fda4a5',
					400: '#f95d5f' /* <-- this one */,
					500: '#f14244',
					600: '#de2426',
					700: '#bb1a1c',
					800: '#9b191b',
					900: '#801c1d',
				},
				'cod-gray': {
					50: '#f7f7f7',
					100: '#e3e3e3',
					200: '#c8c8c8',
					300: '#a4a4a4',
					400: '#818181',
					500: '#666666',
					600: '#515151',
					700: '#434343',
					800: '#383838',
					900: '#191919' /* <-- this one */,
				},
				'pastel-green': {
					50: '#effce9',
					100: '#dcf7d0',
					200: '#bcf0a6',
					300: '#99e67b' /* <-- this one */,
					400: '#6cd546',
					500: '#4cba28',
					600: '#38941c',
					700: '#2d711a',
					800: '#275a1a',
					900: '#244d1a',
				},
				'persian-green': {
					50: '#effefd',
					100: '#c8fffa',
					200: '#91fef8',
					300: '#52f6f3',
					400: '#1ee2e3',
					500: '#05c3c7',
					600: '#01989f' /* <-- this one */,
					700: '#06787f',
					800: '#0a5f65',
					900: '#0e4e53',
				},
				porcelain: {
					50: '#f5f7f8' /* <-- this one */,
					100: '#ecf0f2',
					200: '#d6dee1',
					300: '#b1c2c8',
					400: '#87a1a9',
					500: '#68868f',
					600: '#536c76',
					700: '#445860',
					800: '#3b4a51',
					900: '#344046',
				},
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				base: [
					'14px',
					{
						lineHeight: '28px',
						letterSpacing: '0.4px',
						fontWeight: '300',
					},
				],
				buttonSubtitle: [
					'14px',
					{
						lineHeight: '24px',
						fontWeight: '400',
					},
				],
				buttonTitle: [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: '600',
					},
				],
				resources: [
					'14px',
					{
						lineHeight: '14px',
						fontWeight: '600',
					},
				],
			},
			gridTemplateAreas: {
				default: ['navbar', 'searchbar', 'main', 'ads', 'footer'],
				desktop: [
					'navbar searchbar pros',
					'navbar main pros',
					'navbar main resources',
					'navbar main ads',
					'. main .',
					'. footer .',
				],
				laptop: [
					'navbar searchbar pros',
					'navbar main pros',
					'navbar main resources',
					'navbar main ads',
					'. main .',
					'footer footer footer',
				],
				tablet: [
					'navbar searchbar',
					'navbar main',
					'ads main',
					'. main',
					'footer footer',
				],
			},
			gridTemplateColumns: {
				default: '1fr',
				desktop: '348px 1fr 348px',
				laptop: '324px 1fr 324px',
				tablet: '308px 1fr',
			},
			gridTemplateRows: {
				default: '80px 152px auto 300px 360px',
				desktop: '100px 52px 122px 466px auto 360px',
				laptop: '100px 52px 122px 466px auto 360px',
				tablet: '140px 776px 300px auto 360px',
			},
			outlineOffset: {
				m2: '-2px',
			},
		},
		screens: {
			/* => @media (min-width: 800px) {…} */
			tablet: '800px',
			/* => @media (min-width: 1280px) {…} */
			laptop: '1280px',
			/* => @media (min-width: 1440px) {…} */
			desktop: '1440px',
		},
	},
	plugins: [
		require('@savvywombat/tailwindcss-grid-areas'),
		require('tw-elements/dist/plugin'),
	],
	variants: {
		gridTemplateAreas: ['responsive'],
	},
}
