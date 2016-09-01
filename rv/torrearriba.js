var troncoForma = new THREE.CylinderGeometry(2.5, 5, 10);
var basee = new THREE.CylinderGeometry(6,6,2);
basee.translate(0,-9,0);
var esferaForma = new THREE.SphereGeometry(6.5);
esferaForma.translate(0,10,0);

var baseeMalla = new THREE.Mesh(basee);
var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var arbolForma = new THREE.Geometry();

arbolForma.merge(baseeMalla.geometry, baseeMalla.matrix);
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);

var escena = new THREE.Scene();
escena.add( arbolMalla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
