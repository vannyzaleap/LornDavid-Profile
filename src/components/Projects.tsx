import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ArrowRight, ArrowUpRight, Layers, Layout, Smartphone, Cpu } from 'lucide-react';
import { useSound } from '../hooks/useSound';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const { playHover, playClick } = useSound();

  const categories = ['All', 'Web Application', 'Systems & Web UI', 'Creative Tool', 'Mobile & Backend'];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  // Render bespoke Neo-Brutalist SVG/CSS project preview graphics
  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'digitalsmm':
        return (
          <div className="w-full h-full bg-[#EBF0FF] dark:bg-[#0D1530] p-5 flex flex-col justify-between select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            {/* Swiss Grid Overlay */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(to right, #315CFF 1px, transparent 1px), linear-gradient(to bottom, #315CFF 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            {/* Top Bar of Preview */}
            <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-[#ECECEE] pb-2 text-[10px] font-mono font-bold text-[#111111] dark:text-[#ECECEE]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#315CFF] border border-[#111111]" />
                <span>DIGITALSMM_CORE // v3.2</span>
              </div>
              <span className="text-[#315CFF] dark:text-[#7896FF]">POSTGRES TIMESERIES</span>
            </div>

            {/* Dashboard Mock Widgets */}
            <div className="grid grid-cols-3 gap-2 my-auto py-2">
              <div className="bg-white dark:bg-[#152042] p-2.5 border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE]">
                <div className="text-[9px] font-mono text-[#666666] dark:text-[#A0A0A5]">SCHEDULED</div>
                <div className="text-lg font-black font-mono text-[#315CFF] dark:text-[#7896FF] tabular-nums">1,482</div>
              </div>
              <div className="bg-white dark:bg-[#152042] p-2.5 border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE]">
                <div className="text-[9px] font-mono text-[#666666] dark:text-[#A0A0A5]">THROUGHPUT</div>
                <div className="text-lg font-black font-mono text-[#111111] dark:text-[#ECECEE] tabular-nums">99.98%</div>
              </div>
              <div className="bg-white dark:bg-[#152042] p-2.5 border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE]">
                <div className="text-[9px] font-mono text-[#666666] dark:text-[#A0A0A5]">ACTIVE CHANNELS</div>
                <div className="text-lg font-black font-mono text-[#10B981] tabular-nums">24 LIVE</div>
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="flex items-center justify-between pt-2 border-t-2 border-[#111111] dark:border-[#ECECEE] text-[10px] font-mono">
              <span className="font-bold text-[#111111] dark:text-[#ECECEE]">REDIS QUEUE: IDLE</span>
              <span className="text-[#315CFF] dark:text-[#7896FF] font-bold">SUB-SECOND LATENCY</span>
            </div>
          </div>
        );

      case 'nexus-os':
        return (
          <div className="w-full h-full bg-[#FFFBE6] dark:bg-[#201C0D] p-5 flex flex-col justify-between select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            {/* Desktop Top Bar */}
            <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-[#ECECEE] pb-2 text-[10px] font-mono font-bold text-[#111111] dark:text-[#ECECEE]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#FFD84D] border border-[#111111]" />
                <span>NEXUS_WORKSPACE.CANVAS</span>
              </div>
              <span className="text-[#876500] dark:text-[#FFD84D]">60 FPS // SUB-16MS</span>
            </div>

            {/* Multi-Window Preview */}
            <div className="relative h-28 my-auto">
              <div className="absolute top-0 left-0 w-3/4 p-2 bg-white dark:bg-[#2D2814] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#ECECEE] z-10">
                <div className="text-[9px] font-mono font-bold text-[#111111] dark:text-[#ECECEE] border-b border-[#111111] pb-1 mb-1">
                  MAIN_NODE_GRAPH.TS
                </div>
                <div className="text-[10px] font-mono text-[#876500] dark:text-[#FFE37E]">
                  viewport.render({'{ spatial: true, grid: 24 }'});
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 p-2 bg-[#FFD84D] text-[#111111] border-2 border-[#111111] shadow-[3px_3px_0px_#111111] z-20">
                <div className="text-[9px] font-mono font-bold border-b border-[#111111] pb-1 mb-1">
                  OFFLINE INDEXEDDB
                </div>
                <div className="text-[10px] font-mono font-bold">
                  ● 0ms STORAGE SYNC
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t-2 border-[#111111] dark:border-[#ECECEE] text-[10px] font-mono">
              <span className="font-bold text-[#111111] dark:text-[#ECECEE]">REACT 19 FIBER</span>
              <span className="text-[#876500] dark:text-[#FFD84D] font-bold">ZERO TELEMETRY</span>
            </div>
          </div>
        );

      case 'chroma-studio':
        return (
          <div className="w-full h-full bg-[#FFF0FA] dark:bg-[#280D22] p-5 flex flex-col justify-between select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-[#ECECEE] pb-2 text-[10px] font-mono font-bold text-[#111111] dark:text-[#ECECEE]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#FF4FD8] border border-[#111111]" />
                <span>CHROMA_MATRIX // APCA</span>
              </div>
              <span className="text-[#FF4FD8]">WCAG AAA 14.2:1</span>
            </div>

            {/* Color Swatch Bars */}
            <div className="my-auto space-y-2 py-2">
              <div className="grid grid-cols-4 gap-1.5">
                <div className="h-9 bg-[#111111] border-2 border-[#111111] flex items-center justify-center text-[10px] font-mono font-bold text-white">
                  #111
                </div>
                <div className="h-9 bg-[#FF4FD8] border-2 border-[#111111] flex items-center justify-center text-[10px] font-mono font-bold text-black">
                  #FF4FD8
                </div>
                <div className="h-9 bg-[#B8FF3D] border-2 border-[#111111] flex items-center justify-center text-[10px] font-mono font-bold text-black">
                  #B8FF3D
                </div>
                <div className="h-9 bg-[#315CFF] border-2 border-[#111111] flex items-center justify-center text-[10px] font-mono font-bold text-white">
                  #315CFF
                </div>
              </div>
              <div className="p-2 bg-white dark:bg-[#3D1435] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#FF4FD8] text-[10px] font-mono flex justify-between items-center text-[#111111] dark:text-[#ECECEE]">
                <span>APCA CONTRAST: Lc 98.4</span>
                <span className="font-bold text-[#FF4FD8]">PASS 100%</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t-2 border-[#111111] dark:border-[#ECECEE] text-[10px] font-mono">
              <span className="font-bold text-[#111111] dark:text-[#ECECEE]">CANVAS 2D ENGINE</span>
              <span className="text-[#FF4FD8] font-bold">FIGMA & CSS TOKENS</span>
            </div>
          </div>
        );

      case 'pulsepay':
        return (
          <div className="w-full h-full bg-[#F7FFE6] dark:bg-[#19240A] p-5 flex flex-col justify-between select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-[#ECECEE] pb-2 text-[10px] font-mono font-bold text-[#111111] dark:text-[#ECECEE]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#B8FF3D] border border-[#111111]" />
                <span>PULSEPAY_TERMINAL.GO</span>
              </div>
              <span className="text-[#386600] dark:text-[#B8FF3D]">SUB-500MS SETTLE</span>
            </div>

            {/* Payment Card Simulation */}
            <div className="my-auto py-2">
              <div className="p-3 bg-white dark:bg-[#23350E] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[3px_3px_0px_#B8FF3D] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#666666] dark:text-[#A0A0A5]">KHQR PROTOCOL</span>
                  <span className="px-2 py-0.5 bg-[#B8FF3D] text-[#111111] text-[9px] font-mono font-black border border-[#111111]">
                    CONFIRMED
                  </span>
                </div>
                <div className="text-xl font-black font-mono text-[#111111] dark:text-[#ECECEE] tabular-nums">
                  $48.50 USD
                </div>
                <div className="text-[9px] font-mono text-[#555555] dark:text-[#A0A0A5] flex justify-between">
                  <span>TX_ID: #8921-GO-REDIS</span>
                  <span className="text-[#10B981] font-bold">NONCE VERIFIED</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t-2 border-[#111111] dark:border-[#ECECEE] text-[10px] font-mono">
              <span className="font-bold text-[#111111] dark:text-[#ECECEE]">FLUTTER POS CLIENT</span>
              <span className="text-[#386600] dark:text-[#B8FF3D] font-bold">250K+ PROCESSED</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="work"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b-3 border-[#111111] dark:border-[#ECECEE]">
        <div>
          <span className="font-mono text-sm sm:text-base font-bold text-[#315CFF] dark:text-[#B8FF3D] tracking-wider block mb-1">
            02 — SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#111111] dark:text-[#F4F4F6] uppercase">
            FEATURED SYSTEMS.
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm text-[#555555] dark:text-[#A0A0A5] max-w-xs">
          Engineered for high-throughput, low latency, and uncompromising aesthetic clarity.
        </p>
      </div>

      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b-2 border-[#111111]/20 dark:border-[#ECECEE]/20">
        <span className="font-mono text-xs font-bold text-[#666666] dark:text-[#A0A0A5] mr-2">
          FILTER:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              playClick();
              setActiveFilter(cat);
            }}
            className={`px-3 py-1.5 font-mono text-xs font-bold border-2 transition-all cursor-pointer ${
              activeFilter === cat
                ? 'bg-[#111111] dark:bg-[#ECECEE] text-white dark:text-[#111111] border-[#111111] dark:border-[#ECECEE] shadow-[3px_3px_0px_#FFD84D]'
                : 'bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-[#ECECEE] border-[#111111] dark:border-[#ECECEE] hover:bg-[#F5F3EE] dark:hover:bg-[#25252A]'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Project Showcase Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onMouseEnter={() => playHover()}
            onClick={() => {
              playClick();
              onSelectProject(project);
            }}
            className="group relative bg-[#FFFFFF] dark:bg-[#151518] border-3 border-[#111111] dark:border-[#ECECEE] shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#111111] dark:hover:shadow-[10px_10px_0px_#ECECEE] transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            {/* Project Card Top Bar */}
            <div className="p-4 sm:p-5 border-b-3 border-[#111111] dark:border-[#ECECEE] flex items-center justify-between font-mono">
              <div className="flex items-center gap-3">
                <span
                  className="px-2.5 py-1 text-xs font-black border border-[#111111] text-[#111111]"
                  style={{ backgroundColor: project.accentColor }}
                >
                  {project.number}
                </span>
                <span className="text-xs font-bold text-[#444444] dark:text-[#C5C5CE] tracking-wide uppercase">
                  {project.category}
                </span>
              </div>
              <span className="text-xs font-bold text-[#111111] dark:text-[#ECECEE]">{project.year}</span>
            </div>

            {/* Large Interactive Visual Preview Container */}
            <div className="w-full h-56 sm:h-64 border-b-3 border-[#111111] dark:border-[#ECECEE] overflow-hidden">
              {renderProjectVisual(project)}
            </div>

            {/* Project Card Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#111111] dark:text-[#FFFFFF] uppercase mb-1 group-hover:text-[#315CFF] dark:group-hover:text-[#B8FF3D] transition-colors">
                  {project.title}
                </h3>
                <div className="font-mono text-xs font-bold text-[#FF6B35] dark:text-[#FFA07A] tracking-wider mb-3">
                  {project.subtitle}
                </div>
                <p className="text-sm text-[#3A3A40] dark:text-[#D4D4DC] leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              {/* Technologies unboxed list & CTA */}
              <div className="pt-4 border-t-2 border-[#111111]/15 dark:border-[#ECECEE]/30 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-[#444444] dark:text-[#C5C5CE]">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {idx < 2 && <span className="text-[#888888] dark:text-[#A8A8B2]">·</span>}
                    </React.Fragment>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-[#888888] dark:text-[#A8A8B2] font-mono">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#111111] dark:text-[#ECECEE] group-hover:text-[#315CFF] dark:group-hover:text-[#B8FF3D] transition-colors">
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
