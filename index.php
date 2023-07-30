<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */
?>


 
	<?php // get_header(); ?>
		
        <?php // Start of Home ?>
    
        <?php //if(is_home()): get_template_part( 'home', 'canvas' ); ?>
        
        <?php //elseif ( is_page() ) : get_template_part( 'page' ); ?>
        
        <?php //elseif ( (get_post_type() == 'product') ) : get_template_part( 'single', 'product' ); ?>	
        
        <?php //endif; // is_not_home(); ?>	
        
    <?php //get_footer(); ?>

    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8" />
        <title>WordPress Title Reload</title>
        <script src="https://unpkg.com/lodash@4.17.20"></script>
        <script src="./assets/js/dist/index.js"></script>
        </head>
        <body>
            <?php
                $dt = new DateTime("now", new DateTimeZone('Asia/Tehran'));
                echo $dt->format('m/d/Y, H:i:s');
            ?>
        </body>
    </html>