<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */

    //__________________________ Address __________________________
	//_____________________________________________________________

	define('THEME_DIR_JS_DIST'	, 	THEMEDIR.'/assets/js/dist');
	define('THEME_DIR_JS_SRC'	, 	THEMEDIR.'/assets/js/src');
	define('THEME_DIR_CSS'		, 	THEMEDIR.'/assets/css');


	//__________________________ Register Menus __________________________
	//____________________________________________________________________

	add_action( 'init', 'register_my_menus' );
	function register_my_menus() {
		register_nav_menus(
			array(
				'left_to_right' => __( 'LTR Main Menu' ),
				'right_to_left' => __( 'RTL Main Menu' ),
			)
		);
	}


	//__________________________ Register Javascript __________________________
	//_________________________________________________________________________

	add_action('init', 'theme_register_scripts');
	function theme_register_scripts() {

		//_________ I. Build _________

		wp_register_script(
			'build', //handle
			THEME_DIR_JS_DIST.'/build.min.js', //source
			null,
			'1.0', //version
			true //run in footer
		);

		//_________ II. Converter _________

		wp_register_script(
			'change', //handle
			THEME_DIR_JS_DIST.'/change.min.js', //source
			null,
			'1.0', //version
			true //run in footer
		);

		//_________ III. GSAP _________

		wp_register_script(
			'gsap', //handle
			'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', //source
			null,
			'3.12.2', //version
			false //run in footer
		);

		//_________ III. GSAP TEXT _________

		wp_register_script(
			'text', //handle
			'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js', //source
			array('gsap'),
			'3.12.2', //version
			false //run in footer
		);


	}

	add_action('wp_print_scripts', 'theme_enqueue_scripts');
	function theme_enqueue_scripts() {

		//_________ I. Not Admin _________

		if (!is_admin()):

			// 1. GSAP & GSAP TEXT
			wp_enqueue_script('text');

			// 2. Build or Converter
			if( is_page('converter') ): 
				wp_enqueue_script('change');
				
			else:
				wp_enqueue_script('build');
			endif;

			// 3 . Sample
			if( is_page(17)  && is_page('sample') ): wp_enqueue_script('sample'); endif;  //is_sample
		endif; //!is_admin

		//_________ II. Ajax _________

		global $post;
		global $wp_query;

		$postID 	= 	$post->ID;
		$postType 	= 	$post->post_type;
		$postSlug	=	$post->post_name;
		$postTitle	=	$post->post_title;

		wp_localize_script(
			'build',
			'ajax_custom',
			array(
				'ajaxurl'		=> admin_url( 'admin-ajax.php' ),
				'postID'		=> $postID,
				'postType'		=> $postType,
				'postSlug'		=> $postSlug,
				'postTitle'		=> $postTitle
			)
		);
	}


	//__________________________ Register CSS __________________________
	//__________________________________________________________________

	add_action('init', 'theme_register_styles');
	function theme_register_styles() {

		//_________ I. Main ____________

		wp_register_style(
			'build', //handle
			THEME_DIR_CSS.'/build.min.css', //source
			null, //dependencies
			'1.0' //version
		);

		//_________ II. Converter ____________

		wp_register_style(
			'change', //handle
			THEME_DIR_CSS.'/change.min.css', //source
			null, //dependencies
			'1.0' //version
		);

		//_________ III. Sample ____________

		wp_register_style(
			'sample', //handle
			THEME_DIR_CSS.'/sample.css', //source
			null, //dependencies
			'1.0' //version
		);

		//_________ IV. Dashboard [Admin] _________

		wp_register_style(
			'dashboard', //handle
			THEME_DIR_CSS.'/dashboard.min.css', //source
			null, //dependencies
			'1.0' //version
		);
	}

	add_action('wp_print_styles', 'theme_enqueue_styles');
	function theme_enqueue_styles() {

		if (!is_admin()):

			// 1. Dynamic CSS (Php in CSS)
			// wp_enqueue_style('dynamic-css', admin_url('admin-ajax.php').'?action=dynamic_css', $deps, $ver, $media);
			
			// 2. Build or Converter
			if( is_page('converter') ): 
				wp_enqueue_style('change');
			else:
				wp_enqueue_style('build');
			endif;

			// 3. Sample
			if( is_page(17) && is_page('sample') ): wp_enqueue_style('sample'); endif;
		else:
			wp_enqueue_style('dashboard');
		endif; //!is_admin
	}

	//___________ IV. Dynamic CSS ____________

	add_action('wp_ajax_dynamic_css', 'dynaminc_css');
	add_action('wp_ajax_nopriv_dynamic_css', 'dynaminc_css');
	function dynaminc_css() {
		require(get_template_directory().'/css/dynamic.css.php');
		exit;
	}

	//___________ V. Update CSS within in Admin ___________

	add_action('admin_enqueue_scripts', 'admin_style');
	function admin_style() {
		wp_enqueue_style('dashboard-min', THEME_DIR_CSS.'/dashboard.min.css');
	}
	?>
