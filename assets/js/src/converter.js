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
		};

		//_______________________________
		//
		// Libraries
		//_______________________________
		
		canvasFunctions() {
			const functionName = {
				// Functions With Equal Sign " = "
				equal : [
					'strokeStyle', 'fillStyle', 'lineWidth', 'miterLimit'
				],
				// Functions With Parenthesis Sign " () "
				parenthesis : [
					'save', 'closePath', 'beginPath', 'scale', 'translate', 'transform', 
					'restore', 'moveTo', 'lineTo', 'bezierCurveTo', 'fill', 'stroke', 'fillRect', 'fillText', 'arc'
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
			let paste = getData.toString().replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,"");
			this.inputCanvas.value = paste;
		};

		exportCustomCanvas() {

			// All Canvas Functions
			let canvasFunctions = this.canvasFunctions();

			// Input From Text Area
			let input = this.inputCanvas.value.toString().replace(/\t/g, '').split("\n");
			let regexFuncName = /\.([^\.]+)\(/; // Regex: Match Exeryting Between Dot and First Open Parenthesis
			let regexParenthesis = /\(([^\)]+)\)/; // Regex: Match Exeryting Between Parenthesis

			let output = [];
			for (let i = 0; i < input.length; i++) {
				let format = input[i].split( regexFuncName )[1]; // Split Function Name

				// Parenthesis 
				if( canvasFunctions.parenthesis.includes(format) ) {
	
					let numbersWithComma = input[i].split( regexParenthesis )[1];  // Split Numbers Between Parenthesis
					// we have numbers inside Parenthesis
					if( numbersWithComma ) {
						
						// Create Array
						let numbers = numbersWithComma.split(",");
						output[i] = ``;
						for ( let j = 0; j <= numbers.length; j++ ) {
							if( j == 0 ) { output[i] += `{ `; } // Start String with '{'
							if( j == numbers.length ) { output[i] += ` form: '${format}' },`; }; // End String with '}'
							
							// Statement between two { } like: { x0: 0.5, x1: 0.5 }
							if( j >= 0 && j < numbers.length ) {
								if( !isNaN(numbers[j]) ) { // Check if 0.5 is real Number and not string
									output[i] += `x${j}: ${numbers[j]}, `
								} else {
									output[i] += ``;
								}
							};
						} // !FOR
					} else { // we don't have numbers inside Parenthesis
						output[i] = ``;
						output[i] += `{`;
						output[i] += ` form: '${format}'`;
						output[i] += ` }, `; 
					}

				// EQual 
				} else {
					// 1. Regular Expression
					let regexEqualValue =  /\=\s*([\S\s]+)/; // Regex: Match Exeryting After Equal Sign
					let regexEqualFuncName = /\.([^\.]+)\=/; // Regex: Match Exeryting Between Dot and First Equal " = " Sign
					
					// 1. Return Key and Value for statement with " = " sign
					let equalKey = input[i].split( regexEqualFuncName )[1];  // Split Numbers Between Parenthesis
					let equalVlaue = input[i].split( regexEqualValue )[1];  // Split Numbers Between Parenthesis Without dot, semicolon

					// 3. Condition if equalKey is part of Equal Array
					if( canvasFunctions.equal.includes(equalKey) ) {
						let vlaue = equalVlaue.replace(/;/g, '');
						output[i] = ``;
						output[i] += `{`; 
						output[i] += ` form: '${equalKey}',`; 
						output[i] += ` value: ${vlaue}`; 
						output[i] += ` }, `; 						
					} else {
						output[i] = ``;
					}
				} 
			}
			// Remove "undefined", "empty" or Null elements
			let filtered = output.filter(function (elements) {
				if( elements != '' &&  elements != null && elements != undefined) return elements;
			});

			if( filtered.length == 0 ) {
				this.outputJSON.value = "Check your Input code, It seems your code is not valid";
			} else {
				this.outputJSON.value = filtered.join('\n');
			}
			
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
				this.exportCustomCanvas();
			});

			this.inputCanvas.addEventListener( "paste", (event) => { 
				this.pastePlainText(event);
			});
		};
	
		//_______________________________
		//
		//  END
		//_______________________________

	};

	const converter = new Converter();
	converter.init();
