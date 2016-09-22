function init(P){
  var malla = new THREE.Mesh(new THREE.BoxGeometry(P, P, P), new THREE.MeshNormalMaterial());
  escena = new THREE.Scene();
  escena.add(malla);
  camara = new THREE.PerspectiveCamera();
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700, 700);
  document.body.appendChild( renderizador.domElement );
  renderizador.render( escena, camara );
  
}

var main = function(P){
  renderizador.render(escena, camara);
  
  }
  var escena, camara, renderizador;
  init(1);
  main(2);
