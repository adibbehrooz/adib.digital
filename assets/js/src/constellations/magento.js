/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATION :: MAGENTO ********************************
/******************************************************************************************/

const cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const magento = {

	//____________________ I. DATA ____________________

	data: {
		// Type
		type: 'constellations',

		// WordPress
		backend : {
			ID: 97,
			postType: 'post', // Page or Post
			postTitle: 'Magento',
			postSlug: 'magento',
			coverDirection: '--ltr',
		},
		// Camera Offset Positon
		relation: { 
			x: window.innerWidth / 1.5 - window.innerWidth / 2, 
			y: cameraOffset.y *1.7 - window.innerHeight / 3.4 
		},
		// Constellation Scale 
		scale: { 
			outside: .3, 
			inside: .3 
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
                    { form: 'save' }, 
                        // Fill
                        { form: 'fillStyle', value: "rgba(255, 255, 255, 0)" }, 
                        { form: 'beginPath' }, 
                            { x0: 144.852, x1: 90.67,  form: 'moveTo' },
                            { x0: 144.852, x1: 262.862,  form: 'lineTo' },
                            { x0: 127.919, x1: 273.211,  form: 'lineTo' },
                            { x0: 110.973, x1: 262.807,  form: 'lineTo' },
                            { x0: 110.973, x1: 90.803,  form: 'lineTo' },
                            { x0: 67.095, x1: 117.819,  form: 'lineTo' },
                            { x0: 67.095, x1: 265.074,  form: 'lineTo' },
                            { x0: 127.919, x1: 302.291,  form: 'lineTo' },
                            { x0: 189.258, x1: 264.809,  form: 'lineTo' },
                            { x0: 189.258, x1: 117.725,  form: 'lineTo' },
                            { x0: 144.852, x1: 90.67,  form: 'lineTo' },
                            { x0: 144.852, x1: 90.67,  form: 'lineTo' },
                        { form: 'closePath' }, 
                        { x0: 127.919, x1: 0,  form: 'moveTo' },
                        { x0: 0, x1: 77.502,  form: 'lineTo' },
                        { x0: 0, x1: 224.776,  form: 'lineTo' },
                        { x0: 33.223, x1: 244.348,  form: 'lineTo' },
                        { x0: 33.223, x1: 97.06,  form: 'lineTo' },
                        { x0: 127.945, x1: 39.464,  form: 'lineTo' },
                        { x0: 222.755, x1: 96.976,  form: 'lineTo' },
                        { x0: 223.146, x1: 97.199,  form: 'lineTo' },
                        { x0: 223.104, x1: 244.128,  form: 'lineTo' },
                        { x0: 256, x1: 224.776,  form: 'lineTo' },
                        { x0: 256, x1: 77.502,  form: 'lineTo' },
                        { x0: 127.919, x1: 0,  form: 'lineTo' },
                        { x0: 127.919, x1: 0,  form: 'lineTo' },
                        { form: 'closePath' }, 
                        { form: 'fill' }, 
                        { form: 'stroke' }, 
                    { form: 'restore' }, 
                { form: 'restore' }, 
            { form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
				{ x0: 240.852,  x1: 222.67, form: 'moveTo' }, 
				{ x0: 240.852,  x1: 92.67, form: 'lineTo' }, 
				{ x0: 131.852,  x1: 21.67, form: 'lineTo' }, 
				{ x0: 10.852,  x1: 92.67, form: 'lineTo'  }, 
				{ x0: 10.852,  x1: 222.67, form: 'lineTo' }, 

				{ x0: 165.852,  x1: 118.67, form: 'moveTo' },  
				{ x0: 165.852,  x1: 260.750, form: 'lineTo' }, 
				{ x0: 129.852,  x1: 285.750, form: 'lineTo' }, 
				{ x0: 85.852,  x1: 255.750, form: 'lineTo' }, 
				{ x0: 85.852,  x1: 118.750, form: 'lineTo' },
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
                { x0: 18.175,   x1: 16.750 },
				{ x0: 18.175,   x1: 7.150  },
				{ x0: 9.575,   	x1: 1.950  },
				{ x0: 1.000,   	x1: 7.150  },
				{ x0: 1.000,   	x1: 16.750 },
				{ x0: 12.60,   	x1: 7.750 },
				{ x0: 12.60,   	x1: 18.750 },
				{ x0: 9.90,   	x1: 21.150 },
				{ x0: 6.20,   	x1: 18.750 },
				{ x0: 6.20,   	x1: 7.750 },
			{ form: 'restore'},
		],
	},
};

export default { magento };