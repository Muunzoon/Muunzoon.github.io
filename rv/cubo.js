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
forma.faces.push( new THREE.Face3( 6, 3, 2 ) );
forma.faces.push( new THREE.Face3( 3, 6, 7 ) );
forma.faces.push( new THREE.Face3( 7, 3, 0 ) );
forma.faces.push( new THREE.Face3( 0, 4, 7 ) );
forma.faces.push( new THREE.Face3( 4, 5, 0 ) );
forma.faces.push( new THREE.Face3( 4, 6, 7 ) );
forma.faces.push( new THREE.Face3( 1, 5, 0 ) );



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
