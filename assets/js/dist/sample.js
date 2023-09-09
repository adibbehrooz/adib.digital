/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./assets/js/src/sample.js ***!
  \*********************************/
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
/*
	class Circle {

		constructor() {
		
			// Canvas
			this.panCanvas = document.getElementById('canvas');
			this.panCanvas.style.position = 'absolute';
			this.ctx = this.panCanvas.getContext('2d');
			this.panCanvas.width = window.innerWidth;
			this.panCanvas.height = window.innerHeight;

			// Pan Default Offset
			this.cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; 
			this.negativeCamera = { x: -window.innerWidth / 2, y: -window.innerHeight / 2 };
			this.zeroCamera = { x: 0, y: 0};
			
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
			this.dragStart = { x: 0, y: 0 };
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
			this.minMaxRadius = { minRadius: 1, maxRadius : 2.5 };
			this.radiusChange = 0.15;
			this.redStarColor = 'rgba(255, 194, 184, 1)';
			this.shadowBlur = 1;
		}

		circle() {

			const cssBpundries = new Path2D();
			let relatePosition = { x: window.innerWidth / 2, y: this.cameraOffset.y / 2 };
			const linePosition = [ 
				{ x: 0.000, 	y: 19.232 },
				{ x: 9.635, 	y: 23.250 },					
				{ x: 20.800, 	y: 19.232 },
				{ x: 24.000, 	y: 0.750 },
				{ x: 3.630, 	y: 0.750 },
				{ x: 2.815, 	y: 4.868 },
				{ x: 0.000, 	y: 19.142 },	
			];
			// this.ctx.beginPath();
			cssBpundries.moveTo( relatePosition.x + linePosition[0].x *  this.scaleSize, relatePosition.y + linePosition[0].y * this.scaleSize );
			for( let i = 1; i < linePosition.length; i++ ) {
				cssBpundries.lineTo(  relatePosition.x + linePosition[i].x * this.scaleSize,  relatePosition.y + linePosition[i].y * this.scaleSize );
			}
			this.ctx.lineWidth = 1;	
			this.ctx.fillStyle = 'white';
			cssBpundries.closePath();
			this.ctx.fill(cssBpundries);	
			this.ctx.stroke();
			// console.log(cssBpundries);
			
			// Listen for mouse moves
			this.panCanvas.addEventListener("mousemove", (event) => {
				// Check whether point is inside circle
				const isPointInPath = this.ctx.isPointInPath( cssBpundries, event.offsetX, event.offsetY );
				this.ctx.fillStyle = isPointInPath ? "green" : "red";

				// Draw circle
				this.ctx.fill(cssBpundries);
			});				
		}

	};
	export { Circle };
*/
//Start
theCanvas = document.getElementById("canvasOne");
context = theCanvas.getContext("2d");
var status = document.getElementById('status');
var $canvas = $("#canvasOne");
var canvasOffset = $canvas.offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var scrollX = $canvas.scrollLeft();
var scrollY = $canvas.scrollTop();
var cw = theCanvas.width;
var ch = theCanvas.height;
var scaleFactor = 1.00;
var panX = 0;
var panY = 0;
var mainX = 250;
// setting the middle point position X value
var mainY = 100;
// setting the middle point position Y value
var mainR = 125;
// main ellipse radius R
var no = 5;
// number of nodes to display
var div_angle = 360 / no;
var circle = {
  centerX: mainX,
  centerY: mainY + 100,
  radius: mainR,
  angle: .9
};
var ball = {
  x: 0,
  y: 0,
  speed: .1
};
var a = 1.8;
//Ellipse width
var b = .5;
//Ellipse height

var translatePos = {
  x: 1,
  y: 1
};
var startDragOffset = {};
var mouseDown = false;
var elements = [{}];

// Animate
var animateInterval = setInterval(drawScreen, 1);

