type Bilingual = { en: string; es: string };

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  priceNote: Bilingual;
  description: Bilingual;
  features: Bilingual[];
  bestFor: Bilingual[];
  commissionNote: Bilingual;
  note?: Bilingual;
  highlighted?: boolean;
};

export const commissionFreeCallsPerMonth = 10;

const commissionNote: Bilingual = {
  en: `$5–20 per qualified call over 60 seconds, starting after your first ${commissionFreeCallsPerMonth} calls each month`,
  es: `$5–20 USD por llamada calificada de más de 60 segundos, a partir de tu llamada número ${commissionFreeCallsPerMonth} de cada mes`,
};

export const pricingTiers: PricingTier[] = [
  {
    id: "delta-base",
    name: "Delta Base",
    price: "$100",
    priceNote: { en: "/mo", es: "/mes" },
    description: {
      en: "The essentials: website, hosting, Google presence, and real tracking.",
      es: "Lo esencial: sitio web, hospedaje, presencia en Google y seguimiento real.",
    },
    note: {
      en: "A starting point, best for your first 3 months. After that, your site needs more investment to keep growing.",
      es: "Un punto de partida, ideal para tus primeros 3 meses. Después de eso, tu sitio necesita más inversión para seguir creciendo.",
    },
    features: [
      { en: "Website built + hosted", es: "Sitio web construido y hospedado" },
      {
        en: "Google Business Profile management",
        es: "Gestión de tu perfil de Google Business",
      },
      { en: "GA4 + Search Console tracking", es: "Seguimiento con GA4 + Search Console" },
      {
        en: "Call tracking & recording: add-on, +$50/mo",
        es: "Rastreo y grabación de llamadas: complemento, +$50/mes",
      },
    ],
    bestFor: [
      { en: "Artists & creators", es: "Artistas y creadores" },
      { en: "Early-stage real estate agents", es: "Agentes inmobiliarios en etapa inicial" },
      { en: "Freelancers & consultants", es: "Freelancers y consultores" },
      { en: "Small retail shops", es: "Tiendas pequeñas" },
      { en: "Photographers", es: "Fotógrafos" },
      { en: "Personal trainers", es: "Entrenadores personales" },
      { en: "Landscapers", es: "Jardinería y paisajismo" },
    ],
    commissionNote,
  },
  {
    id: "delta-growth",
    name: "Delta Growth",
    price: "$300",
    priceNote: { en: "/mo", es: "/mes" },
    description: {
      en: "Everything in Base, plus the systems that turn visibility into calls.",
      es: "Todo lo de Base, más los sistemas que convierten visibilidad en llamadas.",
    },
    features: [
      { en: "Everything in Delta Base", es: "Todo lo de Delta Base" },
      {
        en: "Call tracking & recording included",
        es: "Rastreo y grabación de llamadas incluidos",
      },
      { en: "Delta Radar monthly report", es: "Reporte mensual de Delta Radar" },
      { en: "Constant SEO improvement", es: "Mejora constante de SEO" },
      {
        en: "Google Business Profile posts, 8/month",
        es: "Publicaciones en Google Business, 8 al mes",
      },
      { en: "Delta Social: 2–3 posts/week", es: "Delta Social: 2–3 publicaciones/semana" },
      { en: "Delta Studio: 1 design asset/month", es: "Delta Studio: 1 diseño al mes" },
      { en: "Review generation system", es: "Sistema de generación de reseñas" },
    ],
    bestFor: [
      { en: "Auto body shops", es: "Talleres de hojalatería y pintura" },
      { en: "Dentists", es: "Dentistas" },
      { en: "Chiropractors", es: "Quiroprácticos" },
      { en: "Plumbers", es: "Plomeros" },
      { en: "HVAC companies", es: "Empresas de aire acondicionado y calefacción" },
      { en: "Auto glass & tow companies", es: "Cristales automotrices y grúas" },
      { en: "Med spas & aesthetics clinics", es: "Med spas y clínicas de estética" },
    ],
    commissionNote,
    highlighted: true,
  },
  {
    id: "delta-partner",
    name: "Delta Partner",
    price: "$500",
    priceNote: { en: "/mo", es: "/mes" },
    description: {
      en: "Full attention: priority response, daily presence, unlimited design.",
      es: "Atención completa: respuesta prioritaria, presencia diaria, diseño ilimitado.",
    },
    features: [
      { en: "Everything in Delta Growth", es: "Todo lo de Delta Growth" },
      {
        en: "Delta Radar + monthly strategy call",
        es: "Delta Radar + llamada de estrategia mensual",
      },
      { en: "Constant SEO improvement", es: "Mejora constante de SEO" },
      {
        en: "Business listing creation across directories",
        es: "Creación de listados de negocio en directorios",
      },
      {
        en: "Google Business Profile posts, 2/week",
        es: "Publicaciones en Google Business, 2 por semana",
      },
      {
        en: "Delta Social: daily posting + stories",
        es: "Delta Social: publicaciones diarias + historias",
      },
      {
        en: "Delta Studio: unlimited basic design requests",
        es: "Delta Studio: solicitudes de diseño básico ilimitadas",
      },
      { en: "Priority response time", es: "Tiempo de respuesta prioritario" },
    ],
    bestFor: [
      { en: "Multi-location auto body groups", es: "Grupos de talleres con varias sucursales" },
      { en: "Law firms", es: "Despachos legales" },
      { en: "Dental groups", es: "Grupos dentales" },
      { en: "Orthodontists", es: "Ortodoncistas" },
      { en: "Real estate teams & brokerages", es: "Equipos y agencias inmobiliarias" },
      { en: "Roofing companies", es: "Empresas de techado" },
      { en: "Veterinary clinics", es: "Clínicas veterinarias" },
    ],
    commissionNote,
  },
];

