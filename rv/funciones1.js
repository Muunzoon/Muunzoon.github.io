function init(P){
  malla = new THREE.Mesh(new THREE.BoxGeometry(P, P, P), new THREE.MeshNormalMaterial());
  escena = new THREE.Scene();
  escena.add(malla);
  camara = new THREE.PerspectiveCamera();
  var camara = new THREE.PerspectiveCamera();
camara.position.z = 15;
camara.position.y = 5;
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700, 700);
  document.body.appendChild( renderizador.domElement );
  renderizador.render( escena, camara );
  
}

var loop = function(){
  requestAnimationFrame(loop);
  renderizador.render(escena, camara);
  malla.rotateY(0.01);
  
  }
  var escena, camara, renderizador, malla;
  init(1);
  loop();
