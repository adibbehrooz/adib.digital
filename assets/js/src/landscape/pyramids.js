/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** LANDSCAPE :: PYRAMIDS ********************************
/***************************************************************************************/


const cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const pyramids = {

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
			let dragY = 0;
			// I. Little Pyramids
			const littlePyramids = () => {
				ctx.beginPath();
				ctx.moveTo( -window.innerWidth, ( ( cameraOffset.y ) / 2) * 2.5 - dragY );
				ctx.lineTo( window.innerWidth / 2,  (  ( cameraOffset.y ) / 2) * 2.5 - dragY ); 
				ctx.lineTo( window.innerWidth / 2 + 50,  ( ( cameraOffset.y ) / 2) * 2.1 - dragY ); 
				ctx.lineTo( window.innerWidth / 2 - 30,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY ); 
				ctx.lineTo( window.innerWidth / 2 + 140,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY );
				ctx.lineTo( window.innerWidth / 2 + 50,  ( ( cameraOffset.y ) / 2) * 2.09 - dragY );
				ctx.lineTo( window.innerWidth / 2 + 140,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY );
				ctx.lineTo( window.innerWidth,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY  ); 

				// Fiil
				ctx.fillStyle = 'rgba(255, 255, 255, .2)';
				ctx.fill();

				// Stroke
				ctx.strokeStyle = "#392E49";
				// width
				ctx.lineWidth = 1;
				// Blure
				ctx.shadowBlur = 2;
				ctx.shadowColor = "rgba(255, 255, 255, 1)";
				ctx.stroke();
			};

			// II. Great Pyramids
			const greatPyramids = () => {
				ctx.beginPath();
				ctx.moveTo( -window.innerWidth, ( ( cameraOffset.y ) / 2) * 2.5 - dragY );
				ctx.lineTo( window.innerWidth / 2 - 200,  (  ( cameraOffset.y ) / 2) * 2.5 - dragY ); 

				ctx.beginPath();
					ctx.lineTo( window.innerWidth / 2 - 200,  (  ( cameraOffset.y ) / 2) * 2.5 - dragY ); 
					ctx.lineTo( window.innerWidth / 2 - 50,  ( ( cameraOffset.y ) / 2) * 1.8 - dragY );
					ctx.lineTo( window.innerWidth / 2 - 130,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY ); 
					ctx.moveTo( -window.innerWidth / 2 - 200, ( ( cameraOffset.y ) / 2) * 2.5 - dragY );
					// Fiil
					ctx.fillStyle = 'rgba(255, 255, 255, .2)';
					ctx.fill();
				ctx.closePath();

				ctx.beginPath();
					ctx.lineTo( window.innerWidth / 2 - 30,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY );
					ctx.lineTo( window.innerWidth / 2 + 27,  ( ( cameraOffset.y ) / 2) * 2.2 - dragY ); 
					ctx.lineTo( window.innerWidth / 2 - 50,  ( ( cameraOffset.y ) / 2) * 1.8 - dragY );
					ctx.lineTo( window.innerWidth / 2 - 130,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY );
				ctx.closePath();

				ctx.lineTo( window.innerWidth,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY  ); 
				
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
				ctx.moveTo( -window.innerWidth, ( ( cameraOffset.y ) / 2) * 2.5 - dragY  );
				ctx.lineTo( window.innerWidth / 2 - 200,  (  ( cameraOffset.y ) / 2) * 2.5 - dragY ); 

				ctx.beginPath();
					ctx.lineTo( window.innerWidth / 2 - 350,  (  ( cameraOffset.y ) / 2) * 2.5 - dragY ); 
					ctx.lineTo( window.innerWidth / 2 - 230,  ( ( cameraOffset.y ) / 2) * 1.9 - dragY ); 
					ctx.lineTo( window.innerWidth / 2 - 300,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY ); 
					ctx.moveTo( -window.innerWidth / 2 - 350, ( ( cameraOffset.y ) / 2) * 2.5 - dragY );
					// Fiil
					ctx.fillStyle = 'rgba(255, 255, 255, .2)';
					ctx.fill();
				ctx.closePath();

				ctx.beginPath();
					ctx.lineTo( window.innerWidth / 2 - 200,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY ); 
					ctx.lineTo( window.innerWidth / 2 - 156,  ( ( cameraOffset.y ) / 2) * 2.3 - dragY ); 
					ctx.lineTo( window.innerWidth / 2 - 230,  ( ( cameraOffset.y ) / 2) * 1.9 - dragY );
					ctx.lineTo( window.innerWidth / 2 - 300,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY );
				ctx.closePath();

				ctx.lineTo( window.innerWidth,  ( ( cameraOffset.y ) / 2) * 2.5 - dragY );
				
				// Stroke
				ctx.strokeStyle	= "#392E49";
					// width
					ctx.lineWidth = 1;
					// Blure
					ctx.shadowBlur = 2;
					ctx.shadowColor	= "rgba(255, 255, 255, 1)";
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

export default { pyramids };