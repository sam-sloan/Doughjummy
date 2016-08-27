$(document).ready(function(){

    //When the arrow has been clicked...
  $(".intro a").click(function(e){
    //prevent default will prevent the link from typical behaviour of page jumping
    e.preventDefault();

    var sectionID = "headerSection";

    $("html body").animate({
      scrollTop : $("#" + sectionID).offset().top
    }, 700)
  });


  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.skully').css({
        'transform': 'translate(0px, '+ wScroll /5 + '%)',
        'filter': 'blur('+ wScroll / 29 + 'px)',
        '-webkit-filter': 'blur('+ wScroll / 29 + 'px)'
    });
    // to blur the skull
    $('.triangle').css({
      'transform': 'translate(0px, '+ wScroll /3 + '%)'
    });

    if (wScroll > $('.about').offset().top - ($(window).height() / 2)) {
      $(".column1").addClass('is-showing');
    };
    if (wScroll > $('.apparel').offset().top - ($(window).height() / 2)) {
      $(".column2").addClass('is-showing');
    };
  });
});
