/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATION :: CSS ********************************
/**************************************************************************************/

const cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const css = {

	//____________________ I. DATA ____________________

	data: {
		// WordPress
		backend : {
			ID: 61,
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
			outside: 4, 
			inside: 4 
		},
		lineWidth: { 
			outside: .1, 
			inside: .1 
		},
	},

	//____________________ II. COORDINATION ____________________

	coordination: {
		curve: function(ctx) {
			ctx.save();
			ctx.restore();
		},
		outside: [
			{ form: 'save' }, 
				// Stroke
				{ form: 'strokeStyle', value: "rgba( 255, 255, 255, 0)" }, 
				// Fill
				{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'save' }, 
					{ form: 'beginPath' }, 
					{ x0: 0.000,   	x1: 19.232, form: 'moveTo' }, 
					{ x0: 9.635,   	x1: 23.250, form: 'lineTo' }, 
					{ x0: 20.800,   x1: 19.232, form: 'lineTo' },   
					{ x0: 24.000,   x1: 0.7500, form: 'lineTo' },   
					{ x0: 3.630,   	x1: 0.7500, form: 'lineTo' },  
					{ x0: 2.815,   	x1: 4.8680, form: 'lineTo' }, 
					{ x0: 19.485,   x1: 4.8680, form: 'lineTo' }, 
					{ x0: 18.960,   x1: 7.5150, form: 'lineTo' }, 
					{ x0: 2.2750,   x1: 7.5150, form: 'lineTo' }, 
					{ x0: 1.4750,   x1: 11.633, form: 'lineTo' }, 
					{ x0: 18.145,   x1: 11.633, form: 'lineTo' }, 
					{ x0: 17.205,   x1: 16.510, form: 'lineTo' }, 
					{ x0: 10.500,   x1: 18.739, form: 'lineTo' },  
					{ x0: 4.6800,   x1: 16.510, form: 'lineTo' }, 
					{ x0: 5.0800,   x1: 14.471, form: 'lineTo' }, 
					{ x0: 1.4750,   x1: 14.471, form: 'lineTo' }, 
					{ x0: 0.0000,   x1: 19.142, form: 'lineTo' }, 
					{ form: 'closePath'},
					{ form: 'fill' }, 
					{ form: 'stroke' }, 
				{ form: 'restore' }, 
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
				{ x0: 3.175,   	x1: 2.750, form: 'moveTo' }, 
				{ x0: 21.500,   x1: 2.750, form: 'lineTo' }, 
				{ x0: 18.700,   x1: 17.900, form: 'lineTo' }, 
				{ x0: 9.700,   	x1: 21.000, form: 'lineTo' }, 
				{ x0: 1.700,   	x1: 17.500, form: 'lineTo' }, 
				{ x0: 20.175,  	x1: 9.750, form: 'moveTo' },  
				{ x0: 2.175,  	x1: 9.750, form: 'lineTo' }, 
				// Stroke
				{ form: 'lineWidth', value: '0.2' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, .5)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, .2)' },
			{ form: 'restore'},
		],
		arc: [
			{ form: 'save' },
				{ x0: 3.175,   	x1: 2.750  },  
				{ x0: 21.500,   x1: 2.750  },  
				{ x0: 18.700,   x1: 17.900 },  
				{ x0: 9.700,   	x1: 21.000 },  
				{ x0: 1.700,   	x1: 17.500 },  
				{ x0: 2.175,  	x1: 9.7500 },  
				{ x0: 20.175,  	x1: 9.750  },  
			{ form: 'restore'},
		],
	},
};

export default { css };