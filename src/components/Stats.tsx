import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Stats: React.FC = () => {
  const accentColors = ['#315CFF', '#B8FF3D', '#FF6B35', '#FFD84D'];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {PORTFOLIO_DATA.stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-[#151518] border-3 border-[#111111] dark:border-[#ECECEE] p-6 sm:p-8 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] flex flex-col justify-between group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#111111] dark:hover:shadow-[8px_8px_0px_#ECECEE] transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-black text-[#666666] dark:text-[#A8A8B2]">
                METRIC_0{idx + 1}
              </span>
              <span
                className="w-3 h-3 border border-[#111111]"
                style={{ backgroundColor: accentColors[idx % accentColors.length] }}
              />
            </div>

            <div className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[#111111] dark:text-[#FFFFFF] tabular-nums mb-2">
              {stat.value}
            </div>

            <div>
              <div className="font-mono font-black text-xs sm:text-sm tracking-wider uppercase text-[#111111] dark:text-[#ECECEE] mb-1">
                {stat.label}
              </div>
              <div className="font-mono text-[11px] text-[#555555] dark:text-[#C5C5CE]">
                {stat.note}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
