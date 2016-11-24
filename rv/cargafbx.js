var escena = new THREE.Scene();

////////////////*
var loader = new THREE.OBJLoader();

loader.load(
	// resource URL
	'castilo.obj',
	// Function when resource is loaded
	function ( object ) {
		escena.add( object );
	}
);
/*var manager = new THREE.LoadingManager();
				manager.onProgress = function( item, loaded, total ) {
					console.log( item, loaded, total );
				};
var onProgress = function( xhr ) {
					if ( xhr.lengthComputable ) {
						var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
					}
				};

var onError = function( xhr ) {
				};

var loader = new THREE.FBXLoader( manager );
loader.load( 'prueba2.FBX', function( object ) {
	object.traverse( function( child ) {
		if ( child instanceof THREE.Mesh ) {
							// pass
						}
		if ( child instanceof THREE.SkinnedMesh ) {
			if ( child.geometry.animations !== undefined || child.geometry.morphAnimations !== undefined ) {
				child.mixer = new THREE.AnimationMixer( child );
				mixers.push( child.mixer );
				var action = child.mixer.clipAction( child.geometry.animations[ 0 ] );
				action.play();
				}
			}
		} );
		escena.add( object );
	}, onProgress, onError );
*/


///////////////////

var camara = new THREE.PerspectiveCamera();
camara.position.z = 30;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
