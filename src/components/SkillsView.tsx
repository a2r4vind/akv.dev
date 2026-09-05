'use client';

import React, { useState } from 'react';
import { portfolioData, SkillTab } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';

export function SkillsView() {
  const { skillTabs, certifications } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>('all');

  const getToneClass = (tone: string) => {
    switch (tone) {
      case 'accent':
        return 'chip-accent';
      case 'red':
        return 'chip-red';
      case 'green':
        return 'chip-green';
      case 'amber':
        return 'chip-amber';
      default:
        return '';
    }
  };

  const filteredTabs: SkillTab[] =
    activeTab === 'all'
      ? skillTabs
      : skillTabs.filter((t) => t.id === activeTab);

  return (
    <div className="max-w-[1000px] mx-auto">
      <Reveal>
        <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-5 flex items-center gap-3.5">
          <span className="inline-block w-7 h-px bg-[var(--accent)]" />
          Capabilities
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <h1 className="font-display text-[clamp(2.6rem,5vw,3.8rem)] font-black text-[var(--text)] tracking-[-0.015em]">
            Skills
          </h1>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`font-mono text-[0.68rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-sm border transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-sm'
                  : 'bg-[var(--s2)] text-[var(--dim)] border-[var(--border)] hover:text-[var(--text)] hover:border-[var(--border-hi)]'
              }`}
            >
              All
            </button>
            {skillTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-mono text-[0.68rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-sm border transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-sm'
                    : 'bg-[var(--s2)] text-[var(--dim)] border-[var(--border)] hover:text-[var(--text)] hover:border-[var(--border-hi)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Skill Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredTabs.map((tab, idx) => (
          <Reveal key={tab.id} delay={idx * 60}>
            <div className="border border-[var(--border)] rounded-md p-6 sm:p-8 bg-[var(--s2)] hover:border-[var(--border-hi)] transition-colors h-full flex flex-col justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-4 bg-[var(--accent)] rounded-full inline-block" />
                  {tab.label}
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {tab.skills.map((s) => (
                    <span
                      key={s.name}
                      className={`chip ${getToneClass(s.tone)}`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Certifications Section */}
      <Reveal delay={300}>
        <div className="border-t border-[var(--border)] pt-12">
          <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-6 flex items-center gap-3.5">
            <span className="inline-block w-7 h-px bg-[var(--accent)]" />
            Certifications & Credentials
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--border)] rounded-md p-5 bg-[var(--s1)] hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="font-mono text-[0.62rem] uppercase tracking-wider text-[var(--accent)] block mb-1">
                    {cert.issuer}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {cert.name}
                  </h3>
                </div>
                <div className="mt-4 flex items-center gap-1.5 font-mono text-[0.65rem] text-[var(--dim)] group-hover:text-[var(--text)]">
                  <span>Verify Credential</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
