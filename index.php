<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */
?>


 
	<?php get_header(); ?>
		
        <?php // Start of Home ?>
    
        <?php if(is_home()): get_template_part( 'home', 'canvas' ); ?>
        
        <?php elseif ( is_page() ) : get_template_part( 'page' ); ?>
        
        <?php elseif ( (get_post_type() == 'product') ) : get_template_part( 'single', 'product' ); ?>	
        
        <?php endif; // is_not_home(); ?>	
        
    <?php get_footer(); ?>