"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { industries } from "@/data/industries";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

const copy = {
  title: { en: "Industries we serve", es: "Industrias que atendemos" },
  subtitle: {
    en: "Every business searches differently. Here's how Delta Solutions works with businesses like yours.",
    es: "Cada negocio tiene búsquedas distintas. Así trabaja Delta Solutions con negocios como el tuyo.",
  },
};

export function IndustriesContent() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            {copy.title[lang]}
          </h1>
          <p className="mt-5 text-lg text-white/70">{copy.subtitle[lang]}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-2xl border border-border bg-white p-6 transition-colors hover:border-amber-400"
              >
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  {industry.name[lang]}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                  {industry.blurb[lang]}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-navy-900 group-hover:text-amber-600">
                  {ui.common.learnMore[lang]}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
