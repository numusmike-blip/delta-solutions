"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { waHref } from "@/lib/contact-links";
import { useLanguage, useContactNumbers } from "@/lib/language-context";
import { WhatsAppIcon } from "./icons";

const copy = {
  label: { en: "Message us on WhatsApp", es: "Escríbenos por WhatsApp" },
  dismiss: { en: "Hide WhatsApp button", es: "Ocultar botón de WhatsApp" },
};

const STORAGE_KEY = "delta-hide-whatsapp";

// Bottom-right WhatsApp button. Always the US number, on both languages.
// On mobile it can be hidden; it stays hidden for the rest of the visit.
export function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const { floating } = useContactNumbers();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === "1") setDismissed(true);
    } catch {
      // Storage can be blocked (private mode); the button simply shows.
    }
  }, []);

  function dismiss() {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  if (dismissed) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-1.5">
      <button
        type="button"
        onClick={dismiss}
        aria-label={copy.dismiss[lang]}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900/80 text-white shadow-md hover:bg-navy-900 sm:hidden"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
      <a
        href={waHref(floating, lang)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={copy.label[lang]}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </div>
  );
}
