"use client";

import { Container } from "@/components/Container";
import { ContactCta } from "@/components/ContactCta";
import { faqs } from "@/data/faq";
import { useLanguage } from "@/lib/language-context";

const copy = {
  title: { en: "Frequently asked questions", es: "Preguntas frecuentes" },
  subtitle: {
    en: "Straight answers to the questions owners ask us most.",
    es: "Respuestas claras a lo que más nos preguntan los dueños de negocio.",
  },
  stillHaveQuestion: { en: "Still have a question?", es: "¿Todavía tienes una pregunta?" },
  askDirectly: {
    en: "Just ask. Call or text us and we'll answer whatever isn't covered here.",
    es: "Solo pregunta. Llámanos o escríbenos y te respondemos lo que no esté aquí.",
  },
};

export function FaqContent() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">{copy.title[lang]}</h1>
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
                  <span className="shrink-0 text-amber-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{faq.answer[lang]}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta title={copy.stillHaveQuestion} body={copy.askDirectly} tone="light" />
    </>
  );
}
