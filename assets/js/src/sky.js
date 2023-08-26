/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** SKY ********************************
/*********************************************************************/
	
	class Sky {
	
		//____________________________
		//
		// 	Constructor
		//____________________________
		

		constructor() {
		
			//Required canvas variables
			this.canvas = document.getElementById('canvas');
			this.ctx = this.canvas.getContext('2d');
					
			//particle colors
			this.colors = [ '255, 255, 255',];
			//particle radius min/max
			this.minRadius = 0.2;
			this.maxRadius = 1.9;
			//particle opacity min/max
			this.minOpacity = 0;
			this.maxOpacity = 1;
			//particle speed min/max
			this.minSpeed = .005;
			this.maxSpeed = .19;
			//frames per second
			this.fps = 3;
			//number of particles
			this.numParticles = 850;
		};
		
		
		render() {
			let wHeight = window.innerHeight;
			let wWidth = window.innerWidth;

			this.canvas.width = wWidth;
			this.canvas.height = wHeight;
		};
		
				
		//_______________________________
		//
		// All Objects in Night Sky
		//_______________________________
								
		init() {
			this.stars(); // 1. Stars
			this.meteorShower(); // 2. Meteor Shower 
			this._cursorTemporary();
		};			
				
		//____________________________
		//
		// Stars
		//____________________________
								
		stars() {
			this.render();
			this.createCircle();
		};
		
		
		_rand(min, max) {
			return Math.random() * (max - min) + min;
		};


		createCircle() {
			let particle = [];

			for (let i = 0; i < this.numParticles; i++) {
				let color = this.colors[~~(this._rand(0, this.colors.length))];
				particle[i] = {
					radius		: this._rand(this.minRadius, this.maxRadius),
					xPos		: this._rand(0, canvas.width),
					yPos		: this._rand(0, canvas.height/this.numParticles * i),
					xVelocity 	: this._rand(this.minSpeed, this.maxSpeed),
					yVelocity 	: this._rand(this.minSpeed, this.maxSpeed),
					color		: 'rgba(' + color + ',' + this._rand(this.minOpacity, this.maxOpacity) + ')'
				}

				//once values are determined, draw particle on canvas
				this.drawParticles(particle, i);
			}
			//...and once drawn, animateCircle the particle
			// this.animateCircle(particle);
		};


		drawParticles(particle, i) {

			this.ctx.fillStyle = particle[i].color;
			this.ctx.beginPath();
			this.ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 6 * Math.PI, false);
			this.ctx.fill();
		};


		animateCircle(particle) {
			
			const animate = () => {
				this.clearCanvas();
				for (let i = 0; i < this.numParticles; i++) {
					particle[i].xPos += particle[i].xVelocity;
					particle[i].yPos -= particle[i].yVelocity;

					//if particle goes off screen call reset method to place it offscreen to the left/bottom
					if (particle[i].xPos > this.canvas.width + particle[i].radius || particle[i].yPos > this.canvas.height + particle[i].radius) {
						this.resetParticle(particle, i);
					} else {
						this.drawParticles(particle, i);
					}
				}
			};
			// animate();
			setInterval(animate, 200/this.fps); 	
		};
		
		
		resetParticle(particle, i) {

			let random = this._rand(0, 1);

			if (random > .5) {
				// 50% chance particle comes from left side of window...
				particle[i].xPos = -particle[i].radius;
				particle[i].yPos = this._rand(0, canvas.height);
			} else {
				//... or bottom of window
				particle[i].xPos = this._rand(0, canvas.width);
				particle[i].yPos = canvas.height + particle[i].radius;
			}
			//redraw particle with new values
			this.drawParticles(particle, i);
		};
		
		
		clearCanvas() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		};
				
		//____________________________
		//
		// 	Meteor Shower 
		//____________________________

		meteorShower() {

			const cLandscapeFrame = document.getElementById('middle');

			// I. PARENT DIV
			const meteorShowerParentDiv = document.createElement("div");
			meteorShowerParentDiv.setAttribute ('class', 'o-meteorShower__parent');
			meteorShowerParentDiv.setAttribute ('id', 'meteorShower__parent');
	
			for (let p = 0; p < 7; p++ ) {
				// Meteor Features
				let meteorFeatures = {
					"angle"	:	Math.floor(Math.random() * (95 - 45 + 1) + 45),
					"speed"	:	Math.floor(Math.random() * (20 - 8 + 1) + 8),
					"delay"	:	Math.floor(Math.random() * (25 - 1 + 1) + 1),
					"x"	:	Math.floor(Math.random() * (80 - 0 + 1) + 0),
					"y"	:	Math.floor(Math.random() * (25 - 0 + 1) + 0),
					"travel":	Math.floor(Math.random() * (50 - 10 + 1) + 10),
					"trail":	Math.floor(Math.random() * (5 - 1 + 1) + 1),
				};	

				// II. CHILD DIV
				const meteorShowerChildDiv = document.createElement("div");
				meteorShowerChildDiv.setAttribute ('class', 'o-meteorShower o-meteorShower --'+p);
				meteorShowerChildDiv.setAttribute ('id', 'meteorShower --'+p);
				
				meteorShowerChildDiv.style.setProperty('--angle', Object.values(meteorFeatures)[0] );
				meteorShowerChildDiv.style.setProperty('--speed', Object.values(meteorFeatures)[1] );
				meteorShowerChildDiv.style.setProperty('--delay', Object.values(meteorFeatures)[2] );
				meteorShowerChildDiv.style.setProperty('--x', Object.values(meteorFeatures)[3] );
				meteorShowerChildDiv.style.setProperty('--y', Object.values(meteorFeatures)[4] );
				meteorShowerChildDiv.style.setProperty('--travel', Object.values(meteorFeatures)[5] );
				meteorShowerChildDiv.style.setProperty('--trail', Object.values(meteorFeatures)[6] );
			
				// Connect Child To Father
				meteorShowerParentDiv.appendChild(meteorShowerChildDiv);

				// II. GRANDCHILD DIV
				const meteorShowerGrandchildDiv = document.createElement("div");
				meteorShowerGrandchildDiv.setAttribute ('class', 'o-meteorShower__child o-meteorShower__child --'+p);
				meteorShowerGrandchildDiv.setAttribute ('id', 'meteorShower__child --'+p);	
				
				// Connect Grandchild To Child
				meteorShowerChildDiv.appendChild(meteorShowerGrandchildDiv);	
				
				
				// Connect Father to <sectopn> tag
				cLandscapeFrame.appendChild(meteorShowerParentDiv);
			}
		};
		
		//____________________________
		//
		// 	Cursor [TEMPORARY]
		//____________________________

		_cursorTemporary() {
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
	}
	
	export { Sky };
