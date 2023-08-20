<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 * Template Name: Template-Sample 
 */
?>

<!doctype html>

<html class="no-js" lang="">

	<head>
		<meta charset="utf-8">
		<title>Sample</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<meta property="og:title" content="">
		<meta property="og:type" content="">
		<meta property="og:url" content="">
		<meta property="og:image" content="">

		<link rel="manifest" href="site.webmanifest">

		<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/assets/images/favicon.ico" />
		<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory'); ?>/assets/css/main.min.css" />
		
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Flip.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Observer.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/EaselPlugin.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/MotionPathPlugin.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/PixiPlugin.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"></script>

		<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/assets/js/dist/sample.js"></script>

		<meta name="theme-color" content="#fafafa">
	</head>

	<body>

	<div class="box"></div>
	<style>
		.box {
			width: 300px;
			height: 300px;
			background: green;
		}
	</style>

	<script>
		gsap.to(".box", {rotation: 27, x: 100, duration: 1});
	</script>

	</body>


</html>