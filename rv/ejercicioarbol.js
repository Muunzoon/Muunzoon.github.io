var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();

camara.position.z = 5; 

var renderizador = new THREE.WebGLRenderer();

renderizador.setSize( window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild( renderizador.domElement );

var forma1 = new THREE..boundingSphere( 1);

var forma2 = new THREE.

var material = new THREE.MeshNormalMaterial();

