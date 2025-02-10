import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);
document.body.appendChild(VRButton.createButton(renderer));

// Load FBX Model
const loader = new FBXLoader();
loader.load('modules/cottage_fbx.fbx', function (fbx) {
    fbx.scale.set(0.01, 0.01, 0.01);
    scene.add(fbx);
}, undefined, function (error) {
    console.error('Error loading FBX:', error);
});

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

function animate() {
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}
animate();
