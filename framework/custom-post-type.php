<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */

/*____________________________________________________________________________*/
/*
/*									LANGUAGE
/*____________________________________________________________________________*/

	//______________________ Language Post Type ______________________
	//________________________________________________________________


	add_action('init', 'language_custom_init');
	function language_custom_init() {
		$labels = array(
			'name'                          => _x('Languages', 'post type general name'),
			'singular_name'                 => _x('Language', 'post type singular name'),
			'add_new'						=> _x('Add New', 'Language'),
			'add_new_item'					=> __('Add New Language'),
			'edit_item'						=> __('Edit Language'),
			'new_item'						=> __('New Language'),
			'view_item'						=> __('View Language'),
			'all_items'						=> __( 'All Language' ),
			'search_items'					=> __('Search Language'),
			'not_found'						=>	__('No Languages found'),
			'not_found_in_trash'			=> __('No Languages found in Trash'),
			'filter_items_list'				=> __('Filter Languages List'),
			'parent_item_colon'				=> ''
		);
				
		$args = array(
			'labels'						=> $labels,
			'public'						=> true,
			'publicly_queryable'			=> true,
			'show_ui'						=> true,
			'show_in_menu'					=> true,
			'query_var'						=> true,
			'rewrite'						=> true,
			'capability_type'				=> 'post',
			'hierarchical'					=> false,
			'menu_position'					=> 5,
			'taxonomies'					=> '',
			'can_export'					=> true,
			'menu_icon'						=> 'dashicons-editor-spellcheck',
			'supports'						=> array('title','custom-fields'),
		);
				
		register_post_type('language',$args);
		flush_rewrite_rules( false );		 
	}


/*____________________________________________________________________________*/
/*
/*									Technology
/*____________________________________________________________________________*/

	//______________________ Technology Post Type ______________________
	//__________________________________________________________________

	add_action('init', 'technology_custom_init');
	function technology_custom_init() {
		$labels = array(
			'name'                          => _x( 'Technologies', 'post type general name', 'technology' ),
			'singular_name'                 => _x( 'Technology', 'post type singular name', 'technology' ),
			'menu_name'						=> _x( 'Technologies', 'Admin Menu text', 'technology' ),
			'name_admin_bar'				=> _x( 'Technology', 'Add New on Toolbar', 'technology' ),
			'add_new'                       => _x( 'Add Technology', 'technology' ),
			'add_new_item'                  => __( 'Add New Technology', 'technology' ),
			'new_item'                      => __( 'New Technology', 'technology' ),
			'edit_item'                     => __( 'Edit Technology', 'technology' ),
			'view_item'                     => __( 'View Technology', 'technology' ),
			'all_items'                     => __( 'All Technology', 'technology' ),
			'search_items'                  => __( 'Search Technology', 'technology' ),
			'parent_item_colon'				=> __( 'Parent Technologies:', 'technology' ),
			'not_found'                     => __( 'No Technologies found' ),
			'not_found_in_trash'			=> __( 'No Technologies found in Trash' ),
			'archives'						=> _x( 'Technology archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'technology' ),
			'insert_into_item'				=> _x( 'Insert into technology', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'technology' ),
			'uploaded_to_this_item'			=> _x( 'Uploaded to this technology', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'recipe' ),
			'filter_items_list'				=> __( 'Filter Technologies List' ),
			'items_list_navigation'			=> _x( 'Technologies list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'recipe' ),
			'items_list'					=> _x( 'Technologies list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'recipe' ),
	 
		);
		
		$args = array(
			'labels'                        => $labels,
			'public'                        => true,
			'publicly_queryable'            => true,
			'show_ui'                       => true,
			'show_in_menu'                  => true,
			'query_var'                     => true,
			'rewrite'                       => true,
			'capability_type'               => 'post',
			'hierarchical'                  => false,
			'menu_position'                 => 5,
			'taxonomies'                    => array( 'post_tag', 'types'),
			'can_export'                    => true,
			'menu_icon'                     => 'dashicons-format-aside',
			'show_in_rest'					=> true,
			'supports'                      => array('title','editor','thumbnail','custom-fields', 'comments', 'revisions'),
		);

		register_post_type('technology',$args);
		flush_rewrite_rules( false );	 
	}


	//______________________ Technology Taxonomy [TYPES] ______________________
	//_________________________________________________________________________

	$labels = array(
		'name' 							=> _x( 'Tech Categories', 'taxonomy general name' ),
		'singular_name' 				=> _x( 'Tech Category', 'taxonomy singular name' ),
		'search_items' 					=> __( 'Search Tech Categories' ),
		'popular_items'					=> __( 'Popular Tech Categories' ),
		'all_items' 					=> __( 'All Tech Categories' ),
		'parent_item' 					=> null,
		'parent_item_colon' 			=> null,
		'edit_item' 					=> __( 'Edit Tech Category' ),
		'update_item' 					=> __( 'Update Tech Category' ),
		'add_new_item' 					=> __( 'Add New Tech Category' ),
		'new_item_name' 				=> __( 'New Tech Category Name' ),
		'separate_items_with_commas' 	=> __( 'Separate Tech Categories with commas' ),
		'add_or_remove_items' 			=> __( 'Add or remove Tech Categories' ),
		'choose_from_most_used' 		=> __( 'Choose from the most used Service Categories' ),
	);

	register_taxonomy('types',array('technology'),
	array(
		'label'							=> __('types'),
		'labels'						=> $labels,
		'hierarchical'					=> true,
		'show_ui'						=> true,
		'query_var'						=> true,
		'show_in_rest'					=> true,
		'rewrite'						=> array('slug' => 'types'),
	));
?>