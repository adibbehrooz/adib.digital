/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/


/******************************** Library Configuration ********************************
/***************************************************************************************/
	
	// SORT OF 'import' IS IMPORTANT HERE 

	// Sections
	//______________
	
	import { Sections } from './canvas';
	const sections = new Sections();
	sections.init();	

	// Canvas
	//______________
	
	import { Canvas } from './canvas';
	const canvas = new Canvas();
	canvas.init();
	
	// Cursor
	//______________
	
	// import { Cursor } from './cursor';
	// const cursor = new Cursor();
	// cursor.dynamicCursor();	

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