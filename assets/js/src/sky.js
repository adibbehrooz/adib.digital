/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** SKY ********************************
/*********************************************************************/
	import { Shower } from './shower';
	const shower = new Shower();
	class Sky {
	
		//____________________________
		//
		// 	Constructor
		//____________________________
		
		constructor() {	
			//Required canvas variables
			this.skyCanvas = document.getElementById('canvas__sky');
			this.ctx = this.skyCanvas.getContext('2d');
			this.skyCanvasWidth = this.skyCanvas.width
			this.skyCanvasHeight = this.skyCanvas.height
					
			//particle colors
			this.colors = [ '255, 255, 255' ];
			//particle radius min/max
			this.minRadius = 0.4;
			this.maxRadius = 2;
			//particle opacity min/max
			this.minOpacity = 0;
			this.maxOpacity = 1;
			//particle speed min/max
			this.minSpeed = .005;
			this.maxSpeed = .1;
			//frames per second
			this.fps = 4;
			
			//number of particles
			this.numParticles = 1500;

			// matchMedia
			this.customScreens = require('./../../../tailwind.config.js').variants.theme.screens;
			this.sreensKeys = Object.keys(this.customScreens);
			this.screensValues = Object.values(this.customScreens);	
		};

		render() {
			let wHeight = window.innerHeight;
			let wWidth = window.innerWidth;

			this.skyCanvas.width = wWidth;
			this.skyCanvas.height = wHeight;
		};


		//____________________________
		//
		// init [Matchmedia]
		//____________________________	

		init() {
			shower.meteorShower(); 
			this.particles(); 
			// this._eventListeners();
		};

		particles() {
			// I. matchMedia Particles
			let sreensKeys = this.sreensKeys;
			let screensValues = this.screensValues;
			const matchMediaParticles = () => {
				let i = 0;
				for ( const property in sreensKeys ) {
					const breakpoint = sreensKeys[i];
					let j = 0;
					let keys;
					for(  keys in screensValues ) {
						if (i == j) { 
							let size = screensValues[keys];
							const mediaQuery = `( (min-width: ${size['min']}) and (max-width: ${size['max']}) )`;
							this.stars(mediaQuery, breakpoint);
						}
						j++;
					}
				i++;
				}
			};
			// matchMediaParticles();

			// II. Normal Particles
			const normalParticles = () => {
				let mediaQuery = ''
				let breakpoint = ''
				this.stars(mediaQuery, breakpoint);
			};
			normalParticles();
		};
		
		switchMatchMedia(breakPoint) {
			let data;
			switch(breakPoint) {
				case '2xlarge': data = { 'particleNumbers': 1500, 'maxRadius': 2 }; 	break;
				case 'xlarge': 	data = { 'particleNumbers': 1200, 'maxRadius': 2 };		break;
				case 'large':	data = { 'particleNumbers': 1000, 'maxRadius': 1.9 };	break;
				case 'medium':	data = { 'particleNumbers': 800, 'maxRadius': 1.8 };	break;	
				case 'small':	data = { 'particleNumbers': 500, 'maxRadius': 1.7 };	break;
				case 'xsmall':	data = { 'particleNumbers': 400, 'maxRadius': 1.7 };	break;
			};	// Switch
			return data;
		};

		//____________________________
		//
		// Stars
		//____________________________
								
		stars(query, breakPoint) {
			this.render();
			this.createCircle(query, breakPoint);
		};

		_rand(min, max) {
			return Math.random() * (max - min) + min;
		};

		createCircle(query, breakPoint) {
			let particle = [];

			for (let i = 0; i < this.numParticles; i++) {
				let color = this.colors[~~(this._rand(0, this.colors.length))];
				particle[i] = {
					radius		: this._rand( this.minRadius, this.maxRadius ),
					xPos		: this._rand( 0, this.skyCanvas.width ),
					yPos		: this._rand( 0, this.skyCanvas.height / this.numParticles * i ),
					xVelocity 	: this._rand( this.minSpeed, this.maxSpeed ),
					yVelocity 	: this._rand( this.minSpeed, this.maxSpeed ),
					color		: 'rgba(' + color + ',' + this._rand(this.minOpacity, this.maxOpacity) + ')'
				}

				//once values are determined, draw particle on canvas
				this.drawParticles(particle, i);
			}
			//...and once drawn, animateCircle the particle
			this.animateCircle(particle, query, breakPoint);
		};

		animateCircle(particle, query, breakPoint) {
			
			const animate = () => {

				//_______________ I. Clear Canvas _______________
				//_______________________________________________

				this.clearCanvas();

				//_______________ II. Load Stars First Time [matchMedia] _______________
				//______________________________________________________________________

				// First Time Load Media Query
				const loadMediaQuery = () => {
					if( window.matchMedia(query).matches ) {

						window.addEventListener('load', function () {
							
							let data = this.switchMatchMedia(breakPoint);

							for (let i = 0; i < data.particleNumbers; i++) {
								particle[i].xPos += particle[i].xVelocity; // Stars Move to Right
								particle[i].yPos -= particle[i].yVelocity; // Stars Move to Top
			
								//if particle goes off screen call reset method to place it offscreen to the left/bottom
								if (particle[i].xPos > this.skyCanvasWidth + particle[i].radius || particle[i].yPos > this.skyCanvasHeight + particle[i].radius) {
									this.resetParticle(particle, i);
								} else {								
									this.drawParticles(particle, i);
								}
							}
						});	// [END] Event Listener
					} // [END] loadMediaQuery
				}
				// setInterval(loadMediaQuery, 200/this.fps); // animate
				// loadMediaQuery();

				//_______________ III. Resize Stars Numbers [matchMedia] _______________
				//______________________________________________________________________

				// Resize Media Query
				const resizeMediaQuery = () => {
					
					if( window.matchMedia(query).matches ) {	
						
						let data = this.switchMatchMedia(breakPoint);

						for (let i = 0; i < data.particleNumbers; i++) {
							particle[i].xPos += particle[i].xVelocity; // Stars Move to Right
							particle[i].yPos -= particle[i].yVelocity; // Stars Move to Top
		
							//if particle goes off screen call reset method to place it offscreen to the left/bottom
							if (particle[i].xPos > this.skyCanvasWidth + particle[i].radius || particle[i].yPos > this.skyCanvasHeight + particle[i].radius) {
								this.resetParticle(particle, i);
							} else {
								this.drawParticles(particle, i);
							}
						}
					}			
				};
				// window.addEventListener("resize", () => { setInterval(resizeMediaQuery, 200/this.fps); });
				// resizeMediaQuery();

				//_______________ IV. Normal Load Stars _______________
				//_____________________________________________________
				
				const loadStars = () => {
					for (let i = 0; i < this.numParticles; i++) {
						particle[i].xPos += particle[i].xVelocity; // Stars Move to Right
						particle[i].yPos -= particle[i].yVelocity; // Stars Move to Top

						//if particle goes off screen call reset method to place it offscreen to the left/bottom
						if (particle[i].xPos > this.skyCanvasWidth + particle[i].radius || particle[i].yPos > this.skyCanvasHeight + particle[i].radius) {
							this.resetParticle(particle, i);
						} else {
							this.drawParticles(particle, i);
						}
					}
				};
				// setInterval(loadStars, 200/this.fps);
				loadStars();
			};
			setInterval(animate, 200/this.fps);
			// animate();
		};

		drawParticles(particle, i) {
			this.ctx.fillStyle = particle[i].color;
			this.ctx.beginPath();
			this.ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 6 * Math.PI, false);
			this.ctx.fill();
		};
		
		resetParticle(particle, i) {

			let random = this._rand(0, 1);

			if (random > .5) {
				// 50% chance particle comes from left side of window...
				particle[i].xPos = -particle[i].radius;
				particle[i].yPos = this._rand(0, this.skyCanvas.height);
			} else {
				//... or bottom of window
				particle[i].xPos = this._rand(0, this.skyCanvas.width);
				particle[i].yPos = this.skyCanvas.height + particle[i].radius;
			}
			//redraw particle with new values
			this.drawParticles(particle, i);
		};
		
		clearCanvas() {
			this.ctx.clearRect(0, 0, this.skyCanvas.width, this.skyCanvas.height);
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
					"x"	:		Math.floor(Math.random() * (80 - 0 + 1) + 0),
					"y"	:		Math.floor(Math.random() * (25 - 0 + 1) + 0),
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

		_eventListeners() {
			let mediaQuery = '', breakpoint = ''			
			window.addEventListener("resize", () => { 
				const reShape = () => {
					// this.render();
					// this.createCircle(mediaQuery, breakpoint);
				};
				reShape(); 
			});
		};
	};
	
	export { Sky };
