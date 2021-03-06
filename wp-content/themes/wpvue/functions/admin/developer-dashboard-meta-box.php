<?php
 /**
  * Developer Dashboard
  *
  * Include the CO+LAB widget in the WordPress admin dashboard.
  *
  * @link https://developer.wordpress.org/reference/functions/add_meta_box/
  *
  * @package WP-Vue
  * @subpackage Admin
  * @since 0.1.0
  */
function carbon_wp_dashboard_setup_developer_dashboard_meta_box() {
	function carbon_developer_dashboard_meta_box($post, $args) {
		$author = 'CO+LAB';
		$phone  = '804-433-3582';
		$email  = 'info@teamcolab.com';
		$url    = 'www.teamcolab.com';
		$href   = '//' . $url . '/';
		$logo = '
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" width="90" height="90" style="display: block;">
			<rect id="background" fill="#333333" width="512" height="512"/>
			<g>
				<path id="XMLID_23_" fill="#FFFFFF" d="M77.4,298c-23.2,0-40.6-18.1-40.6-41.1c0-22.8,17-41.4,41.1-41.4
					c14.7,0,23.6,5.1,31.2,12.4l-9,10.4c-6.4-5.9-13.2-9.9-22.3-9.9c-15.3,0-26.3,12.5-26.3,28.3c0,15.7,11.1,28.5,26.3,28.5
					c9.8,0,16.1-4,22.9-10.4l9,9.1C101.4,292.5,92.3,298,77.4,298"/>
				<path id="XMLID_36_" fill="#FFFFFF" d="M157.4,228.4c-15.8,0-26.9,12.6-26.9,28.3c0,15.6,11.3,28.5,27.1,28.5s26.9-12.6,26.9-28.3
					C184.5,241.2,173.2,228.4,157.4,228.4 M157.4,298c-24.5,0-41.6-18.6-41.6-41.1c0-22.6,17.3-41.4,41.8-41.4
					c24.5,0,41.6,18.6,41.6,41.1C199.2,279.2,181.9,298,157.4,298"/>
				<polygon id="XMLID_3_" fill="#FFFFFF" points="237.4,252.2 229.4,252.2 229.4,244.2 220.4,244.2 220.4,252.2 212.4,252.2
					212.4,261.2 220.4,261.2 220.4,269.2 229.4,269.2 229.4,261.2 237.4,261.2"/>
				<polygon id="XMLID_20_" fill="#FFFFFF" points="250.9,217.1 264.9,217.1 264.9,284.1 306.8,284.1 306.8,296.9 250.9,296.9"/>
				<path id="XMLID_31_" fill="#FFFFFF" d="M356.9,233.3l-13.7,31.9h27.5L356.9,233.3z M398.7,296.9h-14.8l-8.1-19.3h-37.7l-8.2,19.3
					h-14.4l35.1-80.3h13L398.7,296.9z"/>
				<path id="XMLID_27_" fill="#FFFFFF" d="M459.8,273.4c0-6.8-5.4-10.8-16.4-10.8h-22.2v21.9h23.2C454,284.5,459.8,280.7,459.8,273.4
					 M455.4,239.8c0-6.5-5-10.3-14-10.3h-20.2v21.2h19.1C449.3,250.7,455.4,247.2,455.4,239.8 M469.4,237.5c0,9.8-5.5,14.8-11.4,17.9
					c9.3,3.2,15.8,8.5,15.8,19.5c0,14.4-11.7,22-29.5,22h-36.9v-79.8h35.8C459.2,217.1,469.4,225,469.4,237.5"/>
			</g>
		</svg>
		';
		$buffer  = null;
		$buffer .= '<a target="_blank" href="' . $href . '" style="display: block; float: left; margin-right: 10px;">';
		$buffer .=     $logo;
		$buffer .= '</a>';
		$buffer .= '<ul>';
		$buffer .=     '<li><strong>Author:</strong> ' . $author . '</li>';
		$buffer .=     '<li><strong>Phone:</strong> <a href="tel:1' . preg_replace( '/[^0-9]/s', '', $phone ) . '" style="white-space: nowrap;">' . $phone . '</a></li>';
		$buffer .=     '<li><strong>Email:</strong> <a href="mailto:' . $email . '">' . $email . '</a></li>';
		$buffer .=     '<li><strong>URL:</strong> <a target="_blank" href="' . $href . '">' . $url . '</a></li>';
		$buffer .= '</ul>';
		$buffer .= '<p>Custom built by the team at <a target="_blank" href="' . $href . '">' . $author . '</a>.
			When you have questions or need support, please give us a call at
			<a href="tel:1' . preg_replace( '/[^0-9]/s', '', $phone ) . '" style="white-space: nowrap;">' . $phone . '</a>,
			or email at <a href="mailto:' . $email . '">' . $email . '</a>. </p>';
		echo $buffer;
	}
	add_meta_box('carbon-developer-dashboard-meta-box', 'Developer Information', 'carbon_developer_dashboard_meta_box', 'dashboard', 'normal', 'high'); // $args
}
add_action('wp_dashboard_setup', 'carbon_wp_dashboard_setup_developer_dashboard_meta_box', 1);
