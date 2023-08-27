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
			this.panCanvas = document.getElementById('canvas__pan');
			this.panCanvas.style.position = 'absolute';
			this.ctx = this.panCanvas.getContext('2d');

			this.panCanvas.width = window.innerWidth;
			this.panCanvas.height = window.innerHeight;

			this.cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; 
			this.negativeCamera = { x: -window.innerWidth / 2, y: -window.innerHeight / 2 };
			this.zeroCamera = { x: 0, y: 0};

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
			const animate = () => {
				this.panCanvas.width = window.innerWidth;
				this.panCanvas.height = window.innerHeight;
				
				
				// Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
				this.ctx.translate( window.innerWidth , window.innerHeight );
				this.ctx.scale(this.cameraZoom, this.cameraZoom);
				this.ctx.translate( -window.innerWidth, -window.innerHeight );
				this.ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
				// Line
				this.ctx.beginPath();
				this.ctx.moveTo( -window.innerWidth, this.cameraOffset.y );
				this.ctx.lineTo( window.innerWidth, this.cameraOffset.y );
				this.ctx.strokeStyle = 'white';
				this.ctx.lineWidth = 1;
				this.ctx.stroke();
				
				this.ctx.restore();
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
				this.adjustZoom( event.deltaY*this.SCROLL_SENSITIVITY );
			});
		};

	};

	export { Pan };

