var escena = new THREE.Scene();<!crea escena>

var camara = new THREE.PerspectiveCamera();<!objeto para mover camara>

camara.position.z = 5; <!pone la camara en la escena>

var renderizador = new THREE.WebGLRenderer();

renderizador.setSize( window.innerHeight*.95,window.innerHeight*.95);<!es como para perspectiva window te da las dimensiones de la pantalla>

document.body.appendChild( renderizador.domElement );<!mete el renderizador en el body del documento>

<!No hay nada en la escena aun se hace una malla para describir el objeto y material>

var forma = new THREE.BoxGeometry( 1,1,1);

var material = new THREE.MeshNormalMaterial();

var cubo = new THREE.Mesh( forma, material );

cubo.rotateX(-Math.PI/4);

cubo.rotateY(Math.PI/4);

<!generar imagen>
escena.add( cubo );

renderizador.render( escena, camara );
