
var escena = new THREE.Scene();
///////////////
var manager = new THREE.LoadingManager();
				manager.onProgress = function( item, loaded, total ) {
					console.log( item, loaded, total );
				};
var onProgress = function( xhr ) {
					if ( xhr.lengthComputable ) {
						var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
					}
				};

var loader = new THREE.FBXLoader( manager );
loader.load( 'red.FBX', function( object ) {
	object.traverse( function( child ) {
		if ( child instanceof THREE.Mesh ) {
							// pass
						}
	});
	escena.add( object );/////////////////////
			});


///////////////////

var camara = new THREE.PerspectiveCamera();
camara.position.z = 300;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
