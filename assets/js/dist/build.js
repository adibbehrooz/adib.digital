/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/src/canvas.js":
/*!*********************************!*\
  !*** ./assets/js/src/canvas.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* binding */ Canvas),
/* harmony export */   Cursor: () => (/* binding */ Cursor)
/* harmony export */ });
/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Canvas ********************************
/************************************************************************/

class Canvas {
  //____________________________
  //
  // Constructor
  //____________________________

  constructor() {
    // Silence is Golden	
  }
  //____________________________
  //
  // RUN
  //____________________________	

  init() {
    this.bodyStyles();
    this.allCanvas();
  }
  //____________________________
  //
  // Define Body Styles
  //____________________________

  bodyStyles() {
    let bodyStyle = {
      'background': 'linear-gradient(#16161d,#1f1f3a,#3b2f4a)',
      'background-repeat': 'no-repeat',
      'min-height': '100vh',
      'overflow': 'hidden',
      'cursor': 'none'
    };
    let cssBodyResult = "";
    Object.keys(bodyStyle).forEach(function (prop, index) {
      cssBodyResult += prop + ": " + bodyStyle[prop] + "; ";
    });
    document.body.style = cssBodyResult;
  }
  //____________________________
  //
  // Create Section
  //____________________________

  createSection() {
    const middleSection = document.createElement("section");
    middleSection.setAttribute('class', 'o-canvas');
    middleSection.setAttribute('id', 'middle');
    middleSection.setAttribute('data', "renderType: 'canvas'");
    document.body.appendChild(middleSection);
    return middleSection;
  }
  allCanvas() {
    const middleSection = this.createSection();
    middleSection.appendChild(this.panCanvas());
    middleSection.appendChild(this.skyCanvas());
    middleSection.appendChild(this.constellationCanvas());
  }
  skyCanvas() {
    const canvasSky = document.createElement("canvas");
    canvasSky.setAttribute('class', 'o-canvas__sky');
    canvasSky.setAttribute('id', 'canvas__sky');
    canvasSky.width = window.innerWidth;
    canvasSky.height = window.innerHeight;
    return canvasSky;
  }
  panCanvas() {
    const canvasPan = document.createElement("canvas");
    canvasPan.setAttribute('class', 'o-canvas__pan');
    canvasPan.setAttribute('id', 'canvas__pan');
    return canvasPan;
  }
  constellationCanvas() {
    const canvasConstellation = document.createElement("canvas");
    canvasConstellation.setAttribute('class', 'o-canvas__constellation');
    canvasConstellation.setAttribute('id', 'canvas__constellation');
    return canvasConstellation;
  }
}
;


/******************************** Cursor ********************************
/************************************************************************/

class Cursor {
  //____________________________
  //
  // Constructor
  //____________________________

  constructor() {
    this.radius = 50;
    this.circleLength = 2 * Math.PI * this.radius;
    this.angle = 2 * this.angleRad * 180 / Math.PI / 7;
  }
  //____________________________
  //
  // RUN
  //____________________________

  init() {
    this.cursorModules();
    this.curveText();
    this.animateMoveCursor();
    this.fadeLetters(0.002);
  }
  //____________________________
  //
  // Modules
  //____________________________

  cursorModules() {
    const circleCursor = () => {
      const cLandscapeFrame = document.getElementById('middle');
      const circleDiv = document.createElement("div");
      circleDiv.setAttribute('class', 'o-centerCircle');
      circleDiv.setAttribute('id', 'centerCircle');
      cLandscapeFrame.parentNode.insertBefore(circleDiv, cLandscapeFrame);
    };
    const followDiv = () => {
      const cLandscapeFrame = document.getElementById('middle');
      const followDiv = document.createElement("div");
      followDiv.setAttribute('class', 'o-followCircle');
      followDiv.setAttribute('id', 'followCircle');
      const textDiv = document.createElement("div");
      textDiv.setAttribute('class', 'o-followText');
      textDiv.setAttribute('id', 'followText');
      followDiv.appendChild(textDiv);
      // textDiv.innerHTML += 'DRAG ME'; 

      cLandscapeFrame.parentNode.insertBefore(followDiv, cLandscapeFrame);
    };
    const allmodules = () => {
      circleCursor();
      followDiv();
    };
    allmodules();
  }
  //____________________________
  //
  // Curve Text
  //____________________________

  curveText() {
    this.curvedText = document.getElementById('followText');
    let text = this.curvedText.innerText;
    let html = "";
    for (let i = 0; i < text.length; i++) {
      html += `<span>${text[i]}</span>`;
    }
    this.curvedText.innerHTML = html;
    this.curvedText.style.minWidth = "initial";
    this.curvedText.style.minHeight = "initial";
    let curveWidth = this.curvedText.offsetWidth;
    let curveHeight = this.curvedText.offsetHeight;
    let spanLetters = this.curvedText.innerHTML;
    let letters = this.curvedText.querySelectorAll("span");
    let lettersStyle = {
      'position': 'absolute',
      'transform-origin': 'bottom center',
      'height': this.radius + 'px'
    };
    let cssResult = "";
    Object.keys(lettersStyle).forEach(function (prop, index) {
      cssResult += prop + ": " + lettersStyle[prop] + "; ";
    });
    const curveSpanLetters = () => {
      letters.forEach((spanLetters, index) => {
        spanLetters.style = cssResult;
        // 1. Default
        // spanLetters.style.transform = "translate("+(curveWidth / 2)+"px, 0px) rotate("+index * curveWidth+"deg)";

        // 2. Optimize
        switch (index) {
          // D
          case 0:
            spanLetters.style.top = "-20px";
            spanLetters.style.left = "4px";
            spanLetters.style.transform = "translate(11px, 0px) rotate(325deg)";
            break;

          // R
          case 1:
            spanLetters.style.top = "-18px";
            spanLetters.style.left = "0px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(3deg)";
            break;

          // A
          case 2:
            spanLetters.style.height = "47px";
            spanLetters.style.top = "-24px";
            spanLetters.style.left = "-8px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(47deg)";
            break;

          // G
          case 3:
            spanLetters.style.top = "-22px";
            spanLetters.style.left = "-10px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(71deg)";
            break;

          // Space
          case 4:
            spanLetters.style.top = "-24px";
            spanLetters.style.left = "-8px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(100deg)";
            break;

          // M
          case 5:
            spanLetters.style.bottom = "29px";
            spanLetters.style.left = "3px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(186deg)";
            break;

          // E
          case 6:
            spanLetters.style.bottom = "25px";
            spanLetters.style.left = "11px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(220deg)";
            break;
        }
        ;
      });
    };
    curveSpanLetters();
  }
  //____________________________
  //
  // Fade Letters
  //____________________________

  fadeLetters(speedFade) {
    const fade = () => {
      const followTextSelector = document.querySelector("#followText");
      let opacity = followTextSelector.style.opacity;
      if (!opacity) opacity = 1;
      if (opacity > 0) {
        opacity -= speedFade;
        followTextSelector.style.opacity = opacity;
      }
      requestAnimationFrame(fade);
    };
    fade();
  }

  //____________________________
  //
  // Animate Cursor With GSAP
  //____________________________

  animateMoveCursor() {
    gsap.set(".o-followCircle", {
      xPercent: -50,
      yPercent: -50
    });
    const ball = document.querySelector(".o-followCircle");
    const pos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    const mouse = {
      x: pos.x,
      y: pos.y
    };
    const speed = 0.2;
    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");
    window.addEventListener("mousemove", mouseEvent => {
      mouse.x = mouseEvent.x;
      mouse.y = mouseEvent.y;
    });
    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }
}
;


