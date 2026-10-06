'use client';

import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Target, Zap, Compass, Code2 } from 'lucide-react';

function AboutCrystal() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(({ clock, mouse }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.y = t * 0.3 + mouse.x * 0.5;
      meshRef.current.rotation.x = mouse.y * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={0.25}
          metalness={0.8}
          roughness={0.2}
          flatShading
        />
      </mesh>
      <mesh scale={1.5}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#ff00aa"
          emissive="#ff00aa"
          emissiveIntensity={0.1}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
}

const INTERESTS = [
  { icon: Code2, label: 'Creative Coding' },
  { icon: Zap, label: '3D Web Experiences' },
  { icon: Target, label: 'Game Development' },
  { icon: Compass, label: 'Interactive Design' },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary/60">
            // 01
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-2xl border border-primary/10 hud-corners" />
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }} dpr={[1, 1.5]}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 5, 5]} intensity={1} color="#00d9ff" />
                <pointLight position={[-5, -5, -3]} intensity={0.5} color="#ff00aa" />
                <AboutCrystal />
              </Suspense>
            </Canvas>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-display text-xs uppercase tracking-widest text-muted-foreground/40">
              <span>OBJECT_01.OBJ</span>
              <span className="text-primary/60">INTERACTIVE</span>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              I&apos;m a creative developer who blends technical precision with
              artistic vision. My work lives at the intersection of interactive 3D
              graphics, game design, and modern web technology — creating
              experiences that don&apos;t just function, but captivate.
            </p>

            <div>
              <h3 className="mb-3 font-display text-sm uppercase tracking-widest text-primary/80">
                Interests
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {INTERESTS.map((interest, i) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 rounded-lg border border-primary/10 bg-card/50 p-3 transition-colors hover:border-primary/30"
                  >
                    <interest.icon className="h-5 w-5 text-primary" />
                    <span className="font-body text-sm text-foreground">
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-display text-sm uppercase tracking-widest text-primary/80">
                Goals
              </h3>
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                Push the boundaries of what&apos;s possible in browser-based 3D
                experiences. Build tools and games that inspire. Create work that
                makes people stop and say &ldquo;how did they do that?&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
