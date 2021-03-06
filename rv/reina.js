var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
  puntos.push( new THREE.Vector2( 
            Math.sin( i * 0.2 ) * 15 + 50, ( i - 5 ) * 2 ) );
}
var forma = new THREE.LatheGeometry(puntos);
forma.scale(.3,.3,.3);
forma.translate(0,1,0);
var mallag = new THREE.Mesh( forma );


var baseabajo = new THREE.CylinderGeometry(32,32,8);
baseabajo.translate(0,-24,0);
var basee = new THREE.CylinderGeometry(24,24,8);
basee.translate(0,-20,0);
var troncoForma = new THREE.CylinderGeometry(10, 20, 40);
var baseeMalla = new THREE.Mesh(basee);
var baseAbajomalla = new THREE.Mesh(baseabajo);
var troncoMalla = new THREE.Mesh(troncoForma);

forma.merge(mallag.geometry, mallag.matrix);
forma.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
forma.merge(baseeMalla.geometry, baseeMalla.matrix);
forma.merge(troncoMalla.geometry, troncoMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( (Math.PI/4)*-1 );

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
