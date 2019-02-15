// Initialisation
var element = document.querySelector("#container"); //Element cibler
var scene = new THREE.Scene(); //Initialisation de la scène
var camera = new THREE.PerspectiveCamera( 75, element.offsetWidth/element.offsetHeight, 0.1, 1000 ); //Initialisation du ratio
camera.position.z = 6.15; //Initialisation position de la caméra

var renderer = new THREE.WebGLRenderer({alpha:true}); //Initialisation du background
renderer.setClearColor( 0xFF0000, 0 ); //Initialisation de la couleur du background

renderer.setSize( element.offsetWidth, element.offsetHeight ); //Initialisation de la taille de la scène
element.appendChild( renderer.domElement ); //Initialisation du canvas

controls = new THREE.OrbitControls(camera, renderer.domElement); //Gestion du control avec la souris

var mesh; //Definition variable globale
var depSpot1 = -0.1; //Déplacement du spot 1
var depSpot2 = 0.1; //Déplacement du spot 2
var scale = 1; //Definition de la taille de l'objet;
var tailleEcran = window.innerWidth; //Recupère la taille de l'écran

//Création du responsive de l'objet pour smartphone au chargement
if(tailleEcran < 480) {
  scale = 0.65;
}else{
  scale = 1;
}

//Création du responsive
window.addEventListener('resize', function() {
  var width = element.offsetWidth; //Stockage de la largeur de l'élement dans une vraible
  var height = element.offsetHeight; //Stockage de la hauteur de l'élement dans une vraible
  var tailleEcran = window.innerWidth;

  renderer.setSize(width, height); //Redimenssion du rendu
  camera.aspect = width / height; //Redimenssion de la camera
  camera.updateProjectionMatrix();

  //Création du responsive de l'objet pour smartphone au resize
  if(tailleEcran < 480) {
    scale = 0.65;
    mesh.scale.set(scale,scale,scale);
  }else{
    scale = 1;
    mesh.scale.set(scale,scale,scale);
  }

})
//Initialisation de l'objet Blender

var loader = new THREE.JSONLoader();
loader.load('js/CHAISE.json', addObjectToScene);



//Création de la matière de l'objet
function addObjectToScene(geometry, material) {

  var material = new THREE.MeshPhongMaterial({ color: 0xf7f1e3}); //Definition de la matière et la couleur

  mesh = new THREE.Mesh(geometry, material); //Création de l'objet
  mesh.scale.set(scale,scale,scale);
  mesh.position.y = 0; //Postion Y de l'objet
  mesh.position.x = 0; //Postion X de l'objet
  mesh.position.z = 0; //Postion Z de l'objet
  mesh.rotation.y = 3.9; //Rotation Y de l'objet
  scene.add(mesh); //Ajout de l'objet à la scène

}

//Création des lumières
var spotLight = new THREE.SpotLight( 0xf7f1e3, 0.5 ); //Initialisation du spot 1
spotLight.position.set( 10, 15, 10 ); //Position du spot 1
scene.add( spotLight ); //Ajout du spot 1 à la scène

var spotLight2 = new THREE.SpotLight( 0xffffff, 0.5 ); //Initialisation du spot 2
spotLight2.position.set( -10, 15, 10 ); //Position du spot 2
scene.add( spotLight2 ); //Ajout du spot 2 à la scène

var light = new THREE.AmbientLight( 0xFFFFFF, 0.3 ); // Initialisation de la lumière ambiante
scene.add(light); //Ajout de la lumière ambiante à la scène

//Création de l'animation de la scène
function render() {
  requestAnimationFrame(render); //Répétition de l'animation

  if(spotLight.position.z <= -10) { //Condition de rebond de la lumière
    depSpot1 = 0.1;
    depSpot2 = -0.1;
  }

  if(spotLight.position.z >= 10) { //Condition de rebond de la lumière
    depSpot1 = -0.1;
    depSpot2 = 0.1;
  }

  if( typeof mesh != "undefined" ){ //Verification du chargement de l'objet
  mesh.rotation.y += 0.005; //Rotation de l'objet
}




spotLight.position.z += depSpot1; //Déplacement du spot 1
spotLight2.position.z += depSpot2; //Déplacement du spot 2

//mesh.scale.set(scale, scale, scale); //Modifie la taille de l'objet

renderer.render( scene, camera ); //Actualisation du rendu de la scène

};

render(); //Appelle de la fonction d'animation de la scène
