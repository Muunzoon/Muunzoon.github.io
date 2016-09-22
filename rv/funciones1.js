function init(P){
  malla = new THREE.Mesh(new THREE.BoxGeometry(P, P, P), new THREE.MeshNormalMaterial());
  escena = new THREE.Scene();
  escena.add(malla);
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 100;
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700, 700);
  document.body.appendChild( renderizador.domElement );
  step = 0.1
}

var loop = function(){
  requestAnimationFrame(loop);
  renderizador.render(escena, camara);
  malla.rotateY(0.01);
  if (Math.abs(malla.position)>=1)
  step = -step;
  malla.position.x+= step;
  
  
  }
  var escena, camara, renderizador, malla, step;
  init(1);
  loop();
