"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone } from "lucide-react";
import { Container } from "./Container";
import { LogoImage } from "./Logo";
import { Link } from "./LocalizedLink";
import { useLanguage, useContactNumbers, type Language } from "@/lib/language-context";
import { localizePath, switchLanguagePath } from "@/lib/i18n";
import { ui } from "@/data/ui-strings";
import { telHref } from "@/lib/contact-links";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang } = useLanguage();
  const { main } = useContactNumbers();

  const navLinks = [
    { href: "/", label: ui.nav.home[lang] },
    { href: "/services", label: ui.nav.services[lang] },
    { href: "/how-it-works", label: ui.nav.howItWorks[lang] },
    { href: "/industries", label: ui.nav.industries[lang] },
    { href: "/about", label: ui.nav.about[lang] },
    { href: "/faq", label: ui.nav.faq[lang] },
    { href: "/contact", label: ui.nav.contact[lang] },
  ];

  function isActive(href: string) {
    const full = localizePath(lang, href);
    if (href === "/") return pathname === full;
    return pathname === full || pathname.startsWith(full + "/");
  }

  const callButton = (
    <a
      href={telHref(main)}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-sm shadow-amber-500/20 transition-colors hover:bg-amber-400"
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      {ui.contact.call[lang]}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <LogoImage />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href) ? "text-navy-900" : "text-muted hover:text-navy-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageToggle lang={lang} pathname={pathname} />
          {callButton}
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageToggle lang={lang} pathname={pathname} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-md text-navy-900"
            aria-label={lang === "es" ? "Abrir menú" : "Toggle menu"}
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
        <div className="border-t border-border bg-white xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-navy-900 hover:bg-navy-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 [&>a]:w-full [&>a]:py-3.5">{callButton}</div>
          </Container>
        </div>
      )}
    </header>
  );
}

// A real link to the same page in the other language. EN and ES use separate root
// layouts (so each gets its own <html lang>), which means switching is a full page load.
function LanguageToggle({ lang, pathname }: { lang: Language; pathname: string }) {
  const target: Language = lang === "en" ? "es" : "en";
  return (
    <a
      href={switchLanguagePath(pathname, target)}
      hrefLang={target}
      className="flex min-h-9 items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-navy-900 hover:border-amber-400"
      aria-label={target === "es" ? "Ver en español" : "View in English"}
    >
      <span className={lang === "en" ? "text-navy-900" : "text-muted"}>EN</span>
      <span className="text-muted">/</span>
      <span className={lang === "es" ? "text-navy-900" : "text-muted"}>ES</span>
    </a>
  );
}
