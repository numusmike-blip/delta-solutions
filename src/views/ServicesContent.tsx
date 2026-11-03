"use client";

import { Container } from "@/components/Container";
import { Link } from "@/components/LocalizedLink";
import { ContactCta } from "@/components/ContactCta";
import { NoTechNote } from "@/components/NoTechNote";
import { DashboardImage } from "@/components/DashboardImage";
import { services } from "@/data/services";
import { gscShot, analyticsShots } from "@/data/dashboards";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

const copy = {
  title: { en: "What we do for your business", es: "Lo que hacemos por tu negocio" },
  subtitle: {
    en: "Five pieces that work together to bring you more calls and more customers. We start with what you need now and grow from there.",
    es: "Cinco piezas que trabajan juntas para traerte más llamadas y más clientes. Empezamos con lo que necesitas hoy y crecemos desde ahí.",
  },
  adsNote: {
    en: "Delta Ads only starts after your first 90 days of organic work.",
    es: "Delta Ads solo empieza después de tus primeros 90 días de trabajo orgánico.",
  },
  seeTitle: { en: "What you'll see", es: "Lo que verás" },
  seeIntro: {
    en: "The numbers we track and explain to you every month.",
    es: "Los números que medimos y te explicamos cada mes.",
  },
  exampleLabel: { en: "Example dashboard views", es: "Ejemplos de paneles" },
  ctaTitle: { en: "Not sure where to start?", es: "¿No sabes por dónde empezar?" },
  ctaBody: {
    en: "Call or text us and we'll talk through what fits your business. No tech talk.",
    es: "Llámanos o escríbenos y platicamos sobre lo que le conviene a tu negocio. Sin tecnicismos.",
  },
};

export function ServicesContent() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">{copy.title[lang]}</h1>
          <p className="mt-5 text-lg text-white/70">{copy.subtitle[lang]}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <NoTechNote className="mb-10" />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, idx) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex flex-col rounded-2xl border border-border bg-white p-8 transition-colors hover:border-amber-400 ${
                  // An odd last card spans the full row so the grid never has a gap.
                  idx === services.length - 1 && services.length % 2 === 1 ? "md:col-span-2" : ""
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">0{idx + 1}</span>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900">{service.name}</h2>
                <p className="mt-1 text-sm font-medium text-muted">{service.tagline[lang]}</p>
                <p className="mt-4 text-sm leading-relaxed text-navy-900/70">{service.description[lang]}</p>
                <span className="mt-auto pt-6 text-sm font-semibold text-navy-900 group-hover:text-amber-600">
                  {ui.common.learnMore[lang]}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">{copy.adsNote[lang]}</p>
        </Container>
      </section>

      {/* What you'll see */}
      <section className="border-t border-border bg-surface-muted py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">{copy.exampleLabel[lang]}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">{copy.seeTitle[lang]}</h2>
          <p className="mt-3 max-w-2xl text-muted">{copy.seeIntro[lang]}</p>

          <div className="mt-10 max-w-4xl">
            <DashboardImage shot={gscShot} sizes="(min-width: 1024px) 896px, 100vw" />
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {analyticsShots.map((shot) => (
              <DashboardImage
                key={shot.src}
                shot={shot}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </Container>
      </section>

      <ContactCta title={copy.ctaTitle} body={copy.ctaBody} formLink />
    </>
  );
}
