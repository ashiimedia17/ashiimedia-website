import React from 'react';
import { Eye, HeartHandshake, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'ATTRACT',
      subtitle: 'Stop the Scroll',
      icon: Eye,
      description:
        'In a feed filled with sensory overload, visuals must command immediate pause within the first 1.2 seconds through typographic hierarchy, unexpected negative space, and evocative color balance.',
      tag: 'First Impression Impact',
    },
    {
      number: '02',
      title: 'CONNECT',
      subtitle: 'Resonate Deeply',
      icon: HeartHandshake,
      description:
        'Aesthetics without audience understanding are merely noise. Every post, lookbook, and campaign is engineered with empathetic storytelling that reflects the values and lifestyle of modern Gen-Z and discerning consumers.',
      tag: 'Emotional Affinity',
    },
    {
      number: '03',
      title: 'CONVERT',
      subtitle: 'Support Commercial Goals',
      icon: TrendingUp,
      description:
        'The ultimate validation of great design is tangible brand outcomes: saved carousels, profile follows, newsletter signups, pre-orders, and enduring brand prestige.',
      tag: 'Marketing Conversion',
    },
  ];

  return (
    <section id="philosophy" className="relative py-24 md:py-32 bg-[#F7F6F2] text-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Large Statement Section */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#050505]/60 uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B63E]" />
            <span>CORE VALUE & POSITIONING</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#050505] leading-[0.95]">
            GOOD DESIGN <br className="hidden sm:inline" />
            <span className="text-[#050505]/60 font-serif italic font-normal">GETS ATTENTION.</span> <br />
            SMART DESIGN <br className="hidden sm:inline" />
            <span className="text-[#050505] underline decoration-[#F4B63E] decoration-4 underline-offset-8">
              HAS A PURPOSE.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-[#050505]/80 font-medium leading-relaxed max-w-2xl">
            "I don't look at design only as decoration. I think about the audience, the message, the platform and what the visual needs to achieve."
          </p>
        </div>

        {/* 3 Editorial Pillars in 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                id={`philosophy-pillar-${pillar.number}`}
                className="group relative bg-white rounded-[28px] p-8 border border-[#050505]/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#050505]/30 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Minimal Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#050505]/10">
                    <span className="font-mono font-bold text-2xl text-[#050505]/40 group-hover:text-[#F4B63E] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-11 h-11 rounded-full bg-[#050505]/5 flex items-center justify-center text-[#050505] group-hover:bg-[#050505] group-hover:text-[#F7F6F2] transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#050505]">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#050505]/60 block mt-1">
                    {pillar.subtitle}
                  </span>

                  <p className="mt-4 text-sm text-[#050505]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#050505]/10 flex items-center justify-between text-xs font-mono text-[#050505]/60">
                  <span>{pillar.tag}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
