/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Text, 
  Float, 
  Stars, 
  PerspectiveCamera, 
  Environment, 
  ContactShadows,
  Html,
  OrbitControls
} from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Info, Sparkles } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PATHWAYS, Pathway, Sequence } from './data';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- 3D Components ---

function StarBackground() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <fog attach="fog" args={['#050505', 10, 50]} />
    </>
  );
}

interface CardProps {
  pathway: Pathway;
  index: number;
  total: number;
  onSelect: (pathway: Pathway) => void;
  isSelected: boolean;
}

function TarotCard({ pathway, index, total, onSelect, isSelected }: CardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Custom 7-8-7 grid layout
  let row, colInRow, rowSize;
  if (index < 7) {
    row = 0;
    colInRow = index;
    rowSize = 7;
  } else if (index < 15) {
    row = 1;
    colInRow = index - 7;
    rowSize = 8;
  } else {
    row = 2;
    colInRow = index - 15;
    rowSize = 7;
  }

  const spacingX = 12;
  const spacingY = 14;
  
  const x = (colInRow - (rowSize - 1) / 2) * spacingX;
  const y = (row - 1) * -spacingY;
  const z = 0;

  useFrame((state) => {
    if (meshRef.current && !isSelected) {
      // Gentle floating animation
      meshRef.current.position.y = y + Math.sin(state.clock.elapsedTime + index) * 0.2;
      // Subtle tilt towards camera for a 3D effect
      meshRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={[x, y, z]}>
        <mesh
          ref={meshRef}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={() => setHovered(false)}
          onClick={() => onSelect(pathway)}
          scale={hovered ? 1.05 : 1}
        >
          <boxGeometry args={[6, 9, 0.2]} />
          <meshStandardMaterial 
            color={pathway.color} 
            metalness={0.8} 
            roughness={0.2}
            emissive={hovered ? "#fff" : pathway.color}
            emissiveIntensity={hovered ? 0.8 : 0.2}
          />
          
          {/* Card Front Content */}
          <Html 
            transform 
            distanceFactor={10} 
            position={[0, 0, 0.12]} 
            pointerEvents="none"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className={cn(
              "w-96 h-[576px] flex flex-col items-center justify-between p-8 border-4 rounded-2xl bg-black/40 backdrop-blur-md select-none transition-all duration-300",
              hovered ? "border-white shadow-[0_0_50px_rgba(255,255,255,0.3)] bg-black/20" : "border-white/20"
            )}>
              <div className="text-xl font-mono opacity-50 uppercase tracking-widest">{pathway.id}</div>
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <div className={cn(
                  "w-24 h-24 rounded-full border-2 flex items-center justify-center transition-all duration-500",
                  hovered ? "border-white bg-white/20 scale-110" : "border-white/30 bg-white/5"
                )}>
                  <Sparkles className={cn("w-12 h-12 text-white transition-all", hovered && "animate-pulse")} />
                </div>
                <div className="text-center">
                  <h3 className={cn("text-4xl font-serif font-bold text-white mb-2 transition-all", hovered && "scale-110")}>{pathway.tarotName}</h3>
                  <p className="text-sm text-white/70 uppercase tracking-tighter">{pathway.tarotCard}</p>
                </div>
              </div>
              <div className="text-2xl font-medium text-white/90 text-center">{pathway.name}</div>
            </div>
          </Html>

          {/* Card Back Content */}
          <mesh position={[0, 0, -0.06]} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[3, 4.5]} />
            <meshStandardMaterial color="#111" metalness={0.5} roughness={0.5} />
          </mesh>
        </mesh>
      </group>
    </Float>
  );
}

function Scene({ onSelectPathway, selectedPathway, hideCards }: { onSelectPathway: (p: Pathway) => void, selectedPathway: Pathway | null, hideCards: boolean }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 100]} fov={50} />
      <OrbitControls 
        enablePan={true} 
        enableZoom={true} 
        enableRotate={false}
        minDistance={50}
        maxDistance={150}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <StarBackground />
      
      {/* Conditionally render the group to ensure Html elements are unmounted when modal is open */}
      {!hideCards && (
        <group position={[0, 0, 0]}>
          {PATHWAYS.map((pathway, idx) => (
            <TarotCard 
              key={pathway.id} 
              pathway={pathway} 
              index={idx} 
              total={PATHWAYS.length} 
              onSelect={onSelectPathway}
              isSelected={selectedPathway?.id === pathway.id}
            />
          ))}
        </group>
      )}

      <ContactShadows position={[0, -15, 0]} opacity={0.4} scale={100} blur={2} far={20} />
      <Environment preset="city" />
    </>
  );
}

// --- UI Components ---

