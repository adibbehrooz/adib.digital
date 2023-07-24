/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Imports ********************************
/*************************************************************************/


	/*____________________________________________________________________________*/
	/*
	/* 							I. Bundle Javascript
	/*____________________________________________________________________________*/


	
	//		I. LODASH
	//_________________________

	import _ from 'lodash';

	function component() {
		const element = document.createElement('div');

		// Lodash, currently included via a script, is required for this line to work
		element.innerHTML = _.join(['Hello', 'webpack Reload On PHP 11'], ' ');
		return element;
	}

	document.body.appendChild(component());
	

	//		II. CONFIG
	//_________________________

	import './config';


	//		III. AJAX
	//_________________________

	// import './ajax';


	/*____________________________________________________________________________*/
	/*
	/* 							II. Bundle SCSS & CSS
	/*____________________________________________________________________________*/


	//		I. PLUGINS
	//_________________________



	//		II. CORE
	//_________________________

	import 'index'; // Import index.scss
	