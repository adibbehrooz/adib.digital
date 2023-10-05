/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATIONS ********************************
/********************************************************************************/

	import css 			from './constellations/css';
	import webpack 		from './constellations/webpack';
	import framework	from './constellations/framework';
	import svg 			from './constellations/svg';
	import javascript 	from './constellations/javascript';

	import mountains 	from './landscape/mountains';
	import shore 		from './landscape/shore';
	import ocean 		from './landscape/ocean';

	export const constellations = {
		'css': 			css,
		'webpack':		webpack,
		'framework': 	framework,
		'javascript': 	javascript,
		'svg': 			svg,
	};

	export const landscape = {
		'mountains': 	mountains,
		'shore':		shore,
		'ocean':		ocean,
		// 'aurora':		aurora
	};

