"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const cyan = new THREE.Color("#22d3ee");
    const violet = new THREE.Color("#a78bfa");

    const group = new THREE.Group();
    scene.add(group);

    const coreGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const coreWire = new THREE.LineSegments(
      new THREE.WireframeGeometry(coreGeo),
      new THREE.LineBasicMaterial({ color: cyan, transparent: true, opacity: 0.35 })
    );
    group.add(coreWire);

    const ringMat = new THREE.LineBasicMaterial({ color: violet, transparent: true, opacity: 0.3 });
    const rings: THREE.LineLoop[] = [];
    [0, Math.PI / 3, (Math.PI / 3) * 2].forEach((tilt) => {
      const points = new THREE.EllipseCurve(0, 0, 3.4, 3.4).getPoints(96);
      const geo = new THREE.BufferGeometry().setFromPoints(
        points.map((p) => new THREE.Vector3(p.x, p.y, 0))
      );
      const ring = new THREE.LineLoop(geo, ringMat);
      ring.rotation.x = Math.PI / 2 + tilt;
      ring.rotation.y = tilt * 0.6;
      rings.push(ring);
      group.add(ring);
    });

    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 4.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: cyan,
      size: 0.035,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    const onMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.12 + mouseX * 0.3;
      group.rotation.x = mouseY * 0.2;
      rings.forEach((ring, i) => {
        ring.rotation.z = t * (0.05 + i * 0.02);
      });
      particles.rotation.y = -t * 0.03;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      renderer.dispose();
      coreGeo.dispose();
      particleGeo.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 -z-10 opacity-70"
      aria-hidden
    />
  );
}
