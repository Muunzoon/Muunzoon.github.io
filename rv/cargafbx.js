var forma = new THREE.BoxGeometry( 1,1,1);

var material = new THREE.MeshNormalMaterial();

var cubo = new THREE.Mesh( forma, material );

cubo.rotateX(-Math.PI/4);

cubo.rotateY(Math.PI/4);

///////////////////

var escena = new THREE.Scene();
escena.add( cubo );/////////////////////

var camara = new THREE.PerspectiveCamera();
camara.position.z = 300;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
