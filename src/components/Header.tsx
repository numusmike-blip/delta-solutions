"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { LogoImage } from "./Logo";
import { Button } from "./Button";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";
import { whatsappHref } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggle } = useLanguage();

  const navLinks = [
    { href: "/services", label: ui.nav.services[lang] },
    { href: "/pricing", label: ui.nav.pricing[lang] },
    { href: "/industries", label: ui.nav.industries[lang] },
    { href: "/how-it-works", label: ui.nav.howItWorks[lang] },
    { href: "/about", label: ui.nav.about[lang] },
    { href: "/faq", label: ui.nav.faq[lang] },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <LogoImage />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-navy-900" : "text-muted hover:text-navy-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle lang={lang} onToggle={toggle} />
          <Button href={whatsappHref(lang)} className="text-sm">
            {ui.nav.messageUs[lang]}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle lang={lang} onToggle={toggle} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-navy-900"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-navy-900 hover:bg-navy-50"
              >
                {link.label}
              </Link>
            ))}
            <Button href={whatsappHref(lang)} className="mt-2 w-full">
              {ui.nav.messageUs[lang]}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

function LanguageToggle({
  lang,
  onToggle,
}: {
  lang: "en" | "es";
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-navy-900 hover:border-amber-400"
      aria-label="Toggle language / Cambiar idioma"
    >
      <span className={lang === "en" ? "text-navy-900" : "text-muted"}>EN</span>
      <span className="text-muted">/</span>
      <span className={lang === "es" ? "text-navy-900" : "text-muted"}>ES</span>
    </button>
  );
}
