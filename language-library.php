<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */


	//__________________________ Language [ ACF ] __________________________ 
	//______________________________________________________________________

	function language() {

		global $post;

		//_______________ I. Taxonomy _______________

		if( is_tax() ):
			$taxonomy = get_taxonomy ( get_query_var('taxonomy') );
			$taxonomyName = $taxonomy->name;

		//_______________ II. Terms _______________

		$term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );
		$termId = $term->term_id;
		$termTaxonomyID = $taxonomyName.'_'.$termId;
		$selectLanguage = get_field('custom_select_language', $termTaxonomyID);

		else:
	
			//_______________ II. a. Home _______________

			if( is_home() || is_front_page() ):
			$postID = 5;
			else:

			//_______________ II. b. Page, Post, ... _______________

			$postID = $post->ID;
			endif; 

		$selectLanguage = get_field('custom_select_language', $postID);

		endif; 

		// override $post
		$post = $selectLanguage;
		setup_postdata( $post );
			$languageID					        = get_field('custom_language_id'); 
			$languageNameInEnglish			    = get_field('custom_language_name_in_english'); 
			$languageNameInSameLanguage	        = get_field('custom_language_name_in_same_language'); 
			$languageWritingSystem			    = get_field('custom_language_writing_system'); 
			$languageCodeReference			    = get_field('custom_language_code_reference'); 
			$languageHomePage				    = get_field('custom_language_home_page'); 
		wp_reset_postdata(); 

		return 
		array ( 
			"postID"=> $postID,
			"languageID"					    => $languageID, 
			"languageNameInEnglish"		        => $languageNameInEnglish, 
			"languageNameInSameLanguage"	    => $languageNameInSameLanguage, 
			"languageWritingSystem"             => $languageWritingSystem, 
			"languageCodeReference"             => $languageCodeReference, 
			"languageHomePage"                  => $languageHomePage
		);
	}

	//__________________________ Language Home Page __________________________ 
	//________________________________________________________________________

	function languageHomePage() {

		global $post;

		$languageArgs		 = array(
			'post_type'	 => 'language',
			'post_status'	 => 'publish',
			'order'		 => 'DESC'
		);

		$languageQuery = new WP_Query($languageArgs);
		$productArgsCount = (int)$languageQuery->found_posts;

		$homeName = array();
		while ( $languageQuery->have_posts() ) : $languageQuery->the_post();

			$languageHomePage = get_field('custom_language_home_page', $post->ID);
			$post = $languageHomePage;
			setup_postdata( $post );
				array_push($homeName, $post->post_name );
			wp_reset_postdata(); 

		endwhile;

		return $homeName;
	}
	?>