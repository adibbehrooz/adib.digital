<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */

	//__________________________ Remove WP Facts __________________________
	//_____________________________________________________________________

	add_action('init', 'roots_head_cleanup');
	function roots_head_cleanup() {
		remove_action('wp_head', 'feed_links', 2);
		remove_action('wp_head', 'feed_links_extra', 3);
		remove_action('wp_head', 'rsd_link');
		remove_action('wp_head', 'wlwmanifest_link');
		remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
		remove_action('wp_head', 'wp_generator');
		remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

		global $wp_widget_factory;
		remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
		add_filter('use_default_gallery_style', '__return_null');
	}


	//__________________________ Thumbnail Premission __________________________
	//__________________________________________________________________________

	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 100, 100, TRUE );
	add_image_size( 'custom-post-size', 300, 200, FALSE ); 
	add_image_size( 'second-custom-post-size', 160, 9999 );
	get_option('thumbnail_crop') == 1;


	//__________________________ Multimedia Size for upload __________________________
	//________________________________________________________________________________

	@ini_set( 'upload_max_size' , '64M' );
	@ini_set( 'post_max_size', '64M');
	@ini_set( 'max_execution_time', '300' );


	//__________________________ Changing the wp_mail from address __________________________	 
	//_______________________________________________________________________________________

	add_filter( 'wp_mail_from', 'my_mail_from' );
	function my_mail_from( $email ) {
		return 'info@adibwebsite.com';
	}
	
	 add_filter( 'wp_mail_from_name', 'my_mail_from_name' );
	function my_mail_from_name( $name ) {
		return 'Adibwebsite Website';
	}


	//__________________________ Remove Wordpress Generator __________________________ 
	//________________________________________________________________________________		

	add_filter('the_generator','hide_wp_vers'); 
	function hide_wp_vers() {
		return '';
	}
	

	//__________________________ Custom Default Avatar __________________________ 
	//___________________________________________________________________________	

	add_filter( 'avatar_defaults', 'new_gravatar' );
	function new_gravatar ($avatar_defaults) {
		$myavatar = get_bloginfo('template_directory') . '/images/custom-gravatar.png';
		$avatar_defaults[$myavatar] = "Internet";
		return $avatar_defaults;
	}


	//__________________________ Add Class to link in Menu __________________________ 
	//_______________________________________________________________________________  

	add_filter( 'nav_menu_link_attributes', 'add_menu_link_class', 1, 3 );
	function add_menu_link_class( $atts, $item, $args ) {
		if (property_exists($args, 'link_class')) 
			$atts['class'] = $args->link_class;
		return $atts;
	}