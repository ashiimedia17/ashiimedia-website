import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Check, ChevronDown } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';
import { TimelineItem } from '../types';

interface ExperienceSectionProps {
  onOpenContact: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenContact }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#F7F6F2] text-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#050505]/15">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#050505]/60 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B63E]" />
              <span>TIMELINE & MILESTONES</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#050505]">
              Experience &amp;
              <br />
              <span className="italic font-serif font-light text-[#050505]/80">Education.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#050505]/70 font-normal leading-relaxed">
            A continuous trajectory connecting applied commercial mathematics with high-fashion aesthetics and viral digital marketing.
          </p>
        </div>

        {/* Timeline Rows directly inspired by the Reference Image "Exhibitions" table */}
        <div className="flex flex-col divide-y divide-[#050505]/15 border-t border-b border-[#050505]/15">
          {TIMELINE.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={item.number}
                id={`timeline-row-${item.number}`}
                className="group py-8 transition-colors duration-200 hover:bg-[#050505]/[0.02]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                  
                  {/* Number & Year */}
                  <div className="lg:col-span-2 flex items-baseline gap-3">
                    <span className="font-mono text-sm font-bold text-[#050505]/50">
                      {item.number}
                    </span>
                    <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#050505]/5 border border-[#050505]/10 text-[#050505]">
                      {item.year}
                    </span>
                  </div>

                  {/* Title (slanted bold display font as seen in reference) */}
                  <div className="lg:col-span-5">
                    <h3 className="font-display italic font-extrabold text-2xl sm:text-3xl text-[#050505] tracking-tight group-hover:text-[#F4B63E] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-[#050505]/60 mt-0.5 block">
                      {item.tag}
                    </span>
                  </div>

                  {/* Organization & Location */}
                  <div className="lg:col-span-3 text-xs sm:text-sm font-mono text-[#050505]/75">
                    <div className="font-semibold text-[#050505]">{item.organization}</div>
                    <div className="text-[#050505]/50">{item.location}</div>
                  </div>

                  {/* Action Pill Button (like "Buy Ticket" / "View Details" in reference) */}
                  <div className="lg:col-span-2 flex justify-start lg:justify-end">
                    <button
                      id={`timeline-toggle-${item.number}`}
                      onClick={() => toggleExpand(idx)}
                      className="px-5 py-2 rounded-full border border-[#050505] text-xs font-mono font-semibold tracking-wider hover:bg-[#050505] hover:text-[#F7F6F2] transition-all flex items-center gap-1.5"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-[#050505]/10 grid grid-cols-1 md:grid-cols-12 gap-6 text-sm text-[#050505]/80 animate-in fade-in duration-200">
                    <div className="md:col-span-8 bg-white p-5 rounded-2xl border border-[#050505]/10">
                      <p className="leading-relaxed">{item.description}</p>
                    </div>
                    <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-3">
                      <button
                        id={`timeline-hire-btn-${item.number}`}
                        onClick={onOpenContact}
                        className="w-full md:w-auto px-4 py-2.5 rounded-full bg-[#050505] text-[#F7F6F2] text-xs font-semibold uppercase tracking-wider hover:bg-[#F4B63E] hover:text-[#050505] transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Collaborate</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
