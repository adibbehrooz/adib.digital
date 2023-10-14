/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

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
		this.modalID 		= 'o-modal';
		this. modalClass 	= '.o-modal';


		// 2. Cover Class
		this.coverID 		= 'cover';
		this.coverClass 	= 'o-cover';


		// 3. Activate Class
		this.activeClass 	= '--active';
		this.deactiveClass = '--deactive';


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

		modalClass = document.querySelector(modalClass);

		if (modalClass.classList.contains(activeClass)) { // I. Modal is open

			//_________________________
			//
			// Hide Modal Container
			//_________________________

			modalClass.classList.remove(activeClass);
			modalClass.classList.add(deactiveClass);


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

			modalClass.classList.add(activeClass);
			modalClass.classList.remove(deactiveClass);
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
		coverSection.classList.add(postID); 
		coverSection.classList.add(postType); 
		coverSection.innerHTML = `
			<div class="[ o-cover o-cover__firstLayer `+coverDirection+ ` --active ]"></div>
			<div class="[ o-cover o-cover__secondLayer `+coverDirection+ ` --active ]"></div>
			<div class="[ o-cover o-cover__thirdLayer `+coverDirection+ ` --active ]"></div>
			<div class="[ o-cover o-cover__close `+coverDirection+ ` --active ][ zoom ]" style="z-index: 6;">
				<svg class="[ c-landscape__object  o-cover__close --transform ][ zoom ]" id="a" version="1.1" viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg">
					<g class="[ CUSTOM: o-cover__close__pathGroup ]" id="b" stroke="#000" >
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
	modalContentAnimationFadeIn(stars, multimedia, activeClass, deactiveClass, data) {

		// Convert String to HTML
		const parser = new DOMParser();
		const html = parser.parseFromString(data, 'text/html');

		const modalStars = html.querySelectorAll(stars);
		const modalMultimedias = html.querySelectorAll(multimedia);

		const modalStar = modalStars[0];
		const modalMultimedia = modalMultimedias[0];

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

	modalCloseClickEvent(coverDirection) {
		closeIcon = document.querySelector('.o-cover__close');
		closeIcon.addEventListener('click', () => {
			this.modalContainer(postID, postType, coverDirection, modalClass, activeClass, deactiveClass),
			this.removeModalCover(activeClass, deactiveClass);
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
			this.modalContentAnimationFadeIn(modalStars, modalMultimedia, activeClass, deactiveClass, data);
			this.modalCloseClickEvent(coverDirection);	
		})		
		.catch( err => console.log( err ) );
	};
    
};


export { Ajax };
