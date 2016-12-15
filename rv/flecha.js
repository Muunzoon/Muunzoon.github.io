var basee = new THREE.CylinderGeometry(2,2,12);
basee.translate(0,-10,0);
var baseeMalla = new THREE.Mesh(basee);

var forma = new THREE.ConeGeometry( 5, 10, 16 );
forma.merge(baseeMalla.geometry, baseeMalla.matrix);
forma.translate(-3,-5,-5);
forma.scale(2,2,2);
malla.rotateZ( (Math.PI/4) );


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
