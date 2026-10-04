import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Check, Compass, Terminal, Shield, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const icons = [Shield, Compass, Zap];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 border-b-3 border-[#111111] dark:border-[#ECECEE]">
        <div>
          <span className="font-mono text-sm sm:text-base font-bold text-[#FF6B35] tracking-wider block mb-1">
            01 — ABOUT
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#111111] dark:text-[#F4F4F6] uppercase">
            EDITORIAL BOARD.
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm text-[#4B4B52] dark:text-[#C5C5CE] max-w-xs">
          Clear systems. Disciplined typography. Zero fluff.
        </p>
      </div>

      {/* Asymmetric Swiss Grid Information Board */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-12">
        {/* WHO Block (col-span-7) */}
        <div className="md:col-span-7 bg-[#FFFFFF] dark:bg-[#151518] border-3 border-[#111111] dark:border-[#ECECEE] p-6 sm:p-8 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] flex flex-col justify-between group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#315CFF] dark:hover:shadow-[8px_8px_0px_#B8FF3D] transition-all duration-200">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#111111] dark:border-[#ECECEE]">
              <span className="font-mono text-xs font-black tracking-widest text-[#111111] dark:text-[#ECECEE]">
                WHO
              </span>
              <span className="font-mono text-xs text-[#666666] dark:text-[#A8A8B2]">ID / LD-01</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] dark:text-[#FFFFFF] leading-tight mb-4">
              {PORTFOLIO_DATA.about.who}
            </h3>
            <p className="text-base text-[#3A3A40] dark:text-[#D4D4DC] leading-relaxed">
              Bridging the gap between engineering rigor and creative aesthetic conviction. I do not separate design from software implementation—they are two sides of the same artifact.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t-2 border-[#111111]/15 dark:border-[#ECECEE]/30 flex flex-wrap items-center gap-4 text-xs font-mono font-bold">
            <span className="text-[#315CFF] dark:text-[#7896FF]">FULL-STACK CRAFT</span>
            <span className="text-[#888888] dark:text-[#A8A8B2]">·</span>
            <span className="text-[#FF6B35] dark:text-[#FFA07A]">NEO-BRUTALISM</span>
            <span className="text-[#888888] dark:text-[#A8A8B2]">·</span>
            <span className="text-[#8B5CF6] dark:text-[#C4B5FD]">PERFORMANCE OBSESSED</span>
          </div>
        </div>

        {/* WHAT Block (col-span-5) */}
        <div className="md:col-span-5 bg-[#FFD84D] text-[#111111] border-3 border-[#111111] dark:border-[#ECECEE] p-6 sm:p-8 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] flex flex-col justify-between group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#111111] dark:hover:shadow-[8px_8px_0px_#ECECEE] transition-all duration-200">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#111111]">
              <span className="font-mono text-xs font-black tracking-widest">
                WHAT
              </span>
              <span className="font-mono text-xs font-bold">CORE CAPABILITIES</span>
            </div>

            <ul className="space-y-2.5 font-mono font-bold text-sm sm:text-base">
              {PORTFOLIO_DATA.about.what.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-center justify-between p-2.5 bg-white text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111]"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs text-[#777777]">0{idx + 1}</span>
                    <span>{item}</span>
                  </span>
                  <Check className="w-4 h-4 text-[#111111]" />
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 mt-4 font-mono text-[11px] font-bold text-[#222222]">
            HIGH CAPACITY PRODUCTION READY
          </div>
        </div>

        {/* WHERE Block (col-span-5) */}
        <div className="md:col-span-5 bg-[#315CFF] text-white border-3 border-[#111111] dark:border-[#ECECEE] p-6 sm:p-8 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] flex flex-col justify-between group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#FFD84D] transition-all duration-200">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-white/40">
              <span className="font-mono text-xs font-black tracking-widest">
                WHERE
              </span>
              <span className="font-mono text-xs opacity-80">UTC+7 TIMEZONE</span>
            </div>

            <h4 className="text-2xl sm:text-3xl font-black mb-2">
              Cambodia / Phnom Penh
            </h4>
            <p className="text-sm text-white/90 leading-relaxed font-medium">
              Based in the vibrant heart of Southeast Asia, collaborating with forward-thinking teams across Tokyo, Singapore, Berlin, and San Francisco.
            </p>
          </div>

          <div className="pt-6 font-mono text-xs flex items-center justify-between">
            <span className="bg-white text-[#111111] px-2 py-0.5 font-bold border border-[#111111]">
              REMOTE ASYNC & SYNC
            </span>
            <span className="opacity-80">LAT: 11.5564° N</span>
          </div>
        </div>

        {/* CURRENTLY Block (col-span-7) */}
        <div className="md:col-span-7 bg-[#FFFFFF] dark:bg-[#151518] border-3 border-[#111111] dark:border-[#ECECEE] p-6 sm:p-8 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] flex flex-col justify-between group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#FF6B35] transition-all duration-200">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#111111] dark:border-[#ECECEE]">
              <span className="font-mono text-xs font-black tracking-widest text-[#111111] dark:text-[#ECECEE]">
                CURRENTLY
              </span>
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#10B981] dark:text-[#4ADE80]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] dark:bg-[#4ADE80] animate-pulse" />
                <span>ACTIVE FOCUS</span>
              </div>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-[#111111] dark:text-[#FFFFFF] mb-3">
              {PORTFOLIO_DATA.about.currently}
            </h4>
            <p className="text-sm text-[#444444] dark:text-[#C8C8D2] leading-relaxed">
              Diving into high-performance web systems, distributed queuing, and building digital tools that respect human attention and agency.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6 mt-6 border-t-2 border-[#111111]/15 dark:border-[#ECECEE]/30 text-[11px] font-mono font-bold">
            <div className="bg-[#FAF9F5] dark:bg-[#1E1E24] p-2 border border-[#111111] dark:border-[#ECECEE] text-center text-[#111111] dark:text-[#ECECEE]">
              SYSTEM ARCH
            </div>
            <div className="bg-[#FAF9F5] dark:bg-[#1E1E24] p-2 border border-[#111111] dark:border-[#ECECEE] text-center text-[#111111] dark:text-[#ECECEE]">
              DOCKER
            </div>
            <div className="bg-[#FAF9F5] dark:bg-[#1E1E24] p-2 border border-[#111111] dark:border-[#ECECEE] text-center text-[#111111] dark:text-[#ECECEE]">
              AI LOGIC
            </div>
            <div className="bg-[#FAF9F5] dark:bg-[#1E1E24] p-2 border border-[#111111] dark:border-[#ECECEE] text-center text-[#111111] dark:text-[#ECECEE]">
              SWISS UI
            </div>
          </div>
        </div>
      </div>

      {/* Engineering & Design Principles Bar */}
      <div className="bg-[#FFFFFF] dark:bg-[#18181C] border-3 border-[#111111] dark:border-[#ECECEE] p-6 sm:p-8 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE]">
        <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#111111] dark:border-[#ECECEE]">
          <span className="font-mono text-xs font-black tracking-widest text-[#111111] dark:text-[#ECECEE]">
            OPERATING PHILOSOPHY
          </span>
          <span className="font-mono text-xs text-[#888888]">SELECT TO INSPECT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.about.philosophy.map((item, index) => {
            const Icon = icons[index % icons.length];
            const isSelected = activePrinciple === index;
            return (
              <button
                key={item.title}
                onClick={() => setActivePrinciple(index)}
                className={`text-left p-5 border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#111111] dark:border-[#ECECEE] bg-[#FFD84D] text-[#111111] shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#ECECEE]'
                    : 'border-[#111111]/30 dark:border-[#ECECEE]/30 bg-[#FAF9F5] dark:bg-[#202025] text-[#111111] dark:text-[#F4F4F6] hover:border-[#111111] dark:hover:border-[#ECECEE]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold opacity-75">
                    0{index + 1}
                  </span>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-mono font-black text-base sm:text-lg mb-1">
                  {item.title}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                  {item.content}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
