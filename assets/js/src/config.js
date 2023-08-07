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
	//	   					1) Tailwind Screens In JS
	//__________________________________________________________________________

		const customScreens = require("../../../tailwind.config.js").variants.theme.screens;
		const sreensKeys = Object.keys(customScreens);
		const screensValues = Object.values(customScreens);

		let i = 0;
		for ( const property in sreensKeys ) {
			const breakpoint = sreensKeys[i];
			module.exports = { breakpoint };
			let j = 0;
			for(  keys in screensValues ) {
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
		//	   					2) SVG Pan Zoom
		//__________________________________________________________________________

		let zoomLandscape = document.querySelector('.c-landscapeFrame');
		panzoom(zoomLandscape, {
			bounds: true,
			boundsPadding: 0.06,
			transformOrigin: {x: 1, y: 1},
			zoomSpeed: 0.075,
			maxZoom: 1,
			minZoom: 1,
			initialX: 100,
			initialY: 100,
		});

		//__________________________________________________________________________
		//
		//	   					2) Canvas
		//__________________________________________________________________________


		// Canvas Global Data
		//_______________________________________

		const canvas = document.getElementById("canvas");
		const ctx = canvas.getContext("2d");
		canvas.width = canvasWidth = Math.round(( window.innerWidth )); 
		canvas.height = canvasHeight = Math.round(( window.innerHeight )); 


		// Canvas Responsive Dimension
		//_______________________________________

		function canvasDimension() {
			let width = Math.round(( window.innerWidth )); 
			let height = Math.round(( window.innerHeight )); 
			canvas.width = width;
			canvas.height = height;
		}

		// Canvas Draw Lines
		//_______________________________________

		drawWaves(canvasWidth, canvasHeight);
		lines = [];
		function drawWaves(width, height) {
			for(var i = 0; i < 25; i++) {  
				ctx.beginPath();
				ctx.moveTo( 0, ( (height / 2) + (i * 20) ) );
				ctx.lineTo( width, ((height / 2) + (i * 20) ) );
				ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
				ctx.className = "whiteWave-"+i;
				ctx.stroke(); 
				
			}
			/*
			console.log("Canvas Width :" + width);
			console.log("Canvas Height :" + height);
			ctx.beginPath();
			ctx.moveTo( 0, height / 2 );
			ctx.lineTo(  width, height / 2 );
			ctx.strokeStyle = "white";
			ctx.className = "whiteLine";
			ctx.stroke(); 
			gsap.to("whiteLine", 15, { 
				attr: {"baseFrequency":0.1}, 
				repeat: -1, 
				yoyo: false 
			});	
			*/
		}

		//_______________________________________
		//
		// 					Resize
		//_______________________________________

		window.addEventListener('resize', function() {
			canvasDimension();
			drawWaves(canvasWidth, canvasHeight);
		});
		

		//_______________________________________________________________
		//
		//						3) GSAP SVG Wave Water
		//_______________________________________________________________
		/*
		ctx.lineWidth = "1";
		ctx.strokeStyle = "white";
		
		let iW = window.innerWidth;
		let iH = window.innerHeight;
		let start = iW / 2 - 400;
		
		const point = {x:start, y:0};
		const rect = {
		  x: start,
		  y: 0,
		  width: 0,
		  height: 0
		};
		
		gsap.timeline({delay: 1, onUpdate: drawWaves })
			.to(rect, {
			duration: 1,
			width: 800,
			height: 800
		})
		  .to(rect, {
			duration: 1,
			width: 400,
			height: 400
		  });
		  // .to(point, 1, {x: start + 800, onUpdate: animateLine})
		
		animateLine();
		
		//draw line onUpdate of tween to new x and y values of point
		function animateLine() {
		  ctx.clearRect(0, 0, iW, iH);
		  ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
		}
		

		
		gsap.to("whiteWave-0", 15, { 
			attr: {"baseFrequency":0.1}, 
			repeat: -1, 
			yoyo: false 
		});	
		*/
		

	}); // [END] Javascript Document Ready



	// 					JQUERY
	//__________________________________________

	jQuery(function () {

	}); // [END] JQuery
