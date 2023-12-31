<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */
?>

	<!DOCTYPE html>
	
	<?php global $language; $language = language(); // [Language Setting] ?>
	<?php global $redux_demo; // [Theme Options] ?>

	<html class="no-js" dir="<?php echo $language['languageWritingSystem'] ?>" lang="<?php echo $language['languageCodeReference'] ?>" >

	<head>

	<meta charset="utf-8">

	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<meta http-equiv="cleartype" content="on">

	<!-- Responsive and mobile friendly stuff -->
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1">


	<title><?php wp_title(''); ?></title>

	<?php //___________ Favicon ___________ ?>
	<?php //_______________________________ ?>

	<?php get_template_part( 'favicon' ); ?>
	
	<?php //___________ CSS ___________ ?>
	<?php //___________________________ ?>

	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />

	<?php //___________ Google Fonts ___________ ?>
	<?php //____________________________________ ?>

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;600&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400&display=swap" rel="stylesheet">

	<?php //___________ Misc ___________ ?>
	<?php //____________________________ ?>

	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

	<?php wp_head(); ?>
	
	<?php //___________ Google Analytics ___________ ?>
	<?php //________________________________________ ?>

	<script async src="https://www.googletagmanager.com/gtag/js?id=G-QSN65Q3KW8"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-QSN65Q3KW8');
	</script>

	</head>

	<body <?php body_class(); ?> >
		
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
