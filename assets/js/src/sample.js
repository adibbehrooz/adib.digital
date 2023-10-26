/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/


/******************************** SAMPLE *******************************
/***********************************************************************/

	import css 			from './constellations/css';
	import webpack 		from './constellations/webpack';
	import framework	from './constellations/framework';
	import svg 			from './constellations/svg';
	import javascript 	from './constellations/javascript';
	

	export const sample = {
		'css': css,
		'webpack': webpack,
		'framework': framework,
		'javascript': javascript,
		'svg': svg,
	};

	// export const sample = [ css, webpack, framework, svg, javascript ];
	// const sample = [ css, webpack, framework, svg, javascript ];

	/*

	const lineTypes =  ['inside', 'outside'];
	
	Object.entries(sample).forEach( (entry, index) => {
		const [key, value] = entry;
		shapeLines(key, value);
	});

	function shapeLines(name, constellation) {

		// II. Line Types Loop
		lineTypes.forEach((lineType) => { 
			straightlines(lineType, name, constellation);
		});	
	}

	function straightlines(lineType, name, constellation) {		
		console.log(lineType);
		console.log(name);
		console.log(constellation);
		console.log( constellation[name].coordination[lineType].length );
		for( let i = 0; i <  constellation[name].coordination[lineType].length; i++ ) {
			console.log(  constellation[name].coordination[lineType][i].form );
		}
	}

	*/

