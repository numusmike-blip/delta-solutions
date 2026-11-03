"use client";

import { Container } from "@/components/Container";
import { Link } from "@/components/LocalizedLink";
import { ContactActions } from "@/components/ContactActions";
import { ContactCta } from "@/components/ContactCta";
import { NoTechNote } from "@/components/NoTechNote";
import { siteCopy } from "@/data/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

const trustSignals = [
  {
    title: { en: "More calls, less hassle", es: "Más llamadas, menos complicaciones" },
    body: {
      en: "We get your business found on Google and make it easy for people to call you. You focus on the work.",
      es: "Hacemos que te encuentren en Google y que sea fácil llamarte. Tú te enfocas en tu trabajo.",
    },
  },
  {
    title: { en: "You own everything", es: "Todo es tuyo" },
    body: {
      en: "Your website, Google profile and every account are created under your own email. If you ever leave, you keep it all.",
      es: "Tu sitio web, tu perfil de Google y cada cuenta se crean bajo tu propio correo. Si algún día te vas, te quedas con todo.",
    },
  },
  {
    title: { en: "A report you'll understand", es: "Un reporte que sí entiendes" },
    body: {
      en: "Every month: how people found you, what happened to your calls, and what we'll do next. In plain words.",
      es: "Cada mes: cómo te encontró la gente, qué pasó con tus llamadas y qué haremos después. Con palabras sencillas.",
    },
  },
];

const copy = {
  kicker: { en: "WE HELP SMALL BUSINESSES GROW", es: "AYUDAMOS A LOS NEGOCIOS PEQUEÑOS A CRECER" },
  heroBody: {
    en: "We handle your website, Google and the rest of the tech, so you can focus on running your business. Call or text us. We'll take it from there.",
    es: "Nos encargamos de tu sitio web, de Google y de toda la tecnología, para que tú te enfoques en tu negocio. Llámanos o escríbenos. Nosotros nos encargamos del resto.",
  },
  whatWeDoTitle: { en: "What we do for you", es: "Lo que hacemos por ti" },
  whatWeDoBody: {
    en: "Five simple pieces that work together. We start with what your business needs now and add the rest when it makes sense.",
    es: "Cinco piezas sencillas que trabajan juntas. Empezamos con lo que tu negocio necesita hoy y sumamos lo demás cuando tenga sentido.",
  },
  seeServices: { en: "See all services →", es: "Ver todos los servicios →" },
  builtForYou: { en: "Built for businesses like yours", es: "Hecho para negocios como el tuyo" },
  finalCtaTitle: { en: "Let's see how we can help.", es: "Veamos cómo podemos ayudarte." },
  finalCtaBody: {
    en: "No sales pitch, no pressure. Just a real conversation about your business.",
    es: "Sin discursos de venta, sin presión. Solo una conversación real sobre tu negocio.",
  },
};

export function HomeContent() {
  const { lang } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 0%, var(--amber-600) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 100%, var(--navy-500) 0%, transparent 60%)",
          }}
        />
        <Container className="relative py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            {copy.kicker[lang]}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {siteCopy.tagline[lang]}.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{copy.heroBody[lang]}</p>
          <ContactActions tone="dark" className="mt-10 max-w-xl" />
        </Container>
      </section>

      {/* Manifesto */}
      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <p className="font-display text-2xl font-medium leading-relaxed text-navy-900 sm:text-3xl">
            &ldquo;{siteCopy.manifesto[lang]}&rdquo;
          </p>
          <p className="mt-6 text-sm text-muted">{siteCopy.signatureLine[lang]}</p>
          <NoTechNote className="mt-10" />
        </Container>
      </section>

      {/* Trust signals */}
      <section className="bg-surface-muted py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {trustSignals.map((item) => (
              <div key={item.title.en} className="rounded-2xl border border-border bg-white p-7">
                <h3 className="font-display text-lg font-semibold text-navy-900">{item.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body[lang]}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              {copy.whatWeDoTitle[lang]}
            </h2>
            <p className="mt-3 text-muted">{copy.whatWeDoBody[lang]}</p>
          </div>

          {/* 6-column grid: 3 cards on the first row, 2 wider cards on the second, no gaps. */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {services.map((service, idx) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex flex-col rounded-2xl border border-border bg-white p-7 transition-colors hover:border-amber-400 ${
                  idx < 3 ? "lg:col-span-2" : "lg:col-span-3"
                } ${idx === services.length - 1 && services.length % 2 === 1 ? "sm:col-span-2" : ""}`}
              >
                <h3 className="font-display text-xl font-semibold text-navy-900">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.tagline[lang]}</p>
                <span className="mt-auto pt-5 text-sm font-semibold text-navy-900 group-hover:text-amber-600">
                  {ui.common.learnMore[lang]}
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-8 inline-block text-sm font-semibold text-navy-900 hover:text-amber-600"
          >
            {copy.seeServices[lang]}
          </Link>
        </Container>
      </section>

      {/* Industries strip */}
      <section className="border-y border-border bg-surface-muted py-16">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy-900">{copy.builtForYou[lang]}</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {industries.slice(0, 12).map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm text-navy-900 transition-colors hover:border-amber-400 hover:bg-amber-100/40"
              >
                {i.name[lang]}
              </Link>
            ))}
            <Link
              href="/industries"
              className="rounded-full bg-navy-900 px-4 py-2 text-sm font-medium text-white hover:bg-navy-800"
            >
              {ui.common.seeAllIndustries[lang]}
            </Link>
          </div>
        </Container>
      </section>

      <ContactCta title={copy.finalCtaTitle} body={copy.finalCtaBody} formLink />
    </>
  );
}
