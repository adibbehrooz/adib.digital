/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** LINES ********************************
/***********************************************************************/

class Lines {

	//_______________________________
	//
	// RUN! 
	//_______________________________

    drawLines(lineType, name, constellation, context) {

		// Draw Lines
		for( let i = 0; i < constellation[name].coordination[lineType].length; i++ ) {
					
			let form = constellation[name].coordination[lineType][i].form;

			switch(form) {

				case 'scale':
				context.scale( 
					constellation[name].coordination[lineType][i]['x0'], 
					constellation[name].coordination[lineType][i]['x1'] 
				);
				break;	

				case 'miterLimit':
					context.miterLimit = constellation[name].coordination[lineType][i]['value'];
				break;	

				case 'moveTo':
				context.moveTo( 
					// X
					constellation[name].data.relation.x + 
					constellation[name].coordination[lineType][i]['x0'] * 
					constellation[name].data.scale[lineType],
					// Y
					constellation[name].data.relation.y + 
					constellation[name].coordination[lineType][i]['x1'] * 
					constellation[name].data.scale[lineType],
				);
				break;
		
				case 'lineTo':
				context.lineTo( 
					// X
					constellation[name].data.relation.x + 
					constellation[name].coordination[lineType][i]['x0'] * 
					constellation[name].data.scale[lineType],

					// Y
					constellation[name].data.relation.y + 
					constellation[name].coordination[lineType][i]['x1'] * 
					constellation[name].data.scale[lineType],
				);
				break;

				case "translate":
				context.translate( 
					constellation[name].coordination[lineType][i]['x0'], 
					constellation[name].coordination[lineType][i]['x1'] 
				);
				break;

				case 'transform':
				context.transform( 
					constellation[name].coordination[lineType][i]['x0'],
					constellation[name].coordination[lineType][i]['x1'],
					constellation[name].coordination[lineType][i]['x2'],
					constellation[name].coordination[lineType][i]['x3'],
					constellation[name].coordination[lineType][i]['x4'],
					constellation[name].coordination[lineType][i]['x5'],
				);
				break;

				case 'bezierCurveTo':
				context.bezierCurveTo( 
					// x1
					constellation[name].data.relation.x + 
					constellation[name].coordination[lineType][i]['x0'] *
					constellation[name].data.scale[lineType],

					// X2
					constellation[name].data.relation.y + 
					constellation[name].coordination[lineType][i]['x1'] * 
					constellation[name].data.scale[lineType],

					// x2
					constellation[name].data.relation.x +
					constellation[name].coordination[lineType][i]['x2'] *
					constellation[name].data.scale[lineType],

					// x3
					constellation[name].data.relation.y + 
					constellation[name].coordination[lineType][i]['x3'] * 
					constellation[name].data.scale[lineType],

					// x4
					constellation[name].data.relation.x + 
					constellation[name].coordination[lineType][i]['x4'] *
					constellation[name].data.scale[lineType],

					// x5
					constellation[name].data.relation.y + 
					constellation[name].coordination[lineType][i]['x5'] * 
					constellation[name].data.scale[lineType],
				);
				break;

				case 'fillRect':
				context.fillRect( 
					constellation[name].coordination[lineType][i]['x0'],
					constellation[name].coordination[lineType][i]['x1'],
					constellation[name].coordination[lineType][i]['x2'],
					constellation[name].coordination[lineType][i]['x3'],
				);				
				break;	

				case 'fillText':
				context.fillText( 
					constellation[name].coordination[lineType][i]['x0'],
					constellation[name].coordination[lineType][i]['x1'],
					constellation[name].coordination[lineType][i]['x2'],
					constellation[name].coordination[lineType][i]['x3'],
				);				
				break;	

				case 'arc':
				context.arc( 
					constellation[name].coordination[lineType][i]['x0'],
					constellation[name].coordination[lineType][i]['x1'],
					constellation[name].coordination[lineType][i]['x2'],
					constellation[name].coordination[lineType][i]['x3'],
					constellation[name].coordination[lineType][i]['x4'],
					constellation[name].coordination[lineType][i]['x5'],
				);				
				break;	

				case 'closePath':
					context.closePath();
				break;

				case 'beginPath':
					context.beginPath();
				break;

				case 'restore':
					context.restore();
				break;

				case 'save':
					context.save();
				break;

				case 'lineWidth':
					context.lineWidth = constellation[name].coordination[lineType][i]['value']; 
				break;	

				case 'stroke':
					context.stroke();
				break;	
				
				case 'strokeStyle':
					// For Gradient
					if(  constellation[name].coordination[lineType][i]['type']  == 'gradient' ) {
						if( constellation[name].coordination[lineType][i]['key'] == 'addColorStop' ) {
							constellation[name].coordination[lineType][i]['name']
							+'.addColorStop'+(constellation[name].coordination[lineType][i]['value']);							
						}
						context.strokeStyle = constellation[name].coordination[lineType][i]['name'];
						
					}
					// For Numbers
					else {
						context.strokeStyle = constellation[name].coordination[lineType][i]['value'];
					}
				break;	

				case 'fill':
					context.fill();
				break;
				
				case 'fillStyle':
					// For Gradient
					if(  constellation[name].coordination[lineType][i]['type']  == 'gradient' ) {
						if( constellation[name].coordination[lineType][i]['key'] == 'addColorStop' ) {
							constellation[name].coordination[lineType][i]['name']
							+'.addColorStop'+(constellation[name].coordination[lineType][i]['value']);							
						}
						context.fillStyle = constellation[name].coordination[lineType][i]['name'];
						
					}
					// For Numbers
					else {
						context.fillStyle = constellation[name].coordination[lineType][i]['value'];
					}
				break;	
				
			}; // [END] SWITCH
		}; // [END] FOR
    };
};

export { Lines };
