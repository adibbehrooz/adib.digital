/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Canvas ********************************
/************************************************************************/

	class Canvas {

		//____________________________
		//
		// Constructor
		//____________________________

		constructor() {
			// Silence is Golden	
		};


		//____________________________
		//
		// Run
		//____________________________	
		
		init() {
			this.allCanvas();
			this.canvasCursor();
		};	


		//____________________________
		//
		// Create Section
		//____________________________

		createSection() {
			const middleSection = document.createElement("section");
			middleSection.setAttribute('class', 'o-canvas');
			middleSection.setAttribute('id', 'middle');
			middleSection.setAttribute('data', "renderType: 'canvas'");
			document.body.appendChild(middleSection);
			return middleSection;			
		};

		allCanvas() {
			const middleSection = this.createSection();
			middleSection.appendChild(this.panCanvas());
			middleSection.appendChild(this.skyCanvas());
		};

		skyCanvas() {
			const canvasSky = document.createElement("canvas");
			canvasSky.setAttribute('class', 'o-canvas__sky');
			canvasSky.setAttribute('id', 'canvas__sky');
			canvasSky.width = window.innerWidth;
			canvasSky.height = window.innerHeight;			
			return canvasSky;			
		};

		panCanvas() {
			const canvasPan = document.createElement("canvas");
			canvasPan.setAttribute('class', 'o-canvas__pan');
			canvasPan.setAttribute('id', 'canvas__pan');
			return canvasPan;
		};


		//____________________________
		//
		// Cursor
		//____________________________

		canvasCursor() {
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

	};

	export { Canvas };
	
	
	
	
