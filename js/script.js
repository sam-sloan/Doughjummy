$(document).ready(function(){

  $(window).scroll(function(){

    var wSkullScroll = $(this).scrollTop();
    var wScroll = $(this).scrollTop();

    $('.skully').css({
        'transform': 'translate(0px, '+ wSkullScroll /15 + '%)',
        'filter': 'blur('+ wScroll / 20 + 'px)'
    });

    $('.triangle').css({
      'transform': 'translate(0px, '+ wScroll /3 + '%)'
    });
  });


});
