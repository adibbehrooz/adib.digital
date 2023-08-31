/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** SKY ********************************
/*********************************************************************/

	class Pan {
		
		//____________________________
		//
		// Constructor 
		//____________________________

		constructor() {	
			// Canvas
			this.panCanvas = document.getElementById('canvas__pan');
			this.panCanvas.style.position = 'absolute';
			this.ctx = this.panCanvas.getContext('2d');
			this.panCanvas.width = window.innerWidth;
			this.panCanvas.height = window.innerHeight;

			// Pan 
			this.cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; 
			this.negativeCamera = { x: -window.innerWidth / 2, y: -window.innerHeight / 2 };
			this.zeroCamera = { x: 0, y: 0};
			
			// Zoom
			this.cameraZoom = 1;
			this.maxZoom = 5;
			this.minZoom = 0.1;
			this.scrollSensitivity = 0.000 * 3.55;
			this.fps = 25;
			
			this.initialPinchDistance = null;
			this.lastZoom = this.cameraZoom;
			
			// Drag
			this.isDragging = false;
			this.speedDrag = 0.2;
			this.dragStart = { x: 0, y: 0 };
			this.currentX = 0;
			this.currentY = 0;
			
			// Wave
			this.radious = Math.PI / 180;
			this.amplitude = 10;
			this.frequency = 0.02;
			this.speed = 0.045;
			this.phi = 0;
			this.frames = 0;
			this.stopped = true;	

		};


		//_______________________________
		//
		// All 
		//_______________________________

		init() {
			this._eventListeners();
			this.draw();
		};


		//____________________________
		//
		// Responsive 
		//____________________________

		_resize() {
			let windowWidth = window.innerWidth;
			let windowHeight = window.innerHeight;

			this.panCanvas.width = windowWidth;
			this.panCanvas.height = windowHeight;
		};

		draw() {
			const start = () => {
				this.panCanvas.width = window.innerWidth;
				this.panCanvas.height = window.innerHeight;

				// Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
				this.ctx.translate( window.innerWidth , window.innerHeight );
				this.ctx.scale(this.cameraZoom, this.cameraZoom);
				this.ctx.translate( -window.innerWidth, -window.innerHeight );
				
				this.ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
			};

			const staticLines = () => {
				for( let m = 0; m < 2; m++ ) {	
					// Draw Lines
					this.ctx.beginPath();
					this.ctx.moveTo( -window.innerWidth, ( ((this.cameraOffset.y / 2) * 2.5)  + (m * 10) ) );
					this.ctx.lineTo( window.innerWidth, ( ((this.cameraOffset.y / 2) * 2.5) +  (m * 10) ) );

					// Width
					this.ctx.lineWidth = 1;

					// Gradient Line
					let gradient = this.ctx.createLinearGradient(0, 0, this.panCanvas.width, 0);
					gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
					gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
					gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
					this.ctx.strokeStyle = gradient;
					
					this.ctx.lineWidth     = 1;
					this.ctx.strokeStyle = "#392E49";
					this.ctx.shadowOffsetX = 0;
					this.ctx.shadowOffsetY = -10;
					this.ctx.shadowBlur    = 55;
					this.ctx.shadowColor   = "rgba(255, 255, 255, 1)";

					this.ctx.stroke();
					this.ctx.restore();
				};
			};
			
			const dynamicLines = () => {
				let k = 5, opacity = [ 0, 0 ];
				for( let m = 0; m < 13; m++ ) {	
				
					let firstOpacity = opacity[0] += 0.015;
					let secondOpacity = opacity[1] += 0.038;					
					this.frames++;
					this.phi = this.frames / 50;	
					
					this.ctx.beginPath();
					this.ctx.moveTo( -window.innerWidth, ( ((this.cameraOffset.y / 2) * 2.5)  + (m * k) ) );
					
					// Sin Wave	
					for (let x = -window.innerWidth; x < window.innerWidth; x++) {
						let y = Math.sin(x * this.frequency + this.phi) * this.amplitude / 8 + this.amplitude / 12;
						this.ctx.lineTo(x, ((this.cameraOffset.y / 2) * 2.5) + y +  (m * k) );
					}
					// 1. Width
					this.ctx.lineWidth = 1;				
					// 2. Gradient Line
					let gradient = this.ctx.createLinearGradient(0, 0, this.panCanvas.width, 0);
					gradient.addColorStop(0,"rgba(23, 210, 168, "+ firstOpacity +")");
					gradient.addColorStop(0.5,"rgba(255, 255, 255, "+ secondOpacity +")");
					gradient.addColorStop(1,"rgba(23, 210, 168, "+ firstOpacity +")");
					this.ctx.strokeStyle = gradient;
					// 3. Shadow Line
					this.ctx.shadowOffsetX = 0;
					this.ctx.shadowOffsetY = 0;
					this.ctx.shadowBlur    = 0;						

					this.ctx.stroke();	
					this.ctx.restore();
					if( m >= 0 && m < 7) k+=1.1; else k +=0.8;
				};						
			};

			const css3Outline = () => {
				this.ctx.beginPath();
				this.ctx.lineWidth = 1;

				// Outline
				this.ctx.moveTo( (window.innerWidth / 2) + 0.000000 * 3.5, (this.cameraOffset.y / 2) + 19.23200 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 9.635000 * 3.5, (this.cameraOffset.y / 2) + 23.25000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 20.80000 * 3.5, (this.cameraOffset.y / 2) + 19.23200 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 24.00000 * 3.5, (this.cameraOffset.y / 2) + 0.751000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 24.00000 * 3.5, (this.cameraOffset.y / 2) + 0.750000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 3.630000 * 3.5, (this.cameraOffset.y / 2) + 0.750000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 2.815000 * 3.5, (this.cameraOffset.y / 2) + 4.868000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 19.48500 * 3.5, (this.cameraOffset.y / 2) + 4.868000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 18.96000 * 3.5, (this.cameraOffset.y / 2) + 7.515000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 2.275000 * 3.5, (this.cameraOffset.y / 2) + 7.515000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 1.475000 * 3.5, (this.cameraOffset.y / 2) + 11.63300 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 18.14500 * 3.5, (this.cameraOffset.y / 2) + 11.63300 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 17.20500 * 3.5, (this.cameraOffset.y / 2) + 16.51000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 10.50000 * 3.5, (this.cameraOffset.y / 2) + 18.73900 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 4.680000 * 3.5, (this.cameraOffset.y / 2) + 16.51000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 5.080000 * 3.5, (this.cameraOffset.y / 2) + 14.47100 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 1.475000 * 3.5, (this.cameraOffset.y / 2) + 14.47100 * 3.5 );	
				this.ctx.lineTo( (window.innerWidth / 2) + 0.100000 * 3.5, (this.cameraOffset.y / 2) + 19.14200 * 3.5 );

				// this.ctx.fill();					
				this.ctx.stroke();	
			};
			
			const css3Inline = () => {
				this.ctx.beginPath();
				this.ctx.lineWidth = 1;
							
				// Inline
				this.ctx.moveTo( (window.innerWidth / 2) + 3.175000 * 3.5, (this.cameraOffset.y / 2) + 2.750000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 21.50000 * 3.5, (this.cameraOffset.y / 2) + 2.750000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 18.70000 * 3.5, (this.cameraOffset.y / 2) + 17.9000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 9.70000 * 3.5, (this.cameraOffset.y / 2) + 21.00000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 1.70000 * 3.5, (this.cameraOffset.y / 2) + 17.50000 * 3.5 );
												
				this.ctx.moveTo( (window.innerWidth / 2) + 2.175000 * 3.5, (this.cameraOffset.y / 2) + 9.750000 * 3.5 );
				this.ctx.lineTo( (window.innerWidth / 2) + 20.175000 * 3.5, (this.cameraOffset.y / 2) + 9.750000 * 3.5 );
								
				this.ctx.stroke();				
			};
			
			const css3Stars = () => {
				this.ctx.beginPath();
				this.ctx.lineWidth = 1;
							
				// Little Stars
				this.ctx.arc( (window.innerWidth / 2) + 41.70000 * 3.5, (this.cameraOffset.y / 2) + 17.35000 * 3.5, 50, 0, 2 * Math.PI);
				this.ctx.arc( (window.innerWidth / 2) + 49.70000 * 3.5, (this.cameraOffset.y / 2) + 20.85000 * 3.5, 50, 0, 2 * Math.PI);
								
				this.ctx.stroke();			
			};

			const animate = () => {
				start();
				staticLines();
				dynamicLines();
				
				// 1. CSS3
				css3Outline();
				css3Inline();
				css3Stars();								
				requestAnimationFrame( animate );
			};
			animate();
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
				
				this.cameraZoom = Math.min( this.cameraZoom, this.maxZoom );
				this.cameraZoom = Math.max( this.cameraZoom, this.minZoom );
				// console.log(zoomAmount)
			}
		};

		_eventListeners() {
 			  
			// 1. Resize
			this._resize();
			window.addEventListener("resize", () => {
				this._resize();
			});

			// 2. Mouse
			this.panCanvas.addEventListener( "mousedown", event => { 
				this.onPointerDown(event); 
			});
			this.panCanvas.addEventListener( "mouseup", () => { 
				this.onPointerUp(); 
			});
			this.panCanvas.addEventListener( "mousemove", event => { 
				this.onPointerMove(event); 
			});

			// 3. Touch
			this.panCanvas.addEventListener( "touchstart", event => {
				this.handleTouch( event,  this.onPointerDown(event) );
			});
			this.panCanvas.addEventListener( "touchend",  event => {
				this.handleTouch( event, this.onPointerUp() );
			});
			this.panCanvas.addEventListener( "touchmove", event => {
				this.handleTouch( event, this.onPointerMove(event) );
			});

			// 3. Wheel
			this.panCanvas.addEventListener( "wheel", event => { 
				// this.adjustZoom( event.deltaY*this.scrollSensitivity );
			});
		};

	};

	export { Pan };

