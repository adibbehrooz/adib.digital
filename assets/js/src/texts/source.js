/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** TEXT :: Source ********************************
/*******************************************************************************/

const source = {

	//____________________ I. DATA ____________________

	data: {
		// Type
		type: 'link',
		
        // WordPress
		backend : {
			ID: 0,
			postType: 'link', // Page or Post
			postTitle: '', // Page or Post
			postSlug: '', // Page or Post
			coverDirection: '',
		},

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
				// Stroke
				{ form: 'strokeStyle', value: "rgba( 255, 255, 255, 0)" }, 
				// Fill
				{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'save' }, 
                    // Absolute Size: 5, 35, 35, 50
					{ form: 'beginPath' }, 
					{ x0: 5.000,   	x1: 500.000, form: 'moveTo' }, 
					{ x0: 40.00,   	x1: 500.000, form: 'lineTo' }, 
					{ x0: 40.00,    x1: 580.000, form: 'lineTo' },   
					{ x0: 5.000,    x1: 580.000, form: 'lineTo' },   
					{ x0: 5.000,    x1: 500.000, form: 'lineTo' },
					{ form: 'closePath'},
					{ form: 'fill' }, 
					{ form: 'stroke' }, 
				{ form: 'restore' }, 
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
                { x0: 5.000,   	x1: 500.000, form: 'moveTo' }, 
                { x0: 40.00,   	x1: 500.000, form: 'lineTo' }, 
                { x0: 40.00,    x1: 580.000, form: 'lineTo' },   
                { x0: 5.000,    x1: 580.000, form: 'lineTo' },   
                { x0: 5.000,    x1: 500.000, form: 'lineTo' },
				// Stroke
				{ form: 'lineWidth', value: '0' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, 0)' },
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

export default { source };