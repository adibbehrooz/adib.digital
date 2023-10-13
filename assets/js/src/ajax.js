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


		// 4. Scroll Class
		this.scrollClass = ".o-modal__multimedia__content";
		
		// 5. Matchmedia
		this.mediumUP = window.matchMedia(`(min-width: 768px)`);
    }; 
  	
	//____________________________
	//
	// First 
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

		//_______________________________________________________________
		//
		//						Cover Design
		//_______________________________________________________________

		//______________ Add Cover ______________
		//_______________________________________

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
		}

	ajaxify(postID, postType, coverDirection) {

		let modalClass = this.modalClass;
		let activeClass = this.activeClass;
		let deactiveClass = this.deactiveClass;
		
		let formData = new FormData();

		formData.append( 'action', 'ajaxModal' );
		formData.append( 'postID', postID );
		formData.append( 'postType', postType );
		formData.append( 'coverDirection', coverDirection );
		
		fetch( ajax_custom.ajaxurl, {
			method: 'POST',
			body: formData,
		}) 
		.then( 
			res => res.text(),
			this.modalContainer(postID, postType, coverDirection, modalClass, activeClass, deactiveClass)
		)
		.then( 
			data => document.getElementById(this.modalID).innerHTML = data
		)
		.catch( err => console.log( err ) );

	};
    
};


export { Ajax };
