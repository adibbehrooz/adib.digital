/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

	module.exports = {
		plugins: [
			require('cssnano')({
				preset: [
                    'default', 
                    {
                        svgo: {
						plugins: [{
							removeDoctype: false,
						}],
					},
				}],
			}),
		],
	};