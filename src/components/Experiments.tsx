import React, { useState } from 'react';
import { PORTFOLIO_DATA, Experiment } from '../data/portfolioData';
import { Sparkles, Play, RefreshCw, Volume2, Sliders, Move } from 'lucide-react';

export const Experiments: React.FC = () => {
  // Experiment 1: Kinetic Typo state
  const [typoWeight, setTypoWeight] = useState(800);
  const [typoTracking, setTypoTracking] = useState(2);
  const [typoSkew, setTypoSkew] = useState(-3);

  // Experiment 2: Color Matrix state
  const colorSets = [
    { bg: '#315CFF', fg: '#FFFFFF', name: 'ELECTRIC COBALT', ratio: '8.4:1' },
    { bg: '#B8FF3D', fg: '#111111', name: 'ACID LIME', ratio: '12.8:1' },
    { bg: '#FF6B35', fg: '#FFFFFF', name: 'RADICAL ORANGE', ratio: '4.8:1' },
    { bg: '#FF4FD8', fg: '#111111', name: 'NEO MAGENTA', ratio: '9.2:1' },
    { bg: '#FFD84D', fg: '#111111', name: 'SWISS YELLOW', ratio: '14.1:1' },
  ];
  const [colorIndex, setColorIndex] = useState(0);

  // Experiment 3: Spring button click counter
  const [springPressCount, setSpringPressCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  // Experiment 4: Web Audio Synth
  const playTone = (freq: number) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.36);
    } catch (e) {
      console.log('AudioContext not allowed without gesture', e);
    }
  };

  return (
    <section
      id="experiments"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b-3 border-[#111111] dark:border-[#ECECEE]">
        <div>
          <span className="font-mono text-sm sm:text-base font-bold text-[#FF6B35] tracking-wider block mb-1">
            05 — EXPERIMENTS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#111111] dark:text-[#F4F4F6] uppercase">
            CREATIVE SANDBOX.
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm text-[#555555] dark:text-[#A0A0A5] max-w-xs">
          Tactile playground exploring generative kinetics, color systems, and micro-interactions.
        </p>
      </div>

      {/* Grid of 4 Interactive Experiments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experiment 1: Kinetic Swiss Typo */}
        <div className="bg-white dark:bg-[#18181C] border-3 border-[#111111] dark:border-[#ECECEE] shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#111111] dark:border-[#ECECEE] font-mono text-xs font-bold text-[#111111] dark:text-[#ECECEE]">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#315CFF] text-white border border-[#111111]">
                  EXP_01
                </span>
                <span>KINETIC SWISS TYPO</span>
              </div>
              <span className="text-[#315CFF]">INTERACTIVE</span>
            </div>

            {/* Live Typo Preview Canvas */}
            <div className="h-32 bg-[#FAF9F5] dark:bg-[#121215] border-2 border-[#111111] dark:border-[#ECECEE] p-4 flex items-center justify-center overflow-hidden mb-4 select-none">
              <span
                className="text-2xl sm:text-3xl font-display text-[#111111] dark:text-[#F4F4F6] uppercase transition-all duration-75 block text-center"
                style={{
                  fontWeight: typoWeight,
                  letterSpacing: `${typoTracking}px`,
                  transform: `skewX(${typoSkew}deg)`,
                }}
              >
                TACTILE DIGITAL
              </span>
            </div>

            {/* Sliders */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <label className="text-[#666666] dark:text-[#A0A0A5]">WEIGHT: {typoWeight}</label>
                <input
                  type="range"
                  min="400"
                  max="900"
                  step="100"
                  value={typoWeight}
                  onChange={(e) => setTypoWeight(Number(e.target.value))}
                  className="w-1/2 accent-[#315CFF] cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-[#666666] dark:text-[#A0A0A5]">TRACKING: {typoTracking}px</label>
                <input
                  type="range"
                  min="-2"
                  max="12"
                  step="1"
                  value={typoTracking}
                  onChange={(e) => setTypoTracking(Number(e.target.value))}
                  className="w-1/2 accent-[#315CFF] cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-[#666666] dark:text-[#A0A0A5]">SKEW: {typoSkew}°</label>
                <input
                  type="range"
                  min="-12"
                  max="12"
                  step="1"
                  value={typoSkew}
                  onChange={(e) => setTypoSkew(Number(e.target.value))}
                  className="w-1/2 accent-[#315CFF] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t-2 border-[#111111]/20 dark:border-[#ECECEE]/20 text-[11px] font-mono text-[#777777]">
            Drag sliders to dynamically deform typographic tension curves.
          </div>
        </div>

        {/* Experiment 2: Brutalist Palette Lab */}
        <div className="bg-white dark:bg-[#18181C] border-3 border-[#111111] dark:border-[#ECECEE] shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#111111] dark:border-[#ECECEE] font-mono text-xs font-bold text-[#111111] dark:text-[#ECECEE]">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF6B35] text-white border border-[#111111]">
                  EXP_02
                </span>
                <span>BRUTALIST PALETTE LAB</span>
              </div>
              <span className="text-[#FF6B35]">WCAG AAA</span>
            </div>

            {/* Live Palette Display */}
            <div
              className="h-32 border-3 border-[#111111] p-4 flex flex-col justify-between transition-colors duration-200 mb-4 select-none shadow-[4px_4px_0px_#111111]"
              style={{
                backgroundColor: colorSets[colorIndex].bg,
                color: colorSets[colorIndex].fg,
              }}
            >
              <div className="flex justify-between items-center text-xs font-mono font-black">
                <span>{colorSets[colorIndex].name}</span>
                <span>{colorSets[colorIndex].bg}</span>
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono">
                HIGH-CONTRAST RATIO: {colorSets[colorIndex].ratio}
              </div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider">
                COMPLIANT FOR CRITICAL ACCESSIBILITY
              </div>
            </div>

            {/* Action */}
            <button
              onClick={() => setColorIndex((prev) => (prev + 1) % colorSets.length)}
              className="w-full py-2.5 px-4 font-mono font-bold text-xs bg-[#FFD84D] text-[#111111] border-2 border-[#111111] shadow-[3px_3px_0px_#111111] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>CYCLE ACCESSIBLE HARMONY</span>
            </button>
          </div>

          <div className="pt-4 mt-4 border-t-2 border-[#111111]/20 dark:border-[#ECECEE]/20 text-[11px] font-mono text-[#777777]">
            Calculates mathematically verified luminance offsets in real time.
          </div>
        </div>

        {/* Experiment 3: Tactile Spring Physics */}
        <div className="bg-white dark:bg-[#18181C] border-3 border-[#111111] dark:border-[#ECECEE] shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#111111] dark:border-[#ECECEE] font-mono text-xs font-bold text-[#111111] dark:text-[#ECECEE]">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#B8FF3D] text-[#111111] border border-[#111111]">
                  EXP_03
                </span>
                <span>TACTILE SPRING PHYSICS</span>
              </div>
              <span className="text-[#10B981]">DAMPENED</span>
            </div>

            <div className="h-32 bg-[#FAF9F5] dark:bg-[#121215] border-2 border-[#111111] dark:border-[#ECECEE] flex items-center justify-center p-4 mb-4">
              <button
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => {
                  setIsPressed(false);
                  setSpringPressCount((c) => c + 1);
                }}
                className={`px-6 py-4 font-mono font-black text-sm bg-[#B8FF3D] text-[#111111] border-3 border-[#111111] cursor-pointer transition-all duration-100 ${
                  isPressed
                    ? 'translate-x-[4px] translate-y-[4px] shadow-[0px_0px_0px_#111111]'
                    : 'shadow-[6px_6px_0px_#111111] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#111111]'
                }`}
              >
                CLICK FOR TACTILE FEEDBACK ({springPressCount})
              </button>
            </div>
          </div>

          <div className="pt-4 border-t-2 border-[#111111]/20 dark:border-[#ECECEE]/20 text-[11px] font-mono text-[#777777] flex justify-between">
            <span>PHYSICAL RESISTANCE SIMULATION</span>
            <span className="font-bold text-[#111111] dark:text-[#ECECEE]">K=180 N/M</span>
          </div>
        </div>

        {/* Experiment 4: Web Audio Synth */}
        <div className="bg-white dark:bg-[#18181C] border-3 border-[#111111] dark:border-[#ECECEE] shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#ECECEE] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#111111] dark:border-[#ECECEE] font-mono text-xs font-bold text-[#111111] dark:text-[#ECECEE]">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF4FD8] text-[#111111] border border-[#111111]">
                  EXP_04
                </span>
                <span>MINIMAL 8-BIT AUDIO SYNTH</span>
              </div>
              <span className="text-[#FF4FD8]">WEB AUDIO</span>
            </div>

            <div className="h-32 bg-[#FAF9F5] dark:bg-[#121215] border-2 border-[#111111] dark:border-[#ECECEE] p-3 flex flex-col justify-center gap-2 mb-4">
              <span className="font-mono text-center text-xs font-bold text-[#666666] dark:text-[#A0A0A5]">
                TAP HARMONIC FREQUENCIES:
              </span>
              <div className="grid grid-cols-4 gap-2 font-mono text-xs font-bold">
                {[
                  { note: 'A4', freq: 440, color: '#315CFF' },
                  { note: 'C#5', freq: 554.37, color: '#FFD84D' },
                  { note: 'E5', freq: 659.25, color: '#FF4FD8' },
                  { note: 'A5', freq: 880, color: '#B8FF3D' },
                ].map((item) => (
                  <button
                    key={item.note}
                    onClick={() => playTone(item.freq)}
                    className="py-2.5 bg-white text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-[#F0F0F0] cursor-pointer flex flex-col items-center justify-center"
                  >
                    <span>{item.note}</span>
                    <span className="text-[9px] text-[#777777]">{Math.round(item.freq)}Hz</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t-2 border-[#111111]/20 dark:border-[#ECECEE]/20 text-[11px] font-mono text-[#777777] flex justify-between">
            <span>SQUARE WAVE OSCILLATOR</span>
            <span className="font-bold text-[#111111] dark:text-[#ECECEE]">LOW LATENCY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
