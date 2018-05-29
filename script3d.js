/*
 *
 * Cinema Expandido WEB
 * 3D (22 de Mayo 2018)
 * Paula García
 * 
 *
 * URL: 
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */
 
 var camera;
 var scene;
 var renderer;


 var lightDirectional;
 var lightAmbiental;
 var lightHemisphere;

 var cube;
 
 var pillo;
 var loader3D;
 
/*
 *****************************************
 *****************************************
 * Life Cycle METHODS
 *****************************************
 *****************************************
 */
 
 init();
 render();
 
function init(){
 console.log("init");
 initScene();
 
 setupObject3D();
 setupCamera();
 setupRenderer();
 setupLights();
 
 setupObject();
 
 var controlCamera = new THREE.OrbitControls(camera, renderer.domElement);
 
}

function render(){
 //console.log("render");   
 requestAnimationFrame(render);
 
 cube.rotation.x += 0.01;
 cube.rotation.y += 0.01;
 
 
 renderer.render(scene, camera);
}

/*
 *****************************************
 *****************************************
 * SETUP METHODS
 *****************************************
 *****************************************
 */
 
 function initScene(){
   console.log('setupScene');
   scene = new THREE.Scene(); 
 }
 
 function setupCamera(){
   console.log('setupCamera');
   camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000); //tamañ0,ancho/alto, dist.mínima, dist.máxima
   camera.position.set(0,0,5);
   scene.add(camera);
 }
 
  function setupRenderer(){
   renderer = new THREE.WebGLRenderer();
   renderer.setClearColor('#A608A4');
   renderer.setSize(window.innerWidth,window.innerHeight);
   
   document.body.appendChild(renderer.domElement);
 }
 
 function setupLights(){
  lightDirectional = new THREE.DirectionalLight(0XFFFFFF, 0.5);
  lightDirectional.position.set(1,2,1);
  scene.add(lightDirectional);
  
  lightAmbiental = new THREE.AmbientLight(0xb3eaf0,0.7);
  scene.add(lightAmbiental);
  
  lightHemisphere = new THREE.HemisphereLight(0xDB83AB,0xEBCBF2,0.5);
  scene.add(lightHemisphere);

 }
 
  function setupScene(){
   
 }
 
 function setupObject(){

   var geometry = new THREE.BoxGeometry (1,1,1);
   var material = new THREE.MeshStandardMaterial ({color: 0x630DFF});
   
   cube = new THREE.Mesh(geometry, material);
   cube.position.set(0,0,0);
   
   scene.add(cube);
   
 }
 
 function setupObject3D(){
   loader3D = new THREE.ObjectLoader();
   loader3D.load('assets/models/pillo.json',ready3D);
 }
 
 function ready3D(objectJSON){
   pillo = objectJSON;
   scene.add(pillo);
 }
 
 
 
 