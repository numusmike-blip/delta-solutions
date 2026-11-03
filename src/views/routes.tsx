// Server-side route building blocks shared by the English (app/(en)) and Spanish
// (app/(es)/es) route trees, so each page.tsx there stays a few lines long.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, pageMetadata, type Language } from "@/lib/i18n";
import { faqs } from "@/data/faq";
import { services, getServiceBySlug } from "@/data/services";
import { industries, getIndustryBySlug } from "@/data/industries";
import { site } from "@/data/site";
import { FaqContent } from "./FaqContent";
import { ServiceDetailContent } from "./ServiceDetailContent";
import { IndustryDetailContent } from "./IndustryDetailContent";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Delta Solutions",
    template: "%s | Delta Solutions",
  },
};

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// --- FAQ ---------------------------------------------------------------------

export function FaqPage({ lang }: { lang: Language }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question[lang],
      acceptedAnswer: { "@type": "Answer", text: f.answer[lang] },
    })),
  };
  return (
    <>
      <JsonLd data={jsonLd} />
      <FaqContent />
    </>
  );
}

// --- Service detail ----------------------------------------------------------

type SlugParams = { params: Promise<{ slug: string }> };

export function serviceStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function serviceMetadata(lang: Language, { params }: SlugParams): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const m = { title: `${service.name}: ${service.tagline.en}`, description: service.metaDescription.en };
  const es = { title: `${service.name}: ${service.tagline.es}`, description: service.metaDescription.es };
  return pageMetadata(lang, `/services/${slug}`, { en: m, es });
}

export async function ServicePage({ lang, params }: SlugParams & { lang: Language }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name}: ${site.name}`,
    description: service.metaDescription[lang],
    inLanguage: lang,
    provider: { "@type": "ProfessionalService", name: site.name },
  };
  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceDetailContent service={service} />
    </>
  );
}

// --- Industry detail ---------------------------------------------------------

export function industryStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function industryMetadata(lang: Language, { params }: SlugParams): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return pageMetadata(lang, `/industries/${slug}`, {
    en: { title: `Marketing for ${industry.name.en}`, description: industry.blurb.en },
    es: { title: `Marketing para ${industry.name.es}`, description: industry.blurb.es },
  });
}

export async function IndustryPage({ params }: SlugParams) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryDetailContent industry={industry} />;
}
