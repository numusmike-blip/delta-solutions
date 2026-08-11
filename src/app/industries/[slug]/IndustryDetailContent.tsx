"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { industries, type Industry } from "@/data/industries";
import { services } from "@/data/services";
import { pricingTiers } from "@/data/pricing";
import { site, whatsappHref } from "@/data/site";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

const copy = {
  industriesLabel: { en: "Industries", es: "Industrias" },
  headingPrefix: { en: "Marketing for", es: "Marketing para" },
  whatThisLooksLike: {
    en: "What this usually looks like",
    es: "Cómo suele verse esto",
  },
  typicalStartingPoint: {
    en: "Typical starting point",
    es: "Punto de partida típico",
  },
  businessesLikeThis: {
    en: "Businesses like this usually start on:",
    es: "Los negocios así normalmente empiezan en:",
  },
  seeFullPlanDetails: {
    en: "See full plan details →",
    es: "Ver detalles completos del plan →",
  },
};

export function IndustryDetailContent({ industry }: { industry: Industry }) {
  const { lang } = useLanguage();

  const tier = pricingTiers.find((t) => t.id === industry.tierId);
  const relatedServices = services.filter((s) =>
    industry.relatedServices.includes(s.slug)
  );

  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            {site.city} · {copy.industriesLabel[lang]}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            {copy.headingPrefix[lang]} {industry.name[lang]}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">{industry.blurb[lang]}</p>
          <div className="mt-8">
            <Button href={whatsappHref(lang)}>{ui.nav.messageUs[lang]}</Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <div>
            <h2 className="font-display text-lg font-semibold text-navy-900">
              {copy.whatThisLooksLike[lang]}
            </h2>
            <ul className="mt-4 space-y-3">
              {relatedServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-start gap-3 rounded-xl border border-border p-4 transition-colors hover:border-amber-400"
                  >
                    <span className="mt-0.5 text-amber-500">✓</span>
                    <span>
                      <span className="block font-medium text-navy-900">{s.name}</span>
                      <span className="text-sm text-muted">{s.tagline[lang]}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {tier && (
            <>
              <div className="hidden w-px bg-border lg:block" />
              <div className="rounded-2xl border border-border bg-surface-muted p-6">
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  {copy.typicalStartingPoint[lang]}
                </h2>
                <p className="mt-1 text-sm text-muted">{copy.businessesLikeThis[lang]}</p>
                <div className="mt-4 rounded-xl border border-amber-400 bg-white p-5">
                  <p className="font-display text-xl font-semibold text-navy-900">
                    {tier.name}
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-navy-900">
                    {tier.price}
                    <span className="text-sm font-normal text-muted">
                      {tier.priceNote[lang]}
                    </span>
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    {ui.common.commission[lang]}: {tier.commissionNote[lang]}
                  </p>
                  <Link
                    href="/pricing"
                    className="mt-4 inline-block text-sm font-semibold text-navy-900 hover:text-amber-600"
                  >
                    {copy.seeFullPlanDetails[lang]}
                  </Link>
                </div>
              </div>
            </>
          )}
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16">
        <Container>
          <h2 className="font-display text-xl font-semibold text-navy-900">
            {ui.common.otherIndustries[lang]}
          </h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {industries
              .filter((i) => i.slug !== industry.slug)
              .slice(0, 8)
              .map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm text-navy-900 hover:border-amber-400"
                >
                  {i.name[lang]}
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
