import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { PortfolioGrid } from './components/PortfolioGrid';
import { SkillsSection } from './components/SkillsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolsSection } from './components/ToolsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F7F6F2] text-[#050505] selection:bg-[#F4B63E] selection:text-[#050505]">
      {/* Optional Minimal Desktop Cursor */}
      <CustomCursor />

      {/* 01 — Navigation */}
      <Navbar onNavigate={scrollToSection} />

      <main id="main-content">
        {/* 02 — Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('portfolio')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 04 — Marquee Transition 1 (Moving Left) */}
        <Marquee
          items={[
            'CREATIVE DESIGN',
            'DIGITAL MARKETING',
            'CONTENT STRATEGY',
            'VISUAL STORYTELLING',
            'BRANDING',
            'VIDEO MARKETING',
          ]}
          direction="left"
          theme="light"
          separator="•"
          size="normal"
        />

        {/* 03 — Creative Introduction / About Section (Black Dramatic Section) */}
        <About onContactClick={() => scrollToSection('contact')} />

        {/* Marquee Transition 2 (Moving Right) */}
        <Marquee
          items={[
            'IDEAS → VISUALS → IMPACT',
            'DESIGN THAT SPEAKS',
            'ATTRACT • CONNECT • CONVERT',
            'DESIGN WITH MARKETING PURPOSE',
          ]}
          direction="right"
          theme="yellow"
          separator="—"
          size="normal"
        />

        {/* 05 — Selected Portfolio (Reference Collage + In-depth Case Studies) */}
        <PortfolioGrid onOpenContact={() => scrollToSection('contact')} />

        {/* 06 — Skills / What I Do */}
        <SkillsSection />

        {/* 07 — Marketing + Design Philosophy */}
        <PhilosophySection />

        {/* Marquee Transition 3 (Fast Left) */}
        <Marquee
          items={[
            'DESIGN • CREATE • STRATEGIZE • REPEAT',
            'SCROLL-STOPPING VISUALS',
            'COMMERCIAL PRECISION',
            'HIGH-RETENTION FORMATS',
          ]}
          direction="left"
          speed="fast"
          theme="light"
          separator="✦"
          size="normal"
        />

        {/* 09 — Experience / Education (Editorial Timeline) */}
        <ExperienceSection onOpenContact={() => scrollToSection('contact')} />

        {/* 10 — Tools of the Trade */}
        <ToolsSection />

        {/* Giant Editorial Wordmark before Contact - directly inspired by reference bottom typography */}
        <div className="w-full bg-[#050505] overflow-hidden pt-12 pb-2 text-center select-none pointer-events-none">
          <span className="font-display font-black text-[15vw] leading-none text-[#F7F6F2]/[0.07] uppercase tracking-tighter">
            créateur.
          </span>
        </div>

        {/* 11 — Contact Section (Dramatic Black Background) */}
        <ContactSection />
      </main>

      {/* 12 — Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
