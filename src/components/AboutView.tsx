'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';

export function AboutView() {
  const { profile } = portfolioData;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  // Active index is either the one currently hovered, or the selected one if not hovering
  const activeIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;

  return (
    <div className="max-w-[860px] mx-auto flex flex-col items-center">
      {/* Category Tag */}
      <Reveal>
        <p className="font-mono text-[0.65rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-4 flex items-center justify-center gap-3">
          <span className="inline-block w-6 h-px bg-[var(--accent)]" />
          About
          <span className="inline-block w-6 h-px bg-[var(--accent)]" />
        </p>
      </Reveal>

      {/* Main Heading */}
      <Reveal delay={100}>
        <h1 className="font-display text-[clamp(2.75rem,6vw,4.5rem)] font-black text-[var(--text)] tracking-tight text-center mb-8">
          Who I Am
        </h1>
      </Reveal>

      {/* Bio Paragraphs */}
      <Reveal delay={200}>
        <div className="max-w-[780px] mx-auto text-center space-y-4 text-[0.95rem] md:text-base leading-[1.85] text-[var(--dim)] mb-8">
          {profile.bioParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Reveal>

      {/* Location / Meta */}
      <Reveal delay={250}>
        <div className="font-mono text-xs text-center mb-14">
          <span className="uppercase tracking-[0.2em] text-[var(--dim)] mr-2">Location</span>
          <span className="text-[var(--text)] font-semibold">{profile.location || 'Somewhere'}</span>
        </div>
      </Reveal>

      {/* Interests Section */}
      <Reveal delay={300}>
        <div className="w-full flex flex-col items-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--text)] tracking-tight text-center mb-6">
            Interests
          </h2>

          {/* Interactive Interest Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 relative pb-16 min-h-[110px]">
            {profile.interests.map((interest, i) => {
              const isCurrent = activeIndex === i;

              return (
                <div key={interest.label} className="relative">
                  <button
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedIndex(i)}
                    aria-label={interest.label}
                    className={`font-mono text-xs md:text-sm tracking-wide px-5 py-2.5 rounded-sm border transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/[0.12] shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                        : 'border-[var(--border)] text-[var(--dim)] bg-[var(--s1)]/80 hover:border-[var(--border-hi)] hover:text-[var(--text)]'
                    }`}
                  >
                    {interest.label}
                  </button>

                  {/* Contextual description tooltip on hover */}
                  {isCurrent && (
                    <div className="absolute top-[calc(100%+10px)] left-0 z-20 whitespace-nowrap bg-[var(--s2)] border border-[var(--border-hi)] rounded-sm px-3.5 py-2 shadow-2xl flex items-center gap-2 animate-stack-up backdrop-blur-md">
                      <span className="w-0.5 h-3.5 bg-[var(--accent)] rounded-full inline-block" />
                      <span className="font-mono text-xs text-[var(--text)] tracking-wide">
                        {interest.desc}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
