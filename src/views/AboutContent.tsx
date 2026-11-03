"use client";

import { Container } from "@/components/Container";
import { ContactCta } from "@/components/ContactCta";
import { useLanguage } from "@/lib/language-context";

const copy = {
  label: { en: "About us", es: "Nosotros" },
  title: {
    en: "We help small businesses grow.",
    es: "Ayudamos a los negocios pequeños a crecer.",
  },
  subtitle: {
    en: "And we make technology simple for the people running them.",
    es: "Y hacemos la tecnología sencilla para quienes los dirigen.",
  },
  whyTitle: { en: "Why we do this", es: "Por qué lo hacemos" },
  why: [
    {
      en: "Small businesses do real work. They fix cars, clean teeth, build roofs and serve their community every day.",
      es: "Los negocios pequeños hacen trabajo de verdad. Arreglan autos, cuidan dientes, construyen techos y sirven a su comunidad todos los días.",
    },
    {
      en: "But the online side keeps a lot of them stuck: the website, Google, tracking, reviews. Most owners don't have time to learn all of it, and they shouldn't need to.",
      es: "Pero la parte digital frena a muchos: el sitio web, Google, las métricas, las reseñas. La mayoría de los dueños no tiene tiempo de aprender todo eso, y no debería tener que hacerlo.",
    },
    {
      en: "We built Delta Solutions to handle it for them.",
      es: "Creamos Delta Solutions para encargarnos de eso por ellos.",
    },
  ],
  goalTitle: { en: "Our goal", es: "Nuestra meta" },
  goal: {
    en: "Help small businesses grow, and make technology simple for people who aren't tech savvy. You focus on your business. We take care of the tech.",
    es: "Ayudar a los negocios pequeños a crecer y hacer la tecnología sencilla para quienes no son expertos. Tú te enfocas en tu negocio. Nosotros nos encargamos de la tecnología.",
  },
  howTitle: { en: "How we work", es: "Cómo trabajamos" },
  how: [
    {
      title: { en: "We talk like people", es: "Hablamos como personas" },
      body: {
        en: "Not like an agency. No jargon, no runaround. You can always call or text us.",
        es: "No como una agencia. Sin palabras raras, sin vueltas. Siempre puedes llamarnos o escribirnos.",
      },
    },
    {
      title: { en: "We explain everything", es: "Te explicamos todo" },
      body: {
        en: "We tell you what we're doing and why, in plain words.",
        es: "Te decimos qué estamos haciendo y por qué, con palabras sencillas.",
      },
    },
    {
      title: { en: "You own everything we build", es: "Todo lo que hacemos es tuyo" },
      body: {
        en: "Every account and asset is created under your own email. If you ever leave, you keep it all.",
        es: "Cada cuenta y cada archivo se crean bajo tu propio correo. Si algún día te vas, te quedas con todo.",
      },
    },
    {
      title: { en: "A monthly report you'll understand", es: "Un reporte mensual que sí entiendes" },
      body: {
        en: "What happened, what it means and what to do next, including what happens to your calls: missed calls, busy times and how long calls last.",
        es: "Qué pasó, qué significa y qué hacer después, incluyendo qué pasa con tus llamadas: perdidas, horas pico y cuánto duran.",
      },
    },
  ],
  teammateTitle: { en: "A teammate, not a vendor", es: "Un compañero de equipo, no un proveedor" },
  teammate: {
    en: "We only win when your business grows. That's why we care about your calls and your customers, not just your website.",
    es: "Solo ganamos cuando tu negocio crece. Por eso nos importan tus llamadas y tus clientes, no solo tu sitio web.",
  },
  ctaTitle: { en: "Let's talk about your business", es: "Hablemos de tu negocio" },
  ctaBody: {
    en: "Call or text us. We'll listen first, then tell you honestly how we can help.",
    es: "Llámanos o escríbenos. Primero te escuchamos y luego te decimos con honestidad cómo podemos ayudarte.",
  },
};

export function AboutContent() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">{copy.label[lang]}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{copy.title[lang]}</h1>
          <p className="mt-5 text-lg text-white/70">{copy.subtitle[lang]}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">{copy.whyTitle[lang]}</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-navy-900/80">
              {copy.why.map((p) => (
                <p key={p.en}>{p[lang]}</p>
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl font-semibold text-navy-900">{copy.goalTitle[lang]}</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-900/80">{copy.goal[lang]}</p>
          </div>

          <div className="rounded-2xl border border-amber-400/30 bg-navy-950 p-8 text-white">
            <h2 className="font-display text-xl font-semibold">{copy.teammateTitle[lang]}</h2>
            <p className="mt-3 leading-relaxed text-white/75">{copy.teammate[lang]}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">{copy.howTitle[lang]}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {copy.how.map((item) => (
              <div key={item.title.en} className="rounded-2xl border border-border bg-white p-7">
                <h3 className="font-display text-lg font-semibold text-navy-900">{item.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body[lang]}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta title={copy.ctaTitle} body={copy.ctaBody} />
    </>
  );
}
