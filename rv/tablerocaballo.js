var luz1 = new THREE.PointLight( 0xFFFF00 );
luz1.position.y = 120;
var luz2 = new THREE.PointLight( 0xFF00FF );
luz2.position.y = 100;
luz2.position.x = 280;
luz2.position.z = 280;
var luz3 = new THREE.PointLight( 0x00FFFF );
luz3.position.y = 280;
luz3.position.x = 280;
luz3.position.z = 35*5;
var material1 = new THREE.MeshLambertMaterial( { color: 0xbbbbbb } );
var material2 = new THREE.MeshLambertMaterial( { color: 0x373737 } );
var material3 = new THREE.MeshLambertMaterial( { color: 0x642424 } );
var material4 = new THREE.MeshLambertMaterial( { color: 0xbbbbbb, transparent: true, opacity: .75 } );
var material5 = new THREE.MeshLambertMaterial( { color: 0x373737, transparent: true, opacity: .50 } );
var material6 = new THREE.MeshLambertMaterial( { color: 0x373737, transparent: true, opacity: .25 } );
////////////////
var troncoForma = new THREE.CylinderGeometry(10, 20, 40);
var basee = new THREE.CylinderGeometry(24,24,8);
basee.translate(0,-20,0);
var esferaForma = new THREE.BoxGeometry( 35, 35, 35);
esferaForma.translate(0,40,0);
var baseabajo = new THREE.CylinderGeometry(32,32,8);
baseabajo.translate(0,-24,0);

var figura = new THREE.Shape();
var figura1 = new THREE.Shape();
var figura2 = new THREE.Shape();
var figura3 = new THREE.Shape();
figura.moveTo(0, 0);
figura.lineTo(2, 0);
figura.lineTo(2, 2);
figura.lineTo(0, 2);
figura.lineTo(0, 0);
figura1.moveTo(20, 20);
figura1.lineTo(20, 22);
figura1.lineTo(22, 22);
figura1.lineTo(22, 20);
figura1.lineTo(20, 20);
figura2.moveTo(0, 20);
figura2.lineTo(0, 22);
figura2.lineTo(2, 22);
figura2.lineTo(2, 20);
figura2.lineTo(0, 20);
figura3.moveTo(20, 0);
figura3.lineTo(20, 2);
figura3.lineTo(22, 2);
figura3.lineTo(22, 0);
figura3.lineTo(20, 0);
var forma1 = new THREE.ExtrudeGeometry(figura, {amount: 1} );
var forma2 = new THREE.ExtrudeGeometry(figura1, {amount: 1} );
var forma3 = new THREE.ExtrudeGeometry(figura2, {amount: 1} );
var forma4 = new THREE.ExtrudeGeometry(figura3, {amount: 1} );
forma1.rotateX( Math.PI/2 );
forma2.rotateX( Math.PI/2 );
forma3.rotateX( Math.PI/2 );
forma4.rotateX( Math.PI/2 );
forma1.translate(-11,60,-13);
forma2.translate(-11,60,-13);
forma3.translate(-11,60,-13);
forma4.translate(-11,60,-13);
var malla = new THREE.Mesh(forma1);
var malla1 = new THREE.Mesh(forma2);
var malla2 = new THREE.Mesh(forma3);
var malla3 = new THREE.Mesh(forma4);
var baseeMalla = new THREE.Mesh(basee);
var baseAbajomalla = new THREE.Mesh(baseabajo);
var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);
var arbolForma = new THREE.Geometry();
arbolForma.merge(malla.geometry, malla.matrix);
arbolForma.merge(malla1.geometry, malla1.matrix);
arbolForma.merge(malla2.geometry, malla2.matrix);
arbolForma.merge(malla3.geometry, malla3.matrix);
arbolForma.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
arbolForma.merge(baseeMalla.geometry, baseeMalla.matrix);
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
//arbolForma.translateY(-30);
//Torre2.scale( 1);
/////////////////////////////tablero
var tablero = new Array(); 
for ( var XX = 0; XX < 8; XX ++ ){
for ( var ZZ = 0; ZZ < 8; ZZ ++ ){
	if(((XX%2)&&(!(ZZ%2)))||((!(XX%2))&&(ZZ%2))){
	tablero[(XX*8)+ZZ]= new THREE.Mesh( new THREE.BoxGeometry( 35, 1, 35), material1 );
	tablero[(XX*8)+ZZ].translateX(XX*35);
	tablero[(XX*8)+ZZ].translateZ(ZZ * 35);
	}
	else{
		tablero[(XX*8)+ZZ]= new THREE.Mesh( new THREE.BoxGeometry( 35, 1, 35), material2 );
		tablero[(XX*8)+ZZ].translateX(XX*35);
		tablero[(XX*8)+ZZ].translateZ(ZZ * 35);
	}
}}
//tablero

var arbolMalla = new THREE.Mesh(arbolForma, material1);
var Torre2 = new THREE.Mesh(arbolForma, material4);
var Torre3 = new THREE.Mesh(arbolForma, material5);
var Torre4 = new THREE.Mesh(arbolForma, material6);
//cubo.rotateX( Math.PI/4 );
arbolMalla.scale.set( .5, .5, .5);
Torre2.scale.set( .5, .5, .5);
Torre3.scale.set( .5, .5, .5);
Torre4.scale.set( .5, .5, .5);
arbolMalla.translateX(35*6);
arbolMalla.translateZ(35*2);
Torre2.translateX(35*2);
Torre2.translateZ(35*2);
Torre3.translateX(35*6);
Torre3.translateZ(35*6);
Torre4.translateX(35*2);
Torre4.translateZ(35*6);

arbolMalla.translateY(25);
Torre2.translateY(25);
Torre3.translateY(25);
Torre4.translateY(25);

var escena = new THREE.Scene();
// ,
for ( var l=0; l<64; l ++)
escena.add(  tablero [l] );

escena.add(  arbolMalla , Torre2 , Torre3 , Torre4, luz1, luz2, luz3 );

var mesita = new THREE.BoxGeometry( 300, 10, 300);
var MMesa = new THREE.Mesh(mesita, material3);
MMesa.translateX(125);
MMesa.translateZ(115);
MMesa.translateY(-10);
escena.add( MMesa );

escena.rotateX(Math.PI/4);
escena.rotateY(Math.PI/6);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 900;
camara.position.x = 35*3;

var renderizador = new THREE.WebGLRenderer();
renderizador.shadowMapEnabled= true;
arbolMalla.castShadow = true;
Torre2.castShadow = true;
Torre3.castShadow = true;
Torre4.castShadow = true;
for ( var l=0; l<64; l ++)
tablero[l].receiveShadow = true;
MMesa.receiveShadow = true;

luz1.castShadow = true;
luz2.castShadow = true;
luz3.castShadow = true;
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
