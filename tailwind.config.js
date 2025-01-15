/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				ubuntu: 'Ubuntu',
				nun: 'Nunito',
				surfer: 'Original Surfer'
			},
			colors: {
				primary: '#9cc6e8',
				'primary-content': '#19476c',
				'primary-dark': '#73aede',
				'primary-light': '#c5def2',
				secondary: '#e49ce8',
				accent: '#68196c',
				'secondary-dark': '#d973de',
				'secondary-light': '#efc5f2',
				background: '#eff0f1',
				foreground: '#fbfbfb',
				border: '#dddfe1',
				copy: '#242629',
				'copy-light': '#60676c',
				'copy-lighter': '#858d93',
				success: '#9ce89c',
				warning: '#e8e89c',
				error: '#e89c9c',
				'success-content': '#196c19',
				'warning-content': '#6c6c19',
				'error-content': '#6c1919'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [
		require('daisyui'),
		require("tailwindcss-animate")
	],
})

