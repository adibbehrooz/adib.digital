/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

module.exports = {
	content: {
		enabled: true,
		content: [
			'./*.php',
			'./assets/**/*.{php, css, js, png, svg, jpg, scss, map, ico}',
			'./dist/*.{js, map}',
			'./framework/*.php',
			'./inc/*.php',
			'./misc/*.*',
			'./woocommerce/*.php',
		],
	},	
	darkMode: true, // or 'media' or 'class'
	// prefix: 'fc-', // Framework Class
	theme: {
		screens: {

			'xs': '475px',
			// => @media (min-width: 475px) { ... }

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
			gridTemplateColumns: {
				'16': 'repeat(16, minmax(0, 1fr))', // 16 Columns
			},
			// Font Family
			fontFamily: {
				'montserrat'	: ['Montserrat'],
				'Jetbrains'		: ['JetBrains Mono', 'monospace'],
				'roboto'		: ['Roboto'],
				'Imbue'			: ['"Imbue"', 'serif'],	
				'robotoMono'	: ['"Roboto Mono"', 'monospace'],
				'Inconsolata'	: ['Inconsolata', 'monospace'], 
			},
		},
	},
	variants: {
		extend: {},
		theme: {
			screens: {

				'xsmall': {'min': '475px', 'max': '639px'},
				// => @media (min-width: 475px and max-width: 639px) { ... }

				'small': {'min': '640px', 'max': '767px'},
				// => @media (min-width: 640px and max-width: 767px) { ... }
		  
				'medium': {'min': '768px', 'max': '1023px'},
				// => @media (min-width: 768px and max-width: 1023px) { ... }
		  
				'large': {'min': '1024px', 'max': '1279px'},
				// => @media (min-width: 1024px and max-width: 1279px) { ... }
		  
				'xlarge': {'min': '1280px', 'max': '1535px'},
				// => @media (min-width: 1280px and max-width: 1535px) { ... }
		  
				'2xlarge': {'min': '1536px', 'max': '2300px'},
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

		container: {
			center: true,
		},
	},
	plugins: [],
}
