

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
  <?php include_once("analyticstracking.php") ?>

			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', 'page' ); ?>

				
			<?php endwhile; // end of the loop. ?>

</body>		


<script src="/ln/wp-content/themes/Bliss/js/uiMorphingButton_fixed.js"></script>

  <script>

  (function() {

    var docElem = window.document.documentElement, didScroll, scrollPosition;



    // trick to prevent scrolling when opening/closing button

    function noScrollFn() {

      window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );

    }



    function noScroll() {

      window.removeEventListener( 'scroll', scrollHandler );

      window.addEventListener( 'scroll', noScrollFn );

    }



    function scrollFn() {

      window.addEventListener( 'scroll', scrollHandler );

    }



    function canScroll() {

      window.removeEventListener( 'scroll', noScrollFn );

      scrollFn();

    }



    function scrollHandler() {

      if( !didScroll ) {

	didScroll = true;

	setTimeout( function() { scrollPage(); }, 60 );

      }

    };



    function scrollPage() {

      scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };

      didScroll = false;

    };



    scrollFn();



    [].slice.call( document.querySelectorAll( '.morph-button' ) ).forEach( function( bttn ) {

	new UIMorphingButton( bttn, {

	  closeEl : '.icon-close',

	      onBeforeOpen : function() {

	      // don't allow to scroll

	      noScroll();

	    },

	      onAfterOpen : function() {

	      // can scroll again

	      canScroll();

	    },

	      onBeforeClose : function() {

	      // don't allow to scroll

	      noScroll();

	    },

	      onAfterClose : function() {

	      // can scroll again

	      canScroll();

	    }

	  } );

      } );



    // for demo purposes only

    [].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) { 

	bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );

      } );

  })();

</script>

        


<?php get_footer();
