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
		//	 							PANZOOM
		//__________________________________________________________________________
		/*
		let zoomLandscape = document.querySelector('#canvas');
		panzoom(zoomLandscape, {
			bounds: true,
			boundsPadding: 0.1,
			transformOrigin: {x: 0, y: 1},
			zoomSpeed: 0.075,
			maxZoom: 1,
			minZoom: 1,
			initialX: 0,
			initialY: 0,
		});
		*/

		//__________________________________________________________________________
		//
		//	 							CANVAS
		//__________________________________________________________________________
		
		
		// 			Canvas Global Data
		//_______________________________________

		const canvas = document.getElementById("canvas");
		const ctx = canvas.getContext("2d");
		canvas.width = canvasWidth = window.innerWidth; 
		canvas.height = canvasHeight = window.innerHeight; 
		ctx.strokeWidth = 30;
		ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";

		// 			Canvas Dimension
		//_______________________________________

		function canvasDimension() {
			let width = window.innerWidth; 
			let height = window.innerHeight; 
			canvas.width = width;
			canvas.height = height;
		}


		// 			Canvas Draw Lines
		//_______________________________________

		// drawWaves(canvasWidth, canvasHeight);
		function drawWaves(width, height) {
			for(var i = 0; i < 50; i++) {
				ctx.beginPath();
				ctx.moveTo( 0, ( (height / 2) + (i * 15) ) );
				ctx.lineTo( width, ((height / 2) + (i * 15)) );
				ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
				ctx.className = "whiteWave_"+i;
				ctx.stroke(); 
			}
		}

		function random(min, max) {
			return min + Math.random() * (max + 1 - min);
		}

		stars();
		function stars() {
			//Add stars to a small fraction of the canvas
			const canvasSize = canvas.width * canvas.height * 3;
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

		// 				Resize
		//_______________________________________

		window.addEventListener('resize', function() {
			canvasDimension();
			// drawWaves(canvasWidth, canvasHeight);
			stars()
		});
		
		/*
		//_______________________________________________________________
		//
		//								GSAP
		//_______________________________________________________________
		
		// 			Canvas Global Data
		//_______________________________________

		const canvas = document.getElementById("canvas");
		const ctx = canvas.getContext("2d");
		canvas.width = canvasWidth = window.innerWidth; 
		canvas.height = canvasHeight = window.innerHeight; 
		ctx.strokeWidth = 30;
		ctx.strokeStyle = "rgba(255, 255, 255, 1)";
		
		let wave = {
			amplitude: 5,
			wavelength: 0.33,
			frequency: 0.05,
			increment: 0.05,
		};
		

		// 			Canvas Dimension
		//_______________________________________

		function canvasDimension() {
			let width = window.innerWidth; 
			let height = window.innerHeight; 
			canvas.width = width;
			canvas.height = height;
		}
		
		gsap.to(wave, {
			amplitude: 1,
			duration: 1,
			yoyo: true,
			repeat: -1,
		});
		
		const animate = () => {
			
			drawWaves(canvasWidth, canvasHeight);
			function drawWaves(width, height) {
				requestAnimationFrame(animate);
				ctx.clearRect(0, 0, width, height);
				ctx.beginPath();
			
				// Move from top left to middle left
				ctx.moveTo(0, ( (height / 2) + (0 * 15) ) );
			
				for (let m = 0; m < width * 9; m++) {
				ctx.lineTo(
					m,
					((height / 2) + (0 * 15) ) +
					Math.sin(m * wave.wavelength + wave.increment) * wave.amplitude
				);
				}
				ctx.stroke();
				wave.increment += wave.frequency;
			}
		};
		
		animate();

		// 				Resize
		//_______________________________________

		window.addEventListener('resize', function() {
			canvasDimension();
			animate();
		});	
		*/

		
		var waves = new SineWaves({
			
			el: document.getElementById('firstwaves'),
			
			speed: 4,
			
			width: function() {
				return $(window).width();
			},
			
			height: function() {
				return $(window).height();
			},
			
			ease: 'SineInOut',
			
			wavesWidth: '100%',
			
			waves: [
				{
				timeModifier: 4,
				lineWidth: 1,
				amplitude: -5,
				wavelength: 5
			},
			{
				timeModifier: 2,
				lineWidth: 2,
				amplitude: -10,
				wavelength: 10
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -25,
				wavelength: 25
			},
			{
				timeModifier: 0.5,
				lineWidth: 1,
				amplitude: -20,
				wavelength: 45
			},
			{
				timeModifier: 0.25,
				lineWidth: 2,
				amplitude: -15,
				wavelength: 55
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -21,
				wavelength: 35
			},
			{
				timeModifier: 2,
				lineWidth: 2,
				amplitude: -20,
				wavelength: 45
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -25,
				wavelength: 45
			},
			{
				timeModifier: 0.5,
				lineWidth: 1,
				amplitude: -40,
				wavelength: 55
			},
			{
				timeModifier: 0.25,
				lineWidth: 2,
				amplitude: -15,
				wavelength: 35
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -25,
				wavelength: 45
			},
			{
				timeModifier: 0.5,
				lineWidth: 1,
				amplitude: -25,
				wavelength: 55
			},
			{
				timeModifier: 0.25,
				lineWidth: 2,
				amplitude: -10,
				wavelength: 35
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -15,
				wavelength: 25
			},
			{
				timeModifier: 0.5,
				lineWidth: 1,
				amplitude: -25,
				wavelength: 45
			},
			{
				timeModifier: 0.25,
				lineWidth: 2,
				amplitude: -19,
				wavelength: 55
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -25,
				wavelength: 35
			},
			{
				timeModifier: 4,
				lineWidth: 1,
				amplitude: -5,
				wavelength: 5
			},
			{
				timeModifier: 2,
				lineWidth: 2,
				amplitude: -10,
				wavelength: 10
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -15,
				wavelength: 25
			},
			{
				timeModifier: 0.5,
				lineWidth: 1,
				amplitude: -22,
				wavelength: 45
			},
			{
				timeModifier: 0.25,
				lineWidth: 2,
				amplitude: -20,
				wavelength: 55
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -25,
				wavelength: 35
			},
			{
				timeModifier: 2,
				lineWidth: 2,
				amplitude: -15,
				wavelength: 45
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -25,
				wavelength: 45
			},
			{
				timeModifier: 0.5,
				lineWidth: 1,
				amplitude: -20,
				wavelength: 55
			},
			{
				timeModifier: 0.25,
				lineWidth: 2,
				amplitude: -20,
				wavelength: 55
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -25,
				wavelength: 35
			},
			{
				timeModifier: 0.25,
				lineWidth: 2,
				amplitude: -15,
				wavelength: 35
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -25,
				wavelength: 45
			},
			{
				timeModifier: 0.5,
				lineWidth: 1,
				amplitude: -15,
				wavelength: 55
			},
			{
				timeModifier: 0.25,
				lineWidth: 2,
				amplitude: -20,
				wavelength: 35
			},
			{
				timeModifier: 1,
				lineWidth: 1,
				amplitude: -25,
				wavelength: 25
			},
			{
				timeModifier: 0.5,
				lineWidth: 1,
				amplitude: -20,
				wavelength: 45
			},
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

		/*
		var waves = new SineWaves({
			
			el: document.getElementById('secondWaves'),
			
			speed: 4,
			
			width: function() {
				return $(window).width();
			},
			
			height: function() {
				return $(window).height();
			},
			
			ease: 'SineInOut',
			
			wavesWidth: '100%',
			
			waves: [
				{
				timeModifier: 3,
				lineWidth: 1,
				amplitude: -5,
				wavelength: 5
			},
			{
				timeModifier: 1,
				lineWidth: 2,
				amplitude: -20,
				wavelength: 20
			},
			{
				timeModifier: 0.5,
				lineWidth: 1,
				amplitude: -30,
				wavelength: 30
			},
			{
				timeModifier: 0.15,
				lineWidth: 1,
				amplitude: -40,
				wavelength: 40
			},
			{
				timeModifier: 0.75,
				lineWidth: 2,
				amplitude: -30,
				wavelength: 30
			}],

			// Called on window resize
			resizeEvent: function() {
				var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
				gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
				gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
				gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
								
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


		var waves = new SineWaves({
			
			el: document.getElementById('thirdWaves'),
			
			speed: 4,
			
			width: function() {
				return $(window).width();
			},
			
			height: function() {
				return $(window).height();
			},
			
			ease: 'SineInOut',
			
			wavesWidth: '100%',
			
			waves: [
				{
				timeModifier: 4,
				lineWidth: 1,
				amplitude: -15,
				wavelength: 15
			},
			{
				timeModifier: 2,
				lineWidth: 2,
				amplitude: -15,
				wavelength: 15
			},
			{
				timeModifier: 5,
				lineWidth: 1,
				amplitude: -20,
				wavelength: 20
			},
			{
				timeModifier: 0.5,
				lineWidth: 1,
				amplitude: -30,
				wavelength: 60
			},
			{
				timeModifier: 0.25,
				lineWidth: 2,
				amplitude: -40,
				wavelength: 60
			}],

			// Called on window resize
			resizeEvent: function() {
				var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
				gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
				gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
				gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
								
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


		var waves = new SineWaves({
			
			el: document.getElementById('fourthWaves'),
			
			speed: 4,
			
			width: function() {
				return $(window).width();
			},
			
			height: function() {
				return $(window).height();
			},
			
			ease: 'SineInOut',
			
			wavesWidth: '100%',
				
			waves: [
				{
				timeModifier: 3,
				lineWidth: 1,
				amplitude: -5,
				wavelength: 5
			},
			{
				timeModifier: 1,
				lineWidth: 2,
				amplitude: -20,
				wavelength: 20
			},
			{
				timeModifier: 0.5,
				lineWidth: 1,
				amplitude: -30,
				wavelength: 30
			},
			{
				timeModifier: 0.15,
				lineWidth: 1,
				amplitude: -40,
				wavelength: 40
			},
			{
				timeModifier: 0.75,
				lineWidth: 2,
				amplitude: -30,
				wavelength: 30
			}],

			// Called on window resize
			resizeEvent: function() {
				var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
				gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
				gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
				gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
								
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
		*/

	}); // [END] Javascript Document Ready



	// 					JQUERY
	//__________________________________________

	jQuery(function () {

	}); // [END] JQuery
