"use client";

import { Container } from "@/components/Container";
import { ContactActions } from "@/components/ContactActions";
import { IntakeForm } from "@/components/IntakeForm";
import { useLanguage } from "@/lib/language-context";

const copy = {
  title: { en: "Let's talk", es: "Hablemos" },
  subtitle: {
    en: "No tech talk. Fill out the short form, or just call or text us, and we'll take it from there.",
    es: "Sin tecnicismos. Llena el formulario corto, o solo llámanos o escríbenos, y nosotros nos encargamos del resto.",
  },
  preferToTalk: { en: "Prefer to talk? Call or text us", es: "¿Prefieres hablar? Llámanos o escríbenos" },
  boxBody: {
    en: "Real people, no call center. We reply fast, usually the same day.",
    es: "Personas reales, sin call center. Respondemos rápido, normalmente el mismo día.",
  },
};

export function ContactContent() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">{copy.title[lang]}</h1>
          <p className="mt-5 text-lg text-white/70">{copy.subtitle[lang]}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <IntakeForm />

          <aside className="rounded-2xl border border-amber-400/30 bg-navy-950 p-8 text-white lg:sticky lg:top-24">
            <h2 className="font-display text-xl font-semibold">{copy.preferToTalk[lang]}</h2>
            <p className="mt-2 text-sm text-white/70">{copy.boxBody[lang]}</p>
            <ContactActions tone="dark" className="mt-6" />
          </aside>
        </Container>
      </section>
    </>
  );
}
