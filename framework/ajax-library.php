<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */

	add_action( 'wp_ajax_ajaxModal', 'ajaxModal' );
	add_action( 'wp_ajax_nopriv_ajaxModal', 'ajaxModal' );
	
	function ajaxModal() {
        
		global $wpdb;
		global $post;
		$postSlug	= $_POST['postSlug'];
		$postKind 	= $_POST['postKind'];

		// Modal Post Argument
		$modalPostArgs = array(
			'post_type'     => 'technology',
			'post_status'   => 'publish',
			'meta_query'	=> array(
				array(
				    'key'		=> 'custom_technology_id',
				    'compare'	=> '=',
				    'value'		=> $postSlug,
				),
			),		
		);

		// Modal Page Argument
		$modalPageArgs = array(
			'post_type'     => 'page',
			'post_status'   => 'publish',
			'name' 			=> $postSlug,
		);

		if( $postKind == 'post'): 
			$modalArgs = $modalPostArgs; 
		else:  
			$modalArgs = $modalPageArgs; 
		endif;

		$modalQyery = new WP_Query($modalArgs);
		$modalCount = $modalQyery->post_count;

		if ( $modalQyery->have_posts() ) : while ($modalQyery->have_posts() ) : $modalQyery->the_post();
		$postID = $post->ID;	
	?>
		<?php // Container ?>
		<div class="[ Display: grid md:grid-cols-2 sm:grid-cols-1 ][ Tailwind: content ][ Custom: o-modal__container ]">

			<?php // Star and Commet ?>
			<div class="o-modal__stars">

				<svg class="[ c-landscape --modal ]" id="landscape" data-idgsap="landscapeGsap" version="1.1" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
				
				<g id="viewport">

						<?php // Stars Group 1 ?>
						<g id="starsGroup-1" class="[ c-landscape__stars --one ]">
							<?php $min = -300; $max = 300; $minR = 1; $maxR = 3; ?>
							<?php for ($i = 0; $i <= 4500; $i++): ?><circle class="c-landscape__star" cx="<?php echo mt_rand ($min*10, $max*10) / 10; ?>%" cy="<?php echo mt_rand ($min*10, $max*10) / 10; ?>%" r="<?php echo mt_rand ($minR*10, $maxR*10) / 10; ?>" ></circle><?php endfor; ?>
						</g>

						<?php // Stars Group 2 ?>
						<g id="starsGroup-2" class="[ c-landscape__stars --two ]">
							<?php $min = -250; $max = 250; $minR = 1; $maxR = 3; ?>
							<?php for ($i = 0; $i <= 4500; $i++): ?><circle class="c-landscape__star" cx="<?php echo mt_rand ($min*10, $max*10) / 10; ?>%" cy="<?php echo mt_rand ($min*10, $max*10) / 10; ?>%" r="<?php echo mt_rand ($minR*10, $maxR*10) / 10; ?>" ></circle><?php endfor; ?>
						</g>

						<?php // Stars Group 3 ?>
						<g id="starsGroup-3" class="[ c-landscape__stars --three ]">
							<?php $min = 0; $max = 100; $minR = 1; $maxR = 3; ?>
							<?php for ($i = 0; $i <= 400; $i++): ?><circle class="c-landscape__star" cx="<?php echo mt_rand ($min*10, $max*10) / 10; ?>%" cy="<?php echo mt_rand ($min*10, $max*10) / 10; ?>%" r="<?php echo mt_rand ($minR*10, $maxR*10) / 10; ?>"></circle><?php endfor; ?>
						</g>

						<?php // Comets ?>
						<g class="[ c-landscape__comets ]">
							<defs>
								<radialGradient id="comet-gradient" cx="0" cy=".4" r="0.4">
									<stop offset="0%" stop-color="rgba(255,255,255,.8)"></stop>
									<stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
								</radialGradient>
							</defs>
							
							<?php $min = -360; $max = 360; ?>
							<?php for ($i = 1; $i <= 25; $i++): ?>
							
							<g transform="rotate(<?php echo  mt_rand($min, $max); ?>)"><ellipse class="[ c-landscape__comet --type-<?php echo $i; ?> ]" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="3"></ellipse></g>
							<?php endfor; ?>
						</g>

					</g>

					<?php // Object SVG ?>

					<?php // 1. Coordinations ?>
					<?php // ________________ ?>

					<g 
						id="<?php echo $postSlug; ?>" 
						class="[ c-landscape__object ]" 
						data-type="fill"
						data-type="<?php echo $postType; ?>" 
						data-cover="--ltr"
						transform="matrix(
							<?php if( have_rows('custom_matrix_coordinations_group', $postID) ): while( have_rows('custom_matrix_coordinations_group', $postID) ): the_row(); ?>
								<?php
								for($matrix = 1; $matrix <= 6; $matrix++ ):
									if($matrix <= 5 ):
										echo get_sub_field('custom_coordination_'.$matrix)." "; 
									else:
										echo get_sub_field('custom_coordination_'.$matrix); 
									endif;
								endfor;
								?>
							<?php endwhile; endif; wp_reset_postdata(); ?>
							)

							scale(
							<?php if( have_rows('custom_scale_group', $postID) ): while( have_rows('custom_scale_group', $postID) ): the_row(); ?>
								<?php
									for($scale = 1; $scale <= 2; $scale++ ):
										if( $scale == 1 ):
											echo get_sub_field('custom_scale_'.$scale)." ";
										else:
											echo get_sub_field('custom_scale_'.$scale);
										endif;
									endfor;
								?>
							<?php $scale++; endwhile; endif; wp_reset_postdata(); ?>
							)
						">

						<?php echo get_field('custom_object_svg_code', $postID); ?>
					</g>

				</svg>
			</div>

			<div class="o-modal__multimedia">
				
				<div class="o-modal__multimedia__content --textResponsive">
					
					<h1 class="pt-32"><?php echo get_the_title(); ?></h1>

					<?php the_content(); ?>
					
					<?php // Correct ajax.js Modal Responsive Text ?>
					<p class="text-base sm:text-sm md:text-base lg:text-base"></p>

				</div>

			</div>

		</div>
	
		<?php endwhile; endif; wp_reset_postdata(); ?>

	<?php
	wp_die();
	}