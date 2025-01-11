const text = "Matrix 3D - Three.js";
document.getElementById("text").innerHTML = text;

// Configuração aqui
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criar o cubo 3D
const geometry = new THREE.BoxGeometry(1, 1, 1); // Tamanho do cubo

const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00, // Cor verde do cubo
  wireframe: true, //Cor verde...., wireframe: True = sem preenchimento, apenas linhas... False = preenchido, sem linhas, apenas cor
}); 

const cube = new THREE.Mesh(geometry, material);

// add o cubo na tela
scene.add(cube);

// camera
camera.position.z = 2; // Zoom da câmera

// Animacao como rotaçao
function animate() {
  requestAnimationFrame(animate);

  // Rotação cubo
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Renderizar a tela
  renderer.render(scene, camera);
}

// inicia animação
animate();

// responsivo
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
