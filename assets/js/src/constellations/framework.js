/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATION :: FRAMEWORK ********************************
/********************************************************************************************/

const cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const framework = {

	//____________________ I. DATA ____________________

	data: {
		// WordPress
		backend : {
            ID: 0,
			postType: 'post', // Page or Post
			coverDirection: 'ltr',
		},
		// Camera Offset Positon
		relation: { 
            x: window.innerWidth / .9 - window.innerWidth / 2, 
            y: cameraOffset.y - window.innerHeight / 3.9
		},
		// Constellation Scale 
        scale: { 
            outside: .6, 
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
				{ form: 'strokeStyle', value: "rgba( 255, 255, 255, 0.5)" }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, .1)" },  
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'save' }, 
					{ form: 'fillStyle', value: "rgba(255, 255, 255, .1)" }, 
					{ form: 'beginPath' }, 
						{ x0: 154.945, x1: 79.199, x2: 142.947, x3: 73.032, x4: 127.251, x5: 73.304,  form: 'bezierCurveTo' },
						{ x0: 118.271, x1: 73.46, x2: 110.561, x3: 78.341, x4: 108.94, x5: 87.274,  form: 'bezierCurveTo' },
						{ x0: 107.431, x1: 95.585, x2: 114.819, x3: 100.195, x4: 122.505, x5: 103.025,  form: 'bezierCurveTo' },
						{ x0: 135.252, x1: 107.719, x2: 146.349, x3: 112.675, x4: 158.874, x5: 117.894,  form: 'bezierCurveTo' },
						{ x0: 181.643, x1: 127.383, x2: 193.318, x3: 142.75, x4: 191.938, x5: 162.467,  form: 'bezierCurveTo' },
						{ x0: 190.182, x1: 187.554, x2: 175.084, x3: 205.547, x4: 151.089, x5: 211.479,  form: 'bezierCurveTo' },
						{ x0: 119.735, x1: 219.231, x2: 89.288, x3: 207.423, x4: 63.563, x5: 190.939,  form: 'bezierCurveTo' },
						{ x0: 70.056, x1: 181.048, x2: 77.589, x3: 174.296, x4: 84.043, x5: 164.465,  form: 'bezierCurveTo' },
						{ x0: 98.905, x1: 170.791, x2: 110.581, x3: 179.339, x4: 126.129, x5: 180.672,  form: 'bezierCurveTo' },
						{ x0: 137.092, x1: 181.612, x2: 149.514, x3: 181.089, x4: 151.977, x5: 168.212,  form: 'bezierCurveTo' },
						{ x0: 154.197, x1: 156.6, x2: 144.091, x3: 150.375, x4: 134.234, x5: 146.898,  form: 'bezierCurveTo' },
						{ x0: 122.499, x1: 142.759, x2: 110.786, x3: 137.696, x4: 99.278, x5: 132.996,  form: 'bezierCurveTo' },
						{ x0: 78.005, x1: 124.307, x2: 69.349, x3: 107.312, x4: 70.806, x5: 87.291,  form: 'bezierCurveTo' },
						{ x0: 70.806, x1: 75.552, x2: 80.546, x3: 51.825, x4: 104.427, x5: 44.445,  form: 'bezierCurveTo' },
						{ x0: 141.119, x1: 33.105, x2: 161.335, x3: 44.717, x4: 187.942, x5: 61.816,  form: 'bezierCurveTo' },
						{ x0: 180.875, x1: 71.162, x2: 175.442, x3: 77.807, x4: 168.461, x5: 87.041,  form: 'bezierCurveTo' },
					{ form: 'closePath'},
					{ form: 'fill' }, 
					{ form: 'stroke' }, 
				{ form: 'restore' }, 
			{ form: 'restore' }, 
		],

		inside: [
			{ form: 'save' },
				{ x0: 22.23538, x1: 9.0238, form: 'moveTo' },
				{ x0: 16.23538, x1: 7.4000,	form: 'lineTo' },
				{ x0: 11.63538, x1: 10.500,	form: 'lineTo' },
				{ x0: 13.23538, x1: 13.981,	form: 'lineTo' },
				{ x0: 18.23538, x1: 17.101,	form: 'lineTo' },
				{ x0: 22.63538, x1: 18.701,	form: 'lineTo' },
				{ x0: 22.63538, x1: 23.201,	form: 'lineTo' },
				{ x0: 18.43538, x1: 25.901,	form: 'lineTo' },
				{ x0: 11.13538, x1: 24.501,	form: 'lineTo' },
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
				{ x0: 25.23538, x1: 10.02383 },
				{ x0: 18.23538, x1: 8.500 },
				{ x0: 13.23538, x1: 12.0001 },
				{ x0: 15.23538, x1: 16.101 },
				{ x0: 20.23538, x1: 19.101 },
				{ x0: 25.23538, x1: 21.101 },
				{ x0: 25.23538, x1: 26.101 },
				{ x0: 20.23538, x1: 29.101 },
				{ x0: 13.23538, x1: 27.901 },
			{ form: 'restore' },
		],
	},
};

export default { framework };