type Bilingual = { en: string; es: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: Bilingual;
  description: Bilingual;
  features: Bilingual[];
  tierNote?: Bilingual;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "delta-base",
    name: "Delta Base",
    shortName: "Base",
    tagline: {
      en: "The foundation every business needs online.",
      es: "La base que todo negocio necesita en línea.",
    },
    description: {
      en: "Your website, hosting, Google Business Profile, and the tracking that tells you what's actually working, all built and managed under an account you own.",
      es: "Tu sitio web, hospedaje, perfil de Google Business y el seguimiento que te dice qué realmente está funcionando, todo construido y administrado bajo una cuenta que te pertenece.",
    },
    features: [
      { en: "Website built and hosted", es: "Sitio web construido y hospedado" },
      {
        en: "Google Business Profile management",
        es: "Gestión de tu perfil de Google Business",
      },
      { en: "GA4 + Search Console tracking", es: "Seguimiento con GA4 + Search Console" },
      {
        en: "Call tracking & recording available as an add-on",
        es: "Rastreo y grabación de llamadas disponible como complemento",
      },
    ],
    metaDescription:
      "Website build, hosting, and Google Business Profile management for the businesses we work with: the foundation of every Delta Solutions partnership.",
  },
  {
    slug: "delta-radar",
    name: "Delta Radar",
    shortName: "Radar",
    tagline: {
      en: "SEO and market intelligence, translated into next steps.",
      es: "SEO e inteligencia de mercado, traducidos en próximos pasos.",
    },
    description: {
      en: "A monthly report on where you rank, what your competitors are doing, and where the real opportunity is, with specific recommendations, not just numbers.",
      es: "Un reporte mensual sobre dónde te posicionas, qué están haciendo tus competidores y dónde está la oportunidad real, con recomendaciones específicas, no solo números.",
    },
    features: [
      { en: "Monthly ranking report", es: "Reporte mensual de posicionamiento" },
      { en: "Constant SEO improvement", es: "Mejora constante de SEO" },
      { en: "Competitor tracking", es: "Seguimiento de la competencia" },
      { en: "Opportunity analysis", es: "Análisis de oportunidades" },
      {
        en: "Missed-call and conversion pattern insights",
        es: "Análisis de llamadas perdidas y patrones de conversión",
      },
    ],
    metaDescription:
      "Monthly SEO and competitive intelligence reports for the businesses we work with. Know where you rank and what to do about it.",
  },
  {
    slug: "delta-social",
    name: "Delta Social",
    shortName: "Social",
    tagline: {
      en: "Facebook and Instagram, actually managed.",
      es: "Facebook e Instagram, realmente administrados.",
    },
    description: {
      en: "Consistent content that sounds like your business, not a template, posted on a schedule that matches your tier, from stories to full daily posting.",
      es: "Contenido consistente que suena como tu negocio, no como una plantilla, publicado con la frecuencia que corresponde a tu plan, desde historias hasta publicaciones diarias.",
    },
    features: [
      {
        en: "Facebook & Instagram content management",
        es: "Gestión de contenido en Facebook e Instagram",
      },
      { en: "Google Business Profile posts", es: "Publicaciones en Google Business" },
      {
        en: "Posting cadence scaled to your tier",
        es: "Frecuencia de publicación según tu plan",
      },
      { en: "Stories included at the Partner tier", es: "Historias incluidas en el plan Partner" },
    ],
    metaDescription:
      "Facebook and Instagram management for the businesses we work with: consistent, on-brand social content without hiring in-house.",
  },
  {
    slug: "delta-studio",
    name: "Delta Studio",
    shortName: "Studio",
    tagline: {
      en: "The design work that makes everything else look sharp.",
      es: "El trabajo de diseño que hace que todo lo demás se vea bien.",
    },
    description: {
      en: "Posters, flyers, business cards, and branded assets: the everyday design requests that shouldn't need a separate freelancer.",
      es: "Carteles, volantes, tarjetas de presentación y material de marca: las solicitudes de diseño del día a día que no deberían requerir un freelancer aparte.",
    },
    features: [
      { en: "Posters & flyers", es: "Carteles y volantes" },
      { en: "Business cards", es: "Tarjetas de presentación" },
      { en: "Basic branded assets", es: "Material de marca básico" },
      {
        en: "Unlimited basic requests at the Partner tier",
        es: "Solicitudes básicas ilimitadas en el plan Partner",
      },
    ],
    metaDescription:
      "Posters, flyers, business cards, and branded design assets for the businesses we work with, included as part of your Delta Solutions plan.",
  },
  {
    slug: "delta-ads",
    name: "Delta Ads",
    shortName: "Ads",
    tagline: {
      en: "Paid search, once your foundation earns it.",
      es: "Búsqueda paga, una vez que tu base lo justifique.",
    },
    description: {
      en: "We recommend building your organic foundation for 90 days before turning on paid ads, so your money isn't wasted on an unproven funnel. Once you're ready, we manage Google Ads and Local Services Ads directly. The ad budget itself is entirely your call: you decide how much to invest, and we run the campaigns against it. Our management fee is separate from your ad spend, so every peso you put toward ads goes toward ads.",
      es: "Recomendamos construir tu base orgánica durante 90 días antes de activar anuncios pagados, para que tu dinero no se desperdicie en un embudo no comprobado. Cuando estés listo, administramos Google Ads y Local Services Ads directamente. El presupuesto de los anuncios es completamente tu decisión: tú eliges cuánto invertir y nosotros manejamos las campañas con ese monto. Nuestra cuota de gestión es independiente de tu gasto en anuncios, así que cada peso que destines a anuncios se va a anuncios.",
    },
    features: [
      { en: "Google Ads management", es: "Gestión de Google Ads" },
      { en: "Local Services Ads management", es: "Gestión de Local Services Ads" },
      { en: "You choose and control your ad budget", es: "Tú eliges y controlas tu presupuesto" },
      { en: "Introduced after your first 90 days", es: "Se activa después de tus primeros 90 días" },
    ],
    metaDescription:
      "Google Ads and Local Services Ads management for the businesses we work with, introduced once your organic foundation is proven. You control the budget.",
  },
  {
    slug: "delta-labs",
    name: "Delta Labs",
    shortName: "Labs",
    tagline: {
      en: "Custom-built software for what off-the-shelf can't do.",
      es: "Software a la medida para lo que las soluciones genéricas no pueden hacer.",
    },
    description: {
      en: "CRMs, booking tools, internal dashboards, and business-specific applications, scoped and priced after a conversation, not sold as a package.",
      es: "CRMs, herramientas de reservas, paneles internos y aplicaciones a la medida de tu negocio, definidos y cotizados después de una conversación, no vendidos como paquete.",
    },
    features: [
      { en: "Custom CRMs", es: "CRMs personalizados" },
      { en: "Booking & scheduling tools", es: "Herramientas de reservas y citas" },
      { en: "Internal dashboards", es: "Paneles internos" },
      { en: "Business-specific applications", es: "Aplicaciones a la medida de tu negocio" },
    ],
    tierNote: {
      en: "Tier 4: Let's Talk. Project-based pricing.",
      es: "Nivel 4: Hablemos. Precio por proyecto.",
    },
    metaDescription:
      "Custom CRMs, booking systems, and internal tools built for the businesses we work with by Delta Solutions, project-based and scoped to what you need.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
