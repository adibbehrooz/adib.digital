/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** SKY ********************************
/*********************************************************************/
	
	import { positions } from './positions';
	
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
			this.offsetX = this.panCanvas.offsetLeft;
			this.offsetY = this.panCanvas.offsetTop;
			this.cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
			this.initialPinchDistance = null;
			
			// Drag
			this.isDragging = false;
			this.srpeedDrag = 0.2;
			this.dragStart = { x: 0, y: 0 };
			this.currentX = 0;
			this.currentY = 0;
			
			// Wave
			this.radious = Math.PI / 180;
			this.amplitude = 10;
			this.frequency = 0.02;
			this.srpeed = 0.045;
			this.phi = 0;
			this.frames = 0;
			this.stopped = true;
			this.fps = 25;
			
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
			this.srp = this.shapeRelatedPosition();
	
		};


		//_______________________________
		//
		// All 
		//_______________________________

		init() {
			this._eventListeners();
			this.draw();
		};

		draw() {
			const animate = () => {
				this.initDraw();
				this.lines();
				this.shape();
			};
			setInterval( animate, 500 / this.fps);
		};

		//____________________________
		//
		// Draw 
		//____________________________
		
		initDraw() {
			this.panCanvas.width = window.innerWidth;
			this.panCanvas.height = window.innerHeight;
			this.ctx.scale(this.cameraZoom, this.cameraZoom);
			this.ctx.translate( window.innerWidth , window.innerHeight ); // Full Pan	
			this.ctx.clearRect(0, 0, this.panCanvas.width, this.panCanvas.height);
		};


		/****************** LINES ******************/
		/*******************************************/	

		lines() {
			this.ctx.translate( -window.innerWidth, -window.innerHeight );
			this.staticLines();
			this.dynamicLines();
		};

		// Static Lines
		staticLines() {
			for( let m = 0; m < 2; m++ ) {	
				// Draw Lines
				this.ctx.beginPath();
				this.ctx.moveTo( -window.innerWidth, (this.cameraOffset.y / 2) * 2.5  + (m * 10) );
				this.ctx.lineTo( window.innerWidth,  (this.cameraOffset.y / 2) * 2.5 +  (m * 10) );

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
			};
		};

		// Dynamic Lines
		dynamicLines() {
			let k = 5, opacity = [ 0, 0 ];
			for( let m = 0; m < 13; m++ ) {	
				if( m >= 0 && m < 7) k+=1.1; else k +=0.8;

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
			};
		};
		
		/****************** Shape ******************/
		/*******************************************/

		shapeRelatedPosition() {
			const position = {
				css: {
            		relation: 	{ x: window.innerWidth / 2, y: this.cameraOffset.y / 2 },
        		},
			};
			return position;
		};

		translate(shape) {
			switch(shape) {
				case 'css':
					this.ctx.translate( -(window.innerWidth / 1.9) + this.cameraOffset.x, -(window.innerHeight / 2.1) + this.cameraOffset.y );
				break;
			}
		}

		shape() {
			for (let key of Object.keys( this.srp )) {
				this.translate(key);
				this.shapeOutline(key);
				this.shapeInline(key);
				this.shapeStars(key);
			}
		};

		shapeOutline(shapeName) {

			// 1. Start
			this.ctx.beginPath();

			// 2. Draw Lines
			this.ctx.moveTo( this.srp[shapeName]['relation']['x'] + positions[shapeName]['outline'][0]['x'] * this.scaleSize, this.srp[shapeName]['relation']['y'] + positions[shapeName]['outline'][0]['y'] * this.scaleSize );
			for( let i = 1; i < positions[shapeName]['outline'].length; i++ ) {
				if (  positions[shapeName]['outline'][i]['move'] == true ) {
					this.ctx.moveTo( this.srp[shapeName]['relation']['x'] + positions[shapeName]['outline'][i]['x'] * this.scaleSize, this.srp[shapeName]['relation']['y'] + positions[shapeName]['outline'][i]['y'] * this.scaleSize );
				} else {
					this.ctx.lineTo( this.srp[shapeName]['relation']['x'] + positions[shapeName]['outline'][i]['x'] * this.scaleSize, this.srp[shapeName]['relation']['y'] + positions[shapeName]['outline'][i]['y'] * this.scaleSize );
				}
			}

			// 3. Line Features
			this.ctx.lineWidth = 1;
			this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';	 // Final : rgba(255, 255, 255, 1);	
			this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)';		
			this.ctx.stroke();
			this.ctx.fill(); // HIDE IN FINAL
			this.ctx.closePath();
		};

		shapeInline(shapeName) {

			//1. Start
			this.ctx.beginPath();
			
			// 2. Draw lines	
			this.ctx.moveTo( this.srp[shapeName]['relation']['x'] + positions[shapeName]['inline'][0]['x']  * this.scaleSize,  this.srp[shapeName]['relation']['y'] + positions[shapeName]['inline'][0]['y'] * this.scaleSize );
			for( let i = 1; i < positions[shapeName]['inline'].length; i++ ) {
				if (  positions[shapeName]['inline'][i]['move'] == true ) {
					this.ctx.moveTo( this.srp[shapeName]['relation']['x'] + positions[shapeName]['inline'][i]['x'] * this.scaleSize, this.srp[shapeName]['relation']['y'] + positions[shapeName]['inline'][i]['y'] * this.scaleSize );
				} else {
					this.ctx.lineTo( this.srp[shapeName]['relation']['x'] + positions[shapeName]['inline'][i]['x'] * this.scaleSize, this.srp[shapeName]['relation']['y'] + positions[shapeName]['inline'][i]['y'] * this.scaleSize );
				}
			}

			// 3. Line Features
			this.ctx.lineWidth = 1;
			this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';		
			this.ctx.stroke();
			this.ctx.closePath();
		};

		shapeStars(shapeName) {
			
			// 1. Start
			let randomRadius = Math.random() * (this.minMaxRadius.maxRadius - this.minMaxRadius.minRadius) + this.minMaxRadius.minRadius; 

			// 2. Update
			const update = () => {
				for (let i = 0; i < positions.css.inline.length; i++ ) {
					if (randomRadius > 2.2 || randomRadius < 1 ) {
						this.radiusChange = - this.radiusChange;
					}
					randomRadius += this.radiusChange;
				}
			};

			// 3. Render Stars
			const render = () => {
				for (let i = 0; i < positions.css.inline.length; i++ ) {
					this.ctx.beginPath();
					this.ctx.arc( this.srp[shapeName]['relation']['x'] + positions[shapeName]['inline'][i]['x'] * this.scaleSize, this.srp[shapeName]['relation']['y'] + positions[shapeName]['inline'][i]['y'] * this.scaleSize, randomRadius, 0, 2 * Math.PI, false);
					this.ctx.shadowBlur = this.shadowBlur;
					this.ctx.shadowColor = this.starColor;
					this.ctx.fillStyle = this.redStarColor;
					this.ctx.fill();				
					this.ctx.stroke();
					this.ctx.closePath();
					update();				
				}		
			};
			render();
		};

		shapeEvent( cursor, shapeName, offsetX, offsetY ) {

			// 1. Draw Shape
			const cssBpundries = new Path2D();
			this.ctx.beginPath();
			cssBpundries.moveTo( this.srp[shapeName]['relation']['x'] + positions[shapeName]['outline'][0]['x'] * this.scaleSize, this.srp[shapeName]['relation']['y'] + positions[shapeName]['outline'][0]['y'] * this.scaleSize );
			for( let i = 1; i < positions[shapeName]['outline'].length; i++ ) {
				cssBpundries.lineTo( this.srp[shapeName]['relation']['x'] + positions[shapeName]['outline'][i]['x'] * this.scaleSize, this.srp[shapeName]['relation']['y'] + positions[shapeName]['outline'][i]['y'] * this.scaleSize );
			}
			const isPointInPath = this.ctx.isPointInPath(cssBpundries, offsetX, offsetY);
			if( isPointInPath ) {
				this.ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';	console.log("true"); 	// Final: rgba(255, 255, 255, 1)
				// 1.1. Cursor
				gsap.to(cursor, 0.1, {
					opacity: 0.7,
					scale: 3
				});	
			} else {
				this.ctx.fillStyle = 'rgba(255, 255, 255, 0.000000001)';	console.log("false"); 	// Final : rgba(255, 255, 255, 0)
			}

			// 2. Features
			this.ctx.fill(cssBpundries);
			this.ctx.closePath();
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
		// Events 
		//____________________________	

		geteLocation(event) {

			if (event.touches && event.touches.length == 1) {
				return { 
					x: event.touches[0].clientX, 
					y: event.touches[0].clientY 
				};
			} else if (event.clientX && event.clientY) {
				return { 
					x: event.clientX, 
					y: event.clientY
				}
			}
		};

		onPointerDown(event) {
			this.isDragging = true;	
			this.dragStart.x = event.clientX - this.cameraOffset.x;
			this.dragStart.y = event.clientY - this.cameraOffset.y;
		};

		onPointerUp() {
			this.isDragging = false;
		};
		
		onPointerMove(event) {
			if ( this.isDragging ) {
				this.cameraOffset.x = event.clientX - this.dragStart.x;
				this.cameraOffset.y = event.clientY - this.dragStart.y;
			}
			// Cursor
			const followCircle = document.getElementById('followCircle');
			gsap.to(followCircle, 0.1, {
				opacity: 1,
				scale: 1
			});
			
			// Offset
			let xPosition = parseInt(event.clientX - this.offsetX);
			let YPosition = parseInt(event.clientY - this.offsetY);
			for (let key of Object.keys( this.srp )) {
				this.shapeEvent(followCircle, key, xPosition, YPosition);
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
			event.stopPropagation()

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