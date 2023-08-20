/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/


/******************************** Library Configuration ********************************
/***************************************************************************************/

	document.addEventListener("DOMContentLoaded", function() {

		//__________________________________________________________________________
		//
		//	 						TAILWIND SCREEN IN JS
		//__________________________________________________________________________

		const customScreens = require("../../../tailwind.config.js").variants.theme.screens;
		const sreensKeys = Object.keys(customScreens);
		const screensValues = Object.values(customScreens);

		let i = 0;
		for ( const property in sreensKeys ) {
			const breakpoint = sreensKeys[i];
			module.exports = { breakpoint };
			let j = 0;
			for( keys in screensValues ) {
				if (i == j) {
					size = screensValues[keys];
					const mediaQuery = `( (min-width: ${size["min"]}) and (max-width: ${size["max"]}) )`;
					module.exports = { mediaQuery };

					if( window.matchMedia(mediaQuery).matches ) {
						window.addEventListener('load', function () {
							addBreakpointElement(breakpoint);
							// console.log(breakpoint);
						});
					}

					function windowResize() {
						if( window.matchMedia(mediaQuery).matches ) {
							addBreakpointElement(breakpoint);
							// console.log(breakpoint);
						}
					}
					window.addEventListener("resize", windowResize);

				}
				j++;
			}
		i++;
		}

		function addBreakpointElement(breakpointName) {

			// create a new div element
			const breakpointDiv = document.createElement("div");
			breakpointDiv.className = "breakpointClass";
			breakpointDiv.style.cssText =
			'position: fixed;' +
			'bottom: 5px;' +
			'left: 5px;' +
			'padding: 5px;' +
			'width: 100px;' +
			'height: 35px;' +
			'text-align: center;' +
			'border-radius: 5px;' +
			'background: black;' +
			'color: white;';

			// add the newly created element and its content into the DOM
			document.body.appendChild(breakpointDiv);

			// and give it some content
			const breakpointNameDiv = document.createTextNode(breakpointName);

			// add the text node to the newly created div
			breakpointDiv.appendChild(breakpointNameDiv);
		}


		//__________________________________________________________________________
		//
		//	 							CANVAS
		//__________________________________________________________________________


		//____________________________
		//
		// 			Global Data
		//____________________________

		const canvas = document.getElementById("canvas");
		const ctx = canvas.getContext("2d");
		canvas.width = canvasWidth = window.innerWidth;
		canvas.height = canvasHeight = window.innerHeight;


		//____________________________
		//
		// 			Dimension
		//____________________________

		function canvasDimension() {
			let width = window.innerWidth;
			let height = window.innerHeight;
			canvas.width = width;
			canvas.height = height;
		}

		//____________________________
		//
		// 		Draw Stars With Move
		//____________________________

		/**
		 * Generates random particles using canvas
		 *
		 * @class Particles
		 * @constructor
		 */
		function Particles(){
			//particle colors
			this.colors = [
				'255, 255, 255',
			];
			//particle radius min/max
			this.minRadius = 0.2;
			this.maxRadius = 1.9;
			//particle opacity min/max
			this.minOpacity = 0;
			this.maxOpacity = 1;
			//particle speed min/max
			this.minSpeed = .005;
			this.maxSpeed = .15;
			//frames per second
			this.fps = 5;
			//number of particles
			this.numParticles = 1000;
			//required canvas variables
			this.canvas = document.getElementById('canvas');
			this.ctx = this.canvas.getContext('2d');
		}

		/**
		* Initializes everything
		* @method init
		*/
		Particles.prototype.init = function(){
			this.render();
			this.createCircle();
		}

		/**
		* generates random number between min and max values
		* @param	{number} min value
		* @param	{number} max malue
		* @return {number} random number between min and max
		* @method _rand
		*/
		Particles.prototype._rand = function(min, max){
			return Math.random() * (max - min) + min;
		}

		/**
		* Sets canvas size and updates values on resize
		* @method render
		*/
		Particles.prototype.render = function(){
			var self = this,
				wHeight = window.innerHeight,
				wWidth = window.innerWidth;

				self.canvas.width = wWidth;
				self.canvas.height = wHeight;

			//window.on('resize', self.render);
		}

		/**
		* Randomly creates particle attributes
		* @method createCircle
		*/
		Particles.prototype.createCircle = function(){
			var particle = [];

			for (var i = 0; i < this.numParticles; i++) {
				var self = this,
				color = self.colors[~~(self._rand(0, self.colors.length))];
				particle[i] = {
					radius		: self._rand(self.minRadius, self.maxRadius),
					xPos		: self._rand(0, canvas.width),
					yPos		: self._rand(0, canvas.height/this.numParticles * i),
					xVelocity 	: self._rand(self.minSpeed, self.maxSpeed),
					yVelocity 	: self._rand(self.minSpeed, self.maxSpeed),
					color		: 'rgba(' + color + ',' + self._rand(self.minOpacity, self.maxOpacity) + ')'
				}

				//once values are determined, draw particle on canvas
				self.draw(particle, i);
			}
			//...and once drawn, animate the particle
			self.animate(particle);
		}

		/**
		* Draws particles on canvas
		* @param	{array} Particle array from createCircle method
		* @param	{number} i value from createCircle method
		* @method draw
		*/
		Particles.prototype.draw = function(particle, i){
			var self = this,
				ctx = self.ctx;

			ctx.fillStyle = particle[i].color;

			ctx.beginPath();
			ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 6 * Math.PI, false);
			ctx.fill();
		}

		/**
		* Animates particles
		* @param	{array} particle value from createCircle & draw methods
		* @method animate
		*/
		Particles.prototype.animate = function(particle){
			var self = this,
				ctx = self.ctx;

			setInterval(function(){
				//clears canvas
				self.clearCanvas();
				//then redraws particles in new positions based on velocity
				for (var i = 0; i < self.numParticles; i++) {
					particle[i].xPos += particle[i].xVelocity;
					particle[i].yPos -= particle[i].yVelocity;

					//if particle goes off screen call reset method to place it offscreen to the left/bottom
					if (particle[i].xPos > self.canvas.width + particle[i].radius || particle[i].yPos > self.canvas.height + particle[i].radius) {
						self.resetParticle(particle, i);
					} else {
						self.draw(particle, i);
					}
				}
			}, 200/self.fps);
		}

		/**
		* Resets position of particle when it goes off screen
		* @param	{array} particle value from createCircle & draw methods
		* @param	{number} i value from createCircle method
		* @method resetParticle
		*/
		Particles.prototype.resetParticle = function(particle, i){
			var self = this;

			var random = self._rand(0, 1);

			if (random > .5) {
				// 50% chance particle comes from left side of window...
				particle[i].xPos = -particle[i].radius;
				particle[i].yPos = self._rand(0, canvas.height);
			} else {
				//... or bottom of window
				particle[i].xPos = self._rand(0, canvas.width);
				particle[i].yPos = canvas.height + particle[i].radius;
			}
			//redraw particle with new values
			self.draw(particle, i);
		}

		/**
		* Clears canvas between animation frames
		* @method clearCanvas
		*/
		Particles.prototype.clearCanvas = function(){
			this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		}

		new Particles().init(); // RUN DUDE, RUN!

		//____________________________
		//
		// 			Meteor Shower 
		//____________________________

		function meteorShower() {

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
					"x"		:	Math.floor(Math.random() * (80 - 0 + 1) + 0),
					"y"		:	Math.floor(Math.random() * (25 - 0 + 1) + 0),
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
		}
		meteorShower();
		
			
	
		// I. Mouser Over
		//_______________________________________

		function changeObject(ID, type) {
			var rootGroupSelected = document.getElementById(ID);
			if(type == 'fill') {

				// I. Path Light
				var groupChangePath = rootGroupSelected.getElementsByClassName("--change")[0];
				groupChangePath.classList.add("--fill");
				
				// II. Convert Path From White To transparent [Only For Fedora Linux]
				if(ID == 'underWaterLinux'){
					var groupChangePathWhite = rootGroupSelected.getElementsByClassName("--transparent")[0];
					groupChangePathWhite.classList.add("--fill");
				}
			}
		}


		// II. Mouser Leave
		//_______________________________________

		function resetChangeObject(ID, type) {
			var rootGroupSelected = document.getElementById(ID);
			if(type == 'fill') {

				// I. Path Light
				var groupChange = rootGroupSelected.getElementsByClassName("--change")[0];
				groupChange.classList.remove("--fill");
				
				// II. Convert Path From White To Transparent
				if(ID == 'underWaterLinux'){
					var groupChangeWhite = rootGroupSelected.getElementsByClassName("--transparent")[0];
					groupChangeWhite.classList.remove("--fill");
				}
			}
		}

		const landscapeObjects = document.querySelectorAll('svg g.c-landscape__object');
		landscapeObjects.forEach((landscapeObject) => {
			
			// I. Mouse Over
			landscapeObject.addEventListener('mouseenter', () => {
				var landscapeObjectID	= landscapeObject.id;
				var landscapeObjectType = landscapeObject.dataset.type;
				changeObject(landscapeObjectID, landscapeObjectType);
			});
				
			// II. Mouse Leave
			landscapeObject.addEventListener('mouseleave', () => {
				var landscapeObjectID	= landscapeObject.id;
				var landscapeObjectType = landscapeObject.dataset.type;
				resetChangeObject(landscapeObjectID, landscapeObjectType);
			});
		});

		//____________________________
		//
		// 			Resize
		//____________________________

		window.addEventListener('resize', function() {
			canvasDimension();
		});

		//__________________________________________________________________________
		//
		//	 							MOUSE
		//__________________________________________________________________________

		function cursorCircle() {
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
			let 	ease = 0.13, 
				targetX = 0,
				targetY = 0,
				currentX = 0,
				currentY = 0;

			const landscapeWidth = followDiv.getBoundingClientRect().width;
			const landscapeHeight = followDiv.getBoundingClientRect().height;

			// Compute target position
			const onMouseMove = (moveEvent) => {
				targetX = moveEvent.pageX - (landscapeWidth/2);
				targetY = moveEvent.pageY - (landscapeHeight/2);
			};
			
			// Move the cursor
			const animate = () => {
				requestAnimationFrame(animate);
				currentX += (targetX - currentX) * ease;
				currentY += (targetY - currentY) * ease;
  
				const translate3d = `translate3d(${currentX}px,${currentY}px,0px)`;
				let styleDiv = followDiv.style;
  
				styleDiv['transform'] = translate3d;
				styleDiv['webkitTransform'] = translate3d;
				styleDiv['mozTransform'] = translate3d;
				styleDiv['msTransform'] = translate3d;
			};
			animate();
			document.body.addEventListener('mousemove', onMouseMove);
			
			}
		cursorCircle();

	}); // [END] Javascript Document Ready
