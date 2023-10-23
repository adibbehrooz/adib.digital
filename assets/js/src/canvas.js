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
		};


		//____________________________
		//
		// RUN
		//____________________________	
		
		init() {
			this.bodyStyles();
			this.allCanvas();
		};	


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
				'cursor': 'none',
			};
			let cssBodyResult = "";
			Object.keys(bodyStyle).forEach(function (prop, index) {
				cssBodyResult += prop + ": " + bodyStyle[prop] + "; ";
			});
			document.body.style = cssBodyResult;
		};


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
		};

		allCanvas() {
			const middleSection = this.createSection();
			// Canvas
			middleSection.appendChild(this.panCanvas());
			middleSection.appendChild(this.skyCanvas());
		};

		skyCanvas() {
			const canvasSky = document.createElement("canvas");
			canvasSky.setAttribute('class', 'o-canvas__sky');
			canvasSky.setAttribute('id', 'canvas__sky');
			canvasSky.width = window.innerWidth;
			canvasSky.height = window.innerHeight;			
			return canvasSky;			
		};

		panCanvas() {
			const canvasPan = document.createElement("canvas");
			canvasPan.setAttribute('class', 'o-canvas__pan');
			canvasPan.setAttribute('id', 'canvas__pan');
			return canvasPan;
		};

		cover() {
			const coverSection = document.createElement("section");
			coverSection.setAttribute('class', 'o-cover');
			coverSection.setAttribute('id', 'cover');
			document.body.appendChild(coverSection);
			return coverSection;
		};
	};
	export { Canvas };


/******************************** Sections ********************************
/**************************************************************************/

	class Sections {

		//____________________________
		//
		// Constructor
		//____________________________

		constructor() {
			// Silence is Golden	
		};


		//____________________________
		//
		// RUN
		//____________________________	
		
		init() {
			this.modal();
			this.allMenu();
		};	

		//_______
		//
		// MODAL
		//_______

		modal() {
			const modalSection = document.createElement("section");
			modalSection.setAttribute('class', 'o-modal');
			modalSection.setAttribute('id', 'modal');
			document.body.appendChild(modalSection);
			return modalSection;
		};

		//_______
		//
		// MENU
		//_______

		menuSection() {
			const menuSection = document.createElement("section");
			menuSection.setAttribute('class', 'o-menu');
			menuSection.setAttribute('id', 'menu');
			menuSection.setAttribute('data', "renderType: 'section'");
			document.body.appendChild(menuSection);
			return menuSection;
		};

		allMenu() {
			const menu = this.menuSection();
			menu.appendChild(this.leftNavbar());
			menu.appendChild(this.rightNavbar());
		};

		leftNavbar() {
			const leftMenu = document.createElement("div");
			leftMenu.setAttribute('class', 'o-menu --left');
			leftMenu.setAttribute('id', 'menuLeft');	
			leftMenu.appendChild(this.textSections());	
			return leftMenu;	
		};

		rightNavbar() {
			const rightMenu = document.createElement("div");
			rightMenu.setAttribute('class', 'o-menu --right');
			rightMenu.setAttribute('id', 'menuRight');		
			rightMenu.appendChild(this.textSections());
			return rightMenu;	
		};

		allTexts() {
			const label = {
				about: {
					ajaxID: 68,
					position: 'right',
					className: '--about',
					id: 'menuRightAbout',
					title: 'About'
				},
				contact: {
					ajaxID: 71,
					position: 'right',
					className: '--contact',
					id: 'menuRightContact',
					title: 'Contact'
				},
			};
			Object.entries(label).forEach( (entry, index) => {
				const [title, value] = entry;
				let className = value.className;
				let position = value.position;
				let id = value.id;
				let ajaxID = value.ajaxID;
				this.textSections( title, className, id, ajaxID, position );	
			});
		};

		textSections(title, className, id, ajaxID, position) {
			const textMenu = document.createElement("span");
			textMenu.setAttribute('class', 'o-menu__text '+className);
			textMenu.setAttribute('id', id);		
			textMenu.innerHTML = title;
			textMenu.setAttribute('data', "ajax:"+ajaxID);
			return textMenu;	
		};
	};

	export { Sections };


/******************************** Tailwind Screens ********************************
/**********************************************************************************/

	class Screens {

		//____________________________
		//
		// Constructor
		//____________________________

		constructor() {
			this.customScreens = require('./../../../tailwind.config.js').variants.theme.screens;
			this.sreensKeys = Object.keys(this.customScreens);
			this.screensValues = Object.values(this.customScreens);	
		};

		matchMediaScreens() {
			
			let sreensKeys = this.sreensKeys;
			let screensValues = this.screensValues;

			let i = 0;
			for ( const property in sreensKeys ) {
				const breakpoint = sreensKeys[i];
				let j = 0;
				let keys;
				for(  keys in screensValues ) {
					if (i == j) { 
						let size = screensValues[keys];
						const mediaQuery = `( (min-width: ${size['min']}) and (max-width: ${size['max']}) )`;
						
						// Load First Time Screen
						this.loadMediaQuery(mediaQuery, breakpoint);

						// Resize Screen
						this.resizeQuery(mediaQuery, breakpoint);
					}
					j++;
				}
			i++;
			}
		};
		
		loadMediaQuery(query, breakpoint) {
			const loadMediaQuery = () => {
				if( window.matchMedia(query).matches ) {
					window.addEventListener('load', function () {
						let data;
						switch(breakpoint) {
							// 2xlarge
							case '2xlarge': 
								data = { 'particleNumbers': 1500, 'maxRadius': 2 };
							break;
							
							// xlarge
							case '2xlarge': 
								data = {'particleNumbers': 1200, 'maxRadius': 2 };	
							break;
					
							// Large
							case 'large': 
								data = { 'particleNumbers': 1000, 'maxRadius': 1.9 };
							break;
						
							// Medium
							case 'medium': 
								data = { 'particleNumbers': 800, 'maxRadius': 1.8 };	
							break;	
	
							// Small
							case 'small': 
								data = { 'particleNumbers': 500, 'maxRadius': 1.7 };	
							break;
	
							// xsmall
							case 'xsmall': 
								data = { 'particleNumbers': 400, 'maxRadius': 1.7 };	
							break;
						};	// Switch
						console.log(data.particleNumbers);
						console.log(data.maxRadius);
					});	// Event Listener
				} // IF					
			};
			loadMediaQuery();
		}

		resizeQuery(query, breakpoint) {
			const resizeQuery = () => {
				if( window.matchMedia(query).matches ) {
					let data;
					switch(breakpoint) {
						// 2xlarge
						case '2xlarge': 
							data = { 'particleNumbers': 1500, 'maxRadius': 2 };
						break;
						
						// xlarge
						case '2xlarge': 
							data = {'particleNumbers': 1200, 'maxRadius': 2 };	
						break;
				
						// Large
						case 'large': 
							data = { 'particleNumbers': 1000, 'maxRadius': 1.9 };
						break;
					
						// Medium
						case 'medium': 
							data = { 'particleNumbers': 800, 'maxRadius': 1.8 };	
						break;	

						// Small
						case 'small': 
							data = { 'particleNumbers': 500, 'maxRadius': 1.7 };	
						break;

						// xsmall
						case 'xsmall': 
							data = { 'particleNumbers': 400, 'maxRadius': 1.7 };	
						break;
					};	// Switch
					console.log(data.particleNumbers);
					console.log(data.maxRadius);
				} // IF							
			};
			window.addEventListener('resize', resizeQuery);
		}
	};

	export { Screens };



	
	
	
	
	
