/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Canvas ********************************
/************************************************************************/

	// Ajax Module
	import { Ajax } from './ajax';
	const ajax = new Ajax();

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
			middleSection.setAttribute('data-render', 'canvas');
			document.body.appendChild(middleSection);
			return middleSection;			
		};

		allCanvas() {
			const middleSection = this.createSection();
			
			// I. Sky Canvas
			const skyCanvas = () => {
				const canvasSky = document.createElement("canvas");
				canvasSky.setAttribute('class', 'o-canvas__sky');
				canvasSky.setAttribute('id', 'canvas__sky');
				canvasSky.width = window.innerWidth;
				canvasSky.height = window.innerHeight;	
				return canvasSky;		
			};

			// II. Pan Canvas
			const panCanvas = () => {
				const canvasPan = document.createElement("canvas");
				canvasPan.setAttribute('class', 'o-canvas__pan');
				canvasPan.setAttribute('id', 'canvas__pan');
				return canvasPan;
			};

			// III. Append All Canvas To Middle Section
			const totalCanvas = () => {
				middleSection.appendChild(panCanvas());
				middleSection.appendChild(skyCanvas());
			};
			totalCanvas();
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
			this.allMenu();
			this.modal();
			this._eventListeners();
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
			menuSection.setAttribute('data-render', 'section');
			document.body.appendChild(menuSection);
			return menuSection;
		};
		
		texts() {
			const labels = {
				about: {
					ajaxID: 68, // AjaxID (PostID)
					id: 'about',// HTML id='about'
					postType: 'page', // Post OR Page
					postTitle: 'About', // Show Top of The 'About' Page
					postSlug: 'about', // Page Slug (Manipulate in Ajax)
					coverDirection: '--ttb',
					navbarPosition: 'right',
					className: '--right --about',
					title: 'About', // Show In Home Page
					URL: ''
				},
				contact: {
					ajaxID: 71, // AjaxID (PostID)
					id: 'contact',  // HTML id='contact'
					postType: 'page', // Post OR Page
					postTitle: 'Contact', // Show Top of The 'Contact' Page
					postSlug: 'contact', // Page Slug (Manipulate in Ajax)
					coverDirection: '--ttb',
					navbarPosition: 'left',
					className: '--left --contact',
					title: 'Contact', // Show In Home Page
					URL: ''
				},
				projects: {
					ajaxID: 74, // AjaxID (PostID)
					id: 'projects',  // HTML id='projects'
					postType: 'page', // Post OR Page
					postTitle: 'Projects', // Show Top of The 'Projects' Page
					postSlug: 'projects', // Page Slug (Manipulate in Ajax)
					coverDirection: '--ttb',
					navbarPosition: 'left',
					className: '--left --projects',
					title: 'Projects', // Show In Home Page
					URL: ''
				},
				source: {
					ajaxID: '',
					id: 'source',
					postType: 'link',
					postTitle: '',
					postSlug: '',		
					coverDirection: '',
					navbarPosition: 'right',
					className: '--right --source',
					title: 'Source',
					URL: 'https://github.com/adibbehrooz/adib.online'
				},
			};
			return labels;
		};

		allMenu() {
			const menu = this.menuSection();
			menu.appendChild(this.leftNavbar());
			menu.appendChild(this.rightNavbar());
		};

		leftNavbar() {
			// Create Div
			const leftMenu = document.createElement("div");
			leftMenu.setAttribute('class', 'o-menu --left');
			leftMenu.setAttribute('id', 'menuLeft');	

			// Append <span> Child
			const labels = this.texts();
			Object.entries(labels).forEach( (entry, index) => {
				const [key, value] = entry;
				let ajaxID = value.ajaxID,
					id = value.id,
					postTitle = value.postTitle,
					postType = value.postType,
					postSlug = value.postSlug,
					coverDirection = value.coverDirection,
					navbarPosition = value.navbarPosition, 
					className = value.className, 
					homePageTitle = value.title, 
					URL = value.URL;

				if(navbarPosition == 'left') 
				leftMenu.appendChild(this.textSections(ajaxID, id, postTitle, postType, postSlug, coverDirection, className, homePageTitle, URL));
			
			});
			return leftMenu;	
		};

		rightNavbar() {
			// Create Div
			const rightMenu = document.createElement("div");
			rightMenu.setAttribute('class', 'o-menu --right');
			rightMenu.setAttribute('id', 'menuRight');		
			
			// Append <span> Child
			const labels = this.texts();
			Object.entries(labels).forEach( (entry, index) => {
				const [key, value] = entry;
				let ajaxID = value.ajaxID,
					id = value.id,
					postTitle = value.postTitle,
					postType = value.postType,
					postSlug = value.postSlug,
					coverDirection = value.coverDirection,
					navbarPosition = value.navbarPosition, 
					className = value.className, 
					homePageTitle = value.title, 
					URL = value.URL;

				if(navbarPosition == 'right') 
				rightMenu.appendChild(this.textSections(ajaxID, id, postTitle, postType, postSlug, coverDirection, className, homePageTitle, URL));
	
			});	
			return rightMenu;	
		};

		textSections(ajaxID, id, postTitle, postType, postSlug, coverDirection, className, homePageTitle, URL) {
			const textMenu = document.createElement("span");
			
			// Title (Home Page)
			textMenu.innerHTML = homePageTitle;

			// ajaxID
			if(ajaxID) 
			textMenu.setAttribute("data-ajax", ajaxID);	
			
			// HTML ID id='sample'
			textMenu.setAttribute('id', id);	

			// ClassName
			textMenu.setAttribute('class', 'o-menu__text '+ className);

			// postTitle
			if(postTitle) 
			textMenu.setAttribute("data-postTitle", postTitle);

			// postSlug
			if(postSlug) 
			textMenu.setAttribute("data-postSlug", postSlug);

			// postType
			if(postType) 
			textMenu.setAttribute("data-postType", postType);	
			
			// coverDirection
			if(coverDirection) 
			textMenu.setAttribute("data-coverDirection", coverDirection);	
			
			// URL
			if(URL) 
			textMenu.setAttribute("data-URL", URL);	

			return textMenu;
		};

		onPointerMove(ajaxID, postType, postTitle, postSlug, coverDirection, eventName) {
			// Contorol Cursor Behaviour in Open Modal
			const followCircle = document.getElementById('followCircle');
			
			if( eventName == 'mouseover') {
				// GSAP
				gsap.to(followCircle, 0.1, {
					opacity: 0.7,
					scale: 3
				});
			} else if(eventName == 'mouseout') {
				// GSAP
				gsap.to(followCircle, 0.1, {
					opacity: 1,
					scale: 1
				});					
			} else if(eventName == 'click') {
				// Ajax
				ajax.openAjaxModal(ajaxID, postType, postTitle, postSlug, coverDirection);				
			}
		};

		//____________________________
		//
		// Event Listeners
		//____________________________	
		
		_eventListeners() {
			
			const links = document.querySelectorAll(".o-menu__text");
			const gsapCursor = {
				'links' : links,
			};

			// Mouse Movement
			//_____________________________________
		
			Object.keys(gsapCursor).forEach(key => {
				gsapCursor[key].forEach((value, index) => {
					// Return data-*
					let ajaxID = value.getAttribute('data-ajax');
					let postType = value.getAttribute('data-posttype');
					let postTitle = value.getAttribute('data-posttitle');
					let postSlug = value.getAttribute('data-postslug');
					let coverDirection = value.getAttribute('data-coverdirection');
					let URL = value.getAttribute('data-url');
					
					// Mouse Over
					value.addEventListener('mouseover', () => {
						let eventName = 'mouseover'
						this.onPointerMove(ajaxID, postType, postTitle, postSlug, coverDirection, eventName); 
					});	

					// Mouse Out
					value.addEventListener('mouseout', () => {
						let eventName = 'mouseout'
						this.onPointerMove(ajaxID, postType, postTitle, postSlug, coverDirection, eventName); 
					});	

					// Click
					value.addEventListener('click', () => {
						let eventName = 'click'
						if(postType == 'link') {
							window.open(URL, '_blank');
						} else {
							this.onPointerMove(ajaxID, postType, postTitle, postSlug, coverDirection, eventName); 
						}
					});	
				});	
			});	
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



	
	
	
	
	
