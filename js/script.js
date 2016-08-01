$(document).ready(function(){
$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.skully').css({
        'transform': 'translate(0px, '+ wScroll /2 + '%)'
    });

});
});
