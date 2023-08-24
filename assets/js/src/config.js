/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/


/******************************** Library Configuration ********************************
/***************************************************************************************/
	
	// I. Frame
	//__________
	
	// import { Canvas } from './canvas'; 
	// const Frame = new Canvas();
	// Frame.canvasResize();
	// Frame.canvasCursor();
	// Frame.panCanvas();
	// Frame.Draw();
		
	// II. Night Sky
	//______________
	
	//import { Sky } from './sky';
	//const nightSky = new Sky();
	//nightSky.stars();
	//nightSky.meteorShower();
	
	
	// I. PAN
	//__________
	
	import { Pan } from './pan.js';
	const pan = new Pan();
	pan._resize();
	pan._cursor();
	pan.draw();
	pan._eventListeners();
	
	

