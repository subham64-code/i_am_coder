"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Blob() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={ref} args={[1.6, 1]}>
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#a78bfa"
          emissiveIntensity={0.4}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(400 * 3);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 12;
    return arr;
  }, []);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#22d3ee" size={0.04} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export function Hero3D() {
  return (
    <Canvas className="!absolute inset-0" camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} />
      <Stars />
      <Blob />
    </Canvas>
  );
}
