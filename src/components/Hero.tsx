import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Code, Layers, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useSound } from '../hooks/useSound';

interface HeroProps {
  onOpenAiScope: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAiScope }) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'code'>('visual');
  const { playClick, playHover } = useSound();

  const scrollToSection = (id: string) => {
    playClick();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-clip">
      {/* Top Meta Line: Location & Year & Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-[#111111] dark:border-[#ECECEE] font-mono text-xs sm:text-sm font-bold text-[#111111] dark:text-[#E2E2E6]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#FF6B35] border border-[#111111] inline-block" />
          <span>{PORTFOLIO_DATA.creator.location}</span>
          <span className="text-[#888888]">/</span>
          <span className="text-[#315CFF] dark:text-[#B8FF3D]">{PORTFOLIO_DATA.creator.year}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#666666] dark:text-[#A0A0A5] hidden md:inline">SYSTEM STATUS:</span>
          <div className="flex items-center gap-2 bg-[#B8FF3D] text-[#111111] px-2.5 py-0.5 border border-[#111111] shadow-[2px_2px_0px_#111111] font-bold text-xs">
            <span className="w-2 h-2 rounded-full bg-[#111111] animate-ping" />
            <span>● AVAILABLE FOR WORK</span>
          </div>
        </div>
      </div>

      {/* Hero Grid: Main Typography Left + Creative Card Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Massive Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-display tracking-tight text-[#111111] dark:text-[#F4F4F6] uppercase leading-[0.9] mb-6 select-none">
            <span className="block text-stroke hover:text-[#315CFF] transition-colors duration-200">
              FULL STACK
            </span>
            <span className="block text-[#111111] dark:text-[#ECECEE] hover:text-[#FF6B35] transition-colors duration-200">
              DEVELOPER.
            </span>
          </h1>

          <div className="max-w-xl mb-8 space-y-3">
            <p className="font-mono text-base sm:text-lg font-bold text-[#315CFF] dark:text-[#B8FF3D] tracking-tight">
              {PORTFOLIO_DATA.creator.role}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-[#333333] dark:text-[#C8C8CC] font-medium leading-snug">
              {PORTFOLIO_DATA.creator.shortBio}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('#work')}
              className="px-6 py-4 font-mono font-bold text-sm sm:text-base bg-[#111111] dark:bg-[#ECECEE] text-[#FFFFFF] dark:text-[#111111] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[5px_5px_0px_#315CFF] dark:shadow-[5px_5px_0px_#B8FF3D] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#315CFF] dark:hover:shadow-[7px_7px_0px_#B8FF3D] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#315CFF] transition-all flex items-center gap-3 cursor-pointer group"
            >
              <span>VIEW WORK</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-4 font-mono font-bold text-sm sm:text-base bg-[#FFFFFF] dark:bg-[#1A1A1E] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[5px_5px_0px_#111111] dark:shadow-[5px_5px_0px_#ECECEE] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#111111] dark:hover:shadow-[7px_7px_0px_#ECECEE] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#111111] transition-all flex items-center gap-3 cursor-pointer group"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-[-2px]" />
            </button>

            <button
              onClick={() => {
                playClick();
                onOpenAiScope();
              }}
              className="px-4 py-4 font-mono font-bold text-xs sm:text-sm bg-[#FFD84D] text-[#111111] border-2 border-[#111111] shadow-[4px_4px_0px_#111111] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#111111] active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2 cursor-pointer"
              title="Estimate scope and architecture with AI"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">AI BRIEF SCOPER</span>
              <span className="sm:hidden">AI SCOPE</span>
            </button>
          </div>
        </div>

        {/* Right Column: Creative Visual Card with subtle rotation hover */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            onMouseEnter={() => playHover()}
            className="w-full max-w-md bg-[#FFFFFF] dark:bg-[#18181C] border-3 border-[#111111] dark:border-[#ECECEE] shadow-[8px_8px_0px_#111111] dark:shadow-[8px_8px_0px_#ECECEE] rotate-[-2.5deg] hover:rotate-0 hover:translate-y-[-6px] hover:shadow-[12px_12px_0px_#315CFF] dark:hover:shadow-[12px_12px_0px_#B8FF3D] transition-all duration-300 ease-out select-none"
          >
            {/* Window Title Bar */}
            <div className="p-3 bg-[#F5F3EE] dark:bg-[#121215] border-b-2 border-[#111111] dark:border-[#ECECEE] flex items-center justify-between font-mono text-xs font-bold text-[#111111] dark:text-[#E2E2E6]">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF6B35] border border-[#111111]" />
                <div className="w-3 h-3 rounded-full bg-[#FFD84D] border border-[#111111]" />
                <div className="w-3 h-3 rounded-full bg-[#B8FF3D] border border-[#111111]" />
              </div>
              <span className="truncate px-2">LORN_DAVID_WORKSPACE.SYS</span>
              <div className="flex gap-1">
                <button
                  onClick={() => {
                    playClick();
                    setActiveTab('visual');
                  }}
                  className={`px-2 py-0.5 text-[10px] font-mono border border-[#111111] cursor-pointer transition-colors ${
                    activeTab === 'visual'
                      ? 'bg-[#315CFF] text-white'
                      : 'bg-white text-[#111111] dark:bg-[#202025] dark:text-white'
                  }`}
                >
                  CANVAS
                </button>
                <button
                  onClick={() => {
                    playClick();
                    setActiveTab('code');
                  }}
                  className={`px-2 py-0.5 text-[10px] font-mono border border-[#111111] cursor-pointer transition-colors ${
                    activeTab === 'code'
                      ? 'bg-[#315CFF] text-white'
                      : 'bg-white text-[#111111] dark:bg-[#202025] dark:text-white'
                  }`}
                >
                  SPEC
                </button>
              </div>
            </div>

            {/* Visual Canvas Area */}
            <div className="relative p-6 bg-[#FAF9F5] dark:bg-[#151518] min-h-[260px] flex flex-col justify-between overflow-hidden">
              {activeTab === 'visual' ? (
                <>
                  {/* Swiss Grid Background Lines */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Abstract Creative Composition Graphic */}
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 bg-[#111111] text-[#FFFFFF] font-mono text-[11px] font-bold">
                        SWISS_GRID_v4
                      </span>
                      <span className="font-mono text-xs font-bold text-[#FF6B35]">
                        INDEX / 2026
                      </span>
                    </div>

                    <div className="p-4 bg-white dark:bg-[#202024] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[4px_4px_0px_#FFD84D]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-[#315CFF] text-white flex items-center justify-center font-black text-sm border border-[#111111]">
                          L
                        </div>
                        <div>
                          <div className="font-black text-sm text-[#111111] dark:text-[#F4F4F6] font-mono">
                            LORN DAVID
                          </div>
                          <div className="text-[11px] font-mono text-[#666666] dark:text-[#A0A0A5]">
                            FULL-STACK ARCHITECT
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5 pt-2 text-[10px] font-mono text-center font-bold">
                        <div className="bg-[#B8FF3D] text-[#111111] py-1 border border-[#111111]">
                          VUE / REACT
                        </div>
                        <div className="bg-[#FF4FD8] text-[#111111] py-1 border border-[#111111]">
                          NODE / GO
                        </div>
                        <div className="bg-[#FFD84D] text-[#111111] py-1 border border-[#111111]">
                          DOCKER
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#666666] dark:text-[#AAAAAF] pt-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="font-bold text-[#111111] dark:text-[#F4F4F6]">
                        ONLINE // 100% READY
                      </span>
                    </div>
                    <span>LOC: 11.5564° N</span>
                  </div>
                </>
              ) : (
                <div className="font-mono text-xs space-y-2 text-[#222222] dark:text-[#DCDCDF]">
                  <div className="flex items-center gap-2 text-[#315CFF] dark:text-[#B8FF3D] font-bold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>lorn-david@workstation:~$ info</span>
                  </div>
                  <div className="bg-white dark:bg-[#202024] p-3 border border-[#111111] dark:border-[#ECECEE] space-y-1 text-[11px]">
                    <div><span className="text-[#FF6B35]">name:</span> LORN David</div>
                    <div><span className="text-[#FF6B35]">discipline:</span> Full-Stack + UI/UX</div>
                    <div><span className="text-[#FF6B35]">stack:</span> Vue, React, Node, Go, Postgres</div>
                    <div><span className="text-[#FF6B35]">architecture:</span> Neo-Brutalism & Swiss</div>
                    <div><span className="text-[#FF6B35]">status:</span> Open for contracts Q2/Q3</div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Card Identity Footer */}
            <div className="p-4 bg-[#FFFFFF] dark:bg-[#18181C] border-t-2 border-[#111111] dark:border-[#ECECEE] flex items-center justify-between">
              <div>
                <div className="font-black font-mono text-sm tracking-tight text-[#111111] dark:text-[#F4F4F6]">
                  LORN DAVID
                </div>
                <div className="font-mono text-xs text-[#555555] dark:text-[#A0A0A5]">
                  Developer × Designer
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-[#315CFF] text-white font-mono text-xs font-bold border border-[#111111] shadow-[2px_2px_0px_#111111]">
                  2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
