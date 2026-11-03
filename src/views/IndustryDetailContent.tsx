"use client";

import { Container } from "@/components/Container";
import { Link } from "@/components/LocalizedLink";
import { ContactActions } from "@/components/ContactActions";
import { ContactCta } from "@/components/ContactCta";
import { industries, type Industry } from "@/data/industries";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

const copy = {
  industriesLabel: { en: "Industries we serve", es: "Industrias que atendemos" },
  headingPrefix: { en: "Marketing for", es: "Marketing para" },
  howWeHelp: { en: "How we help", es: "Cómo te ayudamos" },
};

export function IndustryDetailContent({ industry }: { industry: Industry }) {
  const { lang } = useLanguage();

  const relatedServices = services.filter((s) => industry.relatedServices.includes(s.slug));

  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">{copy.industriesLabel[lang]}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            {copy.headingPrefix[lang]} {industry.name[lang]}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">{industry.blurb[lang]}</p>
          <ContactActions tone="dark" className="mt-8" />
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-lg font-semibold text-navy-900">{copy.howWeHelp[lang]}</h2>
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
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16">
        <Container>
          <h2 className="font-display text-xl font-semibold text-navy-900">{ui.common.otherIndustries[lang]}</h2>
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

      <ContactCta />
    </>
  );
}
