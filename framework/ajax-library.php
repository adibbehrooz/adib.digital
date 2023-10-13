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
		$modalPostArgs = array(
			'post_type'     => 'technology',
			'post_status'   => 'publish',
			'p'				=> $postID
		);

		// Modal Page Argument
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
		<div class="[ Display: grid md:grid-cols-2 sm:grid-cols-1 ][ Tailwind: content ][ Custom: o-modal__container ]">

			<?php // Star and Commet ?>
			<div class="o-modal__stars">		
						
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