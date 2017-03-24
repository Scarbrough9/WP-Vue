<?php
/**
 * Theme Support
 *
 * Extend WordPress settings with add_theme_support.
 *
 * @package WordPress
 * @subpackage Setup
 * @since 0.1.0
 */

/* Let WordPress manage the document title */
add_theme_support('title-tag');

/* Declare support for featured images */
add_theme_support('post-thumbnails');

/* Remove the inline css WordPress adds for galleries */
add_filter('use_default_gallery_style', '__return_false');
