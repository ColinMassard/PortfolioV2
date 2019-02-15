<link rel="stylesheet" href="css/styleprod.css">

<?php
include("configuration/config.php");
include("includes/connection.php");
include "config.php";?>
<section class="section">


  <?php
  include "header.php";
  include "nav.php";
  ?>
  


  <div class="selection">
    <a href="#" id="previous"> <img src="images/top_arrow.png" alt="Fleche verticale vers le haut selection" class="img1"> </a>
    <p class="ArticleActuel"></p>
    <a href="#" id="next"> <img src="images/down-arrow.png" alt="Fleche verticale vers le bas selection" class="img2"> </a>
  </div>
  <div class="content">


    <div class="slider">


      <ul>
        <?php


        $requete = "SELECT id, titre, url FROM produit";
        $resultats=$connection->query($requete);
        $tableau=$resultats->fetchAll(PDO::FETCH_OBJ);
        $resultats->closeCursor();
        foreach ($tableau as $ligne) {
          echo "<li><div class='Number'>";
          if($ligne->id>=10){
            echo $ligne->id;

          }
          else{
            echo "0".$ligne->id;
          }




          echo "</div><div class='Texte'>
          <div class='Titre'>".$ligne->titre."</div>

          </div>
          <div class='img_slider'> <img src='".$ligne->url."'> </div></li>";

        }

        ?>
      </ul>
    </div>

    <script type="text/javascript" src="js/animateproduit.js"></script>
    <div id="serviceclient">
      <a href="#" id="exit"> <img src="images/croixpopup.png" alt="Croix sortie popup"> </a>

    </div>

    <script type="text/javascript">
    $(".popup").click(function(){

      $("#serviceclient").fadeIn(200);
    });

    $("#exit").click(function(){

      $("#serviceclient").fadeOut(200);

    });
    </script>


  </div>


  <?php



  include "footer.php";




  ?>
</div>
