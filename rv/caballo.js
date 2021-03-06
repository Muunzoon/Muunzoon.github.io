var baseabajo = new THREE.CylinderGeometry(32,32,8);
baseabajo.translate(0,-24,0);
var basee = new THREE.CylinderGeometry(24,24,8);
basee.translate(0,-20,0);
var baseeMalla = new THREE.Mesh(basee);
var baseAbajomalla = new THREE.Mesh(baseabajo);


var figura = new THREE.Shape();
//float Arx[]={,13,13,14,14};
//float Ary[]={,188,188,186,186,184,184};
//8,7,7,7,9,12,14,14,16,17,15,13,12,13,14 
//184,186,186,189,192,194,195,196,194,193,191,190,190,188,184        0=184         0=8
figura.moveTo(0, 0);
figura.lineTo(-1, 2);
figura.lineTo(-1, 2);
figura.lineTo(-1, 5);
figura.lineTo(1, 8);
figura.lineTo(4, 10);
figura.lineTo(6, 11);
figura.lineTo(6, 12);
figura.lineTo(8, 10);
figura.lineTo(9, 9);
figura.lineTo(7, 7);
figura.lineTo(5, 6);
figura.lineTo(4, 6);
figura.lineTo(5, 4);
figura.lineTo(6, 2);
figura.lineTo(6, 0);
figura.lineTo(0, 0);
var forma = new THREE.ExtrudeGeometry( figura, {amount: 10} );
forma.translate(-3,-5,-5);
forma.scale(2,2,2);

forma.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
forma.merge(baseeMalla.geometry, baseeMalla.matrix);

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
