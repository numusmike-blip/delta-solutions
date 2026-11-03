type Bilingual = { en: string; es: string };

export type FaqItem = {
  question: Bilingual;
  answer: Bilingual;
};

export const faqs: FaqItem[] = [
  {
    question: { en: "How do we get started?", es: "¿Cómo empezamos?" },
    answer: {
      en: "Call or text us and we'll talk through what fits your business. No forms, no tech talk. Just a normal conversation.",
      es: "Llámanos o escríbenos y platicamos sobre lo que le conviene a tu negocio. Sin formularios, sin tecnicismos. Solo una conversación normal.",
    },
  },
  {
    question: {
      en: "I'm not good with technology. Is that a problem?",
      es: "No soy bueno con la tecnología. ¿Es un problema?",
    },
    answer: {
      en: "Not at all. That's exactly who we built this for. We set everything up, we run it, and we explain what's happening in plain words. You don't need to learn anything new.",
      es: "Para nada. Justo para eso creamos esto. Nosotros configuramos todo, lo manejamos y te explicamos lo que pasa con palabras sencillas. No tienes que aprender nada nuevo.",
    },
  },
  {
    question: {
      en: "Who owns the website, the Google profile and the other accounts?",
      es: "¿De quién es el sitio web, el perfil de Google y las demás cuentas?",
    },
    answer: {
      en: "You do, always. Every account we build is created under an email address you own, either the one you already use or a new one we set up together. Your website, your Google profile, your data: all yours from day one.",
      es: "Tuyos, siempre. Cada cuenta que creamos queda bajo un correo que te pertenece, ya sea el que ya usas o uno nuevo que configuramos juntos. Tu sitio web, tu perfil de Google, tus datos: todo es tuyo desde el primer día.",
    },
  },
  {
    question: {
      en: "What happens if we stop working together?",
      es: "¿Qué pasa si dejamos de trabajar juntos?",
    },
    answer: {
      en: "You keep everything. Because every account is under your own email, there's nothing to move and nothing to start over. Your website, your reviews and your history stay with you.",
      es: "Te quedas con todo. Como cada cuenta está bajo tu propio correo, no hay nada que mover ni que empezar de cero. Tu sitio, tus reseñas y tu historial se quedan contigo.",
    },
  },
  {
    question: {
      en: "What's in the monthly report?",
      es: "¿Qué incluye el reporte mensual?",
    },
    answer: {
      en: "How your business showed up on Google, how many people visited and called, and what happened to those calls: missed calls, busy times compared with your staffing, and how long calls last. We also sum up what your reviews are saying. Then we tell you, in plain words, what we'll do next.",
      es: "Cómo apareció tu negocio en Google, cuántas personas te visitaron y te llamaron, y qué pasó con esas llamadas: llamadas perdidas, horas pico comparadas con tu personal y cuánto duran. También resumimos lo que dicen tus reseñas. Luego te decimos, con palabras sencillas, qué haremos después.",
    },
  },
  {
    question: {
      en: "Why don't you start with paid ads?",
      es: "¿Por qué no empiezan con anuncios pagados?",
    },
    answer: {
      en: "Ads work best when they send people to a website and Google profile that already work. So we spend the first 90 days getting you found without ads. After that, if ads make sense for your business, we turn on Delta Ads and you decide how much goes into them.",
      es: "Los anuncios funcionan mejor cuando llevan a la gente a un sitio y un perfil de Google que ya funcionan. Por eso dedicamos los primeros 90 días a que te encuentren sin anuncios. Después, si los anuncios tienen sentido para tu negocio, activamos Delta Ads y tú decides cuánto destinar.",
    },
  },
  {
    question: {
      en: "What if I need something custom, like a booking system?",
      es: "¿Y si necesito algo a la medida, como un sistema para agendar citas?",
    },
    answer: {
      en: "That's Delta Labs: booking tools, customer lists, dashboards and other custom tools. We talk first, understand how your business works, and build only what you need.",
      es: "Eso es Delta Labs: herramientas para agendar, listas de clientes, paneles y otras herramientas a la medida. Primero platicamos, entendemos cómo funciona tu negocio y construimos solo lo que necesitas.",
    },
  },
  {
    question: {
      en: "Do you work with more than one business in my industry?",
      es: "¿Trabajan con más de un negocio de mi mismo giro?",
    },
    answer: {
      en: "We only work with one business per type of business in each area, so our attention is never split between competitors. If we already work with a business like yours nearby, we'll tell you upfront.",
      es: "Solo trabajamos con un negocio de cada giro en cada zona, para que nuestra atención nunca se divida entre competidores. Si ya trabajamos con un negocio como el tuyo cerca, te lo decimos desde el principio.",
    },
  },
];
