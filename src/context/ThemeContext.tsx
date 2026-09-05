'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';
export type ColorPalette = 'cyan' | 'emerald' | 'amber' | 'violet' | 'blue';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  toggle: () => void;
  palette: ColorPalette;
  setPalette: (palette: ColorPalette) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [palette, setPaletteState] = useState<ColorPalette>('amber');

  useEffect(() => {
    const savedTheme = (window.localStorage.getItem('theme') as Theme) || 'dark';
    const savedPalette = (window.localStorage.getItem('palette') as ColorPalette) || 'amber';

    setTheme(savedTheme);
    setPaletteState(savedPalette);

    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-palette', savedPalette);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    window.localStorage.setItem('theme', next);
  };

  const setPalette = (newPalette: ColorPalette) => {
    setPaletteState(newPalette);
    document.documentElement.setAttribute('data-palette', newPalette);
    window.localStorage.setItem('palette', newPalette);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggle: toggleTheme, palette, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
