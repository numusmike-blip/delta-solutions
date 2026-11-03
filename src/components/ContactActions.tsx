"use client";

import { Phone, MessageSquareText } from "lucide-react";
import { Flag } from "./Flag";
import { WhatsAppIcon } from "./icons";
import { telHref, smsHref, waHref } from "@/lib/contact-links";
import { useLanguage, useContactNumbers } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

type Tone = "dark" | "light";

// Call / Text / WhatsApp buttons for every number the current language shows.
// EN: US number only. ES: US number first (main, larger), then the Mexico number.
export function ContactActions({ tone = "light", className = "" }: { tone?: Tone; className?: string }) {
  const { lang } = useLanguage();
  const { numbers } = useContactNumbers();
  const showLabels = numbers.length > 1;

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {numbers.map((n, i) => {
        const main = i === 0;
        const btn = `inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors sm:w-auto`;
        const primary =
          tone === "dark"
            ? "bg-amber-500 text-navy-950 hover:bg-amber-400"
            : "bg-navy-900 text-white hover:bg-navy-800";
        const secondary =
          tone === "dark"
            ? "border border-white/25 text-white hover:bg-white/10"
            : "border border-navy-900/20 text-navy-900 hover:bg-navy-50";

        return (
          <div key={n.e164}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <Flag country={n.flag} />
              <a
                href={telHref(n)}
                className={`font-display font-semibold tracking-tight hover:underline ${
                  main ? "text-2xl" : "text-lg"
                } ${tone === "dark" ? "text-white" : "text-navy-900"}`}
              >
                {n.display}
              </a>
              {showLabels && (
                <span
                  className={`text-xs font-medium uppercase tracking-wider ${
                    tone === "dark" ? "text-white/50" : "text-muted"
                  }`}
                >
                  {main ? ui.contact.mainNumber[lang] : ui.contact.mexicoNumber[lang]}
                </span>
              )}
            </div>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={telHref(n)} className={`${btn} ${main ? primary : secondary}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                {ui.contact.call[lang]}
              </a>
              <a href={smsHref(n, lang)} className={`${btn} ${secondary}`}>
                <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                {ui.contact.text[lang]}
              </a>
              {n.whatsapp && (
                <a
                  href={waHref(n, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btn} ${secondary}`}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {ui.contact.whatsapp[lang]}
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
