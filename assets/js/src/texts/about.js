/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** LANDSCAPE :: About ********************************
/************************************************************************************/


const cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const soil = {

	//____________________ I. DATA ____________________

	data: {
		// Type
		type: 'landscape',

		// WordPress
		backend : {
			ID: 0,
			postType: 'post', // Page or Post
			coverDirection: 'ltr',
		},
		// Camera Offset Positon
		relation: { 
			x: window.innerWidth / 1.1 - window.innerWidth / 2, 
			y: cameraOffset.y - window.innerHeight / 3.4 
		},
		// Constellation Scale 
		scale: { 
			outside: 0, 
			inside: 0 
		},
		lineWidth: { 
			outside: 0, 
			inside: 0 
		},
	},

	//____________________ II. COORDINATION ____________________

	coordination: {
		curve: function(canvaWidth, ctx, cameraOffset) {
			// Draw Lines
			ctx.beginPath();
			ctx.moveTo( -window.innerWidth, (cameraOffset.y / 2) * 2.7 );
			ctx.lineTo( window.innerWidth,  (cameraOffset.y / 2) * 2.7 );
		
			// Width
			ctx.lineWidth = 100;
		
			// Gradient Line
			let gradient = ctx.createLinearGradient(0, 0, canvaWidth, 0);
			gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
			gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
			gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
			ctx.strokeStyle 	= gradient;
		
			ctx.strokeStyle 	= "rgba(23, 210, 168, .01)";
			ctx.shadowBlur		= 10;
			ctx.stroke();
		},
		outside: [
			{ form: 'save' }, 
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
			{ form: 'restore'},
		],
		arc: [
			{ form: 'save' },
			{ form: 'restore'},
		],
	},
};

export default { soil };