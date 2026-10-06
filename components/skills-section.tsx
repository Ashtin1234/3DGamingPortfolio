'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Cpu, Database, Globe, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: typeof Code2;
  color: string;
}

const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'TypeScript', level: 95, icon: Code2, color: '#00d9ff' },
      { name: 'React / Next.js', level: 92, icon: Globe, color: '#00d9ff' },
      { name: 'Python', level: 85, icon: Cpu, color: '#00ff88' },
      { name: 'GLSL Shaders', level: 78, icon: Zap, color: '#ff00aa' },
    ],
  },
  {
    title: 'Design',
    icon: Palette,
    skills: [
      { name: 'UI/UX Design', level: 88, icon: Palette, color: '#ff00aa' },
      { name: '3D Modeling', level: 75, icon: Cpu, color: '#ffaa00' },
      { name: 'Motion Graphics', level: 82, icon: Zap, color: '#00d9ff' },
      { name: 'Prototyping', level: 90, icon: Globe, color: '#00ff88' },
    ],
  },
  {
    title: 'Technical',
    icon: Database,
    skills: [
      { name: 'Three.js / R3F', level: 90, icon: Cpu, color: '#00d9ff' },
      { name: 'WebGL / WebGPU', level: 80, icon: Zap, color: '#ff00aa' },
      { name: 'Node.js / APIs', level: 85, icon: Database, color: '#00ff88' },
      { name: 'Performance Opt.', level: 83, icon: Zap, color: '#ffaa00' },
    ],
  },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <skill.icon className="h-4 w-4" style={{ color: skill.color }} />
          <span className="font-body text-sm text-foreground">{skill.name}</span>
        </div>
        <span className="font-display text-xs tabular-nums text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
            boxShadow: `0 0 10px ${skill.color}80`,
          }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
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
            // 03
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-3 font-body text-base text-muted-foreground">
            An arsenal forged through countless builds
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="relative rounded-xl border border-primary/10 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-primary/30"
            >
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={catIdx * 0.15 + i * 0.1} />
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute right-3 top-3 h-3 w-3 border-t border-r border-primary/20" />
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {['Next.js', 'Three.js', 'R3F', 'Drei', 'GSAP', 'Framer Motion', 'TypeScript', 'Tailwind', 'WebGL', 'GLSL'].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-md border border-primary/15 bg-card/30 px-3 py-1.5 font-display text-xs uppercase tracking-wider text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
