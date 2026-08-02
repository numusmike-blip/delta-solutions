"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "es";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "delta-solutions-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") {
      setLangState(stored);
      return;
    }
    const browserLang = window.navigator.language?.toLowerCase().startsWith("es")
      ? "es"
      : "en";
    setLangState(browserLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next: Language) {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  function toggle() {
    setLang(lang === "en" ? "es" : "en");
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

// Small helper for picking a bilingual field: pick(lang, { en: "...", es: "..." })
export function pick<T>(lang: Language, value: { en: T; es: T }): T {
  return value[lang];
}
