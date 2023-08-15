/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

const o = {
	a: 1,
	b: 2,
	// __proto__ sets the [[Prototype]]. It's specified here
	// as another object literal.
	__proto__: {
	  b: 3,
	  c: 4,
	},
  };
  
  // o.[[Prototype]] has properties b and c.
  // o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain
  // what that means later).
  // Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
  // This is the end of the prototype chain, as null,
  // by definition, has no [[Prototype]].
  // Thus, the full prototype chain looks like:
  // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null
  
  console.log(o.a); // 1
  // Is there an 'a' own property on o? Yes, and its value is 1.
  
  console.log(o.b); // 2
  // Is there a 'b' own property on o? Yes, and its value is 2.
  // The prototype also has a 'b' property, but it's not visited.
  // This is called Property Shadowing
  
  console.log(o.c); // 4
  // Is there a 'c' own property on o? No, check its prototype.
  // Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.
  
  console.log(o.d); // undefined
  // Is there a 'd' own property on o? No, check its prototype.
  // Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
  // o.[[Prototype]].[[Prototype]] is Object.prototype and
  // there is no 'd' property by default, check its prototype.
  // o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
  // no property found, return undefined.
  

		//------------------------------------------------------
		/*
		module.exports = class tailwindScreenIndicator {
			constructor(tailwindAddress) {
				this.pureAddress = tailwindAddress;
			}
			calcArea() {
				return this.pureAddress;
			}
		}

		module.exports = class tailwind {
			constructor(tailwindVar) {
				this.tailAdress = tailwindVar;
			}
			dArea() {
				return this.tailAdress;
			}
		}
		  
			//const square = new tailwindScreenIndicator("Hi");
			//console.log( square.calcArea() );
			const sample = require('./sample.js');
			const TSI = new sample("Hi");
			console.log(TSI.calcArea());

		/*
		class tailwindScreenIndicator {
			
			constructor(tailwindAddress) {
				this.pureAddress = tailwindAddress;
				this.customScreens = require(tailwindAddress).variants.theme.screens;
				this.sreensKeys = Object.keys(customScreens);
				this.screensValues = Object.values(customScreens);
			}

			calcArea() {
				return this.pureAddress;
			}

			// Getter
			get area() {
				return this.calcArea();
			}

			// Method
			calcArea() {
				return this.pureAddress;
			}
		}

		const TWScIn = new tailwindScreenIndicator("../../../tailwind.config.js");
		console.log(TWScIn.area); 

		class tailwindScreenIndicator {
			constructor(tailwindAddress) {
				this.pureAddress = tailwindAddress;
				this.customScreens = require(tailwindAddress).variants.theme.screens;
				this.sreensKeys = Object.keys(customScreens);
				this.screensValues = Object.values(customScreens);
			}
			// Getter
			get area() {
			  return this.calcArea();
			}
			// Method
			calcArea() {
			  return this.height * this.width;
			}
			*getSides() {
			  yield this.height;
			  yield this.width;
			  yield this.height;
			  yield this.width;
			}
		  }
		  
		  const square = new Rectangle(10, 10);
		  
		  console.log(square.area); // 100
		  console.log([...square.getSides()]); // [10, 10, 10, 10]
		*/




		//------------------------------------------------------
		/*
		breakQuery(sreensKeys) {
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
		}
		breakQuery(sreensKeys);


		addBreakpointElement(breakpointName) {

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

		*/

		/*
		module.exports = class tailwindScreenIndicator {

			constructor(address) {
				const customScreens = require(address).variants.theme.screens;
				const sreensKeys = Object.keys(customScreens);
				const screensValues = Object.values(customScreens);
			}

			tailwindAddress() {
				return '../../../tailwind.config.js'
			}

			breakpointQuery(sreensKeys) {
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
			}

			addBreakpointElement(breakpointName) {

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

			init() {
				tailwindAddress();
				breakpointQuery();
			}
		};

		const config = require('./config.js');
		const tsi = new tailwindScreenIndicator('../../../tailwind.config.js');
		*/

		//-----------------------------------------------------------------------