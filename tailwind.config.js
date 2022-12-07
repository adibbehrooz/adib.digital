/*
	Theme Name: prsolutions Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: {
		enabled: true,
		content: [
			'./*.php',
			'./assets/**/*.{php, css, js, png, svg, jpg}',
			'./dist/*.js',
			'./framework/*.php',
			'./inc/*.php',
			'./misc/*.*',
			'./woocommerce/*.php',
		],
	},	
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			'usm': {'max': '639px'},
			// => @media (max-width: 639px) { ... }

			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

		},

		// Font size
		fontSize: {

			// Default
			'xs': [ '0.64rem', {
				lineHeight: '1.5rem',
			}],
		
			'sm': [ '0.8rem', {
				lineHeight: '1.5rem',	
			}],
		
			'base': [ '1rem', {
				lineHeight: '2rem',
			}],
		
			'md': [ '1.25rem', {
				lineHeight: '2.5rem',
			}],
		
			'lg': [ '1.563rem', {
				lineHeight: '3rem',
			}],
		
			'xl': [ '1.953rem', {
				lineHeight: '3.5rem',
			}],
		
			'2xl': [ '2.441rem', {
				lineHeight: '4rem',
			}],
		
			'3xl': [ '3.052rem', {
				lineHeight: '4.5rem',
			}],
		
			'4xl': [ '3.815rem', {
				lineHeight: '4.5rem',
			}],

			// Expand
			'xsmall': [ '2rem', {
				lineHeight: '1.5rem',
			}],
		
			'small': [ '2rem', {
				lineHeight: '1.5rem',	
			}],
		
			'basic': [ '3rem', {
				lineHeight: '2rem',
			}],
		
			'medium': [ '4rem', {
				lineHeight: '3rem',
			}],
		
			'large': [ '5rem', {
				lineHeight: '3rem',
			}],
		
			'xlarge': [ '6rem', {
				lineHeight: '3rem',
			}],
		
			'2xlarge': [ '7rem', {
				lineHeight: '3rem',
			}],
		
			'3xlarge': [ '9rem', {
				lineHeight: '4.5rem',
			}],
		
			'4xlarge': [ '10rem', {
				lineHeight: '4.5rem',
			}],			
		},
		extend: {
			// Font Family
			fontFamily: {
				'montserrat': ['Montserrat'],
				'roboto': ['Roboto'],
				'Imbue': ['"Imbue"', 'serif'],	
				'robotoMono': ['"Roboto Mono"', 'monospace'],
			},
		},
	},
	variants: {
		extend: {},
		theme: {
			screens: {

			  'small': '640px', // sm
			  // => @media (min-width: 640px) { ... }
		
			  'medium': '768px', // md
			  // => @media (min-width: 768px) { ... }
		
			  'large': '1024px', // lg
			  // => @media (min-width: 1024px) { ... }
		
			  'x-large': '1280px', // xl
			  // => @media (min-width: 1280px) { ... }
		
			  '2x-large': '1536px', // 2xl
			  // => @media (min-width: 1536px) { ... }
			},

			spacing: {
				"quarter": "0.375rem",
				"half": "0.75rem",
				"one": "1.5rem",
				"two": "3rem",
				"three": "4.5rem",
				"four": "6rem",
				"five": "7.5rem",
				"six": "9rem",
				"eight": "12rem",
				"twelve": "18rem",
				"sixteen": "24rem"
			},
		},

		gridTemplateColumns: {
			'16': 'repeat(16, minmax(0, 1fr))', // 16 Columns
		},

		gridTemplateRows: {
		},

		container: {
			center: true,
		},
	},
	plugins: [],
}