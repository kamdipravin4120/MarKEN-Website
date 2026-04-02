"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  useGLTF,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Slow constant rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={scene} 
      scale={1.4} 
      position={[0, -1.2, 0]} 
      rotation={[0, -Math.PI / 4, 0]}
    />
  );
}

function LoadingFallback() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1.8, 0.8]} />
      <meshStandardMaterial color="#2563eb" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[3, 1, 4]} fov={35} />
        
        <Suspense fallback={<LoadingFallback />}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={2} 
            castShadow 
          />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
          
          <Environment preset="studio" />
          
          <Float 
            speed={1.5} 
            rotationIntensity={0.2} 
            floatIntensity={0.5}
            floatingRange={[-0.1, 0.1]}
          >
            <Model url="/models/refrigerator.glb" />
          </Float>
          
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.4}
            scale={5}
            blur={2.4}
            far={4.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
