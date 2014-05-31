<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/normalize.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style5.css">
<link rel="stylesheet" href="<?php bloginfo( 'stylesheet_url' ); ?>">
<link href="<?php echo get_template_directory_uri(); ?>/css/flexslider.css" rel="stylesheet" type="text/css" />
<link href="<?php echo get_template_directory_uri(); ?>/css/grid.css" rel="stylesheet" type="text/css" />
<link href="<?php echo get_template_directory_uri(); ?>/css/testi-slider.css" rel="stylesheet" type="text/css" />
<link href="<?php echo get_template_directory_uri(); ?>/css/button.css" rel="stylesheet" type="text/css" />
<script src="<?php echo get_template_directory_uri(); ?>/js/modernizr.custom.js"></script>
<script src="<?php bloginfo('template_url'); ?>/js/classie.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/classie.js"></script> 
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.sticky-kit.js"></script>   
<script type="text/javascript">
  (function() {
    var win = jQuery(window);
    var sizes = {
      half: 0.5,
      full: 0.5,
      threequarter: 3/4,
      onefive: 1.5,
      "double": 2,
      triple: 3
    }
    for (k in sizes) {
      var v = sizes[k]
      jQuery("." + k).css({
       height: Math.floor(win.height() * v) + "px"
      });
    }

    jQuery(".stickcontainer .item").stick_in_parent();
    jQuery("#events_container").on("sticky_kit:stick", function(e) {
      $(e.target).html("got stick event");
    });

    jQuery("#events_container").on("sticky_kit:unstick", function(e) {
      $(e.target).html("got unstick event");
    });

    jQuery("#events_container").on("sticky_kit:bottom", function(e) {
      jQuery(e.target).html("got bottom event");
    });

    jQuery("#events_container").on("sticky_kit:unbottom", function(e) {
      jQuery(e.target).html("got unbottom event");
    });

    jQuery(document.body).on("click", ".recalc", function() {
      console.log("Triggering recalc");
      jQuery(document.body).trigger("sticky_kit:recalc")
    });


    jQuery(document.body).on("click", ".grow_element", function(e) {
      var elm = jQuery(jQuery(e.currentTarget).data("target"));
      elm.animate({height: elm.height() * 2}, function() {
        jQuery(document.body).trigger("sticky_kit:recalc")
      });
    });
    
  })();
</script>

<section class="footer clearfix">
<div class="container clearfix">


<div class="footerbox">
<ul>
<li><a href="http://www.nlpbliss.com/about-us/" target="_blank">About Us</a></li>
<li><a href="http://www.nlpbliss.com/nlp-bliss-practitioners-2/" target="_blank">NLP Bliss Practitioners</a></li>
<li><a href="http://www.nlpbliss.com/privacy-policy/" target="_blank">Privacy Policy</a></li>
<li><a href="http://www.nlpbliss.com/contact-us/" target="_blank">Contact & Support</a></li>
<li><a href="http://www.nlpbliss.com/what-is-nlp/" target="_blank">What is NLP?</a></li>
<li><a href="http://www.nlpbliss.com/how-it-works/" target="_blank">How it Works</a></li>
<li><a href="http://www.nlpbliss.com/faq/" target="_blank">FAQ</a></li>
</ul>


<p>Copyright © NLP Bliss. All rights reserved</p>

</div><!-- footerbox -->




<!-- <div class="footerbox">

<h3>Subscribe to Expert NLP & Excellence Articles</h3>

<form class="contact_form" action="" method="" name="contact_form">
    <ul>
        <li>
            <input type="email" name="email" placeholder="Enter your Email" required />
        </li>
      
        <li>
        	<button class="submit" type="submit">Subscribe</button>
        </li>
    </ul>
</form>

</div><!-- footerbox -->



</div><!-- container -->
</section>	

</html>