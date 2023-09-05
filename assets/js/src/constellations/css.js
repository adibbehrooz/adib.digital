/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATION ********************************
/*******************************************************************************/

	class CSS {
		
		//____________________________
		//
		// Constructor 
		//____________________________

		constructor() {
			this.cssCanvas = document.getElementById('canvas__pan');
			this.ctx = this.cssCanvas.getContext('2d');
			this.cssCanvas.width = window.innerWidth;
			this.cssCanvas.height = window.innerHeight;	
			
			// Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
			this.ctx.translate( window.innerWidth , window.innerHeight );
			this.ctx.translate( -window.innerWidth, -window.innerHeight );	
			this.ctx.clearRect(0,0, window.innerWidth, window.innerHeight);		

			// Constellation
			this.scaleSize = 3.5;
			this.fillColor = 'rgba(255, 255, 255, 1)';

			// "Stars" Inside Constellation
			this.starColor = 'rgba(255, 255, 255, 0.4)';
			this.fixedRadius = 2;
			this.minMaxRadius = { minRadius: 1, maxRadius : 2.5 };
			this.radiusChange = 0.15;
			this.redStarColor = 'rgba(255, 194, 184, 1)';
			this.shadowBlur = 1;
		};

		init() {
			this.cssOutlines();
			this.cssInlines();
			this.cssStars();
			// cssBpundries();
		};

		cssOutlines() {
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
				
			this.ctx.beginPath();
			this.ctx.moveTo( relatePosition.x + linePosition[0].x *  this.scaleSize, relatePosition.y + linePosition[0].y * this.scaleSize );
			for( let i = 1; i < linePosition.length; i++ ) {
				this.ctx.lineTo(  relatePosition.x + linePosition[i].x * this.scaleSize,  relatePosition.y + linePosition[i].y * this.scaleSize );
			}
			this.ctx.lineWidth = 1;	
			this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';		
			// ctx.fill();	
			this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';		
			this.ctx.closePath();
			this.ctx.stroke();
		};
		
		cssInlines() {
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
												
			this.ctx.beginPath();
			this.ctx.lineWidth = 1;

			// Inline	
			this.ctx.moveTo( relatePosition.x + linePosition[0].x *  this.scaleSize,  relatePosition.y + linePosition[0].y * this.scaleSize );
			for( let i = 1; i < linePosition.length; i++ ) {
				if ( i == 5 ) {
					this.ctx.moveTo( relatePosition.x + linePosition[i].x * this.scaleSize,  relatePosition.y + linePosition[i].y * this.scaleSize );
				} else {
					this.ctx.lineTo( relatePosition.x + linePosition[i].x * this.scaleSize,  relatePosition.y + linePosition[i].y * this.scaleSize );
				}
			}
			this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';		
			this.ctx.stroke();
		};
		
		cssStars() {		
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
			let randomRadius = Math.random() * (this.minMaxRadius.maxRadius - this.minMaxRadius.minRadius) + this.minMaxRadius.minRadius; 
			let staticRadius = 2;
			
			// Update
			const update = () => {
				for (let i = 0; i < starPosition.length; i++ ) {
					if (this.randomRadius > 2.2 || this.randomRadius < 1 ) {
						this.radiusChange = - this.radiusChange;
					}
					this.randomRadius += this.radiusChange;
				}
			};
					
			const renders = () => {
				for (let i = 0; i < starPosition.length; i++ ) {
					this.ctx.beginPath();
					this.ctx.arc( relatePosition.x + starPosition[i].x * this.scaleSize, relatePosition.y + starPosition[i].y * this.scaleSize, randomRadius, 0, 2 * Math.PI, false);
					this.ctx.shadowBlur = this.shadowBlur;
					this.ctx.shadowColor = this.starColor;
					this.ctx.fillStyle = this.redStarColor;
					this.ctx.fill();				
					this.ctx.stroke();	
					update();				
				}		
			};
			renders();
		};

		cssBpundries() {
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
			cssBpundries.moveTo( relatePosition.x + linePosition[0].x *  this.scaleSize, relatePosition.y + linePosition[0].y * this.scaleSize );
			for( let i = 1; i < linePosition.length; i++ ) {
				cssBpundries.lineTo(  relatePosition.x + linePosition[i].x * this.scaleSize,  relatePosition.y + linePosition[i].y * this.scaleSize );
			}
			this.ctx.lineWidth = 1;	
			this.ctx.fillStyle = 'white';
			cssBpundries.closePath();
			this.ctx.fill(cssBpundries);

			// Event
			constCanvas.addEventListener( "mousemove", event => { 
				let isPointInPath = this.ctx.isPointInPath(cssBpundries, event.offsetX, event.offsetY);
				if(isPointInPath) {
					this.ctx.fillStyle = 'green';
					console.log("This Is True");
				} else {
					this.ctx.fillStyle = 'white';
					console.log("This Is False");
				}
				this.ctx.fill(cssBpundries);
			});
		};

	};

	export { CSS };