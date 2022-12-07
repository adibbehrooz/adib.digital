<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */

	//__________________________ PATHS __________________________
	//___________________________________________________________

	define('FILEPATH', get_template_directory());
	define('THEMEDIR',  get_bloginfo( 'template_url' ) );
	define('FRAMEWORK', get_template_directory().'/framework');
	define('DIRECTORY', get_template_directory_uri());
	define('ADMIN_IMG_DIRECTORY', get_template_directory_uri().'/admin/assets/images/');	
	

	// Include Files
	require_once (FRAMEWORK . '/ajax-library.php');
	require_once (FRAMEWORK . '/custom-post-type.php');
	require_once (FRAMEWORK . '/language-library.php');
	require_once (FRAMEWORK . '/plugin-functions.php');
	require_once (FRAMEWORK . '/register.php');
	require_once (FRAMEWORK . '/theme-options.php');
	require_once (FRAMEWORK . '/woocommerce-functions.php');
	require_once (FRAMEWORK . '/wp-functions.php');
	require_once (FRAMEWORK . '/admin-functions.php');
?>