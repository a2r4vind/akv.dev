'use client';

import React, { useEffect, useState, useRef } from 'react';
import { portfolioData } from '@/data/portfolio';

export function Socials() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [codingMenuOpen, setCodingMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 150;
      setHidden(isAtBottom);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setCodingMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const leetcodeUrl = portfolioData.profile.leetcode || 'https://leetcode.com/u/arvind_codes/';
  const hackerrankUrl = portfolioData.profile.hackerrank || 'https://www.hackerrank.com/profile/arvindverma24004';

  return (
    <div
      className={`hidden md:flex fixed bottom-0 left-6 md:left-10 z-50 flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-20 md:after:h-24 after:bg-[var(--border-hi)] transition-all duration-500 ${
        mounted && !hidden ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* GitHub */}
      <div>
        <a
          href={portfolioData.profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="block text-[var(--dim)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all duration-300"
          title="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
      </div>

      {/* LinkedIn */}
      <div>
        <a
          href={portfolioData.profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className="block text-[var(--dim)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all duration-300"
          title="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>

      {/* Coding Profiles Toggle (LeetCode & HackerRank) */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setCodingMenuOpen(!codingMenuOpen)}
          aria-label="Coding Profiles (LeetCode & HackerRank)"
          aria-expanded={codingMenuOpen}
          className={`block p-0.5 rounded-sm transition-all duration-300 cursor-pointer ${
            codingMenuOpen
              ? 'text-[var(--accent)] drop-shadow-[0_0_8px_var(--accent)] scale-110'
              : 'text-[var(--dim)] hover:text-[var(--accent)] hover:-translate-y-1'
          }`}
          title="Coding Profiles"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </button>

        {/* Flyout Menu for LeetCode & HackerRank */}
        {codingMenuOpen && (
          <div className="absolute left-[calc(100%+14px)] top-1/2 -translate-y-1/2 z-50 bg-[var(--s2)]/95 backdrop-blur-xl border border-[var(--border-hi)] rounded-md py-2 px-3 shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex items-center gap-3 animate-stack-up whitespace-nowrap">
            {/* Arrow indicator pointing to coding icon */}
            <div className="absolute -left-[6px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[var(--s2)] border-l border-b border-[var(--border-hi)] rotate-45" />

            {/* LeetCode Option */}
            <a
              href={leetcodeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode Profile (arvind_codes)"
              className="flex items-center gap-2 px-2 py-1 rounded text-[var(--dim)] hover:text-[#FFA116] hover:bg-[#FFA116]/10 transition-all duration-200 group"
              title="LeetCode Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:scale-110">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
              <span className="font-mono text-xs tracking-wider uppercase font-medium">LeetCode</span>
            </a>

            <span className="w-px h-4 bg-[var(--border)]" />

            {/* HackerRank Option */}
            <a
              href={hackerrankUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="HackerRank Profile (arvindverma24004)"
              className="flex items-center gap-2 px-2 py-1 rounded text-[var(--dim)] hover:text-[#00EA64] hover:bg-[#00EA64]/10 transition-all duration-200 group"
              title="HackerRank Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:scale-110">
                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-8.25 4.875h-2.1v-3.75h-3.3v3.75h-2.1V7.125h2.1v3.75h3.3V7.125h2.1v9.75z" />
              </svg>
              <span className="font-mono text-xs tracking-wider uppercase font-medium">HackerRank</span>
            </a>
          </div>
        )}
      </div>

      {/* Email */}
      <div>
        <a
          href={`mailto:${portfolioData.profile.email}`}
          aria-label="Send Email"
          className="block text-[var(--dim)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all duration-300"
          title="Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
