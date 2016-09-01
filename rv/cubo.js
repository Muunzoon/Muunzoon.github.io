var forma = new THREE.Geometry();
forma.vertices.push( new THREE.Vector3( 1, -1, 1 ) );
forma.vertices.push( new THREE.Vector3( 1, -1, -1 ) );
forma.vertices.push( new THREE.Vector3( -1, -1, -1 ) );
forma.vertices.push( new THREE.Vector3( -1, -1, 1 ) );
forma.vertices.push( new THREE.Vector3( 1, 1, 1 ) );
forma.vertices.push( new THREE.Vector3( 1, 1, -1 ) );
forma.vertices.push( new THREE.Vector3( -1, 1, -1 ) );
forma.vertices.push( new THREE.Vector3( -1, 1, 1 ) );

forma.faces.push( new THREE.Face3( 0, 1, 2 ) );
forma.faces.push( new THREE.Face3( 0, 2, 3 ) );
forma.faces.push( new THREE.Face3( 2, 1, 6 ) );
forma.faces.push( new THREE.Face3( 1, 5, 6 ) );
forma.faces.push( new THREE.Face3( 2, 3, 6 ) );



forma.computeBoundingSphere();
forma.computeFaceNormals();

var  material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);



var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );