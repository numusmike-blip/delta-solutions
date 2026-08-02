import { commissionFreeCallsPerMonth } from "./pricing";

type Bilingual = { en: string; es: string };

export type FaqItem = {
  question: Bilingual;
  answer: Bilingual;
};

export const faqs: FaqItem[] = [
  {
    question: { en: "Is there a contract?", es: "¿Hay contrato?" },
    answer: {
      en: "No. Delta Solutions is truly month to month. We recommend staying through month 3 so you get a full organic traffic report and can see the real trend, but nothing locks you in. You could leave day one and keep everything we built.",
      es: "No. Delta Solutions es verdaderamente mes a mes. Recomendamos quedarte hasta el mes 3 para que obtengas un reporte completo de tráfico orgánico y veas la tendencia real, pero nada te ata. Podrías irte desde el primer día y quedarte con todo lo que construimos.",
    },
  },
  {
    question: {
      en: 'What counts as a "qualified call"?',
      es: '¿Qué cuenta como "llamada calificada"?',
    },
    answer: {
      en: "A call that connects and lasts 60 seconds or longer. Short hang-ups, wrong numbers, and spam calls don't count. Every call is tracked and recorded so you can hear exactly what happened, not just take our word for it.",
      es: "Una llamada que conecta y dura 60 segundos o más. Colgadas rápidas, números equivocados y llamadas de spam no cuentan. Cada llamada se rastrea y graba para que escuches exactamente qué pasó, no solo nuestra palabra.",
    },
  },
  {
    question: {
      en: "How does the commission actually work?",
      es: "¿Cómo funciona realmente la comisión?",
    },
    answer: {
      en: `Your first ${commissionFreeCallsPerMonth} qualified calls each month are on us, no commission at all. After that, you pay a small amount per qualified call. The rate depends on your industry, because a call is worth a different amount to a landscaper than it is to a law firm. See the commission chart on the Pricing page for exact rates. Your rate is confirmed at onboarding.`,
      es: `Tus primeras ${commissionFreeCallsPerMonth} llamadas calificadas de cada mes van por nuestra cuenta, sin comisión alguna. Después de eso, pagas una cantidad pequeña por cada llamada calificada. La tarifa depende de tu industria, porque una llamada vale algo distinto para un jardinero que para un despacho legal. Consulta la tabla de comisiones en la página de Precios para ver las tarifas exactas. Tu tarifa se confirma en el arranque.`,
    },
  },
  {
    question: {
      en: "Who owns the website, the Google profile, the ad accounts?",
      es: "¿Quién es dueño del sitio web, el perfil de Google, las cuentas de anuncios?",
    },
    answer: {
      en: "You do, always. Every account we build lives under an email address you own, whether that's your existing business email or a dedicated one we set up for you. Domain, data, history, logins: all yours from day one. This isn't a courtesy. Miguel spent years in the BPO industry watching new clients arrive at agencies with no idea where their own hosting or account access even was, because it had all been set up under the agency's accounts. Delta Solutions is built the other way around on purpose.",
      es: "Tú, siempre. Cada cuenta que creamos vive bajo un correo que te pertenece, ya sea tu correo de negocio actual o uno dedicado que configuramos para ti. Dominio, datos, historial, accesos: todo tuyo desde el primer día. Esto no es una cortesía. Miguel pasó años en la industria BPO viendo llegar clientes nuevos a agencias sin saber siquiera dónde estaba su propio hospedaje o acceso a cuentas, porque todo se había configurado bajo las cuentas de la agencia. Delta Solutions está construido al revés, a propósito.",
    },
  },
  {
    question: {
      en: "What happens if we decide to leave?",
      es: "¿Qué pasa si decidimos irnos?",
    },
    answer: {
      en: "You keep everything. Because every account is built under your own email address, there's no migration, no starting over, no losing your search history or reviews. That's the point of the ownership structure. It's not a perk, it's proof we mean what we say about being invested in your business, not just billing it.",
      es: "Te quedas con todo. Porque cada cuenta está construida bajo tu propio correo, no hay migración, no empiezas de cero, no pierdes tu historial de búsqueda ni tus reseñas. Ese es el punto de esta estructura de propiedad. No es un beneficio extra, es la prueba de que hablamos en serio sobre invertir en tu negocio, no solo cobrarte.",
    },
  },
  {
    question: {
      en: "Do you work with more than one business in my industry?",
      es: "¿Trabajan con más de un negocio en mi industria?",
    },
    answer: {
      en: "We're selective about who we work with in the same industry and area, so our attention never gets split between businesses competing for the same customer. If we're already working with a business like yours nearby, we'll tell you upfront.",
      es: "Somos selectivos sobre con quién trabajamos en la misma industria y zona, para que nuestra atención nunca se divida entre negocios que compiten por el mismo cliente. Si ya trabajamos con un negocio como el tuyo cerca, te lo diremos desde el principio.",
    },
  },
  {
    question: {
      en: "Why don't you start with paid ads?",
      es: "¿Por qué no empiezan con anuncios pagados?",
    },
    answer: {
      en: "We recommend building your organic foundation for the first 90 days before turning on Delta Ads. Paid traffic sent to an unproven site or funnel just gets wasted. Organic-first means every ad dollar after that is working with data, not guesses. And when you do turn Delta Ads on, the ad budget is entirely your call: we manage the campaigns, you decide how much to invest.",
      es: "Recomendamos construir tu base orgánica durante los primeros 90 días antes de activar Delta Ads. El tráfico pagado enviado a un sitio o embudo no comprobado simplemente se desperdicia. Empezar orgánico significa que cada dólar de anuncios después trabaja con datos, no con suposiciones. Y cuando actives Delta Ads, el presupuesto es completamente tu decisión: nosotros administramos las campañas, tú decides cuánto invertir.",
    },
  },
  {
    question: {
      en: "What's Delta Radar, exactly?",
      es: "¿Qué es exactamente Delta Radar?",
    },
    answer: {
      en: "A monthly report covering your rankings, what competitors nearby are doing, and where the real opportunity is, plus specific recommendations, like missed-call patterns or pricing questions your site isn't answering. We're not just generating the call. We want to help you close it.",
      es: "Un reporte mensual que cubre tu posicionamiento, qué están haciendo los competidores cercanos, y dónde está la oportunidad real, más recomendaciones específicas, como patrones de llamadas perdidas o preguntas de precio que tu sitio no está respondiendo. No solo generamos la llamada. Queremos ayudarte a cerrarla.",
    },
  },
  {
    question: {
      en: "What if I need something custom, like a booking system or CRM?",
      es: "¿Qué pasa si necesito algo a la medida, como un sistema de reservas o un CRM?",
    },
    answer: {
      en: "That's Delta Labs: custom CRMs, booking tools, dashboards, and business-specific applications, scoped and priced after a conversation. It's not part of the three plans. It's project-based, built around exactly what you need.",
      es: "Eso es Delta Labs: CRMs personalizados, herramientas de reservas, paneles y aplicaciones a la medida de tu negocio, definidos y cotizados después de una conversación. No es parte de los tres planes. Es por proyecto, construido alrededor de exactamente lo que necesitas.",
    },
  },
];
