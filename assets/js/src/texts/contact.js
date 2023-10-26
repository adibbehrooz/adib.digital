/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** TEXT :: Contact ********************************
/*********************************************************************************/

const contact = {

	//____________________ I. DATA ____________________

	data: {
		// Type
		type: 'text',

		// WordPress
		backend : {
			ID: 71,
			postType: 'page', // Page or Post
			postTitle: 'Contact', // Page or Post
			postSlug: 'contact', // Page or Post
			coverDirection: '--ttb',
		},
		// Camera Offset Positon
		relation: { 
			x: 0, 
			y: 0 
		},
		// Constellation Scale 
		scale: { 
			outside: 1, 
			inside: 1,
			boundary: 1 
		},
		lineWidth: { 
			outside: 1, 
			inside: 1,
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
				{ form: 'strokeStyle', value: "rgba( 255, 255, 255, 0)" }, 
				// Fill
				{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'save' }, 
					{ form: 'beginPath' }, 
					{ x0: 5.000,   	x1: 330.000, form: 'moveTo' }, 
					{ x0: 40.00,   	x1: 330.000, form: 'lineTo' }, 
					{ x0: 40.00,    x1: 410.000, form: 'lineTo' },   
					{ x0: 5.000,    x1: 410.000, form: 'lineTo' },   
					{ x0: 5.000,    x1: 330.000, form: 'lineTo' },
					{ form: 'closePath'},
					{ form: 'fill' }, 
					{ form: 'stroke' }, 
				{ form: 'restore' }, 
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
				{ x0: 5.000,   	x1: 330.000, form: 'moveTo' }, 
				{ x0: 40.00,   	x1: 330.000, form: 'lineTo' }, 
				{ x0: 40.00,    x1: 410.000, form: 'lineTo' },   
				{ x0: 5.000,    x1: 410.000, form: 'lineTo' },   
				{ x0: 5.000,    x1: 330.000, form: 'lineTo' },
				// Stroke
				{ form: 'lineWidth', value: '0' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, 0)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, 0)' },
			{ form: 'restore'},
		],
        boundary: [
			{ form: 'save' },
                { form: 'beginPath' }, 
				{ x0: 5.000,   	x1: 330.000, form: 'moveTo' }, 
				{ x0: 40.00,   	x1: 330.000, form: 'lineTo' }, 
				{ x0: 40.00,    x1: 410.000, form: 'lineTo' },   
				{ x0: 5.000,    x1: 410.000, form: 'lineTo' },   
				{ x0: 5.000,    x1: 330.000, form: 'lineTo' },
                { form: 'closePath' },
				// Stroke
				{ form: 'lineWidth', value: '2' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, 1)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, 0)' },
			{ form: 'restore'},
        ],
		arc: [
			{ form: 'save' },
			{ form: 'restore'},
		],
	},
};

export default { contact };