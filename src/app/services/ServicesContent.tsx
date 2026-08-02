"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

const copy = {
  title: { en: "What we bring to the table", es: "Lo que ofrecemos" },
  subtitle: {
    en: (city: string) =>
      `Not a cold list of services. Six pieces that work together, scaled to what your business in ${city} actually needs right now.`,
    es: (city: string) =>
      `No es una lista fría de servicios. Seis piezas que trabajan juntas, ajustadas a lo que tu negocio en ${city} realmente necesita ahora.`,
  },
  ctaTitle: {
    en: "See how it all fits into a plan",
    es: "Mira cómo todo encaja en un plan",
  },
  ctaBody: {
    en: "Delta Base, Growth, and Partner bundle these pieces differently depending on what your business needs.",
    es: "Delta Base, Growth y Partner combinan estas piezas de forma distinta según lo que tu negocio necesite.",
  },
  viewPricing: { en: "View Pricing", es: "Ver Precios" },
};

export function ServicesContent() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            {copy.title[lang]}
          </h1>
          <p className="mt-5 text-lg text-white/70">{copy.subtitle[lang](site.city)}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, idx) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-white p-8 transition-colors hover:border-amber-400"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                  0{idx + 1}
                </span>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900">
                  {service.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-muted">
                  {service.tagline[lang]}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy-900/70">
                  {service.description[lang]}
                </p>
                <span className="mt-6 text-sm font-semibold text-navy-900 group-hover:text-amber-600">
                  {ui.common.learnMore[lang]}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              {copy.ctaTitle[lang]}
            </h2>
            <p className="mt-2 max-w-lg text-muted">{copy.ctaBody[lang]}</p>
          </div>
          <Button href="/pricing">{copy.viewPricing[lang]}</Button>
        </Container>
      </section>
    </>
  );
}
