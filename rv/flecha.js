var basee = new THREE.CylinderGeometry(24,24,8);
basee.translate(0,-20,0);
var baseeMalla = new THREE.Mesh(basee);

var forma = new THREE.ConeGeometry( 5, 20, 32 );
forma.merge(baseeMalla.geometry, baseeMalla.matrix);
forma.translate(-3,-5,-5);
forma.scale(2,2,2);




var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( (Math.PI/4)*-1 );

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
