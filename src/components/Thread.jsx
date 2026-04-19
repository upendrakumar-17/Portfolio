import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import "./Thread.css";

const Thread = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(1, 1, 0.1, 100);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    // 🔥 limit DPR for performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    container.appendChild(renderer.domElement);

    const lines = [];
    const lineCount = 10;
    const pointsCount = 220;

    // 🧩 CREATE THREADS
    for (let i = 0; i < lineCount; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(pointsCount * 3);

      for (let j = 0; j < pointsCount; j++) {
        const x = j - pointsCount / 2;

        positions[j * 3] = x;
        positions[j * 3 + 1] = 0;
        positions[j * 3 + 2] = 0;
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: false,
        // opacity: 0.28 + Math.random() * 0.15,
        opacity:1,
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);

      lines.push({
        line,
        positions,

        // 🎯 controlled variation
        amplitude: 1.5 + Math.random() * 2,
        frequency: 0.02 + Math.random() * 0.01,
        speed: 0.4 + Math.random() * 0.004,
        phase: Math.random() * Math.PI * 2,
        depth: 5 + Math.random(),

        offset: (i - lineCount / 2) * 0.5,
      });
    }

    let time = 0;

    // 🎬 ANIMATION LOOP
    const animate = () => {
      requestAnimationFrame(animate);

      lines.forEach((obj) => {
        const {
          line,
          positions,
          amplitude,
          frequency,
          speed,
          phase,
          depth,
          offset,
        } = obj;

        for (let j = 0; j < pointsCount; j++) {
          const x = positions[j * 3];

          // normalize x (-1 to 1)
          const nx = x / (pointsCount / 2);

          // 🎯 BASE SHAPE (matches reference)
          const peak = Math.exp(-Math.pow((nx + 0.2) * 2.5, 2)) * 8;
          const valley = -Math.exp(-Math.pow((nx - 0.3) * 3.5, 2)) * 12;

          const baseCurve = peak + valley;

          // 🎯 envelope (keeps edges clean)
          const envelope = Math.exp(-Math.pow(nx * 1.8, 2));

          // 🎯 flowing wave
          const wave =
            Math.sin((x * frequency) + time * speed + phase) *
            amplitude *
            envelope;

          // 🎯 final Y
          positions[j * 3 + 1] = baseCurve + wave + offset;

          // 🎯 subtle depth
          positions[j * 3 + 2] =
            Math.sin(nx * 3 + time + phase) * depth;
        }

        line.geometry.attributes.position.needsUpdate = true;
      });

      time += 0.01;

      renderer.render(scene, camera);
    };

    // 📐 Resize handling (parent-based)
    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    animate();

    // 🧹 CLEANUP
    return () => {
      observer.disconnect();

      lines.forEach(({ line }) => {
        line.geometry.dispose();
        line.material.dispose();
        scene.remove(line);
      });

      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="thread-container" />;
};

export default Thread;