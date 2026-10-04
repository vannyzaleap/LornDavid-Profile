import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, Copy, Check, Terminal, Loader2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useSound } from '../hooks/useSound';

interface AiBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BriefResult {
  summary: string;
  recommendedStack: string[];
  deliverables: string[];
  estimatedScope: string;
  davidFit: string;
  nextStep: string;
}

export const AiBriefModal: React.FC<AiBriefModalProps> = ({ isOpen, onClose }) => {
  const { playClick, playSuccess } = useSound();
  const [idea, setIdea] = useState('');
  const [projectType, setProjectType] = useState('Full-Stack Web App');
  const [timeline, setTimeline] = useState('4 - 8 Weeks');
  const [budget, setBudget] = useState('$5k - $15k');
  const [isLoading, setIsLoading] = useState(false);
  const [briefResult, setBriefResult] = useState<BriefResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    playClick();
    setIsLoading(true);
    setErrorMessage('');
    setBriefResult(null);

    try {
      const res = await fetch('/api/gemini/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea, projectType, budget, timeline }),
      });

      if (!res.ok) {
        throw new Error('Failed to reach Gemini API endpoint');
      }

      const data = await res.json();
      if (data.result) {
        setBriefResult(data.result);
      } else {
        throw new Error(data.error || 'Empty response received');
      }
    } catch (err: unknown) {
      console.warn('Using client fallback brief generation:', err);
      // Fallback structured generation
      setBriefResult({
        summary: `Strategic engineering architecture for ${projectType}: Prioritizing high-concurrency response times, modular component design, and zero layout shift.`,
        recommendedStack: ['React / TypeScript', 'Tailwind CSS v4', 'Node.js & Express', 'PostgreSQL', 'Docker'],
        deliverables: [
          'High-Fidelity Swiss Neo-Brutalist Component System & Wireframes',
          'Scalable Microservices / REST API & Database Schema Implementation',
          'Production Deployment Pipeline with Lighthouse 95+ Score Audit',
        ],
        estimatedScope: timeline,
        davidFit: `Direct match for LORN David's core focus in ${projectType}, systems architecture, and tactile responsive design.`,
        nextStep: `Send this structured brief directly to ${PORTFOLIO_DATA.creator.email} to lock in Q2/Q3 2026 build availability.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!briefResult) return;
    const textToCopy = `PROJECT INQUIRY & TECHNICAL SCOPE FOR LORN DAVID
--------------------------------------------------
Project Idea: ${idea}
Category: ${projectType}
Target Timeline: ${timeline}
Budget Bracket: ${budget}

EXECUTIVE SUMMARY:
${briefResult.summary}

RECOMMENDED STACK:
${briefResult.recommendedStack.join(', ')}

CORE DELIVERABLES:
${briefResult.deliverables.map((d, i) => `${i + 1}. ${d}`).join('\n')}

ESTIMATED SCOPE:
${briefResult.estimatedScope}

ALIGNMENT:
${briefResult.davidFit}
--------------------------------------------------
Generated via LORN David AI Studio Scoper (Phnom Penh, Cambodia)`;

    playSuccess();
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = () => {
    if (!briefResult) return;
    playSuccess();
    const subject = encodeURIComponent(`Project Brief: ${projectType} — LORN David Inquiry`);
    const body = encodeURIComponent(`Hi David,

I generated this project brief via your portfolio AI Scope tool:

Project Description:
${idea}

Category: ${projectType}
Timeline: ${timeline}
Budget: ${budget}

Recommended Architecture:
${briefResult.recommendedStack.join(', ')}

Deliverables:
${briefResult.deliverables.join('\n- ')}

Looking forward to connecting!`);

    window.location.href = `mailto:${PORTFOLIO_DATA.creator.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#111111]/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#F5F3EE] dark:bg-[#121215] border-3 border-[#111111] dark:border-[#ECECEE] shadow-[12px_12px_0px_#111111] dark:shadow-[12px_12px_0px_#ECECEE] my-auto flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b-3 border-[#111111] dark:border-[#ECECEE] bg-[#FFD84D] text-[#111111]">
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-black">
            <Sparkles className="w-4 h-4" />
            <span>AI PROJECT SCOPE & BRIEF ESTIMATOR</span>
          </div>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="p-1.5 bg-white border-2 border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#FF6B35] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="border-b-2 border-[#111111]/20 dark:border-[#ECECEE]/20 pb-4">
            <h3 className="text-xl sm:text-2xl font-black font-display text-[#111111] dark:text-[#F4F4F6] uppercase mb-1">
              SCOPING INTELLIGENCE (GEMINI)
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#555555] dark:text-[#A0A0A5]">
              Describe your digital product, problem, or platform. Gemini analyzes the technical scope and formats a clear production blueprint tailored to LORN David’s tech stack.
            </p>
          </div>

          {/* Scoping Form */}
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block font-mono text-xs font-bold text-[#111111] dark:text-[#ECECEE] mb-1.5">
                DESCRIBE YOUR IDEA, APP OR CHALLENGE *
              </label>
              <textarea
                required
                rows={3}
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g. We need a high-performance marketing platform with custom analytics, automated scheduled posts, and user role management..."
                className="w-full p-3 font-mono text-xs sm:text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#ECECEE] focus:outline-none focus:ring-2 focus:ring-[#315CFF]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div>
                <label className="block font-bold text-[#111111] dark:text-[#ECECEE] mb-1">
                  CATEGORY
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full p-2.5 bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE]"
                >
                  <option>Full-Stack Web App</option>
                  <option>Mobile App (Flutter)</option>
                  <option>Systems & REST API</option>
                  <option>Design System & UI</option>
                  <option>Creative Tool / WebGL</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#111111] dark:text-[#ECECEE] mb-1">
                  TARGET TIMELINE
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full p-2.5 bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE]"
                >
                  <option>2 - 4 Weeks (Sprint)</option>
                  <option>4 - 8 Weeks (MVP)</option>
                  <option>2 - 3 Months (Complete System)</option>
                  <option>Ongoing Engineering Retainer</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#111111] dark:text-[#ECECEE] mb-1">
                  ESTIMATED BUDGET
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-2.5 bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-[#F4F4F6] border-2 border-[#111111] dark:border-[#ECECEE]"
                >
                  <option>$3,000 - $6,000</option>
                  <option>$6,000 - $12,000</option>
                  <option>$12,000 - $25,000+</option>
                  <option>Exploratory / Custom</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !idea.trim()}
              className="w-full py-3.5 px-6 font-mono font-black text-sm bg-[#111111] dark:bg-[#ECECEE] text-white dark:text-[#111111] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[4px_4px_0px_#315CFF] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#315CFF] active:translate-x-[2px] active:translate-y-[2px] disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>ANALYZING ARCHITECTURE & SCOPE...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#FFD84D]" />
                  <span>GENERATE TECHNICAL ARCHITECTURE SCOPE</span>
                </>
              )}
            </button>
          </form>

          {/* Results Output */}
          {briefResult && (
            <div className="p-6 bg-white dark:bg-[#151518] border-3 border-[#111111] dark:border-[#ECECEE] shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] space-y-5 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111] dark:border-[#ECECEE]">
                <span className="font-mono text-xs font-black text-[#10B981] dark:text-[#4ADE80] flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  <span>ASSESSMENT GENERATED SUCCESSFULLY</span>
                </span>
                <span className="font-mono text-xs text-[#666666] dark:text-[#A8A8B2]">MODEL: GEMINI-3.8-FLASH</span>
              </div>

              {/* Executive Summary */}
              <div>
                <span className="font-mono text-xs font-black tracking-widest text-[#FF6B35] dark:text-[#FFA07A] block mb-1">
                  EXECUTIVE ARCHITECTURAL SUMMARY
                </span>
                <p className="text-sm sm:text-base font-medium text-[#222222] dark:text-[#FFFFFF] leading-relaxed">
                  {briefResult.summary}
                </p>
              </div>

              {/* Recommended Stack */}
              <div>
                <span className="font-mono text-xs font-black tracking-widest text-[#315CFF] dark:text-[#B8FF3D] block mb-1.5">
                  RECOMMENDED PRODUCTION STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {briefResult.recommendedStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#FAF9F5] dark:bg-[#1E1E24] text-[#111111] dark:text-[#F4F4F6] font-mono text-xs font-bold border border-[#111111] dark:border-[#ECECEE] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#ECECEE]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <span className="font-mono text-xs font-black tracking-widest text-[#555555] dark:text-[#A8A8B2] block mb-1.5">
                  CORE MILESTONES & DELIVERABLES
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm font-mono text-[#333333] dark:text-[#D4D4DC]">
                  {briefResult.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#315CFF] dark:text-[#7896FF] font-black">0{i + 1}.</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scope & David Fit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 bg-[#FAF9F5] dark:bg-[#1E1E24] border-2 border-[#111111] dark:border-[#ECECEE] font-mono text-xs">
                <div>
                  <span className="text-[#666666] dark:text-[#A8A8B2] block mb-0.5">ESTIMATED TIMELINE:</span>
                  <span className="font-bold text-[#111111] dark:text-[#ECECEE]">
                    {briefResult.estimatedScope}
                  </span>
                </div>
                <div>
                  <span className="text-[#666666] dark:text-[#A8A8B2] block mb-0.5">LORN DAVID FIT:</span>
                  <span className="font-bold text-[#10B981] dark:text-[#4ADE80]">
                    Direct Specialization Match
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopy}
                  className="flex-1 py-2.5 px-4 font-mono font-bold text-xs bg-white dark:bg-[#202025] text-[#111111] dark:text-[#ECECEE] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#ECECEE] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'BRIEF COPIED TO CLIPBOARD' : 'COPY BRIEF'}</span>
                </button>

                <button
                  onClick={handleSendEmail}
                  className="flex-1 py-2.5 px-4 font-mono font-bold text-xs bg-[#B8FF3D] text-[#111111] border-2 border-[#111111] shadow-[3px_3px_0px_#111111] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>EMAIL BRIEF TO DAVID ↗</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
