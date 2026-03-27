"use client";

import { Suspense, useRef, useState, useCallback, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
  useGLTF,
  PresentationControls,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
  X,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Info,
} from "lucide-react";
import type { Hotspot } from "@/types";

// ============================================
// Camera Animation Controller
// ============================================

interface CameraControllerProps {
  targetPosition: THREE.Vector3 | null;
  targetLookAt: THREE.Vector3 | null;
  isAnimating: boolean;
  onAnimationComplete: () => void;
}

function CameraController({
  targetPosition,
  targetLookAt,
  isAnimating,
  onAnimationComplete,
}: CameraControllerProps) {
  const { camera } = useThree();
  const progress = useRef(0);
  const startPos = useRef(new THREE.Vector3());
  const startLookAt = useRef(new THREE.Vector3());

  useEffect(() => {
    if (isAnimating && targetPosition) {
      progress.current = 0;
      startPos.current.copy(camera.position);
      startLookAt.current.set(0, 0.5, 0);
    }
  }, [isAnimating, targetPosition, camera.position]);

  useFrame((_, delta) => {
    if (!isAnimating || !targetPosition || !targetLookAt) return;

    progress.current += delta * 1.2;
    const t = Math.min(progress.current, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic

    camera.position.lerpVectors(startPos.current, targetPosition, eased);

    const currentLookAt = new THREE.Vector3().lerpVectors(
      startLookAt.current,
      targetLookAt,
      eased
    );
    camera.lookAt(currentLookAt);

    if (t >= 1) {
      onAnimationComplete();
    }
  });

  return null;
}

// ============================================
// Hotspot Marker (3D annotation point)
// ============================================

interface HotspotMarkerProps {
  hotspot: Hotspot;
  isActive: boolean;
  onClick: () => void;
}

function HotspotMarker({ hotspot, isActive, onClick }: HotspotMarkerProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(
        isActive ? 1.4 : hovered ? 1.2 : 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      );
    }
  });

  return (
    <group position={hotspot.position}>
      {/* Pulse ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.06, 0.08, 32]} />
        <meshBasicMaterial
          color={isActive ? "#2563eb" : "#60a5fa"}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Clickable sphere */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color={isActive ? "#2563eb" : hovered ? "#3b82f6" : "#60a5fa"}
          emissive={isActive ? "#2563eb" : "#3b82f6"}
          emissiveIntensity={isActive ? 0.8 : 0.3}
        />
      </mesh>

      {/* Label */}
      {(hovered || isActive) && (
        <Html
          position={[0, 0.12, 0]}
          center
          distanceFactor={4}
          style={{ pointerEvents: "none" }}
        >
          <div className="bg-slate-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap backdrop-blur-sm border border-slate-700/50">
            {hotspot.label}
          </div>
        </Html>
      )}
    </group>
  );
}

// ============================================
// Placeholder Refrigerator Model
// (Used when no GLTF model is available)
// ============================================

function RefrigeratorModel({ showHotspots }: { showHotspots: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      {/* Main body */}
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[1, 1.6, 0.8]} />
        <meshStandardMaterial color="#e8edf2" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Door frame */}
      <mesh position={[0, 0.7, 0.41]}>
        <boxGeometry args={[0.92, 1.52, 0.02]} />
        <meshStandardMaterial color="#d1d9e3" metalness={0.4} roughness={0.3} />
      </mesh>

      {/* Glass panel */}
      <mesh position={[0, 0.75, 0.43]}>
        <boxGeometry args={[0.8, 1.2, 0.01]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.1}
          chromaticAberration={0.02}
          anisotropy={0.1}
          distortion={0}
          distortionScale={0}
          temporalDistortion={0}
          transmission={0.95}
          roughness={0.05}
          color="#b8d4f0"
        />
      </mesh>

      {/* Handle */}
      <mesh position={[0.42, 0.7, 0.48]}>
        <boxGeometry args={[0.04, 0.3, 0.06]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Control panel */}
      <mesh position={[0, 1.55, 0.35]}>
        <boxGeometry args={[0.6, 0.08, 0.15]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* LED display */}
      <mesh position={[0, 1.55, 0.44]}>
        <planeGeometry args={[0.25, 0.04]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Interior shelves (visible through glass) */}
      {[0.3, 0.6, 0.9, 1.2].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <boxGeometry args={[0.85, 0.02, 0.7]} />
          <meshStandardMaterial
            color="#c0c8d4"
            metalness={0.6}
            roughness={0.3}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}

      {/* Blood bag representations */}
      {showHotspots &&
        [
          [0.2, 0.4, 0.05],
          [-0.2, 0.4, 0.05],
          [0, 0.4, -0.15],
          [0.2, 0.7, 0.05],
          [-0.2, 0.7, 0.05],
          [0, 1.0, 0.05],
          [-0.2, 1.0, -0.15],
        ].map(([x, y, z], i) => (
          <mesh key={i} position={[x, y, z]}>
            <boxGeometry args={[0.12, 0.18, 0.03]} />
            <meshStandardMaterial
              color="#dc2626"
              transparent
              opacity={0.6}
              roughness={0.8}
            />
          </mesh>
        ))}

      {/* Base / compressor housing */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[1, 0.3, 0.8]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Ventilation grille */}
      <mesh position={[0, -0.15, 0.41]}>
        <planeGeometry args={[0.8, 0.2]} />
        <meshStandardMaterial color="#64748b" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* MarKEN logo plate */}
      <mesh position={[0, 1.42, 0.42]}>
        <planeGeometry args={[0.3, 0.06]} />
        <meshStandardMaterial
          color="#2563eb"
          emissive="#2563eb"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

