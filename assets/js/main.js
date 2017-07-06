/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 780px)', //736px
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Dropdowns.
			$('#nav > ul').dropotron({
				offsetY: -22,
				mode: 'fade',
				noOpenerFade: true,
				speed: 300,
				detach: false
			});

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly.
			// $('#header').scrolly({ bgParallax: true });
      $('.scrolly').scrolly();

      var wrap = $("#page-wrapper");
      var headerNav = $(".header-nav");
      // if ($window.innerWidth() > 736) {
        // $window.scroll(function(e) {
        //   // console.log($window.scrollTop());
        //   if ($window.scrollTop() > $('#one').offset().top - 90) { //615
        //     wrap.addClass("fix-header-nav");
        //   } else {
        //     wrap.removeClass("fix-header-nav");
        //   }
        //   if ($window.scrollTop() > $('#footer').offset().top - 90) { //5500
        //     headerNav.hide("fade",500);
        //   } else {
        //     headerNav.show("fade",200);
        //   }
        // });
      // }
      $window.resize(function(){
        if ($window.innerWidth() > 736) {
          headerNav.css('display', 'block');
        } else {
          headerNav.css('display', 'none');
        }
      });

		// Off-Canvas Navigation.
		var logoImg = '<img src="images/paystarlogo.svg" alt="PayStar">';

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title"><a href="index.html">' + logoImg + '</a></span>' +
            '<a href="#" class="sign-in">Sign in</a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

      $('.prevent-hash').click(function (ev) {
        if (ev.target.classList.contains('prevent-hash')) {
          ev.preventDefault();
          ev.stopPropagation();
          // console.log($('body')[0].classList);
          if ($body[0].classList.contains("navPanel-visible")) {
            $body.removeClass("navPanel-visible");            
          }
          $body.animate({
            scrollTop: $(ev.target.hash).position().top - 40,
            easing: 'swing',
            duration: 5000
          });
        }   
      });

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');
	});

})(jQuery);