"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ModeProvider } from "@/contexts/ModeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ModeProvider>
          {children}
        </ModeProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
