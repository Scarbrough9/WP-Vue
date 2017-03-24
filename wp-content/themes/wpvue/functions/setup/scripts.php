<?php
/**
 * Scripts
 *
 * Queue javascript and handle deferring of scripts.
 *
 * @package WP-Vue
 * @subpackage Setup
 * @since 0.1.0
 */

/* Queue scripts */
function carbon_enqueue_scripts() {
    $scripts_path = get_stylesheet_directory_uri() . '/public/scripts/';
    $version = (defined('WP_DEBUG') && true === WP_DEBUG) ? rand(): false;
    if (!is_admin()) {
        /* Header javascript - This is commented out as nothing actually exists in the file, uncomment as needed */
        // wp_register_script('carbon-header-scripts', $scripts_path . 'carbon_header_scripts.js', array(), $version, false);
        // wp_enqueue_script('carbon-header-scripts');
        /* Primary scripts */
        wp_register_script('carbon-scripts', $scripts_path . 'carbon_scripts.js', array('jquery'), $version, true);
        wp_enqueue_script('carbon-scripts');
    }
}
add_action('wp_enqueue_scripts', 'carbon_enqueue_scripts');

/* Defer loading of primary scripts */
function carbon_defer_scripts($tag, $handle) {
    $tag = ($handle === 'carbon-scripts') ? str_replace(' src',' defer src', $tag) : $tag;
    return $tag;
}
add_filter('script_loader_tag', 'carbon_defer_scripts', 10, 2);
