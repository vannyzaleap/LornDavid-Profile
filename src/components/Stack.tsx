import React, { useState } from 'react';
import { PORTFOLIO_DATA, TechnologyItem } from '../data/portfolioData';
import { Terminal, Check, Info, Sparkles } from 'lucide-react';

export const Stack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechnologyItem | null>(
    PORTFOLIO_DATA.techStack[0]
  );
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Mobile',
    'Database',
    'DevOps',
    'Design & Tools',
  ];

  const filteredStack =
    filterCategory === 'All'
      ? PORTFOLIO_DATA.techStack
      : PORTFOLIO_DATA.techStack.filter((t) => t.category === filterCategory);

  return (
    <section
      id="stack"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b-3 border-[#111111] dark:border-[#ECECEE]">
        <div>
          <span className="font-mono text-sm sm:text-base font-bold text-[#FF4FD8] tracking-wider block mb-1">
            03 — STACK
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#111111] dark:text-[#F4F4F6] uppercase">
            TECHNOLOGY MATRIX.
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm text-[#555555] dark:text-[#A0A0A5] max-w-xs">
          Zero arbitrary percentage bars. Battle-tested tools calibrated for real production constraints.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b-2 border-[#111111]/20 dark:border-[#ECECEE]/20">
        <span className="font-mono text-xs font-bold text-[#666666] dark:text-[#A0A0A5] mr-2">
          CATEGORY:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3 py-1.5 font-mono text-xs font-bold border-2 transition-all cursor-pointer ${
              filterCategory === cat
                ? 'bg-[#111111] dark:bg-[#ECECEE] text-white dark:text-[#111111] border-[#111111] dark:border-[#ECECEE] shadow-[3px_3px_0px_#FF4FD8]'
                : 'bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-[#ECECEE] border-[#111111] dark:border-[#ECECEE] hover:bg-[#F5F3EE] dark:hover:bg-[#25252A]'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main Grid: Interactive Tech Blocks on Left + Active Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Technology Blocks */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {filteredStack.map((tech) => {
            const isSelected = selectedTech?.name === tech.name;
            return (
              <button
                key={tech.name}
                onClick={() => setSelectedTech(tech)}
                className={`p-4 text-left border-3 transition-all cursor-pointer flex flex-col justify-between h-28 relative ${
                  isSelected
                    ? 'border-[#111111] dark:border-[#ECECEE] bg-[#FFD84D] text-[#111111] shadow-[6px_6px_0px_#111111] translate-x-[-2px] translate-y-[-2px]'
                    : 'border-[#111111] dark:border-[#ECECEE] bg-white dark:bg-[#18181C] text-[#111111] dark:text-[#F4F4F6] shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#ECECEE] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#111111] dark:hover:shadow-[6px_6px_0px_#ECECEE]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="opacity-75">{tech.category}</span>
                  <span
                    className="w-2.5 h-2.5 border border-[#111111]"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>

                <div className="font-mono font-black text-base sm:text-lg tracking-tight">
                  {tech.name}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono font-bold opacity-80 pt-1 border-t border-[#111111]/20 dark:border-[#ECECEE]/20">
                  <span>{tech.level}</span>
                  <span>{tech.experienceYears}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Inspector Card */}
        <div className="lg:col-span-4 bg-white dark:bg-[#151518] border-3 border-[#111111] dark:border-[#ECECEE] p-6 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] sticky top-24">
          <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#111111] dark:border-[#ECECEE] font-mono text-xs font-bold text-[#111111] dark:text-[#ECECEE]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#315CFF] dark:text-[#B8FF3D]" />
              <span>STACK_INSPECTOR.SYS</span>
            </div>
            <span className="text-[#10B981] dark:text-[#4ADE80]">ACTIVE</span>
          </div>

          {selectedTech ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-black font-mono text-[#111111] dark:text-[#FFFFFF]">
                  {selectedTech.name}
                </h4>
                <span
                  className="px-2 py-0.5 font-mono text-xs font-bold border border-[#111111] text-[#111111]"
                  style={{ backgroundColor: selectedTech.color }}
                >
                  {selectedTech.category}
                </span>
              </div>

              <div className="p-3 bg-[#FAF9F5] dark:bg-[#1E1E24] border-2 border-[#111111] dark:border-[#ECECEE] space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-[#666666] dark:text-[#A8A8B2]">PROFICIENCY:</span>
                  <span className="font-bold text-[#111111] dark:text-[#ECECEE]">
                    {selectedTech.level}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666] dark:text-[#A8A8B2]">PRODUCTION CRAFT:</span>
                  <span className="font-bold text-[#315CFF] dark:text-[#B8FF3D]">
                    {selectedTech.experienceYears}
                  </span>
                </div>
              </div>

              <div>
                <span className="font-mono text-xs font-black tracking-wider text-[#FF6B35] dark:text-[#FFA07A] block mb-1">
                  TECHNICAL FOCUS & USAGE
                </span>
                <p className="text-sm text-[#333333] dark:text-[#D4D4DC] leading-relaxed">
                  {selectedTech.note}
                </p>
              </div>

              <div className="p-3 bg-[#EBF0FF] dark:bg-[#101A38] border border-[#315CFF] text-xs font-mono space-y-1">
                <span className="font-bold text-[#315CFF] dark:text-[#7896FF] block">
                  ARCHITECTURE PHILOSOPHY:
                </span>
                <p className="text-[#203060] dark:text-[#C5D5FF]">
                  Deep understanding of underlying specs before adopting high-level abstractions. No bloat, minimal bundle footprint.
                </p>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-sm font-mono text-[#666666] dark:text-[#A8A8B2]">
              Click any technology block to inspect production usage details.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
