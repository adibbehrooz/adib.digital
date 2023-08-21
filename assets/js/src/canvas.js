/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Canvas ********************************
/************************************************************************/


	const screens = require("../../../tailwind.config.js").variants.theme.screens;
	
	module.exports = new class Owl {
		// screens;
		type = 'Bird';
		voice = 'Owoo';
		name = 'Hedwig';
		console.log(screens);
			
			
		//sreensKeys = Object.keys(customScreens);
		//screensValues = Object.values(customScreens);
		//console.log(sreensKeys);
		
		whoIs() {
			return this.type;
		};

		getVoice() {
			return this.voice;
		};

		getName() {
			return `My name is ${this.name}`;
		};
	};

