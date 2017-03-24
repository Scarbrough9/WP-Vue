<?php
/**
 * Including Analytics
 *
 * Function dedicated to including various analytics tracking snippets from ACF.
 *
 * @package WP-Vue
 * @subpackage Toolbox
 * @since 0.1.0
 */

function carbon_include_tracking() {

    if (class_exists('acf')) {
        /* Include tracking code fields from ACF here. */
        $unique_fields = array(
            'carbon_facebook_pixel',
        );

        $competing_field_types = array(
            /*
            * Each slug in $competing fields should be an array of fields
            * of which only ONE should have a value. The first field with a value
            * will be the one that is echoed.
            */
            'google' => array(
                'carbon_google_tag_manager',
                'carbon_google_analytics',
            ),
        );

        foreach( $unique_fields as $unique_field ) {
            /* Check if the field exists */
            if ( $source = get_field( $unique_field, 'option' ) ) {
                /* Include the code */
                echo $source  . "\n";
            }
        }

        foreach ( $competing_field_types as $type ) {
            foreach ( $type as $competing_field ) {
                if ( $source = get_field( $competing_field, 'option' ) ) {
                    echo $source  . "\n";
                    break;
                }
            }
        }
    }
}

add_action( 'wp_head', 'carbon_include_tracking' );
