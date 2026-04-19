import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const LiquidMetal = ({
  speed = 0.5,
}) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // ONLY 2 triangles (super fast)
    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: {
          value: new THREE.Vector2(
            container.clientWidth,
            container.clientHeight
          ),
        },
        scale: { value: 0.6 },
        speed: { value: speed },

        // Apple-style subtle palette
        color1: { value: new THREE.Color("#000000") },
        color2: { value: new THREE.Color("#ffffff") },
        color3: { value: new THREE.Color("#000000") },
        color4: { value: new THREE.Color("#ffffff") },

        ax: { value: 3.0 },
        ay: { value: 5.0 },
        az: { value: 7.0 },
        aw: { value: 10.0 },
        bx: { value: 1.0 },
        by: { value: 2.0 },
      },

      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,

      fragmentShader: `
        precision highp float;

        varying vec2 vUv;

        uniform float time;
        uniform float speed;
        uniform float scale;
        uniform vec2 resolution;

        uniform vec3 color1, color2, color3, color4;
        uniform float ax, ay, az, aw;
        uniform float bx, by;

        float cheapNoise(vec3 stp) {
          vec3 p = vec3(stp.st, stp.p);
          vec4 a = vec4(ax, ay, az, aw);

          return mix(
            sin(p.z + p.x * a.x + cos(p.x * a.x - p.z)) *
            cos(p.z + p.y * a.y + cos(p.y * a.x + p.z)),

            sin(1. + p.x * a.z + p.z + cos(p.y * a.w - p.z)) *
            cos(1. + p.y * a.w + p.z + cos(p.x * a.x + p.z)),

            0.436
          );
        }

        void main() {
          vec2 aspect = vec2(resolution.x / resolution.y, 1.0);
          vec2 st = vUv * aspect * scale;

          float t = time * speed * 0.2;

          float S = sin(t);
          float C = cos(t);

          vec2 v1 = vec2(
            cheapNoise(vec3(st, 2.0)),
            cheapNoise(vec3(st, 1.0))
          );

          vec2 v2 = vec2(
            cheapNoise(vec3(st + bx*v1 + vec2(C*1.7, S*2.2), t)),
            cheapNoise(vec3(st + by*v1 + vec2(S*2.3, C*1.8), t))
          );

          float n = 0.5 + 0.5 * cheapNoise(vec3(st + v2, 0.0));

          vec3 color = mix(color1, color2, smoothstep(0.0, 1.0, n*n));
          color = mix(color, color3, smoothstep(0.0, 1.0, length(v1)*0.7));
          color = mix(color, color4, smoothstep(0.0, 1.0, abs(v2.x)*0.5));

          // Apple-style softness
          color /= (n*n + n * 5.0);

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const timer = new THREE.Timer();

    const animate = () => {
      timer.update();

      material.uniforms.time.value = timer.getElapsed();

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      material.uniforms.resolution.value.set(
        container.clientWidth,
        container.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [speed]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default LiquidMetal;