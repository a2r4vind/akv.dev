'use client';

import React, { useState } from 'react';
import { useTheme, ColorPalette } from '@/context/ThemeContext';

export function PaletteSwitcher() {
  const { palette, setPalette } = useTheme();
  const [open, setOpen] = useState(false);

  const palettes: { id: ColorPalette; name: string; hex: string }[] = [
    { id: 'cyan', name: 'Electric Cyan', hex: '#38bdf8' },
    { id: 'emerald', name: 'Cyber Emerald', hex: '#10b981' },
    { id: 'amber', name: 'Amber Gold', hex: '#f59e0b' },
    { id: 'violet', name: 'Neon Violet', hex: '#a855f7' },
    { id: 'blue', name: 'Classic Blue', hex: '#3b82f6' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {open && (
        <div className="bg-[var(--s1)]/95 backdrop-blur-xl border border-[var(--border)] rounded-md p-3 shadow-2xl flex flex-col gap-1.5 animate-stack-up mb-1">
          <p className="font-mono text-[0.62rem] uppercase tracking-wider text-[var(--dim)] mb-1 px-1">
            Choose Accent Palette:
          </p>
          <div className="flex flex-col gap-1">
            {palettes.map((p) => (
              <button
                key={p.id}
                onClick={() => setPalette(p.id)}
                className={`font-mono text-[0.7rem] uppercase tracking-wider px-3 py-2 rounded-sm border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                  palette === p.id
                    ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--text)] font-semibold shadow-sm'
                    : 'bg-[var(--s2)] text-[var(--dim)] border-[var(--border)] hover:border-[var(--border-hi)] hover:text-[var(--text)]'
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full shadow-sm flex-shrink-0"
                  style={{ backgroundColor: p.hex }}
                />
                <span>{p.name}</span>
                {palette === p.id && (
                  <span className="ml-auto text-xs text-[var(--accent)] font-bold">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Pill Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Color Palette Selector"
        className="font-mono text-[0.68rem] tracking-[0.12em] uppercase px-3.5 py-2 rounded-full border border-[var(--border)] bg-[var(--s1)]/90 backdrop-blur-md text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-lg flex items-center gap-2 cursor-pointer hover-glow-breathe"
      >
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm animate-pulse"
          style={{
            backgroundColor:
              palettes.find((p) => p.id === palette)?.hex || '#38bdf8',
          }}
        />
        <span>Palette: {palettes.find((p) => p.id === palette)?.name}</span>
      </button>
    </div>
  );
}
