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
			customPostType 	: 	ajax_custom.customPostType,
			postSlug 		: 	ajax_custom.postSlug,
			postTitle 		: 	ajax_custom.postTitle,
		};   
		
		this.middleID 		= '#middle';
		
		// 1. Modal Class
		this.modalID 		= '#modal';
		this. modalClass 	= '.o-modal';


		// 2. Cover Class
		this.coverID 		= 'cover';
		this.coverClass 	= 'o-cover';


		// 3. Activate Class
		this.activeClass 	= '--active';
		this.deactiveClass = '--deactive';


		// 4. Scroll Class
		this.scrollClass	= ".o-modal__multimedia__content";
		
		// 5. Matchmedia
		this.mediumUP 		= window.matchMedia(`(min-width: 768px)`);
    }; 
  	
	//____________________________
	//
	// First 
	//____________________________   

    init() {
        this.openModalClickEvent();
    };

    openModalClickEvent(backendType, shapeID, coverDirection) {
        this.ajaxify(backendType, shapeID, coverDirection);
    };

	ajaxify(postKind, postSlug, coverDirection) {

		// Create and Send the request
		let fetchStatus;

		let data = new FormData();
		data.append( 'postSlug', postSlug);
		data.append( 'postKind', postKind);
		data.append( 'coverDirection', coverDirection);
		// ajaxModal
		/*
		fetch(ajax_custom.ajax_url, {
			method: "POST",
			body: data
		})
		.then(function (response) {
			// Save the response status in a variable to use later.
			fetchStatus = response.status;
			// Handle success
			// eg. Convert the response to JSON and return
			return response.json();
		}) 
		.then(function (json) {
			// Check if the response were success
			if (fetchStatus == 201) {
				// Use the converted JSON
				console.log(json);
			}
		})
		.catch(function (error){
			// Catch errors
			console.log(error);
		});
		*/
		fetch(ajax_custom.ajax_url, {
			method: "POST",
			body: data
		  })
		  .then((response) => response.json())
		  .then((data) => {
			if (data) {
				console.log(data);
			}
		  })
		  .catch((error) => {
			console.error(error);
		  });
	}
    
};

export { Ajax };
