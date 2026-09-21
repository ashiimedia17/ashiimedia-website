import React, { useState } from 'react';
import { ArrowUpRight, Mail, Instagram, Linkedin, Send, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Social Media Creatives',
    budget: '$1k – $3k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    'Social Media Creatives',
    'Brand Identity & Logo',
    'Video Marketing & Reels',
    'Full Digital Campaign',
    'Creative Direction',
    'Other / Advisory',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('workwithashka@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#050505] text-[#F7F6F2] overflow-hidden">
      {/* Decorative huge watermark */}
      <div className="absolute left-6 bottom-4 text-[14vw] font-display font-black text-[#F7F6F2]/[0.02] select-none pointer-events-none uppercase leading-none">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Dramatic Heading & Direct Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#F4B63E] uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-[#F7F6F2] leading-[0.9]">
                LET'S
                <br />
                CREATE
                <br />
                <span className="text-[#F4B63E] underline decoration-[#F4B63E]/40 underline-offset-8">
                  SOMETHING.
                </span>
              </h2>

              <p className="mt-8 text-base sm:text-lg text-[#F7F6F2]/70 leading-relaxed max-w-md">
                Have a campaign, brand identity, or creative idea that needs high-fashion aesthetics and sharp marketing execution? Let's bring it to life.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="mt-12 space-y-4">
              <div className="p-5 rounded-2xl bg-[#F7F6F2]/5 border border-[#F7F6F2]/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#F7F6F2]/50 uppercase block">
                    DIRECT INBOX
                  </span>
                  <a
                    href="mailto:workwithashka@gmail.com"
                    className="font-mono text-sm sm:text-base text-[#F7F6F2] hover:text-[#F4B63E] font-semibold transition-colors mt-0.5 block"
                  >
                    workwithashka@gmail.com
                  </a>
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-full bg-[#F7F6F2]/10 hover:bg-[#F4B63E] hover:text-[#050505] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-[#F7F6F2]/20 text-xs font-mono text-[#F7F6F2] hover:border-[#F4B63E] hover:text-[#F4B63E] transition-all flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@ashii.media</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-[#F7F6F2]/20 text-xs font-mono text-[#F7F6F2] hover:border-[#F4B63E] hover:text-[#F4B63E] transition-all flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>Ashii Media</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimal Contact Form */}
          <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-10 rounded-[32px] border border-[#F7F6F2]/15 shadow-2xl">
            {isSubmitted ? (
              <div
                id="contact-form-success"
                className="py-16 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95 duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#F4B63E]/20 text-[#F4B63E] flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#F7F6F2]">
                  MESSAGE RECEIVED.
                </h3>
                <p className="text-sm text-[#F7F6F2]/70 max-w-sm">
                  Thank you for reaching out! Ashka will review your project requirements and respond within 24 hours.
                </p>
                <button
                  id="contact-reset-form-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      projectType: 'Social Media Creatives',
                      budget: '$1k – $3k',
                      message: '',
                    });
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full border border-[#F7F6F2]/30 text-xs font-mono tracking-wider hover:border-[#F7F6F2] transition-colors"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-[11px] font-mono tracking-widest uppercase text-[#F7F6F2]/60 mb-2"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      placeholder="e.g. Sofia Laurent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#050505] border border-[#F7F6F2]/20 rounded-xl px-4 py-3 text-sm text-[#F7F6F2] placeholder-[#F7F6F2]/30 focus:outline-none focus:border-[#F4B63E] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-[11px] font-mono tracking-widest uppercase text-[#F7F6F2]/60 mb-2"
                    >
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      placeholder="sofia@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#050505] border border-[#F7F6F2]/20 rounded-xl px-4 py-3 text-sm text-[#F7F6F2] placeholder-[#F7F6F2]/30 focus:outline-none focus:border-[#F4B63E] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type Selector Chips */}
                <div>
                  <label className="block text-[11px] font-mono tracking-widest uppercase text-[#F7F6F2]/60 mb-2">
                    PROJECT SCOPE
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        id={`scope-btn-${type.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                          formData.projectType === type
                            ? 'bg-[#F4B63E] text-[#050505] font-semibold'
                            : 'bg-[#050505] text-[#F7F6F2]/70 border border-[#F7F6F2]/15 hover:border-[#F7F6F2]/40'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-[11px] font-mono tracking-widest uppercase text-[#F7F6F2]/60 mb-2"
                  >
                    PROJECT DETAILS & TIMELINE
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    placeholder="Tell me about your brand, goals, target audience, and any initial ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#050505] border border-[#F7F6F2]/20 rounded-xl p-4 text-sm text-[#F7F6F2] placeholder-[#F7F6F2]/30 focus:outline-none focus:border-[#F4B63E] transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#F4B63E] text-[#050505] font-display font-extrabold text-sm tracking-wider uppercase hover:bg-[#F7F6F2] transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING MESSAGE...</span>
                  ) : (
                    <>
                      <span>SEND INQUIRY → START A PROJECT</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