/***/ }),

/***/ "./assets/js/src/config.js":
/*!*********************************!*\
  !*** ./assets/js/src/config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./assets/js/src/canvas.js");
/* harmony import */ var _pan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pan */ "./assets/js/src/pan.js");
/* harmony import */ var _sky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sky */ "./assets/js/src/sky.js");
/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Library Configuration ********************************
/***************************************************************************************/

// Canvas
//______________


const canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas();
canvas.init();

// Cursor
//______________


const cursor = new _canvas__WEBPACK_IMPORTED_MODULE_0__.Cursor();
cursor.init();

// Pan
//______________


const pan = new _pan__WEBPACK_IMPORTED_MODULE_1__.Pan();
pan.init();

// Night Sky
//______________


const nightSky = new _sky__WEBPACK_IMPORTED_MODULE_2__.Sky();
nightSky.init();

//______________
//	
//	UNPAN
//______________

// import { UNPANS } from './unpan';
// const unpans = new UNPANS();
// unpans.init();

/***/ }),

/***/ "./assets/js/src/pan.js":
/*!******************************!*\
  !*** ./assets/js/src/pan.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pan: () => (/* binding */ Pan)
/* harmony export */ });
/* harmony import */ var _positions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positions */ "./assets/js/src/positions.js");
/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** SKY ********************************
/*********************************************************************/


class Pan {
  //____________________________
  //
  // Constructor 
  //____________________________

  constructor() {
    // Canvas
    this.panCanvas = document.getElementById('canvas__pan');
    this.panCanvas.style.position = 'absolute';
    this.ctx = this.panCanvas.getContext('2d');
    this.panCanvas.width = window.innerWidth;
    this.panCanvas.height = window.innerHeight;

    // Pan Default Offset
    this.offsetX = this.panCanvas.offsetLeft;
    this.offsetY = this.panCanvas.offsetTop;
    this.cameraOffset = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    this.initialPinchDistance = null;

    // Drag
    this.isDragging = false;
    this.srpeedDrag = 0.2;
    this.dragStart = {
      x: 0,
      y: 0
    };
    this.currentX = 0;
    this.currentY = 0;

    //Zoom
    this.cameraZoom = 1.1;
    this.maxZoom = 5;
    this.minZoom = 0.1;
    this.scrollSensitivity = 0.000 * 3.55;

    // Wave
    this.radious = Math.PI / 180;
    this.amplitude = 10;
    this.frequency = 0.02;
    this.srpeed = 0.045;
    this.phi = 0;
    this.frames = 0;
    this.stopped = true;
    this.fps = 25;

    // Constellation
    this.scaleSize = 4;
    this.fillColor = 'rgba(255, 255, 255, 1)';

    // "Stars" Inside Constellation
    this.starColor = 'rgba(255, 255, 255, 0.4)';
    this.fixedRadius = 2;
    this.minMaxRadius = {
      minRadius: 1,
      maxRadius: 2.7
    };
    this.radiusChange = 0.15;
    this.redStarColor = 'rgba(255, 194, 184, 1)';
    this.shadowBlur = 0;
    this.srp = this.position();

    // Shape Line Types
    this.lineTypes = ['curve', 'inside', 'arc'];
  }
  //_______________________________
  //
  // RUN! 
  //_______________________________

  init() {
    this._eventListeners();
    this.draw();
  }
  draw() {
    const animate = () => {
      requestAnimationFrame(animate);
      this.initDraw();
      this.waves();
      this.shapes();
    };
    animate();
    // setInterval( animate, 200 / this.fps);
  }

  //____________________________
  //
  // Draw 
  //____________________________

  initDraw() {
    this.panCanvas.width = window.innerWidth;
    this.panCanvas.height = window.innerHeight;
    this.ctx.scale(this.cameraZoom, this.cameraZoom);
    this.ctx.translate(window.innerWidth, window.innerHeight); // Full Pan	

    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.restore();
    this.ctx.clearRect(0, 0, this.panCanvas.width, this.panCanvas.height);
  }
  /************************* WAVES *************************
  /*********************************************************/

  waves() {
    this.ctx.translate(-window.innerWidth, -window.innerHeight);
    this.staticWaves();
    this.dynamicWaves();
  }
  // Static Waves
  staticWaves() {
    for (let m = 0; m < 2; m++) {
      // Draw Lines
      this.ctx.beginPath();
      this.ctx.moveTo(-window.innerWidth, this.cameraOffset.y / 2 * 2.5 + m * 10);
      this.ctx.lineTo(window.innerWidth, this.cameraOffset.y / 2 * 2.5 + m * 10);

      // Width
      this.ctx.lineWidth = 1;

      // Gradient Line
      let gradient = this.ctx.createLinearGradient(0, 0, this.panCanvas.width, 0);
      gradient.addColorStop(0, "rgba(23, 210, 168, 0.2)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1, "rgba(23, 210, 168, 0.2)");
      this.ctx.strokeStyle = gradient;
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = "#392E49";
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = -10;
      this.ctx.shadowBlur = 55;
      this.ctx.shadowColor = "rgba(255, 255, 255, 1)";
      this.ctx.stroke();
    }
    ;
  }
  // Dynamic Waves
  dynamicWaves() {
    let k = 5,
      opacity = [0, 0];
    for (let m = 0; m < 13; m++) {
      if (m >= 0 && m < 7) k += 1.1;else k += 0.8;
      let firstOpacity = opacity[0] += 0.015;
      let secondOpacity = opacity[1] += 0.038;
      this.frames++;
      this.phi = this.frames / 50;
      this.ctx.beginPath();
      this.ctx.moveTo(-window.innerWidth, this.cameraOffset.y / 2 * 2.5 + m * k);

      // Sin Wave	
      for (let x = -window.innerWidth; x < window.innerWidth; x++) {
        let y = Math.sin(x * this.frequency + this.phi) * this.amplitude / 8 + this.amplitude / 12;
        this.ctx.lineTo(x, this.cameraOffset.y / 2 * 2.5 + y + m * k);
      }
      // 1. Width
      this.ctx.lineWidth = 1;

      // 2. Gradient Line
      let gradient = this.ctx.createLinearGradient(0, 0, this.panCanvas.width, 0);
      gradient.addColorStop(0, "rgba(23, 210, 168, " + firstOpacity + ")");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, " + secondOpacity + ")");
      gradient.addColorStop(1, "rgba(23, 210, 168, " + firstOpacity + ")");
      this.ctx.strokeStyle = gradient;

      // 3. Shadow Line
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
      this.ctx.shadowBlur = 0;
      this.ctx.stroke();
    }
    ;
  }
  /************************* SHAPES ************************
  /*********************************************************/

  position() {
    const position = {
      css: {
        relation: {
          x: window.innerWidth / 2,
          y: this.cameraOffset.y / 1.72
        }
      },
      webpack: {
        relation: {
          x: window.innerWidth / 1.1 - window.innerWidth / 2,
          y: this.cameraOffset.y - window.innerHeight / 2.02
        }
      },
      svg: {
        relation: {
          x: window.innerWidth / 1.076 - window.innerWidth / 2,
          y: this.cameraOffset.y - window.innerHeight / 2.94
        }
      },
      framework: {
        relation: {
          x: window.innerWidth / 1.5 - window.innerWidth / 2,
          y: this.cameraOffset.y - window.innerHeight / 3
        }
      },
      javascript: {
        relation: {
          x: window.innerWidth / 1.8 - window.innerWidth / 2,
          y: this.cameraOffset.y - window.innerHeight / 3
        }
      }
    };
    return position;
  }
  shapes() {
    // Translate Shapes
    this.ctx.translate(-(window.innerWidth / 2) + this.cameraOffset.x, -(window.innerHeight / 2) + this.cameraOffset.y);

    // Loop for Draw Shapes
    for (let key of Object.keys(this.srp)) {
      this.shapeLines(key); // 1. Draw Lines
      this.shapeStars(key); // 2. Draw Stars
    }
  }

