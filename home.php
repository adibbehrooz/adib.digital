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

	<section id="middle" class="[ c-landscapeFrame ]" data-renderType='svg'>

	<?php
		//____________________________________________________________________________
		//
		//								II. Custom Design
		//____________________________________________________________________________
	?>

		<svg class="[ c-landscape ]" id="landscape" viewBox="-800 -400 2900 1510" data-idgsap="landscapeGsap" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">

			<g id="svgPanzoomViewport" class="svgPanzoomViewport">

				<g id="viewport">

				<?php // Object: Mountains ?>
					<g id="landscapeMountain" class="[ c-landscape__object--unuseTemporary ]">

						<?php // Stable ?>
						<g class="[ CUSTOM:: c-landscape__pathGroup --stable --mountain ]">
							<path class="[ c-landscape__slope ]" id="c" d="m788.4 314.76-34.468 71.853 0.0785-0.0427 0.0151 0.0149"  stroke-dasharray="4.00000011, 0.50000001" />
							<path class="[ c-landscape__slope ]" id="d" d="m855.08 314.65-17.68 72.058"  stroke-dasharray="3, 0.4" />
							<path class="[ c-landscape__slope ]" id="e" d="m750.59 449.52 3.3729-62.853"  stroke-dasharray="3, 0.4" />
							<path class="[ c-landscape__slope ]" id="f" d="m750.68 449.77 35.64-62.968"  stroke-dasharray="3.00000006, 0.50000001" />
							<path class="[ c-landscape__slope ]" id="g" d="m823.69 458.82c2.7281-13.742 8.1218-43.011 13.766-72.472"  stroke-dasharray="3.00000006, 0.50000001" />
							<path class="[ c-landscape__slope ]" id="ad" d="m793.35 339.32-32.14 47.589"  stroke-dasharray="3.00000006, 0.50000001" stroke-width=".5"/>
							<path class="[ c-landscape__slope ]" id="ae" d="m291.24 292.49 10.299 93.68"  stroke-dasharray="3.00000006, 0.50000001" stroke-width=".5"/>
							<path class="[ c-landscape__slope ]" id="l" d="m225.71 386.65 52.205 76.818 40.608 62.624 89.451 36.323 48.569-103.02 9.3392-27.525-9.2985-18.712 11.418 3.6936 13.754-30.008" />
							<path class="[ c-landscape__slope ]" id="m" d="m225.78 386.74 65.3-94.129 54.888 94.096" />
							<path class="[ c-landscape__slope ]" id="n" d="m301.41 386.67 41.719-67.359 39.734 67.049" />
							<path class="[ c-landscape__slope ]" id="o" d="m319.45 386.72 59.284-86.294 60.339 86.119" />
							<path class="[ c-landscape__slope ]" id="p" d="m378.68 300.49 4.2348 85.972"  stroke-dasharray="3, 0.4" stroke-width=".4"/>
							<path class="[ c-landscape__slope ]" id="q" d="m378.38 301.28c0.0555 0.76165-32.585 85.48-32.585 85.48"  stroke-dasharray="3.00000006, 0.50000001" stroke-width=".4"/>
							<path class="[ c-landscape__slope ]" id="r" d="m481.69 386.81-24.015-38.402-29.459 38.432 0.52266-0.0333" />
							<path class="[ c-landscape__slope ]" id="s" d="m402.75 385.8 105.36-137.57 82.174 138.24" />
							<path class="[ c-landscape__slope ]" id="t" d="m495.4 386.81 82.618-98.059 65.301 98.49" />
							<path class="[ c-landscape__slope ]" id="u" d="m734.59 386.86-126.05-152.8-146.66 152.84" />
							<path class="[ c-landscape__slope ]" id="v" d="m733.05 468.8-161.96 137-99.844-30.562-9.0266-42.178-52.511 29.874-1.7553 0.32499-1.0123-0.80722" />
							<path class="[ c-landscape__slope ]" id="w" d="m608.53 234.12-18.857 151.3c0.38564 0.78014 0.27276 0.31514 0.27276 0.31514"  stroke-dasharray="3.00000008, 0.50000001" stroke-width=".5"/>
							<path class="[ c-landscape__slope ]" id="x" d="m507.78 248.55-79.1 137.83"  stroke-dasharray="3.00000006, 0.50000001" stroke-width=".5"/>
							<path class="[ c-landscape__slope ]" id="y" d="m481.69 386.82-19.451 146.19"  stroke-dasharray="3, 0.4" stroke-width=".5"/>
							<path class="[ c-landscape__slope ]" id="z" d="m902.14 386.83-22.994 28.717 4.021 59.065-39.498-43.906-3.5357 79.658-11.476-29.237-4.0172-22.673-17.939 111.4-40.085-26.598-14.932-93.689-17.686 19.165-18.888-81.79" />
							<path class="[ c-landscape__slope ]" id="aa" d="m827.31 386.79-34.177-47.601-38.104 47.651" />
							<path class="[ c-landscape__slope ]" id="ab" d="m836.43 386.76-47.907-72.089-55.287 72.193" />
							<path class="[ c-landscape__slope ]" id="ac" d="m902.18 386.8-46.883-72.174-53.682 72.111" />
							<path class="[ c-landscape__slope ]" id="h" d="m843.64 430.59 43.274-43.377-7.6989 28.393" />
						</g>
					</g>

					<?php // Underwater Lines ?>
					<g>
						<g stroke-width=".15" filter="url(#turb)">
							<?php $min = -400; $max = 300; $minR = 1; $maxR = 3; ?>
							<?php for ($i = 0, $mx = 386.89; $i <= 70; $i++, $mx+=20): ?>

							<path id="feel-the-wave-<?php echo $i; ?>" class="[ c-landscape__wave c-landscape__wave-<?php echo $i; ?> ]" d="m-2500 <?php echo $mx; ?> 5500.1-0.03632"/>
							<?php endfor; ?>
						</g>

						<defs>
							<filter id="turb">
								<feTurbulence id="turbwave" type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="turbulence_3" data-filterId="3" />
								<feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="turbulence_3" scale="15" />
							</filter>
						</defs>
					</g>

				</g>
			</g>
		</svg>

	</section>

	<?php get_footer(); ?>
