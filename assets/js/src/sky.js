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
		
		};
		
		//____________________________
		//
		// 	Stars 
		//____________________________

		Particles() {
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
		this.numParticles = 800;
		//required canvas variables
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
		};
		
		init() {
		this.render();
		this.createCircle();
		};
		
		_rand(min, max) {
		return Math.random() * (max - min) + min;
		};
		
		render() {
		var self = this,
		wHeight = window.innerHeight,
		wWidth = window.innerWidth;

		self.canvas.width = wWidth;
		self.canvas.height = wHeight;
		}
		
		createCircle() {
		var particle = [];

		for (var i = 0; i < this.numParticles; i++) {
			var self = this,
			color = self.colors[~~(self._rand(0, self.colors.length))];
			particle[i] = {
			radius	: self._rand(self.minRadius, self.maxRadius),
			xPos	: self._rand(0, canvas.width),
			yPos	: self._rand(0, canvas.height/this.numParticles * i),
			xVelocity 	: self._rand(self.minSpeed, self.maxSpeed),
			yVelocity 	: self._rand(self.minSpeed, self.maxSpeed),
			color	: 'rgba(' + color + ',' + self._rand(self.minOpacity, self.maxOpacity) + ')'
			}

			//once values are determined, draw particle on canvas
			self.draw(particle, i);
		}
		//...and once drawn, animate the particle
		self.animate(particle);
		}

		draw(particle, i) {
		var self = this,
			ctx = self.ctx;

		ctx.fillStyle = particle[i].color;

		ctx.beginPath();
		ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 6 * Math.PI, false);
		ctx.fill();
		}

		animate(particle) {
		var self = this,
			ctx = self.ctx;

		setInterval(function(){
		// const starAnimate = () => {
			//clears canvas
			self.clearCanvas();
			//then redraws particles in new positions based on velocity
			const fps = 25;
			// setTimeout(() => { requestAnimationFrame(starAnimate); }, 1000 / fps);
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
		// }
		// starAnimate();
		}, 200/self.fps);
		}

		resetParticle(particle, i) {
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


		clearCanvas() {
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
				
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
		}
		
	}
	
	export { Sky };
