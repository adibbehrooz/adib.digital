/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Canvas ********************************
/************************************************************************/
					
	class Canvas {
				
		//____________________________
		//
		// 	Constructor
		//____________________________
			
		constructor() {
			// Global
			this.canvas = document.getElementById('canvas');
			this.ctx = canvas.getContext('2d');
			
			// Pan 
			this.cameraOffset = { x: window.innerWidth/2, y: window.innerHeight/2 };
			this.cameraZoom = 1;
			this.MAX_ZOOM = 5;
			this.MIN_ZOOM = 0.1;
			this.SCROLL_SENSITIVITY = 0.0005;
			this.isDragging = false
			this.dragStart = { x: 0, y: 0 }
		};
			
		//____________________________
		//
		// 	Responsive Canvas 
		//____________________________
								
		canvasResize() {
			let windowWidth = window.innerWidth;
			let windowHeight = window.innerHeight;

			this.canvas.width = windowWidth;
			this.canvas.height = windowHeight;	
							
			window.addEventListener("resize", (e) => {
				this.canvasResize();
			});	
		};
			
		//____________________________
		//
		// 	Cursor
		//____________________________

		canvasCursor() {
			const cLandscapeFrame = document.getElementById('middle');

			// create a Div element with class and id
			const circleDiv = document.createElement("div");
			circleDiv.setAttribute ('class', 'o-centerCircle');
			circleDiv.setAttribute ('id', 'centerCircle');

			// create a Div element with class and id
			const followDiv = document.createElement("div");
			followDiv.setAttribute ('class', 'o-followCircle');
			followDiv.setAttribute ('id', 'followCircle');

			cLandscapeFrame.parentNode.insertBefore(circleDiv, cLandscapeFrame);
			cLandscapeFrame.parentNode.insertBefore(followDiv, cLandscapeFrame);

			//________________ [GSAP] ________________
				
			gsap.set(".o-followCircle", {xPercent: -50, yPercent: -50});

			const ball = document.querySelector(".o-followCircle");
			const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
			const mouse = { x: pos.x, y: pos.y };
			const speed = 0.2;

			const xSet = gsap.quickSetter(ball, "x", "px");
			const ySet = gsap.quickSetter(ball, "y", "px");

			window.addEventListener("mousemove", mouseEvent => {    
			 	mouse.x = mouseEvent.x;
				mouse.y = mouseEvent.y;  
			});

			gsap.ticker.add(() => {
				  
				// adjust speed for higher refresh monitors
				const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
				  
				pos.x += (mouse.x - pos.x) * dt;
				pos.y += (mouse.y - pos.y) * dt;
				xSet(pos.x);
				ySet(pos.y);
			});	
		};
			
		//____________________________
		//
		// 	Pan
		//____________________________
		
		draw() {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
	
			// Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
			this.ctx.translate( window.innerWidth / 2, window.innerHeight / 2 );
			this.ctx.scale(this.cameraZoom, this.cameraZoom);
			this.ctx.translate( -window.innerWidth / 2 + cameraOffset.x, -window.innerHeight / 2 + cameraOffset.y );
			this.ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
			this.ctx.fillStyle = "#991111";
			this.drawRect(-50,-50,100,100);
	
			this.ctx.fillStyle = "#eecc77";
			this.drawRect(-35,-35,20,20);
			this.drawRect(15,-35,20,20);
			this.drawRect(-35,15,70,20);
			
			this.ctx.fillStyle = "#fff";
			this.drawText("Simple Pan and Zoom Canvas", -255, -100, 32, "courier");
			
			this.ctx.rotate(-31*Math.PI / 180);
			this.ctx.fillStyle = `#${(Math.round(Date.now()/40)%4096).toString(16)}`;
			this.drawText("Now with touch!", -110, 100, 32, "courier");
			
			this.ctx.fillStyle = "#fff";
			this.ctx.rotate(31*Math.PI / 180);
			
			this.drawText("Wow, you found me!", -260, -2000, 48, "courier");
			
			requestAnimationFrame( draw );	
		};
		
		getEventLocation(event) {
			if (event.touches && event.touches.length == 1) {
				return { 
					x: event.touches[0].clientX, 
					y: event.touches[0].clientY 
				};
			}
			else if (event.clientX && event.clientY) {
				return { 
					x: e.clientX,
					y: e.clientY 
				};		
			}
		};
		
		onPointerDown(event) {
			isDragging = true
			dragStart.x = getEventLocation(event).x/this.cameraZoom - this.cameraOffset.x
			dragStart.y = getEventLocation(event).y/this.cameraZoom - cameraOffset.y
		};
		
		onPointerUp(event) {
			isDragging = false
			initialPinchDistance = null
			lastZoom = cameraZoom
		}
		
	};
		
	export { Canvas };
	
	
	
	
