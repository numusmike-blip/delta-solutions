"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site, whatsappHref } from "@/data/site";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

const facts = [
  {
    label: { en: "Role", es: "Rol" },
    value: { en: "Your main point of contact", es: "Tu punto de contacto principal" },
  },
  {
    label: { en: "Team experience", es: "Experiencia del equipo" },
    value: {
      en: "11 years in the BPO industry",
      es: "11 años en la industria BPO",
    },
  },
  {
    label: { en: "With computers", es: "Con computadoras" },
    value: {
      en: "Since age 9, learning and building on them",
      es: "Desde los 9 años, aprendiendo y construyendo con ellas",
    },
  },
  {
    label: { en: "Education", es: "Educación" },
    value: {
      en: "Bachelor's degree in International Studies",
      es: "Licenciatura en Estudios Internacionales",
    },
  },
  {
    label: { en: "Coverage", es: "Cobertura" },
    value: { en: "Cross-border, US & Mexico", es: "Transfronterizo, EE. UU. y México" },
  },
];

const copy = {
  aboutLabel: { en: "About", es: "Sobre" },
  subtitle: {
    en: "Your main point of contact at Delta Solutions, backed by years of experience in marketing, client operations, and sales and customer service. No account managers in between.",
    es: "Tu punto de contacto principal en Delta Solutions, respaldado por años de experiencia en marketing, operaciones con clientes, y ventas y servicio al cliente. Sin gerentes de cuenta de por medio.",
  },
  linkedinButton: {
    en: "View full profile on LinkedIn",
    es: "Ver perfil completo en LinkedIn",
  },
  paragraphs: [
    {
      en: "Our team brings 11 years of experience in the BPO industry, most of it inside marketing and client operations, and that is where Delta Solutions actually started. Not as a business plan, but as a frustration. Most marketing companies get paid whether or not they actually move the needle for the business they are working with. That structure does not reward good work. It rewards retention. We did not want to build a company like that.",
      es: "Nuestro equipo trae 11 años de experiencia en la industria BPO, la mayor parte en marketing y operaciones con clientes, y ahí fue donde realmente comenzó Delta Solutions. No como un plan de negocio, sino como una frustración. La mayoría de las empresas de marketing cobran sin importar si realmente mueven la aguja para el negocio con el que trabajan. Esa estructura no recompensa el buen trabajo. Recompensa la retención. No quisimos construir una empresa así.",
    },
    {
      en: "A big part of it came from watching new clients arrive at agencies with no idea where their own website, hosting, or Google account access even was, because it had all been set up under the agency's own accounts. When that agency relationship ended, the business was starting from zero: new domain, no history, no reviews carried over. We decided Delta Solutions would be built the opposite way from day one.",
      es: "Gran parte vino de ver llegar clientes nuevos a agencias sin saber siquiera dónde estaba su propio sitio web, hospedaje o acceso a su cuenta de Google, porque todo se había configurado bajo las cuentas propias de la agencia. Cuando esa relación terminaba, el negocio empezaba desde cero: nuevo dominio, sin historial, sin reseñas que se trasladaran. Decidimos que Delta Solutions se construiría al revés desde el primer día.",
    },
    {
      en: "Miguel Flores, your main point of contact, has been on a computer since he was 9 years old, teaching himself by using and playing on one long before it was part of any job. That early, self-taught curiosity still shapes how the team approaches the technical side of this business. He holds a bachelor's degree in International Studies, which shapes how we think about business across the border. We work with businesses on both sides of the line, and we have seen how differently marketing gets sold depending on which side you are on, and how much of that gap is just packaging, not substance.",
      es: "Miguel Flores, tu punto de contacto principal, ha usado computadoras desde los 9 años, aprendiendo por su cuenta usándolas y jugando en ellas mucho antes de que fueran parte de cualquier trabajo. Esa curiosidad temprana y autodidacta sigue formando cómo el equipo aborda el lado técnico de este negocio. Tiene una licenciatura en Estudios Internacionales, que forma cómo pensamos los negocios a través de la frontera. Trabajamos con negocios de ambos lados de la línea, y hemos visto lo distinto que se vende el marketing dependiendo del lado en el que estés, y cuánto de esa diferencia es solo empaque, no sustancia.",
    },
    {
      en: "Delta Solutions is built to close that gap. Every business partner works directly with Miguel and the team behind him. No outsourced call centers, no handoffs, no getting lost in a queue. If something is not working, you will hear it from someone who actually knows your account, and the team will be the ones fixing it.",
      es: "Delta Solutions está construido para cerrar esa brecha. Cada negocio con el que trabajamos lo hace directamente con Miguel y el equipo detrás de él. Sin call centers subcontratados, sin traspasos, sin perderte en una fila de espera. Si algo no está funcionando, lo escucharás de alguien que realmente conoce tu cuenta, y el equipo será quien lo arregle.",
    },
    {
      en: "The commission structure is not a gimmick either. It is the whole point. If your phone does not ring, we do not get paid what we are supposed to either. That is what “Your Business, Our Investment” actually means here: not a slogan, but the way the business is built.",
      es: "La estructura de comisión tampoco es un truco. Es todo el punto. Si tu teléfono no suena, nosotros tampoco ganamos lo que deberíamos. Eso es lo que realmente significa “Tu Negocio, Nuestra Inversión” aquí: no es un eslogan, es la forma en que está construido el negocio.",
    },
  ],
  ctaTitle: { en: "Let's talk about your business", es: "Hablemos de tu negocio" },
  ctaBody: {
    en: "No pitch, no pressure. Just a conversation about where things stand and whether Delta Solutions is the right fit.",
    es: "Sin presentación, sin presión. Solo una conversación sobre cómo van las cosas y si Delta Solutions es la opción correcta.",
  },
};

export function AboutContent() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            {copy.aboutLabel[lang]}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            {site.founder}
          </h1>
          <p className="mt-5 text-lg text-white/70">{copy.subtitle[lang]}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {facts.map((f) => (
              <div key={f.label.en} className="rounded-xl border border-border bg-surface-muted p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                  {f.label[lang]}
                </p>
                <p className="mt-1 text-sm font-medium text-navy-900">{f.value[lang]}</p>
              </div>
            ))}
            <Button href={site.linkedin} variant="secondary" className="w-full">
              {copy.linkedinButton[lang]}
            </Button>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-navy-900/80">
            {copy.paragraphs.map((p, i) => (
              <p key={i}>{p[lang]}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              {copy.ctaTitle[lang]}
            </h2>
            <p className="mt-2 max-w-lg text-muted">{copy.ctaBody[lang]}</p>
          </div>
          <Button href={whatsappHref(lang)}>{ui.nav.messageUs[lang]}</Button>
        </Container>
      </section>
    </>
  );
}
