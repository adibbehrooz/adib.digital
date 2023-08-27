/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATION ********************************
/*******************************************************************************/
	
	class Constellations {
	
		//____________________________
		//
		// 	Constructor 
		//____________________________
		
		constructor() {	
			this.constellationsCanvas = document.getElementById('canvas__pan');
			this.ctx = this.constellationsCanvas.getContext('2d');

			this.constellationsCanvas.width = window.innerWidth;
			this.constellationsCanvas.height = window.innerHeight;

			this.cameraOffset = { x: 0, y: 0};	
			this.cameraZoom = 1;
			this.MAX_ZOOM = 5;
			this.MIN_ZOOM = 0.1;
			this.SCROLL_SENSITIVITY = 0.0005;
			this.fps = 25;
			
			this.initialPinchDistance = null;
			this.lastZoom = this.cameraZoom;
			
			this.isDragging = false;
			this.speedDrag = 0.2;
			this.dragStart = { x: 0, y: 0 };
			this.currentX = 0;			
			this.currentY = 0;
		};


		//____________________________
		//
		// RUN
		//____________________________
		
		init() {
			this.fonts();
		};


		//____________________________
		//
		// Fonts
		//____________________________
		
		fonts() {
			const animate = () => {
				this.constellationsCanvas.width = window.innerWidth;
				this.constellationsCanvas.height = window.innerHeight;
															 
				// Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
				this.ctx.translate( window.innerWidth , window.innerHeight );
				this.ctx.scale(this.cameraZoom, this.cameraZoom);
				this.ctx.translate( -window.innerWidth + this.cameraOffset.x, -window.innerHeight + this.cameraOffset.y );
				this.ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
				
				// FONT ONE				  
				this.ctx.font = "bold 24px verdana, sans-serif ";
				this.welcomeMessage = "Welcome to the store!";
				this.ctx.textAlign = "start";
				this.ctx.textBaseline = "bottom";
				this.ctx.fillStyle = "#ff0000";
				this.ctx.fillText(this.welcomeMessage, 10, 50);

				// FONT TWO
				this.ctx.font = "bold 14px verdana, sans-serif";
				this.message2 = "Your favorite store for videos games and latest DVDs!";
				this.ctx.textAlign = "start";
				this.ctx.textBaseline = "bottom";
				this.ctx.fillStyle = "#00ff00";
				this.ctx.fillText(this.message2, 10, 100);
				
				this.ctx.restore();
				requestAnimationFrame( animate );  
				
			};
			animate();		
		};

	}
	
	export { Constellations };
