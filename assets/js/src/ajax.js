/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

import { Cursor } from "./canvas";

/******************************** Ajax ********************************
/**********************************************************************/


class Ajax {
 	
	//____________________________
	//
	// Constructor 
	//____________________________

	constructor() {	

        this.ajaxVariable = {
			postID 			: 	ajax_custom.postID,
			postType 		: 	ajax_custom.customPostType,
			postSlug 		: 	ajax_custom.postSlug,
			postTitle 		: 	ajax_custom.postTitle,
		};   
		
		this.middleID 		= '#middle';
		
		// 1. Modal Class
		this.modalID 		= 'modal';
		this. modalClass 	= '.o-modal';


		// 2. Cover Class
		this.coverID 		= 'cover';
		this.coverClass 	= 'o-cover';


		// 3. Activate Class
		this.activeClass 	= '--active';
		this.deactiveClass = '--deactive';

		this.container	= '.o-modal__container';
		this.containerID = 'container';

		// 4.Stars
		this.modalStars 	= '.o-modal__stars';
		this.starsID 		= 'stars';
		
		// Multimedia
		this.modalMultimedia = '.o-modal__multimedia';		
		this.multimediaID = 'multimedia';		

		// 4. Scroll Class
		this.scrollClass = ".o-modal__multimedia__content";
		
		// 5. Matchmedia
		this.mediumUP = window.matchMedia(`(min-width: 768px)`);
    }; 
  	
	//____________________________
	//
	// RUN! 
	//____________________________   

    init() {
        this.openModalClickEvent();
    };

    openModalClickEvent(ID, type, coverDir) {
        this.ajaxify(ID, type, coverDir);
    };

	// Create or Destroy Modal Container
	modalContainer(postID, postType, coverDirection, modalClass, activeClass, deactiveClass) {

		const modal = document.querySelector(modalClass);

		if (modal.classList.contains(activeClass)) { // I. Modal is open

			//_________________________
			//
			// Hide Modal Container
			//_________________________

			modal.classList.remove(activeClass);
			modal.classList.add(deactiveClass);


		} else { // II. Modal is close

			//__________________________
			//
			// 1. Create Beautiful Cover
			//__________________________

			this.addModalCover(postID, postType, coverDirection);

			//__________________________
			//
			// 2. Show Modal Container
			//__________________________

			modal.classList.add(activeClass);
			modal.classList.remove(deactiveClass);
		}
	};

	//_______________________________
	//
	// Cover 
	//_______________________________

	addModalCover(postID, postType, coverDirection) {
		let modalID = this.modalID;
		let coverID = this.coverID;
		let coverClass = this.coverClass;
		let activeClass = this.activeClass;
			
		const modalSection = document.querySelector(modalID);
		
		// Create Cover Section
		const coverSection = document.createElement('section');
		coverSection.setAttribute('id', coverID);
		coverSection.classList.add(coverClass); 
		coverSection.classList.add(activeClass);
		coverSection.classList.add(postType+'-'+postID); 
		coverSection.innerHTML = `
			<div class="[ o-cover o-cover__firstLayer `+coverDirection+ ` --active ]"></div>
			<div class="[ o-cover o-cover__secondLayer `+coverDirection+ ` --active ]"></div>
			<div class="[ o-cover o-cover__thirdLayer `+coverDirection+ ` --active ]"></div>
			<div class="[ o-cover o-cover__close `+coverDirection+ ` --active ][ zoom ]" style="z-index: 6;">
				<svg class="[ c-landscape__object  o-cover__close --transform ][ zoom ]" version="1.1" viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg">
					<g class="[ CUSTOM: o-cover__close__pathGroup ]" stroke="#000" >
						<path transform="matrix(8 0 0 8 75.778 8)" d="m67.937 0-67.937 67.826" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
						<path transform="matrix(8 0 0 8 75.778 8)" d="m-5.4031e-5 0 67.937 67.826" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
					<g>
				</svg>
			</div>
		`;

		document.body.insertBefore(coverSection, modalSection);
	};

	removeModalCover(activeClass, deactiveClass) {

		const modalValues 	= ['o-cover', 'o-cover__firstLayer', 'o-cover__secondLayer', 'o-cover__thirdLayer', 'o-cover__close'];
		const modalKeys 	= ['cover', 'firstLayer', 'secondLayer', 'thirdLayer', 'close'];

		modalValues.forEach(function(itemValue, indexValue) {
			modalKeys.forEach(function(itemKey, indexKey) {
				if( indexValue == indexKey ) {
					itemKey = document.querySelector('.'+itemValue);
					
					if(itemKey.classList.contains(activeClass)) {
						if(indexKey == 0) {
							setTimeout(function() {
								itemKey.remove();
							}, 2500);
						}
						if( indexKey != 0 ) {
							itemKey.classList.remove(activeClass);
							itemKey.classList.add(deactiveClass);
						}
					}
				}
			});
		});

	};

