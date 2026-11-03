// Central, editable business config. Phone numbers live in src/config/contact.ts.
export const site = {
  name: "Delta Solutions",
  // No social accounts live yet. Add them here once they exist, and they'll show up in the footer automatically.
  social: {
    facebook: "",
    instagram: "",
  },
} as const;

// Bilingual marketing copy shared across pages.
export const siteCopy = {
  tagline: {
    en: "Your Business, Our Investment",
    es: "Tu Negocio, Nuestra Inversión",
  },
  manifesto: {
    en: "You're great at what you do. The online side (your website, Google, reviews, tracking) shouldn't slow you down. We handle the technology, explain it in plain words, and work like part of your team, so you can get back to running your business.",
    es: "Eres muy bueno en lo que haces. La parte digital (tu sitio web, Google, reseñas, métricas) no debería frenarte. Nosotros nos encargamos de la tecnología, te la explicamos con palabras sencillas y trabajamos como parte de tu equipo, para que tú te dediques a tu negocio.",
  },
  signatureLine: {
    en: "A small, dedicated team. No call centers, no runaround. Just people who know your business.",
    es: "Un equipo pequeño y dedicado. Sin call centers, sin vueltas. Solo personas que conocen tu negocio.",
  },
  noTechNeeded: {
    title: { en: "No tech knowledge needed", es: "No necesitas saber de tecnología" },
    body: {
      en: "You don't have to learn anything new. We set it up, we run it, and we explain what's happening in plain words.",
      es: "No tienes que aprender nada nuevo. Nosotros lo configuramos, lo manejamos y te explicamos lo que pasa con palabras sencillas.",
    },
  },
} as const;
