"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Language } from "./i18n";
import type { ContactNumber } from "./contact-links";

export type { Language } from "./i18n";

type SiteContextValue = {
  lang: Language;
  // Numbers shown on this language's pages, main number first. Sent by the server.
  numbers: ContactNumber[];
  // Number used by the floating WhatsApp button.
  floating: ContactNumber;
};

// The language comes from the URL (set by the (en) or (es) root layout), never from
// the browser's language. English first, always.
const SiteContext = createContext<SiteContextValue | null>(null);

export function LanguageProvider({ children, ...value }: SiteContextValue & { children: ReactNode }) {
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

export function useLanguage() {
  return { lang: useSite().lang };
}

export function useContactNumbers() {
  const { numbers, floating } = useSite();
  return { numbers, main: numbers[0], floating };
}

// Small helper for picking a bilingual field: pick(lang, { en: "...", es: "..." })
export function pick<T>(lang: Language, value: { en: T; es: T }): T {
  return value[lang];
}
