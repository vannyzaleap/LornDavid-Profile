import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Send, Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useSound } from '../hooks/useSound';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { playClick, playSuccess } = useSound();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Full-Stack Project',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.creator.email);
    playSuccess();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playSuccess();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.category} from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
Category: ${formData.category}

Message:
${formData.message}`);

    window.location.href = `mailto:${PORTFOLIO_DATA.creator.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-3 border-[#111111] dark:border-[#ECECEE] scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 border-b-3 border-[#111111] dark:border-[#ECECEE]">
        <div>
          <span className="font-mono text-sm sm:text-base font-bold text-[#FF6B35] tracking-wider block mb-1">
            06 — CONTACT
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#111111] dark:text-[#F4F4F6] uppercase">
            LET&apos;S CONNECT.
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm text-[#4B4B52] dark:text-[#C5C5CE] max-w-xs">
          Open for select Q2/Q3 2026 client commissions, digital products, and architectural advisory.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Massive Editorial Callout */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h3 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display text-[#111111] dark:text-[#F4F4F6] uppercase leading-[0.88] select-none tracking-tight">
              <span className="block hover:text-[#315CFF] transition-colors">HAVE AN</span>
              <span className="block text-[#FF6B35] hover:text-[#111111] dark:hover:text-white transition-colors">IDEA?</span>
              <span className="block hover:text-[#315CFF] transition-colors">LET&apos;S</span>
              <span className="block hover:text-[#315CFF] transition-colors">BUILD</span>
              <span className="block text-[#315CFF] dark:text-[#B8FF3D]">IT.</span>
            </h3>
          </div>

          <p className="text-lg sm:text-xl text-[#333333] dark:text-[#E2E2E8] font-medium max-w-md leading-relaxed">
            Whether you need a ground-up platform, a modern Neo-Brutalist design system, or a high-throughput backend architecture, let’s make it happen.
          </p>

          {/* Quick Email Direct Copy Box */}
          <div className="p-5 bg-white dark:bg-[#151518] border-3 border-[#111111] dark:border-[#ECECEE] shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] space-y-3">
            <span className="font-mono text-xs font-black tracking-widest text-[#666666] dark:text-[#A8A8B2]">
              DIRECT CONTACT EMAIL
            </span>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono font-bold text-sm sm:text-base text-[#111111] dark:text-[#FFFFFF] break-all">
                {PORTFOLIO_DATA.creator.email}
              </span>
              <button
                onClick={copyEmailToClipboard}
                className="px-3 py-1.5 font-mono text-xs font-bold bg-[#FFD84D] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'COPIED!' : 'COPY EMAIL'}</span>
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs font-bold">
            <a
              href={PORTFOLIO_DATA.creator.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white dark:bg-[#151518] text-[#111111] dark:text-[#ECECEE] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#ECECEE] hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center justify-between"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.creator.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white dark:bg-[#151518] text-[#111111] dark:text-[#ECECEE] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#ECECEE] hover:bg-[#315CFF] hover:text-white transition-colors flex items-center justify-between"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.creator.telegram}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white dark:bg-[#151518] text-[#111111] dark:text-[#ECECEE] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#ECECEE] hover:bg-[#B8FF3D] hover:text-black transition-colors flex items-center justify-between col-span-2 sm:col-span-1"
            >
              <span>TELEGRAM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-6 bg-white dark:bg-[#151518] border-3 border-[#111111] dark:border-[#ECECEE] p-6 sm:p-10 shadow-[8px_8px_0px_#111111] dark:shadow-[8px_8px_0px_#ECECEE]">
          <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#111111] dark:border-[#ECECEE] font-mono text-xs font-bold text-[#111111] dark:text-[#ECECEE]">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#315CFF] dark:text-[#B8FF3D]" />
              <span>START A CONVERSATION</span>
            </span>
            <span className="text-[#10B981] dark:text-[#4ADE80]">TYPICALLY REPLIES &lt; 24H</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-mono">
            <div>
              <label className="block text-xs font-bold text-[#111111] dark:text-[#ECECEE] mb-1">
                YOUR NAME *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full p-3 text-xs sm:text-sm bg-[#FAF9F5] dark:bg-[#1E1E24] text-[#111111] dark:text-[#FFFFFF] border-2 border-[#111111] dark:border-[#ECECEE] focus:outline-none focus:ring-2 focus:ring-[#315CFF]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] dark:text-[#ECECEE] mb-1">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full p-3 text-xs sm:text-sm bg-[#FAF9F5] dark:bg-[#1E1E24] text-[#111111] dark:text-[#FFFFFF] border-2 border-[#111111] dark:border-[#ECECEE] focus:outline-none focus:ring-2 focus:ring-[#315CFF]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] dark:text-[#ECECEE] mb-1">
                PROJECT CLASSIFICATION
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-3 text-xs sm:text-sm bg-[#FAF9F5] dark:bg-[#1E1E24] text-[#111111] dark:text-[#FFFFFF] border-2 border-[#111111] dark:border-[#ECECEE]"
              >
                <option>Full-Stack Web Application</option>
                <option>Mobile App (Flutter / React Native)</option>
                <option>Design System & Neo-Brutalist UI</option>
                <option>Backend Architecture & API Infrastructure</option>
                <option>Consulting & Technical Advisory</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] dark:text-[#ECECEE] mb-1">
                MESSAGE / PROJECT BRIEF *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your timeline, core requirements, and current stage of the product..."
                className="w-full p-3 text-xs sm:text-sm bg-[#FAF9F5] dark:bg-[#1E1E24] text-[#111111] dark:text-[#FFFFFF] border-2 border-[#111111] dark:border-[#ECECEE] focus:outline-none focus:ring-2 focus:ring-[#315CFF]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 font-mono font-black text-sm bg-[#111111] dark:bg-[#ECECEE] text-white dark:text-[#111111] border-2 border-[#111111] dark:border-[#ECECEE] shadow-[5px_5px_0px_#B8FF3D] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#B8FF3D] active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>SEND INQUIRY VIA EMAIL</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-[-2px]" />
            </button>

            {submitted && (
              <div className="p-3 bg-[#B8FF3D] text-[#111111] border-2 border-[#111111] text-xs font-mono font-bold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Email client opened! You can also reach out via Telegram directly.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