export const deltaLabs = {
  name: "Delta Labs",
  tierLabel: { en: "Tier 4: Let's Talk", es: "Nivel 4: Hablemos" },
  description: {
    en: "Custom CRMs, booking systems, internal dashboards, and business-specific applications. Project-based pricing, scoped after a conversation, not a package.",
    es: "CRMs personalizados, sistemas de reservas, paneles internos y aplicaciones a la medida de tu negocio. Precio por proyecto, definido después de una conversación, no como paquete fijo.",
  },
  cta: {
    en: "Have something specific in mind? Let's talk about what you need built.",
    es: "¿Tienes algo específico en mente? Hablemos sobre lo que necesitas construir.",
  },
};

export type CommissionRow = {
  vertical: Bilingual;
  amount: number;
};

export const commissionChart: CommissionRow[] = [
  { vertical: { en: "Landscapers / personal trainers", es: "Jardinería / entrenadores personales" }, amount: 5 },
  { vertical: { en: "Auto glass / tow companies", es: "Cristales automotrices / grúas" }, amount: 8 },
  { vertical: { en: "Plumbers / HVAC", es: "Plomeros / aire acondicionado" }, amount: 10 },
  { vertical: { en: "Chiropractors / dentists (general)", es: "Quiroprácticos / dentistas (general)" }, amount: 10 },
  { vertical: { en: "Med spas / aesthetics", es: "Med spas / estética" }, amount: 12 },
  { vertical: { en: "Auto body shops", es: "Talleres de hojalatería y pintura" }, amount: 15 },
  { vertical: { en: "Dental groups / orthodontists", es: "Grupos dentales / ortodoncistas" }, amount: 18 },
  { vertical: { en: "Roofing", es: "Techado" }, amount: 20 },
  { vertical: { en: "Law firms", es: "Despachos legales" }, amount: 20 },
  { vertical: { en: "Real estate teams", es: "Equipos inmobiliarios" }, amount: 20 },
];

export const commissionExplainer: Bilingual = {
  en: `Your first ${commissionFreeCallsPerMonth} qualified calls each month are on us. Commission only applies after that, and it reflects what a call is actually worth to your business: a flat rate doesn't make sense across every industry. Your exact rate is confirmed at onboarding.`,
  es: `Tus primeras ${commissionFreeCallsPerMonth} llamadas calificadas de cada mes van por nuestra cuenta. La comisión solo aplica después de eso, y refleja lo que realmente vale una llamada para tu negocio: una tarifa fija no tiene sentido en todas las industrias. Tu tarifa exacta se confirma en el arranque.`,
};

export const noLockInMessage: Bilingual = {
  en: "Truly month to month. Recommended: stay through month 3 to get a full organic traffic report, but nothing locks you in. You could leave day one and keep everything we built.",
  es: "Verdaderamente mes a mes. Recomendamos quedarte hasta el mes 3 para obtener un reporte completo de tráfico orgánico, pero nada te ata. Podrías irte desde el primer día y quedarte con todo lo que construimos.",
};
