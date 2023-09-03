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
/* harmony export */   Circle: () => (/* binding */ Circle)
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

/*
class stars {
		constructor( x,y,r,color ) {
		this.canvas = document.getElementById("canvas");
		this.context = this.canvas.getContext("2d");
		
		this.C_WIDTH = this.canvas.width = document.body.offsetWidth;
		this.C_HEIGHT = this.canvas.height = document.body.offsetHeight;
			this.x = x;
		this.y = y;
		this.r = r;
		this.rChange = 0.015;
		this.color = color;
	};
		starRender( x,y,r,color ) {
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
		this.context.shadowBlur = 8; 
		this.context.shadowColor = "white";
		this.context.fillStyle = this.color;
		this.context.fill();		
	};
		starUpdate() {
		if (this.r > 2 || this.r < .8){
			this.rChange = - this.rChange;
		}
		this.r += this.rChange;		
	}
		randomColor() {
		let arrColors = ["ffffff", "ffecd3" , "bfcfff"];
		return "#"+arrColors[Math.floor((Math.random()*3))];
	};
		build() {
		let arrStars = [];
		for(let i = 0; i < 400; i++){
			let randX = Math.floor((Math.random()*this.C_WIDTH)+1);
			let randY = Math.floor((Math.random()*this.C_HEIGHT)+1);
			let randR = Math.random() * 1.7 + .5;
				
			let star = new stars(randX, randY, randR, this.randomColor());
			star.starRender();
				arrStars.push(star);
		}
			return arrStars;
	}
		update() {
		let arrStars = this.build();
		for(let i = 0; i < arrStars.length; i ++){
			arrStars[i].this.starUpdate();
		}
	};
		animate(){
		this.update();
		let arrStars = this.build();
			this.context.clearRect(0,0, this.C_WIDTH, this.C_HEIGHT);
			for(let i = 0; i < arrStars.length; i++){
				arrStars[i].this.starRender();
			}
			requestAnimationFrame(animate);
	};
	}
	export { stars };
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

/*================================================================================================================

// https://stackoverflow.com/questions/53318646/change-colour-of-each-rectangle-in-canvas/53320540#53320540

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let cw = canvas.width = 700,
	cx = cw / 2;
let ch = canvas.height = 700,
	cy = ch / 2;
c.translate(-200,0);
c.fillStyle = "white";

let mouse = {}


let rects = [
	{c:'#CEF19E',data:[500, 100, 100, 100]},
	{c:'#A7DDA7',data:[250, 100, 100, 100]},
	{c:'#78BE97',data:[500, 500, 100, 100]},
	{c:'#398689',data:[700, 600, 100, 100]},
	{c:'#0B476D',data:[800, 100, 100, 100]}
]



rects.forEach(r=>{
	c.fillRect(...r.data);
})

canvas.addEventListener("mousemove",(evt)=>{
	// clear the canvas
	c.clearRect(200,0,cw,ch);
	mouse = oMousePos(canvas, evt);
	//for each rect in the rects array
	rects.forEach((r,i)=>{
	c.beginPath();
	// draw the rect
	c.rect(...r.data);
	// if thr mouse is inside the rect
	if(c.isPointInPath(mouse.x,mouse.y)){
	// fill the rect with the color in the rects array 
	c.fillStyle = r.c;//color
	
	// fill the rect
	c.beginPath();
	c.fillRect(...r.data);
	}else{
	
	// if the mouse is not in the rects array let it be white
	c.fillStyle = "white";
	c.fillRect(...r.data); 
	}
	})
})

// a function to detect the mouse position on the canvas
function oMousePos(canvas, evt) {
	var ClientRect = canvas.getBoundingClientRect();
	return { //objeto
	x: Math.round(evt.clientX - ClientRect.left),
	y: Math.round(evt.clientY - ClientRect.top)
}
}
*******************************************************************************************/

class Circle {
  constructor() {
    // Canvas
    this.panCanvas = document.getElementById('canvas');
    this.panCanvas.style.position = 'absolute';
    this.ctx = this.panCanvas.getContext('2d');
    this.panCanvas.width = window.innerWidth;
    this.panCanvas.height = window.innerHeight;

    // Pan Default Offset
    this.cameraOffset = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    this.negativeCamera = {
      x: -window.innerWidth / 2,
      y: -window.innerHeight / 2
    };
    this.zeroCamera = {
      x: 0,
      y: 0
    };

    // Zoom
    this.cameraZoom = 1;
    this.maxZoom = 5;
    this.minZoom = 0.1;
    this.scrollSensitivity = 0.000 * 3.55;
    this.fps = 25;
    this.initialPinchDistance = null;
    this.lastZoom = this.cameraZoom;

    // Drag
    this.isDragging = false;
    this.speedDrag = 0.2;
    this.dragStart = {
      x: 0,
      y: 0
    };
    this.currentX = 0;
    this.currentY = 0;

    // Wave
    this.radious = Math.PI / 180;
    this.amplitude = 10;
    this.frequency = 0.02;
    this.speed = 0.045;
    this.phi = 0;
    this.frames = 0;
    this.stopped = true;

    // Constellation
    this.scaleSize = 3.5;
    this.fillColor = 'rgba(255, 255, 255, 1)';

    // "Stars" Inside Constellation
    this.starColor = 'rgba(255, 255, 255, 0.4)';
    this.fixedRadius = 2;
    this.minMaxRadius = {
      minRadius: 1,
      maxRadius: 2.5
    };
    this.radiusChange = 0.15;
    this.redStarColor = 'rgba(255, 194, 184, 1)';
    this.shadowBlur = 1;
  }
  circle() {
    const cssBpundries = new Path2D();
    let relatePosition = {
      x: window.innerWidth / 2,
      y: this.cameraOffset.y / 2
    };
    const linePosition = [{
      x: 0.000,
      y: 19.232
    }, {
      x: 9.635,
      y: 23.250
    }, {
      x: 20.800,
      y: 19.232
    }, {
      x: 24.000,
      y: 0.750
    }, {
      x: 3.630,
      y: 0.750
    }, {
      x: 2.815,
      y: 4.868
    }, {
      x: 0.000,
      y: 19.142
    }];
    // this.ctx.beginPath();
    cssBpundries.moveTo(relatePosition.x + linePosition[0].x * this.scaleSize, relatePosition.y + linePosition[0].y * this.scaleSize);
    for (let i = 1; i < linePosition.length; i++) {
      cssBpundries.lineTo(relatePosition.x + linePosition[i].x * this.scaleSize, relatePosition.y + linePosition[i].y * this.scaleSize);
    }
    this.ctx.lineWidth = 1;
    this.ctx.fillStyle = 'white';
    cssBpundries.closePath();
    this.ctx.fill(cssBpundries);
    this.ctx.stroke();
    // console.log(cssBpundries);

    // Listen for mouse moves
    this.panCanvas.addEventListener("mousemove", event => {
      // Check whether point is inside circle
      const isPointInPath = this.ctx.isPointInPath(cssBpundries, event.offsetX, event.offsetY);
      this.ctx.fillStyle = isPointInPath ? "green" : "red";

      // Draw circle
      this.ctx.fill(cssBpundries);
    });
  }
}
;

/******/ })()
;
//# sourceMappingURL=sample.js.map