<?php
/**
 * SVG Sprite
 *
 * Include svg sprite generated via build tasks.
 *
 * @package WP-Vue
 * @subpackage Toolbox
 * @since 0.1.0
 */

function carbon_svg_sprite($include = null) {
	$before = '<div style="width: 0; height: 0; position: absolute; visibility: hidden">';
	$after  = '</div>';
	if ($include) {
		if (is_array($include)) {
			foreach ($include as $file) {
				if (file_exists($file)) {
					echo $before;
					require_once $file;
					echo $after;
				}
			}
		}
		else {
			if (file_exists($include)) {
				echo $before;
				require_once $include;
				echo $after;
			}
		}
	}
}
