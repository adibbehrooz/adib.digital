/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

    module.exports = {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            'postcss-import': {},
            'postcss-nested': {},
            'postcss-preset-env': {
                stage: 3,
                features: {
                    "nesting-rules": true,
                },
            },
        },
    };