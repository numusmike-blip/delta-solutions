// Link builders for call / text / WhatsApp. Holds no phone data on purpose: client
// components import this, and the numbers themselves arrive from the server per language
// (see RootShell + useContactNumbers), so English pages never ship the Mexico number.
import type { Language } from "./i18n";

export type ContactNumber = {
  display: string;
  e164: string;
  wa: string;
  flag: "us" | "mx";
  // Set to false if this number is not on WhatsApp; its WhatsApp button disappears.
  whatsapp: boolean;
};

// Pre-filled text for WhatsApp and SMS, in the page's language.
// TODO(human): write the first message a customer sends you, in your own voice (EN + ES).
export const PREFILLED_MESSAGE: Record<Language, string> = {
  en: "Hi! I'd like to learn how Delta Solutions can help my business.",
  es: "¡Hola! Me gustaría saber cómo Delta Solutions puede ayudar a mi negocio.",
};

export function telHref(n: ContactNumber) {
  return `tel:${n.e164}`;
}

// "?&body=" is the form that pre-fills the message on both iOS and Android.
export function smsHref(n: ContactNumber, lang: Language) {
  return `sms:${n.e164}?&body=${encodeURIComponent(PREFILLED_MESSAGE[lang])}`;
}

export function waHref(n: ContactNumber, lang: Language) {
  return `https://wa.me/${n.wa}?text=${encodeURIComponent(PREFILLED_MESSAGE[lang])}`;
}
