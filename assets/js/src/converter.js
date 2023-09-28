/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/


/******************************** CONVERTER *******************************
/**************************************************************************/

	class Converter {

		constructor() {	
			this.inputCanvas = document.getElementById('inputCanvas');
			this.outputJSON = document.getElementById('outputJSON');
			this.copyToClipboard = document.getElementById('copyToClipboard');
			this.convertButton = document.getElementById('convertButton');
		};

		//_______________________________
		//
		// RUN! 
		//_______________________________

		init() {
			this._eventListeners();
			// this.importJSON();
		};

		//_______________________________
		//
		// Libraries
		//_______________________________
		
		canvasFunctions() {
			const functionName = {
				// " = "
				equal : [
					'strokeStyle', 'fillStyle', 'lineWidth', 'miterLimit'
				],
				// " () "
				parenthesis : [
					'save', 'closePath', 'beginPath', 'scale', 'translate', 'transform', 'restore', 'moveTo', 'lineTo', 'bezierCurveTo', 'fill', 'stroke'
				]
			};
			return functionName;
		};

		selectAllExport() {
			this.outputJSON.select();
		};

		copyClipboard(clipboardValue) {
			navigator.clipboard.writeText(clipboardValue);
		};

		pastePlainText(event) {
			event.preventDefault();
			let getData = (event.clipboardData || window.clipboardData).getData("text");
			let paste = getData.toString().replace(/\t/g, '');
			this.inputCanvas.value = paste;
		};

		exportCanvas() {

			// Canvas Functions
			let canvasFunctions = this.canvasFunctions();

			// Input From Text Area
			let input = this.inputCanvas.value.toString().replace(/\t/g, '').split("\n");

			let regexFuncName = /\.([^\.]+)\(/; // Regex: Match Exeryting Between Dot and First Open Parenthesis
			let regexParenthesis = /\(([^\)]+)\)/; // Regex: Match Exeryting Between Parenthesis
	
			let output = [];
			for (let i = 0; i < input.length; i++) {
				let format = input[i].split( regexFuncName )[1]; // Split Function Name
				console.log("FROMAT: "+format);
				if( canvasFunctions.parenthesis.includes(format) ) {
					console.log("Format is parenthesis and value is: "+format);
					let numbers = input[i].split( regexParenthesis )[1];  // Split Numbers Between Parenthesis
					// we have numbers inside Parenthesis
					if( numbers ) {
						numbers = numbers.split(",");
						output[i] = ``;
						for ( let j = 0; j <= numbers.length; j++ ) {
							if( j == 0 ) { output[i] += `{`; }
							if( j == numbers.length ) { output[i] += ` form: '${format}' },`; };
							if( j >= 0 && j < numbers.length ) { output[i] += ` x${j}:${numbers[j]}, `};
						}
					} else { // we don't have numbers inside Parenthesis
						output[i] = ``;
						output[i] += `{`;
						output[i] += ` form: '${format}'`;
						output[i] += ` }, `; 
					}

				} else {
					console.log("Format is Equal and value is: "+format);
					let regexEqualValue =  /\=\s*([\S\s]+)/; // Regex: Match Exeryting After Equal Sign
					let regexEqualFuncName = /\.([^\.]+)\=/; // Regex: Match Exeryting Between Dot and First Equal " = " Sign
					
					let equalVlaue = input[i].split( regexEqualValue )[1].replace(/;/g, '');  // Split Numbers Between Parenthesis Without dot, semicolon
					let equalKey = input[i].split( regexEqualFuncName )[1];  // Split Numbers Between Parenthesis
					output[i] = ``;
					output[i] += `{`; 
					output[i] += ` form: '${equalKey}',`; 
					output[i] += ` value: ${equalVlaue}`; 
					output[i] += ` }, `; 
				}
			}
			this.outputJSON.value = output.join('\n');
		};

		importJSON() {
			let exportCanvas = this.exportCanvas();
			console.log(exportCanvas);
			this.outputJSON.value = "exportCanvas";
		};


		//_______________________________
		//
		//  Listeners
		//_______________________________

		_eventListeners() {
			this.outputJSON.addEventListener( "click", () => { 
				this.selectAllExport();
			});	

			this.copyToClipboard.addEventListener( "click", () => { 
				let clipboardValue = this.outputJSON.value;
				this.copyClipboard(clipboardValue);
			});

			this.convertButton.addEventListener( "click", () => { 
				this.exportCanvas();
			});

			this.inputCanvas.addEventListener( "paste", (event) => { 
				this.pastePlainText(event);
			});
		};
	};

	const converter = new Converter();
	converter.init();
