<script lang="ts">
  import * as THREE from 'three';
  import {onMount} from "svelte";

  let canvas: HTMLCanvasElement;
  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: canvas
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    let meshes: THREE.Mesh[] = [];
    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.IcosahedronGeometry()
      const material = new THREE.MeshBasicMaterial({color: 0xffd4d4});
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5)
      meshes.push(mesh);
      scene.add(mesh);
      mesh.scale.set(0.03, 0.03, 0.03);
    }

    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    scene.add(light);

    camera.position.z = 5;

    let prevDelta = 0
    function animate(delta: number) {
      let d = delta - prevDelta;
      for (let mesh of meshes) {
        mesh.rotation.x += d * 1e-4;
        mesh.rotation.y += d * 1e-4;
        mesh.position.y += d * 3e-5;
        if(mesh.position.y > 3) {
          mesh.position.y -= 6;
        }
      }

      renderer.render(scene, camera);
      prevDelta = delta;
    }

    renderer.setAnimationLoop(animate);
  })

</script>

<div>
    <canvas bind:this={canvas}></canvas>
</div>

<style>
    div {
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;

        z-index: -1;
    }
</style>