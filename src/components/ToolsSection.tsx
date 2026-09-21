import React, { useState } from 'react';
import { Sparkles, Check, Wrench } from 'lucide-react';
import { TOOLS } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Design', 'Video & Motion', 'Marketing & Analytics', 'AI & Strategy'];

  const filteredTools =
    selectedCategory === 'All'
      ? TOOLS
      : TOOLS.filter((t) => t.category === selectedCategory);

  return (
    <section id="tools" className="relative py-20 bg-[#F7F6F2] text-[#050505] border-t border-[#050505]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#050505]/60 uppercase mb-2">
              <Wrench className="w-3.5 h-3.5 text-[#F4B63E]" />
              <span>STACK & SOFTWARE ARSENAL</span>
            </div>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-[#050505]">
              Tools of the Trade.
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`tools-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all uppercase ${
                  selectedCategory === cat
                    ? 'bg-[#050505] text-[#F7F6F2]'
                    : 'bg-white text-[#050505]/70 border border-[#050505]/10 hover:border-[#050505]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Typographic Grid of Tools */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              id={`tool-card-${tool.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="group p-4 sm:p-5 rounded-2xl bg-white border border-[#050505]/10 hover:border-[#050505] transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#050505]/50 uppercase block mb-1">
                  {tool.category}
                </span>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#050505] group-hover:text-[#F4B63E] transition-colors leading-tight">
                  {tool.name}
                </h4>
              </div>

              <div className="mt-4 pt-3 border-t border-[#050505]/5 flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#050505]/5 text-[#050505]">
                  {tool.level}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B63E] group-hover:scale-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
