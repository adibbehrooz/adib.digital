/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATIONS ********************************
/********************************************************************************/

	// I. Constellations
	import css 			from './constellations/css';
	import webpack 		from './constellations/webpack';
	import framework	from './constellations/framework';
	import svg 			from './constellations/svg';
	import javascript 	from './constellations/javascript';
	import wordpress 	from './constellations/wordpress';
	import magento 		from './constellations/magento';
	import php 			from './constellations/php';
	import apache 		from './constellations/apache';
	import linux 		from './constellations/linux';

	// II. Landscape
	import pyramids 	from './landscape/pyramids';
	import shore 		from './landscape/shore';
	import soil 		from './landscape/soil';

	//I III. Text
	import about 		from './texts/about';
	import projects 	from './texts/projects';
	import contact 		from './texts/contact';
	import source 		from './texts/source';

	export const constellations = {
		// Constellations
		'css': css,
		'webpack': webpack,
		'framework': framework,
		'javascript': javascript,
		'svg': svg,
		'wordpress': wordpress,
		'magento': magento,
		'php': php,
		'apache': apache,
		'linux': linux,

		// Texts
		'about': about,		
		'projects': projects,		
		'contact': contact,		
		'source': source,		
	};

	export const landscape = {
		'pyramids': pyramids,
		'soil':	soil,
		'shore': shore,
	};

