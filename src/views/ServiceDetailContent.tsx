"use client";

import { Container } from "@/components/Container";
import { Link } from "@/components/LocalizedLink";
import { ContactActions } from "@/components/ContactActions";
import { NoTechNote } from "@/components/NoTechNote";
import { services, type Service } from "@/data/services";
import { industries } from "@/data/industries";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

const copy = {
  otherPieces: {
    en: (name: string) => `Other pieces that work with ${name}`,
    es: (name: string) => `Otras piezas que funcionan con ${name}`,
  },
  commonFor: { en: "Common for", es: "Común para" },
  talkToUs: { en: "Want to know if this fits your business?", es: "¿Quieres saber si esto le sirve a tu negocio?" },
};

export function ServiceDetailContent({ service }: { service: Service }) {
  const { lang } = useLanguage();

  const related = industries.filter((i) => i.relatedServices.includes(service.slug)).slice(0, 6);

  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">{service.name}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{service.tagline[lang]}</h1>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-lg leading-relaxed text-navy-900/80">{service.description[lang]}</p>

            <h2 className="mt-10 font-display text-xl font-semibold text-navy-900">
              {ui.common.whatsIncluded[lang]}
            </h2>
            <ul className="mt-4 space-y-3">
              {service.features.map((f) => (
                <li key={f.en} className="flex gap-3 text-navy-900/80">
                  <span className="mt-0.5 text-amber-500">✓</span>
                  <span>{f[lang]}</span>
                </li>
              ))}
            </ul>

            <NoTechNote className="mt-10" />

            <div className="mt-10">
              <h2 className="font-display text-lg font-semibold text-navy-900">{copy.talkToUs[lang]}</h2>
              <ContactActions className="mt-4" />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface-muted p-6">
              <h3 className="font-display text-sm font-semibold text-navy-900">
                {copy.otherPieces[lang](service.shortName)}
              </h3>
              <ul className="mt-4 space-y-2">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-sm font-medium text-navy-900 hover:text-amber-600"
                      >
                        {s.name} →
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-display text-sm font-semibold text-navy-900">{copy.commonFor[lang]}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {related.map((i) => (
                    <Link
                      key={i.slug}
                      href={`/industries/${i.slug}`}
                      className="rounded-full border border-border px-3 py-1 text-xs text-navy-900 hover:border-amber-400"
                    >
                      {i.name[lang]}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </Container>
      </section>
    </>
  );
}
