// Central, editable business config. Update these values as real details are confirmed.
export const site = {
  name: "Delta Solutions",
  founder: "Miguel Flores",
  tagline: "Your Business, Our Investment",
  manifesto:
    "Delta Solutions isn't an agency. It's a teammate. Most marketing companies bill you whether your phone rings or not, and we don't think that's fair, to you or to us. We build your website, manage your Google presence, track every call, and put real skin in the game, because we're partners, not vendors.",
  signatureLine:
    "Built and run by Miguel Flores. No account managers, no outsourced call centers. You work directly with the person invested in your results.",
  city: "Tijuana",
  region: "Baja California",
  country: "Mexico",

  // NAP — the MX number is the schema/GBP-facing primary phone. Keep this identical
  // everywhere it appears, and match it to Google Business Profile once set up.
  phone: "+526641884757",
  phoneDisplay: "+52 664 188 4757",

  // Two contact numbers, two channels: MX opens WhatsApp, US opens SMS.
  phones: {
    mx: {
      number: "+526641884757",
      display: "+52 664 188 4757",
      flag: "mx",
      channel: "whatsapp" as const,
    },
    us: {
      number: "+16197775910",
      display: "+1 (619) 777-5910",
      flag: "us",
      channel: "sms" as const,
    },
  },

  email: "deltasolutionsworld@gmail.com",
  emailCc: "numusmike@gmail.com",

  address: {
    street: "Address line pending",
    city: "Tijuana",
    region: "Baja California",
    postalCode: "22000",
    country: "MX",
  },
  // No social accounts live yet. Add them here once they exist, and they'll show up in the footer automatically.
  social: {
    facebook: "",
    instagram: "",
  },
  linkedin: "https://www.linkedin.com/in/miguel-angel-flores-martinez-1926382bb/",
} as const;

// Founding member spot counter — edit this single number as spots fill up. Not wired to a database on purpose.
export const foundingMembers = {
  totalSpots: 6,
  spotsRemaining: 6,
} as const;

// Bilingual marketing copy for client-rendered pages. `site.tagline` / `manifesto` /
// `signatureLine` above stay English-only since they also feed server-rendered
// metadata and JSON-LD.
export const siteCopy = {
  tagline: {
    en: "Your Business, Our Investment",
    es: "Tu Negocio, Nuestra Inversión",
  },
  manifesto: {
    en: "Delta Solutions isn't an agency. It's a teammate. Most marketing companies bill you whether your phone rings or not, and we don't think that's fair, to you or to us. We build your website, manage your Google presence, track every call, and put real skin in the game, because we're partners, not vendors.",
    es: "Delta Solutions no es una agencia. Es un compañero de equipo. La mayoría de las empresas de marketing te cobran suene o no tu teléfono, y no creemos que eso sea justo, ni para ti ni para nosotros. Construimos tu sitio web, administramos tu presencia en Google, rastreamos cada llamada, y ponemos algo real en juego, porque somos socios, no proveedores.",
  },
  signatureLine: {
    en: "Built and run by Miguel Flores. No account managers, no outsourced call centers. You work directly with the person invested in your results.",
    es: "Construido y dirigido por Miguel Flores. Sin gerentes de cuenta, sin call centers subcontratados. Trabajas directamente con la persona invertida en tus resultados.",
  },
} as const;

// Pre-filled message for the primary "Message Us" CTA (opens WhatsApp on the MX number).
export const whatsappMessage = {
  en: "Hi, I'm interested in learning more about Delta Solutions",
  es: "Hola, me interesa saber más sobre Delta Solutions",
} as const;

// Pre-filled message for the US number's SMS link.
export const smsMessage = {
  en: "Hi, I'm interested in learning more about Delta Solutions",
  es: "Hola, me interesa saber más sobre Delta Solutions",
} as const;

export function whatsappHref(lang: "en" | "es") {
  return `https://wa.me/${site.phones.mx.number.replace("+", "")}?text=${encodeURIComponent(
    whatsappMessage[lang]
  )}`;
}

export function smsHref(lang: "en" | "es") {
  return `sms:${site.phones.us.number}?&body=${encodeURIComponent(smsMessage[lang])}`;
}
