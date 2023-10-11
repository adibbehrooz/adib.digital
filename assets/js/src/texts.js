/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** TEXTS ********************************
/***********************************************************************/

class Texts {

	//____________________________
	//
	// Constructor
	//____________________________

	constructor() {
		this.opacity = [ 0, 0 ];
		this.firstOpacity = this.opacity[0] += 0.4;
		this.secondOpacity = this.opacity[1] += 0.1;	
        this.monoFont = 'Jetbrains Mono';
        this.monosize = '36px';
        this.monoLittleSize = '13px';
	};

    init(canva, width, context, camera) {
        this.skillText(width, context, camera);
        this.lineLeft(width, context);
        this.lineRight(width, context);
        this.menuText(context);
        this._eventListeners(canva)
    };

	skillText(canvaWidth, ctx, cameraOffset) {
        // Font Size
		ctx.font = `${this.monosize} ${this.monoFont}`;

        // Gradient
		let gradient = ctx.createLinearGradient(0, 0, canvaWidth, 0);
		gradient.addColorStop(0,"rgba(23, 210, 168, "+ this.firstOpacity +")");
		gradient.addColorStop(0.5,"rgba(255, 255, 255, "+ this.secondOpacity +")");
		gradient.addColorStop(1,"rgba(23, 210, 168, "+ this.firstOpacity +")");
		ctx.fillStyle = gradient;
		ctx.fillStyle = "rgba(255, 255, 255, .3)";

		ctx.fillText("FRONT-END DEVELOPER", 
			window.innerWidth - window.innerWidth / 1.06, 
			cameraOffset.y - window.innerHeight / 2.4 
		);
		ctx.fillText("BACK-END DEVELOPER", 
			window.innerWidth - window.innerWidth / 1.06, 
			cameraOffset.y + window.innerHeight * .37
		);
	};

	lineLeft(canvaWidth, ctx) {

		ctx.beginPath();
		ctx.moveTo( 50, 0 );
		ctx.lineTo( 50, window.innerHeight );
		ctx.lineWidth = 2;	

		// Gradient Line
		let gradient = ctx.createLinearGradient(0, 0, canvaWidth, 0);
		gradient.addColorStop(0,"rgba(23, 210, 168, "+ this.firstOpacity +")");
		gradient.addColorStop(0.5,"rgba(255, 255, 255, "+ this.secondOpacity +")");
		gradient.addColorStop(1,"rgba(23, 210, 168, "+ this.firstOpacity +")");
		ctx.strokeStyle = gradient;	
		ctx.strokeStyle = "rgba(255, 255, 255, .3)";	
		ctx.stroke();
	};  

	lineRight(canvaWidth, ctx) {

		ctx.beginPath();
		ctx.moveTo( window.innerWidth / 1.135, 0 );
		ctx.lineTo( window.innerWidth / 1.135, window.innerHeight );
		ctx.lineWidth = 2;	

		// Gradient Line
		let gradient = ctx.createLinearGradient(0, 0, canvaWidth, 0);
		gradient.addColorStop(0,"rgba(23, 210, 168, "+ this.firstOpacity +")");
		gradient.addColorStop(0.5,"rgba(255, 255, 255, "+ this.secondOpacity +")");
		gradient.addColorStop(1,"rgba(23, 210, 168, "+ this.firstOpacity +")");
		ctx.strokeStyle = gradient;	
		ctx.strokeStyle = "rgba(255, 255, 255, .3)";	
		ctx.stroke();
	};  


	menuText(ctx) {

        // Font Size
		ctx.font = `${this.monoLittleSize} ${this.monoFont}`;
		ctx.fillStyle = "rgba(255, 255, 255, 1)";
        let x = 140;
        let y = 100;
        ctx.save();
            ctx.translate(x, y);
            ctx.rotate(-Math.PI / -2);
            ctx.textAlign = "center";

            // About
            ctx.fillText("About", 
                -40, 
                125
            );
            

           // Projects
           ctx.fillText("Projects", 
                100, 
                125
            ); 

            // Contact
            ctx.fillText("Contact", 
                270, //400, 
                125 //-window.innerHeight * 1.62
            );

        ctx.restore();

        const textPosition = {
            'About': { x1: 150, y1: 150, x2: 250, y2: 250 },
        };

        return textPosition;
	};

    onPointerMove(event, eventName) {

		// const shape = new Path2D();
		// this.ctx.beginPath();

        // shape.moveTo( x1, y1);
        // shape.moveTo( x1, y1);

        if(eventName == 'click') {
            console.log("Hi");
        }
    };
    
    _eventListeners(canva) {
		canva.addEventListener( "mousemove", event => { 
			let eventName = "mousemove";
			this.onPointerMove(event, eventName); // Shape
		});   

		canva.addEventListener( "click", event => { 
			let eventName = "click";
			this.onPointerMove(event, eventName); // Shape
		});       
    }

};

export { Texts };