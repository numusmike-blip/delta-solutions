"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { faqs } from "@/data/faq";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";
import { whatsappHref } from "@/data/site";

const copy = {
  title: { en: "Frequently asked questions", es: "Preguntas frecuentes" },
  subtitle: {
    en: "The honest answers to the questions that usually come up on the first call.",
    es: "Las respuestas honestas a las preguntas que suelen surgir en la primera llamada.",
  },
  stillHaveQuestion: { en: "Still have a question?", es: "¿Todavía tienes una pregunta?" },
  askDirectly: {
    en: "Ask it directly. Book a call and we'll cover whatever isn't answered here.",
    es: "Pregúntanos directamente. Agenda una llamada y cubrimos lo que no esté respondido aquí.",
  },
};

export function FaqContent() {
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
        <Container className="max-w-3xl">
          <div className="divide-y divide-border rounded-2xl border border-border bg-white">
            {faqs.map((faq) => (
              <details key={faq.question.en} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-navy-900">
                  {faq.question[lang]}
                  <span className="shrink-0 text-amber-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{faq.answer[lang]}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              {copy.stillHaveQuestion[lang]}
            </h2>
            <p className="mt-2 max-w-lg text-muted">{copy.askDirectly[lang]}</p>
          </div>
          <Button href={whatsappHref(lang)}>{ui.nav.messageUs[lang]}</Button>
        </Container>
      </section>
    </>
  );
}
