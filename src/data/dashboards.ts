import type { Bilingual } from "@/lib/i18n";

export type DashboardShot = {
  src: string;
  width: number;
  height: number;
  alt: Bilingual;
  caption: Bilingual;
};

// Example dashboard views (copies of real screenshots, checked for identifying details).
// Captions describe what each tool shows. They don't quote the numbers in the images.
export const gscShot: DashboardShot = {
  src: "/images/dashboards/gsc-performance.webp",
  width: 902,
  height: 547,
  alt: {
    en: "Google Search Console performance chart showing daily clicks and impressions over three months",
    es: "Gráfica de rendimiento de Google Search Console con clics e impresiones por día durante tres meses",
  },
  caption: {
    en: "Search Console: how often your business shows up on Google, how many people click, and how that changes day by day.",
    es: "Search Console: cuántas veces aparece tu negocio en Google, cuántas personas hacen clic y cómo cambia día a día.",
  },
};

export const analyticsShots: DashboardShot[] = [
  {
    src: "/images/dashboards/analytics-acquisition.webp",
    width: 1362,
    height: 726,
    alt: {
      en: "Google Analytics traffic acquisition report showing visits by channel: direct, organic search and AI assistant",
      es: "Reporte de adquisición de tráfico en Google Analytics con visitas por canal: directo, búsqueda orgánica y asistente de IA",
    },
    caption: {
      en: "Traffic sources: how people find your site, whether from Google search, typing your address directly, or an AI assistant.",
      es: "Fuentes de tráfico: cómo llega la gente a tu sitio, ya sea desde Google, escribiendo tu dirección o desde un asistente de IA.",
    },
  },
  {
    src: "/images/dashboards/analytics-demographics.webp",
    width: 1341,
    height: 765,
    alt: {
      en: "Google Analytics demographic report showing active users by country over time",
      es: "Reporte demográfico de Google Analytics con usuarios activos por país a lo largo del tiempo",
    },
    caption: {
      en: "Visitors by country: where your visitors are coming from and how engaged they are once they arrive.",
      es: "Visitantes por país: de dónde vienen tus visitantes y qué tanto interactúan con tu sitio.",
    },
  },
  {
    src: "/images/dashboards/analytics-events.webp",
    width: 1362,
    height: 742,
    alt: {
      en: "Google Analytics events report listing page views, session starts, engagement, first visits and scrolls",
      es: "Reporte de eventos de Google Analytics con vistas de página, inicios de sesión, interacción, primeras visitas y desplazamientos",
    },
    caption: {
      en: "Visitor actions: what people do on your site, like viewing pages, scrolling, and first-time visits.",
      es: "Acciones de los visitantes: lo que hace la gente en tu sitio, como ver páginas, desplazarse y visitar por primera vez.",
    },
  },
];
