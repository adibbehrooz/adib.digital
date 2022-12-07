<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 */

    //__________________________ Redux __________________________ 
    //___________________________________________________________    

    if ( ! class_exists( 'Redux' ) ) {
        return;
    }

    $redux_demo = 'redux_demo';

    $theme = wp_get_theme(); // For use with some settings. Not necessary.

    $argsSample = array(
        'display_name'         => $theme->get( 'Name' ),
        'display_version'      => $theme->get( 'Version' ),
        'menu_title'           => esc_html__( 'Theme Options', 'redux-framework-demo' ),
        'customizer'           => true,
    );

    Redux::setArgs( $redux_demo, $argsSample );
    
    //___________ Footer English ___________
    //______________________________________

    $sample_desk = 'sample_desk';
    Redux::setSection( $redux_demo, array(
        'title'  => esc_html__( 'Sample Desk', 'redux-framework-demo' ),
        'id'     => $sample_desk,
        'desc'   => esc_html__( 'Sample Desk', 'redux-framework-demo' ),
        'icon'   => 'el el-home',
        'fields' => array(

            //__________________ Sample Field __________________

            array(
                'id'       => 'sample_field',
                'type'     => 'text',
                'title'    => esc_html__( 'Sample Field', 'redux-framework-demo' ),
                'desc'     => esc_html__( 'Sample Field Description', 'redux-framework-demo' ),
                'subtitle' => esc_html__( 'Sub Sample Field Description', 'redux-framework-demo' ),
                'default'  => '',
            ),   
        )
    ));