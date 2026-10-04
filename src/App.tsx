import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Stack } from './components/Stack';
import { Currently } from './components/Currently';
import { Experiments } from './components/Experiments';
import { Stats } from './components/Stats';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { AiBriefModal } from './components/AiBriefModal';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lorn_david_theme') || localStorage.getItem('david_qt_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAiScopeOpen, setIsAiScopeOpen] = useState(false);

  useEffect(() => {
    // Ensure body scroll is never left locked from previous sessions or modals
    document.body.style.overflow = '';
    document.documentElement.style.overflowY = 'auto';
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (darkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      root.style.colorScheme = 'dark';
      localStorage.setItem('lorn_david_theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.style.colorScheme = 'light';
      localStorage.setItem('lorn_david_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F5F3EE] dark:bg-[#0E0E10] text-[#111111] dark:text-[#F4F4F6] selection:bg-[#FFD84D] selection:text-[#111111] transition-colors duration-200 flex flex-col font-sans">
      {/* Scroll depth progress bar */}
      <ScrollProgress />

      {/* Top Bar Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenAiScope={() => setIsAiScopeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenAiScope={() => setIsAiScopeOpen(true)} />

        {/* Endless Marquee Ticker */}
        <Marquee />

        {/* 01 — ABOUT */}
        <About />

        {/* 02 — SELECTED WORK */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 03 — STACK */}
        <Stack />

        {/* 04 — CURRENTLY */}
        <Currently />

        {/* 05 — EXPERIMENTS */}
        <Experiments />

        {/* Brutalist Numerical Metrics */}
        <Stats />

        {/* 06 — JOURNEY / TIMELINE */}
        <Journey />

        {/* 07 — CONTACT */}
        <Contact />
      </main>

      {/* Memorable Minimal Footer */}
      <Footer />

      {/* Deep Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PORTFOLIO_DATA.projects}
      />

      {/* Gemini AI Project Scope & Brief Modal */}
      <AiBriefModal
        isOpen={isAiScopeOpen}
        onClose={() => setIsAiScopeOpen(false)}
      />
    </div>
  );
}
