import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(SKILLS[0]);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#050505] text-[#F7F6F2] overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute right-4 bottom-8 text-[12vw] font-display font-black text-[#F7F6F2]/[0.03] select-none pointer-events-none uppercase leading-none">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#F7F6F2]/15">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#F4B63E] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAPABILITIES & METHODOLOGY</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#F7F6F2]">
              What I Do.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#F7F6F2]/70 font-normal leading-relaxed">
            Every deliverable is crafted to solve a specific marketing challenge — driving retention, engagement, and brand prestige.
          </p>
        </div>

        {/* Layout: Interactive List on Left, Dynamic Floating Preview Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Numbered Editorial Skills Accordion / Hover Items */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#F7F6F2]/10 border-t border-b border-[#F7F6F2]/10">
            {SKILLS.map((skill) => {
              const isHovered = hoveredSkill?.number === skill.number;
              return (
                <div
                  key={skill.number}
                  id={`skill-item-${skill.number}`}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onClick={() => setHoveredSkill(skill)}
                  className={`group cursor-pointer py-6 px-4 md:px-6 transition-all duration-300 flex flex-col justify-center rounded-2xl ${
                    isHovered
                      ? 'bg-[#F7F6F2]/10 translate-x-2'
                      : 'hover:bg-[#F7F6F2]/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-sm sm:text-base transition-all duration-200 ${
                          isHovered ? 'text-[#F4B63E] font-bold' : 'text-[#F7F6F2]/40'
                        }`}
                      >
                        {skill.number}
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-tight text-[#F7F6F2] group-hover:text-[#F4B63E] transition-colors">
                        {skill.title}
                      </h3>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#F4B63E] text-[#050505] rotate-0 scale-110'
                          : 'bg-[#F7F6F2]/10 text-[#F7F6F2] -rotate-45 opacity-60'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Inline details for mobile or active view */}
                  {isHovered && (
                    <div className="mt-4 pt-4 border-t border-[#F7F6F2]/10 text-sm text-[#F7F6F2]/80 space-y-3 animate-in fade-in duration-200">
                      <p className="leading-relaxed">{skill.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.deliverables.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-full bg-[#F7F6F2]/10 text-[#F7F6F2] text-[11px] font-mono flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B63E]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Editorial Showcase Preview */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative rounded-[32px] overflow-hidden bg-[#141414] border border-[#F7F6F2]/15 p-6 shadow-2xl">
              {/* Corner Tag */}
              <div className="flex items-center justify-between text-xs font-mono text-[#F7F6F2]/60 mb-4 pb-4 border-b border-[#F7F6F2]/10">
                <span>PREVIEW // CAPABILITY {hoveredSkill?.number || '01'}</span>
                <span className="text-[#F4B63E] font-bold uppercase">{hoveredSkill?.title}</span>
              </div>

              {/* Image Preview Container */}
              <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] bg-[#050505]">
                {hoveredSkill && (
                  <img
                    src={hoveredSkill.previewImage}
                    alt={hoveredSkill.title}
                    className="w-full h-full object-cover filter grayscale contrast-115 transition-all duration-700 hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#F4B63E] uppercase block mb-1">
                    PRIMARY TOOLS USED
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hoveredSkill?.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-[#F7F6F2]/20 backdrop-blur-md text-[#F7F6F2] text-[10px] font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description Block */}
              <div className="mt-5 space-y-3">
                <span className="text-xs font-mono tracking-widest uppercase text-[#F7F6F2]/50">
                  KEY DELIVERABLES
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {hoveredSkill?.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-[#F7F6F2]/5 border border-[#F7F6F2]/5 text-xs text-[#F7F6F2]/90 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F4B63E] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
