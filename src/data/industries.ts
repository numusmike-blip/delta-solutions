type Bilingual = { en: string; es: string };

export type Industry = {
  slug: string;
  name: Bilingual;
  tierId: "delta-base" | "delta-growth" | "delta-partner";
  blurb: Bilingual;
  relatedServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "auto-body-shops",
    name: { en: "Auto Body Shops", es: "Talleres de Hojalatería y Pintura" },
    tierId: "delta-growth",
    blurb: {
      en: "There's no shortage of body shops out there, and most of them are findable only if a customer already knows the name. We build a Google presence that catches the after-the-fender-bender search, track every call that comes from it, and keep your socials showing finished work.",
      es: "No faltan talleres de hojalatería por ahí, y la mayoría solo se encuentran si el cliente ya conoce el nombre. Construimos una presencia en Google que capta la búsqueda justo después del choque, rastreamos cada llamada que llega de ahí, y mantenemos tus redes mostrando trabajos terminados.",
    },
    relatedServices: ["delta-base", "delta-radar", "delta-social", "delta-studio"],
  },
  {
    slug: "dentists",
    name: { en: "Dentists", es: "Dentistas" },
    tierId: "delta-growth",
    blurb: {
      en: "New-patient searches happen on Google before they happen anywhere else. We keep your Business Profile, reviews, and site working together so the next search for a dentist near you ends at your office.",
      es: "Las búsquedas de pacientes nuevos empiezan en Google antes que en cualquier otro lado. Mantenemos tu perfil de negocio, reseñas y sitio trabajando juntos para que la próxima búsqueda de un dentista cerca termine en tu consultorio.",
    },
    relatedServices: ["delta-base", "delta-radar", "delta-social"],
  },
  {
    slug: "chiropractors",
    name: { en: "Chiropractors", es: "Quiroprácticos" },
    tierId: "delta-growth",
    blurb: {
      en: "Pain doesn't wait for a referral. Most people search first. We make sure that search finds you, and we track which calls actually book, so you know the marketing is doing its job.",
      es: "El dolor no espera una recomendación. La mayoría busca primero en Google. Nos aseguramos de que esa búsqueda te encuentre, y rastreamos qué llamadas realmente agendan cita, para que sepas que el marketing está funcionando.",
    },
    relatedServices: ["delta-base", "delta-radar", "delta-social"],
  },
  {
    slug: "plumbers",
    name: { en: "Plumbers", es: "Plomeros" },
    tierId: "delta-growth",
    blurb: {
      en: "Emergency calls go to whoever shows up first in the search results. We build and maintain the local presence that puts you there, and we track call volume against your staffing so you're never guessing at demand.",
      es: "Las llamadas de emergencia van para quien aparece primero en los resultados de búsqueda. Construimos y mantenemos la presencia local que te pone ahí, y rastreamos el volumen de llamadas contra tu personal para que nunca adivines la demanda.",
    },
    relatedServices: ["delta-base", "delta-radar"],
  },
  {
    slug: "hvac-companies",
    name: { en: "HVAC Companies", es: "Empresas de Aire Acondicionado y Calefacción" },
    tierId: "delta-growth",
    blurb: {
      en: "Seasonal demand swings hard in this business. We track call patterns by time and day so you can see the swings coming, and keep your Google presence sharp year-round, not just when it's busy.",
      es: "La demanda estacional cambia mucho en este negocio. Rastreamos patrones de llamadas por hora y día para que veas venir los cambios, y mantenemos tu presencia en Google fuerte todo el año, no solo cuando hay más trabajo.",
    },
    relatedServices: ["delta-base", "delta-radar", "delta-social"],
  },
  {
    slug: "auto-glass-tow-companies",
    name: { en: "Auto Glass & Tow Companies", es: "Cristales Automotrices y Grúas" },
    tierId: "delta-base",
    blurb: {
      en: "These are urgent, high-intent searches: someone needs you right now. We make sure your Business Profile and site are built to convert that urgency into a call, and track that every one of those calls actually connects.",
      es: "Son búsquedas urgentes y de alta intención: alguien te necesita justo ahora. Nos aseguramos de que tu perfil de negocio y sitio estén diseñados para convertir esa urgencia en una llamada, y rastreamos que cada una de esas llamadas realmente conecte.",
    },
    relatedServices: ["delta-base", "delta-radar"],
  },
  {
    slug: "med-spas-aesthetics",
    name: { en: "Med Spas & Aesthetics Clinics", es: "Med Spas y Clínicas de Estética" },
    tierId: "delta-growth",
    blurb: {
      en: "A strong Instagram presence and a site that photographs well matter as much as the treatment menu. We manage both, plus the review system that builds trust before a first visit.",
      es: "Una presencia fuerte en Instagram y un sitio que se vea bien en fotos importan tanto como el menú de tratamientos. Administramos ambos, más el sistema de reseñas que genera confianza antes de la primera visita.",
    },
    relatedServices: ["delta-base", "delta-social", "delta-studio", "delta-radar"],
  },
  {
    slug: "law-firms",
    name: { en: "Law Firms", es: "Despachos Legales" },
    tierId: "delta-partner",
    blurb: {
      en: "Trust is the entire sale. We build a site and Google presence that reads as credible from the first click, track which calls are real leads, and keep your firm visible against competitors who are also bidding for the same search.",
      es: "La confianza es toda la venta. Construimos un sitio y presencia en Google que se ven creíbles desde el primer clic, rastreamos qué llamadas son prospectos reales, y mantenemos tu despacho visible frente a competidores que también pujan por la misma búsqueda.",
    },
    relatedServices: ["delta-base", "delta-radar", "delta-social"],
  },
  {
    slug: "dental-groups-orthodontists",
    name: { en: "Dental Groups & Orthodontists", es: "Grupos Dentales y Ortodoncistas" },
    tierId: "delta-partner",
    blurb: {
      en: "Multi-provider practices need a presence that scales: consistent branding across locations, coordinated social content, and a Radar report that shows which location is actually converting.",
      es: "Las clínicas con varios doctores necesitan una presencia que escale: marca consistente entre sucursales, contenido de redes coordinado, y un reporte de Radar que muestre qué sucursal realmente está convirtiendo.",
    },
    relatedServices: ["delta-base", "delta-radar", "delta-social", "delta-studio"],
  },
  {
    slug: "real-estate-teams-brokerages",
    name: { en: "Real Estate Teams & Brokerages", es: "Equipos y Agencias Inmobiliarias" },
    tierId: "delta-partner",
    blurb: {
      en: "Listings move fast and so does attention. We keep your team's presence current, your social content daily, and your design requests turned around without waiting on a freelancer.",
      es: "Las propiedades se mueven rápido, y la atención también. Mantenemos la presencia de tu equipo actualizada, tu contenido de redes al día, y tus solicitudes de diseño resueltas sin esperar a un freelancer.",
    },
    relatedServices: ["delta-base", "delta-social", "delta-studio", "delta-radar"],
  },
  {
    slug: "roofing-companies",
    name: { en: "Roofing Companies", es: "Empresas de Techado" },
    tierId: "delta-partner",
    blurb: {
      en: "Roofing leads are worth real money, and the competition for them is fierce. We build the local SEO foundation first, then layer in paid ads once it's proven, so you're not paying for clicks a shaky funnel wastes.",
      es: "Los prospectos de techado valen dinero de verdad, y la competencia por ellos es fuerte. Primero construimos la base de SEO local, y luego agregamos anuncios pagados una vez comprobada, para que no pagues por clics que un embudo débil desperdicia.",
    },
    relatedServices: ["delta-base", "delta-radar", "delta-ads"],
  },
  {
    slug: "veterinary-clinics",
    name: { en: "Veterinary Clinics", es: "Clínicas Veterinarias" },
    tierId: "delta-partner",
    blurb: {
      en: "Pet owners search locally and urgently. We keep your clinic visible for both routine and emergency searches, and manage the social content that builds trust with a community of regulars.",
      es: "Los dueños de mascotas buscan localmente y con urgencia. Mantenemos tu clínica visible tanto en búsquedas de rutina como de emergencia, y administramos el contenido de redes que genera confianza con una comunidad de clientes frecuentes.",
    },
    relatedServices: ["delta-base", "delta-social", "delta-radar"],
  },
  {
    slug: "artists-creators",
    name: { en: "Artists & Creators", es: "Artistas y Creadores" },
    tierId: "delta-base",
    blurb: {
      en: "A clean, fast site and a Google presence that's actually findable, without paying agency rates built for bigger businesses. That's the whole idea behind Delta Base.",
      es: "Un sitio limpio y rápido, y una presencia en Google que realmente se pueda encontrar, sin pagar tarifas de agencia pensadas para negocios más grandes. Esa es la idea completa detrás de Delta Base.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "real-estate-agents",
    name: { en: "Real Estate Agents", es: "Agentes Inmobiliarios" },
    tierId: "delta-base",
    blurb: {
      en: "Early in your business, you need a professional presence more than a full marketing team. Delta Base gets your site, Google profile, and tracking in place so you can grow into the next tier when you're ready.",
      es: "Al inicio de tu negocio, necesitas una presencia profesional más que un equipo de marketing completo. Delta Base pone tu sitio, perfil de Google y seguimiento en su lugar para que crezcas al siguiente nivel cuando estés listo.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "freelancers-consultants",
    name: { en: "Freelancers & Consultants", es: "Freelancers y Consultores" },
    tierId: "delta-base",
    blurb: {
      en: "You don't need a marketing department. You need a site that looks credible and a Google presence that shows up when someone searches for exactly what you do.",
      es: "No necesitas un departamento de marketing. Necesitas un sitio que se vea creíble y una presencia en Google que aparezca cuando alguien busque exactamente lo que haces.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "small-retail-shops",
    name: { en: "Small Retail Shops", es: "Tiendas Pequeñas" },
    tierId: "delta-base",
    blurb: {
      en: "Foot traffic starts online more often than not. We make sure your shop is findable, your hours and location are accurate everywhere, and your basics are tracked from day one.",
      es: "El tráfico en tienda casi siempre empieza en línea. Nos aseguramos de que tu tienda se pueda encontrar, tus horarios y ubicación sean correctos en todos lados, y tus básicos se rastreen desde el primer día.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "photographers",
    name: { en: "Photographers", es: "Fotógrafos" },
    tierId: "delta-base",
    blurb: {
      en: "Your portfolio is the pitch. We build the site that shows it off properly and the Google presence that gets you found by people searching for a photographer near them.",
      es: "Tu portafolio es la venta. Construimos el sitio que lo muestra bien y la presencia en Google que te hace encontrable por quienes buscan un fotógrafo cerca.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "personal-trainers",
    name: { en: "Personal Trainers", es: "Entrenadores Personales" },
    tierId: "delta-base",
    blurb: {
      en: "Most personal training business comes from proximity and trust. We get you visible in local search and give you the analytics to see what's actually bringing in inquiries.",
      es: "La mayoría del negocio de entrenamiento personal viene de la cercanía y la confianza. Te hacemos visible en búsquedas locales y te damos las métricas para ver qué realmente está trayendo consultas.",
    },
    relatedServices: ["delta-base"],
  },
  {
    slug: "landscapers",
    name: { en: "Landscapers", es: "Jardinería y Paisajismo" },
    tierId: "delta-base",
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
