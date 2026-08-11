"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";
import { whatsappHref } from "@/data/site";

const steps = [
  {
    step: "01",
    title: { en: "Dedicated email setup", es: "Configuración de correo dedicado" },
    body: {
      en: "We start with an email address, either one you already use for the business, or a dedicated one we set up together, like marketing@yourbusiness.com. Every account we ever build lives under this address.",
      es: "Empezamos con un correo electrónico, ya sea uno que ya uses para el negocio, o uno dedicado que configuramos juntos, como marketing@tunegocio.com. Cada cuenta que construyamos vive bajo este correo.",
    },
  },
  {
    step: "02",
    title: {
      en: "Accounts created under your ownership",
      es: "Cuentas creadas bajo tu propiedad",
    },
    body: {
      en: "Website, Google Business Profile, GA4, Search Console: all created fresh under that email. Nothing gets built under our accounts and handed to you later. It's yours from the first click.",
      es: "Sitio web, perfil de Google Business, GA4, Search Console: todo creado desde cero bajo ese correo. Nada se construye bajo nuestras cuentas para entregártelo después. Es tuyo desde el primer clic.",
    },
  },
  {
    step: "03",
    title: { en: "Delta Base goes live", es: "Delta Base entra en vivo" },
    body: {
      en: "Your website is built and hosted, your Google presence is claimed and optimized, and tracking is wired up so every call and visit is measurable from day one.",
      es: "Tu sitio web se construye y se hospeda, tu presencia en Google se reclama y optimiza, y el seguimiento se configura para que cada llamada y visita sea medible desde el primer día.",
    },
  },
  {
    step: "04",
    title: { en: "Delta Radar baseline", es: "Línea base de Delta Radar" },
    body: {
      en: "Before we tell you what's working, we establish where you actually stand: rankings, competitors, and the gaps worth closing first.",
      es: "Antes de decirte qué está funcionando, establecemos en dónde realmente estás: posicionamiento, competidores, y las brechas que vale la pena cerrar primero.",
    },
  },
  {
    step: "05",
    title: { en: "Growth phase", es: "Fase de crecimiento" },
    body: {
      en: "Depending on your plan, this is where Delta Social, Delta Studio, and monthly Radar reports kick in: consistent, compounding work instead of one-off pushes.",
      es: "Dependiendo de tu plan, aquí es donde entran Delta Social, Delta Studio y los reportes mensuales de Radar: trabajo consistente y acumulativo en lugar de esfuerzos aislados.",
    },
  },
  {
    step: "06",
    title: { en: "Delta Ads, once it's earned", es: "Delta Ads, cuando se ha ganado" },
    body: {
      en: "After roughly 90 days of organic groundwork, we introduce paid search if it makes sense for your business, so ad spend is working with a proven funnel, not a guess.",
      es: "Después de aproximadamente 90 días de trabajo orgánico, introducimos búsqueda paga si tiene sentido para tu negocio, para que el gasto en anuncios trabaje con un embudo comprobado, no con una suposición.",
    },
  },
];

const copy = {
  title: { en: "How it works", es: "Cómo funciona" },
  subtitle: {
    en: "No black box. Here's exactly what happens from the first conversation to an active, growing presence.",
    es: "Sin caja negra. Esto es exactamente lo que pasa desde la primera conversación hasta una presencia activa y en crecimiento.",
  },
  policyNoteTitle: { en: "A quiet policy note", es: "Una nota de política, sin protagonismo" },
  policyNoteBody: {
    en: "We're selective about who we work with in the same industry and area, so our attention never gets split between businesses competing for the same customer. If we're already working with a business like yours nearby, we'll tell you upfront, no surprises either way.",
    es: "Somos selectivos sobre con quién trabajamos en la misma industria y zona, para que nuestra atención nunca se divida entre negocios que compiten por el mismo cliente. Si ya trabajamos con un negocio como el tuyo cerca, te lo diremos desde el principio, sin sorpresas.",
  },
  ctaTitle: { en: "Ready to start with step one?", es: "¿Listo para empezar con el paso uno?" },
  ctaBody: {
    en: "Book a call and we'll figure out together where your business fits.",
    es: "Agenda una llamada y descubramos juntos dónde encaja tu negocio.",
  },
};

export function HowItWorksContent() {
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
          <ol className="space-y-10">
            {steps.map((s) => (
              <li key={s.step} className="flex gap-6">
                <span className="font-display text-2xl font-semibold text-amber-500">
                  {s.step}
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-navy-900">
                    {s.title[lang]}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted">{s.body[lang]}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-lg font-semibold text-navy-900">
            {copy.policyNoteTitle[lang]}
          </h2>
          <p className="mt-3 text-muted">{copy.policyNoteBody[lang]}</p>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              {copy.ctaTitle[lang]}
            </h2>
            <p className="mt-2 max-w-lg text-white/70">{copy.ctaBody[lang]}</p>
          </div>
          <Button href={whatsappHref(lang)}>{ui.nav.messageUs[lang]}</Button>
        </Container>
      </section>
    </>
  );
}
