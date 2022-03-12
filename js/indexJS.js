//const { TorusGeometry } = require("./three");
const count = 0;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 16, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial({
        color: 0xFFEA00,
});
const torus = new THREE.Mesh( geometry, material );

scene.add( torus );


camera.position.z = 13;
camera.position.x = 0;
camera.position.y = 0;

function updateCamera() {
        camera.updateProjectionMatrix();
}

function animate() {
        requestAnimationFrame( animate );
        //camera.position.z += 0.01;
        torus.rotation.x += 0.001;
        torus.rotation.y += 0.001;
        updateCamera();
        camera.fov += 0.25

        renderer.render( scene, camera );
        if(camera.fov > 350){
                return 0
        }
};

animate();