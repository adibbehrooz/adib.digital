<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */
?>

	<!DOCTYPE html>
	
	<?php // global $language; $language = language(); // [Language Setting] ?>
	<?php // global $redux_demo; // [Theme Options] ?>

	<?php /* <html class="no-js" dir="<?php echo $language['languageWritingSystem'] ?>" lang="<?php echo $language['languageCodeReference'] ?>" > */ ?>
	<html class="no-js" dir="ltr" lang="en" >

	<head>

	<meta charset="utf-8">

	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<meta http-equiv="cleartype" content="on">

	<!-- Responsive and mobile friendly stuff -->
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title><?php // wp_title(''); ?></title>

	<?php //___________ Favicon ___________ ?>
	<?php //_______________________________ ?>
	
	<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/assets/images/favicon.ico" />
	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&display=swap" rel="stylesheet">
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

	<?php wp_head(); ?>
	
	<?php //___________ Google Analytics ___________ ?>
	<?php //________________________________________ ?>

	</head>

	<body <?php // body_class(); ?> >
    <?php 
		//____________________________________________________________________________//
		//
		//						              Header
		//____________________________________________________________________________//
	?>


	<?php 
		//____________________________________________________________________________//
		//
		//						          Edges [Sidebar]
		//____________________________________________________________________________//
	?>