function Pieza(){
  THREE.Object3D.call(this);
  this.piernaIzq = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernaDer = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo = new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.add(this.piernaIzq,this.piernaDer,cuerpo);
  this.piernaIzq.position.z=-2;
  this.piernaIzq.position.y=-7.5;
  this.piernaDer.position.z=2;
  this.piernaDer.position.z=-7.5;
  cuerpo.position.z=2.5;
  }
  var pieza;
  Pieza.prototype = new THREE.Object3D();
  
  function setup(){
    pieza = new Pieza();
    ////////////////////////
    //////////////////////////////
var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var escena = new THREE.Scene();
escena.add( pieza );

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
    
  }
 function loop(){
  pieza.rotateY=.1;
  pieza.piernaIzq.rotateZ(0.1);
   
 }
 
 setup();
 loop();
