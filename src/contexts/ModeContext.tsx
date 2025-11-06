"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export type Mode = 'home' | 'trading' | 'creator';

interface Theme {
  primary: string;
  secondary: string;
  gradient: string;
  glow: string;
}

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  theme: Theme;
}

const themes: Record<Mode, Theme> = {
  home: {
    primary: '#9BACD8', // Flower Blue
    secondary: '#F4F1EC', // Luster White
    gradient: 'linear-gradient(135deg, #9BACD8 0%, #F4F1EC 50%, #F98513 100%)',
    glow: 'rgba(155, 172, 216, 0.3)',
  },
  trading: {
    primary: '#F98513', // Orange
    secondary: '#F4F1EC', // Luster White
    gradient: 'linear-gradient(135deg, #F4F1EC 0%, #F98513 100%)',
    glow: 'rgba(249, 133, 19, 0.3)',
  },
  creator: {
    primary: '#9BACD8', // Flower Blue
    secondary: '#F4F1EC', // Luster White
    gradient: 'linear-gradient(135deg, #F4F1EC 0%, #9BACD8 100%)',
    glow: 'rgba(155, 172, 216, 0.3)',
  },
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('home');
  const pathname = usePathname();

  // 根据路径自动设置模式
  useEffect(() => {
    if (pathname.includes('/trading')) {
      setMode('trading');
    } else if (pathname.includes('/creator')) {
      setMode('creator');
    } else {
      setMode('home');
    }
  }, [pathname]);

  const theme = themes[mode];

  return (
    <ModeContext.Provider value={{ mode, setMode, theme }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}
