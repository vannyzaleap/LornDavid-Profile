import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Radio, Headphones, BookOpen, Clock, Activity } from 'lucide-react';

export const Currently: React.FC = () => {
  return (
    <section
      id="currently"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b-3 border-[#111111] dark:border-[#ECECEE]">
        <div>
          <span className="font-mono text-sm sm:text-base font-bold text-[#B8FF3D] tracking-wider block mb-1">
            04 — CURRENTLY
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#111111] dark:text-[#F4F4F6] uppercase">
            LIVE DISPATCH.
          </h2>
        </div>
        <div className="flex items-center gap-2 bg-[#FFFFFF] dark:bg-[#1A1A1E] text-[#111111] dark:text-[#ECECEE] px-3 py-1.5 border-2 border-[#111111] dark:border-[#ECECEE] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#ECECEE] font-mono text-xs font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>STATUS: ● {PORTFOLIO_DATA.currently.status}</span>
        </div>
      </div>

      {/* Large Brutalist Dispatch Board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Currently Building Card (col-span-7) */}
        <div className="lg:col-span-7 bg-[#FFFFFF] dark:bg-[#151518] border-3 border-[#111111] dark:border-[#ECECEE] p-6 sm:p-10 shadow-[8px_8px_0px_#111111] dark:shadow-[8px_8px_0px_#ECECEE] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#111111] dark:border-[#ECECEE] font-mono text-xs font-bold text-[#111111] dark:text-[#ECECEE]">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#FF6B35]" />
                <span>BUILD_PIPELINE.LOG</span>
              </div>
              <span className="text-[#315CFF] dark:text-[#B8FF3D]">Q2 / 2026</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black font-display text-[#111111] dark:text-[#FFFFFF] uppercase mb-4 leading-tight">
              CURRENTLY BUILDING
            </h3>
            <p className="text-lg sm:text-xl text-[#222226] dark:text-[#E4E4EC] font-medium leading-relaxed mb-8">
              {PORTFOLIO_DATA.currently.headline}
            </p>

            <div className="space-y-4">
              <span className="font-mono text-xs font-black tracking-widest text-[#555555] dark:text-[#A8A8B2] block">
                ACTIVE RESEARCH & LEARNING TOPICS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PORTFOLIO_DATA.currently.learningTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#FAF9F5] dark:bg-[#1E1E24] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] text-xs font-mono font-bold text-[#111111] dark:text-[#ECECEE] flex items-center gap-2"
                  >
                    <span className="text-[#FF6B35]">0{idx + 1}</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t-2 border-[#111111]/20 dark:border-[#ECECEE]/30 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <span className="text-[#555555] dark:text-[#C5C5CE]">
              UPTIME: 100% SHIPPED TO PRODUCTION
            </span>
            <span className="font-bold text-[#315CFF] dark:text-[#B8FF3D]">
              CONTINUOUS DEPLOYMENT
            </span>
          </div>
        </div>

        {/* Live Atmosphere & Focus Sidebar (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Now Playing / Focus Track */}
          <div className="bg-[#B8FF3D] text-[#111111] border-3 border-[#111111] dark:border-[#ECECEE] p-6 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#111111] font-mono text-xs font-black tracking-widest">
                <span className="flex items-center gap-2">
                  <Headphones className="w-4 h-4" />
                  AUDIO FOCUS
                </span>
                <span>SPOTIFY / STREAM</span>
              </div>
              <div className="text-xl font-black font-mono mb-2">
                {PORTFOLIO_DATA.currently.nowPlaying}
              </div>
              <p className="text-xs font-mono text-[#203600] leading-relaxed">
                Repetitive algorithmic rhythms and ambient synth soundscapes fueling multi-hour coding flows.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 font-mono text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#111111] animate-ping" />
              <span>HEADPHONES ON // FLOW STATE</span>
            </div>
          </div>

          {/* Reading / Literature */}
          <div className="bg-white dark:bg-[#151518] border-3 border-[#111111] dark:border-[#ECECEE] p-6 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#111111] dark:border-[#ECECEE] font-mono text-xs font-black tracking-widest text-[#111111] dark:text-[#ECECEE]">
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#FF4FD8]" />
                  CURRENT READING
                </span>
                <span className="text-[#666666] dark:text-[#A8A8B2]">ON THE DESK</span>
              </div>
              <div className="text-base sm:text-lg font-bold font-mono text-[#111111] dark:text-[#FFFFFF] mb-2">
                {PORTFOLIO_DATA.currently.reading}
              </div>
              <p className="text-xs text-[#444444] dark:text-[#D0D0D8] leading-relaxed">
                Mastering consensus algorithms, replication logs, transactions, and the trade-offs of modern data-intensive architectures.
              </p>
            </div>

            <div className="pt-4 font-mono text-xs text-[#315CFF] dark:text-[#B8FF3D] font-bold">
              KNOWLEDGE ARCHIVE // CONTINUOUS UPGRADE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