  shapeLines(shapeName) {
    // I. Start
    this.ctx.beginPath();

    // II. Line Types Loop
    this.lineTypes.forEach(lineType => {
      if (lineType == 'curve') {
        this.curveLines(shapeName);
      } else if (lineType == 'arc') {
        this.shapeStars(shapeName);
      } else {
        this.straightlines(shapeName, lineType);
      }
    });
  }
  curveLines(shapeName) {
    let context = this.ctx;
    _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName].curve(context);
  }
  straightlines(shapeName, lineType) {
    // Move to Initial Point to Draw Shape 
    this.ctx.moveTo(_positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][0]['x'], _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][0]['y']);

    // Draw Lines
    for (let i = 1; i < _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType].length; i++) {
      let form = _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['form'];
      switch (form) {
        case 'scale':
          this.ctx.scale(_positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x'], _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['y']);
          break;
        case 'move':
          this.ctx.moveTo(this.srp[shapeName]['relation']['x'] + _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x'], this.srp[shapeName]['relation']['y'] + _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['y']);
          break;
        case "transform":
          this.ctx.translate(_positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x'], _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['y']);
          break;
        case 'close':
          this.ctx.closePath();
          break;
        case 'begin':
          this.ctx.beginPath();
          break;
        case 'restore':
          this.ctx.restore();
          break;
        case 'save':
          this.ctx.save();
          break;
        case 'stroke':
          this.ctx.stroke();
          break;
        case 'strokeStyle':
          this.ctx.strokeStyle = _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['color'];
          break;
        case 'fillStyle':
          this.ctx.fillStyle = _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['color'];
          break;
        case 'curve':
          this.ctx.bezierCurveTo(_positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x1'], _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x2'], _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x3'], _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x4'], _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x5'], _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x6']);
          break;
        default:
          this.ctx.lineTo(this.srp[shapeName]['relation']['x'] + _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x'], this.srp[shapeName]['relation']['y'] + _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['y']);
      }
      ; // [END] Switch
    }
    ; // [END] For
  }

  shapeStars(shapeName) {
    let lineType = 'arc';
    // 1. Start
    let randomRadius = Math.random() * (this.minMaxRadius.maxRadius - this.minMaxRadius.minRadius) + this.minMaxRadius.minRadius;

    // 2. Update
    const update = () => {
      for (let i = 0; i < _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType].length; i++) {
        if (randomRadius > 2.2 || randomRadius < 1) {
          this.radiusChange = -this.radiusChange;
        }
        randomRadius += this.radiusChange;
      }
    };

    // 3. Render Stars
    const render = () => {
      for (let i = 0; i < _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType].length; i++) {
        this.ctx.beginPath();
        this.ctx.arc(this.srp[shapeName]['relation']['x'] + _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x'] * this.scaleSize, this.srp[shapeName]['relation']['y'] + _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['y'] * this.scaleSize, randomRadius, 0, 2 * Math.PI, false);
        this.ctx.shadowBlur = this.shadowBlur;
        this.ctx.shadowColor = this.starColor;
        this.ctx.fillStyle = this.redStarColor;
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        update();
      }
    };
    render();
  }
  shapeEvent(cursor, shapeName, offsetX, offsetY) {
    let lineType = 'arc';
    // 1. Draw Shape
    const shape = new Path2D();
    this.ctx.beginPath();
    shape.moveTo(this.srp[shapeName]['relation']['x'] + _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][0]['x'] * this.scaleSize, this.srp[shapeName]['relation']['y'] + _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][0]['y'] * this.scaleSize);
    for (let i = 1; i < _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType].length; i++) {
      shape.lineTo(this.srp[shapeName]['relation']['x'] + _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['x'] * this.scaleSize, this.srp[shapeName]['relation']['y'] + _positions__WEBPACK_IMPORTED_MODULE_0__.positions[shapeName][lineType][i]['y'] * this.scaleSize);
    }
    if (this.ctx.isPointInPath(shape, offsetX, offsetY)) {
      // Stroke
      this.ctx.lineWidth = 0.1;
      this.ctx.strokeStyle = 'rgba(255, 255, 255,  0)';

      // Fill
      this.ctx.fillStyle = 'rgba(255, 255, 255,  0)'; // console.log(" TRUE "+" Shape Name :"+shapeName); 

      // Cursor GSAP
      gsap.to(cursor, 0.1, {
        opacity: 0.7,
        scale: 3
      });
    } else {
      // Stroke
      this.ctx.lineWidth = 0.1;
      this.ctx.strokeStyle = 'rgba(255, 255, 255,  0)';

      // Fill
      this.ctx.fillStyle = 'rgba(255, 255, 255,  0)'; // console.log(" FALSE "+" Shape Name :"+shapeName); 
    }

    // 2. Features
    this.ctx.fill(shape);
    this.ctx.closePath();
  }
  //____________________________
  //
  // Responsive 
  //____________________________

  _resize() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    this.panCanvas.width = windowWidth;
    this.panCanvas.height = windowHeight;
  }
  //____________________________
  //
  // Events 
  //____________________________	

  geteLocation(event) {
    if (event.touches && event.touches.length == 1) {
      return {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      };
    } else if (event.clientX && event.clientY) {
      return {
        x: event.clientX,
        y: event.clientY
      };
    }
  }
  // Pointer: DOWN ↓↓↓↓
  onPointerDown(event) {
    this.isDragging = true;
    this.dragStart.x = event.clientX - this.cameraOffset.x;
    this.dragStart.y = event.clientY - this.cameraOffset.y;
  }
  // Pointer: UP ↑↑↑↑
  onPointerUp() {
    this.isDragging = false;
  }
  // Pointer: OUT →→→→→
  onPointerMoveOut() {
    this.isDragging = false;
  }
  // Pointer: MOVE ⇆⇆⇆⇆⇆⇆
  onPointerMove(event) {
    if (this.isDragging) {
      this.cameraOffset.x = event.clientX - this.dragStart.x;
      this.cameraOffset.y = event.clientY - this.dragStart.y;
    }

    // Cursor
    const followCircle = document.getElementById('followCircle');
    gsap.to(followCircle, 0.1, {
      opacity: 1,
      scale: 1
    });

    // Offset
    let xPosition = parseInt(event.clientX - this.offsetX);
    let yPosition = parseInt(event.clientY - this.offsetY);

    // Shape Event Loop
    for (let key of Object.keys(this.srp)) {
      this.shapeEvent(followCircle, key, xPosition, yPosition);
    }
  }
  handleTouch(event, singleTouchHandler) {
    if (event.touches.length == 1) {
      singleTouchHandler(event);
    } else if (event.type == "touchmove" && event.touches.length == 2) {
      this.isDragging = false;
      this.handlePinch(event);
    }
  }
  handlePinch(event) {
    event.preDefault();
    event.stopPropagation();
    let touch1 = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    };
    let touch2 = {
      x: event.touches[1].clientX,
      y: event.touches[1].clientY
    };

    // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
    let currentDistance = (touch1.x - touch2.x) ** 2 + (touch1.y - touch2.y) ** 2;
    if (this.initialPinchDistance == null) {
      this.initialPinchDistance = currentDistance;
    } else {
      this.adjustZoom(null, currentDistance / this.initialPinchDistance);
    }
  }
  adjustZoom(zoomAmount, zoomFactor) {
    if (!this.isDragging) {
      if (zoomAmount) {
        this.cameraZoom += zoomAmount;
      } else if (zoomFactor) {
        // console.log(zoomFactor);
        this.cameraZoom = zoomFactor * this.lastZoom;
      }
      this.cameraZoom = Math.min(this.cameraZoom, this.maxZoom);
      this.cameraZoom = Math.max(this.cameraZoom, this.minZoom);
      // console.log(zoomAmount)
    }
  }

  //____________________________
  //
  // Event Listeners
  //____________________________	

  _eventListeners() {
    // 1. Resize
    //_____________________________________

    this._resize();
    window.addEventListener("resize", () => {
      this._resize();
    });

    // 2. Mouse
    //_____________________________________

    // 2.1 Mouse For "Canvas Pan"
    this.panCanvas.addEventListener("mousedown", event => {
      this.onPointerDown(event);
    });
    this.panCanvas.addEventListener("mouseup", () => {
      this.onPointerUp();
    });
    this.panCanvas.addEventListener("mouseout", () => {
      this.onPointerMoveOut();
    });
    this.panCanvas.addEventListener("mousemove", event => {
      this.onPointerMove(event);
    });

    // 3. Touch
    //_____________________________________

    this.panCanvas.addEventListener("touchstart", event => {
      this.handleTouch(event, this.onPointerDown(event));
    });
    this.panCanvas.addEventListener("touchend", event => {
      this.handleTouch(event, this.onPointerUp());
    });
    this.panCanvas.addEventListener("touchmove", event => {
      this.handleTouch(event, this.onPointerMove(event));
    });

    // 4. Wheel
    //_____________________________________

    this.panCanvas.addEventListener("wheel", event => {
      this.adjustZoom(event.deltaY * this.scrollSensitivity);
    });
  }
}
;


