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
		// 			Draw Stars
		//____________________________

		function random(min, max) {
			return min + Math.random() * (max + 1 - min);
		}

		function stars() {
			//Add stars to a small fraction of the canvas
			const canvasSize = canvas.width * canvas.height;
			const starsFraction = canvasSize / 1000;

			for(let i = 0; i < starsFraction; i++) {
				//Set up random elements
				let xPos = random(2, canvas.width - 2);
				let yPos = random(2, canvas.height - 2);
				let alpha = random(0.5, 1);
				let size = random(1, 2);

				//Add stars
				ctx.fillStyle = '#ffffff';
				ctx.globalAlpha = alpha;
				ctx.fillRect(xPos, yPos, size, size);
			}
		}
		// stars(); // RUN DUDE, RUN!


		//____________________________
		//
		// 		Draw Multi Waves
		//____________________________

		function drawMultiWaves(width, height) {
			for(let m = 0; m < 75; m++) {
				let wave = { amplitude: 10, // Math.random() * (10 - 1) + 1,
				wavelength: 0.02, // Math.random() * (0.04 - 0.01) + 0.01,
				frequency: Math.random() * (0.05 - 0.01) + 0.01,
				increment: Math.random() * (0.05 - 0.01) + 0.01,
				};

				gsap.to(wave, { amplitude: 1,
					duration: 1,
					yoyo: true,
					repeat: -1,
				});

				ctx.beginPath();
				ctx.moveTo( 0, ( (height / 1.3) + (i * 15) ) );

				// 1. Draw Straight line
				// ctx.lineTo( width, ((height / 2) + (i * 15)) );

				// 2. Draw Wave
				for (let i = -55; i < width * 9; i++) {
					ctx.lineTo( i, ((height / 1.3) + (m * 15)) + Math.sin(i * wave.wavelength + wave.increment) * wave.amplitude );
				}

				let gradient = ctx.createLinearGradient(0, 0, width, 0);
				gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
				gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
				gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
				ctx.strokeStyle = gradient;

				ctx.stroke();
				ctx.className = "whiteWave_"+i;
				wave.increment += wave.frequency;
			};
		}
		// drawMultiWaves(canvasWidth, canvasHeight);	// RUN DUDE, RUN!


		//____________________________
		//
		// 		Draw Single Waves
		//____________________________

		function drawSingleWaves(width, height) {
			let m = 0;
			let wave = {
				amplitude: 10, // Math.random() * (10 - 1) + 1
				wavelength: 0.02, // Math.random() * (0.04 - 0.01) + 0.01
				frequency: Math.random() * (0.05 - 0.01) + 0.01,
				increment: Math.random() * (0.05 - 0.01) + 0.01,
			};

			gsap.to(wave, {
				amplitude: 1,
				duration: 1,
				yoyo: true,
				repeat: -1,
			});

			const animate = () => {
				requestAnimationFrame(animate);
				ctx.clearRect(0, 0, width, height);
				ctx.beginPath();
				ctx.moveTo( 0, ( (height / 2) + (i * 15) ) );
				for (let i = 0; i < width * 9; i++) {
					ctx.lineTo( i, ((height / 2) + (m * 15)) + Math.sin(i * wave.wavelength + wave.increment) * wave.amplitude );
				}

				let gradient = ctx.createLinearGradient(0, 0, width, 0);
				gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
				gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
				gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
				ctx.strokeStyle = gradient;

				ctx.stroke();
				ctx.className = "whiteWave_"+i;
				wave.increment += wave.frequency;
			};

			animate()
		}
		// drawSingleWaves(canvasWidth, canvasHeight);	// RUN DUDE, RUN!


		//____________________________
		//
		// 		Draw SineWaves
		//____________________________

		function drawSineWaves() {

			new SineWaves({
				el: document.getElementById('firstwaves'),
				speed: 4, // 4
				width: function() {
					return $(window).width(); },
				height: function() {
					return $(window).height(); },
				ease: 'SineInOut',
				wavesWidth: '200%',
				waves: [
					{ timeModifier: 4, lineWidth: 1, amplitude: -5, wavelength: 5 },
					{ timeModifier: 2, lineWidth: 2, amplitude: -10, wavelength: 10 },
					{ timeModifier: 1, lineWidth: 1, amplitude: -25, wavelength: 25 },
					{ timeModifier: 0.5, lineWidth: 1, amplitude: -20, wavelength: 45 },
					{ timeModifier: 0.25, lineWidth: 2,amplitude: -15, wavelength: 55 },
					{ timeModifier: 1, lineWidth: 1, amplitude: -21, wavelength: 35 },
					{ timeModifier: 2, lineWidth: 2, amplitude: -20, wavelength: 45 },
					{ timeModifier: 1, lineWidth: 1, amplitude: -25, wavelength: 45 },
					{ timeModifier: 0.5, lineWidth: 1, amplitude: -40, wavelength: 55 },
					{ timeModifier: 0.25, lineWidth: 2, amplitude: -15, wavelength: 35 },
					{ timeModifier: 1, lineWidth: 1, amplitude: -25, wavelength: 45 },
					{ timeModifier: 0.5, lineWidth: 1, amplitude: -25, wavelength: 55 },
					{ timeModifier: 0.25, lineWidth: 2, amplitude: -10, wavelength: 35},
					{ timeModifier: 1, lineWidth: 1, amplitude: -15, wavelength: 25 },
					{ timeModifier: 0.5, lineWidth: 1, amplitude: -25, wavelength: 45 },
					{ timeModifier: 0.25, lineWidth: 2, amplitude: -19, wavelength: 55 },
					{ timeModifier: 1, lineWidth: 1, amplitude: -25, wavelength: 35 },
					{ timeModifier: 4, lineWidth: 1, amplitude: -5, wavelength: 5 },
					{ timeModifier: 2, lineWidth: 2, amplitude: -10, wavelength: 10 },
					{ timeModifier: 1, lineWidth: 1, amplitude: -15, wavelength: 25 },
					{ timeModifier: 0.5, lineWidth: 1, amplitude: -22, wavelength: 45 },
					{ timeModifier: 0.25, lineWidth: 2, amplitude: -20, wavelength: 55 },
					{ timeModifier: 1, lineWidth: 1, amplitude: -25, wavelength: 35 },
					{ timeModifier: 2, lineWidth: 2, amplitude: -15, wavelength: 45 },
					{ timeModifier: 1, lineWidth: 1, amplitude: -25, wavelength: 45 },
					{ timeModifier: 0.5, lineWidth: 1, amplitude: -20, wavelength: 55 },
					{ timeModifier: 0.25, lineWidth: 2, amplitude: -20, wavelength: 55 },
					{ timeModifier: 1, lineWidth: 1, amplitude: -25, wavelength: 35 },
					{ timeModifier: 0.25, lineWidth: 2, amplitude: -15, wavelength: 35 },
					{ timeModifier: 1, lineWidth: 1, amplitude: -25, wavelength: 45 },
					{ timeModifier: 0.5, lineWidth: 1, amplitude: -15, wavelength: 55 },
					{ timeModifier: 0.25, lineWidth: 2, amplitude: -20, wavelength: 35 },
					{ timeModifier: 1, lineWidth: 1, amplitude: -25, wavelength: 25 },
					{ timeModifier: 0.5, lineWidth: 1, amplitude: -20, wavelength: 45 },
				],

				// Called on window resize
				resizeEvent: function() {
					var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
					gradient.addColorStop(0,"rgba(23, 210, 168, 0.1)");
					gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.1)");
					gradient.addColorStop(1,"rgba(23, 210, 168, 0.1)");

					var index = -1;
					var length = this.waves.length;
					while(++index < length){
						this.waves[index].strokeStyle = gradient;
					}

					// Clean Up
					index = void 0;
					length = void 0;
					gradient = void 0; 
				},
			});
		}
		// drawSineWaves();

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
			this.numParticles = 1100;
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

		/** A percentage of the screen to use in each grid, should be a fraction of 1 */
		const STARS_GRID_SIZE = 1 / 4;
		/** Lower is more dense */
		const STARS_DENSITY = 14;

		const METEOR_SPEED = 0.02;
		const METEOR_MAX_FRAMES = 1000;
		const METEOR_MAX_LIFE = 5000;
		const METEOR_SPAWN_INTERVAL = 1000;

		/**
		 * Helper functions
		 */
		function rescale(value, currentMin, currentMax, newMin, newMax) {
			const percentage = (value - currentMin) / (currentMax - currentMin);
			return percentage * (newMax - newMin) + newMin;
		}

		function random(min, max) {
			const randomNumber = Math.random() * (max - min + 1) + min;

			if (!Number.isInteger(min) || !Number.isInteger(max)) {
				return randomNumber;
			} else {
				return Math.floor(randomNumber);
			}
		}

		function debounce(func, wait, immediate) {
			let timeout;
			
			return function(...args) {
				let context = this;
				clearTimeout(timeout);
				
				timeout = setTimeout(function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				}, wait);
				
				if (immediate && !timeout) func.apply(context, args);
			}
		}

		/**
		 * The input values are percentages of the screen that the number can be picked within.
		 *
		 * For example, `pickRandomCoordinateOnScreen(0, 0.5, 0.75, 1)` can be picked within the
		 * first 50% of the x axis (left half) and the last 25% of the y axis (bottom quarter).
		 */
		function pickRandomCoordinateOnScreen(xMin = 0, xMax = 1, yMin = 0, yMax = 1) {
			const maxX = window.innerWidth;
			const maxY = window.innerHeight;

			const x = rescale(random(0, maxX), 0, maxX, xMin * maxX, xMax * maxX);
			const y = rescale(random(0, maxY), 0, maxY, yMin * maxY, yMax * maxY);

			return { x, y };
		}

		/**
		* Classes
		*/
		class Meteor {
			constructor(x, y, speed) {
				this.pos = { x, y };
				const velScale = Math.min(window.innerWidth, window.innerHeight);
				this.vel = { x: -speed * velScale, y: speed * velScale };
				this.opacity = 1;
				this.scale = random(0.2, 0.7);
				
				this.created = Date.now();
				
				this.element = document.createElement('div');
				this.element.classList.add('meteor');
				document.body.appendChild(this.element);
			}
			
			update() {
				this.pos.x += this.vel.x * this.scale;
				this.pos.y += this.vel.y * this.scale;
				this.updateElementStyle()
			}
			
			updateElementStyle() {
				this.element.style = `
					top: ${this.pos.y}px;
					left: ${this.pos.x}px;
					opacity: ${this.opacity};
					transform: rotate(-45deg) scale(${this.scale});
				`
			}
			
			cleanup() {
				this.element.remove();
			}
		}

		class Stars {
			constructor(gridSize = STARS_GRID_SIZE, density = STARS_DENSITY) {
				this.gridSize = gridSize;
				this.density = density;
				
				this.element = document.createElement('div');
				this.element.classList.add('stars');
				document.body.appendChild(this.element);
				
				this.update = debounce(this.update.bind(this), 500);
				this.update();
				window.addEventListener('resize', this.update);
			}
			
			stars = [];
			
			update() {	
				const translations = [];
				
				const w = window.screen.width;
				const h = window.screen.height;
				const count = Math.floor(Math.sqrt(w * h) / this.density * this.gridSize * this.gridSize);

				for (let x = 0; x < 1; x += this.gridSize) {
					for (let y = 0; y < 1; y += this.gridSize) {
						for (let i = 0; i < count; i++) {
							const xMax = x + this.gridSize;
							const yMax = y + this.gridSize;
							const coordinate = pickRandomCoordinateOnScreen()
							translations.push(`${coordinate.x}px ${coordinate.y}px`);
						}
					}
				}
				
				this.element.style = `
					box-shadow: ${translations
						.map((x) => `rgb(255, 255, 255) ${x}`)
						.join(', ')};
				`
			}
			
			cleanup() {
				window.removeEventListener('resize', this.update);
				this.element.remove();
			}
		}

		function spawnMeteor() {
			const startPoint = pickRandomCoordinateOnScreen(0.1, 1.5, -0.5, -0.25);
			const meteor = new Meteor(startPoint.x, startPoint.y, METEOR_SPEED);
			
			let frame = 0
			function updateMeteor() {
				meteor.update();
				const isWithinScreen = meteor.pos.x > -(window.innerWidth / 2) && meteor.pos.y < (window.innerHeight * 2);
				if (isWithinScreen && ++frame < METEOR_MAX_FRAMES && Date.now() - meteor.created < METEOR_MAX_LIFE) {
					requestAnimationFrame(updateMeteor);
				} else {
					meteor.cleanup();
				}
			}
			
			updateMeteor()
			setTimeout(spawnMeteor, random(2.7 * METEOR_SPAWN_INTERVAL, 6.3 * METEOR_SPAWN_INTERVAL));
		}

		/**
		* Main
		*/
		// stars = new Stars();
		// spawnMeteor();

		//____________________________
		//
		// 			Meteor Shower 
		//____________________________

		// https://codepen.io/jh3y/pen/XoXgPP


		
		
		//__________________________________________________________________________
		//
		//	 							MOUSE
		//__________________________________________________________________________

		let circle = $('.o-centerCircle');
		let follow = $('.o-followCircle');


	
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
			// stars();
			// drawMultiWaves(canvasWidth, canvasHeight);
			// drawSingleWaves(canvasWidth, canvasHeight);
			// drawSineWaves();
		});

	}); // [END] Javascript Document Ready



	//__________________________________________________________________________
	//
	//	 							JQUERY
	//__________________________________________________________________________

	jQuery(function () {

	}); // [END] JQuery
