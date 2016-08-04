$(document).ready(function() {
  scrolling()
  var windowHeight = window.innerHeight;
  $('.intro').css(
    'height', innerHeight+'px'
  );

});

function scrolling() {
  $(".intro a").click(function(e){
    e.preventDefault();
    var sectionID = "headerSection";

    $("html body").animate({
      scrollTop : $("#" + sectionID).offset().top
    }, 750)
  })
}
