<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>WP Vue - A Decoupled WordPress Starter Theme</title>
        <meta name="description" content="WP Vue - A Decoupled WordPress Starter Theme">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/public/styles/wpvue.css">
    </head>
    <body>
        <!--[if lte IE 9]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]-->

        <!-- Instantiate Vue -->
        <div id="wpvue-site"></div>

        <!--Queue javascript-->
        <script src="<?php echo get_template_directory_uri(); ?>/public/scripts/wpvue.js"></script>
    </body>
</html>
