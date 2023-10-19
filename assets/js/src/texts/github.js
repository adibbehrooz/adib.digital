/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATION :: GITHUB *****************************
/**************************************************************************************/

const cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const github = {

	//____________________ I. DATA ____________________

	data: {
		// Type
		type: 'link',

        // URL
        url: 'https://github.com/adibbehrooz/adib.online',

		// Camera Offset Positon
		relation: { 
			x: 0, 
			y: 0 
		},
		// Constellation Scale 
		scale: { 
			outside: 1, 
			inside: 1 
		},
		lineWidth: { 
			outside: 1, 
			inside: 1 
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
            { form: 'strokeStyle', value: "rgba(0,0,0,0)" }, 
            { form: 'miterLimit', value: 4 }, 
            { form: 'save' }, 
            { form: 'beginPath' }, 
            { x0: 10.9, x1: 2.1,  form: 'moveTo' },
            { x0: 6.300000000000001, x1: 2.6, x2: 2.5999999999999996, x3: 6.300000000000001, x4: 2.0999999999999996, x5: 10.799999999999999,  form: 'bezierCurveTo' },
            { x0: 1.4999999999999996, x1: 15.799999999999999, x2: 4.6, x3: 20.1, x4: 9, x5: 21.5,  form: 'bezierCurveTo' },
            { x0: 9, x1: 19.2,  form: 'lineTo' },
            { x0: 9, x1: 19.2, x2: 8.6, x3: 19.3, x4: 8.1, x5: 19.3,  form: 'bezierCurveTo' },
            { x0: 6.699999999999999, x1: 19.3, x2: 6.1, x3: 18.1, x4: 6, x5: 17.400000000000002,  form: 'bezierCurveTo' },
            { x0: 5.9, x1: 17.000000000000004, x2: 5.7, x3: 16.700000000000003, x4: 5.4, x5: 16.400000000000002,  form: 'bezierCurveTo' },
            { x0: 5.1, x1: 16.3, x2: 5, x3: 16.3, x4: 5, x5: 16.2,  form: 'bezierCurveTo' },
            { x0: 5, x1: 16, x2: 5.3, x3: 16, x4: 5.4, x5: 16,  form: 'bezierCurveTo' },
            { x0: 6, x1: 16, x2: 6.5, x3: 16.7, x4: 6.7, x5: 17,  form: 'bezierCurveTo' },
            { x0: 7.2, x1: 17.8, x2: 7.800000000000001, x3: 18, x4: 8.1, x5: 18,  form: 'bezierCurveTo' },
            { x0: 8.5, x1: 18, x2: 8.799999999999999, x3: 17.9, x4: 9, x5: 17.8,  form: 'bezierCurveTo' },
            { x0: 9.1, x1: 17.1, x2: 9.4, x3: 16.400000000000002, x4: 10, x5: 16,  form: 'bezierCurveTo' },
            { x0: 7.7, x1: 15.5, x2: 6, x3: 14.2, x4: 6, x5: 12,  form: 'bezierCurveTo' },
            { x0: 6, x1: 10.9, x2: 6.5, x3: 9.8, x4: 7.2, x5: 9,  form: 'bezierCurveTo' },
            { x0: 7.1, x1: 8.8, x2: 7, x3: 8.3, x4: 7, x5: 7.6,  form: 'bezierCurveTo' },
            { x0: 7, x1: 7.2, x2: 7, x3: 6.6, x4: 7.3, x5: 6,  form: 'bezierCurveTo' },
            { x0: 7.3, x1: 6, x2: 8.7, x3: 6, x4: 10.1, x5: 7.3,  form: 'bezierCurveTo' },
            { x0: 10.6, x1: 7.1, x2: 11.3, x3: 7, x4: 12, x5: 7,  form: 'bezierCurveTo' },
            { x0: 12.7, x1: 7, x2: 13.4, x3: 7.1, x4: 14, x5: 7.3,  form: 'bezierCurveTo' },
            { x0: 15.3, x1: 6, x2: 16.8, x3: 6, x4: 16.8, x5: 6,  form: 'bezierCurveTo' },
            { x0: 17, x1: 6.6, x2: 17, x3: 7.2, x4: 17, x5: 7.6,  form: 'bezierCurveTo' },
            { x0: 17, x1: 8.4, x2: 16.9, x3: 8.799999999999999, x4: 16.8, x5: 9,  form: 'bezierCurveTo' },
            { x0: 17.5, x1: 9.8, x2: 18, x3: 10.8, x4: 18, x5: 12,  form: 'bezierCurveTo' },
            { x0: 18, x1: 14.2, x2: 16.3, x3: 15.5, x4: 14, x5: 16,  form: 'bezierCurveTo' },
            { x0: 14.6, x1: 16.5, x2: 15, x3: 17.4, x4: 15, x5: 18.3,  form: 'bezierCurveTo' },
            { x0: 15, x1: 21.6,  form: 'lineTo' },
            { x0: 19.1, x1: 20.3, x2: 22, x3: 16.5, x4: 22, x5: 12.100000000000001,  form: 'bezierCurveTo' },
            { x0: 22, x1: 6.1, x2: 16.9, x3: 1.4, x4: 10.9, x5: 2.1,  form: 'bezierCurveTo' },
            { form: 'closePath' }, 
            { form: 'fill' }, 
            { form: 'stroke' }, 
            { form: 'restore' }, 
            { form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
				{ x0: 1.000,      x1: 50.7500, form: 'moveTo' }, 
				{ x0: 4.000,      x1: 40.7500, form: 'lineTo' }, 
				{ x0: 8.000,      x1: 30.7500, form: 'lineTo' }, 
				{ x0: 12.500,      x1: 20.7500, form: 'lineTo' }, 
				{ x0: 15.500,      x1: 14.7500, form: 'lineTo' }, 
				{ x0: 17.500,      x1: 10.7500, form: 'lineTo' }, 
				{ x0: 21.500,      x1: 3.7500, form: 'lineTo' }, 
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
				{ x0: 1.000,      x1: 50.7500 },  
				{ x0: 4.000,      x1: 40.7500 },  
				{ x0: 8.000,      x1: 30.7500 },  
				{ x0: 12.500,      x1: 20.7500 },  
				{ x0: 15.500,      x1: 14.7500 },  
				{ x0: 17.500,      x1: 10.7500 },  
				{ x0: 21.500,      x1: 3.7500  },  
			{ form: 'restore'},
		],
	},
};

export default { github };