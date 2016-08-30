;(function($) {

	'use strict';

	jQuery(document).ready(function() {

		var $windowWidth = $(window).outerWidth(),
			$menu = $("#main-menu");
		
		/*
		 *
		 * Owl Carousel for Testimonial
		 *
		 */

		 $('#testimonial-carousel').owlCarousel({
			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay: false,
			pagination: true
		});


		/*
		 *
		 * Owl Carousel for Gallery
		 *
		 */

		 $('#gallery-carousel').owlCarousel({
		 	autoPlay: true,
		 	navigation: true,
		 	pagination : false,
		 	navigationText : ['<img src="./images/utility/gallary-nav-left.png" alt="">', '<img src="./images/utility/gallary-nav-right.png" alt="">'],
		 	items : 4,
		 	itemsDesktop : [1199,3],
		 	itemsDesktopSmall : [979,3]
		 });

		/*
		 *
		 * Venobox Lightbox for Gallery
		 *
		 */
		 $('.venobox').venobox({
	        numeratio: true,
	        infinigall: true
		 });


		/*
		 *
		 * Company Stats Count
		 *
		 */

		 $('#stat').waypoint( function() {
			//Execute CountTo Plugin
			$('.stats-count').countTo();
		},
		{
			offset: 300
		});


		/*
		 *
		 * Masonry Grid
		 *
		 */
		$('.blog-container').imagesLoaded( function(){

			$('.blog-container').masonry({
				itemSelector: '.blog-item'
			});
		});


		/*
		 *
		 * Team
		 *
		 */

		$('.team-list').on('click', 'a', function(e){
			e.preventDefault();

			var member = $(this).data('team');

			$('.team-display').removeClass('active');
			$('.team-list a').removeClass('active');

			$('#' + member).addClass('active');
			$(this).addClass('active');

		});


		/*
		 *
		 * Scroll to Top
		 *
		 */

		//Check to see if the window is top if not then display button
		$(window).scroll(function(){

			var height = $(window).height() -100;

			if ($(this).scrollTop() > height ) {
				$('#scroll-to-top').fadeIn();
			} else {
				$('#scroll-to-top').fadeOut();
			}
		});

		//Click event to scroll to top
		$('#scroll-to-top').on('click', function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});

		

		
		/*
		 *
		 * Main Menu
		 *
		 */
		var $menuwidth = $menu.outerWidth();
		$menu.animate({"right": -$menuwidth});
		// Main menu show
		$(".main-menu-open").on('click', function(e) {
			e.preventDefault();		
			$menu.animate({"right": 0});

		});

		// main menu hide
		$(".main-menu-close").on('click', function(e) {
			e.preventDefault();		
			$menu.animate({"right": -$menuwidth});

		});



		/*
		 *
		 * OnePage Scroll
		 *
		 */
		$('body').on('click','a[href*=#]:not([href=#])', function() {
			$menu.animate({"right": -$menuwidth}, 800);

			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {			
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top				
					}, 800);

					return false;
				}
			}
		});




		/*
		 *
		 * Show more/Less
		 *
		 */
		if ( $windowWidth < 768 ) {
			$(".show-more").readmore({
				speed: 600,
				collapsedHeight: 50,
				embedCSS: false,
				moreLink: '<a class="show-mless" href="#">Read more</a>',
				lessLink: '<a class="show-mless" href="#">Show Less</a>'
			});
		}




		/*
		 *
		 * Show Changing Nav Color Based on Section
		 *
		 */

		var scrollListener;
		var pause = 300;

		var $sectionLight 		= $('.light'),
			$hamburgerMenu 		= $('.main-menu-open'),
			hno 				= [];

		$sectionLight.each(function(i){
			var slt = $($sectionLight[i]).offset().top;
			var slh = $($sectionLight[i]).outerHeight();
			hno.push(slt);
			hno.push(slh+slt);
		});


		$(window).scroll(function(e) {

			clearTimeout(scrollListener);

			scrollListener = setTimeout(function(){

				var $windowHeight = $(window).scrollTop()+100;

				for(var i = 0; i < hno.length-1; i+=2) {

					if($windowHeight >= hno[i] && $windowHeight <= hno[i+1]){
						$hamburgerMenu.addClass('text-dark');
						break;
					} else {
						$hamburgerMenu.removeClass('text-dark');
					}

				}

			},pause);			

		});

		// wow js initialize
		if ( $windowWidth > 768 ) {
			new WOW().init();
		}
		
	});

})(jQuery);