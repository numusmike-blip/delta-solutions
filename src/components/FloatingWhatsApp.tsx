"use client";

import { useEffect, useRef, useState } from "react";
import { whatsappHref } from "@/data/site";
import { useLanguage } from "@/lib/language-context";

const copy = {
  label: { en: "Message us on WhatsApp", es: "Escríbenos por WhatsApp" },
  dismiss: { en: "Hide", es: "Ocultar" },
};

const REAPPEAR_DELAY_MS = 8000;

export function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const [dismissed, setDismissed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function dismiss() {
    setDismissed(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setDismissed(false), REAPPEAR_DELAY_MS);
  }

  useEffect(() => {
    if (!dismissed) return;
    let lastY = window.scrollY;
    function onScroll() {
      if (Math.abs(window.scrollY - lastY) > 150) {
        setDismissed(false);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-1.5">
      <button
        type="button"
        onClick={dismiss}
        aria-label={copy.dismiss[lang]}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-900/80 text-xs text-white shadow-md hover:bg-navy-900 sm:hidden"
      >
        ×
      </button>
      <a
        href={whatsappHref(lang)}
        aria-label={copy.label[lang]}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="#fff" aria-hidden="true">
          <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.665 4.523 1.816 6.377L4 29l7.84-1.777A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.357l-.355-.21-4.653 1.055 1.08-4.535-.232-.37A9.71 9.71 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.75 9.07 26.75 15 21.935 24.75 16.004 24.75Zm5.53-7.36c-.303-.152-1.79-.883-2.067-.984-.277-.1-.478-.152-.68.152-.202.303-.782.984-.958 1.187-.176.202-.353.227-.655.076-.303-.152-1.278-.47-2.434-1.502-.9-.803-1.508-1.796-1.685-2.099-.176-.303-.019-.467.133-.618.136-.136.303-.353.454-.53.152-.176.202-.303.303-.505.101-.202.05-.379-.025-.53-.076-.152-.68-1.64-.932-2.246-.246-.59-.496-.51-.68-.52l-.58-.01c-.202 0-.53.076-.807.379-.278.303-1.06 1.036-1.06 2.526s1.085 2.93 1.236 3.132c.152.202 2.135 3.26 5.174 4.57.723.312 1.287.499 1.727.638.726.231 1.386.198 1.908.12.582-.087 1.79-.732 2.042-1.44.253-.706.253-1.312.177-1.44-.076-.126-.278-.202-.58-.353Z" />
        </svg>
      </a>
    </div>
  );
}
