import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-[#050505] text-[#F7F6F2] border-t border-[#F7F6F2]/15 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F7F6F2]/10 items-start">
          
          {/* Brand & Monogram */}
          <div className="md:col-span-5 flex flex-col space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#F7F6F2]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#F7F6F2]" />
              <span className="w-2 h-3.5 rounded-full bg-[#F4B63E]" />
              <span className="font-display font-extrabold text-2xl tracking-tighter text-[#F7F6F2] ml-1">
                ASHII MEDIA
              </span>
            </div>
            <p className="text-xs text-[#F7F6F2]/60 max-w-sm leading-relaxed font-mono">
              Creative Designer &amp; Digital Marketing Enthusiast based in India. Focused on visual storytelling, social creatives, and brand identities that perform.
            </p>
          </div>

          {/* Center Message */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <span className="text-[10px] font-mono tracking-widest text-[#F4B63E] uppercase block mb-1">
              CREATIVE MOTTO
            </span>
            <span className="font-display font-bold text-lg sm:text-xl text-[#F7F6F2] tracking-tight uppercase">
              "DESIGNED WITH INTENTION."
            </span>
            <span className="text-xs text-[#F7F6F2]/50 font-mono mt-1">
              Crafted with millimeter typographic rigor &amp; commercial strategy.
            </span>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-2 text-xs font-mono tracking-wider uppercase text-[#F7F6F2]/75">
            <button
              id="footer-nav-home"
              onClick={() => onNavigate('hero')}
              className="hover:text-[#F4B63E] transition-colors py-0.5"
            >
              01 // Home
            </button>
            <button
              id="footer-nav-about"
              onClick={() => onNavigate('about')}
              className="hover:text-[#F4B63E] transition-colors py-0.5"
            >
              02 // About
            </button>
            <button
              id="footer-nav-work"
              onClick={() => onNavigate('portfolio')}
              className="hover:text-[#F4B63E] transition-colors py-0.5"
            >
              03 // Work
            </button>
            <button
              id="footer-nav-skills"
              onClick={() => onNavigate('skills')}
              className="hover:text-[#F4B63E] transition-colors py-0.5"
            >
              04 // Skills
            </button>
            <button
              id="footer-nav-contact"
              onClick={() => onNavigate('contact')}
              className="hover:text-[#F4B63E] transition-colors py-0.5"
            >
              05 // Contact
            </button>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F7F6F2]/50">
          <div>
            © 2026 Ashka. All rights reserved. Built with editorial precision.
          </div>

          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#F7F6F2]/20 text-[#F7F6F2] hover:border-[#F4B63E] hover:text-[#F4B63E] hover:bg-[#F7F6F2]/5 transition-all text-xs"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
