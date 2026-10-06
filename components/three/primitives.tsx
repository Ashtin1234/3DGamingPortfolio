'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function ParticleField({ count = 200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00d9ff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function FloatingCrystal({
  position = [0, 0, 0],
  scale = 1,
  color = '#00d9ff',
}: {
  position?: [number, number, number];
  scale?: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.3;
      meshRef.current.position.x = position[0] + mouse.x * 0.5;
      meshRef.current.position.z = position[2] + mouse.y * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
        wireframe={false}
      />
    </mesh>
  );
}

export function WireframeSphere({
  position = [0, 0, 0],
  scale = 1,
}: {
  position?: [number, number, number];
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshStandardMaterial
        color="#ff00aa"
        emissive="#ff00aa"
        emissiveIntensity={0.15}
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

export function FloatingTorus({
  position = [0, 0, 0],
  scale = 1,
}: {
  position?: [number, number, number];
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.4;
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
      <meshStandardMaterial
        color="#00d9ff"
        emissive="#00d9ff"
        emissiveIntensity={0.3}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

export function ScrollReactiveObject() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      groupRef.current.rotation.y = t * 0.1 + mouse.x * 0.5;
      groupRef.current.rotation.x = mouse.y * 0.3;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={0.2}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      {/* Wireframe shell */}
      <mesh scale={1.6}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#ff00aa"
          emissive="#ff00aa"
          emissiveIntensity={0.1}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      {/* Outer ring */}
      <mesh scale={2.2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1, 0.02, 8, 64]} />
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}
