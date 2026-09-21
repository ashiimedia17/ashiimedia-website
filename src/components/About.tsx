import React, { useState } from 'react';
import { ArrowUpRight, Crosshair, Sparkles, Check, Copy } from 'lucide-react';
import { Marquee } from './Marquee';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('workwithashka@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="relative bg-[#050505] text-[#F7F6F2] pt-8 pb-24 md:py-28 overflow-hidden">
      {/* Huge Marquee "about . about . about ." directly inspired by the reference */}
      <div className="w-full mb-12 md:mb-20">
        <Marquee
          items={['about', 'about', 'about', 'about']}
          direction="left"
          theme="dark"
          separator="."
          size="huge"
          className="border-none opacity-90 tracking-tighter"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stylized Photographic Composition with Viewfinder Reticles & Sunburst Petals */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Viewfinder Target Reticle Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[32px] p-6 border border-[#F7F6F2]/20 flex items-center justify-center bg-[#0a0a0a]">
              
              {/* Corner Reticle Markers (⌖) */}
              <div className="absolute -top-3 -left-3 text-[#F4B63E]">
                <Crosshair className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="absolute -top-3 -right-3 text-[#F4B63E]">
                <Crosshair className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="absolute -bottom-3 -left-3 text-[#F4B63E]">
                <Crosshair className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="absolute -bottom-3 -right-3 text-[#F4B63E]">
                <Crosshair className="w-6 h-6 stroke-[1.5]" />
              </div>

              {/* Side Measurement Scale Ticks (+ | +) as seen in reference */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col items-center text-[#F7F6F2]/40 text-xs font-mono select-none">
                <span>+</span>
                <span className="h-12 w-[1px] bg-[#F7F6F2]/30 my-1" />
                <span>+</span>
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center text-[#F7F6F2]/40 text-xs font-mono select-none">
                <span>+</span>
                <span className="h-12 w-[1px] bg-[#F7F6F2]/30 my-1" />
                <span>+</span>
              </div>

              {/* Radiating Fan Petals / Sunburst Graphic Silhouette (Reference Visual) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-30">
                <div className="w-[120%] h-[120%] flex items-center justify-center">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-6 h-56 bg-gradient-to-t from-transparent via-[#F7F6F2]/50 to-transparent rounded-full"
                      style={{
                        transform: `rotate(${i * 22.5}deg) translateY(-20px)`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Creative Monochrome Portrait with Camera */}
              <div className="relative z-10 w-full h-full rounded-[24px] overflow-hidden border border-[#F7F6F2]/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85"
                  alt="Ashka Portrait — Creative Focus"
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                
                {/* Floating focus tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#F7F6F2]/90 bg-[#050505]/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#F7F6F2]/15">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4B63E] animate-ping" />
                    <span>LENS // 35MM F1.4</span>
                  </span>
                  <span>ISO 400</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Structured Information Blocks */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3 text-xs tracking-[0.25em] font-mono text-[#F4B63E] uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CREATIVE MIND</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#F7F6F2] leading-tight tracking-tight">
              Turning raw ideas into visuals people{' '}
              <span className="text-[#F4B63E] underline decoration-[#F4B63E]/40 underline-offset-8">
                actually notice.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-[#F7F6F2]/80 font-normal leading-relaxed">
              <p>
                Hi, I'm <strong className="text-[#F7F6F2] font-semibold">Ashka</strong> — a creative designer and digital marketing enthusiast who loves turning ideas into visuals people actually notice.
              </p>
              <p>
                My work sits at the intersection of <strong className="text-[#F7F6F2] font-semibold">design and marketing</strong>. I enjoy creating social media creatives, branding visuals, content and digital experiences that are visually strong while still having a clear commercial purpose.
              </p>
            </div>

            {/* Information Grid inspired by reference */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#F7F6F2]/15">
              <div className="p-4 rounded-2xl bg-[#F7F6F2]/5 border border-[#F7F6F2]/10 flex flex-col justify-between">
                <span className="text-[10px] tracking-widest font-mono text-[#F7F6F2]/50 uppercase">
                  BASED IN
                </span>
                <span className="mt-2 font-display font-bold text-lg text-[#F7F6F2]">
                  New Delhi, India
                </span>
                <span className="text-[11px] text-[#F7F6F2]/60 mt-0.5">Available Globally (Remote)</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F6F2]/5 border border-[#F7F6F2]/10 flex flex-col justify-between">
                <span className="text-[10px] tracking-widest font-mono text-[#F7F6F2]/50 uppercase">
                  CORE FOCUS
                </span>
                <span className="mt-2 font-display font-bold text-lg text-[#F4B63E]">
                  Design + Marketing
                </span>
                <span className="text-[11px] text-[#F7F6F2]/60 mt-0.5">Brand & Visual Strategy</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F6F2]/5 border border-[#F7F6F2]/10 flex flex-col justify-between">
                <span className="text-[10px] tracking-widest font-mono text-[#F7F6F2]/50 uppercase">
                  CURRENT STATUS
                </span>
                <span className="mt-2 font-display font-bold text-lg text-[#F7F6F2]">
                  Building + Learning
                </span>
                <span className="text-[11px] text-[#F7F6F2]/60 mt-0.5">Skill Circle & Media Projects</span>
              </div>
            </div>

            {/* Contact & Email CTA bar */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                id="about-cta-start"
                onClick={onContactClick}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4B63E] text-[#050505] font-display font-bold text-xs tracking-wider uppercase hover:bg-[#F7F6F2] transition-colors"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                id="about-copy-email-btn"
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#F7F6F2]/20 text-xs font-mono text-[#F7F6F2]/90 hover:border-[#F7F6F2]/60 hover:bg-[#F7F6F2]/5 transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">EMAIL COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#F4B63E]" />
                    <span>workwithashka@gmail.com</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
