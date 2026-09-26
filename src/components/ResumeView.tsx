'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';
import { 
  FileText, 
  Sparkles,
  Briefcase,
  GraduationCap,
  Terminal,
  ExternalLink
} from 'lucide-react';

export function ResumeView() {
  const [activeTab, setActiveTab] = useState<'preview' | 'summary'>('preview');

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header Section */}
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] flex items-center gap-3.5">
            <span className="inline-block w-7 h-px bg-[var(--accent)]" />
            Curriculum Vitae
          </p>

          {/* Quick status badge */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
            <span className="font-mono text-[0.68rem] tracking-wider text-[var(--dim)] uppercase">
              Available for Opportunities
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mb-8">
          <h1 className="font-display text-[clamp(2.5rem,5vw,3.8rem)] font-black text-[var(--text)] tracking-[-0.015em] leading-tight">
            Resume
          </h1>
          <p className="font-mono text-xs md:text-sm text-[var(--dim)] mt-2 max-w-2xl">
            Academic background, research at ISRO SAC, industrial engineering, and featured technical projects.
          </p>
        </div>
      </Reveal>

      {/* Mode Switcher Tabs */}
      <Reveal delay={150}>
        <div className="flex items-center gap-2 border-b border-[var(--border)] mb-6 pb-2">
          <button
            onClick={() => setActiveTab('preview')}
            className={`font-mono text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'preview'
                ? 'text-[var(--accent)] bg-[var(--accent)]/[0.12] font-semibold border-b-2 border-[var(--accent)]'
                : 'text-[var(--dim)] hover:text-[var(--text)]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            PDF Preview
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={`font-mono text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-sm transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'summary'
                ? 'text-[var(--accent)] bg-[var(--accent)]/[0.12] font-semibold border-b-2 border-[var(--accent)]'
                : 'text-[var(--dim)] hover:text-[var(--text)]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Quick Highlights
          </button>
        </div>
      </Reveal>

      {/* Main Content Area */}
      {activeTab === 'preview' ? (
        <Reveal delay={200}>
          <div className="relative w-full rounded-md border border-[var(--border)] bg-[var(--s1)] shadow-2xl overflow-hidden">
            {/* Embedded PDF Viewer Frame */}
            <div className="w-full h-[78vh] min-h-[680px] relative bg-[#1c1c1e]">
              <iframe
                id="resume-pdf-frame"
                src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
                className="w-full h-full border-none rounded-md"
                title="Resume PDF"
              />
            </div>

            {/* Bottom Bar with Yellow Direct Fullscreen */}
            <div className="p-4 sm:p-5 bg-[var(--s2)] border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <FileText className="w-5 h-5 text-[var(--accent)] shrink-0" />
                <div>
                  <p className="font-mono text-xs text-[var(--text)] font-medium">
                    Arvind Kumar Verma — Resume.pdf
                  </p>
                  <p className="font-mono text-[0.68rem] text-[var(--dim)]">
                    Standard 1-Page Format • Optimized for ATS & Recruiter Screening
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none text-center inline-flex items-center justify-center gap-2 font-mono text-[0.72rem] tracking-wider uppercase px-4 py-2 bg-[var(--accent)] text-[#000] font-semibold rounded-sm hover:opacity-90 transition-all shadow-[0_0_12px_rgba(245,158,11,0.25)]"
                >
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Direct Fullscreen</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ) : (
        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experience Highlights */}
            <div className="border border-[var(--border)] rounded-md p-6 bg-[var(--s2)] flex flex-col gap-4">
              <div className="flex items-center gap-2.5 border-b border-[var(--border)] pb-3">
                <Briefcase className="w-4 h-4 text-[var(--accent)]" />
                <h2 className="font-display text-lg font-bold text-[var(--text)] uppercase tracking-wide">
                  Experience Highlights
                </h2>
              </div>
              <div className="space-y-4">
                {portfolioData.experiences.map((exp, i) => (
                  <div key={i} className="border-l-2 border-[var(--accent)] pl-3.5 py-1">
                    <p className="font-display text-base font-bold text-[var(--text)]">{exp.role}</p>
                    <p className="font-mono text-xs text-[var(--accent)]">{exp.org} • {exp.badge}</p>
                    <p className="text-xs text-[var(--dim)] mt-1.5 line-clamp-2">{exp.points[0]}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/experience"
                className="font-mono text-xs text-[var(--accent)] hover:underline inline-flex items-center gap-1 mt-auto pt-2"
              >
                View full experience page →
              </Link>
            </div>

            {/* Education & Academic Honors */}
            <div className="border border-[var(--border)] rounded-md p-6 bg-[var(--s2)] flex flex-col gap-4">
              <div className="flex items-center gap-2.5 border-b border-[var(--border)] pb-3">
                <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
                <h2 className="font-display text-lg font-bold text-[var(--text)] uppercase tracking-wide">
                  Education & Honors
                </h2>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-[var(--text)]">
                  New L.J. Institute of Engineering & Technology, Ahmedabad
                </p>
                <p className="font-mono text-xs text-[var(--accent)] mt-1 font-semibold">
                  Bachelor of Engineering (AI/ML) — 2022 – 2026
                </p>
                <div className="flex flex-wrap gap-2 my-3">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 font-semibold">
                    CPI: 9.54
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 font-semibold">
                    CGPA: 9.52
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--s1)] text-[var(--dim)] border border-[var(--border)]">
                    Languages: English, Hindi
                  </span>
                </div>
                <p className="text-xs text-[var(--dim)] leading-relaxed mt-2">
                  Comprehensive academic curriculum with hands-on coursework in Artificial Intelligence, Machine Learning, Deep Neural Networks, Computer Vision, and Software Engineering.
                </p>
              </div>
            </div>

            {/* Key Technical Competencies */}
            <div className="border border-[var(--border)] rounded-md p-6 bg-[var(--s2)] md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2.5 border-b border-[var(--border)] pb-3">
                <Terminal className="w-4 h-4 text-[var(--accent)]" />
                <h2 className="font-display text-lg font-bold text-[var(--text)] uppercase tracking-wide">
                  Key Technical Competencies
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {portfolioData.skillTabs.map((tab) => (
                  <div key={tab.id} className="flex flex-col gap-2.5">
                    <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider font-bold border-b border-[var(--border)]/50 pb-1">
                      {tab.label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {tab.skills.map((s) => (
                        <span key={s.name} className="chip text-[0.66rem] px-2.5 py-1">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      )}
    </div>
  );
}
