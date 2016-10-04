function Arbol(){
  var troncoForma = new THREE.CylinderGeometry(.25, .5, 1);
  var esfera = new THREE.ShpereGeometry(.65);
  esferaForma.translate(0, 1, 0);
  
  var troncoMalla = new THREE.Mesh(troncoForma);
  var esferaMalla = new THREE.Mesh(esferaForma);
  
  var arbolForma = new THREE.Geometry();
  arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
  arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
  
  var material = new THREE.MeshNormalMaterial();
  this.malla = new THREE.Mesh(arbolForma, material);
}

var CONSTRUCTOR = new Object();

CONSTRUCTOR.setup = function() {
  var arbol1 = new Arbol();
  var arbol2 = new Arbol();
  
  var camara = new THREE.PerspectiveCamera();
camara.position.z = 20;


var renderizador = new THREE.WebGLRenderer();

renderizador.setSize( 600, 600 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
}
