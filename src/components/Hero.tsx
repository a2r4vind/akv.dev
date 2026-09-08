'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = portfolioData.profile.heroHeadline;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullName.length) {
        setDisplayText(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullName]);

  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/research', label: 'Research' },
    { href: '/blog', label: 'Blog' }
  ];

  return (
    <section id="hero" className="px-[5%]">
      <div className="max-w-[1200px] mx-auto pt-[20vh] pb-16 flex flex-col items-center text-center justify-center">
        <Reveal>
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-[var(--dim)] mb-3">
            Hey, I&apos;m
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-black leading-[0.95] tracking-[-0.02em] text-[var(--text)] mb-3">
            <span>{displayText}</span>
            <span className="inline-block w-1.5 h-[0.78em] bg-[var(--accent)] ml-1.5 align-middle cursor-blink" />
          </h1>
        </Reveal>

        <div
          className={`transition-opacity duration-1000 ease-in-out ${
            isTypingComplete ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Reveal delay={200}>
            <p className="font-mono text-xs md:text-sm text-[var(--dim)] tracking-[0.1em] mb-4">
              an AI / ML Engineer
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-20 mb-8">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[0.68rem] md:text-[0.72rem] tracking-[0.14em] uppercase text-[var(--dim)] px-4 py-2 md:px-5 md:py-2.5 rounded-sm border border-[var(--border)] transition-all duration-300 bg-[var(--s2)] hover-glow-breathe hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
