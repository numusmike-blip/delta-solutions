type Bilingual = { en: string; es: string };

export type Industry = {
  slug: string;
  name: Bilingual;
  blurb: Bilingual;
  relatedServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "auto-body-shops",
    name: { en: "Auto Body Shops", es: "Talleres de Hojalatería y Pintura" },
    blurb: {
      en: "Most people pick a body shop right after an accident, and they pick from Google. We make sure your shop shows up in that search, looks trustworthy, and that you can see every call it brings in.",
      es: "La mayoría elige un taller justo después de un choque, y lo elige en Google. Nos aseguramos de que tu taller aparezca en esa búsqueda, se vea confiable y que puedas ver cada llamada que te llega.",
    },
    relatedServices: ["delta-base", "delta-radar", "delta-studio"],
  },
  {
    slug: "dentists",
    name: { en: "Dentists", es: "Dentistas" },
    blurb: {
      en: "New-patient searches happen on Google before they happen anywhere else. We keep your Business Profile, reviews, and site working together so the next search for a dentist near you ends at your office.",
      es: "Las búsquedas de pacientes nuevos empiezan en Google antes que en cualquier otro lado. Mantenemos tu perfil de negocio, reseñas y sitio trabajando juntos para que la próxima búsqueda de un dentista cerca termine en tu consultorio.",
    },
    relatedServices: ["delta-base", "delta-radar"],
  },
  {
    slug: "chiropractors",
    name: { en: "Chiropractors", es: "Quiroprácticos" },
    blurb: {
      en: "Pain doesn't wait for a referral. Most people search first. We make sure that search finds you, and we track which calls actually book, so you know the marketing is doing its job.",
      es: "El dolor no espera una recomendación. La mayoría busca primero en Google. Nos aseguramos de que esa búsqueda te encuentre, y rastreamos qué llamadas realmente agendan cita, para que sepas que el marketing está funcionando.",
    },
    relatedServices: ["delta-base", "delta-radar"],
  },
  {
    slug: "plumbers",
    name: { en: "Plumbers", es: "Plomeros" },
    blurb: {
      en: "Emergency calls go to whoever shows up first in the search results. We build and maintain the local presence that puts you there, and we track call volume against your staffing so you're never guessing at demand.",
      es: "Las llamadas de emergencia van para quien aparece primero en los resultados de búsqueda. Construimos y mantenemos la presencia local que te pone ahí, y rastreamos el volumen de llamadas contra tu personal para que nunca adivines la demanda.",
    },
    relatedServices: ["delta-base", "delta-radar"],
  },
  {
    slug: "hvac-companies",
    name: { en: "HVAC Companies", es: "Empresas de Aire Acondicionado y Calefacción" },
    blurb: {
      en: "Seasonal demand swings hard in this business. We track call patterns by time and day so you can see the swings coming, and keep your Google presence sharp year-round, not just when it's busy.",
      es: "La demanda estacional cambia mucho en este negocio. Rastreamos patrones de llamadas por hora y día para que veas venir los cambios, y mantenemos tu presencia en Google fuerte todo el año, no solo cuando hay más trabajo.",
    },
    relatedServices: ["delta-base", "delta-radar"],
  },
  {
    slug: "auto-glass-tow-companies",
    name: { en: "Auto Glass & Tow Companies", es: "Cristales Automotrices y Grúas" },
    blurb: {
      en: "These are urgent, high-intent searches: someone needs you right now. We make sure your Business Profile and site are built to convert that urgency into a call, and track that every one of those calls actually connects.",
      es: "Son búsquedas urgentes y de alta intención: alguien te necesita justo ahora. Nos aseguramos de que tu perfil de negocio y sitio estén diseñados para convertir esa urgencia en una llamada, y rastreamos que cada una de esas llamadas realmente conecte.",
    },
    relatedServices: ["delta-base", "delta-radar"],
  },
  {
    slug: "med-spas-aesthetics",
    name: { en: "Med Spas & Aesthetics Clinics", es: "Med Spas y Clínicas de Estética" },
    blurb: {
      en: "People want to see your work and read real reviews before they book. We build a site that shows off your results and keep your Google profile and reviews working for you.",
      es: "La gente quiere ver tu trabajo y leer reseñas reales antes de agendar. Creamos un sitio que luce tus resultados y mantenemos tu perfil de Google y tus reseñas trabajando para ti.",
    },
    relatedServices: ["delta-base", "delta-studio", "delta-radar"],
  },
  {
    slug: "law-firms",
    name: { en: "Law Firms", es: "Despachos Legales" },
    blurb: {
      en: "Trust is the entire sale. We build a site and Google presence that reads as credible from the first click, track which calls are real leads, and keep your firm visible against competitors who are also bidding for the same search.",
      es: "La confianza es toda la venta. Construimos un sitio y presencia en Google que se ven creíbles desde el primer clic, rastreamos qué llamadas son prospectos reales, y mantenemos tu despacho visible frente a competidores que también pujan por la misma búsqueda.",
    },
    relatedServices: ["delta-base", "delta-radar"],
  },
  {
    slug: "dental-groups-orthodontists",
    name: { en: "Dental Groups & Orthodontists", es: "Grupos Dentales y Ortodoncistas" },
    blurb: {
      en: "Practices with several doctors or locations need every location to show up on Google. We keep your look consistent everywhere, and your monthly report shows which location is bringing in new patients.",
      es: "Las clínicas con varios doctores o sucursales necesitan que cada sucursal aparezca en Google. Mantenemos tu imagen igual en todos lados, y tu reporte mensual muestra qué sucursal está atrayendo pacientes nuevos.",
    },
    relatedServices: ["delta-base", "delta-radar", "delta-studio"],
  },
  {
    slug: "real-estate-teams-brokerages",
    name: { en: "Real Estate Teams & Brokerages", es: "Equipos y Agencias Inmobiliarias" },
    blurb: {
      en: "Listings move fast. We keep your team's website and Google presence current, and turn around flyers and design requests without you waiting on a freelancer.",
      es: "Las propiedades se mueven rápido. Mantenemos el sitio y la presencia en Google de tu equipo al día, y resolvemos volantes y diseños sin que esperes a un freelancer.",
    },
    relatedServices: ["delta-base", "delta-studio", "delta-radar"],
  },
  {
    slug: "roofing-companies",
    name: { en: "Roofing Companies", es: "Empresas de Techado" },
    blurb: {
      en: "Roofing jobs are big decisions, and competition for them is tough. We first make sure you show up on Google without ads, then add ads only once your website is ready to turn visitors into calls.",
      es: "Un techo es una decisión grande, y la competencia es fuerte. Primero nos aseguramos de que aparezcas en Google sin anuncios, y solo después agregamos anuncios, cuando tu sitio ya convierte visitas en llamadas.",
    },
    relatedServices: ["delta-base", "delta-radar", "delta-ads"],
  },
  {
    slug: "veterinary-clinics",
    name: { en: "Veterinary Clinics", es: "Clínicas Veterinarias" },
    blurb: {
      en: "Pet owners search nearby, and often in a hurry. We keep your clinic easy to find for both checkups and emergencies, with a Google profile and reviews that build trust before the first visit.",
      es: "Los dueños de mascotas buscan cerca y muchas veces con prisa. Mantenemos tu clínica fácil de encontrar para consultas y emergencias, con un perfil de Google y reseñas que generan confianza antes de la primera visita.",
    },
    relatedServices: ["delta-base", "delta-radar"],
  },
  {
    slug: "artists-creators",
    name: { en: "Artists & Creators", es: "Artistas y Creadores" },
    blurb: {
      en: "A clean, fast website and a Google presence people can actually find, set up for you so you can keep creating. That's the whole idea behind Delta Base.",
      es: "Un sitio limpio y rápido, y una presencia en Google que la gente realmente encuentre, configurados por nosotros para que tú sigas creando. Esa es la idea de Delta Base.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "real-estate-agents",
    name: { en: "Real Estate Agents", es: "Agentes Inmobiliarios" },
    blurb: {
      en: "Early on, you need a professional presence more than a full marketing team. Delta Base gets your website, Google profile and tracking in place, and we add more as your business grows.",
      es: "Al inicio de tu negocio, necesitas una presencia profesional más que un equipo de marketing completo. Delta Base deja listos tu sitio, tu perfil de Google y tus métricas, y agregamos más conforme tu negocio crece.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "freelancers-consultants",
    name: { en: "Freelancers & Consultants", es: "Freelancers y Consultores" },
    blurb: {
      en: "You don't need a marketing department. You need a site that looks credible and a Google presence that shows up when someone searches for exactly what you do.",
      es: "No necesitas un departamento de marketing. Necesitas un sitio que se vea creíble y una presencia en Google que aparezca cuando alguien busque exactamente lo que haces.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "small-retail-shops",
    name: { en: "Small Retail Shops", es: "Tiendas Pequeñas" },
    blurb: {
      en: "Foot traffic starts online more often than not. We make sure your shop is findable, your hours and location are accurate everywhere, and your basics are tracked from day one.",
      es: "El tráfico en tienda casi siempre empieza en línea. Nos aseguramos de que tu tienda se pueda encontrar, tus horarios y ubicación sean correctos en todos lados, y tus básicos se rastreen desde el primer día.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "photographers",
    name: { en: "Photographers", es: "Fotógrafos" },
    blurb: {
      en: "Your portfolio is the pitch. We build the site that shows it off properly and the Google presence that gets you found by people searching for a photographer near them.",
      es: "Tu portafolio es la venta. Construimos el sitio que lo muestra bien y la presencia en Google que te hace encontrable por quienes buscan un fotógrafo cerca.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "personal-trainers",
    name: { en: "Personal Trainers", es: "Entrenadores Personales" },
    blurb: {
      en: "Most personal training business comes from proximity and trust. We get you visible in local search and give you the analytics to see what's actually bringing in inquiries.",
      es: "La mayoría del negocio de entrenamiento personal viene de la cercanía y la confianza. Te hacemos visible en búsquedas locales y te damos las métricas para ver qué realmente está trayendo consultas.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "landscapers",
    name: { en: "Landscapers", es: "Jardinería y Paisajismo" },
    blurb: {
      en: "Seasonal, local, and often word-of-mouth, but the first check is still Google. We make sure you're there, with a site and profile that make a good first impression.",
      es: "Estacional, local, y muchas veces de boca en boca, pero la primera revisión sigue siendo Google. Nos aseguramos de que estés ahí, con un sitio y perfil que den una buena primera impresión.",
    },
    relatedServices: ["delta-base"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
