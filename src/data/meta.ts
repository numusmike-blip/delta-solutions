// Page titles and meta descriptions, per language. Titles get " | Delta Solutions" appended
// by the root layout template (except the home page, which sets an absolute title).
type PageMeta = { en: { title: string; description: string }; es: { title: string; description: string } };

export const meta = {
  home: {
    en: {
      title: "Delta Solutions | We Handle the Tech, You Run Your Business",
      description:
        "Delta Solutions helps small businesses grow. We build and run your website, Google presence and tracking, and explain it all in plain words. No tech knowledge needed.",
    },
    es: {
      title: "Delta Solutions | Nosotros con la tecnología, tú con tu negocio",
      description:
        "Delta Solutions ayuda a los negocios pequeños a crecer. Creamos y manejamos tu sitio web, tu presencia en Google y tus métricas, y te lo explicamos con palabras sencillas.",
    },
  },
  services: {
    en: {
      title: "Services",
      description:
        "Websites, Google presence, monthly reports, design, ads and custom tools for small businesses. Explained in plain words, with no tech knowledge needed.",
    },
    es: {
      title: "Servicios",
      description:
        "Sitios web, presencia en Google, reportes mensuales, diseño, anuncios y herramientas a la medida para negocios pequeños. Explicado con palabras sencillas.",
    },
  },
  howItWorks: {
    en: {
      title: "How It Works",
      description:
        "From the first call to a website and Google presence that bring in customers: every step we take for your business, in plain words.",
    },
    es: {
      title: "Cómo Funciona",
      description:
        "Desde la primera llamada hasta un sitio web y una presencia en Google que te traen clientes: cada paso que damos por tu negocio, con palabras sencillas.",
    },
  },
  industries: {
    en: {
      title: "Industries We Serve",
      description:
        "From auto body shops to dentists and landscapers: how Delta Solutions helps different kinds of small businesses get found and get more calls.",
    },
    es: {
      title: "Industrias que Atendemos",
      description:
        "De talleres a dentistas y jardineros: cómo Delta Solutions ayuda a distintos negocios pequeños a ser encontrados y recibir más llamadas.",
    },
  },
  about: {
    en: {
      title: "About Us",
      description:
        "Why we started Delta Solutions: to help small businesses grow and make technology simple for owners who'd rather focus on their work.",
    },
    es: {
      title: "Nosotros",
      description:
        "Por qué creamos Delta Solutions: para ayudar a los negocios pequeños a crecer y hacer la tecnología sencilla para quienes prefieren enfocarse en su trabajo.",
    },
  },
  faq: {
    en: {
      title: "FAQ",
      description:
        "Plain answers about getting started, who owns your accounts, monthly reports and how Delta Solutions works with small businesses.",
    },
    es: {
      title: "Preguntas Frecuentes",
      description:
        "Respuestas claras sobre cómo empezar, de quién son tus cuentas, los reportes mensuales y cómo trabaja Delta Solutions con negocios pequeños.",
    },
  },
  contact: {
    en: {
      title: "Contact",
      description: "Call, text or WhatsApp Delta Solutions. No tech talk. We'll take it from there.",
    },
    es: {
      title: "Contacto",
      description: "Llama, escribe o manda WhatsApp a Delta Solutions. Sin tecnicismos. Nosotros nos encargamos.",
    },
  },
} satisfies Record<string, PageMeta>;
