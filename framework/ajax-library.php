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

		$postID		= $_POST['postID'];
		$postType	= $_POST['postType'];

		// Modal Post Argument
		//____________________

		$modalPostArgs = array(
			'post_type'     => 'technology',
			'post_status'   => 'publish',
			'p'				=> $postID
		);


		// Modal Page Argument
		//____________________

		$modalPageArgs = array(
			'post_type'     => 'page',
			'post_status'   => 'publish',
			'page_id' 		=> $postID,
		);

		if( $postType == 'post'): 
			$modalArgs = $modalPostArgs; 
		else:  
			$modalArgs = $modalPageArgs; 
		endif;

		$modalQyery = new WP_Query($modalArgs);
		$modalCount = $modalQyery->post_count;

		if ( $modalQyery->have_posts() ) : while ($modalQyery->have_posts() ) : $modalQyery->the_post();
	?>

		<?php // Container ?>
		<div  
			id="container" 
			class="
				[ Display: grid md:grid-cols-2 sm:grid-cols-1 ]
				[ Tailwind: content ]
				[ Custom: o-modal__container ]
			">
			<?php 
			//____________________________________________________________________________
			//
			//						        I. Star and Commet
			//____________________________________________________________________________
			?>

			<div id="stars" class="o-modal__stars">		
			<svg class="[ c-landscape --modal ]" id="landscape" data-idgsap="landscapeGsap" version="1.1" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
				
				<?php // Object SVG ?>

				<?php // Coordinations ?>
				<?php // ______________ ?>

				<g 
					id="<?php echo $postID; ?>" 
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

			<?php 
			//____________________________________________________________________________
			//
			//					II. Multimedia (Text, Image, PDF, Video, ....)
			//____________________________________________________________________________
			?>

			<div id="multimedia" class="o-modal__multimedia">

				<div id="multimedia" class="[ md:h-auto md:overflow-y-scroll md:w-[97%] md:mt-32 mb-32 internalScrollbar ]">
					<div class="o-modal__multimedia__content --textResponsive">
						
						<h1 class="[ font-robotoMono text-2xl ]"><?php echo get_the_title(); ?></h1>

						<?php the_content(); ?>
						
						<?php // Correct ajax.js Modal Responsive Text ?>
						<p class="text-base sm:text-sm md:text-base lg:text-base"></p>

					</div>
				</div>
				
			</div>

		</div>
	
		<?php endwhile; endif; wp_reset_postdata(); ?>

	<?php
	wp_die();
	}