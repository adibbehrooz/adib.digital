/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** LANDSCAPE :: MOUNTAIN ********************************
/***************************************************************************************/


const cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const mountains = {

	//____________________ I. DATA ____________________

	data: {
		// Type
		type: 'landscape',

		// WordPress
		backend : {
			ID: 0,
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
			outside: 0, 
			inside: 0 
		},
		lineWidth: { 
			outside: 0, 
			inside: 0 
		},
	},

	//____________________ II. COORDINATION ____________________

	coordination: {
		curve: function(canva, ctx) {
            let counter;
            for( counter = 0; counter < 1; counter++ ) {
                // Draw Lines
                ctx.lineJoin = 'round';
                ctx.lineCap = 'butt';
                ctx.beginPath();
                    ctx.moveTo( -window.innerWidth, (cameraOffset.y / 2) * 2.5  + (counter * 10) );
                    
                    // 1. Line From Start Canvas To Middle Canvas
                    ctx.lineTo( window.innerWidth / 2,  ( cameraOffset.y / 2) * 2.5 +  (counter * 10)  );
                    
                    // 2. Wave Line
                    ctx.lineTo( window.innerWidth / 2 - 200,  (cameraOffset.y / 2) * 2 +  (counter * 10)  );
                    ctx.lineTo( window.innerWidth / 2 - 400,  (cameraOffset.y / 2) * 2.5 +  (counter * 10)  );

                    // 3. Line From Middle Canvas to End Canvas
                    ctx.lineTo( window.innerWidth,  (cameraOffset.y / 2) * 2.5 +  (counter * 10)  );
                
                // Width
                ctx.lineWidth = 1;

                // Gradient Line
                let gradient = ctx.createLinearGradient(0, 0, canva.width, 0);
                gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
                gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
                gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
                ctx.strokeStyle 	= gradient;

                ctx.lineWidth	 	= 1;
                ctx.strokeStyle 	= "#392E49";
                ctx.shadowOffsetX 	= 0;
                ctx.shadowOffsetY 	= -10;
                ctx.shadowBlur		= 2;
                ctx.shadowColor   	= "rgba(255, 255, 255, 1)";
                ctx.stroke();
            } // FOR
		},
		outside: [
			{ form: 'save' }, 
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
			{ form: 'restore'},
		],
		arc: [
			{ form: 'save' },
			{ form: 'restore'},
		],
	},
};

export default { mountains };