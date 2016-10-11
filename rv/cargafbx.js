var loader = new THREE.FBXLoader( manager );
loader.load( 'models/fbx/xsi_man_skinning.fbx', function( object ) {
	object.traverse( function( child ) {
		if ( child instanceof THREE.Mesh ) {
							// pass
						}
	}
			}


///////////////////

var escena = new THREE.Scene();
escena.add( object );/////////////////////

var camara = new THREE.PerspectiveCamera();
camara.position.z = 30;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
