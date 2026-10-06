'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ChevronDown, Rocket } from 'lucide-react';
import {
  ParticleField,
  ScrollReactiveObject,
  FloatingCrystal,
  WireframeSphere,
  FloatingTorus,
} from './three/primitives';

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff00aa" />
            <ParticleField count={150} />
            <ScrollReactiveObject />
            <FloatingCrystal position={[-3, 1.5, -2]} scale={0.3} color="#00d9ff" />
            <FloatingCrystal position={[3, -1.5, -1]} scale={0.25} color="#ff00aa" />
            <WireframeSphere position={[2.5, 2, -3]} scale={0.5} />
            <FloatingTorus position={[-3, -1, -2]} scale={0.4} />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5"
        >
          <div className="h-2 w-2 rounded-full bg-primary glow-pulse" />
          <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            System Online
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl font-black tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="neon-text-cyan text-primary">ASHTIN</span>{' '}
          <span className="neon-text-magenta text-accent">ANTO</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 max-w-xl font-body text-lg text-muted-foreground sm:text-xl"
        >
          Creative Developer & 3D Experience Designer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-2 max-w-md font-body text-sm text-muted-foreground/60"
        >
          Building immersive digital worlds at the intersection of code, design, and play
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={scrollToProjects}
            data-cursor="hover"
            className="group relative flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105"
            style={{ boxShadow: '0 0 20px hsl(190 95% 50% / 0.4)' }}
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            View My Projects
          </button>
          <button
            onClick={scrollToAbout}
            data-cursor="hover"
            className="flex items-center gap-2 rounded-md border border-primary/30 px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:bg-primary/5"
          >
            About Me
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-muted-foreground/50"
        >
          <span className="font-display text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