/***/ }),

/***/ "./assets/js/src/positions.js":
/*!************************************!*\
  !*** ./assets/js/src/positions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   positions: () => (/* binding */ positions)
/* harmony export */ });
const positions = {
  cameraOffset: {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  },
  scaleSize: {
    x: 4,
    y: 4
  },
  //____________________ CSS ____________________

  css: {
    curve: function (ctx) {
      ctx.save();
      ctx.strokeStyle = "rgba( 255, 255, 255, 0.3)";
      ctx.miterLimit = 4;
      ctx.scale(0.04, 0.04);
      ctx.translate(154.0943480195815, 0);
      ctx.scale(14.325945705384959, 14.325945705384959);
      ctx.translate(-14, 0);
      ctx.translate(window.innerWidth / .737 - window.innerWidth / 2, window.innerHeight / 1.234 - window.innerHeight / 3);
      ctx.save();
      ctx.save();
      ctx.moveTo(174.7, 45.2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.09)";
      ctx.bezierCurveTo(174.29999999999998, 47.6, 171.7, 76, 168.89999999999998, 108.5);
      ctx.bezierCurveTo(165.99999999999997, 140.9, 163.59999999999997, 167.7, 163.39999999999998, 167.9);
      ctx.bezierCurveTo(162.99999999999997, 168.4, 113.89999999999998, 182, 112.49999999999997, 182);
      ctx.bezierCurveTo(111.49999999999997, 182, 84.69999999999997, 174.7, 66.39999999999998, 169.5);
      ctx.lineTo(61.299999999999976, 168);
      ctx.lineTo(60.09999999999997, 154.8);
      ctx.bezierCurveTo(59.49999999999997, 147.5, 58.699999999999974, 138.70000000000002, 58.299999999999976, 135.20000000000002);
      ctx.lineTo(57.699999999999974, 129.00000000000003);
      ctx.lineTo(70.19999999999997, 129.00000000000003);
      ctx.bezierCurveTo(84.29999999999997, 129.00000000000003, 83.89999999999998, 128.80000000000004, 83.99999999999997, 137.50000000000003);
      ctx.bezierCurveTo(83.99999999999997, 139.70000000000002, 84.29999999999997, 143.10000000000002, 84.59999999999997, 145.10000000000002);
      ctx.lineTo(85.19999999999996, 148.70000000000002);
      ctx.lineTo(98.89999999999996, 152.3);
      ctx.lineTo(112.49999999999996, 155.9);
      ctx.lineTo(125.99999999999996, 152.3);
      ctx.bezierCurveTo(133.39999999999995, 150.3, 139.59999999999997, 148.60000000000002, 139.59999999999997, 148.60000000000002);
      ctx.bezierCurveTo(139.69999999999996, 148.50000000000003, 140.29999999999995, 142.60000000000002, 140.89999999999998, 135.50000000000003);
      ctx.bezierCurveTo(141.49999999999997, 128.30000000000004, 142.2, 121.30000000000003, 142.49999999999997, 119.70000000000003);
      ctx.lineTo(142.99999999999997, 117.00000000000003);
      ctx.lineTo(57.2, 117.00000000000003);
      ctx.lineTo(56.7, 114.70000000000003);
      ctx.bezierCurveTo(56.400000000000006, 113.50000000000003, 55.800000000000004, 107.70000000000003, 55.400000000000006, 101.70000000000003);
      ctx.lineTo(54.7, 91);
      ctx.lineTo(144.8, 91);
      ctx.lineTo(145.4, 84.2);
      ctx.bezierCurveTo(145.8, 80.5, 146.4, 74.8, 146.70000000000002, 71.60000000000001);
      ctx.bezierCurveTo(147.10000000000002, 67.50000000000001, 147.00000000000003, 65.9, 146.20000000000002, 66.4);
      ctx.bezierCurveTo(145.60000000000002, 66.7, 124.30000000000001, 66.7, 98.70000000000002, 66.30000000000001);
      ctx.lineTo(52.20000000000002, 65.70000000000002);
      ctx.lineTo(51.600000000000016, 58.600000000000016);
      ctx.bezierCurveTo(51.20000000000002, 54.70000000000002, 50.70000000000002, 49.100000000000016, 50.40000000000001, 46.20000000000002);
      ctx.lineTo(49.80000000000001, 41.000000000000014);
      ctx.lineTo(175.20000000000002, 41.000000000000014);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    },
    inside: [{
      form: 'save'
    }, {
      form: 'begin'
    }, {
      x: 3.175,
      y: 2.750
    }, {
      x: 17.500,
      y: 2.750
    }, {
      x: 15.900,
      y: 17.900
    }, {
      x: 9.700,
      y: 20.700
    }, {
      x: 2.500,
      y: 17.500
    }, {
      x: 2.175,
      y: 10.750,
      form: 'move'
    }, {
      x: 17.075,
      y: 10.750
    }, {
      form: 'close'
    }, {
      size: '0.1',
      form: 'width'
    }, {
      color: 'rgba(255, 255, 255, 0)',
      form: 'strokeStyle'
    }, {
      form: 'stroke'
    }, {
      form: 'restore'
    }],
    arc: [{
      x: 3.175,
      y: 2.750
    }, {
      x: 10.175,
      y: 2.750
    }, {
      x: 17.500,
      y: 2.750
    }, {
      x: 15.900,
      y: 17.900
    }, {
      x: 9.990,
      y: 19.700
    }, {
      x: 4.100,
      y: 17.500
    }, {
      x: 3.175,
      y: 10.750
    }, {
      x: 10.175,
      y: 10.750
    }, {
      x: 17.075,
      y: 10.750
    }]
  },
  //____________________ WEBPACK ____________________

  webpack: {
    curve: function (ctx) {
      ctx.save();
      ctx.strokeStyle = "rgba( 255, 255, 255, 0.5)";
      ctx.fillStyle = "rgba(255, 255, 255, .05)";
      ctx.miterLimit = 4;
      ctx.scale(0.1007936507936508, 0.1007936507936508);
      ctx.scale(36, 36);
      ctx.translate(window.innerWidth / 1.63 - window.innerWidth / 2, window.innerHeight / 2 - window.innerHeight / 2.01);
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 0.036011;
      ctx.beginPath();
      ctx.moveTo(24.765896, 21.456033);
      ctx.lineTo(13.778953000000001, 27.671524);
      ctx.lineTo(13.778953000000001, 22.831661);
      ctx.lineTo(20.624636000000002, 19.064907);
      ctx.closePath();
      ctx.moveTo(25.518523000000002, 20.775432000000002);
      ctx.lineTo(25.518523000000002, 7.7790779);
      ctx.lineTo(21.499695000000003, 10.101786);
      ctx.lineTo(21.499695000000003, 18.456328);
      ctx.closePath();
      ctx.moveTo(1.8269196, 21.456033);
      ctx.lineTo(12.81386, 27.671524);
      ctx.lineTo(12.81386, 22.831661);
      ctx.lineTo(5.9645745, 19.064907);
      ctx.closePath();
      ctx.moveTo(1.0742942, 20.775432);
      ctx.lineTo(1.0742942, 7.7790779);
      ctx.lineTo(5.0931101, 10.101786);
      ctx.lineTo(5.0931101, 18.456328);
      ctx.closePath();
      ctx.moveTo(1.5460332, 6.9364181);
      ctx.lineTo(12.81386, 0.56248086);
      ctx.lineTo(12.81386, 5.2403071);
      ctx.lineTo(5.5936619, 9.212315);
      ctx.lineTo(5.5360347, 9.2446886);
      ctx.closePath();
      ctx.moveTo(25.046772, 6.9364181);
      ctx.lineTo(13.778953, 0.56248086);
      ctx.lineTo(13.778953, 5.2403071);
      ctx.lineTo(20.999144, 9.2087097);
      ctx.lineTo(21.056784, 9.2410837);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 0.036011;
      ctx.beginPath();
      ctx.moveTo(12.81386, 21.729723);
      ctx.lineTo(6.058206, 18.013396);
      ctx.lineTo(6.058206, 10.65636);
      ctx.lineTo(12.81386, 14.556344);
      ctx.closePath();
      ctx.moveTo(13.778953, 21.729723);
      ctx.lineTo(20.534603, 18.016993);
      ctx.lineTo(20.534603, 10.65636);
      ctx.lineTo(13.778953000000001, 14.556344);
      ctx.closePath();
      ctx.moveTo(13.296402, 14.275452);
      ctx.closePath();
      ctx.moveTo(6.5155469, 9.8064974);
      ctx.lineTo(13.296402, 6.0793616);
      ctx.lineTo(20.077273, 9.8064974);
      ctx.lineTo(13.296402, 13.720887);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.restore();
    },
    inside: [
    // { form: 'transform', x: window.innerWidth / 1 - window.innerWidth / 2, y: ( window.innerHeight / 1) - (window.innerHeight / 2.01)  },  
    {
      form: 'save'
    }, {
      form: 'begin'
    }, {
      x: 13.296402,
      y: 0.562480,
      form: 'move'
    }, {
      x: 13.296402,
      y: 5.590307
    }, {
      x: 5.5360347,
      y: 9.806497
    }, {
      x: 5.6360347,
      y: 18.51339
    }, {
      x: 13.296402,
      y: 22.63166
    }, {
      x: 20.934603,
      y: 18.61339
    }, {
      x: 20.934603,
      y: 9.806497
    }, {
      x: 13.296402,
      y: 5.590307
    }, {
      x: 5.5360347,
      y: 9.80649,
      form: 'move'
    }, {
      x: 1.3964020,
      y: 7.431660
    }, {
      x: 5.6360347,
      y: 18.51339,
      form: 'move'
    }, {
      x: 1.5460332,
      y: 21.12972
    }, {
      x: 13.296402,
      y: 22.63166,
      form: 'move'
    }, {
      x: 13.296402,
      y: 27.67152
    }, {
      x: 20.934603,
      y: 18.61339,
      form: 'move'
    }, {
      x: 25.046772,
      y: 20.83166
    }, {
      x: 20.934603,
      y: 9.806497,
      form: 'move'
    }, {
      x: 25.018523,
      y: 7.431660
    }, {
      x: 20.934603,
      y: 9.806497,
      form: 'move'
    }, {
      x: 13.296402,
      y: 14.10649
    }, {
      x: 5.5360347,
      y: 9.806497
    }, {
      x: 13.296402,
      y: 14.106497,
      form: 'move'
    }, {
      x: 13.296402,
      y: 22.63166
    }, {
      form: 'close'
    }, {
      size: '0.1',
      form: 'width'
    }, {
      color: 'rgba(255, 255, 255, 0)',
      form: 'strokeStyle'
    }, {
      form: 'stroke'
    }, {
      form: 'restore'
    }],
    arc: [{
      x: 13.296402,
      y: 0.562480
    }, {
      x: 13.296402,
      y: 5.590307
    }, {
      x: 5.5360347,
      y: 9.806497
    }, {
      x: 5.6360347,
      y: 18.51339
    }, {
      x: 13.296402,
      y: 22.63166
    }, {
      x: 20.934603,
      y: 18.61339
    }, {
      x: 20.934603,
      y: 9.806497
    }, {
      x: 13.296402,
      y: 5.590307
    }, {
      x: 5.5360347,
      y: 9.806490
    }, {
      x: 1.3964020,
      y: 7.431660
    }, {
      x: 5.6360347,
      y: 18.51339
    }, {
      x: 1.5460332,
      y: 21.12972
    }, {
      x: 13.296402,
      y: 22.63166
    }, {
      x: 13.296402,
      y: 27.67152
    }, {
      x: 20.934603,
      y: 18.61339
    }, {
      x: 25.046772,
      y: 20.83166
    }, {
      x: 20.934603,
      y: 9.806497
    }, {
      x: 25.018523,
      y: 7.431660
    }, {
      x: 20.934603,
      y: 9.806497
    }, {
      x: 13.296402,
      y: 14.10649
    }, {
      x: 5.5360347,
      y: 9.806497
    }, {
      x: 13.296402,
      y: 14.10649
    }, {
      x: 13.296402,
      y: 22.63166
    }]
  },
  //____________________ SVG ____________________

  svg: {
    curve: function (ctx) {
      ctx.save();
      ctx.strokeStyle = "rgba( 255, 255, 255, 0.5)";
      ctx.fillStyle = "rgba(255, 255, 255, .05)";
      ctx.miterLimit = 4;
      ctx.scale(0.43, 0.43);
      ctx.translate(window.innerWidth / 1.1 - window.innerWidth / 2, window.innerHeight / 2 - window.innerHeight / 3);
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(245.23538, 153.52383);
      ctx.bezierCurveTo(259.24687, 139.51234, 259.24642, 116.71301, 245.23493, 102.70107);
      ctx.bezierCurveTo(238.44777, 95.913465, 229.42287, 92.175775, 219.82377, 92.175775);
      ctx.bezierCurveTo(217.54456, 92.175775, 215.30051, 92.383549, 213.11189, 92.793239);
      ctx.bezierCurveTo(222.65014, 86.268845, 228.8311, 75.297803, 228.8311, 63.098591);
      ctx.bezierCurveTo(228.8311, 43.28293, 212.70986, 27.16169, 192.89419999999998, 27.16169);
      ctx.bezierCurveTo(180.67065, 27.16169, 169.68068, 33.367437, 163.16124, 42.93769);
      ctx.bezierCurveTo(165.31831, 31.560563000000002, 161.93487, 19.401014000000004, 153.29172, 10.757859000000003);
      ctx.bezierCurveTo(146.50456, 3.9702535000000037, 137.47966, 0.23211268000000373, 127.88056, 0.23211268000000373);
      ctx.bezierCurveTo(118.28146000000001, 0.23211268000000373, 109.25656000000001, 3.9702535000000037, 102.46941000000001, 10.757859000000003);
      ctx.bezierCurveTo(93.825803, 19.401014, 90.442817, 31.561014, 92.599887, 42.938141);
      ctx.bezierCurveTo(86.080451, 33.367887, 75.090028, 27.16169, 62.866479, 27.16169);
      ctx.bezierCurveTo(43.050816999999995, 27.16169, 26.929576999999995, 43.28293, 26.929576999999995, 63.098591);
      ctx.bezierCurveTo(26.929576999999995, 75.298254, 33.11008399999999, 86.268845, 42.648337999999995, 92.792789);
      ctx.bezierCurveTo(40.459717999999995, 92.383549, 38.216562999999994, 92.175775, 35.93690099999999, 92.175775);
      ctx.bezierCurveTo(26.337802999999994, 92.175775, 17.31335199999999, 95.913916, 10.525746999999992, 102.70152);
      ctx.bezierCurveTo(3.7381409, 109.48913, 0, 118.51403, 0, 128.11268);
      ctx.bezierCurveTo(0, 137.71177, 3.7381409, 146.73622, 10.525747, 153.52428);
      ctx.bezierCurveTo(17.313352000000002, 160.31144, 26.338253, 164.04958, 35.936901, 164.04958);
      ctx.bezierCurveTo(38.216113, 164.04958, 40.459268, 163.84179999999998, 42.648337999999995, 163.43211);
      ctx.bezierCurveTo(33.11008399999999, 169.95650999999998, 26.929576999999995, 180.92755, 26.929576999999995, 193.12676);
      ctx.bezierCurveTo(26.929576999999995, 212.94242, 43.050816999999995, 229.06321, 62.866479, 229.06321);
      ctx.bezierCurveTo(75.090028, 229.06321, 86.080901, 222.85746, 92.599887, 213.28721);
      ctx.bezierCurveTo(90.44281699999999, 224.66478999999998, 93.82625399999999, 236.82478999999998, 102.46941, 245.46794);
      ctx.bezierCurveTo(109.25701, 252.2551, 118.28191, 255.99324, 127.88056, 255.99324);
      ctx.bezierCurveTo(137.47966, 255.99324, 146.50456, 252.2551, 153.29172, 245.46749);
      ctx.bezierCurveTo(161.93487, 236.82434, 165.31786, 224.66389, 163.16079, 213.28676000000002);
      ctx.bezierCurveTo(169.68022, 222.85701, 180.67065, 229.06321000000003, 192.89419999999998, 229.06321000000003);
      ctx.bezierCurveTo(212.70986, 229.06321000000003, 228.8311, 212.94242000000003, 228.8311, 193.12676000000002);
      ctx.bezierCurveTo(228.8311, 180.92755000000002, 222.65014, 169.95651, 213.11234, 163.43211000000002);
      ctx.bezierCurveTo(215.30095999999998, 163.84180000000003, 217.54456, 164.04958000000002, 219.82377, 164.04958000000002);
      ctx.bezierCurveTo(229.42287, 164.04958000000002, 238.44777, 160.31144000000003, 245.23538, 153.52383000000003);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, .01)";
      ctx.beginPath();
      ctx.moveTo(234.39144, 113.53825);
      ctx.bezierCurveTo(226.34231, 105.48958, 213.29217, 105.48958, 205.24303999999998, 113.53825);
      ctx.lineTo(163.05892999999998, 113.53825);
      ctx.lineTo(192.88788999999997, 83.70974600000001);
      ctx.bezierCurveTo(204.27086999999997, 83.70974600000001, 213.49858999999998, 74.48202800000001, 213.49858999999998, 63.09859100000001);
      ctx.bezierCurveTo(213.49858999999998, 51.715606000000015, 204.27086999999997, 42.487437000000014, 192.88788999999997, 42.487437000000014);
      ctx.bezierCurveTo(181.50444999999996, 42.487437000000014, 172.27672999999996, 51.715606000000015, 172.27672999999996, 63.09859100000001);
      ctx.lineTo(142.44822, 92.927549);
      ctx.lineTo(142.44822, 50.743437);
      ctx.bezierCurveTo(150.49689999999998, 42.69431, 150.49689999999998, 29.644169, 142.44777, 21.595042);
      ctx.bezierCurveTo(134.39865, 13.545916, 121.34850999999999, 13.545916, 113.29937999999999, 21.595042);
      ctx.bezierCurveTo(105.25024999999998, 29.644168999999998, 105.25024999999998, 42.69431, 113.29937999999999, 50.743437);
      ctx.lineTo(113.29937999999999, 92.927549);
      ctx.lineTo(83.470873, 63.098591);
      ctx.bezierCurveTo(83.470873, 51.715606, 74.243155, 42.487437, 62.859718, 42.487437);
      ctx.bezierCurveTo(51.476732, 42.487437, 42.248563000000004, 51.715606, 42.248563000000004, 63.098591);
      ctx.bezierCurveTo(42.248563000000004, 74.482028, 51.476732000000005, 83.709746, 62.859718, 83.709746);
      ctx.lineTo(92.688225, 113.53825);
      ctx.lineTo(50.504563, 113.53825);
      ctx.bezierCurveTo(42.454986, 105.48913, 29.404844999999998, 105.48958, 21.355717999999996, 113.5387);
      ctx.bezierCurveTo(13.306591999999997, 121.58783000000001, 13.306591999999997, 134.63797, 21.355717999999996, 142.68710000000002);
      ctx.bezierCurveTo(29.404844999999995, 150.73622, 42.455436999999996, 150.73622, 50.504563, 142.68710000000002);
      ctx.lineTo(92.68822499999999, 142.68710000000002);
      ctx.lineTo(62.85971799999999, 172.51561);
      ctx.bezierCurveTo(51.476731999999984, 172.51561, 42.24856299999999, 181.74332, 42.24856299999999, 193.12676000000002);
      ctx.bezierCurveTo(42.24856299999999, 204.50975000000003, 51.47673199999999, 213.73791000000003, 62.85971799999999, 213.73791000000003);
      ctx.bezierCurveTo(74.24315499999999, 213.73791000000003, 83.47087299999998, 204.50975000000003, 83.47087299999998, 193.12676000000002);
      ctx.lineTo(113.29937999999999, 163.29825000000002);
      ctx.lineTo(113.29937999999999, 205.48191000000003);
      ctx.bezierCurveTo(105.25024999999998, 213.53104000000002, 105.25024999999998, 226.58163000000002, 113.29937999999999, 234.63076000000004);
      ctx.bezierCurveTo(121.34850999999999, 242.67989000000003, 134.39909999999998, 242.67989000000003, 142.44822, 234.63076000000004);
      ctx.bezierCurveTo(150.49689999999998, 226.58163000000005, 150.49689999999998, 213.53104000000005, 142.44822, 205.48191000000003);
      ctx.lineTo(142.44822, 163.29825000000002);
      ctx.lineTo(172.27673, 193.12676000000002);
      ctx.bezierCurveTo(172.27673, 204.50975000000003, 181.50445, 213.73791000000003, 192.88789, 213.73791000000003);
      ctx.bezierCurveTo(204.27087, 213.73791000000003, 213.49859, 204.50975000000003, 213.49859, 193.12676000000002);
      ctx.bezierCurveTo(213.49859, 181.74332, 204.27087, 172.51561, 192.88789, 172.51561);
      ctx.lineTo(163.05893, 142.6871);
      ctx.lineTo(205.24304, 142.6871);
      ctx.bezierCurveTo(213.29217, 150.73621999999997, 226.34231, 150.73621999999997, 234.39144000000002, 142.6871);
      ctx.bezierCurveTo(242.44056, 134.63797, 242.44056, 121.58737999999998, 234.39144000000002, 113.53824999999999);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.restore();
    },
    inside: [{
      form: 'save'
    }, {
      form: 'begin'
    }, {
      x: -130.23538,
      y: -9.52383,
      form: 'move'
    }, {
      x: -112.23538,
      y: -9.52383
    }, {
      x: -121.23538,
      y: -1.52383,
      form: 'move'
    }, {
      x: -121.23538,
      y: -18.52383
    }, {
      x: -115.23538,
      y: -15.52383,
      form: 'move'
    }, {
      x: -128.33538,
      y: -2.72383
    }, {
      x: -121.23538,
      y: -9.62383,
      form: 'move'
    }, {
      x: -127.83538,
      y: -15.82383
    }, {
      x: -121.23538,
      y: -9.62383,
      form: 'move'
    }, {
      x: -114.83538,
      y: -3.12383
    }, {
      form: 'close'
    }, {
      size: '.1',
      form: 'width'
    }, {
      color: 'rgba(255, 255, 255, 0)',
      form: 'strokeStyle'
    }, {
      form: 'stroke'
    }, {
      form: 'restore'
    }],
    arc: [{
      x: -130.23538,
      y: -9.52383
    }, {
      x: -112.23538,
      y: -9.52383
    }, {
      x: -121.23538,
      y: -1.52383
    }, {
      x: -121.23538,
      y: -18.5238
    }, {
      x: -115.23538,
      y: -15.5238
    }, {
      x: -128.33538,
      y: -2.72383
    }, {
      x: -121.23538,
      y: -9.62383
    }, {
      x: -127.83538,
      y: -15.8238
    }, {
      x: -121.23538,
      y: -9.62383
    }, {
      x: -114.83538,
      y: -3.12383
    }]
  },
  //____________________ Framework ____________________

  framework: {
    curve: function (ctx) {
      ctx.save();
      ctx.strokeStyle = "rgba( 255, 255, 255, 0.5)";
      ctx.miterLimit = 4;
      ctx.scale(0.53, 0.53);
      ctx.save();
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, .01)";
      ctx.translate(window.innerWidth / 0.9 - window.innerWidth / 2, window.innerHeight / 1.7 - window.innerHeight / 3);
      ctx.save();
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, .01)";
      ctx.beginPath();
      ctx.moveTo(168.461, 87.041);
      ctx.bezierCurveTo(154.945, 79.199, 142.947, 73.032, 127.251, 73.304);
      ctx.bezierCurveTo(118.271, 73.46, 110.561, 78.341, 108.94, 87.274);
      ctx.bezierCurveTo(107.431, 95.585, 114.819, 100.195, 122.505, 103.025);
      ctx.bezierCurveTo(135.252, 107.719, 146.349, 112.675, 158.874, 117.894);
      ctx.bezierCurveTo(181.643, 127.383, 193.318, 142.75, 191.938, 162.467);
      ctx.bezierCurveTo(190.182, 187.554, 175.084, 205.547, 151.089, 211.479);
      ctx.bezierCurveTo(119.735, 219.231, 89.288, 207.423, 63.563, 190.939);
      ctx.bezierCurveTo(70.056, 181.048, 77.589, 174.296, 84.043, 164.465);
      ctx.bezierCurveTo(98.905, 170.791, 110.581, 179.339, 126.129, 180.672);
      ctx.bezierCurveTo(137.092, 181.612, 149.514, 181.089, 151.977, 168.212);
      ctx.bezierCurveTo(154.197, 156.6, 144.091, 150.375, 134.234, 146.898);
      ctx.bezierCurveTo(122.499, 142.759, 110.786, 137.696, 99.278, 132.996);
      ctx.bezierCurveTo(78.005, 124.307, 69.349, 107.312, 70.806, 87.291);
      ctx.bezierCurveTo(70.806, 75.552, 80.546, 51.825, 104.427, 44.445);
      ctx.bezierCurveTo(141.119, 33.105, 161.335, 44.717, 187.942, 61.816);
      ctx.bezierCurveTo(180.875, 71.162, 175.442, 77.807, 168.461, 87.041);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    },
    inside: [{
      form: 'save'
    }, {
      form: 'begin'
    }, {
      x: -150.23538,
      y: -19.52383,
      form: 'move'
    }, {
      x: -152.23538,
      y: -19.52383
    }, {
      form: 'close'
    }, {
      size: '.1',
      form: 'width'
    }, {
      color: 'rgba(255, 255, 255, .3)',
      form: 'strokeStyle'
    }, {
      form: 'stroke'
    }, {
      form: 'restore'
    }],
    arc: [{
      x: 105.23538,
      y: 0.02383
    }, {
      x: 98.23538,
      y: -0.5000
    }, {
      x: 95.23538,
      y: 2.0001
    }, {
      x: 95.23538,
      y: 5.101
    }, {
      x: 100.23538,
      y: 7.101
    }, {
      x: 100.23538,
      y: 7.101
    }, {
      x: 105.23538,
      y: 10.101
    }, {
      x: 105.23538,
      y: 14.101
    }, {
      x: 100.23538,
      y: 17.101
    }, {
      x: 95.23538,
      y: 16.101
    }]
  },
  //____________________ Javascript ____________________

  javascript: {
    curve: function (ctx) {
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, .1)";
      ctx.miterLimit = 4;
      ctx.scale(0.1107936507936508, 0.1107936507936508);
      ctx.scale(3.7795275590551185, 3.7795275590551185);
      ctx.save();
      ctx.save();
      ctx.transform(3.3770776, 0, 0, -3.3770776, 174.37916, 41.651086);
      ctx.save();
      ctx.translate(window.innerWidth / 1.05 - window.innerWidth / 2, window.innerHeight / 3.9 - window.innerHeight / 3);
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, .1)";
      ctx.fillStyle = "rgba(255, 255, 255, .1)";
      ctx.strokeStyle = "rgba( 255, 255, 255, .1)";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-40.763, 0);
      ctx.lineTo(-43.596, -30.66);
      ctx.lineTo(-43.535999999999994, -30.468);
      ctx.lineTo(-8.91, -30.468);
      ctx.lineTo(-10.04, -43.437);
      ctx.lineTo(-21.085, -46.620999999999995);
      ctx.lineTo(-32.299, -43.388999999999996);
      ctx.lineTo(-32.972, -35.53999999999999);
      ctx.lineTo(-43.152, -35.53999999999999);
      ctx.lineTo(-41.697, -51.224999999999994);
      ctx.lineTo(-21.085000000000004, -57.077999999999996);
      ctx.lineTo(-0.4730000000000061, -51.224999999999994);
      ctx.lineTo(2.363999999999994, -20.443999999999996);
      ctx.lineTo(-34.378, -20.443999999999996);
      ctx.lineTo(-33.91, -10.179999999999996);
      ctx.lineTo(-8.406999999999996, -10.179999999999996);
      ctx.lineTo(-8.031999999999996, -16.054999999999996);
      ctx.lineTo(2.239, -16.054999999999996);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.restore();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    },
    inside: [{
      form: 'save'
    }, {
      form: 'begin'
    }, {
      x: -150.23538,
      y: -19.52383,
      form: 'move'
    }, {
      x: -152.23538,
      y: -19.52383
    }, {
      form: 'close'
    }, {
      size: '.1',
      form: 'width'
    }, {
      color: 'rgba(255, 255, 255, .3)',
      form: 'strokeStyle'
    }, {
      form: 'stroke'
    }, {
      form: 'restore'
    }],
    arc: [{
      x: 105.23538,
      y: 0.02383
    }]
  }
};


