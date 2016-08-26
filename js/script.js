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

    var wSkullScroll = $(this).scrollTop();
    var wScroll = $(this).scrollTop();

    $('.skully').css({
        'transform': 'translate(0px, '+ wSkullScroll /5 + '%)',
        'filter': 'blur('+ wScroll / 29 + 'px)',
        '-webkit-filter': 'blur('+ wScroll / 29 + 'px)'

    });

    $('.triangle').css({
      'transform': 'translate(0px, '+ wScroll /3 + '%)'
    });
  });
});
