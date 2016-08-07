$(document).ready(function() {
  //perform the function scrolling for auto scroll
  scrolling()

  //makes it so the intro section will always be the height of the browser window
  var windowHeight = window.innerHeight;
  $('.intro').css(
    'height', innerHeight+'px'
  );

});

function scrolling() {
  //When the arrow has been clicked...
  $(".intro a").click(function(e){
    //prevent default will prevent the link from typical behaviour of page jumping
    e.preventDefault();

    var sectionID = "headerSection";

    $("html body").animate({
      scrollTop : $("#" + sectionID).offset().top
    }, 700)
  })
}
