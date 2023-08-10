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
	<title></title>
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
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
    <script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/assets/js/dist/sample.js"></script>

	<meta name="theme-color" content="#fafafa">
</head>
    <style>

/* Global styles come from external css https://codepen.io/GreenSock/pen/gOWxmWG.css*/

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
}

button {
  text-transform: none;
  margin: 0.25rem;
}

.nav.light {
  padding-top: 2rem;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: white;
}

.box {
    width: 300px;
    height: 300px;
}
.purple {
    background-color: purple;
}

    </style>
<body>


	


<div class="container">
  <div class="box purple"></div>
  <div class="nav light">
  <button class="play">play()</button>
  <button class="pause">pause()</button>
  <button class="resume">resume()</button>
  <button class="reverse">reverse()</button>
  <button class="restart">restart()</button>
</div>
</div>


<div class="box green"></div>
<div class="box purple"></div>
<div class="box blue"></div>

<script>
// target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second. 
gsap.to(".green", {rotation: 360, x: 100, duration: 1});

// target the element with a class of "purple" - rotate and move FROM 100px to the left over the course of 1 second. 
gsap.from(".purple", {rotation: -360, x: -100, duration: 1});

// target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second. 
gsap.fromTo(".blue", {x: -100},{rotation: 360, x: 100, duration: 1});


let nav = document.querySelector('.nav')

let tween = gsap.to(".purple", {
  duration: 4, 
  x: () => nav.offsetWidth, // animate by the px width of the nav
  xPercent: -100, // offset by the width of the box
  rotation: 360, 
  ease: "none", 
  paused: true
});

// click handlers for controlling the tween instance...
document.querySelector(".play").onclick = () => tween.play();
document.querySelector(".pause").onclick = () => tween.pause();
document.querySelector(".resume").onclick = () => tween.resume();
document.querySelector(".reverse").onclick = () => tween.reverse();
document.querySelector(".restart").onclick = () => tween.restart();
console.log("HIII");
</script>

</body>


</html>