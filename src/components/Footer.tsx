'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-[var(--border)] py-8 px-[5%] flex justify-center items-center mt-auto">
      <p className="font-mono text-[0.65rem] tracking-wider uppercase text-[var(--dim)] text-center">
        © {currentYear} {portfolioData.profile.name}. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
