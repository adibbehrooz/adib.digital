/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/


/******************************** Library Configuration ********************************
/***************************************************************************************/
	
	// Canvas
	//______________
	
	import { Canvas } from './canvas';
	const canvas = new Canvas();
	canvas.init();
	
	// Cursor
	//______________
	
	import { Cursor } from './canvas';
	const cursor = new Cursor();
	cursor.init();	
		
	// Pan
	//______________
	
	import { Pan } from './pan';
	const pan = new Pan();
	pan.init();
	
	// Night Sky
	//______________
	
	import { Sky } from './sky';
	const nightSky = new Sky();
	nightSky.init();

	//______________
	//	
	//	UNPAN
	//______________
	
	// import { UNPANS } from './unpan';
	// const unpans = new UNPANS();
	// unpans.init();