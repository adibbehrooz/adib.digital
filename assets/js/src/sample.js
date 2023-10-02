/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/


/******************************** SAMPLE *******************************
/***********************************************************************/

	import css from './constellations/css';
	import webpack from './constellations/webpack';

	const constellation = [css, webpack];
	console.log(constellation[0].css.data);
