import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, ContactShadows, SpotLight } from '@react-three/drei';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  
  return (
    <group>
      <primitive object={scene} />
      {/* Headlight simulation: Two spotlights pointing forward */}
      <SpotLight
        position={[-1, 0.5, 3]}
        target-position={[-1, 0, 10]}
        angle={0.5}
        penumbra={0.8}
        intensity={50}
        distance={20}
        color="#ffffff"
      />
      <SpotLight
        position={[1, 0.5, 3]}
        target-position={[1, 0, 10]}
        angle={0.5}
        penumbra={0.8}
        intensity={50}
        distance={20}
        color="#ffffff"
      />
    </group>
  );
}

interface ModelViewerProps {
  modelPath: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  return (
    <Canvas shadows camera={{ position: [0, 2, 8], fov: 40 }}>
      <color attach="background" args={['transparent']} />
      
      {/* Ambient and directional light for the overall scene */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.2} adjustCamera={false}>
          <Model url={modelPath} />
        </Stage>
        {/* Contact shadow simulating floor reflection / grounding */}
        <ContactShadows position={[0, -0.5, 0]} opacity={0.7} scale={10} blur={2} far={4} color="#000000" />
      </Suspense>
      
      {/* Medium speed turntable rotation */}
      <OrbitControls 
        autoRotate={true} 
        autoRotateSpeed={2.0} /* Medium speed */
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2} /* Prevent viewing from below floor */
      />
    </Canvas>
  );
};

export default ModelViewer;

// Preload the models so they switch faster
import { useGLTF } from '@react-three/drei';
useGLTF.preload('/porshe.glb');
useGLTF.preload('/2014__bmw_m4_f82_razor.glb');
useGLTF.preload('/volvo_polestar_one_k.s_edition.glb');
useGLTF.preload('/2020_bmw_750li_xdrive.glb');
