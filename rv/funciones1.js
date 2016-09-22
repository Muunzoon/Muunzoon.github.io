function init(P){
  var malla = new THREE.Mesh(new THREE.BoxGeometry(P, P, P), new THREE.MeshNormalMaterial());
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

var main = function(P){
  P(1);
  renderizador.render(escena, camara);
  
  }
  var escena, camara, renderizador;
  main(init);