	// Create Or Destroy Modal Content Animation
	modalContentAnimationFade(container, stars, multimedia, activeClass, deactiveClass, data) {
		
		const modalDocument = document.querySelector(container);
		const followCircle = document.getElementById('followCircle');

		// Normal Cursor in Modal Page
		/*
		modalDocument.addEventListener('mouseover', () => {
			gsap.to(followCircle, 0.1, {
				opacity: 1,
				scale: 1
			});		
		});
		*/

		// Big Cursor in Modal Page (Mouse Over Close Icon & Links)
		const links = document.querySelectorAll('a');
		const closeIcon = document.querySelectorAll('.o-cover__close');
		const gsapCursor = {
			'links' 	: links,
			'closeIcon'	: closeIcon
		};

		Object.keys(gsapCursor).forEach(key => {
			gsapCursor[key].forEach((value, index) => {
				value.classList.add('zoom');
				value.addEventListener('mouseover', () => {
					value.classList.add('zoom');
					console.log("Hover");
					// GSAP
					gsap.to(followCircle, 0.1, {
						opacity: 0.7,
						scale: 3
					});
				});	
				value.addEventListener('mouseout', () => {
					// GSAP
					gsap.to(followCircle, 0.1, {
						opacity: 1,
						scale: 1
					});			
				});	
			});	
		});	

		/*
		Object.entries(links).forEach( (entry, index) => {
			const [key, value] = entry;
			value.classList.add('zoom');
			value.addEventListener('mouseover', () => {
				value.classList.add('zoom');
				console.log("Hover");
				// GSAP
				gsap.to(followCircle, 0.1, {
					opacity: 0.7,
					scale: 3
				});
			});	
			value.addEventListener('mouseout', () => {
				// GSAP
				gsap.to(followCircle, 0.1, {
					opacity: 1,
					scale: 1
				});			
			});		
		});
		*/

		const modalStar = document.querySelector(stars);
		const modalMultimedia = document.querySelector(multimedia);

		if (modalStar.classList.contains(activeClass)) { // I. Modal is open

			//___________________
			//
			// Hide Modal Content
			//___________________

			// 1. Stars
			modalStar.classList.remove(activeClass);
			modalStar.classList.add(deactiveClass);
				
			// 2. Multimedia
			modalMultimedia.classList.remove(activeClass);
			modalMultimedia.classList.add(deactiveClass);

		} else { // II. Modal is close

			//___________________
			//
			// Show Modal Content
			//___________________

			// 1. Stars
			modalStar.classList.add(activeClass);
			modalStar.classList.remove(deactiveClass);

			// 2. Multimedia
			modalMultimedia.classList.add(activeClass);
			modalMultimedia.classList.remove(deactiveClass);
		}
	};

	removeModalDataFade(modalID) {
		setTimeout(function() { // start a delay
			document.getElementById(modalID).innerHTML = '';
		}, 3000); // wait to run after 3 seconds  
	};

	modalCloseClickEvent(postID, postType, coverDirection, modalClass, activeClass, deactiveClass) {
		const modalID = this.modalID;
		const closeIcon = document.querySelector('.o-cover__close');
		closeIcon.addEventListener('click', () => {
			// I. Deactive Modal Container
			this.modalContainer(postID, postType, coverDirection, modalClass, activeClass, deactiveClass);

			// II. Remove Cover
			this.removeModalCover(activeClass, deactiveClass);

			// III. Rmove Data
			this.removeModalDataFade(modalID);
		});
	}

	//_______________________________
	//
	// Ajax 
	//_______________________________

	async ajaxify(postID, postType, coverDirection) {

		let modalClass = this.modalClass;
		let activeClass = this.activeClass;
		let deactiveClass = this.deactiveClass;

		let container = this.container;
		let modalStars = this.modalStars;
		let modalMultimedia = this.modalMultimedia;
		
		let formData = new FormData();

		formData.append( 'action', 'ajaxModal' );
		formData.append( 'postID', postID );
		formData.append( 'postType', postType );
		formData.append( 'coverDirection', coverDirection );

		fetch( ajax_custom.ajaxurl, {
			method: 		'POST',
			mode: 			"cors",
			cache: 			"no-cache",
			credentials: 	"same-origin",
			redirect: 		"follow",
			referrerPolicy: "no-referrer",
			body: formData,
		}) 
		.then( 
			response => response.text(),
		)
		.then( 
			this.modalContainer(postID, postType, coverDirection, modalClass, activeClass, deactiveClass),
		)
		.then((data) => {
			document.getElementById(this.modalID).innerHTML = data;
			this.modalContentAnimationFade(container, modalStars, modalMultimedia, activeClass, deactiveClass, data);
		})
		.then( 
			this.modalCloseClickEvent(postID, postType, coverDirection, modalClass, activeClass, deactiveClass),
		)
		.catch( err => console.log( err ) );
	};
    
};


export { Ajax };
