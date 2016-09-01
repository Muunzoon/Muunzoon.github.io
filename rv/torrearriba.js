var troncoForma = new THREE.CylinderGeometry(10, 20, 40);
var basee = new THREE.CylinderGeometry(24,24,8);
basee.translate(0,-20,0);
var esferaForma = new THREE.SphereGeometry(26);
esferaForma.translate(0,40,0);
var baseabajo = new THREE.CylinderGeometry(32,32,8);
baseabajo.translate(0,-24,0);

var figura = new THREE.Shape();
var figura1 = new THREE.Shape();
var figura2 = new THREE.Shape();
var figura3 = new THREE.Shape();
figura.moveTo(0, 0);
figura.lineTo(2, 0);
figura.lineTo(2, 2);
figura.lineTo(0, 2);
figura.lineTo(0, 0);
figura1.moveTo(20, 20);
figura1.lineTo(20, 22);
figura1.lineTo(22, 22);
figura1.lineTo(22, 20);
figura1.lineTo(20, 20);
figura2.moveTo(0, 20);
figura2.lineTo(0, 22);
figura2.lineTo(2, 22);
figura2.lineTo(2, 20);
figura2.lineTo(0, 20);
figura3.moveTo(20, 0);
figura3.lineTo(20, 2);
figura3.lineTo(22, 2);
figura3.lineTo(22, 0);
figura3.lineTo(20, 0);
var forma1 = new THREE.ExtrudeGeometry(figura, {amount: 1} );
var forma2 = new THREE.ExtrudeGeometry(figura1, {amount: 1} );
var forma3 = new THREE.ExtrudeGeometry(figura2, {amount: 1} );
var forma4 = new THREE.ExtrudeGeometry(figura3, {amount: 1} );
forma1.rotateX( Math.PI/2 );
forma2.rotateX( Math.PI/2 );
forma3.rotateX( Math.PI/2 );
forma4.rotateX( Math.PI/2 );
forma1.translate(-10,60,0);
forma2.translate(-10,60,0);
forma3.translate(-10,60,0);
forma4.translate(-10,60,0);


var malla = new THREE.Mesh(forma1);
var malla1 = new THREE.Mesh(forma2);
var malla2 = new THREE.Mesh(forma3);
var malla3 = new THREE.Mesh(forma4);

var baseeMalla = new THREE.Mesh(basee);
var baseAbajomalla = new THREE.Mesh(baseabajo);
var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var arbolForma = new THREE.Geometry();

arbolForma.merge(malla.geometry, malla.matrix);
arbolForma.merge(malla1.geometry, malla1.matrix);
arbolForma.merge(malla2.geometry, malla2.matrix);
arbolForma.merge(malla3.geometry, malla3.matrix);

arbolForma.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
arbolForma.merge(baseeMalla.geometry, baseeMalla.matrix);
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);

var escena = new THREE.Scene();
escena.add( arbolMalla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 600;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
