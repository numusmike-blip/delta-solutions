"use client";

import { site, whatsappHref, smsHref } from "@/data/site";
import { useLanguage } from "@/lib/language-context";
import { Flag } from "./Flag";

const channelLabel = {
  whatsapp: "WhatsApp",
  sms: { en: "Text / SMS", es: "Mensaje de texto" },
};

export function PhoneNumbers({ className = "" }: { className?: string }) {
  const { lang } = useLanguage();

  const entries = [
    { ...site.phones.mx, href: whatsappHref(lang), label: channelLabel.whatsapp },
    { ...site.phones.us, href: smsHref(lang), label: channelLabel.sms[lang] },
  ];

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {entries.map((entry) => (
        <a
          key={entry.number}
          href={entry.href}
          className="group flex items-center gap-3 text-sm"
        >
          <Flag country={entry.flag as "us" | "mx"} />
          <span className="font-medium group-hover:underline">{entry.display}</span>
          <span className="text-xs opacity-60">({entry.label})</span>
        </a>
      ))}
    </div>
  );
}
