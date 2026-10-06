'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { LoadingScreen } from '@/components/loading-screen';
import { CustomCursor } from '@/components/custom-cursor';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <CustomCursor />
      <div className="scan-line" />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
