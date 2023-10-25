<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */
?>


 
	<?php get_header(); ?>
		
        <?php // Start of Home ?>
    
        <?php if(is_home()): get_template_part( 'home' ); ?>
        
        <?php elseif ( is_page() ) : get_template_part( 'page' ); ?>
        
        <?php elseif ( (get_post_type() == 'technology') ) : get_template_part( 'technology' ); ?>	
        
        <?php endif; // is_not_home(); ?>	
        
    <?php get_footer(); ?>
