"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/language-context";

const copy = {
  title: { en: "Let's talk", es: "Hablemos" },
  subtitle: {
    en: "Call, message on WhatsApp, book a call, or send a message below. No sales team in between, just Miguel.",
    es: "Llama, escribe por WhatsApp, agenda una llamada, o manda un mensaje abajo. Sin equipo de ventas de por medio, solo Miguel.",
  },
  reachOutDirectly: { en: "Reach out directly", es: "Contáctanos directamente" },
  fastestWay: {
    en: "The fastest way to reach us. Real answers, no call center.",
    es: "La forma más rápida de contactarnos. Respuestas reales, sin call center.",
  },
  call: { en: "Call", es: "Llamar" },
  messageWhatsapp: { en: "Message on WhatsApp", es: "Escribir por WhatsApp" },
  bookACallTitle: { en: "Book a call", es: "Agenda una llamada" },
  bookACallBody: {
    en: "Pick a time that works for you. 20 minutes, no pressure, just a real conversation.",
    es: "Elige un horario que te funcione. 20 minutos, sin presión, solo una conversación real.",
  },
  openCalendar: { en: "Open booking calendar", es: "Abrir calendario de citas" },
  email: { en: "Email", es: "Correo" },
  basedIn: { en: "Based in", es: "Ubicado en" },
  sendMessage: { en: "Send a message", es: "Enviar un mensaje" },
  sendMessageBody: {
    en: "Tell us a bit about your business and what you're hoping to fix or grow.",
    es: "Cuéntanos un poco sobre tu negocio y qué esperas resolver o hacer crecer.",
  },
};

export function ContactContent() {
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
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-amber-400/30 bg-navy-950 p-8 text-white">
              <h2 className="font-display text-xl font-semibold">
                {copy.reachOutDirectly[lang]}
              </h2>
              <p className="mt-2 text-sm text-white/70">{copy.fastestWay[lang]}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href={`tel:${site.phone}`} className="w-full sm:w-auto">
                  {copy.call[lang]} {site.phoneDisplay}
                </Button>
                <Button
                  href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {copy.messageWhatsapp[lang]}
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-8">
              <h2 className="font-display text-lg font-semibold text-navy-900">
                {copy.bookACallTitle[lang]}
              </h2>
              <p className="mt-2 text-sm text-muted">{copy.bookACallBody[lang]}</p>
              <Button href={site.bookingUrl} variant="secondary" className="mt-5">
                {copy.openCalendar[lang]}
              </Button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-muted">{copy.email[lang]}</p>
                <a href={`mailto:${site.email}`} className="font-medium text-navy-900">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-muted">{copy.basedIn[lang]}</p>
                <p className="font-medium text-navy-900">
                  {site.city}, {site.region}, {site.country}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              {copy.sendMessage[lang]}
            </h2>
            <p className="mt-2 text-sm text-muted">{copy.sendMessageBody[lang]}</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
