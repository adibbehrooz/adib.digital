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
    }; 
  	
	//____________________________
	//
	// First 
	//____________________________   

    init() {
        this.openModalClickEvent();
    };

    openModalClickEvent(shapeID, backendType, coverDirection) {
        // ajaxModal(landscapeObjectKind, landscapeObjectID, landscapecoverDirection);
        console.log(shapeID, backendType, coverDirection);
    };
    
};

export { Ajax };
