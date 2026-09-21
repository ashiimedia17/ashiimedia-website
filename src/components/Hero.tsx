import React from 'react';
import { ArrowUpRight, ArrowDown, Globe, Sparkles, Video, Instagram, Linkedin, Youtube } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:py-32 flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle background reticle and coordinate markings */}
      <div className="absolute top-28 left-8 text-[10px] tracking-widest text-[#050505]/40 font-mono hidden md:block">
        REF. 2026 // ASHII.MEDIA
      </div>
      <div className="absolute top-28 right-8 text-[10px] tracking-widest text-[#050505]/40 font-mono hidden md:block">
        [28°36'N, 77°12'E] NEW DELHI
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">
        {/* Left Column: Oversized Typography & Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Editorial Category Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F4B63E]" />
            <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#050505]/70">
              Visual Marketing × Creative Media
            </span>
          </div>

          {/* Main Headline - refined editorial scale */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] leading-[0.92] tracking-[-0.03em] text-[#050505] uppercase">
            creative
            <br />
            <span className="relative inline-block">
              designer.
              {/* Subtle underline accent */}
              <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-[#F4B63E] rounded-full hidden md:block" />
            </span>
          </h1>

          {/* Subtitle & Core Promise */}
          <div className="mt-6 md:mt-8 max-w-xl">
            <p className="text-base sm:text-lg md:text-xl text-[#050505]/85 font-medium leading-relaxed">
              I create visuals that don't just look good — they <strong className="text-[#050505] font-bold">communicate</strong>,{' '}
              <strong className="text-[#050505] font-bold">connect</strong> and support the marketing goal behind them.
            </p>
            <p className="mt-2 text-xs md:text-sm text-[#050505]/60 tracking-wide font-mono">
              Graphic Design × Social Media × Video Marketing × Brand Identity
            </p>
          </div>

          {/* Social Pill Links + Primary CTA Group */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Round Social Badges as in the reference (yt, ig, in, x) */}
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#050505]/20 flex items-center justify-center text-xs font-semibold hover:bg-[#050505] hover:text-[#F7F6F2] hover:border-[#050505] transition-all duration-200"
                aria-label="Instagram"
                title="Instagram"
              >
                ig
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#050505]/20 flex items-center justify-center text-xs font-semibold hover:bg-[#050505] hover:text-[#F7F6F2] hover:border-[#050505] transition-all duration-200"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#050505]/20 flex items-center justify-center text-xs font-semibold hover:bg-[#050505] hover:text-[#F7F6F2] hover:border-[#050505] transition-all duration-200"
                aria-label="YouTube"
                title="YouTube"
              >
                yt
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#050505]/20 flex items-center justify-center text-xs font-semibold hover:bg-[#050505] hover:text-[#F7F6F2] hover:border-[#050505] transition-all duration-200"
                aria-label="Behance"
                title="Behance"
              >
                be
              </a>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <button
                id="hero-cta-work"
                onClick={onExploreWork}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#050505] text-[#F7F6F2] font-semibold text-xs tracking-wider uppercase hover:bg-[#F4B63E] hover:text-[#050505] transition-all duration-200 shadow-sm"
              >
                <span>VIEW MY WORK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                id="hero-cta-connect"
                onClick={onContactClick}
                className="px-6 py-3.5 rounded-full border border-[#050505]/30 text-[#050505] font-semibold text-xs tracking-wider uppercase hover:border-[#050505] hover:bg-[#050505]/5 transition-all duration-200"
              >
                LET'S CONNECT
              </button>
            </div>
          </div>

          {/* Metrics Section - inspired directly by reference (+250k, +800k) */}
          <div className="mt-12 pt-8 border-t border-[#050505]/10 grid grid-cols-2 gap-6 max-w-lg">
            <div className="flex flex-col">
              <span className="font-display font-black text-3xl sm:text-4xl text-[#050505] tracking-tight">
                +250k
              </span>
              <span className="text-xs text-[#050505]/70 leading-snug mt-1">
                Audience reach generated across client campaigns & high-impact visual designs.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-3xl sm:text-4xl text-[#050505] tracking-tight">
                +800k
              </span>
              <span className="text-xs text-[#050505]/70 leading-snug mt-1">
                Content impressions & video minutes watched across viral reels and storytelling.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Visual Composition with Yellow Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          {/* Main Rounded Accent Card Container */}
          <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-[36px] bg-[#F4B63E] p-4 sm:p-6 overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
            {/* Top-right Floating Globe Icon Sticker */}
            <div className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-[#050505] text-[#F7F6F2] flex items-center justify-center shadow-lg transition-transform hover:rotate-45">
              <Globe className="w-5 h-5" />
            </div>

            {/* Script Signature Accent */}
            <div className="absolute top-6 left-6 z-20 select-none pointer-events-none">
              <span className="font-script text-3xl sm:text-4xl text-[#050505]/85 transform -rotate-6 block">
                Ashka.
              </span>
            </div>

            {/* Editorial Creator Image */}
            <div className="relative w-full h-full rounded-[28px] overflow-hidden">
              <img
                src="https://i.ibb.co/0p716tFV/151257.jpg"
                alt="Ashka — Creative Designer & Digital Marketer"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Warm subtle gradient overlay to anchor the card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Left Thumbnail Badges (direct inspiration from reference) */}
            <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-3">
              {/* Badge 1: Camera/Video Icon in Orange Pill */}
              <div className="w-12 h-12 rounded-full bg-[#F4B63E] border-2 border-[#050505] flex items-center justify-center text-[#050505] shadow-lg transition-transform hover:scale-110">
                <Video className="w-5 h-5" />
              </div>

              {/* Badge 2: Portrait Avatar Thumbnail */}
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#050505] shadow-lg transition-transform hover:scale-110">
                <img
                  src="https://i.ibb.co/0p716tFV/151257.jpg"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Badge 3: Big Black Arrow Button */}
              <button
                id="hero-arrow-badge"
                onClick={onExploreWork}
                aria-label="Scroll to Portfolio"
                className="w-12 h-12 rounded-full bg-[#050505] text-[#F7F6F2] flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#F7F6F2] hover:text-[#050505] group"
              >
                <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Tiny Bottom Right Coordinates Badge */}
            <div className="absolute bottom-6 right-6 z-20 bg-[#050505]/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono text-[#F7F6F2] tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B63E]" />
              <span>DELHI • IN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Reticle Line */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full mt-12 flex items-center justify-between text-xs text-[#050505]/60 font-mono">
        <div className="flex items-center gap-2">
          <span className="animate-bounce">
            <ArrowDown className="w-4 h-4 text-[#050505]" />
          </span>
          <span className="tracking-widest uppercase text-[11px] font-semibold text-[#050505]">
            SCROLL TO EXPLORE
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[11px]">
          <span>01 / 10 SECTIONS</span>
          <span>•</span>
          <span>EST. 2026</span>
          <span>•</span>
          <span>DESIGN WITH PURPOSE</span>
        </div>
      </div>
    </section>
  );
};
