"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { FoundingCallout } from "@/components/FoundingBanner";
import {
  pricingTiers,
  deltaLabs,
  commissionChart,
  commissionExplainer,
  noLockInMessage,
} from "@/data/pricing";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

const copy = {
  title: { en: "Pricing", es: "Precios" },
  subtitle: {
    en: "One base rate, plus a small commission tied to results. No setup fees, no long contracts, no surprises.",
    es: "Una tarifa base, más una pequeña comisión ligada a resultados. Sin cuotas de instalación, sin contratos largos, sin sorpresas.",
  },
  commissionLabel: { en: "Commission", es: "Comisión" },
  howCommissionWorks: { en: "How commission works", es: "Cómo funciona la comisión" },
  vertical: { en: "Vertical", es: "Giro" },
  perQualifiedCall: {
    en: "Per qualified call (60+ sec)",
    es: "Por llamada calificada (60+ seg)",
  },
  noContractTitle: { en: "No contract. No lock-in.", es: "Sin contrato. Sin ataduras." },
};

export function PricingContent() {
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

      {/* Comparison table */}
      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`flex flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-amber-400 bg-navy-950 text-white"
                    : "border-border bg-white"
                }`}
              >
                {tier.highlighted && (
                  <span className="mb-3 w-fit rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-navy-950">
                    {ui.common.mostPopular[lang]}
                  </span>
                )}
                <h2
                  className={`font-display text-xl font-semibold ${
                    tier.highlighted ? "text-white" : "text-navy-900"
                  }`}
                >
                  {tier.name}
                </h2>
                <p className="mt-2 flex items-baseline gap-1">
                  <span
                    className={`font-display text-4xl font-semibold ${
                      tier.highlighted ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span className={tier.highlighted ? "text-white/60" : "text-muted"}>
                    {tier.priceNote[lang]}
                  </span>
                </p>
                <p className={`mt-3 text-sm ${tier.highlighted ? "text-white/70" : "text-muted"}`}>
                  {tier.description[lang]}
                </p>

                <ul className="mt-6 space-y-2.5 text-sm">
                  {tier.features.map((f) => (
                    <li
                      key={f.en}
                      className={`flex gap-2 ${tier.highlighted ? "text-white/80" : "text-navy-900/80"}`}
                    >
                      <span className="text-amber-500">✓</span>
                      {f[lang]}
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-6 rounded-lg px-4 py-3 text-xs font-medium ${
                    tier.highlighted ? "bg-white/10 text-white/70" : "bg-surface-muted text-muted"
                  }`}
                >
                  {copy.commissionLabel[lang]}: {tier.commissionNote[lang]}
                </div>

                <div className={`mt-6 border-t pt-5 text-xs ${tier.highlighted ? "border-white/10" : "border-border"}`}>
                  <p className={tier.highlighted ? "text-white/50" : "text-muted"}>
                    {ui.common.bestFor[lang]}
                  </p>
                  <p className={`mt-1 leading-relaxed ${tier.highlighted ? "text-white/70" : "text-navy-900/70"}`}>
                    {tier.bestFor.map((b) => b[lang]).join(" · ")}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <Button
                    href="/contact"
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {ui.nav.bookACall[lang]}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Delta Labs callout */}
          <div className="mt-6 rounded-2xl border border-border bg-surface-muted p-8 sm:flex sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                {deltaLabs.tierLabel[lang]}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-navy-900">
                {deltaLabs.name}
              </h3>
              <p className="mt-2 max-w-xl text-sm text-muted">{deltaLabs.description[lang]}</p>
            </div>
            <div className="mt-6 sm:mt-0 sm:shrink-0">
              <Button href="/contact" variant="secondary">
                {deltaLabs.cta[lang]}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Commission chart */}
      <section className="border-t border-border bg-white py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-navy-900">
            {copy.howCommissionWorks[lang]}
          </h2>
          <p className="mt-3 text-muted">{commissionExplainer[lang]}</p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-muted">
                <tr>
                  <th className="px-5 py-3 font-semibold text-navy-900">
                    {copy.vertical[lang]}
                  </th>
                  <th className="px-5 py-3 font-semibold text-navy-900">
                    {copy.perQualifiedCall[lang]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {commissionChart.map((row, idx) => (
                  <tr
                    key={row.vertical.en}
                    className={idx % 2 === 0 ? "bg-white" : "bg-surface-muted/50"}
                  >
                    <td className="px-5 py-3 text-navy-900/80">{row.vertical[lang]}</td>
                    <td className="px-5 py-3 font-semibold text-navy-900">${row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* No lock-in */}
      <section className="border-t border-border bg-surface-muted py-20">
        <Container className="max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-navy-900">
            {copy.noContractTitle[lang]}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">{noLockInMessage[lang]}</p>
        </Container>
      </section>

      {/* Founding banner */}
      <section className="py-20">
        <Container>
          <FoundingCallout />
        </Container>
      </section>
    </>
  );
}
