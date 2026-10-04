import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sun, Moon, Menu, X, Sparkles, ArrowRight, Mail, MessageSquare, Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../hooks/useSound';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenAiScope: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenAiScope }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMuted, toggleSound, playClick, playToggle } = useSound();

  // Lock body scroll safely while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'WORK', href: '#work', number: '01', desc: 'Selected systems & web apps' },
    { label: 'ABOUT', href: '#about', number: '02', desc: 'Editorial board & philosophy' },
    { label: 'STACK', href: '#stack', number: '03', desc: 'Frontend, backend & databases' },
    { label: 'CURRENTLY', href: '#currently', number: '04', desc: 'Live build pipeline & research' },
    { label: 'EXPERIMENTS', href: '#experiments', number: '05', desc: 'Interactive visual & audio prototypes' },
    { label: 'CONTACT', href: '#contact', number: '06', desc: 'Direct inquiry & consultation' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    playClick();
    setMobileMenuOpen(false);
    // Timeout ensures body overflow: hidden is released before scrolling begins on mobile
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    playClick();
    setMobileMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 60);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#F5F3EE]/95 dark:bg-[#0C0C0E]/95 backdrop-blur-sm border-b-2 border-[#111111] dark:border-[#ECECEE] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Zone 1: Brand wordmark & mobile availability dot */}
          <button
            onClick={handleBrandClick}
            className="text-lg sm:text-2xl font-black tracking-tight text-[#111111] dark:text-[#F4F4F6] hover:text-[#315CFF] dark:hover:text-[#B8FF3D] transition-colors font-mono flex items-center gap-2.5 cursor-pointer text-left focus:outline-none"
            aria-label="LORN David - Back to top"
          >
            <span>{PORTFOLIO_DATA.creator.name}</span>
            <span
              className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse inline-block sm:hidden"
              title="Available for contracts"
            />
          </button>

          {/* Zone 2: Desktop Navigation Links */}
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

          {/* Zone 3: Actions (Availability status, AI Project Scoper, Sound Toggle, Theme Toggle, Mobile Menu) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Availability Status Badge (Tablet & Desktop) */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono font-bold bg-[#FFFFFF] dark:bg-[#15151A] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] text-[#111111] dark:text-[#F4F4F6]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>AVAILABLE</span>
            </div>

            {/* AI Project Scoper Button (Medium screens and up) */}
            <button
              onClick={() => {
                playClick();
                onOpenAiScope();
              }}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-[#FFD84D] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#111111] transition-all cursor-pointer"
              title="Generate custom project scope and brief with Gemini AI"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#111111]" />
              <span>AI SCOPE</span>
            </button>

            {/* Tactile Sound FX Toggle */}
            <button
              onClick={() => {
                toggleSound();
              }}
              aria-label={isMuted ? 'Unmute tactile sound effects' : 'Mute tactile sound effects'}
              title={isMuted ? 'Unmute tactile sound effects' : 'Mute tactile sound effects (clicks & hovers)'}
              className="p-2 sm:p-2.5 bg-white dark:bg-[#15151A] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#111111] dark:hover:shadow-[3px_3px_0px_#ECECEE] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center relative group"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-[#888888] dark:text-[#888892]" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#315CFF] dark:text-[#B8FF3D]" />
              )}
            </button>

            {/* Theme Toggle (Always visible) */}
            <button
              onClick={() => {
                playToggle();
                setDarkMode((prev) => !prev);
              }}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 sm:p-2.5 bg-white dark:bg-[#15151A] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#111111] dark:hover:shadow-[3px_3px_0px_#ECECEE] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
            >
              {darkMode ? <Sun className="w-4 h-4 text-[#FFD84D]" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Trigger Button */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(true);
              }}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 sm:p-2.5 bg-[#FFFFFF] dark:bg-[#15151A] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] hover:bg-[#FAF9F5] dark:hover:bg-[#202028] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Neo-Brutalist Mobile Navigation Overlay (Independent of Header Stacking Context) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#F5F3EE] dark:bg-[#0C0C0E] flex flex-col justify-between overflow-y-auto animate-fadeIn"
          style={{ overscrollBehavior: 'contain' }}
        >
          {/* Top Bar of Mobile Overlay */}
          <div className="sticky top-0 z-10 bg-[#F5F3EE]/95 dark:bg-[#0C0C0E]/95 backdrop-blur-md border-b-2 border-[#111111] dark:border-[#ECECEE] px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            <button
              onClick={handleBrandClick}
              className="text-lg sm:text-2xl font-black font-mono tracking-tight text-[#111111] dark:text-[#F4F4F6] flex items-center gap-2 cursor-pointer text-left"
            >
              <span>{PORTFOLIO_DATA.creator.name}</span>
            </button>

            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Sound Toggle inside overlay */}
              <button
                onClick={() => {
                  toggleSound();
                }}
                aria-label={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
                title={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
                className="p-2 sm:p-2.5 bg-white dark:bg-[#15151A] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-[#888888] dark:text-[#888892]" />
                ) : (
                  <Volume2 className="w-4 h-4 text-[#315CFF] dark:text-[#B8FF3D]" />
                )}
              </button>

              {/* Theme Toggle inside overlay */}
              <button
                onClick={() => {
                  playToggle();
                  setDarkMode((prev) => !prev);
                }}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 sm:p-2.5 bg-white dark:bg-[#15151A] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
              >
                {darkMode ? <Sun className="w-4 h-4 text-[#FFD84D]" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Close Button */}
              <button
                onClick={() => {
                  playClick();
                  setMobileMenuOpen(false);
                }}
                aria-label="Close navigation menu"
                className="p-2 sm:p-2.5 bg-[#FF6B35] text-white border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] hover:bg-[#E55A26] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 px-4 sm:px-6 py-6 max-w-lg mx-auto w-full flex flex-col justify-between">
            <div>
              {/* Status Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#111111]/20 dark:border-[#ECECEE]/20 text-xs font-mono">
                <span className="font-bold text-[#666666] dark:text-[#A8A8B2] tracking-wider">
                  NAVIGATION DIRECTORY
                </span>
                <div className="flex items-center gap-1.5 font-bold text-[#10B981] dark:text-[#4ADE80]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>ONLINE · 2026</span>
                </div>
              </div>

              {/* Nav Links Stack */}
              <div className="space-y-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="p-3.5 sm:p-4 bg-white dark:bg-[#15151A] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#ECECEE] hover:bg-[#315CFF] hover:text-white dark:hover:bg-[#B8FF3D] dark:hover:text-[#111111] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#888888] group-hover:text-inherit">
                        {link.number}
                      </span>
                      <div>
                        <div className="font-mono font-black text-lg sm:text-xl tracking-tight leading-none">
                          {link.label}
                        </div>
                        <div className="text-[11px] font-mono text-[#666666] dark:text-[#A8A8B2] group-hover:text-inherit/80 mt-0.5">
                          {link.desc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>

              {/* Mobile AI Brief Generator Action */}
              <button
                onClick={() => {
                  playClick();
                  setMobileMenuOpen(false);
                  setTimeout(() => onOpenAiScope(), 60);
                }}
                className="mt-4 w-full p-4 bg-[#FFD84D] text-[#111111] border-2 border-[#111111] shadow-[4px_4px_0px_#111111] hover:shadow-[5px_5px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] font-mono font-black text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#111111]" />
                <span>AI PROJECT SCOPE GENERATOR</span>
              </button>
            </div>

            {/* Bottom Meta & Direct Contacts */}
            <div className="pt-8 pb-4 mt-8 border-t-2 border-[#111111]/20 dark:border-[#ECECEE]/20 space-y-4">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold">
                <a
                  href={`mailto:${PORTFOLIO_DATA.creator.email}`}
                  onClick={() => playClick()}
                  className="p-2.5 bg-white dark:bg-[#15151A] text-[#111111] dark:text-[#ECECEE] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#315CFF] dark:text-[#B8FF3D]" />
                  <span>EMAIL ME</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.creator.telegram}
                  onClick={() => playClick()}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-white dark:bg-[#15151A] text-[#111111] dark:text-[#ECECEE] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE] flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>TELEGRAM</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#555555] dark:text-[#A8A8B2]">
                <span>{PORTFOLIO_DATA.creator.location}</span>
                <span>© {PORTFOLIO_DATA.creator.year} LORN DAVID</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
