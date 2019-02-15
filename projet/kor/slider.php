<link rel="stylesheet" href="css/styleslider.css">

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
          <div class='Avis'>Voir les avis</div>
        </div>
        <div class='img_slider'> <img src='".$ligne->url."'> </div></li>";

      }

    ?>
</ul>
</div>

  <script type="text/javascript" src="js/sliderproduit.js"></script>
  </body>
</html>