// ============================================
// GLTF Model Loader (for production use)
// ============================================

function GLTFModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1} position={[0, -1.05, 0]} />;
}

// ============================================
// Scene Setup
// ============================================

interface SceneProps {
  hotspots: Hotspot[];
  activeHotspot: string | null;
  onHotspotClick: (id: string) => void;
  showHotspots: boolean;
  modelUrl?: string;
  cameraTarget: THREE.Vector3 | null;
  cameraLookAt: THREE.Vector3 | null;
  isAnimatingCamera: boolean;
  onCameraAnimationComplete: () => void;
}

function Scene({
  hotspots,
  activeHotspot,
  onHotspotClick,
  showHotspots,
  modelUrl,
  cameraTarget,
  cameraLookAt,
  isAnimatingCamera,
  onCameraAnimationComplete,
}: SceneProps) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-3, 4, -2]} intensity={0.4} color="#b8d4f0" />
      <pointLight position={[0, 3, 3]} intensity={0.3} color="#60a5fa" />

      {/* Environment */}
      <Environment preset="studio" />

      {/* Model */}
      <Float speed={0.5} rotationIntensity={0.05} floatIntensity={0.1}>
        {modelUrl ? (
          <GLTFModel url={modelUrl} />
        ) : (
          <RefrigeratorModel showHotspots={showHotspots} />
        )}
      </Float>

      {/* Hotspots */}
      {showHotspots &&
        hotspots.map((hotspot) => (
          <HotspotMarker
            key={hotspot.id}
            hotspot={hotspot}
            isActive={activeHotspot === hotspot.id}
            onClick={() => onHotspotClick(hotspot.id)}
          />
        ))}

      {/* Ground shadow */}
      <ContactShadows
        position={[0, -1.1, 0]}
        opacity={0.4}
        scale={4}
        blur={2.5}
        far={4}
      />

      {/* Camera animation */}
      <CameraController
        targetPosition={cameraTarget}
        targetLookAt={cameraLookAt}
        isAnimating={isAnimatingCamera}
        onAnimationComplete={onCameraAnimationComplete}
      />

      {/* Controls */}
      <OrbitControls
        makeDefault
        minDistance={1.5}
        maxDistance={6}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 1.8}
        enableDamping
        dampingFactor={0.05}
        enabled={!isAnimatingCamera}
      />
    </>
  );
}

// ============================================
// Loading Fallback
// ============================================

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-medium">Loading 3D Model...</p>
      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Preparing interactive experience</p>
    </div>
  );
}

// ============================================
// Main Product3DViewer Component
// ============================================

interface Product3DViewerProps {
  hotspots: Hotspot[];
  productName: string;
  modelUrl?: string;
}

