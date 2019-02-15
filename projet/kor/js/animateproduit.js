

var child = $(".slider ul").children().length;
var taille = $(".slider ul li").height();

var i=0;
var NumArticle = 1;
$(".ArticleActuel").text(NumArticle+"/"+child);


$("#next").click(function(){
  if (i < child - 1) {
    i++;
    $(".slider ul li").animate({
      top:  -taille * i + "px"}, 1500);
      NumArticle++;
      $(".ArticleActuel").text(NumArticle+"/"+child);
    }

  });

  $("#previous").click(function(){
    if (i>0) {
      i--;
      $(".slider ul li").animate({
        top:  taille * -i + "px"}, 1500);
        NumArticle--;
        $(".ArticleActuel").text(NumArticle+"/"+child);
      }

    });
