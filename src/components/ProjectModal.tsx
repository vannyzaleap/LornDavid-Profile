import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      const currentIndex = allProjects.findIndex((p) => p.id === project.id);
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % allProjects.length;
        onSelectProject(allProjects[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
        onSelectProject(allProjects[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose, onSelectProject, allProjects]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#111111]/80 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#F5F3EE] dark:bg-[#121215] border-3 border-[#111111] dark:border-[#ECECEE] shadow-[12px_12px_0px_#111111] dark:shadow-[12px_12px_0px_#ECECEE] my-auto flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b-3 border-[#111111] dark:border-[#ECECEE] bg-[#FFFFFF] dark:bg-[#1A1A1E]">
          <div className="flex items-center gap-3">
            <span
              className="px-2.5 py-1 font-mono text-xs font-black border border-[#111111] text-[#111111]"
              style={{ backgroundColor: project.accentColor }}
            >
              {project.number}
            </span>
            <span className="font-mono text-xs font-bold text-[#666666] dark:text-[#A0A0A5] tracking-wider uppercase">
              {project.category} · {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-[#FFFFFF] dark:bg-[#202025] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] hover:bg-[#FF6B35] hover:text-white transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* The Problem & Solution */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Title Area */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#111111] dark:text-[#FFFFFF] uppercase mb-2">
              {project.title}
            </h2>
            <p className="font-mono text-base sm:text-lg font-bold text-[#315CFF] dark:text-[#B8FF3D] mb-4">
              {project.subtitle}
            </p>
            <p className="text-lg text-[#222226] dark:text-[#E4E4EC] leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 bg-white dark:bg-[#151518] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#ECECEE] font-mono text-xs">
            <div>
              <span className="text-[#666666] dark:text-[#A8A8B2] block mb-1">ROLE</span>
              <span className="font-bold text-[#111111] dark:text-[#ECECEE]">{project.role}</span>
            </div>
            <div>
              <span className="text-[#666666] dark:text-[#A8A8B2] block mb-1">TIMELINE</span>
              <span className="font-bold text-[#111111] dark:text-[#ECECEE]">{project.year}</span>
            </div>
            <div>
              <span className="text-[#666666] dark:text-[#A8A8B2] block mb-1">METRICS</span>
              <span className="font-bold text-[#315CFF] dark:text-[#B8FF3D]">{project.metrics}</span>
            </div>
            <div>
              <span className="text-[#666666] dark:text-[#A8A8B2] block mb-1">STATUS</span>
              <span className="font-bold text-[#10B981] dark:text-[#4ADE80]">SHIPPED & ACTIVE</span>
            </div>
          </div>

          {/* Visual Showcase Graphic Banner */}
          <div
            className="w-full p-6 sm:p-10 border-3 border-[#111111] dark:border-[#ECECEE] relative overflow-hidden"
            style={{ backgroundColor: project.accentBg }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center font-black text-2xl sm:text-3xl border-3 border-[#111111] shadow-[4px_4px_0px_#111111] text-[#111111]"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.number}
              </div>
              <div className="font-black text-xl sm:text-2xl text-[#111111] tracking-tight font-mono">
                {project.title} ARCHITECTURE PREVIEW
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-lg">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white text-[#111111] font-mono text-xs font-bold border border-[#111111] shadow-[2px_2px_0px_#111111]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Editorial Case Study Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="bg-white dark:bg-[#151518] p-6 border-2 border-[#111111] dark:border-[#ECECEE] shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#ECECEE]">
              <div className="font-mono text-xs font-black tracking-widest text-[#FF6B35] dark:text-[#FFA07A] mb-2">
                01. THE PROBLEM
              </div>
              <h4 className="text-xl font-black text-[#111111] dark:text-[#ECECEE] mb-3">
                Operational Friction & Latency
              </h4>
              <p className="text-sm text-[#3A3A40] dark:text-[#D4D4DC] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="bg-white dark:bg-[#151518] p-6 border-2 border-[#111111] dark:border-[#ECECEE] shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#ECECEE]">
              <div className="font-mono text-xs font-black tracking-widest text-[#315CFF] dark:text-[#B8FF3D] mb-2">
                02. THE SOLUTION
              </div>
              <h4 className="text-xl font-black text-[#111111] dark:text-[#ECECEE] mb-3">
                Streamlined Systems Engineering
              </h4>
              <p className="text-sm text-[#3A3A40] dark:text-[#D4D4DC] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white dark:bg-[#151518] p-6 sm:p-8 border-2 border-[#111111] dark:border-[#ECECEE] shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#ECECEE]">
            <div className="font-mono text-xs font-black tracking-widest text-[#666666] dark:text-[#A8A8B2] mb-3">
              03. KEY ARCHITECTURAL FEATURES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#315CFF] dark:text-[#B8FF3D] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#333333] dark:text-[#D4D4DC] font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Design Process & Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border-2 border-[#111111] dark:border-[#ECECEE] bg-[#FAF9F5] dark:bg-[#151518]">
              <div className="font-mono text-xs font-black tracking-widest text-[#8B5CF6] dark:text-[#C4B5FD] mb-2">
                04. DESIGN PROCESS
              </div>
              <p className="text-sm text-[#3A3A40] dark:text-[#D4D4DC] leading-relaxed">
                {project.designProcess}
              </p>
            </div>

            <div className="p-6 border-2 border-[#111111] dark:border-[#ECECEE] bg-[#FFD84D] text-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="font-mono text-xs font-black tracking-widest text-[#111111] mb-2">
                05. PRODUCTION RESULT
              </div>
              <p className="text-sm font-medium leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer with Previous / Back / Next Navigation */}
        <div className="p-4 sm:p-5 border-t-3 border-[#111111] dark:border-[#ECECEE] bg-[#FFFFFF] dark:bg-[#1A1A1E] flex flex-wrap items-center justify-between gap-4 font-mono text-xs font-bold">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-2 px-3 py-2 border-2 border-[#111111] dark:border-[#ECECEE] bg-[#F5F3EE] dark:bg-[#202025] hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>PREV: {prevProject.title}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 border-2 border-[#111111] dark:border-[#ECECEE] bg-[#FF6B35] text-white hover:opacity-90 transition-opacity cursor-pointer shadow-[2px_2px_0px_#111111]"
          >
            ← BACK TO WORK
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-2 px-3 py-2 border-2 border-[#111111] dark:border-[#ECECEE] bg-[#F5F3EE] dark:bg-[#202025] hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] transition-colors cursor-pointer"
          >
            <span>NEXT: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
