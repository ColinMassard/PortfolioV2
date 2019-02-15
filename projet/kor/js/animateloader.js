$(".project").hover3d({
  selector: ".project__card",
  shine: true,
});
$("#container").css("display","none");
$(".project").hover3d({

  // selector for element
  selector      : null,

  // Perspective value for 3d space
  perspective   : 1000,

  // Mouse movement sensitivity
  sensitivity   : 20,

  // Default behavior is the element will follow the mouse, look like it facing the mouse
  invert        : false,

  // Add shining layer
  shine       : false,

  // Helper class when mouse hover in the element
  hoverInClass  : "hover-in",

  // Helper class when mouse hover Out the element
  hoverOutClass : "hover-out",

  // Helper class when the mouse is hovering the element
  hoverClass    : "hover-3d"

});

$("#EntrePageAccueil").click(function(){
  $(".preloader").fadeOut(2000);
});


$(function(){
  setTimeout(function(){
    $('.spinner').fadeOut('slow', function() {
      $(this).remove();
      $(".logorspnv").fadeOut("slow");
      $(".preloaderspnv").fadeOut("slow");
    });
  }, 2500);
  $("#container").css("display", "block");
});
