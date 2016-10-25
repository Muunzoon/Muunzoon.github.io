function Pieza(){
  THREE.Object3D.call(this);
  this.piernaIzq = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernaDer = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo = new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.add(this.piernaIzq,this.piernaDer,cuerpo);
  this.piernaIzq.position.x=-2;
  this.piernaIzq.position.y=-5;
  //this.piernaDer.position.z=2;
  this.piernaDer.position.y=-5;
  this.piernaDer.position.x=2;
  this.piernaIzq.rotateX(1.5);
   this.piernaDer.rotateX(1.5);
  //cuerpo.position.z=2.5;
  }
  var pieza;
  Pieza.prototype = new THREE.Object3D();
var camara = new THREE.PerspectiveCamera();
var escena = new THREE.Scene();
var renderizador = new THREE.WebGLRenderer();
var cont=0.01;
var mov=0;
  function setup(){
    pieza = new Pieza();
    ////////////////////////
    //////////////////////////////

camara.position.z = 50;


escena.add( pieza );

renderizador.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderizador.domElement );
    
  }
 function loop(){
   requestAnimationFrame( loop );
  pieza.rotateY(0.1);
   if (mov>=3.14){
     cont=-cont;
     mov=0;}
   else{
     mov+=.01;}
  pieza.piernaIzq.rotateX(cont);
   pieza.piernaDer.rotateX(-cont);
   renderizador.render( escena, camara );
 }
 
 setup();
 loop();
