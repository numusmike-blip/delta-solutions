type Bilingual = { en: string; es: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: Bilingual;
  description: Bilingual;
  features: Bilingual[];
  metaDescription: Bilingual;
};

export const services: Service[] = [
  {
    slug: "delta-base",
    name: "Delta Base",
    shortName: "Base",
    tagline: {
      en: "Get found online, and look good when you are.",
      es: "Que te encuentren en internet, y que te vean bien.",
    },
    description: {
      en: "We build your website, keep it running, and set up your Google Business Profile (the box with your hours, map and reviews that shows up when people search for you). We also set up simple tracking, so you can see how many people find you and call. Everything is created under your own email, so it's always yours.",
      es: "Creamos tu sitio web, lo mantenemos funcionando y configuramos tu perfil de Google (el recuadro con tu horario, mapa y reseñas que aparece cuando te buscan). También dejamos listo un seguimiento sencillo para que veas cuántas personas te encuentran y te llaman. Todo se crea bajo tu propio correo, así que siempre es tuyo.",
    },
    features: [
      { en: "A website built and kept running for you", es: "Un sitio web hecho y mantenido por nosotros" },
      {
        en: "Your Google Business Profile set up and kept up to date",
        es: "Tu perfil de Google configurado y siempre actualizado",
      },
      {
        en: "Tracking that shows how many people find you and visit your site",
        es: "Métricas que muestran cuántas personas te encuentran y visitan tu sitio",
      },
      {
        en: "Call tracking, so you know which calls came from your website and Google",
        es: "Seguimiento de llamadas, para saber cuáles llegaron por tu sitio y por Google",
      },
    ],
    metaDescription: {
      en: "A website, Google Business Profile and simple tracking for small businesses, built under your own email and run for you.",
      es: "Sitio web, perfil de Google y métricas sencillas para negocios pequeños, creados bajo tu propio correo y manejados por nosotros.",
    },
  },
  {
    slug: "delta-radar",
    name: "Delta Radar",
    shortName: "Radar",
    tagline: {
      en: "A monthly report that tells you what's working and what to do next.",
      es: "Un reporte mensual que te dice qué funciona y qué hacer después.",
    },
    description: {
      en: "Every month we look at how your business shows up on Google, what nearby competitors are doing, and what happens to your calls. Then we explain it in plain words, with clear next steps. We also keep improving your site so more people find you on Google (that's what SEO means).",
      es: "Cada mes revisamos cómo aparece tu negocio en Google, qué hacen tus competidores cercanos y qué pasa con tus llamadas. Luego te lo explicamos con palabras sencillas y con pasos claros. También seguimos mejorando tu sitio para que más gente te encuentre en Google (eso es el SEO).",
    },
    features: [
      { en: "A monthly report in plain words", es: "Un reporte mensual con palabras sencillas" },
      {
        en: "Ongoing work so more people find you on Google",
        es: "Trabajo constante para que más gente te encuentre en Google",
      },
      { en: "A look at what nearby competitors are doing", es: "Un vistazo a lo que hacen tus competidores cercanos" },
      {
        en: "Call feedback: missed calls, busy times vs. your staff, how long calls last",
        es: "Análisis de llamadas: perdidas, horas pico vs. tu personal, cuánto duran",
      },
      { en: "What your reviews are saying, summed up", es: "Lo que dicen tus reseñas, en resumen" },
    ],
    metaDescription: {
      en: "A monthly report for small businesses: how you show up on Google, what happens to your calls, and what to do next, in plain words.",
      es: "Un reporte mensual para negocios pequeños: cómo apareces en Google, qué pasa con tus llamadas y qué hacer después, con palabras sencillas.",
    },
  },
  {
    slug: "delta-studio",
    name: "Delta Studio",
    shortName: "Studio",
    tagline: {
      en: "The design work that makes your business look sharp.",
      es: "El diseño que hace que tu negocio se vea profesional.",
    },
    description: {
      en: "Flyers, posters, business cards and other branded pieces. The everyday design you need, without hunting for a separate designer.",
      es: "Volantes, carteles, tarjetas de presentación y otro material con tu marca. El diseño del día a día que necesitas, sin buscar a un diseñador aparte.",
    },
    features: [
      { en: "Flyers and posters", es: "Volantes y carteles" },
      { en: "Business cards", es: "Tarjetas de presentación" },
      { en: "Basic branded pieces that match your website", es: "Material de marca que combina con tu sitio web" },
    ],
    metaDescription: {
      en: "Flyers, posters, business cards and branded design for small businesses, done by the same team that runs your website.",
      es: "Volantes, carteles, tarjetas y diseño de marca para negocios pequeños, hechos por el mismo equipo que maneja tu sitio web.",
    },
  },
  {
    slug: "delta-ads",
    name: "Delta Ads",
    shortName: "Ads",
    tagline: {
      en: "Google ads, once your foundation is ready for them.",
      es: "Anuncios en Google, cuando tu base esté lista.",
    },
    description: {
      en: "We start with at least 90 days of organic work (getting you found on Google without paying for ads) before we turn on any ads. That way your ads send people to a website that already works. When you're ready, we run your Google Ads and Local Services Ads for you, and you stay in control of how much goes into them.",
      es: "Empezamos con al menos 90 días de trabajo orgánico (que te encuentren en Google sin pagar anuncios) antes de activar cualquier anuncio. Así tus anuncios llevan a la gente a un sitio que ya funciona. Cuando estés listo, manejamos tus anuncios de Google y de Local Services por ti, y tú decides cuánto destinar a ellos.",
    },
    features: [
      { en: "Google Ads run for you", es: "Anuncios de Google manejados por nosotros" },
      { en: "Local Services Ads run for you", es: "Anuncios de Local Services manejados por nosotros" },
      { en: "You decide how much goes into ads", es: "Tú decides cuánto destinar a los anuncios" },
      { en: "Only after your first 90 days of organic work", es: "Solo después de tus primeros 90 días de trabajo orgánico" },
    ],
    metaDescription: {
      en: "Google Ads and Local Services Ads for small businesses, started only after 90 days of organic work so your ads land on a site that works.",
      es: "Anuncios de Google y Local Services para negocios pequeños, activados solo después de 90 días de trabajo orgánico.",
    },
  },
  {
    slug: "delta-labs",
    name: "Delta Labs",
    shortName: "Labs",
    tagline: {
      en: "Custom tools for the way your business actually works.",
      es: "Herramientas a la medida de cómo funciona tu negocio.",
    },
    description: {
      en: "Booking tools, simple customer lists (a CRM), dashboards and other custom tools that save you time. We talk first, understand how you work, and build only what you need.",
      es: "Herramientas para agendar citas, listas sencillas de clientes (un CRM), paneles y otras herramientas a la medida que te ahorran tiempo. Primero platicamos, entendemos cómo trabajas y construimos solo lo que necesitas.",
    },
    features: [
      { en: "Customer lists that keep track of every client (CRM)", es: "Listas de clientes para darle seguimiento a cada uno (CRM)" },
      { en: "Booking and appointment tools", es: "Herramientas para agendar citas" },
      { en: "Simple dashboards for your numbers", es: "Paneles sencillos con tus números" },
      { en: "Tools built around your business", es: "Herramientas hechas para tu negocio" },
    ],
    metaDescription: {
      en: "Custom booking tools, customer lists and dashboards for small businesses, planned with you and built around how you work.",
      es: "Herramientas a la medida para agendar, listas de clientes y paneles para negocios pequeños, planeados contigo.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
