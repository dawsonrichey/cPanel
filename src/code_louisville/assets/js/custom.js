(function ($) {
	"use strict";
	
	var windowWidth = $(window).innerWidth(),
	    windowHeight = $(window).innerHeight();
    
    /*-- FUNCTIONS --*/
    function backTop() {
		if ($(window).scrollTop() > 40 && windowWidth > 767) {
			$(".site-backtop").fadeIn();
		} else {
			$(".site-backtop").fadeOut();
		}
	}
    function refreshMenu() {
		if (windowWidth < 992) {
			$(".site-header .header-menu").find("*").removeAttr("style").removeClass("active");
		}
	}
    /*-- FUNCTIONS END --*/
	
	/*-- BACK TOP --*/
    $(".site-backtop").on("click", function (e) {
        e.preventDefault();
		$("body, html").animate({scrollTop: 0}, 800);
    });
	/*-- BACK TOP END --*/
    
	/*-- BACKGROUND IMAGES --*/
    $("[data-background]").each(function () {
        var src = $(this).data("background");

        if (src) {
            $(this).css("background-image", "url(" + src + ")");
        }
    });
	/*-- BACKGROUND IMAGES END --*/
    
    /*-- HEADER MENU --*/
    $(".site-header .header-menu nav ul li.sub > a").on("click", function (e) {
        e.preventDefault();
        
        var this_parent = $(this).parent("li"),
            this_sub = $(this).siblings("ul"),
            all_active = $(".site-header .header-menu nav ul li.active").not($(this).parents("li.active"));
        
        if (this_parent.hasClass("active")) {
            
            this_sub.slideUp(200);
            setTimeout(function () {
                this_parent.removeClass("active");
            }, 200);
            
        } else {
            
            all_active.children("ul").slideUp(200);
            setTimeout(function () {
                all_active.removeClass("active");
            }, 200);
            
            this_sub.slideDown(200);
            setTimeout(function () {
                this_parent.addClass("active");
            }, 200);
            
        }
    });
    /*-- HEADER MENU --*/
    
    /*-- MOBILE MENU --*/
    $(".site-header .header-toggle").on("click", function (e) {
        e.preventDefault();
        
        var this_target = $("body"),
            this_menu = $(this).siblings(".header-menu");
        
        if (this_target.hasClass("active")) {
            this_target.removeClass("active");
            this_menu.find("*").removeAttr("style").removeClass("active");
        } else {
            this_target.addClass("active");
        }
    });
    /*-- MOBILE MENU --*/
    
    /*-- FULLSCREEN SLIDER --*/
    if ($(".page-fullscreen .bxslider").size()) {
        
        $(".page-fullscreen .bxslider").bxSlider({
            mode: "fade",
            pager: true,
            controls: true,
            auto: true,
            autoControls: true,
            autoHover: false,
            responsive: true,
            nextText: '',
            prevText: '',
            startText: '',
            stopText: '',
            pause : 5000,
            onSlideAfter: function () {
                $(".bx-start").trigger("click");
            }
        });
    }
	/*-- FULLSCREEN SLIDER END --*/
    
    /*-- ISOTOPE PROJECTS --*/
    var isotopeProjects = $(".project-list.type-one").imagesLoaded(function () {
        isotopeProjects.isotope({
            itemSelector: ".project-col"
        });
    });
    
    $(".project-filter").on("click", "a", function (e) {
        e.preventDefault();
        
        var filterValue = $(this).attr("data-filter");
        isotopeProjects.isotope({ filter: filterValue });
        
        $(".project-filter").find(".active").removeClass("active");
        $(this).parent("li").addClass("active");
    });
    /*-- ISOTOPE PROJECTS END --*/
    
    /*-- BLOG GO COMMENTS --*/
    $(".go-comments").on("click", function (e) {
        e.preventDefault();
        var element = $(".post-comments").offset();
		$("html, body").animate({scrollTop: element.top - 30}, 800);
    });
	/*-- BLOG GO COMMENTS END --*/
    
    /*-- CAROUSEL BLOG --*/
	$("#owl-blog").owlCarousel({
		//Most Features
		items : 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [980, 1],
		itemsTablet: [768, 1],
		itemsMobile : [479, 1],
	 
		//Autoplay
		autoPlay : true,
		stopOnHover : true,
	 
		// Navigation
		navigation : false,
		navigationText : ["", ""],
	 
		//Pagination
		pagination : true
	});
	/*-- CAROUSEL BLOG END --*/
    
    /*-- CAROUSEL TEAM --*/
	$("#owl-team").owlCarousel({
		//Most Features
		items : 4,
		itemsDesktop : [1199, 4],
		itemsDesktopSmall : [980, 3],
		itemsTablet: [768, 2],
		itemsMobile : [479, 1],
	 
		//Autoplay
		autoPlay : true,
		stopOnHover : true,
	 
		// Navigation
		navigation : true,
		navigationText : ["", ""],
	 
		//Pagination
		pagination : false
	});
	/*-- CAROUSEL TEAM END --*/
    
    /*-- CAROUSEL TESTIMONIALS --*/
	$("#owl-testimonials").owlCarousel({
		//Most Features
		items : 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [980, 1],
		itemsTablet: [768, 1],
		itemsMobile : [479, 1],
	 
		//Autoplay
		autoPlay : true,
		stopOnHover : true,
	 
		// Navigation
		navigation : false,
		navigationText : ["", ""],
	 
		//Pagination
		pagination : true
	});
	/*-- CAROUSEL TESTIMONIALS END --*/
    
    /*-- CAROUSEL PROJECT --*/
	$("#owl-project").owlCarousel({
		//Most Features
		items : 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [980, 1],
		itemsTablet: [768, 1],
		itemsMobile : [479, 1],
        autoHeight : true,
	 
		//Autoplay
		autoPlay : true,
		stopOnHover : true,
	 
		// Navigation
		navigation : true,
		navigationText : ["", ""],
	 
		//Pagination
		pagination : false
	});
	/*-- CAROUSEL PROJECT END --*/
    
	/*-- COUNT TO --*/
    if ($(".counter").size()) {
        $(".counter").countTo();
    }
	/*-- COUNT TO END --*/
	
	/*-- FIT VIDEO --*/
    if ($(".video-full").size()) {
        $(".video-full").fitVids();
    }
	/*-- FIT VIDEO END --*/
    
    /*-- POPUP --*/
	$(".popup-image").magnificPopup({
        type: 'image'
    });
    $(".popup-gallery").each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
	/*-- POPUP END --*/
	
	/*-- GOOGLE MAP --*/
    try {
        $(".google-map").width("100%").height("400px").gmap3({
            map: {
                options: {
                    center: [51.5209564, 0.157134],
                    zoom: 15,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
            },
            marker: {
                latLng: [51.5209564, 0.157134]
            }
        });
    } catch (error) {
        console.log(error);
    }
	/*-- GOOGLE MAP END --*/
  
	/*-- WINDOW SCROLL --*/
	$(window).scroll(function () {
		backTop();
	});
	/*-- WINDOW SCROLL END --*/
	
	/*-- WINDOW LOAD --*/
	$(window).load(function () {
		$(".site-loader").delay(100).fadeOut("slow");
	});
	/*-- WINDOW LOAD END --*/
	
	/*-- WINDOW RESIZE --*/
	$(window).resize(function () {
        windowWidth = $(window).innerWidth(),
	    windowHeight = $(window).innerHeight();
        
        refreshMenu();
	});
	/*-- WINDOW RESIZE END --*/
  
})(jQuery);