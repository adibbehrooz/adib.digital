/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/


/******************************** Library Configuration ********************************
/***************************************************************************************/

jQuery(function () {
	
	var canvas = document.querySelector('canvas');	// selecting the canvas element in html file, the assigning to a variable

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var ctx = canvas.getContext('2d');
	
	trackTransforms(ctx);

	function Object (x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.draw = function () {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.closePath();
		};
	}
			
	function init(x, systemRadi, systemColor, scaleVal){
		var y = canvas.height/2
		var planets = [];
		for (var i= 0; i< systemRadi.length; i++){
			planets.push(new Object(x[i], y, systemRadi[i]*scaleVal, systemColor[i]))
		}
		animate(planets);
	}		
		
	function animate(planets){
		planets.forEach(function(Object) {
			Object.draw();
		}, this);
	}
			
	function main(){
		var scaleVal = 100;
		var r = [0.6957,0.0049,0.0121,0.0128,0.0068,0.143,0.1205,0.0511,0.0495,0.0028];
		var x =[-r[0]*scaleVal/4,11.6 + r[0]*scaleVal,21.6 + r[0]*scaleVal,29.9 + r[0]*scaleVal,45.6 + r[0]*scaleVal,155.8 + r[0]*scaleVal,286 + r[0]*scaleVal,574 + r[0]*scaleVal,899 + r[0]*scaleVal,1300 + r[0]*scaleVal];			
		var col = ['rgb(242, 181, 50)','rgb(40, 8, 8)', 'rgb(124, 175, 35)','rgb(32, 32, 155)', 'rgb(196, 70, 39)', 'rgb(219, 125, 43)','rgb(219, 182, 37)', 'rgb(37, 140, 219)', 'rgb(37, 185, 219)', 'rgb(5, 10, 20)']
			init(x, r, col, scaleVal);
	}
		
	function redraw(){
		// Clear the entire canvas
		var p1 = ctx.transformedPoint(0,0);
		var p2 = ctx.transformedPoint(canvas.width,canvas.height);
		ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);
	
		ctx.save();
		ctx.setTransform(1,0,0,1,0,0);
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.restore();
		main();		// create image
	}
	redraw(); // redraw the image upon transformation
	
	var lastX=canvas.width/2, lastY=canvas.height/2;
	var dragStart,dragged;
	
	canvas.addEventListener('mousedown',function(evt){
		document.body.style.mozUserSelect = document.body.style.userSelect = 'none';
		lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
		lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
		dragStart = ctx.transformedPoint(lastX,lastY);
		dragged = false;
	},false);
	
	canvas.addEventListener('mousemove',function(evt){
		lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
		lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
		dragged = true;
		if (dragStart){
			var pt = ctx.transformedPoint(lastX,lastY);
			ctx.translate(pt.x-dragStart.x,pt.y-dragStart.y);
			redraw();
		}
	},false);
	
	canvas.addEventListener('mouseup',function(evt){
		dragStart = null;
		if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
	},false);
	
	var scaleFactor = 1.1;
	var zoom = function(clicks){
		var pt = ctx.transformedPoint(lastX,lastY);
		ctx.translate(pt.x,pt.y);
		var factor = Math.pow(scaleFactor,clicks);
		ctx.scale(factor,factor);
		ctx.translate(-pt.x,-pt.y);
		redraw();
	}
	
	var handleScroll = function(evt){
		var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
		if (delta) zoom(delta);
		return evt.preventDefault() && false;
	};
		
	canvas.addEventListener('DOMMouseScroll',handleScroll,false);
	canvas.addEventListener('mousewheel',handleScroll,false);
	
		
	// Adds ctx.getTransform() - returns an SVGMatrix
	// Adds ctx.transformedPoint(x,y) - returns an SVGPoint
	function trackTransforms(ctx){
		var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
		var xform = svg.createSVGMatrix();
		ctx.getTransform = function(){ return xform; };
	
		var savedTransforms = [];
		var save = ctx.save;
		ctx.save = function(){
			savedTransforms.push(xform.translate(0,0));
			return save.call(ctx);
		};
			
		var restore = ctx.restore;
		ctx.restore = function(){
			xform = savedTransforms.pop();
			return restore.call(ctx);
		};
	
		var scale = ctx.scale;
		ctx.scale = function(sx,sy){
			xform = xform.scaleNonUniform(sx,sy);
			return scale.call(ctx,sx,sy);
		};
			
		var rotate = ctx.rotate;
		ctx.rotate = function(radians){
			xform = xform.rotate(radians*180/Math.PI);
			return rotate.call(ctx,radians);
		};
			
		var translate = ctx.translate;
		ctx.translate = function(dx,dy){
			xform = xform.translate(dx,dy);
			return translate.call(ctx,dx,dy);
		};
			
		var transform = ctx.transform;
		ctx.transform = function(a,b,c,d,e,f){
			var m2 = svg.createSVGMatrix();
			m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
			xform = xform.multiply(m2);
			return transform.call(ctx,a,b,c,d,e,f);
		};
			
		var setTransform = ctx.setTransform;
		ctx.setTransform = function(a,b,c,d,e,f){
			xform.a = a;
			xform.b = b;
			xform.c = c;
			xform.d = d;
			xform.e = e;
			xform.f = f;
			return setTransform.call(ctx,a,b,c,d,e,f);
		};
			
		var pt	= svg.createSVGPoint();
		ctx.transformedPoint = function(x,y){
			pt.x=x; pt.y=y;
			return pt.matrixTransform(xform.inverse());
		}
	}

}); // JQuery