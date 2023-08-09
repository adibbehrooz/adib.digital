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
			const starsFraction = canvasSize / 2000;
			
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
		stars(); // RUN DUDE, RUN!

		
		//____________________________
		//
		// 		Draw Multi Waves
		//____________________________

		function drawMultiWaves(width, height) {
			for(let m = 0; m < 75; m++) {
				let wave = { amplitude: 10, // Math.random() * (10 - 1) + 1, wavelength: 0.02, // Math.random() * (0.04 - 0.01) + 0.01,
					frequency: Math.random() * (0.05 - 0.01) + 0.01,
					increment: Math.random() * (0.05 - 0.01) + 0.01,
				};

				gsap.to(wave, { amplitude: 1,
					duration: 1,
					yoyo: true,
					repeat: -1,
				});

				ctx.beginPath();
				ctx.moveTo( 0, ( (height / 2) + (i * 15) ) );

				// 1. Draw Straight line
				// ctx.lineTo( width, ((height / 2) + (i * 15)) );
				
				// 2. Draw Wave
				for (let i = -55; i < width * 9; i++) {		
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
		}
		// drawMultiWaves(canvasWidth, canvasHeight);  // RUN DUDE, RUN!

		//____________________________
		//
		// 		Draw Single Waves
		//____________________________

		function drawSingleWaves(width, height) {
			let m = 0;
			let wave = {
				amplitude: 10, // Math.random() * (10 - 1) + 1,
				wavelength: 0.02, // Math.random() * (0.04 - 0.01) + 0.01,
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
		// drawSingleWaves(canvasWidth, canvasHeight);  // RUN DUDE, RUN!
		

		//____________________________
		//
		// 		Draw SineWaves
		//____________________________

		function drawSineWaves() {

			new SineWaves({
				el: document.getElementById('firstwaves'),
				speed: 4,
				width: function() {
					return $(window).width(); },
				height: function() {
					return $(window).height(); },
				ease: 'SineInOut',
				wavesWidth: '150%',
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
					gradient = void 0; },
			});
		}
		drawSineWaves();

		//____________________________
		//
		// 			Resize
		//____________________________

		window.addEventListener('resize', function() {
			canvasDimension();
			stars();
			drawWaves(canvasWidth, canvasHeight);
		});


	}); // [END] Javascript Document Ready


	// 					JQUERY
	//__________________________________________

	jQuery(function () {

	}); // [END] JQuery
