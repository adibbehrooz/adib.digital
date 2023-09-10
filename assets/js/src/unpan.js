class UNPAN {
		
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
    };

    init() {
        this.draw();
        this.css();
        this._eventListeners();
    };

    
    /****************** CSS ******************/
    /*****************************************/
    
    css() {
        // this.ctx.translate( -(window.innerWidth / 1.9) + this.cameraOffset.x, -(window.innerHeight / 2.1) + this.cameraOffset.y );
        this.cssOutline();
        this.cssInline();
        this.cssStars();
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
                { x: window.innerWidth / 2, y: this.cameraOffset.y / 2 }
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
        this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        this.ctx.fill();
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)';		
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
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';		
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

    cssEvent( event ) {
        const position = this.cssPosition();
        this.ctx.beginPath();

        this.ctx.moveTo( position.relate[0].x + position.outline[0].x * this.scaleSize, position.relate[0].y + position.outline[0].y * this.scaleSize );
        for( let i = 1; i < position.outline.length; i++ ) {
            this.ctx.lineTo(  position.relate[0].x + position.outline[i].x * this.scaleSize, position.relate[0].y + position.outline[i].y * this.scaleSize );
        }
        const isPointInPath = this.ctx.isPointInPath( event.offsetX, event.offsetY);
        //this.ctx.fillStyle = isPointInPath ? 'rgba(255, 255, 255, 1)' :'rgba(255, 255, 255, 0.1)';
        this.ctx.fillStyle = isPointInPath ? 'green' :'white';
        this.ctx.fill();	
    };

    draw() {
        // Create circle
        const circle = new Path2D();
        circle.arc(150, 75, 50, 0, 2 * Math.PI);
        this.ctx.fillStyle = "red";
        this.ctx.fill(circle);	
        return circle;		
    }

    drawEvent(event) {

        const circle = new Path2D();
        circle.arc(150, 75, 50, 0, 2 * Math.PI);
        this.ctx.fillStyle = "red";
        this.ctx.fill(circle);	

        // Check whether point is inside circle
        const isPointInPath = this.ctx.isPointInPath(circle, event.offsetX, event.offsetY);
        this.ctx.fillStyle = isPointInPath ? "green" : "red";

        // Draw circle
        this.ctx.fill(circle);		
    }

    _eventListeners() {
        this.panCanvas.addEventListener("mousemove", (event) => {
            this.drawEvent(event);
            this.cssEvent(event);
        });
    }
};

export { UNPAN };