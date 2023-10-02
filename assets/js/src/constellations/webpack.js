/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATION :: WEBPACK ********************************
/******************************************************************************************/

const cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const webpack = {

	//____________________ I. DATA ____________________

	data: {
		// WordPress
		backend : {
            ID: 55,
			postType: 'post', // Page or Post
			coverDirection: 'ltr',
		},
		// Camera Offset Positon
		relation: { 
            x: window.innerWidth / 1.21 - window.innerWidth / 2, 
            y: cameraOffset.y - window.innerHeight / 2.02 
		},
		// Constellation Scale 
        scale: { 
            outside: 4.1, 
            inside: 4.5 
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
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, .1)" }, 
				{ form: 'beginPath' }, 
					{ x0: 0, x1: 0,  form: 'moveTo' },
					{ x0: -40.763, x1: 0,  form: 'lineTo' },
					{ x0: -43.596, x1: -30.66,  form: 'lineTo' },
					{ x0: -43.535999999999994, x1: -30.468,  form: 'lineTo' },
					{ x0: -8.91, x1: -30.468,  form: 'lineTo' },
					{ x0: -10.04, x1: -43.437,  form: 'lineTo' },
					{ x0: -21.085, x1: -46.620999999999995,  form: 'lineTo' },
					{ x0: -32.299, x1: -43.388999999999996,  form: 'lineTo' },
					{ x0: -32.972, x1: -35.53999999999999,  form: 'lineTo' },
					{ x0: -43.152, x1: -35.53999999999999,  form: 'lineTo' },
					{ x0: -41.697, x1: -51.224999999999994,  form: 'lineTo' },
					{ x0: -21.085000000000004, x1: -57.077999999999996,  form: 'lineTo' },
					{ x0: -0.4730000000000061, x1: -51.224999999999994,  form: 'lineTo' },
					{ x0: 2.363999999999994, x1: -20.443999999999996,  form: 'lineTo' },
					{ x0: -34.378, x1: -20.443999999999996,  form: 'lineTo' },
					{ x0: -33.91, x1: -10.179999999999996,  form: 'lineTo' },
					{ x0: -8.406999999999996, x1: -10.179999999999996,  form: 'lineTo' },
					{ x0: -8.031999999999996, x1: -16.054999999999996,  form: 'lineTo' },
					{ x0: 2.239, x1: -16.054999999999996,  form: 'lineTo' },
				{ form: 'closePath' }, 
				{ form: 'fill' },
				{ form: 'stroke' }, 
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
				{ x0: -28.596, x1: -33.66, form: 'moveTo' },
				{ x0: -14.596, x1: -39.66,	form: 'lineTo' },
				{ x0: -3.5960, x1: -33.66,	form: 'lineTo' },
				{ x0: -2.9960, x1: -19.66,	form: 'lineTo' },
				{ x0: -28.5960, x1: -19.66,	form: 'lineTo' },
				{ x0: -27.2960, x1: -3.66,	form: 'lineTo' },
				{ x0: -4.2960, x1: -3.66,	form: 'lineTo' },
				// Stroke
				{ form: 'lineWidth', value: '0.1' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, .5)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, .2)' },
			{ form: 'restore'},
		],
		arc: [
			{ form: 'save' }, 
				{ x0: -14.596, x1: -16.66 },
				{ x0: -7.596, x1: -19.66 },
				{ x0: -1.596, x1: -16.66 },
				{ x0: -1.196, x1: -9.66 },
				{ x0: -14.196, x1: -9.66 },
				{ x0: -13.896, x1: -1.96 },
				{ x0: -1.200, x1: -1.96  },
			{ form: 'restore' },	
		],
	},
};

export default { webpack };