//Animation
function drawScreen() {
  context.clearRect(0, 0, cw, ch);
  // Background box
  context.beginPath();
  context.fillStyle = '#EEEEEE';
  context.fillRect(0, 0, theCanvas.width, theCanvas.height);
  context.strokeRect(1, 1, theCanvas.width - 2, theCanvas.height - 2);
  context.closePath();
  context.save();
  context.translate(panX, panY);
  context.scale(scaleFactor, scaleFactor);
  ball.speed = ball.speed + 0.001;
  for (var i = 1; i <= no; i++) {
    // male
    new_angle = div_angle * i;
    //Starting positions for ball 1 at different points on the ellipse
    circle.angle = new_angle * 0.0174532925 + ball.speed;
    //elliptical x position and y position for animation for the first ball
    //xx and yy records the first balls coordinates
    xx = ball.x = circle.centerX - a * Math.cos(circle.angle) * circle.radius;
    yy = ball.y = circle.centerY + b * Math.sin(circle.angle) * circle.radius;
    //Draw the first ball with position x and y
    context.fillStyle = "#000000";
    context.beginPath();
    context.arc(ball.x, ball.y, 10, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    //alert("male Positions "+"X:  "+ball.x+ " Y: "+ball.y);

    // female
    new_angle = div_angle * i + 4;
    //Starting positions for ball 2 at different points on the ellipse
    circle.angle = new_angle * 0.0174532925 + ball.speed;
    //elliptical x position and y position for animation for the second ball
    //ball.x and ball.y record the second balls positions
    ball.x = circle.centerX - a * Math.cos(circle.angle) * circle.radius;
    ball.y = circle.centerY + b * Math.sin(circle.angle) * circle.radius;
    context.fillStyle = "#000000";
    context.beginPath();
    context.arc(ball.x, ball.y, 10, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    //alert("female Positions "+"X:  "+ball.x+ " Y: "+ball.y);

    //Record the ball positions in elements array for locating positions with mouse coordinates.
    elements[i] = {
      id: i,
      femaleX: ball.x,
      femaleY: ball.y,
      maleX: xx,
      maleY: yy,
      w: 10 //radius of the ball to draw while locating the positions
    };
    //Text Numbering
    context.beginPath();
    context.fillStyle = "blue";
    context.font = "bold 16px Arial";
    context.fillText(elements[i].id, ball.x - 20, ball.y + 20);
    context.closePath();
    // line drawing--Connecting lines to the balls from the center.
    context.moveTo(mainX, mainY);
    context.lineTo((ball.x + xx) / 2, (ball.y + yy) / 2);
    //Draw line till the middle point between ball1 and ball2
    context.stroke();
    context.fill();
    context.closePath();
  }
  // center point
  context.fillStyle = "#000000";
  context.beginPath();
  context.arc(mainX, mainY, 15, 0, Math.PI * 2, true);
  context.fill();
  context.closePath();
  context.restore();
}

// Event Listeners
// Mouse move event to alert the position of the ball on screen

//According to markE's method from http://stackoverflow.com/questions/21717001/html5-canvas-get-coordinates-after-zoom-and-translate
document.getElementById("plus").addEventListener("click", function () {
  scaleFactor *= 1.1;
  drawScreen();
}, false);
document.getElementById("minus").addEventListener("click", function () {
  scaleFactor /= 1.1;
  drawScreen();
}, false);

// Event listeners to handle screen panning
context.canvas.addEventListener("mousedown", function (evt) {
  mouseDown = true;
  startDragOffset.x = evt.clientX - translatePos.x; // translatePos == cameraOffset
  startDragOffset.y = evt.clientY - translatePos.y;
});
context.canvas.addEventListener("mouseup", function (evt) {
  mouseDown = false;
});
context.canvas.addEventListener("mouseover", function (evt) {
  mouseDown = false;
});
context.canvas.addEventListener("mouseout", function (evt) {
  mouseDown = false;
});
context.canvas.addEventListener("mousemove", function (evt) {
  if (mouseDown) {
    translatePos.x = evt.clientX - startDragOffset.x;
    translatePos.y = evt.clientY - startDragOffset.y;
    panX = translatePos.x;
    panY = translatePos.y;
    drawScreen();
  }
  evt.preventDefault();
  evt.stopPropagation();
  var mouseX = parseInt(evt.clientX - offsetX);
  var mouseY = parseInt(evt.clientY - offsetY);
  var mouseXT = parseInt((mouseX - panX) / scaleFactor);
  var mouseYT = parseInt((mouseY - panY) / scaleFactor);
  status.innerHTML = mouseXT + " | " + mouseYT;
  for (var i = 1; i < elements.length; i++) {
    var b = elements[i];
    context.closePath();
    context.beginPath();
    context.arc(b.femaleX, b.femaleY, 10, 0, Math.PI * 2);
    context.arc(b.maleX, b.maleY, 10, 0, Math.PI * 2);
    if (context.isPointInPath(mouseXT, mouseYT)) {
      theCanvas.style.cursor = 'pointer';
      console.log(b.id + " female.x: " + b.femaleX + " female.y: " + b.femaleY + " ball.x: " + ball.x + " ball.y: " + ball.y);
      return;
    } else theCanvas.style.cursor = 'default';
    context.closePath();
  }
});
/******/ })()
;
//# sourceMappingURL=sample.js.map