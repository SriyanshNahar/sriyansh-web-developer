import { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

type CarModelProps = JSX.IntrinsicElements['group'] & {
  url: string;
};

// Define the 4 models
function CarModel({ url, position, rotation, scale, visible }: CarModelProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { scene } = useGLTF(url) as any;
  return (
    <group position={position} rotation={rotation} scale={scale} visible={visible}>
      <primitive object={scene} />
    </group>
  );
}

// Pre-allocate these outside the render loop to prevent Garbage Collection (GC) stutters
const targetPosition = new THREE.Vector3(0, -1, 0);
const targetRotation = new THREE.Euler(0, 0, 0);
const targetScale = new THREE.Vector3(1, 1, 1);
const currentRotation = new THREE.Quaternion();
const targetQuat = new THREE.Quaternion();

// Define continuous keyframes so the scroll animation is 100% perfectly reversible
const keyframes = [
  { p: 0.0, pos: new THREE.Vector3(0, -1, 0), rot: new THREE.Euler(0, 0, 0) },
  { p: 0.2, pos: new THREE.Vector3(0, -1, 0), rot: new THREE.Euler(0, Math.PI * 0.8, 0) },
  { p: 0.4, pos: new THREE.Vector3(2, -1, 0), rot: new THREE.Euler(0, -Math.PI / 6, 0) },
  { p: 0.6, pos: new THREE.Vector3(-2, -1, 0), rot: new THREE.Euler(0, Math.PI / 4, 0) },
  { p: 0.8, pos: new THREE.Vector3(0, -1, 0), rot: new THREE.Euler(0, Math.PI / 8, 0) },
  { p: 1.0, pos: new THREE.Vector3(1, -1, 0), rot: new THREE.Euler(0, -Math.PI / 10, 0) },
];

const SceneContent = () => {
  const groupRef = useRef<THREE.Group>(null);

  // We calculate scroll progress directly inside useFrame 
  // to avoid causing heavy React re-renders on every scroll tick.
  const modelUrl = '/mercedes-benz_optimized.glb';

  useEffect(() => {
    const handleResize = () => {
      // Decrease the 3D model size on mobile screens
      const isMobile = window.innerWidth <= 768;
      const scaleValue = isMobile ? 0.6 : 1;
      targetScale.set(scaleValue, scaleValue, scaleValue);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Calculate progress
      const currentScrollY = window.scrollY;
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollYProgress = totalScrollHeight > 0 ? currentScrollY / totalScrollHeight : 0;

      // Find the two keyframes we are currently scrolling between
      let startIndex = 0;
      for (let i = 0; i < keyframes.length - 1; i++) {
        if (scrollYProgress >= keyframes[i].p && scrollYProgress <= keyframes[i + 1].p) {
          startIndex = i;
          break;
        }
      }
      if (scrollYProgress >= 1.0) startIndex = keyframes.length - 2;

      const startKf = keyframes[startIndex];
      const endKf = keyframes[startIndex + 1];

      // Calculate how far we are between the two keyframes (0.0 to 1.0)
      const localProgress = (scrollYProgress - startKf.p) / (endKf.p - startKf.p);

      // Strictly map the target position to the exact scroll percentage
      targetPosition.lerpVectors(startKf.pos, endKf.pos, localProgress);

      // Lerp Euler angles directly to avoid quaternion shortest-path skipping during spins
      targetRotation.x = THREE.MathUtils.lerp(startKf.rot.x, endKf.rot.x, localProgress);
      targetRotation.y = THREE.MathUtils.lerp(startKf.rot.y, endKf.rot.y, localProgress);
      targetRotation.z = THREE.MathUtils.lerp(startKf.rot.z, endKf.rot.z, localProgress);

      // Smoothly interpolate position and rotation
      groupRef.current.position.lerp(targetPosition, delta * 5);

      // Basic smooth rotation interpolation without allocating new memory
      currentRotation.setFromEuler(groupRef.current.rotation);
      targetQuat.setFromEuler(targetRotation);
      currentRotation.slerp(targetQuat, delta * 5);
      groupRef.current.rotation.setFromQuaternion(currentRotation);

      groupRef.current.scale.lerp(targetScale, delta * 5);
    }
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={3} />

      {/* Volumetric SpotLights removed to fix severe scroll lag on GPU */}

      <Environment preset="city" />

      <group ref={groupRef}>
        <Suspense fallback={null}>
          <CarModel url={modelUrl} visible={true} />
        </Suspense>
      </group>
    </>
  );
};

const GlobalScene = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas dpr={1} performance={{ min: 0.5 }} camera={{ position: [0, 1, 8], fov: 40 }}>
        <color attach="background" args={['#000000']} />
        <SceneContent />
      </Canvas>
    </div>
  );
};

export default GlobalScene;

// Preload models
useGLTF.preload('/mercedes-benz_optimized.glb');
