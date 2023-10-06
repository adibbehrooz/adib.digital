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
		curve: function(canvaWidth, ctx, cameraOffset) {
			// I. Little Pyramids
			const littlePyramids = () => {
				ctx.beginPath();
				ctx.moveTo( -window.innerWidth, (cameraOffset.y / 2) * 2.5 );
				ctx.lineTo( window.innerWidth / 2,  ( cameraOffset.y / 2) * 2.5 ); // A: START
				ctx.lineTo( window.innerWidth / 2 + 50,  (cameraOffset.y / 2) * 2.1 ); // B
				ctx.lineTo( window.innerWidth / 2 - 30,  (cameraOffset.y / 2) * 2.5 ); // C
				ctx.lineTo( window.innerWidth / 2 + 140,  (cameraOffset.y / 2) * 2.5 ); // D
				ctx.lineTo( window.innerWidth / 2 + 50,  (cameraOffset.y / 2) * 2.09 ); // E
				ctx.lineTo( window.innerWidth / 2 + 140,  (cameraOffset.y / 2) * 2.5 ); // F
				ctx.lineTo( window.innerWidth,  (cameraOffset.y / 2) * 2.5  ); // G: END

				// Fiil
				ctx.fillStyle = 'rgba(255, 255, 255, .2)';
				ctx.fill();

				// Stroke
				ctx.strokeStyle 	= "#392E49";
					// width
					ctx.lineWidth	 	= 1;
					// Blure
					ctx.shadowBlur		= 2;
					ctx.shadowColor   	= "rgba(255, 255, 255, 1)";
				ctx.stroke();
			};

			// II. Great Pyramids
			const greatPyramids = () => {
				ctx.beginPath();
				ctx.moveTo( -window.innerWidth, (cameraOffset.y / 2) * 2.5 );
				ctx.lineTo( window.innerWidth / 2 - 200,  ( cameraOffset.y / 2) * 2.5 ); // A : START

				ctx.beginPath();
					ctx.lineTo( window.innerWidth / 2 - 200,  ( cameraOffset.y / 2) * 2.5 ); // A : START
					ctx.lineTo( window.innerWidth / 2 - 50,  (cameraOffset.y / 2) * 1.8 ); // B
					ctx.lineTo( window.innerWidth / 2 - 130,  (cameraOffset.y / 2) * 2.5 ); // C
					ctx.moveTo( -window.innerWidth / 2 - 200, (cameraOffset.y / 2) * 2.5 );
					// Fiil
					ctx.fillStyle = 'rgba(255, 255, 255, .2)';
					ctx.fill();
				ctx.closePath();

				ctx.beginPath();
					ctx.lineTo( window.innerWidth / 2 - 30,  (cameraOffset.y / 2) * 2.5 ); // C
					ctx.lineTo( window.innerWidth / 2 + 27,  (cameraOffset.y / 2) * 2.2 ); // C
					ctx.lineTo( window.innerWidth / 2 - 50,  (cameraOffset.y / 2) * 1.8 ); // C
					ctx.lineTo( window.innerWidth / 2 - 130,  (cameraOffset.y / 2) * 2.5 ); // C
				ctx.closePath();

				ctx.lineTo( window.innerWidth,  (cameraOffset.y / 2) * 2.5  ); // END
				
				// Stroke
				ctx.strokeStyle	= "#392E49";
					// width
					ctx.lineWidth = 1;
					// Blure
					ctx.shadowBlur = 2;
					ctx.shadowColor	= "rgba(255, 255, 255, 1)";
				ctx.stroke();
			};

			// III. Middle Pyramids
			const middlePyramids = () => {
				ctx.beginPath();
				ctx.moveTo( -window.innerWidth, (cameraOffset.y / 2) * 2.5 );
				ctx.lineTo( window.innerWidth / 2 - 200,  ( cameraOffset.y / 2) * 2.5 ); // A : START

				ctx.beginPath();
					ctx.lineTo( window.innerWidth / 2 - 350,  ( cameraOffset.y / 2) * 2.5 ); // A : START
					ctx.lineTo( window.innerWidth / 2 - 230,  (cameraOffset.y / 2) * 1.9 ); // B
					ctx.lineTo( window.innerWidth / 2 - 300,  (cameraOffset.y / 2) * 2.5 ); // C
					ctx.moveTo( -window.innerWidth / 2 - 350, (cameraOffset.y / 2) * 2.5 );
					// Fiil
					ctx.fillStyle = 'rgba(255, 255, 255, .2)';
					ctx.fill();
				ctx.closePath();

				ctx.beginPath();
					ctx.lineTo( window.innerWidth / 2 - 200,  (cameraOffset.y / 2) * 2.5 ); // C
					ctx.lineTo( window.innerWidth / 2 - 154,  (cameraOffset.y / 2) * 2.3 ); // C
					ctx.lineTo( window.innerWidth / 2 - 230,  (cameraOffset.y / 2) * 1.9 ); // C
					ctx.lineTo( window.innerWidth / 2 - 300,  (cameraOffset.y / 2) * 2.5 ); // C
				ctx.closePath();

				ctx.lineTo( window.innerWidth,  (cameraOffset.y / 2) * 2.5  ); // END
				
				// Stroke
				ctx.strokeStyle 	= "#392E49";
					// width
					ctx.lineWidth	 	= 1;
					// Blure
					ctx.shadowBlur		= 2;
					ctx.shadowColor   	= "rgba(255, 255, 255, 1)";
				ctx.stroke();
			};

			littlePyramids();
			greatPyramids();
			middlePyramids();
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