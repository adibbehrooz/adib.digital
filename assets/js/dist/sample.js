/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./assets/js/src/sample.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stars: () => (/* binding */ stars)
/* harmony export */ });
/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** SAMPLE *******************************
/***********************************************************************/

class stars {
  constructor(x, y, r, color) {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.C_WIDTH = this.canvas.width = document.body.offsetWidth;
    this.C_HEIGHT = this.canvas.height = document.body.offsetHeight;
    this.x = x;
    this.y = y;
    this.r = r;
    this.rChange = 0.015;
    this.color = color;
  }
  starRender(x, y, r, color) {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.context.shadowBlur = 8;
    this.context.shadowColor = "white";
    this.context.fillStyle = this.color;
    this.context.fill();
  }
  starUpdate() {
    if (this.r > 2 || this.r < .8) {
      this.rChange = -this.rChange;
    }
    this.r += this.rChange;
  }
  randomColor() {
    let arrColors = ["ffffff", "ffecd3", "bfcfff"];
    return "#" + arrColors[Math.floor(Math.random() * 3)];
  }
  build() {
    let arrStars = [];
    for (let i = 0; i < 400; i++) {
      let randX = Math.floor(Math.random() * this.C_WIDTH + 1);
      let randY = Math.floor(Math.random() * this.C_HEIGHT + 1);
      let randR = Math.random() * 1.7 + .5;
      let star = new stars(randX, randY, randR, this.randomColor());
      star.starRender();
      arrStars.push(star);
    }
    return arrStars;
  }
  update() {
    let arrStars = this.build();
    for (let i = 0; i < arrStars.length; i++) {
      arrStars[i].this.starUpdate();
    }
  }
  animate() {
    this.update();
    let arrStars = this.build();
    this.context.clearRect(0, 0, this.C_WIDTH, this.C_HEIGHT);
    for (let i = 0; i < arrStars.length; i++) {
      arrStars[i].this.starRender();
    }
    requestAnimationFrame(animate);
  }
}

/*
function Star(x,y,r,color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.rChange = 0.015;
    // this.vx = Math.floor(Math.random()*4+1);
    // this.vy = Math.floor(Math.random()*4+1);
    this.color = color;
}

Star.prototype = {
    constructor: Star,
    render: function(){
      context.beginPath();
      context.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
      context.shadowBlur = 8; 
      context.shadowColor = "white";
      context.fillStyle = this.color;
      context.fill();
    },
    update: function(){
      
       if (this.r > 2 || this.r < .8){
           this.rChange = - this.rChange;
       }
       this.r += this.rChange;
    }
}

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var C_WIDTH = canvas.width = document.body.offsetWidth;
var C_HEIGHT = canvas.height = document.body.offsetHeight;

function randomColor(){
        var arrColors = ["ffffff", "ffecd3" , "bfcfff"];
        return "#"+arrColors[Math.floor((Math.random()*3))];
}
        
var arrStars = [];
for(i = 0; i < 400; i++){
    var randX = Math.floor((Math.random()*C_WIDTH)+1);
    var randY = Math.floor((Math.random()*C_HEIGHT)+1);
    var randR = Math.random() * 1.7 + .5;
    
    var star = new Star(randX, randY, randR, randomColor());
    arrStars.push(star);
}
function update(){
  for(i = 0; i < arrStars.length; i ++){
    arrStars[i].update();
  }
}
function animate(){
  update();
    //context.fillStyle = 'rgba(255, 255, 255, .1)';
    //context.fillRect(0,0,C_WIDTH,C_HEIGHT);
    context.clearRect(0,0,C_WIDTH,C_HEIGHT);
    for(var i = 0; i < arrStars.length; i++){
      arrStars[i].render();
    }
    requestAnimationFrame(animate);
}

animate();

*/
/******/ })()
;
//# sourceMappingURL=sample.js.map