export default function App() {
  const [selectedPathway, setSelectedPathway] = useState<Pathway | null>(null);
  const [isZooming, setIsZooming] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleSelect = (pathway: Pathway) => {
    if (isZooming || showDetails) return;
    
    setSelectedPathway(pathway);
    setIsZooming(true);
    
    // 3s zoom effect simulation
    setTimeout(() => {
      setIsZooming(false);
      setShowDetails(true);
    }, 3000);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setSelectedPathway(null);
  };

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden text-white font-sans">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-8 z-10 flex justify-between items-start pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-4xl font-serif font-light tracking-tighter uppercase">Lord of the Mysteries</h1>
          <p className="text-sm font-mono opacity-50 mt-2">非凡途径指南 · 22条塔罗序列</p>
        </div>
        <div className="pointer-events-auto text-right">
          <div className="text-xs font-mono opacity-30">EST. 1349</div>
          <div className="text-xs font-mono opacity-30 uppercase">Tingen City</div>
        </div>
      </header>

      {/* 3D Canvas */}
      <div className="w-full h-full">
        <Canvas shadows dpr={[1, 2]}>
          <Suspense fallback={null}>
            <Scene 
              onSelectPathway={handleSelect} 
              selectedPathway={selectedPathway} 
              hideCards={showDetails || isZooming}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Zoom Overlay */}
      <AnimatePresence>
        {isZooming && selectedPathway && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-none"
          >
            <motion.div 
              initial={{ scale: 0.5, rotateY: 0 }}
              animate={{ scale: 1.5, rotateY: 360 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="w-64 h-96 rounded-2xl border-2 border-white/30 flex flex-col items-center justify-center p-8 text-center"
              style={{ backgroundColor: selectedPathway.color }}
            >
              <Sparkles className="w-16 h-16 mb-6 text-white" />
              <h2 className="text-3xl font-serif font-bold mb-2">{selectedPathway.tarotName}</h2>
              <p className="text-sm opacity-70 uppercase tracking-widest">{selectedPathway.tarotCard}</p>
              <div className="mt-8 text-xs font-mono animate-pulse">正在解析灵界信息...</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Details Modal */}
      <AnimatePresence>
        {showDetails && selectedPathway && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/40 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-[#111]/90 border border-white/10 rounded-3xl w-full max-w-5xl h-full max-h-[800px] overflow-hidden flex flex-col md:flex-row shadow-2xl backdrop-blur-md"
            >
              {/* Left Side: Pathway Info */}
              <div 
                className="w-full md:w-1/3 p-8 flex flex-col justify-between relative overflow-hidden"
                style={{ backgroundColor: `${selectedPathway.color}22` }}
              >
                <div className="relative z-10">
                  <button 
                    onClick={closeDetails}
                    className="mb-8 p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="text-xs font-mono opacity-50 mb-2 uppercase tracking-widest">Pathway</div>
                  <h2 className="text-4xl font-serif font-bold mb-4">{selectedPathway.name}</h2>
                  <div className="flex items-center gap-2 mb-8">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono">{selectedPathway.tarotCard}</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono">{selectedPathway.tarotName}</span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed italic">
                    "在灰雾之上，在星空之下，每一条途径都通往神灵的宝座，但也伴随着疯狂的低语。"
                  </p>
                </div>
                
                <div className="relative z-10 mt-auto">
                  <div className="flex items-center gap-4 text-xs opacity-40">
                    <Info className="w-4 h-4" />
                    <span>点击序列查看详细晋升信息</span>
                  </div>
                </div>

                {/* Decorative background element */}
                <div 
                  className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: selectedPathway.color }}
                />
              </div>

              {/* Right Side: Sequences List */}
              <div className="flex-1 p-8 overflow-y-auto custom-scrollbar bg-black/20">
                <div className="space-y-4">
                  {selectedPathway.sequences.slice().reverse().map((seq) => (
                    <motion.div 
                      key={seq.level}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: (9 - seq.level) * 0.05 }}
                      className="group flex items-center gap-6 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all cursor-default"
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center font-serif text-xl font-bold border",
                        seq.level === 0 ? "border-yellow-500/50 text-yellow-500 bg-yellow-500/10" : "border-white/10 text-white/50"
                      )}>
                        {seq.level}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-medium">{seq.name}</h4>
                          {seq.level === 0 && <span className="text-[10px] bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded uppercase font-bold tracking-tighter">True Deity</span>}
                        </div>
                        <p className="text-sm text-white/40 mt-1">{seq.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-30 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Instructions */}
      {!selectedPathway && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-[10px] font-mono opacity-30 uppercase tracking-[0.3em]">Select a pathway to explore</div>
            <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
