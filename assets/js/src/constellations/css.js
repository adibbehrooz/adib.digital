/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATION ********************************
/*******************************************************************************/
	
		let constCanvas = document.getElementById('canvas__pan');
		let ctx = constCanvas.getContext('2d');
		constCanvas.width = window.innerWidth;
		constCanvas.height = window.innerHeight;

		// Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
		ctx.translate( window.innerWidth , window.innerHeight );
		ctx.translate( -window.innerWidth, -window.innerHeight );
					
		ctx.clearRect(0,0, window.innerWidth, window.innerHeight);

	
		/****************** CSS ******************/
		/*****************************************/
		
		function cssBpundries() {
			const cssBpundries = new Path2D();
			let relatePosition = { x: window.innerWidth / 2, y: (window.innerHeight / 2) / 2 };
			const linePosition = [ 
				{ x: 0.000, 	y: 19.232 },
				{ x: 9.635, 	y: 23.250 },					
				{ x: 20.800, 	y: 19.232 },
				{ x: 24.000, 	y: 0.750 },
				{ x: 3.630, 	y: 0.750 },
				{ x: 2.815, 	y: 4.868 },
				{ x: 0.000, 	y: 19.142 },	
			];
			cssBpundries.moveTo( relatePosition.x + linePosition[0].x *  scaleSize, relatePosition.y + linePosition[0].y * scaleSize );
			for( let i = 1; i < linePosition.length; i++ ) {
				cssBpundries.lineTo(  relatePosition.x + linePosition[i].x * scaleSize,  relatePosition.y + linePosition[i].y * scaleSize );
			}
			ctx.lineWidth = 1;	
			ctx.fillStyle = 'white';
			cssBpundries.closePath();
			ctx.fill(cssBpundries);

			// Event
			constCanvas.addEventListener( "mousemove", event => { 
				let isPointInPath = ctx.isPointInPath(cssBpundries, event.offsetX, event.offsetY);
				if(isPointInPath) {
					ctx.fillStyle = 'green';
					console.log("This Is True");
				} else {
					ctx.fillStyle = 'white';
					console.log("This Is False");
				}
				ctx.fill(cssBpundries);
			});
		}

		function cssOutlines() {
			let relatePosition = { x: window.innerWidth / 2, y: (window.innerHeight / 2) / 2 };
			const linePosition = [ 
				{ x: 0.000, 	y: 19.232 },
				{ x: 9.635, 	y: 23.250 },					
				{ x: 20.800, 	y: 19.232 },
				{ x: 24.000, 	y: 0.750 },
				{ x: 3.630, 	y: 0.750 },
				{ x: 2.815, 	y: 4.868 },
				{ x: 19.485, 	y: 4.868 },
				{ x: 18.960, 	y: 7.515 },
				{ x: 2.2750, 	y: 7.515 },
				{ x: 1.4750, 	y: 11.633 },
				{ x: 18.145, 	y: 11.633 },
				{ x: 17.205, 	y: 16.510 },					
				{ x: 10.500, 	y: 18.739 },
				{ x: 4.6800, 	y: 16.510 },
				{ x: 5.0800, 	y: 14.471 },
				{ x: 1.475, 	y: 14.471 },	
				{ x: 0.000, 	y: 19.142 },				
			];
				
			ctx.beginPath();
			ctx.moveTo( relatePosition.x + linePosition[0].x *  scaleSize, relatePosition.y + linePosition[0].y * scaleSize );
			for( let i = 1; i < linePosition.length; i++ ) {
				ctx.lineTo(  relatePosition.x + linePosition[i].x * scaleSize,  relatePosition.y + linePosition[i].y * scaleSize );
			}
			ctx.lineWidth = 1;	
			ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';		
			// ctx.fill();	
			ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';		
			ctx.closePath();
			ctx.stroke();
			ctx.fillRect(posX, posY, width, height);
		};
		
		function cssInlines() {
			let relatePosition = { x: window.innerWidth / 2, y: (window.innerHeight / 2) / 2 };
			const linePosition = [ 
				{ x: 3.175, 	y: 2.750 },
				{ x: 21.500, 	y: 2.750 },					
				{ x: 18.700, 	y: 17.900 },
				{ x: 9.700, 	y: 21.000 },
				{ x: 1.700, 	y: 17.500 },
				{ x: 2.175,		y: 9.750 },
				{ x: 20.175,	y: 9.750 },
			];
												
			ctx.beginPath();
			ctx.lineWidth = 1;

			// Inline	
			ctx.moveTo( relatePosition.x + linePosition[0].x *  scaleSize,  relatePosition.y + linePosition[0].y * scaleSize );
			for( let i = 1; i < linePosition.length; i++ ) {
				if ( i == 5 ) {
					ctx.moveTo( relatePosition.x + linePosition[i].x * scaleSize,  relatePosition.y + linePosition[i].y * scaleSize );
				} else {
					ctx.lineTo( relatePosition.x + linePosition[i].x * scaleSize,  relatePosition.y + linePosition[i].y * scaleSize );
				}
			}
			ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';		
			ctx.stroke();
		};
		
		function cssStars() {		
			let relatePosition = { x: window.innerWidth / 2, y: (window.innerHeight / 2) / 2 };
			let starPosition = [
				{ x: 3.175, 	y: 2.750 },
				{ x: 21.500, 	y: 2.750 },					
				{ x: 18.700, 	y: 17.900 },
				{ x: 9.700, 	y: 21.000 },
				{ x: 1.700, 	y: 17.500 },
				{ x: 2.175,		y: 9.750 },
				{ x: 20.175, 	y: 9.750 },					
			];	
			let randomRadius = Math.random() * (minMaxRadius.maxRadius - minMaxRadius.minRadius) + minMaxRadius.minRadius; 
			let staticRadius = 2;
			
			// Update
			const update = () => {
				for (let i = 0; i < starPosition.length; i++ ) {
					if (randomRadius > 2.2 || randomRadius < 1 ) {
						radiusChange = - radiusChange;
					}
					randomRadius += radiusChange;
				}
			};
					
			const renders = () => {
				for (let i = 0; i < starPosition.length; i++ ) {
					ctx.beginPath();
					ctx.arc( relatePosition.x + starPosition[i].x * scaleSize, relatePosition.y + starPosition[i].y * scaleSize, randomRadius, 0, 2 * Math.PI, false);
					ctx.shadowBlur = shadowBlur;
					ctx.shadowColor = starColor;
					ctx.fillStyle = redStarColor;
					ctx.fill();				
					ctx.stroke();	
					update();				
				}		
			};
			renders();
		};

		export function css() {
			cssOutlines();
			cssInlines();
			cssStars();
		}