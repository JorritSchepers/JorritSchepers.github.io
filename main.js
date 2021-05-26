import './style.css'
import * as THREE from 'three'
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio (window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(12, 5, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0x00aa00,
});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

const pointLight = new THREE.PointLight(0x999999)
pointLight.position.set(0,0,0)
scene.add(pointLight);

const pointlight2 = new THREE.PointLight(0xffffff);
pointlight2.position.set(0,35,35);
scene.add(pointlight2);

const geometryLight = new THREE.SphereGeometry(2, 100, 100)
const materialLight = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});
const lightObject = new THREE.Mesh(geometryLight, materialLight);
lightObject.position.set(0, 35, 35)
scene.add(lightObject);

const geometryLight2 = new THREE.SphereGeometry(1, 100, 100)
const materialLight2 = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});
const lightObject2 = new THREE.Mesh(geometryLight2, materialLight2);
scene.add(lightObject2);

const controls = new OrbitControls(camera, renderer.domElement);

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.y += 0.008;


  controls.update();

  renderer.render(scene, camera); 
}

animate();