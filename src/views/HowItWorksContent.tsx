"use client";

import { Container } from "@/components/Container";
import { ContactCta } from "@/components/ContactCta";
import { NoTechNote } from "@/components/NoTechNote";
import { DashboardImage } from "@/components/DashboardImage";
import { gscShot } from "@/data/dashboards";
import { useLanguage } from "@/lib/language-context";

type Step = {
  title: { en: string; es: string };
  body: { en: string; es: string };
  showReport?: boolean;
};

const steps: Step[] = [
  {
    title: { en: "We talk", es: "Platicamos" },
    body: {
      en: "You call or text us. We listen to how your business works, what's going well, and what's getting in the way. No forms, no tech talk.",
      es: "Nos llamas o nos escribes. Escuchamos cómo funciona tu negocio, qué va bien y qué te está frenando. Sin formularios, sin tecnicismos.",
    },
  },
  {
    title: { en: "Your email, your accounts", es: "Tu correo, tus cuentas" },
    body: {
      en: "We start with an email address you own, either one you already use or a new one we set up together. Your website, Google profile and every other account are created under it. They're yours from day one.",
      es: "Empezamos con un correo que te pertenece, ya sea el que ya usas o uno nuevo que configuramos juntos. Tu sitio web, tu perfil de Google y todas las demás cuentas se crean ahí. Son tuyas desde el primer día.",
    },
  },
  {
    title: { en: "Your website and Google profile go live", es: "Tu sitio web y tu perfil de Google salen al aire" },
    body: {
      en: "We build your website, set up your Google Business Profile (what people see when they search for you), and turn on tracking so we can see every visit and call.",
      es: "Creamos tu sitio web, configuramos tu perfil de Google (lo que la gente ve cuando te busca) y activamos el seguimiento para ver cada visita y cada llamada.",
    },
  },
  {
    title: { en: "We find out where you stand", es: "Vemos en dónde estás" },
    body: {
      en: "Before we change anything else, we check how you show up on Google today and what nearby competitors are doing, so we know what to fix first.",
      es: "Antes de cambiar cualquier otra cosa, revisamos cómo apareces hoy en Google y qué hacen tus competidores cercanos, para saber qué arreglar primero.",
    },
  },
  {
    title: { en: "Your monthly report", es: "Tu reporte mensual" },
    body: {
      en: "Every month you get a report in plain words: how people found you, how many called, and what happened to those calls (missed calls, busy times vs. your staff, how long calls last), plus what your reviews are saying and what we'll do next.",
      es: "Cada mes recibes un reporte con palabras sencillas: cómo te encontró la gente, cuántos llamaron y qué pasó con esas llamadas (perdidas, horas pico vs. tu personal, cuánto duran), además de lo que dicen tus reseñas y qué haremos después.",
    },
    showReport: true,
  },
  {
    title: { en: "Steady growth", es: "Crecimiento constante" },
    body: {
      en: "We keep improving your website and Google presence month after month, and handle design work like flyers and business cards through Delta Studio.",
      es: "Seguimos mejorando tu sitio web y tu presencia en Google mes a mes, y nos encargamos del diseño, como volantes y tarjetas, con Delta Studio.",
    },
  },
  {
    title: { en: "Ads, once you're ready", es: "Anuncios, cuando estés listo" },
    body: {
      en: "After about 90 days of organic work, if ads make sense for your business, we turn on Delta Ads. Your ads then send people to a website that already works.",
      es: "Después de unos 90 días de trabajo orgánico, si los anuncios tienen sentido para tu negocio, activamos Delta Ads. Así tus anuncios llevan a la gente a un sitio que ya funciona.",
    },
  },
];

const copy = {
  title: { en: "How it works", es: "Cómo funciona" },
  subtitle: {
    en: "No surprises. Here's exactly what happens, from the first call to a business that's easy to find and easy to call.",
    es: "Sin sorpresas. Esto es exactamente lo que pasa, desde la primera llamada hasta un negocio fácil de encontrar y fácil de llamar.",
  },
  exampleLabel: { en: "Example dashboard view", es: "Ejemplo de panel" },
  ctaTitle: { en: "Ready for step one?", es: "¿Listo para el primer paso?" },
  ctaBody: {
    en: "Call or text us. That's all it takes to get started.",
    es: "Llámanos o escríbenos. Es todo lo que se necesita para empezar.",
  },
};

export function HowItWorksContent() {
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
          <NoTechNote className="mb-14" />
          <ol className="space-y-12">
            {steps.map((s, i) => (
              <li key={s.title.en} className="flex gap-6">
                <span className="font-display text-2xl font-semibold text-amber-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-xl font-semibold text-navy-900">{s.title[lang]}</h2>
                  <p className="mt-2 leading-relaxed text-muted">{s.body[lang]}</p>
                  {s.showReport && (
                    <div className="mt-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-600">
                        {copy.exampleLabel[lang]}
                      </p>
                      <DashboardImage shot={gscShot} sizes="(min-width: 768px) 680px, 100vw" />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ContactCta title={copy.ctaTitle} body={copy.ctaBody} />
    </>
  );
}
