'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2, Boxes, Brain, Waves } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: typeof Gamepad2;
  color: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Neon Drift Racer',
    description:
      'A browser-based racing game with real-time physics, neon visuals, and procedural track generation. Built with WebGL shaders and custom audio synthesis.',
    tech: ['Three.js', 'Cannon.js', 'GLSL', 'Web Audio API'],
    icon: Gamepad2,
    color: '#00d9ff',
    link: '#',
  },
  {
    title: 'Volumetric Data Viz',
    description:
      'Interactive 3D data visualization platform for analyzing complex datasets with volumetric rendering and real-time filtering.',
    tech: ['React Three Fiber', 'D3.js', 'TypeScript', 'WebGL2'],
    icon: Boxes,
    color: '#ff00aa',
    link: '#',
  },
  {
    title: 'AI Dungeon Master',
    description:
      'An AI-powered interactive fiction engine that generates dynamic narratives based on player choices, with procedurally generated 3D environments.',
    tech: ['Next.js', 'OpenAI API', 'R3F', 'Zustand'],
    icon: Brain,
    color: '#00ff88',
    link: '#',
  },
  {
    title: 'Wave Synthesizer',
    description:
      'A visual audio synthesizer that generates 3D waveforms in real-time, letting users sculpt sound through spatial interaction.',
    tech: ['Web Audio', 'Three.js', 'GSAP', 'React'],
    icon: Waves,
    color: '#ffaa00',
    link: '#',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      style={{ perspective: 1000 }}
    >
      <motion.div
        whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative h-full overflow-hidden rounded-xl border border-primary/10 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40"
        style={{ transformStyle: 'preserve-3d', boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
      >
        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div className="relative mb-4 flex items-center justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-lg border transition-all duration-300 group-hover:scale-110"
            style={{
              borderColor: `${project.color}40`,
              backgroundColor: `${project.color}10`,
              boxShadow: `0 0 20px ${project.color}20`,
            }}
          >
            <project.icon className="h-6 w-6" style={{ color: project.color }} />
          </div>
          <span className="font-display text-xs uppercase tracking-widest text-muted-foreground/40">
            {String(index + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-primary/20 bg-primary/5 px-2 py-1 font-display text-xs text-primary/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          data-cursor="hover"
          className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:text-primary"
          onClick={() => window.open(project.link, '_blank')}
        >
          View Project
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>

        {/* Corner accents */}
        <div className="absolute right-3 top-3 h-3 w-3 border-t border-r border-primary/0 transition-colors group-hover:border-primary/40" />
        <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-primary/0 transition-colors group-hover:border-primary/40" />
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
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
            // 02
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 font-body text-base text-muted-foreground">
            Hover to interact. Each card is a world of its own.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
