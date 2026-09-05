'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { portfolioData } from '@/data/portfolio';

export function Nav() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/research', label: 'Research' },
    { href: '/blog', label: 'Blog' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-[5%] transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Link
          href="/"
          className="font-mono text-sm tracking-[0.14em] text-[var(--accent)] font-semibold hover:opacity-90 transition-opacity"
        >
          AKV<span className="text-[var(--dim)]">.dev</span>
        </Link>

        <div className="flex gap-1 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hidden md:inline-block font-mono text-[0.68rem] tracking-[0.1em] uppercase px-3.5 py-2 rounded-sm transition-colors ${
                  isActive
                    ? 'text-[var(--accent)] bg-[var(--accent)]/[0.12] font-semibold'
                    : 'text-[var(--dim)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/[0.07]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block font-mono text-[0.68rem] tracking-[0.1em] uppercase text-[var(--accent)] border border-[var(--accent)] px-3.5 py-1.5 rounded-sm hover:bg-[var(--accent)]/[0.07] transition-colors ml-2 mr-2"
          >
            Resume
          </a>

          {mounted ? (
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--dim)] border border-[var(--border)] rounded-sm px-3 py-1.5 hover:border-[var(--border-hi)] hover:text-[var(--accent)] transition-colors cursor-pointer"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          ) : (
            <button
              aria-label="Toggle theme"
              className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--dim)] border border-[var(--border)] rounded-sm px-3 py-1.5 transition-colors opacity-0 pointer-events-none"
            >
              Theme
            </button>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-2 p-1.5 text-[var(--dim)] hover:text-[var(--accent)] focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[var(--bg)]/98 backdrop-blur-2xl pt-24 px-8 pb-12 flex flex-col justify-between animate-stack-up">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-mono text-lg uppercase tracking-widest py-2 border-b border-[var(--border)]/40 ${
                  pathname === link.href
                    ? 'text-[var(--accent)] font-bold pl-2 border-[var(--accent)]'
                    : 'text-[var(--dim)] hover:text-[var(--accent)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 font-mono text-sm tracking-[0.14em] uppercase text-center text-[var(--accent)] border border-[var(--accent)] py-3 rounded-sm"
            >
              Resume PDF
            </a>
          </div>

          <div className="pt-6 text-center border-t border-[var(--border)]">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--dim)]">
              © {new Date().getFullYear()} {portfolioData.profile.name}. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
