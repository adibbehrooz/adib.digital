
   class NEWUNPANS {

		constructor() {
			// canvas related variables
			// Canvas
			this.panCanvas = document.getElementById('canvas__pan');
			this.panCanvas.style.position = 'absolute';
			this.ctx = this.panCanvas.getContext('2d');

			this.panCanvas.width = window.innerWidth;
			this.panCanvas.height = window.innerHeight;
			
			this.offsetX;
			this.offsetY;

			// mouse drag related variables
			this.isDown = false;
			this.startX;
			this.startY;
			
			// the accumulated horizontal(X) & vertical(Y) panning the user has done in total
			this.netPanningX = 0;
			this.netPanningY = 0;

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
			this.scaleSize = 4;
			this.fillColor = 'rgba(255, 255, 255, 1)';
			
			// "Stars" Inside Constellation
			this.starColor = 'rgba(255, 255, 255, 0.4)';
			this.fixedRadius = 2;
			this.minMaxRadius = { minRadius: 1, maxRadius : 2.7 };
			this.radiusChange = 0.15;
			this.redStarColor = 'rgba(255, 194, 184, 1)';
			this.shadowBlur = 1;
		}

		// account for scrolling
		reOffset(){
			const BB = this.panCanvas.getBoundingClientRect();
			this.offsetX = BB.left;
			this.offsetY = BB.top;        
		}

		init() {
			this.reOffset();
			this.css()
			this.eventListeners();
		}

		demo() {
			// draw the numbered horizontal & vertical reference lines
			for(let x=0;x<100;x++){ this.ctx.fillStyle = "#ff0000"; this.ctx.fillText(x,x*20,this.panCanvas.height/2); }
			for(let y=-50;y<50;y++){ this.ctx.fillStyle = "#ff0000"; this.ctx.fillText(y,this.panCanvas.width/2,y*20); }
		}


		css() {
			// this.ctx.translate( -(window.innerWidth / 1.9) + this.cameraOffset.x, -(window.innerHeight / 2.1) + this.cameraOffset.y );
			const update = () => {
				this.cssOutline();
				this.cssInline();
				this.cssStars();
			}
			update();
		}
	
		cssPosition() {
			const position = {
				outline: [
					{ x: 0.000, 	y: 19.232 },
					{ x: 9.635, 	y: 23.250 },					
					{ x: 20.800, 	y: 19.232 },
					{ x: 24.000, 	y: 0.750  },
					{ x: 3.630, 	y: 0.750  },
					{ x: 2.815, 	y: 4.868  },
					{ x: 19.485, 	y: 4.868  },
					{ x: 18.960, 	y: 7.515  },
					{ x: 2.2750, 	y: 7.515  },
					{ x: 1.4750, 	y: 11.633 },
					{ x: 18.145, 	y: 11.633 },
					{ x: 17.205, 	y: 16.510 },					
					{ x: 10.500, 	y: 18.739 },
					{ x: 4.6800, 	y: 16.510 },
					{ x: 5.0800, 	y: 14.471 },
					{ x: 1.475, 	y: 14.471 },	
					{ x: 0.000, 	y: 19.142 },		
				],
				inline: [
					{ x: 3.175, 	y: 2.750  },
					{ x: 21.500, 	y: 2.750  },					
					{ x: 18.700, 	y: 17.900 },
					{ x: 9.700, 	y: 21.000 },
					{ x: 1.700, 	y: 17.500 },
					{ x: 2.175,		y: 9.750  },
					{ x: 20.175,	y: 9.750  },
				],
				relate: [
					{ x: this.offsetX, y: this.offsetY  }
				],				
			};
			return position;
	
		}
	
		cssOutline() {
			const position = this.cssPosition();
			this.ctx.beginPath();
			this.ctx.lineWidth = 1;	
	
			// Outline
			this.ctx.moveTo( position.relate[0].x + position.outline[0].x * this.scaleSize, position.relate[0].y + position.outline[0].y * this.scaleSize );
			for( let i = 1; i < position.outline.length; i++ ) {
				this.ctx.lineTo(  position.relate[0].x + position.outline[i].x * this.scaleSize, position.relate[0].y + position.outline[i].y * this.scaleSize );
			}
			this.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
			this.ctx.fill();
			this.ctx.strokeStyle = 'rgba(0, 0, 0, 0)';		
		};
	
		cssInline() {
			const position = this.cssPosition();
			this.ctx.beginPath();
			this.ctx.lineWidth = 1;
	
			// Inline	
			this.ctx.moveTo(  position.relate[0].x + position.inline[0].x * this.scaleSize,  position.relate[0].y + position.inline[0].y * this.scaleSize );
			for( let i = 1; i < position.inline.length; i++ ) {
				if ( i == 5 ) {
					this.ctx.moveTo( position.relate[0].x + position.inline[i].x * this.scaleSize, position.relate[0].y + position.inline[i].y * this.scaleSize );
				} else {
					this.ctx.lineTo( position.relate[0].x + position.inline[i].x * this.scaleSize, position.relate[0].y + position.inline[i].y * this.scaleSize );
				}
			}
			this.ctx.strokeStyle = 'rgba(255, 255, 255, 1)';		
			this.ctx.stroke();
		};
	
		cssStars() {
			const position = this.cssPosition();
			let randomRadius = Math.random() * (this.minMaxRadius.maxRadius - this.minMaxRadius.minRadius) + this.minMaxRadius.minRadius; 
	
			// Update
			const update = () => {
				for (let i = 0; i < position.inline.length; i++ ) {
					if (randomRadius > 2.2 || randomRadius < 1 ) {
						this.radiusChange = - this.radiusChange;
					}
					randomRadius += this.radiusChange;
				}
			};
			// Render
			const render = () => {
				for (let i = 0; i < position.inline.length; i++ ) {
					this.ctx.beginPath();
					this.ctx.arc( position.relate[0].x + position.inline[i].x * this.scaleSize, position.relate[0].y + position.inline[i].y * this.scaleSize, randomRadius, 0, 2 * Math.PI, false);
					this.ctx.shadowBlur = this.shadowBlur;
					this.ctx.shadowColor = this.starColor;
					this.ctx.fillStyle = this.redStarColor;
					this.ctx.fill();				
					this.ctx.stroke();	
					update();				
				}		
			};
			render();
		};

	
		cssEvent( PanningX, PanningY ) {
			const position = this.cssPosition();
			this.ctx.beginPath();

			this.ctx.moveTo( (position.relate[0].x + position.outline[0].x + PanningX) * this.scaleSize, ( position.relate[0].y + position.outline[0].y + PanningY ) * this.scaleSize );
			for( let i = 1; i < position.outline.length; i++ ) {
				this.ctx.lineTo(  (position.relate[0].x + position.outline[i].x + PanningX) * this.scaleSize, ( position.relate[0].y + position.outline[i].y + PanningY ) * this.scaleSize  );
			}
			this.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
			this.ctx.fill();
			this.ctx.strokeStyle = 'rgba(0, 0, 0, 0)';		
			this.ctx.fill();
			this.ctx.closePath();
		};

		eventListeners() {
            // listen for mouse events

			this.panCanvas.addEventListener( "mousedown", event => { 
				this.handleMouseDown(event);
			});

			this.panCanvas.addEventListener( "mousemove", event => { 
				this.handleMouseMove(event);
			});

			this.panCanvas.addEventListener( "mouseup", event => { 
				this.handleMouseUp(event);
			});

			this.panCanvas.addEventListener( "mouseout", event => { 
				this.handleMouseOut(event);
			});
        };

		handleMouseDown(event){
			// tell the browser we're handling this event
			event.preventDefault();
			event.stopPropagation();
		
			// calc the starting mouse X,Y for the drag
			this.startX = parseInt(event.clientX - this.offsetX);
			this.startY = parseInt(event.clientY - this.offsetY);
		
			// set the isDragging flag
			this.isDown=true;
		 };
		
		handleMouseUp(event){
			// tell the browser we're handling this event
			event.preventDefault();
			event.stopPropagation();
		
			// clear the isDragging flag
			this.isDown = false;
		}
		
		handleMouseOut(event){
			// tell the browser we're handling this event
			event.preventDefault();
			event.stopPropagation();
		
			// clear the isDragging flag
			this.isDown=false;
		}
		
		handleMouseMove(event){

			// only do this code if the mouse is being dragged
			if(!this.isDown){return;}
			
			// tell the browser we're handling this event
			event.preventDefault();
			event.stopPropagation();
		  
			// get the current mouse position
			let mouseX = parseInt(event.clientX- this.offsetX);
			let mouseY = parseInt(event.clientY - this.offsetY);
		  
			
			// dx & dy are the distance the mouse has moved since
			// the last mousemove event
			let dx = mouseX - this.startX;
			let dy = mouseY - this.startY;

			// reset the vars for next mousemove
			this.startX = mouseX;
			this.startY = mouseY;

			console.log(" startX: " +  this.startX );
			console.log(" startY: " +  this.startY );
			
			console.log("mouseX: " + mouseX );
			console.log("mouseY: " + mouseY );

			console.log("dx: " + dx );
			console.log("dy: " + dy );

			// accumulate the net panning done
			this.netPanningX = this.netPanningX + dx;
			this.netPanningY = this.netPanningY + dy;

			console.log("netPanningX: " + this.netPanningX );
			console.log("netPanningY: " + this.netPanningY );

			if (isNaN(this.netPanningX)) this.netPanningX == 0;
			if (isNaN(this.netPanningY)) this.netPanningY == 0;
				
			this.ctx.clearRect(0, 0, this.panCanvas.width, this.panCanvas.height);
			this.cssEvent(this.netPanningX, this.netPanningY)
		  
		} 
   }

   export { NEWUNPANS };

	
