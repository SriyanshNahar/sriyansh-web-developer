import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, Sparkles, Text } from '@react-three/drei';
import * as THREE from 'three';

type V3 = [number, number, number];

const Glass = ({ position, size }: { position: V3; size: V3 }) => (
  <mesh position={position}>
    <boxGeometry args={size} />
    <meshStandardMaterial color="#101319" metalness={0.25} roughness={0.12} transparent opacity={0.72} />
  </mesh>
);

const Sign = ({ position, title, sub, scale = 0.18 }: { position: V3; title: string; sub?: string; scale?: number }) => (
  <group position={position}>
    <Text fontSize={scale} color="#f3e6d0" anchorX="center" anchorY="middle">{title}</Text>
    {sub ? <Text position={[0, -scale * 1.5, 0.02]} fontSize={scale * 0.34} color="#c5a878" anchorX="center" anchorY="middle" letterSpacing={0.08}>{sub}</Text> : null}
  </group>
);

const Poster = ({ position, title, accent }: { position: V3; title: string; accent: string }) => (
  <group position={position}>
    <mesh>
      <boxGeometry args={[1.05, 1.35, 0.04]} />
      <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.08} roughness={0.42} />
    </mesh>
    <Text position={[0, 0.08, 0.035]} fontSize={0.13} color="#fff" anchorX="center">{title}</Text>
    <Text position={[0, -0.16, 0.035]} fontSize={0.055} color="#fff" anchorX="center">SRIYANSH STUDIO</Text>
  </group>
);

const FloorFrame = ({ y, label, room, posters }: { y: number; label: string; room: string; posters?: [string, string][] }) => (
  <group position={[0, y, 0]}>
    <mesh position={[0, 0, -0.58]}>
      <boxGeometry args={[9.2, 2.7, 0.5]} />
      <meshStandardMaterial color="#111318" metalness={0.45} roughness={0.45} />
    </mesh>
    <Glass position={[0, 0, -0.26]} size={[8.45, 2.28, 0.08]} />
    <mesh position={[0, 1.35, -0.18]}>
      <boxGeometry args={[9.45, 0.16, 0.7]} />
      <meshStandardMaterial color="#1a1c22" metalness={0.6} roughness={0.35} />
    </mesh>
    <mesh position={[0, -1.35, -0.18]}>
      <boxGeometry args={[9.45, 0.13, 0.7]} />
      <meshStandardMaterial color="#17191e" metalness={0.5} roughness={0.4} />
    </mesh>

    <group position={[0, 0.95, 0.02]}>
      <Sign position={[0, 0, 0]} title={label} sub={room} scale={0.18} />
    </group>

    <pointLight position={[-3.2, 0.5, 1.1]} intensity={2.2} color="#d89a4b" distance={6} />
    <pointLight position={[3.2, 0.3, 1.1]} intensity={1.8} color="#ffd4a1" distance={6} />

    {posters?.map(([title, accent], i) => (
      <Poster key={title} position={[-2.9 + i * 1.9, -0.18, -0.18]} title={title} accent={accent} />
    ))}

    <mesh position={[0, -0.65, 0.25]}>
      <boxGeometry args={[6.6, 0.12, 0.65]} />
      <meshStandardMaterial color="#252017" metalness={0.35} roughness={0.35} />
    </mesh>
  </group>
);

