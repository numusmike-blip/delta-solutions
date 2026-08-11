"use client";

import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { PhoneNumbers } from "./PhoneNumbers";
import { site, siteCopy } from "@/data/site";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

const footerCopy = {
  whatWeBring: { en: "What we bring to the table", es: "Lo que ofrecemos" },
  company: { en: "Company", es: "Empresa" },
  aboutMiguel: { en: "About Miguel", es: "Sobre Miguel" },
  footerTagline: {
    en: "A teammate for the businesses we work with, not another vendor billing you whether the phone rings or not.",
    es: "Un compañero de equipo para los negocios con los que trabajamos, no otro proveedor que te cobra suene o no el teléfono.",
  },
  builtAndRun: { en: "Built and run by", es: "Construido y dirigido por" },
  in: { en: "in", es: "en" },
};

export function Footer() {
  const { lang } = useLanguage();

  const columns = [
    {
      heading: footerCopy.whatWeBring[lang],
      links: services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
    },
    {
      heading: footerCopy.company[lang],
      links: [
        { href: "/about", label: footerCopy.aboutMiguel[lang] },
        { href: "/how-it-works", label: ui.nav.howItWorks[lang] },
        { href: "/industries", label: ui.nav.industries[lang] },
        { href: "/faq", label: ui.nav.faq[lang] },
      ],
    },
  ];

  return (
    <footer className="mt-24 bg-navy-950 text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo theme="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {siteCopy.tagline[lang]}. {footerCopy.footerTagline[lang]}
          </p>
          <div className="mt-6 flex gap-4 text-sm text-white/60">
            <a href={site.linkedin} className="hover:text-white">
              LinkedIn
            </a>
            {site.social.facebook && (
              <a href={site.social.facebook} className="hover:text-white">
                Facebook
              </a>
            )}
            {site.social.instagram && (
              <a href={site.social.instagram} className="hover:text-white">
                Instagram
              </a>
            )}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="text-sm font-semibold text-white/90">{col.heading}</h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {footerCopy.builtAndRun[lang]}{" "}
            {site.founder} {footerCopy.in[lang]} {site.city}, {site.region}.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <PhoneNumbers className="flex-row gap-5 text-white/70" />
            <a href={`mailto:${site.email}?cc=${site.emailCc}`} className="hover:text-white">
              {site.email}
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
