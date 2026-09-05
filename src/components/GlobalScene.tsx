import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const SceneContent = () => {
  const rig = useRef<THREE.Group>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);

  useFrame(({ mouse }, delta) => {
    const progress = Math.min(1, window.scrollY / Math.max(1, window.innerHeight * 5));
    if (rig.current) {
      rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, mouse.x * 0.12 + progress * 0.35, delta * 2);
      rig.current.rotation.x = THREE.MathUtils.lerp(rig.current.rotation.x, -mouse.y * 0.06, delta * 2);
      rig.current.position.y = THREE.MathUtils.lerp(rig.current.position.y, -progress * 1.6, delta * 1.8);
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.08;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.05;
  });

  return (
    <>
      <fog attach="fog" args={['#060608', 8, 28]} />
      <ambientLight intensity={0.7} />
      <pointLight position={[0, 4, 2]} intensity={7} color="#ffffff" distance={18} />
      <pointLight position={[-7, -2, 5]} intensity={4} color="#5b72ff" distance={16} />
      <pointLight position={[7, 0, 3]} intensity={3} color="#c064ff" distance={14} />

      <group ref={rig}>
        <Grid
          position={[0, -2.6, 0]}
          args={[30, 30]}
          cellSize={0.55}
          cellThickness={0.65}
          cellColor="#394050"
          sectionSize={3}
          sectionThickness={1.1}
          sectionColor="#d8dbe8"
          fadeDistance={24}
          fadeStrength={1.5}
          infiniteGrid
        />

        <mesh ref={ringA} position={[0, 1.2, -4.5]} rotation={[Math.PI / 2.7, 0, 0]}>
          <torusGeometry args={[3.8, 0.012, 12, 120]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
        </mesh>
        <mesh ref={ringB} position={[0, 1.2, -4.8]} rotation={[Math.PI / 2.7, 0, 0]}>
          <torusGeometry args={[5.8, 0.008, 12, 120]} />
          <meshBasicMaterial color="#7d8cff" transparent opacity={0.12} />
        </mesh>
      </group>

      <Sparkles count={110} scale={[15, 8, 10]} size={1.2} speed={0.35} opacity={0.45} color="#ffffff" />
    </>
  );
};

const GlobalScene = () => (
  <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 2.2, 9], fov: 47 }}>
      <color attach="background" args={['#060608']} />
      <SceneContent />
    </Canvas>
  </div>
);

export default GlobalScene;
