'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';

export function AboutView() {
  const { profile } = portfolioData;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[860px] mx-auto">
      {/* Category Tag */}
      <Reveal>
        <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-5 flex items-center gap-3.5">
          <span className="inline-block w-7 h-px bg-[var(--accent)]" />
          Identity
        </p>
      </Reveal>

      {/* Main Heading */}
      <Reveal delay={100}>
        <h1 className="font-display text-[clamp(2.6rem,5vw,3.8rem)] font-black text-[var(--text)] tracking-[-0.015em] mb-12">
          Who I Am
        </h1>
      </Reveal>

      <div className="flex flex-col gap-12">
        {/* Bio Section */}
        <Reveal delay={200}>
          <div className="border border-[var(--border)] rounded-md p-8 md:p-10 bg-[var(--s2)] flex flex-col gap-5 hover:border-[var(--border-hi)] transition-colors">
            <div className="flex flex-col gap-4 text-[0.95rem] md:text-base leading-[1.8] text-[var(--dim)]">
              {profile.bioParagraphs.map((para, i) => (
                <p key={i}>
                  {para}
                </p>
              ))}
            </div>

            <div className="pt-6 mt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--dim)]">
              <div>
                <span className="text-[var(--text)] uppercase tracking-wider font-semibold">Education:</span>{' '}
                <span>{profile.education}</span>
              </div>
              <div>
                <span className="text-[var(--text)] uppercase tracking-wider font-semibold">Location:</span>{' '}
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Interests Section */}
        <Reveal delay={300}>
          <div>
            <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-6 flex items-center gap-3.5">
              <span className="inline-block w-7 h-px bg-[var(--accent)]" />
              Interests & Hobbies
            </p>

            {/* Interactive Interest Badges (Left-Aligned) */}
            <div className="flex flex-wrap items-center justify-start gap-3 relative pb-16 min-h-[90px]">
              {profile.interests.map((interest, i) => {
                const isHovered = hoveredIndex === i;

                return (
                  <div key={interest.label} className="relative">
                    <button
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onFocus={() => setHoveredIndex(i)}
                      onBlur={() => setHoveredIndex(null)}
                      aria-label={interest.label}
                      className={`font-mono text-xs md:text-sm tracking-wide px-5 py-2.5 rounded-sm border transition-all duration-200 cursor-pointer ${
                        isHovered
                          ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/[0.12] shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                          : 'border-[var(--border)] text-[var(--dim)] bg-[var(--s1)] hover:border-[var(--border-hi)] hover:text-[var(--text)]'
                      }`}
                    >
                      {interest.label}
                    </button>

                    {/* Contextual description tooltip ONLY on hover */}
                    {isHovered && (
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
    </div>
  );
}
