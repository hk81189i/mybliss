

<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other 'pages' on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Bliss
 * @since Bliss 0.1
 */


get_header(); ?>
	
<body class="bg">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', 'page' ); ?>

				
			<?php endwhile; // end of the loop. ?>

</body>		
<?php get_footer();
