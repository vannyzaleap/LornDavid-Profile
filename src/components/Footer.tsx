import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [phnomPenhTime, setPhnomPenhTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Phnom_Penh (UTC+7)
      const formatted = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Phnom_Penh',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setPhnomPenhTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FFFFFF] dark:bg-[#0B0B0D] border-t-3 border-[#111111] dark:border-[#ECECEE] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b-2 border-[#111111]/20 dark:border-[#ECECEE]/30 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-3xl sm:text-4xl font-black font-display tracking-tight text-[#111111] dark:text-[#FFFFFF] block">
              {PORTFOLIO_DATA.creator.name}
            </span>
            <p className="font-mono text-xs sm:text-sm text-[#4B4B52] dark:text-[#C5C5CE] max-w-sm">
              {PORTFOLIO_DATA.creator.role} — Building digital experiences, products and scalable systems.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FAF9F5] dark:bg-[#151518] border border-[#111111] dark:border-[#ECECEE] font-mono text-xs font-bold text-[#111111] dark:text-[#ECECEE]">
              <Clock className="w-3.5 h-3.5 text-[#315CFF] dark:text-[#B8FF3D]" />
              <span>PHNOM PENH: {phnomPenhTime || '11:49:00'} (UTC+7)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs font-bold">
            <span className="text-[#666666] dark:text-[#A8A8B2] block mb-2">INDEX</span>
            <div><a href="#work" className="text-[#111111] dark:text-[#ECECEE] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors">01. WORK</a></div>
            <div><a href="#about" className="text-[#111111] dark:text-[#ECECEE] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors">02. ABOUT</a></div>
            <div><a href="#stack" className="text-[#111111] dark:text-[#ECECEE] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors">03. STACK</a></div>
            <div><a href="#currently" className="text-[#111111] dark:text-[#ECECEE] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors">04. CURRENTLY</a></div>
            <div><a href="#experiments" className="text-[#111111] dark:text-[#ECECEE] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors">05. EXPERIMENTS</a></div>
            <div><a href="#contact" className="text-[#111111] dark:text-[#ECECEE] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors">06. CONTACT</a></div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-2 font-mono text-xs font-bold">
            <span className="text-[#666666] dark:text-[#A8A8B2] block mb-2">NETWORK</span>
            <div>
              <a
                href={PORTFOLIO_DATA.creator.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#111111] dark:text-[#ECECEE] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors"
              >
                GITHUB ↗
              </a>
            </div>
            <div>
              <a
                href={PORTFOLIO_DATA.creator.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[#111111] dark:text-[#ECECEE] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors"
              >
                LINKEDIN ↗
              </a>
            </div>
            <div>
              <a
                href={PORTFOLIO_DATA.creator.telegram}
                target="_blank"
                rel="noreferrer"
                className="text-[#111111] dark:text-[#ECECEE] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors"
              >
                TELEGRAM ↗
              </a>
            </div>
            <div>
              <a
                href={`mailto:${PORTFOLIO_DATA.creator.email}`}
                className="text-[#111111] dark:text-[#ECECEE] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors"
              >
                {PORTFOLIO_DATA.creator.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold text-[#4B4B52] dark:text-[#C5C5CE]">
          <div>
            <span>© {PORTFOLIO_DATA.creator.year} {PORTFOLIO_DATA.creator.name}. </span>
            <span className="text-[#111111] dark:text-[#ECECEE]">BUILT WITH CODE + CURIOSITY.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 bg-[#FAF9F5] dark:bg-[#151518] text-[#111111] dark:text-[#ECECEE] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] hover:translate-y-[-2px] transition-transform cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
