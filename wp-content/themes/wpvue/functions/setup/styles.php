<?php
/**
 * Styles
 *
 * Queue stylesheets, includes login style injection.
 *
 * @package WP-Vue
 * @subpackage Setup
 * @since 0.1.0
 */

/* Enqueue styles */
function carbon_enqueue_styles() {
    $styles_path = get_stylesheet_directory_uri() . '/public/styles/';
    $version = (defined('WP_DEBUG') && true === WP_DEBUG) ? rand(): false;
    if (!is_admin()) {
        /* Register and queue primary styles */
        wp_register_style('carbon-styles', $styles_path . 'carbon_styles.css', false, $version);
        wp_enqueue_style('carbon-styles');
    } else {
        /* Register and queue admin styles */
        wp_register_style('carbon-admin-styles', $styles_path . 'carbon_admin_styles.css', false, $version);
        wp_enqueue_style('carbon-admin-styles');
    }
}
add_action('wp_enqueue_scripts', 'carbon_enqueue_styles');

/* Inject custom login styles - login styles are included in admin stylesheet */
function carbon_login_styles() {
    $styles_path = get_stylesheet_directory_uri() . '/public/styles/';
    echo '<link rel="stylesheet" type="text/css" href="' . $styles_path . 'carbon_admin_styles.css" />';
}
add_action('login_head', 'carbon_login_styles');
