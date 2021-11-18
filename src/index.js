import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, //FOV: degrees - extent of scene in view at anytime
  window.innerWidth / window.innerHeight, //aspect ratio
  0.1, //near render distance - anything less wont render
  1000 //far render distance - anything more wont render
);

const renderer = new THREE.WebGLRenderer(); // new renderer instance
renderer.setSize(window.innerWidth, window.innerHeight); // size of the render, here its full screen.
//for performance could do /2 on both values for 1/4 the size. there is also a 3rd parameter not used

document.body.appendChild(renderer.domElement); // canvas element we render in

const geometry = new THREE.BoxGeometry(); // create a new instance of a cube, this is vertices and faces
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //{green} this colors the cube, there are other materials but for now we use basic
const cube = new THREE.Mesh(geometry, material); // takes a geometry and we apply a material to it
scene.add(cube); // adds cube to scene but default add in is 0,0,0
// this causes the camera and cube to be inside each other so we move the camera out
camera.position.z = 5; // moving the camera out

// this creates the render and animate loop
function animate() {
  requestAnimationFrame(animate); //recursive call
  // setInterval could be used but its bad, requestAnimationFrame pauses when the user goes to another tab, saving power and battery life

  //animating cube
  // anything you want to move or change in three JS must go in the animation loop
  cube.rotation.x += 0.001;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera); // render scene - last line
}

animate(); // this calls the render function every time the screen is refreshed
// so the typical refresh rate or fps is 60 times per second.
