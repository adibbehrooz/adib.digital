const positions = {
	
	//____________________ CSS ____________________

	css: {
		curve: function(ctx) {
			ctx.save();
			ctx.restore();
		},
		outside: [
			{ form: 'scale', x: 4, y: 4 },
			{ form: 'save' },
			{ x: 0.000,   	y: 19.232, form: 'move' }, 
			{ x: 9.635,   	y: 23.250 },  
			{ x: 20.800,   	y: 19.232 },  
			{ x: 24.000,   	y: 0.7500 },  
			{ x: 3.630,   	y: 0.7500 },  
			{ x: 2.815,   	y: 4.8680 },  
			{ x: 19.485,   	y: 4.8680 },  
			{ x: 18.960,   	y: 7.5150 },  
			{ x: 2.2750,   	y: 7.5150 },  
			{ x: 1.4750,   	y: 11.633 },  
			{ x: 18.145,   	y: 11.633 },  
			{ x: 17.205,   	y: 16.510 },  
			{ x: 10.500,   	y: 18.739 },  
			{ x: 4.6800,   	y: 16.510 },  
			{ x: 5.0800,   	y: 14.471 },  
			{ x: 1.4750,   	y: 14.471 },  
			{ x: 0.0000,   	y: 19.142 }, 
			{ form: 'width', size: '0.1' },
			{ form: 'strokeStyle',	color: 'rgba(255, 255, 255, .2)' },
			{ form: 'fillStyle', 	color: 'rgba(255, 255, 255, .2)' },
			{ form: 'fill' },
			{ form: 'stroke'}, 
			{ form: 'close' },
			{ form: 'restore'},
		],
		inside: [
			{form: 'scale', x: 4, y: 4},
			{ form: 'save' },
			{ x: 3.175,   	y: 2.750, form: 'move'  },  
			{ x: 21.500,   	y: 2.750  },  
			{ x: 18.700,   	y: 17.900 },  
			{ x: 9.700,   	y: 21.000 },  
			{ x: 1.700,   	y: 17.500 },  
			{ x: 20.175,  	y: 9.750, form: 'move' },  
			{ x: 2.175,  	y: 9.750  }, 
			{ form: 'width', size: '0.1' },
			{ form: 'strokeStyle',	color: 'rgba(255, 255, 255, .5)' },
			{ form: 'restore'},
			
		],
		arc: [
			{ form: 'save' },
			{ x: 3.175,   	y: 2.750  },  
			{ x: 21.500,   	y: 2.750  },  
			{ x: 18.700,   	y: 17.900 },  
			{ x: 9.700,   	y: 21.000 },  
			{ x: 1.700,   	y: 17.500 },  
			{ x: 2.175,  	y: 9.7500 },  
			{ x: 20.175,  	y: 9.750  },  
			{ form: 'restore'},
		],
	},

	//____________________ SVG ____________________

	svg: {
		curve: function(ctx) {
			ctx.save();
			ctx.restore();
		},
		outside: [
			{ form: 'scale', x: 4, y: 4 },
			{ form: 'save' },
			{ x: 0.000,   	y: 0.0000, form: 'move' }, 
			{ form: 'width', size: '0.1' },
			{ form: 'strokeStyle',	color: 'rgba(255, 255, 255, .2)' },
			{ form: 'fillStyle', 	color: 'rgba(255, 255, 255, .2)' },
			{ form: 'fill' },
			{ form: 'stroke'}, 
			{ form: 'close' },
			{ form: 'restore'},
		],
		inside: [
			{form: 'scale', x: 4, y: 4},
			{ form: 'save' },
			{ x: 0.000,   	y: 0.0000, form: 'move' }, 	
		],
		arc: [
			{ form: 'save' },
			{ x: 0.0000,   	y: 0.000  },  
			{ form: 'restore'},
		],
	},


};

export { positions };

