import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-3 border-[#111111] dark:border-[#ECECEE]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 border-b-3 border-[#111111] dark:border-[#ECECEE]">
        <div>
          <span className="font-mono text-sm sm:text-base font-bold text-[#315CFF] dark:text-[#B8FF3D] tracking-wider block mb-1">
            06 — TIMELINE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#111111] dark:text-[#F4F4F6] uppercase">
            CHRONOLOGY.
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm text-[#4B4B52] dark:text-[#C5C5CE] max-w-xs">
          A disciplined progression of engineering craft, systems design, and product delivery.
        </p>
      </div>

      {/* Brutalist Timeline Rows */}
      <div className="space-y-6">
        {PORTFOLIO_DATA.journey.map((item, index) => (
          <div
            key={item.year}
            className="bg-white dark:bg-[#151518] border-3 border-[#111111] dark:border-[#ECECEE] p-6 sm:p-8 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#315CFF] dark:hover:shadow-[8px_8px_0px_#B8FF3D] transition-all duration-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Year Column */}
              <div className="md:col-span-3">
                <div className="inline-block px-3 py-1 font-mono font-black text-xl sm:text-2xl bg-[#FFD84D] text-[#111111] border-2 border-[#111111] shadow-[3px_3px_0px_#111111] mb-2">
                  {item.year}
                </div>
                <div className="font-mono text-xs font-bold text-[#555555] dark:text-[#B4B4BE] block">
                  {item.organization}
                </div>
              </div>

              {/* Role & Description Column */}
              <div className="md:col-span-9 space-y-3">
                <h3 className="text-xl sm:text-2xl font-black font-mono text-[#111111] dark:text-[#FFFFFF]">
                  {item.role}
                </h3>
                <p className="text-sm sm:text-base text-[#3A3A40] dark:text-[#D4D4DC] leading-relaxed">
                  {item.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#FAF9F5] dark:bg-[#1E1E24] text-[#111111] dark:text-[#ECECEE] font-mono text-xs border border-[#111111]/30 dark:border-[#ECECEE]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
