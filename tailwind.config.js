/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				story: '8px 8px 32px 0 rgba(0, 60, 63, 0.12)',
			},
			colors: {
				'grey-0': '#f5f7f8',
				'green-0': '#00565b',
				'green-1': '#01989f',
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			gridTemplateAreas: {
				default: ['menu', 'searchbar', 'main', 'ads', 'footer'],
				desktop: [
					'menu searchbar pros',
					'menu main resources',
					'menu main ads',
					'. main .',
					'. footer .',
				],
				laptop: [
					'menu searchbar pros',
					'menu main resources',
					'menu main ads',
					'. main .',
					'footer footer footer',
				],
				tablet: [
					'menu searchbar',
					'menu main',
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
				default: '916px 152px auto 300px 360px',
				desktop: '152px 122px 466px auto 360px',
				laptop: '152px 122px 466px auto 360px',
				tablet: '140px 776px 300px auto 360px',
			},
		},
		screens: {
			/* => @media (min-width: 640px) {…} */
			tablet: '800px',
			/* => @media (min-width: 1024px) {…} */
			laptop: '1280px',
			/* => @media (min-width: 1440px) {…} */
			desktop: '1440px',
		},
	},
	plugins: [require('@savvywombat/tailwindcss-grid-areas')],
	variants: {
		gridTemplateAreas: ['responsive'],
	},
}
