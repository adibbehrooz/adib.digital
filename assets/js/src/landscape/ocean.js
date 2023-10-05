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

const ocean = {

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
		curve: function(canvaWidth, ctx) {
            let amplitude = 10;
            let frequency = 0.02;
            let phi = 0;
            let frames = 0;
            let k = 5, opacity = [ 0, 0 ];
            for( let m = 0; m < 13; m++ ) {	
                if( m >= 0 && m < 7) k+=1.1; else k +=0.8;
    
                let firstOpacity = opacity[0] += 0.015;
                let secondOpacity = opacity[1] += 0.038;
                frames++;
                phi = frames / 50;
    
                ctx.beginPath();
                ctx.moveTo( -window.innerWidth, ( ((cameraOffset.y / 2) * 2.5)  + (m * k) ) );
    
                // Sin Wave	
                for (let x = -window.innerWidth; x < window.innerWidth; x++) {
                    let y = Math.sin(x * frequency + phi) * amplitude / 8 + amplitude / 12;
                    ctx.lineTo(x, ((cameraOffset.y / 2) * 2.5) + y +  (m * k) );
                }
                // 1. Width
                ctx.lineWidth = 1;	
    
                // 2. Gradient Line
                let gradient = ctx.createLinearGradient(0, 0, canvaWidth, 0);
                gradient.addColorStop(0,"rgba(23, 210, 168, "+ firstOpacity +")");
                gradient.addColorStop(0.5,"rgba(255, 255, 255, "+ secondOpacity +")");
                gradient.addColorStop(1,"rgba(23, 210, 168, "+ firstOpacity +")");
                ctx.strokeStyle = gradient;
    
                // 3. Shadow Line
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur	= 0;	
                ctx.stroke();	
            };
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

export default { ocean };