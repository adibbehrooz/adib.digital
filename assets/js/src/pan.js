/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** SKY ********************************
/*********************************************************************/

 	// import * as constellations from './constellations/css.js';
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

			// Pan Default Offset
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

		//____________________________
		//
		// Draw 
		//____________________________
		
		draw() {
		
			//____________ 1. Start ____________

			this.initDraw();

			//____________ 2. Lines ____________

			this.animation();


		};
		
		initDraw() {

			this.panCanvas.width = window.innerWidth;
			this.panCanvas.height = window.innerHeight;
			this.ctx.scale(this.cameraZoom, this.cameraZoom);


			// Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
			// this.ctx.translate( window.innerWidth / 2, window.innerHeight / 2 ); // Pan (Right To Left)
			this.ctx.translate( window.innerWidth , window.innerHeight ); // Pan (Top To Bottom)
			
			// this.ctx.translate( -window.innerWidth / 2 + this.cameraOffset.x, -window.innerHeight / 2 + this.cameraOffset.y ); // Pan (Right To Left)
			// this.ctx.translate( -window.innerWidth, -window.innerHeight ); // Pan (Top To Bottom)
		};
		
		/****************** LINES ******************/
		/*******************************************/	
				
		// Static Lines
		staticLines() {
			// this.ctx.translate( window.innerWidth , window.innerHeight );
			// this.ctx.translate( -window.innerWidth, -window.innerHeight );
			// this.ctx.translate( -(window.innerWidth / 1) + this.cameraOffset.x, -(window.innerHeight / 2.1) + this.cameraOffset.y );
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
		
		// Dynamic Lines
		dynamicLines() {
			this.ctx.translate( -window.innerWidth, -window.innerHeight );
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
		
		/****************** CSS ******************/
		/*****************************************/
		
		css() {
			this.ctx.translate( -(window.innerWidth / 1.9) + this.cameraOffset.x, -(window.innerHeight / 2.1) + this.cameraOffset.y );
			this.cssOutlines();
			this.cssInlines();
			this.cssStars();
			
		}

		cssBpund() {
			this.ctx.translate( -(window.innerWidth / 1.2) + this.cameraOffset.x, -(window.innerHeight / 2.1) + this.cameraOffset.y );
			this.cssBpundries();
		}

		cssOutlines() {
			
			let relatePosition = { x: window.innerWidth / 2, y: this.cameraOffset.y / 2 };
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
			// this.ctx.fill();	
			this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';		
			this.ctx.closePath();
			this.ctx.stroke();
			this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
		};
		
		cssInlines() {
				
			let relatePosition = { x: window.innerWidth / 2, y: this.cameraOffset.y / 2 };
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
				
			let relatePosition = { x: window.innerWidth / 2, y: this.cameraOffset.y / 2 };
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
					if (randomRadius > 2.2 || randomRadius < 1 ) {
						this.radiusChange = - this.radiusChange;
					}
					randomRadius += this.radiusChange;
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
			let relatePosition = { x: window.innerWidth / 2, y: this.cameraOffset.y / 2 };
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
			this.panCanvas.addEventListener( "mousemove", event => { 
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
		}


		// Animation
		animation() {
			const animate = () => {
				this.initDraw()
				this.staticLines();
				this.dynamicLines();
				this.css();
				// constellations.css();
				this.cssBpund();
				// requestAnimationFrame( animate ); // PAN
			};
			animate();	
		};

		
		//____________________________
		//
		// Events 
		//____________________________		
		
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
		
		onPointerMove(event) {
			if ( this.isDragging ) {
			
				this.cameraOffset.x = event.clientX / this.cameraZoom - this.dragStart.x;
				this.cameraOffset.y = event.clientY / this.cameraZoom - this.dragStart.y;
				// console.log( " POINTER DRAG " +  " Location X: " + event.clientX + " Location Y: " + event.clientY +" CAMERA OFFSET X: " + this.cameraOffset.x + " CAMERA OFFSET Y: " + this.cameraOffset.y );
			}
			// console.log( " POINTER MOVE " +  " Location X: " + event.clientX + " Location Y: " + event.clientY );

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
		
		//____________________________
		//
		// Event Listeners
		//____________________________	
		
		_eventListeners() {
 			  

			// 1. Resize Pan
			//_____________________________________

			this._resize();
			window.addEventListener("resize", () => {
				this._resize();
			});


			// 2. Mouse
			//_____________________________________
			
			// 2.1 Mouse For "Canvas Pan"
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
			//_____________________________________

			this.panCanvas.addEventListener( "touchstart", event => {
				this.handleTouch( event,  this.onPointerDown(event) );
			});
			this.panCanvas.addEventListener( "touchend",  event => {
				this.handleTouch( event, this.onPointerUp() );
			});
			this.panCanvas.addEventListener( "touchmove", event => {
				this.handleTouch( event, this.onPointerMove(event) );
			});


			// 4. Wheel
			//_____________________________________

			this.panCanvas.addEventListener( "wheel", event => { 
				// this.adjustZoom( event.deltaY*this.scrollSensitivity );
			});
		};

	};

	export { Pan };

	class Pan2 {
		
		constructor() {	
			this.canvasPan2 = document.getElementById("canvas__pan2")
			this.ctx = this.canvasPan2.getContext('2d')
			
			this.cameraOffset = { x: window.innerWidth/2, y: window.innerHeight/2 }
			this.cameraZoom = 1
			this.MAX_ZOOM = 5
			this.MIN_ZOOM = 0.1
			this.SCROLL_SENSITIVITY = 0.0005

			this.isDragging = false
			this.dragStart = { x: 0, y: 0 }

			this.initialPinchDistance = null;
			this.lastZoom = this.cameraZoom;
		};

		init() {
			this.draw();
			this.addEventListeners();
		};

		draw() {		
			this.canvasPan2.width = window.innerWidth
			this.canvasPan2.height = window.innerHeight
			
			const animation = () => {
				// Translate to the canvasPan2 centre before zooming - so you'll always zoom on what you're looking directly at
				this.ctx.translate( window.innerWidth / 2, window.innerHeight / 2 )
				this.ctx.scale(this.cameraZoom, this.cameraZoom)
				this.ctx.translate( -window.innerWidth / 2 + this.cameraOffset.x, -window.innerHeight / 2 + this.cameraOffset.y )
				this.ctx.clearRect(0,0, window.innerWidth, window.innerHeight)
				this.ctx.fillStyle = "#991111"
				this.drawRect(-50,-50,100,100)
				
				this.ctx.fillStyle = "#eecc77"
				this.drawRect(-35,-35,20,20)
				this.drawRect(15,-35,20,20)
				this.drawRect(-35,15,70,20)
				
				this.ctx.fillStyle = "#fff"
				this.drawText("Simple Pan and Zoom canvasPan2", -255, -100, 32, "courier")
				
				this.ctx.rotate(-31*Math.PI / 180)
				this.ctx.fillStyle = `#${(Math.round(Date.now()/40)%4096).toString(16)}`
				this.drawText("Now with touch!", -110, 100, 32, "courier")
				
				this.ctx.fillStyle = "#fff"
				this.ctx.rotate(31*Math.PI / 180)
				
				this.drawText("Wow, you found me!", -260, -2000, 48, "courier")
				requestAnimationFrame( animation );
			};
			animation();
			
		}; // Draw

		getEventLocation(event) {
			if (event.touches && event.touches.length == 1) {
				return { x:event.touches[0].clientX, y: event.touches[0].clientY }
			}
			else if (event.clientX && event.clientY) {
				return { x: event.clientX, y: event.clientY }        
			}
		};

		drawRect(x, y, width, height) {
			this.ctx.fillRect( x, y, width, height )
		};

		drawText(text, x, y, size, font) {
			this.ctx.font = `${size}px ${font}`
			this.ctx.fillText(text, x, y)
		};

		onPointerDown(event) {
			this.isDragging = true
			this.dragStart.x = this.getEventLocation(event).x / this.cameraZoom - this.cameraOffset.x
			this.dragStart.y = this.getEventLocation(event).y / this.cameraZoom - this.cameraOffset.y
		};	

		onPointerUp(event) {
			this.isDragging = false
			this.initialPinchDistance = null
			this.lastZoom = this.cameraZoom
		};

		onPointerMove(event) {
			if (this.isDragging) {
				this.cameraOffset.x = this.getEventLocation(event).x / this.cameraZoom - this.dragStart.x
				this.cameraOffset.y = this.getEventLocation(event).y / this.cameraZoom - this.dragStart.y
			}
		};

		handleTouch(event, singleTouchHandler) {
			if ( event.touches.length == 1 ) {
				singleTouchHandler(event)
			} else if (event.type == "touchmove" && event.touches.length == 2){
				this.isDragging = false
				this.handlePinch(event)
			}
		};
		handlePinch(event) {
			event.preventDefault()
			
			let touch1 = { x: event.touches[0].clientX, y: event.touches[0].clientY }
			let touch2 = { x: event.touches[1].clientX, y: event.touches[1].clientY }
			
			// This is distance squared, but no need for an expensive sqrt as it's only used in ratio
			let currentDistance = (touch1.x - touch2.x)**2 + (touch1.y - touch2.y)**2
			
			if (this.initialPinchDistance == null) {
				this.initialPinchDistance = currentDistance
			} else { 
				this.adjustZoom( null, currentDistance/initialPinchDistance )
			}
		};

		adjustZoom(zoomAmount, zoomFactor) {
			if (!this.isDragging){
				if (zoomAmount) {
					this.cameraZoom += this.zoomAmount
				}
				else if (zoomFactor)
				{
					// console.log(zoomFactor)
					this.cameraZoom = this.zoomFactor * this.lastZoom
				}
				
				this.cameraZoom = Math.min( this.cameraZoom, this.MAX_ZOOM )
				this.cameraZoom = Math.max( this.cameraZoom, this.MIN_ZOOM )
				
				console.log(zoomAmount)
			}
		}

		addEventListeners() {


			// 2. Mouse
			//_____________________________________
			
			// 2.1 Mouse For "Canvas Pan"
			this.canvasPan2.addEventListener( "mousedown", event => { 
				this.onPointerDown(event); 
			});
			this.canvasPan2.addEventListener( "mouseup", () => { 
				this.onPointerUp(); 
			});
			this.canvasPan2.addEventListener( "mousemove", event => { 
				this.onPointerMove(event);
			});

			// 3. Touch
			//_____________________________________

			this.canvasPan2.addEventListener( "touchstart", event => {
				this.handleTouch( event,  this.onPointerDown(event) );
			});
			this.canvasPan2.addEventListener( "touchend",  event => {
				this.handleTouch( event, this.onPointerUp() );
			});
			this.canvasPan2.addEventListener( "touchmove", event => {
				this.handleTouch( event, this.onPointerMove(event) );
			});


			// 4. Wheel
			//_____________________________________

			this.canvasPan2.addEventListener( "wheel", event => { 
				// this.adjustZoom( event.deltaY*this.scrollSensitivity );
			});

		};


	}; // Pan Class

	export { Pan2 };
