$(document).ready(function() {
  var stickNavTop = $("nav").offset().top;

  var stickyNav = (function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > (stickNavTop)) {
      $('nav').addClass('sticky-nav');
    } else {
      $('nav').removeClass('sticky-nav');
    }
  });
    $(window).scroll(function() {
    stickyNav();
  });
});
