var objet2 = $("#objet2");
var objet3 = $("#objet3");
var objet4 = $("#objet4");
var objet5 = $("#objet5");

var layer=$("#layer")
layer.mousemove(function(e){
  var valueX = (e.pageX* 1/50);
  var valueY = (e.pageY* 1/50);
  var testX = -valueX;
  var testY = -valueY;
  objet5.css({

    'transform':'translate('+testX+'px,'+testY+'px)'

  });

});
layer.mousemove(function(e){
  var valueX = (e.pageX* 1/100);
  var valueY = (e.pageY* 1/100);

  objet2.css({
    'transform':'translate('+valueX+'px,'+valueY+'px)'

  });

});


layer.mousemove(function(e){
  var valueX = (e.pageX* -1/150);
  var valueY = (e.pageY* -1/150);

  objet3.css({
    'transform':'translate('+valueX+'px,'+valueY+'px)'

  });

});

layer.mousemove(function(e){
  var valueX = (e.pageX* -1/75);
  var valueY = (e.pageY* -1/75);

  objet4.css({
    'transform':'translate('+valueX+'px,'+valueY+'px)'

  });

});
