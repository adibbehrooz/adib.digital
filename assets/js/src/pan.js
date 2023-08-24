
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

			this.cameraOffset = { x: window.innerWidth/2, y: window.innerHeight/2 };
			this.cameraZoom = 1;
			this.MAX_ZOOM = 5;
			this.MIN_ZOOM = 0.1;
			this.SCROLL_SENSITIVITY = 0.0005;
			this.fps = 25;
			
			this.initialPinchDistance = null;
			this.lastZoom = this.cameraZoom;
			
			this.isDragging = false;
			this.dragStart = { x: 0, y: 0 };	
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
							
			window.addEventListener("resize", (e) => {
				this.PanResize();
			});	
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
		
		
		draw() {
			const animate = () => {
				this.canvas.width = window.innerWidth
				this.canvas.height = window.innerHeight
				    
				// Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
				this.ctx.translate( window.innerWidth / 2, window.innerHeight / 2 )
				this.ctx.scale(this.cameraZoom, this.cameraZoom)
				this.ctx.translate( -window.innerWidth / 2 + this.cameraOffset.x, -window.innerHeight / 2 + this.cameraOffset.y )
				this.ctx.clearRect(0,0, window.innerWidth, window.innerHeight)

				  
				this.ctx.font = "bold 24px verdana, sans-serif ";
				this.welcomeMessage = "Welcome to the store!";
				this.ctx.textAlign = "start";
				this.ctx.textBaseline = "bottom";
				this.ctx.fillStyle = "#ff0000"; //<======= here
				this.ctx.fillText(this.welcomeMessage, 10, 50);

				this.ctx.font = "bold 14px verdana, sans-serif";
				this.message2 = "Your favorite store for videos games and latest DVDs!";
				this.ctx.textAlign = "start";
				this.ctx.textBaseline = "bottom";
				this.ctx.fillStyle = "#00ff00"; //<======= and here
				this.ctx.fillText(this.message2, 10, 100);
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
			this.dragStart.x = this.geteLocation(event).x / this.cameraZoom - this.cameraOffset.x;
			this.dragStart.y = this.geteLocation(event).y / this.cameraZoom - this.cameraOffset.y;
						
			// console.log(" == MOUSE POINTER DOWN == " + "DRAG: "+ this.isDragging+" DRAG X: "+dragStartX +" DRAG Y: "+dragStartY  +" CAMERA OFFSET X: "+this.cameraOffset.x +" CAMERA OFFSET Y: "+this.cameraOffset.y );
		};

		onPointerUp() {
			this.isDragging = false;
			let initialPinchDistance = null;
			let lastZoom = this.cameraZoom;	
	
			// console.log(" == MOUSE POINTER UP == " + "DRAG: "+ this.isDragging+" LAST ZOOM: "+lastZoom);
		};
		
		onPointerMove() {
			if ( this.isDragging ) {
				let dragStartX = this.dragStart.x;
				let dragStartY = this.dragStart.y;
							
				this.cameraOffset.x = this.geteLocation(event).x / this.cameraZoom - this.dragStart.x;
				this.cameraOffset.y = this.geteLocation(event).y / this.cameraZoom - this.dragStart.y;
				
				// console.log(" == MOUSE POINTER DRAG == " + "DRAG: "+ this.isDragging + " CAMERA OFFSET X: "+ this.cameraOffset.x +" CAMERA OFFSET Y: "+ this.cameraOffset.y);
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
 			   			
			// 1. Mouse
			this.canvas.addEventListener( "mousedown", event => { 
				this.onPointerDown(event); 
			});				
			this.canvas.addEventListener( "mouseup", () => { 
				this.onPointerUp(); 
			});
			this.canvas.addEventListener( "mousemove", event => { 
				this.onPointerMove(event); 
			});
			
			// 2. Touch
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

