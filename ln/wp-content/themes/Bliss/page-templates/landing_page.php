<?php
/**
 * Template Name: Landing Page Template
 *
 * Description: Twenty Twelve loves the no-sidebar look as much as
 * you do. Use this page template to remove the sidebar from any page.
 *
 * Tip: to remove the sidebar from all posts and pages simply remove
 * any active widgets from the Main Sidebar area, and the sidebar will
 * disappear everywhere.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

 <html> 
<section class="tit clearfix">
<div class="pagescontainer clearfix">
<h2>PROGRAM YOUR <span>NEUROLOGY FOR EXCELLENCE</span></h2>
</div>
</section><!-- tit -->
  <h4><p><?php the_field('page_title'); ?></p></h4>
  <h4><p><?php the_field('sub_tit'); ?></p><h4><h5>IN 45 MINUTES</h5>
<?php the_field('feature_image'); ?>

<section>
<ul class="fvgrid">
  <li>
<div class="fv">

1
<h3>Desire a Transformation</h3>
</div></li>
  <li>
<div class="fv">

2
<h3>Schedule an Appointment</h3>
</div></li>
  <li>
<div class="fv">

3
<h3>Meet an NLP Bliss Practitioner</h3>
</div></li>
  <li>
<div class="fv">

4
<h3>Experience Excellence Creation</h3>
</div></li>
  <li>
<div class="fv">

5
<h3>Enjoy the desired Tranformation</h3>
</div></li>
</ul>
</section><section class="testi clearfix">
<div class="qt"><img src="http://www.nlpbliss.com/wp-content/uploads/2014/05/icon_22004.png" alt="icon_22004"/></div>

  <?php the_field('testimonial'); ?>

  <?php the_field('testi_image'); ?>
  <?php the_field('testi_name'); ?>



</section><section class="nlp clearfix">
<h2 class="arrow_box">WHAT IS NLP?</h2>
<div class="nlpbdr"></div>
  Neuro LInguistic Programming is the Technology of Excellence, a field co-founded by Dr. John Grinder
and Dr. Richard Bandler in 1970s by modelling geniuses from various fields.

  Today all over the world, NLP has various applications including leadership, personal transformation,
  influence and education. NLP Bliss Practitioners are individuals with genuine NLP skills, hand picked by
  the NLP Legends Antano Solar John &amp; Harini Ramachandran.
<h6>“NLP has metamorphosed into an all-purpose self-improvement program and technology.” - Times Magazine</h6>
</section><section class="call clearfix">
[formlightbox_call class="desirechange" title=""]Book a Session[/formlightbox_call] 
</section></div>
<!-- leftpage -->


<div class="rightpage clearfix">
<div class="pages-form">
					    <?php echo do_shortcode('contact-form-7 id="215" title="Contact Form on Landing Pages"]'); ?>[
</div>
<div class="stickcontainer">
<div class="item">
<div class="rightquicklinks clearfix">

<h3>Get over PHOBIAS </h3>


<ul>
<li><a href="#">Get over Water Phobia</a></li>
<li><a href="#">Get over Elevetors Phobia</a></li>
<li><a href="#">Get Over Public Speaking Phobia</a></li>
<li><a href="#">Get over Fear of being Alone</a></li>
<li><a href="#">Get over Fear of being Alone</a></li>
<li><a href="#">Get over fear of rejection</a></li>
<li><a href="#">Get over fear of flights </a></li>
<li><a href="#">Get over fear of Heights </a></li>
<li><a href="#">Get over fear of insects/cockroach/lizards </a></li>
</ul>

</div><!-- rightquicklinks -->
<div class="booknw">
[formlightbox_call class="desirechange" title=""]Book Now![/formlightbox_call]
</div>

  </div>


  <div class="item full"></div>
</div><!-- stickcontainer -->

</div>
<!-- rightpage -->

</div>
<!-- pagecontainer -->

 </html>