import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#050505]/10 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Custom Geometric Logo Monogram */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            aria-label="Ashka Portfolio Home"
          >
            {/* Monogram graphic inspired by the reference logo */}
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 rounded-full bg-[#050505] inline-block transition-transform duration-300 group-hover:scale-110" />
              <span className="w-4 h-4 rounded-full bg-[#050505] inline-block transition-transform duration-300 group-hover:scale-110" />
              <span className="w-2.5 h-4 rounded-full bg-[#F4B63E] inline-block transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold tracking-tighter text-lg text-[#050505]">
                ASHII
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#050505]/60 font-semibold uppercase">
                MEDIA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-widest uppercase text-[#050505]">
            <button
              id="nav-link-home"
              onClick={() => handleLinkClick('hero')}
              className="relative py-1 hover:text-[#050505] text-[#050505]/80 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#050505] hover:after:w-full after:transition-all"
            >
              Home
            </button>
            <span className="text-[#050505]/30">/</span>
            <button
              id="nav-link-about"
              onClick={() => handleLinkClick('about')}
              className="relative py-1 hover:text-[#050505] text-[#050505]/80 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#050505] hover:after:w-full after:transition-all"
            >
              About
            </button>
            <span className="text-[#050505]/30">/</span>
            <button
              id="nav-link-work"
              onClick={() => handleLinkClick('portfolio')}
              className="relative py-1 hover:text-[#050505] text-[#050505]/80 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#050505] hover:after:w-full after:transition-all"
            >
              Work
            </button>
            <span className="text-[#050505]/30">/</span>
            <button
              id="nav-link-skills"
              onClick={() => handleLinkClick('skills')}
              className="relative py-1 hover:text-[#050505] text-[#050505]/80 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#050505] hover:after:w-full after:transition-all"
            >
              Skills
            </button>
            <span className="text-[#050505]/30">/</span>
            <button
              id="nav-link-philosophy"
              onClick={() => handleLinkClick('philosophy')}
              className="relative py-1 hover:text-[#050505] text-[#050505]/80 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#050505] hover:after:w-full after:transition-all"
            >
              Philosophy
            </button>
            <span className="text-[#050505]/30">/</span>
            <button
              id="nav-link-contact"
              onClick={() => handleLinkClick('contact')}
              className="relative py-1 hover:text-[#050505] text-[#050505]/80 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#050505] hover:after:w-full after:transition-all"
            >
              Contact
            </button>
          </nav>

          {/* Right Status Pill & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#050505]/15 bg-[#F7F6F2]/80 text-[11px] font-medium text-[#050505]/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Projects</span>
              <span className="text-[#050505]/40">•</span>
              <span className="font-semibold text-[#050505]">2026</span>
            </div>

            <button
              id="nav-cta-work"
              onClick={() => handleLinkClick('contact')}
              className="group flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#050505] text-[#F7F6F2] text-xs font-semibold tracking-wider hover:bg-[#F4B63E] hover:text-[#050505] transition-all duration-200"
            >
              <span>LET'S WORK</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#050505] hover:bg-[#050505]/5 rounded-full transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-40 bg-[#050505] text-[#F7F6F2] flex flex-col justify-between p-8 pt-24 md:hidden animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs tracking-widest text-[#F4B63E] uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Menu Navigation</span>
            </div>

            <nav className="flex flex-col gap-5 text-3xl font-display font-bold">
              {[
                { label: '01 / HOME', id: 'hero' },
                { label: '02 / ABOUT', id: 'about' },
                { label: '03 / SELECTED WORK', id: 'portfolio' },
                { label: '04 / SKILLS', id: 'skills' },
                { label: '05 / PHILOSOPHY', id: 'philosophy' },
                { label: '06 / EXPERIENCE', id: 'experience' },
                { label: '07 / CONTACT', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  id={`mobile-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-left text-[#F7F6F2] hover:text-[#F4B63E] transition-colors py-1 border-b border-[#F7F6F2]/10"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#F7F6F2]/20 flex flex-col gap-4">
            <div className="text-xs text-[#F7F6F2]/60 uppercase tracking-widest">
              Available for Freelance & Full-time Roles
            </div>
            <button
              id="mobile-cta-btn"
              onClick={() => handleLinkClick('contact')}
              className="w-full py-4 rounded-full bg-[#F4B63E] text-[#050505] font-display font-bold text-base flex items-center justify-center gap-2"
            >
              <span>LET'S TALK / START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
