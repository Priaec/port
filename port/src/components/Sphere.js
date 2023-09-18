import React, { Component } from 'react';
import * as THREE from 'three';
import '../styles/Sphere.css';

class Sphere extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount() {
    // Create a scene
    this.scene = new THREE.Scene();

    // Create a camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Create a WebGL renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.props.width, this.props.height);
    this.mount.appendChild(this.renderer.domElement);

    // Create a custom geometry with angles or deformations
    const geometry = new THREE.IcosahedronGeometry(1, 2); // Adjust the parameters for your desired shape

    // Create a basic material (you can customize this)
    const material = new THREE.MeshBasicMaterial({ color: this.props.color, wireframe: true }); // Wireframe material for visualization

    // Create a mesh (sphere) by combining the geometry and material
    this.sphere = new THREE.Mesh(geometry, material);

    // Add the sphere to the scene
    this.scene.add(this.sphere);

    // Start the animation loop
    this.animate();
  }

  componentWillUnmount() {
    // Clean up resources when the component unmounts
    this.renderer.dispose(); // Dispose of the renderer
    this.mount.removeChild(this.renderer.domElement); // Remove the renderer's canvas element
    this.scene.remove(this.sphere); // Remove the sphere from the scene
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    // Rotate the sphere
    this.sphere.rotation.x += 0.01;
    this.sphere.rotation.y += 0.01;

    // Render the scene with the camera
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return <div ref={(ref) => (this.mount = ref)} className='sphere-container'/>;
  }
}

export default Sphere;
