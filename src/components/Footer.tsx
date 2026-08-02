import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { site } from "@/data/site";
import { services } from "@/data/services";

const columns = [
  {
    heading: "What we bring to the table",
    links: services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About Miguel" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/industries", label: "Industries We Serve" },
      { href: "/case-studies", label: "Results" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-950 text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo theme="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {site.tagline} — a teammate for businesses in {site.city}, not another
            vendor billing you whether the phone rings or not.
          </p>
          <div className="mt-6 flex gap-4 text-sm text-white/60">
            <a href={site.social.facebook} className="hover:text-white">
              Facebook
            </a>
            <a href={site.social.instagram} className="hover:text-white">
              Instagram
            </a>
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
        <Container className="flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Built and run by {site.founder} —{" "}
            {site.city}, {site.region}.
          </p>
          <div className="flex gap-5">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
