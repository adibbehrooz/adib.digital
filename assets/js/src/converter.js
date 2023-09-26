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
			this.outputJSON = document.getElementById('outputCanvas');
			this.outputCopy = document.getElementById('outputCopy');
		};

		init() {
			this._eventListeners();
			// this.convert();
		};

		selectAllExport() {
			this.outputJSON.select();
		}

		copyExport(text) {

		}	

		_eventListeners() {
			this.outputJSON.addEventListener( "click", () => { 
				this.selectAllExport();
			});	

			this.outputCopy.addEventListener( "click", () => { 
				this.selectAllExport();
			});				
			
		}
	};

	const converter = new Converter();
	converter.init();
