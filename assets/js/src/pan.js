/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** PAN ********************************
/*********************************************************************/

// Line Module
import { Lines } from './lines';
const lines = new Lines();

// Positions Module
import { constellations } from './constellations';
import { landscape } from './constellations';

// Ajax Module
import { Ajax } from './ajax';
const ajax = new Ajax();

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

		//Zoom
		this.cameraZoom = 1.1;
		this.maxZoom = 5;
		this.minZoom = 0.1;
		this.scrollSensitivity = 0.000 * 3.55;
			
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
		this.scaleSize = 4;
		this.fillColor = 'rgba(255, 255, 255, 1)';
		
		// "Stars" Inside Constellation
		this.starColor = 'rgba(255, 255, 255, 0.4)';
		this.fixedRadius = 2;
		this.minMaxRadius = { minRadius: 1, maxRadius : 2.7 };
		this.radiusChange = 0.15;
		this.redStarColor = 'rgba(255, 194, 184, 1)';
		this.shadowBlur = 0;

		// Shape Line Types
		this.lineTypes =  ['curve', 'inside', 'outside', 'arc'];
	};

	//_______________________________
	//
	// RUN! 
	//_______________________________

	init() {
		this._eventListeners();
		this.draw();
	};

	draw() {
		const animate = () => {
			requestAnimationFrame(animate);
			this.initDraw();
			this.nature();
			this.shapes();
		};
		animate();
		// setInterval( animate, 200 / this.fps);
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
		this.ctx.save();
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.clearRect(0, 0, this.panCanvas.width, this.panCanvas.height);
		this.ctx.restore();
	};

	/************************* NATURE *************************
	/*********************************************************/	

	nature() {
		this.ctx.translate( -window.innerWidth, -window.innerHeight );
		let canvaWidth = this.panCanvas.width
		let context = this.ctx;		
		let cameraOffset = this.cameraOffset;

		// I. Mountain, II. Shore
		Object.entries(landscape).forEach( (entry, index) => {
			const [key, value] = entry;
			value[key].coordination.curve(canvaWidth, context, cameraOffset);
		});

		// III. Ocean
		this.ocean();		
	};

	// III. Ocean :: Dynamic Waves
	ocean() {
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
			this.ctx.shadowBlur	= 0;	
			this.ctx.stroke();	
		};
	};

	/************************* SHAPES ************************
	/*********************************************************/	

	shapes() {
		// Translate Shapes
		this.ctx.translate( -(window.innerWidth / 2 ) + this.cameraOffset.x, -(window.innerHeight / 2 ) + this.cameraOffset.y );
		
		Object.entries(constellations).forEach( (entry, index) => {
			const [key, value] = entry;
			this.shapeLines(key, value); // 1. Draw Lines
			this.shapeStars(key, value); // 2. Draw Stars
		});
	
	};
	
	shapeLines(key, value) {

		// II. Line Types Loop
		this.lineTypes.forEach((lineType) => { 

			if(lineType == 'curve') {
				this.curveLines(key, value);
			} else if (lineType == 'arc') {
				this.shapeStars(key, value);
			} else {
				this.straightlines(lineType, key, value );
			}
		});
	};

	curveLines(name, constellation) {
		let context = this.ctx;
		constellation[name].coordination.curve(context);
	};

	straightlines(lineType, name, constellation) {
		let context = this.ctx;
		lines.drawLines(lineType, name, constellation, context);
	};

	shapeStars(name, constellation) {
		let linetype = 'arc';

		// 1. Start
		let randomRadius = Math.random() * (this.minMaxRadius.maxRadius - this.minMaxRadius.minRadius) + this.minMaxRadius.minRadius; 

		// 2. Update
		const update = () => {
			for (let i = 0; i < constellation[name].coordination[linetype].length; i++ ) {
				if (randomRadius > 2.1 || randomRadius < 1 ) {
					this.radiusChange = - this.radiusChange;
				}
				randomRadius += this.radiusChange;
			}
		};

		// 3. Render Stars
		const render = () => {
			for (let i = 0; i < constellation[name].coordination[linetype].length; i++ ) {
				this.ctx.beginPath();
				this.ctx.arc( 

					// X
					constellation[name].data.relation.x + 
					constellation[name].coordination[linetype][i]['x0'] * 
					this.scaleSize, 

					// Y
					constellation[name].data.relation.y + 
					constellation[name].coordination[linetype][i]['x1'] * 
					this.scaleSize, 

					// Radius Size
					randomRadius, 

					0, 
					// 360 Degree
					2 * Math.PI, false
				);
				this.ctx.shadowBlur 	= this.shadowBlur;
				this.ctx.shadowColor 	= this.starColor;
				this.ctx.fillStyle 		= this.redStarColor;
				this.ctx.fill();				
				this.ctx.stroke();
				this.ctx.closePath();
				update();				
			}		
		};
		render();
	};

	shapeEvent( cursor, name, constellation, offsetX, offsetY, eventName ) {
		let linetype = 'outside';
		// 1. Draw Shape
		const shape = new Path2D();
		this.ctx.beginPath();
		
		shape.moveTo( 
			// X
			constellation[name].data.relation.x + 
			constellation[name].coordination[linetype][0]['x0'] * 
			constellation[name].data.scale.outside,
			
			// Y
			constellation[name].data.relation.y + 
			constellation[name].coordination[linetype][0]['x1'] * 
			constellation[name].data.scale.outside,
		);

		for( let i = 1; i < constellation[name].coordination[linetype].length; i++ ) {
			shape.lineTo(
				// X
				constellation[name].data.relation.x + 
				constellation[name].coordination[linetype][i]['x0'] * 
				constellation[name].data.scale.outside,
				
				// Y
				constellation[name].data.relation.y + 
				constellation[name].coordination[linetype][i]['x1'] * 
				constellation[name].data.scale.outside,
			);
		}

		if( this.ctx.isPointInPath(shape, offsetX, offsetY) ) {
			this.ctx.save();
				// Stroke
				this.ctx.lineWidth = 1;
				this.ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
				// Gradient Stroke
				let gradient = this.ctx.createLinearGradient(0, 0, this.panCanvas.width, 0);
				gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
				gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
				gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
				this.ctx.strokeStyle 	= gradient;
				// Shadow Stroke
				this.ctx.shadowOffsetX 	= 0;
				this.ctx.shadowOffsetY 	= -10;
				this.ctx.shadowBlur		= 55;
				this.ctx.shadowColor   	= "rgba(255, 255, 255, 1)";
				this.ctx.stroke();

				// Fill
				this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
				this.ctx.fill(shape);
			this.ctx.restore();

			// Cursor GSAP
			gsap.to(cursor, 0.1, {
				opacity: 0.7,
				scale: 3
			});

			if(eventName == 'click') { 
				let shapeID 		= constellation[name].data.backend.ID; 
				let backendType 	= constellation[name].data.backend.postType; 
				let coverDirection 	= constellation[name].data.backend.coverDirection; 
				ajax.openModalClickEvent(shapeID, backendType, coverDirection);
			}
		} else {
			this.ctx.save();
				// Stroke
				this.ctx.lineWidth = .2;
				this.ctx.strokeStyle = 'rgba(255, 255, 255,  .5)';
				this.ctx.stroke();
				// Fill
				this.ctx.fillStyle = 'rgba(255, 255, 255,  0)';	
			this.ctx.restore();
		}

		// 2. Features
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

	// Pointer: DOWN ↓↓↓↓
	onPointerDown(event) {
		this.isDragging = true;	
		this.dragStart.x = event.clientX - this.cameraOffset.x;
		this.dragStart.y = event.clientY - this.cameraOffset.y;
	};

	// Pointer: UP ↑↑↑↑
	onPointerUp() {
		this.isDragging = false;
	};

	// Pointer: OUT →→→→→
	onPointerMoveOut() {
		this.isDragging = false;
	};
	
	// Pointer: MOVE AND CLICK (Shape) ⇆⇆⇆⇆⇆⇆
	onPointerMoveShape(event, eventName) {
		// Cursor
		const followCircle = document.getElementById('followCircle');
		gsap.to(followCircle, 0.1, {
			opacity: 1,
			scale: 1
		});
		
		// Offset
		let xPosition = event.clientX - this.offsetX;
		let yPosition = event.clientY - this.offsetY;
		
		// Shape Event
		Object.entries(constellations).forEach( (entry, index) => {
			const [key, value] = entry;
			this.shapeEvent( followCircle, key, value, xPosition, yPosition, eventName );
		});
	};

	onPointerMoveText(event) {
		
		// Offset
		let xPosition = event.clientX - this.offsetX;
		let yPosition = event.clientY - this.offsetY;
		
		// Witout Drag
		let oceanHorizontalLine = (this.cameraOffset.y / 2) * 2.5 + 50;
		if( yPosition > oceanHorizontalLine ) {
			console.log( "Down Middle" );
		} else {
			console.log( "UP Middle" );	
		}

		// With Drag
		if ( this.isDragging ) {
			this.cameraOffset.x = event.clientX - this.dragStart.x;
			this.cameraOffset.y = event.clientY - this.dragStart.y;

			let oceanVerticalLine = this.cameraOffset.x;
			let oceanHorizontalLine = (this.cameraOffset.y / 2) * 2.5 + 50;
	
			// TextEvent
			if( yPosition > oceanHorizontalLine ) {
				console.log( "Down Middle :: WITH DRAG" );
			} else {
				console.log( "UP Middle :: WITH DRAG" );
			}
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
		if ( !this.isDragging ) {
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

		// 1. Resize
		//_____________________________________

		this._resize();
		window.addEventListener("resize", () => {
			this._resize();
		});

	
		// 2. Mouse Movement
		//_____________________________________
		
		// 2.1 Mouse For "Canvas Pan"
		this.panCanvas.addEventListener( "mousedown", event => { 
			this.onPointerDown(event); 
		});
		this.panCanvas.addEventListener( "mouseup", () => { 
			this.onPointerUp(); 
		});
		this.panCanvas.addEventListener( "mouseout", () => { 
			this.onPointerMoveOut(); 
		});
		this.panCanvas.addEventListener( "mousemove", event => { 
			let eventName = "mousemove";
			this.onPointerMoveShape(event, eventName);
			this.onPointerMoveText(event);
		});

		// 3. Click
		//_____________________________________
		
		this.panCanvas.addEventListener( "click", event => { 
			let eventName = "click";
			this.onPointerMoveShape(event, eventName);			
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
			this.adjustZoom( event.deltaY * this.scrollSensitivity );
		});
	};
	
	//_______________________________
	//
	//  END
	//_______________________________
};

export { Pan };