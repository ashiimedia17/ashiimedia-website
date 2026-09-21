import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface PortfolioGridProps {
  onOpenContact: () => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Social Media', 'Branding', 'Video Marketing', 'Digital Campaign'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-[#F7F6F2] text-[#050505] overflow-hidden">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#050505]/15">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#050505]/60 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B63E]" />
              <span>SELECTED WORK (2025–2026)</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#050505]">
              Selected
              <br />
              <span className="italic font-serif font-light text-[#050505]/80">Portfolio.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-200 uppercase ${
                  selectedCategory === cat
                    ? 'bg-[#050505] text-[#F7F6F2] shadow-sm'
                    : 'bg-white text-[#050505]/75 border border-[#050505]/15 hover:border-[#050505] hover:text-[#050505]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. EDITORIAL REFERENCE COLLAGE (Directly inspired by image) */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <div className="relative">
          {/* Giant intersecting typography "portfolio" traversing the cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none select-none w-full text-center">
            <span className="font-display font-black text-[13vw] sm:text-[11vw] lg:text-[10rem] tracking-[-0.05em] text-[#050505] uppercase leading-none drop-shadow-sm opacity-95">
              portfolio
            </span>
          </div>

          {/* The 6 Collage Cards in 3 Columns x 2 Rows with Arch Tops & Rounded Bottoms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {/* Card 1: Top Left Arch */}
            <div
              id="card-collage-1"
              onClick={() => setActiveProject(PROJECTS[0])}
              className="group cursor-pointer rounded-t-[70px] sm:rounded-t-[90px] rounded-b-[28px] overflow-hidden aspect-[3/4] bg-[#050505]/5 relative border border-[#050505]/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
            >
              <img
                src={PROJECTS[0].image}
                alt={PROJECTS[0].title}
                className="w-full h-full object-cover filter grayscale contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono tracking-widest text-[#F4B63E]">01 / DIGITAL CAMPAIGN</span>
                <span className="font-display font-bold text-xl uppercase tracking-tight">{PROJECTS[0].title}</span>
                <span className="text-xs text-white/70 mt-1 flex items-center gap-1">
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card 2: Top Center Arch */}
            <div
              id="card-collage-2"
              onClick={() => setActiveProject(PROJECTS[4])}
              className="group cursor-pointer rounded-t-[70px] sm:rounded-t-[90px] rounded-b-[28px] overflow-hidden aspect-[3/4] bg-[#050505]/5 relative border border-[#050505]/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
            >
              <img
                src={PROJECTS[4].image}
                alt={PROJECTS[4].title}
                className="w-full h-full object-cover filter grayscale contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono tracking-widest text-[#F4B63E]">05 / ARCHITECTURAL LINES</span>
                <span className="font-display font-bold text-xl uppercase tracking-tight">{PROJECTS[4].title}</span>
                <span className="text-xs text-white/70 mt-1 flex items-center gap-1">
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card 3: Top Right Arch */}
            <div
              id="card-collage-3"
              onClick={() => setActiveProject(PROJECTS[1])}
              className="group cursor-pointer rounded-t-[70px] sm:rounded-t-[90px] rounded-b-[28px] overflow-hidden aspect-[3/4] bg-[#050505]/5 relative border border-[#050505]/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
            >
              <img
                src={PROJECTS[1].image}
                alt={PROJECTS[1].title}
                className="w-full h-full object-cover filter grayscale contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono tracking-widest text-[#F4B63E]">02 / SOCIAL MEDIA CREATIVES</span>
                <span className="font-display font-bold text-xl uppercase tracking-tight">{PROJECTS[1].title}</span>
                <span className="text-xs text-white/70 mt-1 flex items-center gap-1">
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card 4: Bottom Left Pill / Architecture */}
            <div
              id="card-collage-4"
              onClick={() => setActiveProject(PROJECTS[3])}
              className="group cursor-pointer rounded-[32px] overflow-hidden aspect-[3/4] bg-[#050505]/5 relative border border-[#050505]/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
            >
              <img
                src={PROJECTS[3].image}
                alt={PROJECTS[3].title}
                className="w-full h-full object-cover filter grayscale contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono tracking-widest text-[#F4B63E]">04 / VIDEO MARKETING</span>
                <span className="font-display font-bold text-xl uppercase tracking-tight">{PROJECTS[3].title}</span>
                <span className="text-xs text-white/70 mt-1 flex items-center gap-1">
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card 5: Bottom Center High-Key Portrait */}
            <div
              id="card-collage-5"
              onClick={() => setActiveProject(PROJECTS[2])}
              className="group cursor-pointer rounded-[32px] overflow-hidden aspect-[3/4] bg-[#050505]/5 relative border border-[#050505]/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
            >
              <img
                src={PROJECTS[2].image}
                alt={PROJECTS[2].title}
                className="w-full h-full object-cover filter grayscale contrast-115 brightness-105 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono tracking-widest text-[#F4B63E]">03 / BRAND IDENTITY</span>
                <span className="font-display font-bold text-xl uppercase tracking-tight">{PROJECTS[2].title}</span>
                <span className="text-xs text-white/70 mt-1 flex items-center gap-1">
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card 6: Bottom Right Striking Warm Yellow Card (The Botanical Pop as seen in reference!) */}
            <div
              id="card-collage-6"
              onClick={() => setActiveProject(PROJECTS[5])}
              className="group cursor-pointer rounded-[32px] overflow-hidden aspect-[3/4] bg-[#F4B63E] p-3 relative border border-[#050505]/10 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
            >
              <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#F4B63E]">
                <img
                  src={PROJECTS[5].image}
                  alt={PROJECTS[5].title}
                  className="w-full h-full object-cover filter sepia-[0.35] contrast-125 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#050505] text-[#F4B63E] px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase">
                  POP CARD
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono tracking-widest text-[#F4B63E]">06 / DIGITAL CAMPAIGN</span>
                  <span className="font-display font-bold text-xl uppercase tracking-tight">{PROJECTS[5].title}</span>
                  <span className="text-xs text-white/70 mt-1 flex items-center gap-1">
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. DETAILED EDITORIAL PROJECT LISTING                      */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#050505]">
            Featured Project Case Studies ({filteredProjects.length})
          </h3>
          <span className="text-xs font-mono text-[#050505]/50">CLICK ANY CARD TO EXPAND SPEC</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer bg-white rounded-[28px] p-6 border border-[#050505]/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#050505]/30 hover:-translate-y-1"
            >
              {/* Image Container with Custom Aspect Ratio */}
              <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] bg-[#050505]/5 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#050505]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#F7F6F2] uppercase">
                  {project.category}
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#F7F6F2] text-[#050505] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta & Header */}
              <div className="flex items-baseline justify-between border-b border-[#050505]/10 pb-3 mb-3">
                <span className="font-mono text-xs font-bold text-[#050505]/40">{project.number}</span>
                <span className="font-mono text-xs text-[#050505]/60">{project.year}</span>
              </div>

              <h4 className="font-display font-black text-2xl uppercase tracking-tight text-[#050505] group-hover:text-[#F4B63E] transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-[#050505]/70 mt-1 font-medium leading-normal">
                {project.subtitle}
              </p>

              {/* Tools Tags */}
              <div className="mt-4 pt-4 border-t border-[#050505]/5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-0.5 rounded-full bg-[#050505]/5 text-[#050505]/80 text-[10px] font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#050505] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Case Study →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectProject={(p) => setActiveProject(p)}
        allProjects={PROJECTS}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
