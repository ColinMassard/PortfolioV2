<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" type="image/png" href="img/favicon.png">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maquettes | Colin Massard</title>
</head>
<body>
  <?php
  include("configuration/config.php");
  include("includes/connection.php");
  ?>
  <div id="bandegrise"></div>
  <div id="petittitre">Colin Massard</div>
  <div id="grostitre">Maquettes</div>
  <div id="number">04</div>

  <div class="slider">
    <ul>
      <?php
      $requete = "SELECT id, chemin FROM MAQUETTES";
      $resultats=$connection->query($requete);
      $tableau=$resultats->fetchAll(PDO::FETCH_OBJ);
      $resultats->closeCursor();
      foreach ($tableau as $ligne) {
        echo "<li><img src='".$ligne->chemin."' id='img'".$ligne->id."></li>";}
      ?>
      </ul>
    </div>

    <div id="buttons">
      <a id="previous"><img src="img/gauche.png" alt="Fleche Gauche"></a>
      <a id="next"><img src="img/droite.png" alt="Fleche Droite"></a>
    </div>

      <div class="menuIcon">
        <div class="open">
          <span class="line1"></span>
          <span class="line2"></span>
        </div>
        <div class="close">
          <span class="line3"></span>
          <span class="line4"></span>
        </div>

      </div>
      <div class="main">
        <div class="glitch"></div>
        <div class="menu">

            <span class="menuItem" data="ACCUEIL" id="menuItem1"><a href="javascript:delay('index.html')">ACCUEIL</a></span>
            <span class="menuItem" data="COMPETENCES" id="menuItem2"><a href="javascript:delay('competences.html')">COMPÉTENCES</a></span>
            <span class="menuItem" data="MAQUETTES" id="menuItem3"><a href="javascript:delay('realisations.php')">RÉALISATIONS</a></span>
            <span class="menuItem" data="REALISATIONS" id="menuItem4"><a href="javascript:delay('maquettes.php')">MAQUETTES</a></span>
            <span class="menuItem" data="CONTACT" id="menuItem5"><a href="javascript:delay('contact.html')">CONTACT</a></span>
        </div>
        <div class="imgmenu">

        <img src="img/IMG_81752.png" alt="accueil" id="imgmenu1">
        <img src="img/competences.png" alt="competences" id="imgmenu2">
        <img src="img/travaux.png" alt="réalisations" id="imgmenu3">
        <img src="img/maquette.png" alt="maquette" id="imgmenu4">
        <img src="img/contact.png" alt="contact" id="imgmenu5">
</div>
          </div>
      <div id="bandemenu">

      <div id="rs">
        <a href="https://github.com/ColinMassard/"><img src="img/github-logo.png" alt="github icon"></a>
        <a href="https://www.linkedin.com/in/colin-massard-b37a6b173/"><img src="img/linkedin.png" alt="Linkedin icon"></a>


      </div>
    </div>
    <div id="rsmobile">
      <a href="https://github.com/ColinMassard/"><img src="img/github-logonoir.png" alt="github icon"></a>
      <a href="https://www.linkedin.com/in/colin-massard-b37a6b173/"><img src="img/linkedinnoir.png" alt="Linkedin icon"></a>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="js/animate.js"></script>
    <script type="text/javascript">
  function delay (URL) {
      setTimeout( function() { window.location = URL }, 1000 );
  }
  </script>
  </body>
  </html>
