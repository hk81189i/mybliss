<?php
/**
 * The Header for our theme Bliss
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Bliss
 * @since Bliss 0.01
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/normalize.css">
<link rel="stylesheet" href="<?php bloginfo( 'stylesheet_url' ); ?>">
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<link href="<?php echo get_template_directory_uri(); ?>/css/flexslider.css" rel="stylesheet" type="text/css" />
<link href="<?php echo get_template_directory_uri(); ?>/css/grid.css" rel="stylesheet" type="text/css" />
<link href="<?php echo get_template_directory_uri(); ?>/css/testi-slider.css" rel="stylesheet" type="text/css" />
<link href="<?php echo get_template_directory_uri(); ?>/css/button.css" rel="stylesheet" type="text/css" />
<script src="<?php echo get_template_directory_uri(); ?>/js/modernizr.custom.js"></script>
<script src="<?php bloginfo('template_url'); ?>/js/classie.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/classie.js"></script> 
    
    

	<div class="container1 clearfix">
<div class="logo">
<img src="<?php bloginfo('template_directory'); ?>/images/logo.svg" /></div>
<div class="mdl">
<ul>
<li><a href="#">What is NLPBliss?</a></li>
<li><a href="#">How do I get transformed?</a></li>
<li><a href="#">What is NLPBliss?</a></li>
</ul>

</div><!-- mdl -->
<div class="tollfree"><h3><span>Request a Session</span>Call - 1800 000 000</h3></div>

</div><!-- container -->
	
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>