/***/ }),

/***/ "./assets/js/src/sky.js":
/*!******************************!*\
  !*** ./assets/js/src/sky.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sky: () => (/* binding */ Sky)
/* harmony export */ });
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
    //Required canvas variables
    this.skyCanvas = document.getElementById('canvas__sky');
    this.ctx = this.skyCanvas.getContext('2d');

    //particle colors
    this.colors = ['255, 255, 255'];
    //particle radius min/max
    this.minRadius = 0.4;
    this.maxRadius = 2;
    //particle opacity min/max
    this.minOpacity = 0;
    this.maxOpacity = 1;
    //particle speed min/max
    this.minSpeed = .005;
    this.maxSpeed = .19;
    //frames per second
    this.fps = 4;
    //number of particles
    this.numParticles = 1100;
  }
  render() {
    let wHeight = window.innerHeight;
    let wWidth = window.innerWidth;
    this.skyCanvas.width = wWidth;
    this.skyCanvas.height = wHeight;
  }
  //_______________________________
  //
  // All Objects in Night Sky
  //_______________________________

  init() {
    this.stars(); // 1. Stars
    this.meteorShower(); // 2. Meteor Shower 
  }

  //____________________________
  //
  // Stars
  //____________________________

  stars() {
    this.render();
    this.createCircle();
  }
  _rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  createCircle() {
    let particle = [];
    for (let i = 0; i < this.numParticles; i++) {
      let color = this.colors[~~this._rand(0, this.colors.length)];
      particle[i] = {
        radius: this._rand(this.minRadius, this.maxRadius),
        xPos: this._rand(0, this.skyCanvas.width),
        yPos: this._rand(0, this.skyCanvas.height / this.numParticles * i),
        xVelocity: this._rand(this.minSpeed, this.maxSpeed),
        yVelocity: this._rand(this.minSpeed, this.maxSpeed),
        color: 'rgba(' + color + ',' + this._rand(this.minOpacity, this.maxOpacity) + ')'
      };

      //once values are determined, draw particle on canvas
      this.drawParticles(particle, i);
    }
    //...and once drawn, animateCircle the particle
    this.animateCircle(particle);
  }
  drawParticles(particle, i) {
    this.ctx.fillStyle = particle[i].color;
    this.ctx.beginPath();
    this.ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 6 * Math.PI, false);
    this.ctx.fill();
  }
  animateCircle(particle) {
    const animate = () => {
      this.clearCanvas();
      for (let i = 0; i < this.numParticles; i++) {
        particle[i].xPos += particle[i].xVelocity; // Stars Move to Right
        particle[i].yPos -= particle[i].yVelocity; // Stars Move to Top

        //if particle goes off screen call reset method to place it offscreen to the left/bottom
        if (particle[i].xPos > this.skyCanvas.width + particle[i].radius || particle[i].yPos > this.skyCanvas.height + particle[i].radius) {
          this.resetParticle(particle, i);
        } else {
          this.drawParticles(particle, i);
        }
      }
    };
    // animate();
    setInterval(animate, 200 / this.fps);
  }
  resetParticle(particle, i) {
    let random = this._rand(0, 1);
    if (random > .5) {
      // 50% chance particle comes from left side of window...
      particle[i].xPos = -particle[i].radius;
      particle[i].yPos = this._rand(0, this.skyCanvas.height);
    } else {
      //... or bottom of window
      particle[i].xPos = this._rand(0, this.skyCanvas.width);
      particle[i].yPos = this.skyCanvas.height + particle[i].radius;
    }
    //redraw particle with new values
    this.drawParticles(particle, i);
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.skyCanvas.width, this.skyCanvas.height);
  }
  //____________________________
  //
  // 	Meteor Shower 
  //____________________________

  meteorShower() {
    const cLandscapeFrame = document.getElementById('middle');

    // I. PARENT DIV
    const meteorShowerParentDiv = document.createElement("div");
    meteorShowerParentDiv.setAttribute('class', 'o-meteorShower__parent');
    meteorShowerParentDiv.setAttribute('id', 'meteorShower__parent');
    for (let p = 0; p < 7; p++) {
      // Meteor Features
      let meteorFeatures = {
        "angle": Math.floor(Math.random() * (95 - 45 + 1) + 45),
        "speed": Math.floor(Math.random() * (20 - 8 + 1) + 8),
        "delay": Math.floor(Math.random() * (25 - 1 + 1) + 1),
        "x": Math.floor(Math.random() * (80 - 0 + 1) + 0),
        "y": Math.floor(Math.random() * (25 - 0 + 1) + 0),
        "travel": Math.floor(Math.random() * (50 - 10 + 1) + 10),
        "trail": Math.floor(Math.random() * (5 - 1 + 1) + 1)
      };

      // II. CHILD DIV
      const meteorShowerChildDiv = document.createElement("div");
      meteorShowerChildDiv.setAttribute('class', 'o-meteorShower o-meteorShower --' + p);
      meteorShowerChildDiv.setAttribute('id', 'meteorShower --' + p);
      meteorShowerChildDiv.style.setProperty('--angle', Object.values(meteorFeatures)[0]);
      meteorShowerChildDiv.style.setProperty('--speed', Object.values(meteorFeatures)[1]);
      meteorShowerChildDiv.style.setProperty('--delay', Object.values(meteorFeatures)[2]);
      meteorShowerChildDiv.style.setProperty('--x', Object.values(meteorFeatures)[3]);
      meteorShowerChildDiv.style.setProperty('--y', Object.values(meteorFeatures)[4]);
      meteorShowerChildDiv.style.setProperty('--travel', Object.values(meteorFeatures)[5]);
      meteorShowerChildDiv.style.setProperty('--trail', Object.values(meteorFeatures)[6]);

      // Connect Child To Father
      meteorShowerParentDiv.appendChild(meteorShowerChildDiv);

      // II. GRANDCHILD DIV
      const meteorShowerGrandchildDiv = document.createElement("div");
      meteorShowerGrandchildDiv.setAttribute('class', 'o-meteorShower__child o-meteorShower__child --' + p);
      meteorShowerGrandchildDiv.setAttribute('id', 'meteorShower__child --' + p);

      // Connect Grandchild To Child
      meteorShowerChildDiv.appendChild(meteorShowerGrandchildDiv);

      // Connect Father to <sectopn> tag
      cLandscapeFrame.appendChild(meteorShowerParentDiv);
    }
  }
}


/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./assets/js/src/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./assets/js/src/config.js");
/* harmony import */ var main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! main */ "./assets/scss/main.scss");
/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Imports ********************************
/*************************************************************************/

/*____________________________________________________________________________*/
/*
/* 	I. Bundle Javascript
/*____________________________________________________________________________*/

 // I. Config

/*____________________________________________________________________________*/
/*
/* 	II. Bundle SCSS & CSS
/*____________________________________________________________________________*/

//	I. SCSS PLUGINS
//_________________________

//	II. SCSS CORE
//_________________________

 // Import
})();

/******/ })()
;
//# sourceMappingURL=build.js.map