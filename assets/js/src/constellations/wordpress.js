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

const wordpress = {

	//____________________ I. DATA ____________________

	data: {
		// Type
		type: 'constellations',

		// WordPress
		backend : {
			ID: 115,
			postType: 'post', // Page or Post
			postTitle: 'WordPress',
			postSlug: 'Wordpress',
			coverDirection: '--ltr',
		},
		// Camera Offset Positon
		relation: { 
			x: window.innerWidth / .8 - window.innerWidth / 2, 
			y: cameraOffset.y * 1.7 - window.innerHeight / 3.4 
		},
		// Constellation Scale 
		scale: { 
			outside: .8, 
			inside: 1 
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
				{ form: 'strokeStyle', value: "rgba( 255, 255, 255, 0)" }, // 0.5
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'save' }, 
                    // Fill
                    { form: 'fillStyle', value: "rgba(255, 255, 255, 0)" }, 
                    
                    { form: 'save' }, 
                        { form: 'beginPath' }, 
                            { x0: 8.708, x1: 61.26,  form: 'moveTo' },
                            { x0: 8.708, x1: 82.062, x2: 20.797, x3: 100.039, x4: 38.327, x5: 108.55799999999999,  form: 'bezierCurveTo' },
                            { x0: 13.258, x1: 39.871999999999986,  form: 'lineTo' },
                            { x0: 10.341999999999999, x1: 46.40799999999999, x2: 8.707999999999998, x3: 53.640999999999984, x4: 8.707999999999998, x5: 61.25999999999999,  form: 'bezierCurveTo' },
                        { form: 'closePath' }, 
                        { form: 'fill' }, 
                        { form: 'stroke' }, 
                    { form: 'restore' }, 

                    { form: 'save' }, 
                        { form: 'beginPath' }, 
                            { x0: 96.74, x1: 58.608,  form: 'moveTo' },
                            { x0: 96.74, x1: 52.113, x2: 94.407, x3: 47.614999999999995, x4: 92.40599999999999, x5: 44.114,  form: 'bezierCurveTo' },
                            { x0: 89.74199999999999, x1: 39.785, x2: 87.24499999999999, x3: 36.119, x4: 87.24499999999999, x5: 31.79,  form: 'bezierCurveTo' },
                            { x0: 87.24499999999999, x1: 26.959, x2: 90.90899999999999, x3: 22.462, x4: 96.07, x5: 22.462,  form: 'bezierCurveTo' },
                            { x0: 96.303, x1: 22.462, x2: 96.52399999999999, x3: 22.491, x4: 96.75099999999999, x5: 22.504,  form: 'bezierCurveTo' },
                            { x0: 87.401, x1: 13.938, x2: 74.94399999999999, x3: 8.708000000000002, x4: 61.26199999999999, x5: 8.708000000000002,  form: 'bezierCurveTo' },
                            { x0: 42.901999999999994, x1: 8.708000000000002, x2: 26.748999999999995, x3: 18.128, x4: 17.351999999999997, x5: 32.396,  form: 'bezierCurveTo' },
                            { x0: 18.584999999999997, x1: 32.433, x2: 19.746999999999996, x3: 32.459, x4: 20.733999999999998, x5: 32.459,  form: 'bezierCurveTo' },
                            { x0: 26.230999999999998, x1: 32.459, x2: 34.739999999999995, x3: 31.792, x4: 34.739999999999995, x5: 31.792,  form: 'bezierCurveTo' },
                            { x0: 37.57299999999999, x1: 31.625, x2: 37.907, x3: 35.786, x4: 35.077, x5: 36.121,  form: 'bezierCurveTo' },
                            { x0: 35.077, x1: 36.121, x2: 32.23, x3: 36.456, x4: 29.061999999999998, x5: 36.622,  form: 'bezierCurveTo' },
                            { x0: 48.2, x1: 93.547,  form: 'lineTo' },
                            { x0: 59.701, x1: 59.053999999999995,  form: 'lineTo' },
                            { x0: 51.513, x1: 36.61999999999999,  form: 'lineTo' },
                            { x0: 48.683, x1: 36.45399999999999, x2: 46.001999999999995, x3: 36.11899999999999, x4: 46.001999999999995, x5: 36.11899999999999,  form: 'bezierCurveTo' },
                            { x0: 43.169999999999995, x1: 35.952999999999996, x2: 43.501999999999995, x3: 31.62299999999999, x4: 46.333999999999996, x5: 31.789999999999992,  form: 'bezierCurveTo' },
                            { x0: 46.333999999999996, x1: 31.789999999999992, x2: 55.013, x3: 32.456999999999994, x4: 60.17699999999999, x5: 32.456999999999994,  form: 'bezierCurveTo' },
                            { x0: 65.67299999999999, x1: 32.456999999999994, x2: 74.18299999999999, x3: 31.789999999999992, x4: 74.18299999999999, x5: 31.789999999999992,  form: 'bezierCurveTo' },
                            { x0: 77.01799999999999, x1: 31.62299999999999, x2: 77.351, x3: 35.78399999999999, x4: 74.52, x5: 36.11899999999999,  form: 'bezierCurveTo' },
                            { x0: 74.52, x1: 36.11899999999999, x2: 71.667, x3: 36.45399999999999, x4: 68.505, x5: 36.61999999999999,  form: 'bezierCurveTo' },
                            { x0: 87.497, x1: 93.11399999999999,  form: 'lineTo' },
                            { x0: 92.739, x1: 75.597,  form: 'lineTo' },
                            { x0: 95.01100000000001, x1: 68.32799999999999, x2: 96.74000000000001, x3: 63.10699999999999, x4: 96.74000000000001, x5: 58.60799999999999,  form: 'bezierCurveTo' },
                            { form: 'closePath' }, 
                        { form: 'fill' }, 
                        { form: 'stroke' }, 
                    { form: 'restore' }, 
                    
                    { form: 'save' }, 
                        { form: 'beginPath' }, 
                            { x0: 62.184, x1: 65.857,  form: 'moveTo' },
                            { x0: 46.416, x1: 111.676,  form: 'lineTo' },
                            { x0: 51.123999999999995, x1: 113.06, x2: 56.102999999999994, x3: 113.81700000000001, x4: 61.262, x5: 113.81700000000001,  form: 'bezierCurveTo' },
                            { x0: 67.382, x1: 113.81700000000001, x2: 73.251, x3: 112.759, x4: 78.714, x5: 110.83800000000001,  form: 'bezierCurveTo' },
                            { x0: 78.573, x1: 110.61300000000001, x2: 78.445, x3: 110.37400000000001, x4: 78.34, x5: 110.114,  form: 'bezierCurveTo' },
                            { form: 'closePath' }, 
                        { form: 'fill' }, 
                        { form: 'stroke' }, 
                    { form: 'restore' }, 
                    
                    { form: 'save' }, 
                        { form: 'beginPath' }, 
                            { x0: 107.376, x1: 36.046,  form: 'moveTo' },
                            { x0: 107.602, x1: 37.72, x2: 107.73, x3: 39.516999999999996, x4: 107.73, x5: 41.45,  form: 'bezierCurveTo' },
                            { x0: 107.73, x1: 46.783, x2: 106.73400000000001, x3: 52.778000000000006, x4: 103.73400000000001, x5: 60.274,  form: 'bezierCurveTo' },
                            { x0: 87.68100000000001, x1: 106.687,  form: 'lineTo' },
                            { x0: 103.305, x1: 97.576, x2: 113.81400000000001, x3: 80.649, x4: 113.81400000000001, x5: 61.260999999999996,  form: 'bezierCurveTo' },
                            { x0: 113.81500000000001, x1: 52.123999999999995, x2: 111.48100000000001, x3: 43.532, x4: 107.376, x5: 36.04599999999999,  form: 'bezierCurveTo' },
                        { form: 'closePath' }, 
                        { form: 'fill' }, 
                        { form: 'stroke' }, 
                    { form: 'restore' }, 

                    { form: 'save' }, 
                        { form: 'beginPath' }, 
                            { x0: 61.262, x1: 0,  form: 'moveTo' },
                            { x0: 27.482999999999997, x1: 0, x2: 0, x3: 27.481, x4: 0, x5: 61.26,  form: 'bezierCurveTo' },
                            { x0: 0, x1: 95.043, x2: 27.483, x3: 122.523, x4: 61.262, x5: 122.523,  form: 'bezierCurveTo' },
                            { x0: 95.03999999999999, x1: 122.523, x2: 122.527, x3: 95.04299999999999, x4: 122.527, x5: 61.26,  form: 'bezierCurveTo' },
                            { x0: 122.526, x1: 27.480999999999995, x2: 95.04, x3: 0, x4: 61.262, x5: 0,  form: 'bezierCurveTo' },
                        { form: 'closePath' }, 
                        { x0: 61.262, x1: 119.715,  form: 'moveTo' },
                        { x0: 29.032000000000004, x1: 119.715, x2: 2.8089999999999975, x3: 93.492, x4: 2.8089999999999975, x5: 61.260000000000005,  form: 'bezierCurveTo' },
                        { x0: 2.8089999999999975, x1: 29.03000000000001, x2: 29.031, x3: 2.8090000000000046, x4: 61.262, x5: 2.8090000000000046,  form: 'bezierCurveTo' },
                        { x0: 93.491, x1: 2.8090000000000046, x2: 119.712, x3: 29.030000000000005, x4: 119.712, x5: 61.260000000000005,  form: 'bezierCurveTo' },
                        { x0: 119.712, x1: 93.492, x2: 93.491, x3: 119.715, x4: 61.262, x5: 119.715,  form: 'bezierCurveTo' },
                        { form: 'closePath' }, 
                        { form: 'fill' }, 
                        { form: 'stroke' }, 
                    { form: 'restore' }, 
				{ form: 'restore' }, 
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
				{ x0: 18.500,   x1: 32, form: 'moveTo' }, 
				{ x0: 35.500,   x1: 84, form: 'lineTo' }, 
				{ x0: 53.500,   x1: 47, form: 'lineTo' }, 
				{ x0: 67.500,   x1: 84, form: 'lineTo' }, 
				{ x0: 83.500,   x1: 36, form: 'lineTo' }, 
				// Stroke
				{ form: 'lineWidth', value: '.2' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, .5)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, .2)' },
			{ form: 'restore'},
		],
		arc: [
			{ form: 'save' },
				{ x0: 4.275,   x1: 7.750  },  
				{ x0: 6.000,   x1: 12.750 },  
				{ x0: 8.980,   x1: 19.900 },  
				{ x0: 13.200,  x1: 12.000 },  
				{ x0: 16.900,  x1: 20.000 },  
                { x0: 19.975,  x1: 12.000 },  
				{ x0: 20.975,  x1: 7.750 },  
			{ form: 'restore'},
		],
	},
};

export default { wordpress };