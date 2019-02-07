


/*=========================*/
/*====main navigation hover dropdown====*/
/*==========================*/
$(document).ready(function () {

  $('.js-activated').dropdownHover({
    instantlyCloseOthers: true,
    delay: 0
  }).dropdown();

});
/*=========================*/
/*====transparent navbar====*/
/*==========================*/
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $('div.navbar').addClass('black');
      console.log("added black on navbar");
    }

    else {
      $('div.navbar').removeClass('black');
      console.log("removed black on navbar");

    }
  });
});

/*=========================*/
/*====flex main slider====*/
/*==========================*/
$('.slider-main,.testimonials').flexslider({
  slideshowSpeed: 3000,
  directionNav: false,
  animation: "fade"
});

/*=========================*/
/*========portfolio mix====*/
/*==========================*/
$('#grid').mixitup();

/*=========================*/
/*========tooltip and popovers====*/
/*==========================*/
$("[data-toggle=popover]").popover();

$("[data-toggle=tooltip]").tooltip();

/*=========================*/
/*========flex-gallery slide====*/
/*==========================*/
$(window).load(function () {
  $('.flexslider').flexslider({
    directionNav: false,
    slideshowSpeed: 3000,
    animation: "fade"
  });
});

/* ==============================================
WOW plugin triggers animation.css on scroll
=============================================== */

var wow = new WOW({
  boxClass: 'wow',      // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset: 150,          // distance to the element when triggering the animation (default is 0)
  mobile: false        // trigger animations on mobile devices (true is default)
});
wow.init();