export default function Product3DViewer({
  hotspots,
  productName,
  modelUrl,
}: Product3DViewerProps) {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [showHotspots, setShowHotspots] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [guidedMode, setGuidedMode] = useState(false);
  const [guidedStep, setGuidedStep] = useState(0);
  const [isAnimatingCamera, setIsAnimatingCamera] = useState(false);
  const [cameraTarget, setCameraTarget] = useState<THREE.Vector3 | null>(null);
  const [cameraLookAt, setCameraLookAt] = useState<THREE.Vector3 | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeHotspotData = hotspots.find((h) => h.id === activeHotspot);

  const handleHotspotClick = useCallback(
    (id: string) => {
      const hotspot = hotspots.find((h) => h.id === id);
      if (!hotspot?.cameraPosition || !hotspot?.cameraTarget) {
        setActiveHotspot(id === activeHotspot ? null : id);
        return;
      }

      setActiveHotspot(id);
      setCameraTarget(new THREE.Vector3(...hotspot.cameraPosition));
      setCameraLookAt(new THREE.Vector3(...hotspot.cameraTarget));
      setIsAnimatingCamera(true);
    },
    [activeHotspot, hotspots]
  );

  const handleCameraAnimationComplete = useCallback(() => {
    setIsAnimatingCamera(false);
  }, []);

  const resetCamera = useCallback(() => {
    setActiveHotspot(null);
    setCameraTarget(new THREE.Vector3(3, 2, 3));
    setCameraLookAt(new THREE.Vector3(0, 0.5, 0));
    setIsAnimatingCamera(true);
  }, []);

  // Guided walkthrough
  const startGuidedTour = useCallback(() => {
    setGuidedMode(true);
    setGuidedStep(0);
    if (hotspots.length > 0) {
      handleHotspotClick(hotspots[0].id);
    }
  }, [hotspots, handleHotspotClick]);

  const nextGuidedStep = useCallback(() => {
    const next = guidedStep + 1;
    if (next < hotspots.length) {
      setGuidedStep(next);
      handleHotspotClick(hotspots[next].id);
    } else {
      setGuidedMode(false);
      setGuidedStep(0);
      resetCamera();
    }
  }, [guidedStep, hotspots, handleHotspotClick, resetCamera]);

  const prevGuidedStep = useCallback(() => {
    const prev = guidedStep - 1;
    if (prev >= 0) {
      setGuidedStep(prev);
      handleHotspotClick(hotspots[prev].id);
    }
  }, [guidedStep, hotspots, handleHotspotClick]);

  const toggleFullscreen = useCallback(() => {
    if (!isFullscreen) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  return (
    <div
      ref={containerRef}
      className={`relative bg-gradient-to-b from-slate-50 via-slate-100 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 ${
        isFullscreen ? "fixed inset-0 z-50 rounded-none" : "aspect-[4/3] lg:aspect-[16/10]"
      }`}
    >
      {/* Canvas */}
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [3, 2, 3], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Scene
            hotspots={hotspots}
            activeHotspot={activeHotspot}
            onHotspotClick={handleHotspotClick}
            showHotspots={showHotspots}
            modelUrl={modelUrl}
            cameraTarget={cameraTarget}
            cameraLookAt={cameraLookAt}
            isAnimatingCamera={isAnimatingCamera}
            onCameraAnimationComplete={handleCameraAnimationComplete}
          />
        </Canvas>
      </Suspense>

      {/* Top bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-white bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
            {productName} — 3D Interactive View
          </h3>
        </div>
        <div className="flex gap-2 pointer-events-auto">
          <button
            onClick={() => setShowHotspots(!showHotspots)}
            className={`p-2 rounded-lg shadow-sm backdrop-blur-sm transition-colors ${
              showHotspots
                ? "bg-blue-600 text-white"
                : "bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-white"
            }`}
            title="Toggle hotspots"
          >
            <Info className="w-4 h-4" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-600 dark:text-slate-300 rounded-lg shadow-sm hover:bg-white transition-colors"
            title="Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
        {/* Guided tour button */}
        <div className="pointer-events-auto">
          {!guidedMode ? (
            <button
              onClick={startGuidedTour}
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              <Play className="w-4 h-4" />
              Guided Tour
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={prevGuidedStep}
                disabled={guidedStep === 0}
                className="p-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-600 dark:text-slate-300 rounded-lg disabled:opacity-40 hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                {guidedStep + 1} / {hotspots.length}
              </span>
              <button
                onClick={nextGuidedStep}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {guidedStep === hotspots.length - 1 ? (
                  <X className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => {
                  setGuidedMode(false);
                  resetCamera();
                }}
                className="p-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-600 dark:text-slate-300 rounded-lg hover:bg-white transition-colors"
              >
                <Pause className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Camera controls */}
        <div className="flex gap-2 pointer-events-auto">
          <button
            onClick={resetCamera}
            className="p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-600 dark:text-slate-300 rounded-lg shadow-sm hover:bg-white transition-colors"
            title="Reset view"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hotspot detail panel */}
      <AnimatePresence>
        {activeHotspotData && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-4 w-72 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden pointer-events-auto"
          >
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {activeHotspotData.label}
                </h4>
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="p-1 text-slate-400 dark:text-slate-500 hover:text-slate-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeHotspotData.description}
              </p>
            </div>
            {/* Progress dots for guided mode */}
            {guidedMode && (
              <div className="px-4 pb-3 flex gap-1">
                {hotspots.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      i <= guidedStep ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions overlay (shown initially) */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-xs text-slate-400 dark:text-slate-500 pointer-events-none">
        Drag to rotate • Scroll to zoom • Click hotspots for details
      </div>
    </div>
  );
}
