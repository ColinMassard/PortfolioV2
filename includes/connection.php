<?php
try {
$options=array(PDO::MYSQL_ATTR_INIT_COMMAND=>"SET NAMES ".$encodage);
$connection=new PDO('mysql:host='.$hote.';port='.$port.'; dbname='.$nom_bd,$identifiant,$mot_de_passe,$options);
}
catch(PDOException $erreur)
{
// Gestion des erreurs
echo 'Ce service est momentanément indisponible.';
exit() ;
}
?>
