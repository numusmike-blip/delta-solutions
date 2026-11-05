// Single source of truth for every phone number on the site. Change a number here and it
// updates everywhere: buttons, footer, floating WhatsApp and schema.
//
// Only server code imports this file (RootShell). It hands each language just the numbers
// that language shows, so the Mexico number never reaches English pages, not even in JS.
import "server-only";
import type { Language } from "@/lib/i18n";
import type { ContactNumber } from "@/lib/contact-links";

export type ContactKey = "call" | "us" | "mx";

export const CONTACT: Record<ContactKey, ContactNumber> = {
  // Main number, for phone calls only (also the header's "Call us" button).
  call: { display: "+1 (323) 210-7977", e164: "+13232107977", wa: "13232107977", flag: "us", label: "mainCall", call: true, sms: false, whatsapp: false },
  // Calls, text and WhatsApp (also the floating WhatsApp button).
  us: { display: "+1 (619) 214-5096", e164: "+16192145096", wa: "16192145096", flag: "us", label: "textWhatsapp", call: true, sms: true, whatsapp: true },
  mx: { display: "+52 664 188 4757", e164: "+526641884757", wa: "526641884757", flag: "mx", label: "mexico", call: true, sms: true, whatsapp: true },
};

// Which numbers each language shows, in order. The first one is the main number.
// English pages must never list the Mexico number.
export const NUMBERS_BY_LANG: Record<Language, ContactKey[]> = {
  en: ["call", "us"],
  es: ["call", "us", "mx"],
};

// The floating WhatsApp button uses the US number on both languages.
export const FLOATING_WHATSAPP: ContactKey = "us";

export function numbersFor(lang: Language): ContactNumber[] {
  return NUMBERS_BY_LANG[lang].map((key) => CONTACT[key]);
}

// schema.org contactPoint entries for the given language.
export function contactPointsFor(lang: Language) {
  return NUMBERS_BY_LANG[lang].map((key) => ({
    "@type": "ContactPoint",
    telephone: CONTACT[key].e164,
    contactType: CONTACT[key].call ? "customer service" : "customer support",
    availableLanguage: key === "mx" ? "Spanish" : lang === "es" ? ["English", "Spanish"] : "English",
  }));
}
