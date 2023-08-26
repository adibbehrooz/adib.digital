/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** SKY ********************************
/*********************************************************************/

	import { Sky } from './sky';
	const nightSky = new Sky();
	
	class Pan {
		
		//____________________________
		//
		// 	Constructor 
		//____________________________
		
		constructor() {
			this.canvas = document.getElementById('canvas');
			this.ctx = canvas.getContext('2d');
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;

			// this.cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
			// this.cameraOffset = { x: -window.innerWidth, y: -window.innerHeight};	
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
			
			//particle colors
			this.colors = [ '255, 255, 255',];
			//particle radius min/max
			this.minRadius = 0.2;
			this.maxRadius = 1.9;
			//particle opacity min/max
			this.minOpacity = 0;
			this.maxOpacity = 1;
			//particle speed min/max
			this.minSpeed = .005;
			this.maxSpeed = .19;
			//frames per second
			this.fps = 4;
			//number of particles
			this.numParticles = 1100;
		};
		
				
		//_______________________________
		//
		// All 
		//_______________________________
								
		init() {
			this.draw();
			this._eventListeners();
		};
		
		//____________________________
		//
		// 	Responsive 
		//____________________________
								
		_resize() {
			let windowWidth = window.innerWidth;
			let windowHeight = window.innerHeight;

			this.canvas.width = windowWidth;
			this.canvas.height = windowHeight;		
		};

			
		//____________________________
		//
		// 	Cursor
		//____________________________

		_cursor() {
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
		
		_rand(min, max) {
			return Math.random() * (max - min) + min;
		};
				
		draw() {
			this._cursor();
			const text = () => {				
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
			};
				
			const stars = () => {
				this.canvas.width = window.innerWidth;
				this.canvas.height = window.innerHeight;
															 
				// Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
				this.ctx.translate( window.innerWidth , window.innerHeight );
				this.ctx.scale(this.cameraZoom, this.cameraZoom);
				
				// 1.
				this.ctx.translate( -window.innerWidth + this.cameraOffset.x, -window.innerHeight + this.cameraOffset.y );
				
				// 2.
				// this.ctx.translate( -window.innerWidth, -window.innerHeight + this.cameraOffset.y );
				
				// 3.
				// this.ctx.translate( -window.innerWidth, -window.innerHeight );
				
				this.ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
				
				nightSky.createCircle();
				text();
				requestAnimationFrame( stars );
			};
			stars();
	
			/*
			const animate = () => {
				this.canvas.width = window.innerWidth;
				this.canvas.height = window.innerHeight;
															 
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
				nightSky.createCircle();
				
				requestAnimationFrame( animate );  
				
			};
			animate();
			*/
			/*	
			const animate = () => {	
				this.canvas.width = window.innerWidth;
				this.canvas.height = window.innerHeight;
				this.ctx = canvas.getContext('2d');
																 
				// Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
				this.ctx.translate( window.innerWidth , window.innerHeight );
				this.ctx.scale(this.cameraZoom, this.cameraZoom);
				// this.ctx.translate( -window.innerWidth, -window.innerHeight );
				this.ctx.translate( -window.innerWidth, -window.innerHeight + this.cameraOffset.y );
				this.ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
				
				// STARS
				let particle = [];
				for (let i = 0; i < 100; i++) {
					let color = this.colors[~~(this._rand(0, this.colors.length))];
					particle[i] = {
						radius		: this._rand(this.minRadius, this.maxRadius),
						xPos		: this._rand(0, canvas.width),
						yPos		: this._rand(0, canvas.height/this.numParticles * i),
						xVelocity 	: this._rand(this.minSpeed, this.maxSpeed),
						yVelocity 	: this._rand(this.minSpeed, this.maxSpeed),
						color		: 'rgba(' + color + ',' + this._rand(this.minOpacity, this.maxOpacity) + ')'
					}

					//once values are determined, draw particle on canvas
					this.ctx.fillStyle = particle[i].color;
					this.ctx.beginPath();
					this.ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 15 * Math.PI, true);
					this.ctx.fill();
			
				}
			
				requestAnimationFrame( animate );  
			};
			animate();
			*/
		};
		
		geteLocation(event) {
	
			if (event.touches && event.touches.length == 1) {	
				let touchPos = { x: event.touches[0].clientX, y: event.touches[0].clientY };
				// console.log(" == GET LOCATION == "+ "TOUCH POSITION" + `(${touchPos.x}, ${touchPos.y})` );
				return { 
					x: event.touches[0].clientX, 
					y: event.touches[0].clientY 
				};
			}
			else if (event.clientX && event.clientY) {
				let cursorPos = { x: event.clientX, y: event.clientY };
				// console.log(" == GET LOCATION == "+ "CURSOR POSITION" + `(${cursorPos.x}, ${cursorPos.y})` );	
				return { 
					x: event.clientX, 
					y: event.clientY
				}
			}
			
		};
		
		onPointerDown(event) {
			this.isDragging = true;					
			this.dragStart.x = event.clientX / this.cameraZoom - this.cameraOffset.x;
			this.dragStart.y = event.clientY / this.cameraZoom - this.cameraOffset.y;			
			// console.log(" POINTER DOWN " + " DRAG X: "+ this.dragStart.x + " DRAG Y: "+this.dragStart.y  + " CAMERA OFFSET X: "+this.cameraOffset.x + " CAMERA OFFSET Y: "+this.cameraOffset.y );
		};

		onPointerUp() {
			this.isDragging = false;
			let initialPinchDistance = null;
			let lastZoom = this.cameraZoom;	
			// console.log(" == MOUSE POINTER UP == " + "DRAG: "+ this.isDragging+" LAST ZOOM: "+lastZoom);
		};
		
		onPointerMove() {
			if ( this.isDragging ) {
			
				this.cameraOffset.x = event.clientX / this.cameraZoom - this.dragStart.x;
				this.cameraOffset.y = event.clientY / this.cameraZoom - this.dragStart.y;					
				// console.log( " POINTER DRAG " +  " Location X: " + event.clientX + " Location Y: " + event.clientY +" CAMERA OFFSET X: " + this.cameraOffset.x + " CAMERA OFFSET Y: " + this.cameraOffset.y );
			}

		};
		
		handleTouch(event, singleTouchHandler) {
			if ( event.touches.length == 1 ) {
				singleTouchHandler(event);
			} else if (event.type == "touchmove" && event.touches.length == 2) {
				this.isDragging = false;
				this.handlePinch(event);
			}
		};
		
		handlePinch(event) {
			event.preDefault();
			
			let touch1 = { x: event.touches[0].clientX, y: event.touches[0].clientY };
			let touch2 = { x: event.touches[1].clientX, y: event.touches[1].clientY };
			
			// This is distance squared, but no need for an expensive sqrt as it's only used in ratio
			let currentDistance = (touch1.x - touch2.x)**2 + (touch1.y - touch2.y)**2;
			
			if (this.initialPinchDistance == null) {
				this.initialPinchDistance = currentDistance;
			} else {
				this.adjustZoom( null, currentDistance/this.initialPinchDistance );
			}
		};
		
		adjustZoom(zoomAmount, zoomFactor) {
			if (!this.isDragging) {
				if (zoomAmount) {
					this.cameraZoom += zoomAmount;
				} else if (zoomFactor) {
					// console.log(zoomFactor);
					this.cameraZoom = zoomFactor*this.lastZoom;
				}
				
				this.cameraZoom = Math.min( this.cameraZoom, this.MAX_ZOOM );
				this.cameraZoom = Math.max( this.cameraZoom, this.MIN_ZOOM );
				// console.log(zoomAmount)
			}
		};
			
		_eventListeners() {
 			  
			// 1. Resize
			window.addEventListener("resize", () => {
				this._resize();
			});
								
			// 2. Mouse
			this.canvas.addEventListener( "mousedown", event => { 
				this.onPointerDown(event); 
			});				
			this.canvas.addEventListener( "mouseup", () => { 
				this.onPointerUp(); 
			});
			this.canvas.addEventListener( "mousemove", event => { 
				this.onPointerMove(event); 
			});
			
			// 3. Touch
			this.canvas.addEventListener( "touchstart", event => {
				this.handleTouch( event,  this.onPointerDown(event) );
			});
			this.canvas.addEventListener( "touchend",  event => {
				this.handleTouch( event, this.onPointerUp() );
			});
			this.canvas.addEventListener( "touchmove", event => {
				this.handleTouch( event, this.onPointerMove(event) );
			});
			
			// 3. Wheel
			this.canvas.addEventListener( "wheel", event => { 
				this.adjustZoom( event.deltaY*this.SCROLL_SENSITIVITY );
			});
		};
				
	};
	
	export { Pan };
