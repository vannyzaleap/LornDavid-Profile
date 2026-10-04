import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    { text: 'DESIGN', accent: false },
    { text: 'CODE', accent: true },
    { text: 'BUILD', accent: false },
    { text: 'CREATE', accent: false },
    { text: 'SHIP', accent: true },
    { text: 'REPEAT', accent: false },
    { text: 'NEO-BRUTALISM', accent: false },
    { text: 'SWISS EDITORIAL', accent: true },
    { text: 'FULL-STACK', accent: false },
    { text: 'SCALABLE SYSTEMS', accent: true },
  ];

  return (
    <div
      className="w-full bg-[#111111] dark:bg-[#000000] text-[#FFFFFF] py-4 sm:py-5 border-y-3 border-[#111111] dark:border-[#ECECEE] overflow-hidden select-none"
      role="region"
      aria-label="Creative discipline ticker"
    >
      <div className="flex w-max animate-marquee">
        {/* Render twice for continuous loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 font-mono font-black text-sm sm:text-lg md:text-xl tracking-wider uppercase whitespace-nowrap"
          >
            <span
              className={
                item.accent
                  ? 'text-[#B8FF3D] font-extrabold'
                  : 'text-[#FFFFFF] opacity-90'
              }
            >
              {item.text}
            </span>
            <span className="text-[#FF6B35] font-black text-base sm:text-xl">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
