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
		
	};
	export { Canvas };
	
	class Cursor {

		//____________________________
		//
		// Constructor
		//____________________________

		constructor() {
			this.radius = 50;
			this.circleLength = 2 * Math.PI * this.radius;
			this.angle = 2 * this.angleRad * 180 / Math.PI / 7;		
		};


		//____________________________
		//
		// Cursor
		//____________________________

		init() {
			this.cursorModules();
			this.curveText();
			this.animateCursor();
		};
		
		cursorModules() {
		
			//________________ Circle Cursor ________________
			
			const circleCursor = () => {
				const cLandscapeFrame = document.getElementById('middle');
				const circleDiv = document.createElement("div");
				circleDiv.setAttribute ('class', 'o-centerCircle');
				circleDiv.setAttribute ('id', 'centerCircle');
				cLandscapeFrame.parentNode.insertBefore(circleDiv, cLandscapeFrame);			
			};
			

			const followDiv = () => {
				const cLandscapeFrame = document.getElementById('middle');
				const followDiv = document.createElement("div");
				followDiv.setAttribute ('class', 'o-followCircle');
				followDiv.setAttribute ('id', 'followCircle');
				
				const textDiv = document.createElement("div");
				textDiv.setAttribute ('class', 'o-followText');
				textDiv.setAttribute ('id', 'followText');
				followDiv.appendChild(textDiv);
				textDiv.innerHTML += 'DRAG ME'; 
								
				cLandscapeFrame.parentNode.insertBefore(followDiv, cLandscapeFrame);			
			};
						
			
			const allmodules = () => {
				circleCursor();
				followDiv();
			
			};
			allmodules();
			
		};
		
		curveText() {
			this.curvedText = document.getElementById('followText');
			let text = this.curvedText.innerText;
			let html = "";
			for (let i = 0; i < text.length; i++) {
				html += `<span>${text[i]}</span>`;
			}
			// console.log(html);
			this.curvedText.innerHTML = html;

			this.curvedText.style.minWidth = "initial";
			this.curvedText.style.minHeight = "initial";	
						
			let curveWidth = this.curvedText.offsetWidth;
			let curveHeight = this.curvedText.offsetHeight;
	
			let spanLetters = this.curvedText.innerHTML;
			
			console.log(spanLetters);
			
			/*
			let lettersStyle = {
				'position': 'absolute',
				'transform-origin': 'bottom center',
				'height': this.radius+'px',
			};
			let cssResult = "";
			Object.keys(lettersStyle).forEach(function (prop) {
				cssResult += prop + ": " + lettersStyle[prop] + "; ";	
			});
			letters.style = cssResult;
			
			let angleRad = curveWidth / (2 * this.radius );
			/*
			$letters.each(function(idx,el){
				 $(el).css({
					transform:`translate(${w/2}px,0px) rotate(${idx * angle - text.length*angle/2}deg)`
				})
			});
			
			letters.forEach((element) => {
				console.log(`${element}`);
			});
			*/
			
		};
			
		animateCursor() {	

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

	export { Cursor };
	
	
	
	
