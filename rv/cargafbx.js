var escena = new THREE.Scene();

////////////////
var ambientLight, light;

ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
	escena.add(ambientLight);
	
	light = new THREE.PointLight(0xffffff, 0.8, 18);
	light.position.set(-3,6,-3);
	light.castShadow = true;
	light.shadow.camera.near = 0.1;
	light.shadow.camera.far = 25;
	escena.add(light);
//////////////
var mesh;
var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("model/castilo.mtl", function(materials){
		
		materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		
		objLoader.load("model/castilo.obj", function(mesh){
		
			mesh.traverse(function(node){
				if( node instanceof THREE.Mesh ){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
		
			escena.add(mesh);
			mesh.position.set(-5, 0, 4);
			mesh.rotation.y = -Math.PI/4;
		});
		
	});
/*var mtload = new THREE.MTLLoader();
mtload.load('castilo.mtl',function (materials){
	materials.preload();
var loader = new THREE.OBJLoader();
	loader.setMaterials(materials);
loader.load('castilo.obj',
	// resource URL
	// Function when resource is loaded
	function ( object ) {
		escena.add( object );
	}
);});*/
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
camara.position.z = 300;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
