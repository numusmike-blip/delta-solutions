"use client";

import { Container } from "./Container";
import { LogoImageLight } from "./Logo";
import { Link } from "./LocalizedLink";
import { ContactActions } from "./ContactActions";
import { site, siteCopy } from "@/data/site";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/data/ui-strings";

const footerCopy = {
  whatWeDo: { en: "What we do", es: "Lo que hacemos" },
  company: { en: "Company", es: "Empresa" },
  talkToUs: { en: "Call or text us", es: "Llámanos o escríbenos" },
  footerTagline: {
    en: "We help small businesses grow by handling the technology, so you can focus on running your business.",
    es: "Ayudamos a los negocios pequeños a crecer encargándonos de la tecnología, para que tú te enfoques en tu negocio.",
  },
};

export function Footer() {
  const { lang } = useLanguage();

  const columns = [
    {
      heading: footerCopy.whatWeDo[lang],
      links: services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
    },
    {
      heading: footerCopy.company[lang],
      links: [
        { href: "/", label: ui.nav.home[lang] },
        { href: "/services", label: ui.nav.services[lang] },
        { href: "/how-it-works", label: ui.nav.howItWorks[lang] },
        { href: "/industries", label: ui.nav.industries[lang] },
        { href: "/about", label: ui.nav.about[lang] },
        { href: "/faq", label: ui.nav.faq[lang] },
        { href: "/contact", label: ui.nav.contact[lang] },
      ],
    },
  ];

  return (
    // Extra bottom padding on mobile so the floating WhatsApp button never covers footer content.
    <footer className="mt-24 bg-navy-950 pb-20 text-white sm:pb-0">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" aria-label={ui.nav.home[lang]} className="inline-block">
            <LogoImageLight />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {siteCopy.tagline[lang]}. {footerCopy.footerTagline[lang]}
          </p>
          <h3 className="mt-8 text-sm font-semibold text-white/90">{footerCopy.talkToUs[lang]}</h3>
          <ContactActions tone="dark" className="mt-4" />
          {(site.social.facebook || site.social.instagram) && (
            <div className="mt-6 flex gap-4 text-sm text-white/60">
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
          )}
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
        <Container className="py-6 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {site.name}. {siteCopy.signatureLine[lang]}
          </p>
        </Container>
      </div>
    </footer>
  );
}