const Studio = () => {
  const root = useRef<THREE.Group>(null);
  const target = useRef(new THREE.Vector3());

  useFrame(({ camera, mouse }, delta) => {
    const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
    const p = Math.min(1, window.scrollY / max);

    const desired = new THREE.Vector3(
      THREE.MathUtils.lerp(0, mouse.x * 0.42, 0.7),
      THREE.MathUtils.lerp(1.8, 2.6, p),
      THREE.MathUtils.lerp(14.2, 7.2, Math.min(1, p * 1.5))
    );

    camera.position.lerp(desired, 1 - Math.exp(-delta * 1.35));
    target.current.set(0, THREE.MathUtils.lerp(0.7, 2.6, p * 0.78), 0);
    camera.lookAt(target.current);

    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, mouse.x * 0.045, 1 - Math.exp(-delta * 1.8));
      root.current.position.y = THREE.MathUtils.lerp(root.current.position.y, -p * 0.18, 1 - Math.exp(-delta));
    }
  });

  return (
    <group ref={root} position={[0, 0, 0]}>
      <mesh position={[-3.8, 3.95, -0.78]}>
        <boxGeometry args={[1.35, 7.5, 0.72]} />
        <meshStandardMaterial color="#0c0e12" metalness={0.58} roughness={0.36} />
      </mesh>
      <Sign position={[-3.8, 5.15, -0.36]} title="SN" sub="STUDIO" scale={0.52} />
      <Text position={[-3.8, 3.85, -0.34]} fontSize={0.12} color="#d7c5a6" anchorX="center">DESIGN · CREATE · GROW</Text>
      <Text position={[-3.8, 2.7, -0.34]} fontSize={0.095} color="#8f939c" anchorX="center" lineHeight={1.5}>A CREATIVE STUDIO{'
'}FOR BIGGER IDEAS</Text>

      <FloorFrame
        y={-1.65}
        label="WELCOME TO SRIYANSH STUDIO"
        room="GROUND FLOOR · CLIENT EXPERIENCE"
        posters={[['BRAND', '#a86b35'], ['IDENTITY', '#6a4ba0'], ['IDEAS', '#455f96']]}
      />
      <FloorFrame
        y={1.15}
        label="THE DESIGN FLOOR"
        room="FIRST FLOOR · GRAPHIC DESIGN STUDIO"
        posters={[['FORM', '#2d5cff'], ['MOVE', '#a64de0'], ['MAKE', '#d36b36']]}
      />
      <FloorFrame
        y={3.95}
        label="3D · WEB · MOTION"
        room="SECOND FLOOR · CREATIVE LAB"
        posters={[['BUILD', '#198d91'], ['CODE', '#3150d0'], ['IMPACT', '#c55c6a']]}
      />

      <mesh position={[0, 5.48, -0.52]}>
        <boxGeometry args={[9.5, 0.18, 0.85]} />
        <meshStandardMaterial color="#191b20" metalness={0.65} roughness={0.28} />
      </mesh>
      <Sign position={[1.1, 5.78, -0.28]} title="IDEAS LIVE HERE" scale={0.18} />

      <mesh position={[0, -3.15, 0]}>
        <boxGeometry args={[10.6, 0.28, 3.3]} />
        <meshStandardMaterial color="#161719" roughness={0.55} metalness={0.35} />
      </mesh>
      <mesh position={[0, -2.75, -0.18]}>
        <boxGeometry args={[4.6, 0.12, 1.2]} />
        <meshStandardMaterial color="#c7a170" emissive="#4a321a" emissiveIntensity={0.35} />
      </mesh>
      <Sign position={[0, -2.15, 0.25]} title="SRIYANSH STUDIO" sub="CREATIVE MINDS · BOLDER BRANDS" scale={0.28} />

      <pointLight position={[-4.5, 5.5, 2]} intensity={3.1} color="#c9863c" distance={8} />
      <pointLight position={[4.2, 4.2, 1.8]} intensity={2.4} color="#ffbd70" distance={8} />
    </group>
  );
};

const Scene = () => (
  <>
    <fog attach="fog" args={['#060608', 12, 30]} />
    <ambientLight intensity={0.5} />
    <directionalLight position={[4, 8, 6]} intensity={1.25} color="#f3e8d6" />
    <Studio />
    <Grid position={[0, -3.32, 0]} args={[36, 36]} cellSize={0.65} cellThickness={0.5} cellColor="#292a31" sectionSize={3.25} sectionThickness={1} sectionColor="#5a5b66" fadeDistance={24} fadeStrength={1.4} infiniteGrid />
    <Sparkles count={90} scale={[16, 11, 10]} size={1.05} speed={0.2} opacity={0.3} color="#f2d6ae" />
  </>
);

export default function GlobalScene() {
  return (
    <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.8, 14.2], fov: 44 }}>
        <color attach="background" args={['#060608']} />
        <Scene />
      </Canvas>
    </div>
  );
}
