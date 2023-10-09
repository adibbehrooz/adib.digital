/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATION :: LINUX ******************************
/**************************************************************************************/

const cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const linux = {

	//____________________ I. DATA ____________________

	data: {
		// Type
		type: 'constellations',

		// WordPress
		backend : {
			ID: 61,
			postType: 'post', // Page or Post
			coverDirection: 'ltr',
		},
		// Camera Offset Positon
		relation: { 
			x: window.innerWidth / .8 - window.innerWidth / 2, 
			y: cameraOffset.y * 2 - window.innerHeight / 3.4 
		},
		// Constellation Scale 
		scale: { 
			outside: .6, 
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
                { form: 'strokeStyle', value: "rgba( 255, 255, 255, .1)" }, // 0.5
                { form: 'miterLimit', value: 4 }, 
                
                { form: 'save' }, 
                { form: 'restore' }, 
                
                { form: 'save' }, 
                    
                    { form: 'save' }, 
                        // Fill
                        { form: 'fillStyle', value: "rgba(255, 255, 255, .1)" }, 
                        // Stroke
                        { form: 'strokeStyle', value: "rgba( 255, 255, 255, .1)" }, // 0.5
                        { form: 'strokeStyle', value: "rgba( 255, 255, 255, .1)" }, // 0.5
                    { form: 'restore' }, 
                   
                    { form: 'save' }, 
                        // Fill
                        { form: 'fillStyle', value: "rgba( 255, 255, 255, .1)" }, // 0.5
                        // Stroke
                        { form: 'strokeStyle', value: "rgba( 255, 255, 255, .1)" }, // 0.5
                        { form: 'lineWidth', value: 0.001 }, 
                        { form: 'beginPath' }, 
                            { x0: 58.000005, x1: 63.000005,  form: 'moveTo' },
                            { x0: 58.000005, x1: 153.00001,  form: 'lineTo' },
                            { x0: 58.000005, x1: 174.97293, x2: 76.027085, x3: 193.00001, x4: 98.000005, x5: 193.00001,  form: 'bezierCurveTo' },
                            { x0: 158.00001, x1: 193.00001,  form: 'lineTo' },
                            { x0: 179.97293, x1: 193.00001, x2: 198.00001, x3: 174.97293, x4: 198.00001, x5: 153.00001,  form: 'bezierCurveTo' },
                            { x0: 198.00001, x1: 103.00001,  form: 'lineTo' },
                            { x0: 198.00001, x1: 86.549925, x2: 184.45009, x3: 73.000005, x4: 168.00001, x5: 73.000005,  form: 'bezierCurveTo' },
                            { x0: 160.31507, x1: 73.000005, x2: 153.33323000000001, x3: 76.037625, x4: 148.00001, x5: 80.866225,  form: 'bezierCurveTo' },
                            { x0: 142.66679, x1: 76.037625, x2: 135.68495000000001, x3: 73.000005, x4: 128.00001, x5: 73.000005,  form: 'bezierCurveTo' },
                            { x0: 111.54993, x1: 73.000005, x2: 98.000005, x3: 86.549925, x4: 98.000005, x5: 103.00001,  form: 'bezierCurveTo' },
                            { x0: 98.000005, x1: 153.00001,  form: 'lineTo' },
                            { x0: 118.00001, x1: 153.00001,  form: 'lineTo' },
                            { x0: 118.00001, x1: 103.00001,  form: 'lineTo' },
                            { x0: 118.00001, x1: 97.358725, x2: 122.35873000000001, x3: 93.000005, x4: 128.00001, x5: 93.000005,  form: 'bezierCurveTo' },
                            { x0: 133.64129, x1: 93.000005, x2: 138.00001, x3: 97.358725, x4: 138.00001, x5: 103.00001,  form: 'bezierCurveTo' },
                            { x0: 138.00001, x1: 153.00001,  form: 'lineTo' },
                            { x0: 158.00001, x1: 153.00001,  form: 'lineTo' },
                            { x0: 158.00001, x1: 103.00001,  form: 'lineTo' },
                            { x0: 158.00001, x1: 97.358725, x2: 162.35873, x3: 93.000005, x4: 168.00001, x5: 93.000005,  form: 'bezierCurveTo' },
                            { x0: 173.64129, x1: 93.000005, x2: 178.00001, x3: 97.358725, x4: 178.00001, x5: 103.00001,  form: 'bezierCurveTo' },
                            { x0: 178.00001, x1: 153.00001,  form: 'lineTo' },
                            { x0: 178.00001, x1: 164.16415, x2: 169.16415, x3: 173.00001, x4: 158.00001, x5: 173.00001,  form: 'bezierCurveTo' },
                            { x0: 98.000005, x1: 173.00001,  form: 'lineTo' },
                            { x0: 86.835865, x1: 173.00001, x2: 78.000005, x3: 164.16415, x4: 78.000005, x5: 153.00001,  form: 'bezierCurveTo' },
                            { x0: 78.000005, x1: 63.000005,  form: 'lineTo' },
                        { form: 'closePath' }, 
                        { form: 'fill' }, 
                        { form: 'stroke' }, 
                    { form: 'restore' }, 
                { form: 'restore' }, 
                
                { form: 'save' }, 
                    // Fill
                    { form: 'fillStyle', value: "rgba( 255, 255, 255, .1)" }, // 0.5
                    // Stroke
                    { form: 'strokeStyle', value: "rgba( 255, 255, 255, .1)" }, // 0.5
                    { form: 'strokeStyle', value: "rgba( 255, 255, 255, .1)" }, // 0.5
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

export default { linux };