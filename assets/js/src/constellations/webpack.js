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
		// Type
		type: 'constellations',
		
		// WordPress
		backend : {
			ID: 109,
			postType: 'post', // Page or Post
			postTitle: 'Webpack',
			postSlug: 'webpack',
			coverDirection: '--ltr',
		},
		// Camera Offset Positon
		relation: { 
            x: window.innerWidth / 1.21 - window.innerWidth / 2, 
            y: cameraOffset.y - window.innerHeight / 2.02 
		},
		// Constellation Scale 
        scale: { 
            outside: 4.1, 
            inside: 4.5, 
			boundary: 1
        },
        lineWidth: { 
            outside: .1, 
            inside: .1,
			boundary: 1
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
				{ form: 'strokeStyle', value: "rgba( 255, 255, 255, 0)" }, // 0.5
				// Fill
				{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  // .1
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'save' }, 
					{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  // .1
					{ form: 'lineWidth', value: 0.036011 }, 
					{ form: 'beginPath' }, 
						{ x0:24.765896,  x1:21.456033,  form: 'moveTo' },
						{ x0:13.778953000000001,  x1:27.671524,  form: 'lineTo' },
						{ x0:13.778953000000001,  x1:22.831661,  form: 'lineTo' },
						{ x0:20.624636000000002,  x1:19.064907,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:25.518523000000002,  x1:20.775432000000002,  form: 'moveTo' },
						{ x0:25.518523000000002,  x1:7.7790779,  form: 'lineTo' },
						{ x0:21.499695000000003,  x1:10.101786,  form: 'lineTo' },
						{ x0:21.499695000000003,  x1:18.456328,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:1.8269196,  x1:21.456033,  form: 'moveTo' },
						{ x0:12.81386,  x1:27.671524,  form: 'lineTo' },
						{ x0:12.81386,  x1:22.831661,  form: 'lineTo' },
						{ x0:5.9645745,  x1:19.064907,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:1.0742942,  x1:20.775432,  form: 'moveTo' },
						{ x0:1.0742942,  x1:7.7790779,  form: 'lineTo' },
						{ x0:5.0931101,  x1:10.101786,  form: 'lineTo' },
						{ x0:5.0931101,  x1:18.456328,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:1.5460332,  x1:6.9364181,  form: 'moveTo' },
						{ x0:12.81386,  x1:0.56248086,  form: 'lineTo' },
						{ x0:12.81386,  x1:5.2403071,  form: 'lineTo' },
						{ x0:5.5936619,  x1:9.212315,  form: 'lineTo' },
						{ x0:5.5360347,  x1:9.2446886,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:25.046772,  x1:6.9364181,  form: 'moveTo' },
						{ x0:13.778953,  x1:0.56248086,  form: 'lineTo' },
						{ x0:13.778953,  x1:5.2403071,  form: 'lineTo' },
						{ x0:20.999144,  x1:9.2087097,  form: 'lineTo' },
						{ x0:21.056784,  x1:9.2410837,  form: 'lineTo' },
					{ form: 'closePath' }, 
					{ form: 'fill' }, 
					{ form: 'stroke' }, 
					{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" }, // .2
					{ form: 'lineWidth', value: 0.036011 }, 
					{ form: 'beginPath' }, 
						{ x0:12.81386,  x1:21.729723,  form: 'moveTo' },
						{ x0:6.058206,  x1:18.013396,  form: 'lineTo' },
						{ x0:6.058206,  x1:10.65636,  form: 'lineTo' },
						{ x0:12.81386,  x1:14.556344,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:13.778953,  x1:21.729723,  form: 'moveTo' },
						{ x0:20.534603,  x1:18.016993,  form: 'lineTo' },
						{ x0:20.534603,  x1:10.65636,  form: 'lineTo' },
						{ x0:13.778953000000001,  x1:14.556344,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:13.296402,  x1:14.275452,  form: 'moveTo' },
						{ form: 'closePath' }, 
						{ x0:6.5155469,  x1:9.8064974,  form: 'moveTo' },
						{ x0:13.296402,  x1:6.0793616,  form: 'lineTo' },
						{ x0:20.077273,  x1:9.8064974,  form: 'lineTo' },
						{ x0:13.296402,  x1:13.720887,  form: 'lineTo' },
					{ form: 'closePath' }, 
					{ form: 'fill' }, 
					{ form: 'stroke' }, 
				{ form: 'restore' }, 
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
				{ x0: 12.199402,   x1: 0.562480, form: 'moveTo' }, 
				{ x0: 12.199402,   x1: 5.190307, form: 'lineTo' },
				{ x0: 5.7360347,   x1: 9.706497, form: 'lineTo' },
				{ x0: 5.7360347,   x1: 16.51339, form: 'lineTo' },
				{ x0: 12.496402,   x1: 20.53166, form: 'lineTo' },
				{ x0: 19.531660,   x1: 16.51339, form: 'lineTo' },
				{ x0: 19.531660,   x1: 8.91339, form: 'lineTo' },
				{ x0: 12.096402,   x1: 5.190307, form: 'lineTo' },

				// MoveTo (Arm : Left Top)
				{ x0: 5.7360347,   x1: 9.706497, form: 'moveTo' },
				{ x0: 1.8360347,   x1: 6.706497, form: 'lineTo' },

				// MoveTo (Arm : Left Bottom)
				{ x0: 5.7360347,   x1: 16.51339, form: 'moveTo' },
				{ x0: 1.9360347,   x1: 19.206497, form: 'lineTo' },
	
				// MoveTo (Arm : Bottom Bottom)
				{ x0: 12.196402,   x1: 20.53166, form: 'moveTo' },
				{ x0: 12.196402,   x1: 24.9166, form: 'lineTo' },			
	
				// MoveTo (Arm : Right Bottom)
				{ x0: 19.531660,   x1: 16.51339, form: 'moveTo' },
				{ x0: 22.796402,   x1: 18.5166, form: 'lineTo' },	
	
				// MoveTo (Arm : Right Top)
				{ x0: 19.531660,   x1: 8.81339, form: 'moveTo' },
				{ x0: 23.496402,   x1: 6.9133, form: 'lineTo' },	

				// Stroke
				{ form: 'lineWidth', value: '.3' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, .5)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, .2)' },
			{ form: 'restore'},
		],
        boundary: [
			{ form: 'save' },
                { form: 'beginPath' }, 
				{ x0: -10.000,      x1: -15.000, form: 'moveTo' }, 
				{ x0: 130.000,     x1: -15.000, form: 'lineTo' }, 
				{ x0: 130.000,      x1: 130.000, form: 'lineTo' }, 
				{ x0: -10.000,      x1: 130.000, form: 'lineTo' }, 
				{ x0: -10.000,      x1: -15.000, form: 'lineTo' }, 
                { form: 'closePath' },
				// Stroke
				{ form: 'lineWidth', value: '1' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, 0)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, 0)' },
			{ form: 'restore'},
        ],
		arc: [
			{ form: 'save' },
				{ x0: 13.696402,   x1: 0.562480 },
				{ x0: 13.696402,   x1: 5.590307 },
				{ x0: 6.5360347,   x1: 10.80649 },
				{ x0: 6.5360347,   x1: 18.41339 },
				{ x0: 13.696402,   x1: 22.63166 },
				{ x0: 21.934603,   x1: 18.61339 },
				{ x0: 21.934603,   x1: 9.806497 },
				{ x0: 13.696402,   x1: 5.590307 },
				{ x0: 6.5360347,   x1: 10.80649 },
				{ x0: 2.0964020,   x1: 7.631660 },
				{ x0: 6.5360347,   x1: 18.51339 },
				{ x0: 2.8460332,   x1: 21.32972 },
				{ x0: 13.696402,   x1: 22.63166 },
				{ x0: 13.696402,   x1: 27.67152 },
				{ x0: 21.934603,   x1: 18.61339 },
				{ x0: 26.346772,   x1: 21.13166 },
				{ x0: 21.934603,   x1: 9.806497 },
				{ x0: 27.018523,   x1: 7.431660 },
				{ x0: 21.934603,   x1: 9.806497 },
				{ x0: 13.696402,   x1: 14.10649 },
				{ x0: 6.5360347,   x1: 10.80649 },
				{ x0: 13.696402,   x1: 14.10649 },
				{ x0: 13.696402,   x1: 22.63166 }, 
			{ form: 'restore'},
		],
	},
};

export default { webpack };