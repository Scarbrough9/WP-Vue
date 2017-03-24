<?php
/**
 * Taxonomies
 *
 * Initialize taxonomies and customize settings with carbon_create_taxonomies.
 *
 * @package WP-Vue
 * @subpackage Setup
 * @since 0.1.0
 */

/* Taxonomies custom settings */
function carbon_create_taxonomies() {
    carbon_taxonomy_init(array(
        'name'       => 'demo-terms',
        'singular'   => 'Demo Term',
        'plural'     => 'Demo Terms',
        'post_types' => 'demo',
    ));
}
add_action('init', 'carbon_create_taxonomies');

/* Taxonomy defaults */
function carbon_taxonomy_init($settings) {
    $labels = array(
        'name'                       => _x($settings['plural'], 'taxonomy general name'),
        'singular_name'              => _x($settings['singular'], 'taxonomy singular name'),
        'menu_name'                  => __($settings['plural']),
        'search_items'               => __('Search ' . $settings['plural']),
        'all_items'                  => __('All ' . $settings['plural']),
        'parent_item'                => __('Parent ' . $settings['singular']),
        'parent_item_colon'          => __('Parent ' . $settings['singular'] . ':'),
        'edit_item'                  => __('Edit ' . $settings['singular']),
        'update_item'                => __('Update ' . $settings['singular']),
        'add_new_item'               => __('Add New ' . $settings['singular']),
        'new_item_name'              => __('New ' . $settings['singular'] . ' Name'),
        'separate_items_with_commas' => __('Separate ' . $settings['plural'] . ' with commas', 'textdomain'),
        'add_or_remove_items'        => __('Add or remove ' . $settings['plural'], 'textdomain'),
        'choose_from_most_used'      => __('Choose from the most used ' . $settings['plural'], 'textdomain'),
        'not_found'                  => __('No ' . $settings['plural'] . ' found.', 'textdomain'),
    );
    $args = array(
        'labels'            => $labels,
        'hierarchical'      => (isset($settings['hierarchical']) ? $settings['hierarchical'] : true),
        'show_ui'           => (isset($settings['show_ui']) ? $settings['show_ui'] : true),
        'show_admin_column' => (isset($settings['show_admin_column']) ? $settings['show_admin_column'] : true),
        'query_var'         => (isset($settings['query_var']) ? $settings['query_var'] : true),
        'rewrite'           => (isset($settings['rewrite']) ? array('slug' => $settings['rewrite']) : array('slug' => $settings['name'])),
    );
    register_taxonomy($settings['name'], $settings['post_types'], $args);
}
