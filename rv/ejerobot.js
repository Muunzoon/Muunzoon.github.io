function Agent (x=0, y=0){
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
}
Agent.prototype=new THREE.Object3D();

Agent.prototype.sense=function(enviroment){};
Agent.prototype.plan=function(enviroment){};
Agent.prototype.act=function(enviroment){};

Enviroment()

function Enviroment(){
  THREE.Scene.call(this);
}

Enviroment.prototype=new THREE.Scene();

Enviroment.prototype.sense=function(){
  for (var i =0;i<this.children.length; i++){
    if (this.children[i].sense !== undefined)
      this.children[i].sense(this);
  }
}
Enviroment.prototype.plan = function(){
  for (var i =0;i<this.children.length; i++){
    if (this.children[i].plan !== undefined)
      this.children[i].plan(this);
  } 
}
Enviroment.prototype.act = function(){
  for (var i =0;i<this.children.length; i++){
    if (this.children[i].act !== undefined)
      this.children[i].act(this);
  } 
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

function Wall(size,x,y){
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size,size),new THREE.MeshNormalMaterial());
  this.size=size;
  this.position.x=x;
  this.position.y=y;
}

Wall.prototype=new THREE.Mesh();

Enviroment.prototype.setMap=function(map){
  var _offset = Math.floor(map.length/2);
  
  for (var i =0; i<map.length;i++)
    for (var j =0; j<map.length;j++){
      if (map[i][j]==="x")
        this.add(new Wall(1,j-_offset,-(i-_offset)));
      else if
        this.add(new Robot(.5,j-_offset,-(i-_offset)));
    }
}

function setup(){
  var mapa = new Array();
  mapa[0]="xxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1]="xr               r      x";
  mapa[2]="x                       x";
  mapa[3]="x                       x";
  mapa[4]="x                       x";
  mapa[5]="x                       x";
  mapa[6]="x                       x";
  mapa[7]="x                       x";
  mapa[8]="xxxx     xxxxxxxxxxxxxxxx";
  mapa[9]="x  r         r      rrr x";
  mapa[10]="x                       x";
  mapa[11]="x                       x";
  mapa[12]="x   r                 r x";
  mapa[13]="xr               r      x";
  mapa[14]="x                       x";
  mapa[15]="x                      xx";
  mapa[16]="xxxx      xxxxxxxxxxxxxxx";
  mapa[17]="xr         r            x";
  mapa[18]="x     r              r  x";
  mapa[19]="x                       x";
  mapa[20]="xxx      xxxxxxxxxxxxxxxx";
  mapa[21]="x            r    r     x";
  mapa[22]="x                       x";
  mapa[23]="xr                     rx";
  mapa[24]="xxxxxxxxxxxxxxxxxxxxxxxxx";
  
  enviroment = new Enviroment();
  
  enviroment.setMapa(mapa);
  
  camera = new THREE.PerspectiveCamera();
  camera.postion.z=30;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth*.95, window.innerHeight*.95);
  document.body.appendChild( renderer.domElement );
  
  enviroment.add(camera);
}

function loop(){
  requestAnimationFrame( loop );
  
  enviroment.sense();
  enviroment.plan();
  enviroment.act();
  renderer.render( enviroment, camara );
}

setup();
loop();

