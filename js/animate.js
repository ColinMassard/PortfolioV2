$(document).ready(function(){

  setTimeout(function(){

    $(".main").animate({top: -hauteur + "px"}, 1000);

  }, 1500);
  setTimeout(function(){
    $(".close").hide();

    $(".open").fadeIn();

  }, 2000);


  //    MENU    //

  var flag = 0;
  var hauteur =window.innerHeight ;
  var hauteurimgin =window.innerHeight * 0.5;
  var hauteurimgout =window.innerHeight * 0.55;

  $("#menuItem1").hide();
  $("#menuItem2").hide();
  $("#menuItem3").hide();
  $("#menuItem4").hide();
  $("#menuItem5").hide();



  $("#menuItem1").mouseover(function(){
    $("#imgmenu1").finish().fadeIn({queue: false, duration: 750});
    $("#imgmenu1").finish().animate({top:hauteurimgin + "px"},750);
  });
  $("#menuItem1").mouseout(function(){
    $("#imgmenu1").fadeOut({queue: false, duration: 750});
    $("#imgmenu1").animate({top: hauteurimgout+ "px"},750);
  });
  $("#menuItem2").mouseover(function(){

    $("#imgmenu2").fadeIn({queue: false, duration: 750});
    $("#imgmenu2").animate({top:hauteurimgin + "px"},750);
  });
  $("#menuItem2").mouseout(function(){
    $("#imgmenu2").fadeOut({queue: false, duration: 750});
    $("#imgmenu2").animate({top: hauteurimgout+ "px"},750);
  });
  $("#menuItem3").mouseover(function(){
    $("#imgmenu3").fadeIn({queue: false, duration: 750});
    $("#imgmenu3").animate({top:hauteurimgin + "px"},750);
  });
  $("#menuItem3").mouseout(function(){
    $("#imgmenu3").fadeOut({queue: false, duration: 750});
    $("#imgmenu3").animate({top: hauteurimgout+ "px"},750);
  });
  $("#menuItem3").mouseover(function(){
    $("#imgmenu3").fadeIn({queue: false, duration: 750});
    $("#imgmenu3").animate({top:hauteurimgin + "px"},750);
  });
  $("#menuItem3").mouseout(function(){
    $("#imgmenu3").fadeOut({queue: false, duration: 750});
    $("#imgmenu3").animate({top: hauteurimgout+ "px"},750);
  });
  $("#menuItem4").mouseover(function(){
    $("#imgmenu4").fadeIn({queue: false, duration: 750});
    $("#imgmenu4").animate({top:hauteurimgin + "px"},750);
  });
  $("#menuItem4").mouseout(function(){
    $("#imgmenu4").fadeOut({queue: false, duration: 750});
    $("#imgmenu4").animate({top: hauteurimgout+ "px"},750);
  });
  $("#menuItem5").mouseover(function(){
    $("#imgmenu5").fadeIn({queue: false, duration: 750});
    $("#imgmenu5").animate({top:hauteurimgin + "px"},750);
  });
  $("#menuItem5").mouseout(function(){
    $("#imgmenu5").fadeOut({queue: false, duration: 750});
    $("#imgmenu5").animate({top: hauteurimgout+ "px"},750);
  });

  $(".menuIcon").click(function(){
    if (flag == 0) {
      $(".open").hide();
      $(".close").show();

      $(".main").animate({top: 0 + "px"}, 1000);
      setTimeout(function(){

        $("#menuItem1").fadeIn({queue: false, duration: 1750});
        $("#menuItem1").animate({bottom:hauteur + "px"},750);
        $("#menuItem2").fadeIn({queue: false, duration: 2000});
        $("#menuItem2").animate({bottom:hauteur + "px"}, 1000);
        $("#menuItem3").fadeIn({queue: false, duration: 2250});
        $("#menuItem3").animate({bottom:hauteur + "px"}, 1250);
        $("#menuItem4").fadeIn({queue: false, duration: 2500});
        $("#menuItem4").animate({bottom:hauteur + "px"}, 1500);
        $("#menuItem5").fadeIn({queue: false, duration: 2750});
        $("#menuItem5").animate({bottom:hauteur + "px"}, 1750);

      }, 1000);

      flag = 1;
    }
    else {

      $(".close").hide();

      $("#menuItem1").fadeOut({queue: false, duration: 1500});
      $("#menuItem1").animate({bottom: "0px"}, 2000);
      $("#menuItem2").fadeOut({queue: false, duration: 1250});
      $("#menuItem2").animate({bottom: "0px"}, 1750);
      $("#menuItem3").fadeOut({queue: false, duration: 1000});
      $("#menuItem3").animate({bottom: "0px"}, 1500);
      $("#menuItem4").fadeOut({queue: false, duration: 750});
      $("#menuItem4").animate({bottom: "0px"}, 1250);
      $("#menuItem5").fadeOut({queue: false, duration: 500});
      $("#menuItem5").animate({bottom: "0px"}, 1000);

      setTimeout(function(){
        $(".main").animate({top: -hauteur + "px"}, 1000);
        $(".open").show();
      }, 1000);

      flag = 0;

    }

  });

  $(".menuItem").click(function(){


        $(".close").fadeOut('slow');
        $("#menuItem1").fadeOut({queue: false, duration: 1500});
        $("#menuItem1").animate({bottom: "0px"}, 2000);
        $("#menuItem2").fadeOut({queue: false, duration: 1250});
        $("#menuItem2").animate({bottom: "0px"}, 1750);
        $("#menuItem3").fadeOut({queue: false, duration: 1000});
        $("#menuItem3").animate({bottom: "0px"}, 1500);
        $("#menuItem4").fadeOut({queue: false, duration: 750});
        $("#menuItem4").animate({bottom: "0px"}, 1250);
        $("#menuItem5").fadeOut({queue: false, duration: 500});
        $("#menuItem5").animate({bottom: "0px"}, 1000);

        $("#imgmenu1").fadeOut({queue: false, duration: 750});
        $("#imgmenu1").animate({top: hauteurimgout+ "px"},750);
        $("#imgmenu2").fadeOut({queue: false, duration: 750});
        $("#imgmenu2").animate({top: hauteurimgout+ "px"},750);
        $("#imgmenu3").fadeOut({queue: false, duration: 750});
        $("#imgmenu3").animate({top: hauteurimgout+ "px"},750);
        $("#imgmenu4").fadeOut({queue: false, duration: 750});
        $("#imgmenu4").animate({top: hauteurimgout+ "px"},750);
        $("#imgmenu5").fadeOut({queue: false, duration: 750});
        $("#imgmenu5").animate({top: hauteurimgout+ "px"},750);


  });



  // MAQUETTES //
  var taille = $(".slider ul li").height();
  var tailleslider = $(".slider ul li").length;
  var i=0;

  $("#next").click(function(){
    i++;
    if(i>= tailleslider){
      i--;
    }
    else{
      $(".slider ul li").animate({
        top:  -taille * i + "px"}, 1500);
      }
    });

    $("#previous").click(function(){
      i--;
      if(i < 0){
        i++;
      }
      else{
        $(".slider ul li").animate({
          top:  taille * -i + "px"}, 1500);

        }
      });

    });
    // Réalisation //

    var hauteurslidertitre = $(".slidertitre ul li").height();
    var hauteurslidertexte = $(".slidertexte ul li").height();
    var hauteursliderreal = $(".sliderreal ul li").height();
    var tailleslidertitre = $(".slidertitre ul li").length;
    var j=0;

    $("#next").click(function(){

      j++;
      if(j>= tailleslidertitre){
        j--;
      }
      else{
        $(".slidertitre ul li").animate({
          top:  -hauteurslidertitre * j + "px"}, 1500);

          $(".slidertexte ul li").animate({
            top:  -hauteurslidertexte * j + "px"}, 1500);
            $(".sliderreal ul li").animate({
              top:  -hauteursliderreal * j + "px"}, 1500);
            }

            $("#previous").click(function(){
              j--;
              if(j < 0){
                j++;
              }
              else{
                $(".slidertitre ul li").animate({
                  top:  hauteurslidertitre * -j + "px"}, 1500);
                  $(".slidertexte ul li").animate({
                    top:  hauteurslidertexte * -j + "px"}, 1500);
                    $(".sliderreal ul li").animate({
                      top:  hauteursliderreal * -j + "px"}, 1500);

                    }

                  });


                });
