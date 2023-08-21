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

	import './config'; // I. Config
	// import './canvas'; // II. Canvas
	import './sky'; // III. Sky
	
	document.addEventListener("DOMContentLoaded", function() {
	const Owl = require('./canvas');
	console.log('Information about owl: ', Owl);
	console.log('Who is owl: ', Owl.whoIs() );
	console.log('What owl says: ',Owl.getVoice());
	console.log('What is your name, Owl: ',Owl.getName());
	});
	
	/*____________________________________________________________________________*/
	/*
	/* 							II. Bundle SCSS & CSS
	/*____________________________________________________________________________*/


	//		I. SCSS PLUGINS
	//_________________________
	

	//		II. SCSS CORE
	//_________________________

	import 'main'; // Import
