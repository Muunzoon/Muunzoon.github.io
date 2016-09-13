var iluminacion = new THREE.AmbientLight(0xFFFFFF);

var forma = new THREE.SphereGeometry( 1 );
var material = new THREE.MeshLambertMaterial( {color: 0x00ff00 } );
var malla = new THREE.Mesh( forma, material );

var escena = new THREE.Scene();
escena.add(malla);
escena.add(iluminacion);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();

renderizador.setSize( 600, 600 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
