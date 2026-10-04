import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenAiScope: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenAiScope }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'STACK', href: '#stack' },
    { label: 'CURRENTLY', href: '#currently' },
    { label: 'EXPERIMENTS', href: '#experiments' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F5F3EE]/95 dark:bg-[#0C0C0E]/95 backdrop-blur-sm border-b-2 border-[#111111] dark:border-[#ECECEE] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={handleBrandClick}
          className="text-xl sm:text-2xl font-black tracking-tight text-[#111111] dark:text-[#F4F4F6] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors font-mono flex items-center gap-2 cursor-pointer text-left"
        >
          <span>{PORTFOLIO_DATA.creator.name}</span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wider font-mono">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#111111] dark:text-[#E2E2E6] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] relative py-1 transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#315CFF] dark:bg-[#B8FF3D] transition-all duration-150 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Availability status, AI Project Scoper, Theme Toggle, Mobile Menu) */}
        <div className="flex items-center gap-3">
          {/* Availability Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 text-[11px] font-mono font-bold bg-[#FFFFFF] dark:bg-[#1A1A1E] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] text-[#111111] dark:text-[#F4F4F6]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>AVAILABLE</span>
          </div>

          {/* AI Project Scoper Button */}
          <button
            onClick={onOpenAiScope}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-[#FFD84D] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#111111] transition-all cursor-pointer"
            title="Generate custom project scope and brief with Gemini AI"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#111111]" />
            <span>AI SCOPE</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#111111] dark:hover:shadow-[3px_3px_0px_#ECECEE] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#FFD84D]" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 bg-[#FFFFFF] dark:bg-[#1A1A1E] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#F5F3EE] dark:bg-[#0C0C0E] border-t-2 border-[#111111] dark:border-[#ECECEE] z-50 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#111111] dark:border-[#ECECEE]">
              <span className="font-mono text-xs font-bold text-[#666666] dark:text-[#A0A0A5]">NAVIGATION</span>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#111111] dark:text-[#ECECEE]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>AVAILABLE 2026</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="p-3 text-xl font-black font-mono tracking-tight text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] bg-white dark:bg-[#1A1A1E] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#ECECEE] hover:bg-[#315CFF] hover:text-white dark:hover:bg-[#B8FF3D] dark:hover:text-[#111111] transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#888888] font-mono">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiScope();
              }}
              className="mt-2 w-full p-3 font-mono font-bold text-sm bg-[#FFD84D] text-[#111111] border-2 border-[#111111] shadow-[4px_4px_0px_#111111] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI PROJECT SCOPE GENERATOR</span>
            </button>
          </div>

          <div className="pt-6 border-t-2 border-[#111111] dark:border-[#ECECEE] text-xs font-mono text-[#555555] dark:text-[#AAAAAF] flex justify-between items-center">
            <span>{PORTFOLIO_DATA.creator.location}</span>
            <span>© {PORTFOLIO_DATA.creator.year}</span>
          </div>
        </div>
      )}
    </header>
  );
};
