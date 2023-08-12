/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

	// Assigning to exports will not modify module, must use module.exports
	module.exports = class Square {
		constructor(width) {
		this.width = width;
		}
	
		area() {
		return this.width ** 2;
		}

	}; 

	const NewSample = require('./sample.js');
	let newSquare = new NewSample(2);
	console.log( newSquare.area() );


	/*
		const circle = require('./circle.js');
		console.log(`The area of a circle of radius 4 is ${circle.area(4)}`); 

		const { PI } = Math;

		exports.area = (r) => PI * r ** 2;

		exports.circumference = (r) => 2 * PI * r; 
	*/
	/*
		const obj = {
			"0": "Zeroth element",
			"1": "First element",
			"2": "Second element",
			"3": "Third element",
		};

		const arr = [
			"Zeroth element",
			"First element", "Second element",
			"Third element"
		];
		console.log(obj)
		console.log(arr);
	*/
