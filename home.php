<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */
?>
	<?php get_header(); ?>

	<?php
	//____________________________________________________________________________
	//
	//									Middle
	//____________________________________________________________________________
	?>

	<section id="middle" class="[ c-landscapeFrame ]" data-renderType='canvas'>

		<?php
			//____________________________________________________________________________
			//
			//								II. Custom Design
			//____________________________________________________________________________
		?>
		
		<canvas id="canvas"></canvas>
		<div class="absolute top-0">
			<canvas id="firstwaves"></canvas>
		</div>
			
		<?php
		/*
		<div class="absolute top-0">
			<canvas id="firstwaves"></canvas>
		</div>
	
		<div class="absolute top-8">
			<canvas id="secondWaves"></canvas>
		</div>

		<div class="absolute top-16">
			<canvas id="thirdWaves"></canvas>
		</div>

		<div class="absolute top-24">
			<canvas id="fourthWaves"></canvas>
		</div>
		*/
		?>


	</section>

	<?php get_footer(); ?>
