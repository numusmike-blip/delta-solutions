"use client";

import { ClipboardList } from "lucide-react";
import { Container } from "./Container";
import { Link } from "./LocalizedLink";
import { ContactActions } from "./ContactActions";
import { useLanguage } from "@/lib/language-context";
import type { Bilingual } from "@/lib/i18n";

const formCopy = {
  label: { en: "Or tell us about your business in a 1-minute form", es: "O cuéntanos de tu negocio en un formulario de 1 minuto" },
};

const defaults = {
  title: { en: "Let's talk about your business", es: "Hablemos de tu negocio" },
  body: {
    en: "Call or text us. No tech talk, no pressure. We'll listen and tell you honestly what would help.",
    es: "Llámanos o escríbenos. Sin tecnicismos, sin presión. Te escuchamos y te decimos con honestidad qué te ayudaría.",
  },
};

// Closing call-to-action band used at the bottom of most pages.
export function ContactCta({
  title = defaults.title,
  body = defaults.body,
  tone = "dark",
  formLink = false,
}: {
  title?: Bilingual;
  body?: Bilingual;
  tone?: "dark" | "light";
  // Adds a link to the intake form on the Contact page, beside the call/text options.
  formLink?: boolean;
}) {
  const { lang } = useLanguage();
  const dark = tone === "dark";

  return (
    <section className={dark ? "bg-navy-950 py-20 text-white" : "border-t border-border bg-surface-muted py-16"}>
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className={`font-display text-2xl font-semibold sm:text-3xl ${dark ? "" : "text-navy-900"}`}>
            {title[lang]}
          </h2>
          <p className={`mt-2 max-w-lg ${dark ? "text-white/70" : "text-muted"}`}>{body[lang]}</p>
          {formLink && (
            <Link
              href="/contact#intake"
              className={`mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                dark ? "border-amber-400/60 text-amber-300 hover:bg-white/10" : "border-navy-900/20 text-navy-900 hover:bg-navy-50"
              }`}
            >
              <ClipboardList className="h-4 w-4" aria-hidden="true" />
              {formCopy.label[lang]}
            </Link>
          )}
        </div>
        <ContactActions tone={tone} />
      </Container>
    </section>
  );
}
