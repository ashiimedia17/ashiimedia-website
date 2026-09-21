import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Layers, Target, Compass, BarChart3 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#050505]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#F7F6F2] text-[#050505] rounded-[32px] overflow-hidden shadow-2xl border border-[#050505]/20 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-30 bg-[#F7F6F2]/95 backdrop-blur-md px-6 sm:px-10 py-5 border-b border-[#050505]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#050505]/60 tracking-widest">
              CASE STUDY {project.number}
            </span>
            <span className="text-xs text-[#050505]/30">•</span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-[#050505] text-[#F7F6F2]">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next navigation */}
            <div className="hidden sm:flex items-center gap-1 mr-2">
              <button
                id="modal-prev-project"
                onClick={() => onSelectProject(prevProject)}
                className="p-2 rounded-full hover:bg-[#050505]/10 text-[#050505] transition-colors"
                title="Previous Case Study"
                aria-label="Previous Case Study"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="modal-next-project"
                onClick={() => onSelectProject(nextProject)}
                className="p-2 rounded-full hover:bg-[#050505]/10 text-[#050505] transition-colors"
                title="Next Case Study"
                aria-label="Next Case Study"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <button
              id="modal-close-btn"
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#050505] text-[#F7F6F2] hover:bg-[#F4B63E] hover:text-[#050505] transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="px-6 sm:px-10 py-8 max-h-[80vh] overflow-y-auto space-y-10">
          {/* Main Title & Overview */}
          <div>
            <span className="text-xs font-mono text-[#050505]/60 tracking-widest uppercase">
              {project.client ? `CLIENT: ${project.client} • ` : ''}YEAR {project.year}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#050505] uppercase tracking-tight mt-1">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-[#050505]/80 font-medium mt-2 max-w-3xl">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Project Image with Curved Border */}
          <div className="relative rounded-[28px] overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-[#050505]/10 border border-[#050505]/15 shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {project.accentColor && (
              <div className="absolute top-4 right-4 bg-[#F4B63E] text-[#050505] px-3.5 py-1 rounded-full text-xs font-mono font-bold">
                FEATURED WORK
              </div>
            )}
          </div>

          {/* Fast Spec Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-[#050505]/5 border border-[#050505]/10">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#050505]/60 block mb-1">
                MY ROLE
              </span>
              <span className="font-semibold text-sm text-[#050505] block">
                {project.role}
              </span>
            </div>

            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#050505]/60 block mb-1">
                TOOLS & SOFTWARE
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-0.5 rounded-full bg-white text-[#050505] border border-[#050505]/15 text-xs font-mono font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#050505]/60 block mb-1">
                KEY OUTCOME
              </span>
              <span className="font-semibold text-sm text-[#050505] block text-emerald-800">
                {project.results}
              </span>
            </div>
          </div>

          {/* Deep-Dive Strategic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Objective & Problem */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#050505]">
                <Target className="w-4 h-4 text-[#F4B63E]" />
                <span>01 / THE OBJECTIVE</span>
              </div>
              <p className="text-sm sm:text-base text-[#050505]/80 leading-relaxed bg-white p-5 rounded-2xl border border-[#050505]/10">
                {project.objective}
              </p>
            </div>

            {/* Creative Approach */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#050505]">
                <Compass className="w-4 h-4 text-[#F4B63E]" />
                <span>02 / CREATIVE APPROACH</span>
              </div>
              <p className="text-sm sm:text-base text-[#050505]/80 leading-relaxed bg-white p-5 rounded-2xl border border-[#050505]/10">
                {project.creativeApproach}
              </p>
            </div>

            {/* Marketing Strategy */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#050505]">
                <BarChart3 className="w-4 h-4 text-[#F4B63E]" />
                <span>03 / MARKETING STRATEGY</span>
              </div>
              <p className="text-sm sm:text-base text-[#050505]/80 leading-relaxed bg-white p-5 rounded-2xl border border-[#050505]/10">
                {project.marketingApproach}
              </p>
            </div>

            {/* Final Deliverables & Output */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#050505]">
                <Layers className="w-4 h-4 text-[#F4B63E]" />
                <span>04 / FINAL DELIVERABLES</span>
              </div>
              <p className="text-sm sm:text-base text-[#050505]/80 leading-relaxed bg-white p-5 rounded-2xl border border-[#050505]/10">
                {project.finalOutput}
              </p>
            </div>
          </div>

          {/* Visual Gallery */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-[#050505]/10">
              <h4 className="font-display font-bold text-xl uppercase tracking-tight text-[#050505]">
                Visual Artifacts & Editorial Stills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.galleryImages.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#050505]/10 border border-[#050505]/10 group"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} Still ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="pt-8 border-t border-[#050505]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#050505]/70 font-mono">
              Ready to elevate your brand with purposeful creative direction?
            </div>
            <button
              id="modal-cta-inquire"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#050505] text-[#F7F6F2] hover:bg-[#F4B63E] hover:text-[#050505] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
            >
              <span>INQUIRE ABOUT A SIMILAR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
