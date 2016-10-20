function Pieza(){
  THREE.Object3D.call(this);
  this.piernaIzq = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernaDer = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo = new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.add(this.piernaIzq,this.piernaDer,cuerpo);
  this.piernaIzq.position.z=-2;
  this.piernaIzq.position.y=-2.5;
  this.piernaDer.position.z=2;
  this.piernaDer.position.z=-2.5;
  cuerpo.position.z=2.5;
  }
  var pieza;
  Pieza.prototype = new THREE.Object3D();
  
  function setup(){
    pieza = new Pieza();
    ////////////////////////
    var material1 = new THREE.MeshBasicMaterial( { color: 0x84422e } );
    var pata = new THREE.Mesh( pieza, material1 );
    //////////////////////////////
    var campoVision = 45;//grados
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;

var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);

camara.position.z = 15;

var escena = new THREE.Scene();
escena.add( pata );

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
    
  }
 function loop(){
  pieza.rotateY=.1;
 }
 
 setup();
 loop();
