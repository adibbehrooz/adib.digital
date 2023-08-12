/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/src/sample.js":
/*!*********************************!*\
  !*** ./assets/js/src/sample.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
const NewSample = __webpack_require__(/*! ./sample.js */ "./assets/js/src/sample.js");
let newSquare = new NewSample(2);
console.log(newSquare.area());

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/src/sample.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=sample.js.map