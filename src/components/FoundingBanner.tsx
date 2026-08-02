"use client";

import Link from "next/link";
import { foundingMembers } from "@/data/site";
import { useLanguage } from "@/lib/language-context";

const copy = {
  bannerText: {
    en: "We're keeping this personal, with real attention and no outsourcing. That only works for a limited number of businesses at founding rates.",
    es: "Mantenemos esto personal, con atención real y sin subcontratar. Eso solo funciona para un número limitado de negocios a precios de fundador.",
  },
  spotsLeft: {
    en: (n: number) => `${n} businesses left for founding prices →`,
    es: (n: number) => `${n} negocios disponibles a precio de fundador →`,
  },
  founderRates: { en: "Founding member rates", es: "Precios de fundador" },
  spotsLeftHeading: {
    en: (n: number) => `${n} businesses left for founding prices`,
    es: (n: number) => `${n} negocios disponibles a precio de fundador`,
  },
  calloutBody: {
    en: (total: number) =>
      `We're keeping this personal, with real attention, no outsourcing, and no account managers. That only works for the first ${total} businesses we take on at these rates. After that, prices adjust to protect the quality of attention everyone gets, including you.`,
    es: (total: number) =>
      `Mantenemos esto personal, con atención real, sin subcontratar y sin gerentes de cuenta. Eso solo funciona para los primeros ${total} negocios que tomamos a estos precios. Después de eso, los precios se ajustan para proteger la calidad de atención que todos reciben, incluido tú.`,
  },
  spotsFilled: {
    en: (filled: number, total: number) => `${filled} of ${total} founding spots filled`,
    es: (filled: number, total: number) => `${filled} de ${total} lugares de fundador ocupados`,
  },
};

export function FoundingBanner() {
  const { spotsRemaining } = foundingMembers;
  const { lang } = useLanguage();

  return (
    <div className="bg-navy-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-2.5 text-center text-xs font-medium sm:text-sm">
        <span className="text-amber-400">●</span>
        <span>{copy.bannerText[lang]}</span>
        <Link href="/pricing" className="font-semibold text-amber-400 underline underline-offset-2 hover:text-amber-300">
          {copy.spotsLeft[lang](spotsRemaining)}
        </Link>
      </div>
    </div>
  );
}

export function FoundingCallout() {
  const { totalSpots, spotsRemaining } = foundingMembers;
  const { lang } = useLanguage();
  const filled = totalSpots - spotsRemaining;

  return (
    <div className="rounded-2xl border border-amber-400/30 bg-navy-900 p-8 text-white sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
        {copy.founderRates[lang]}
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
        {copy.spotsLeftHeading[lang](spotsRemaining)}
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
        {copy.calloutBody[lang](totalSpots)}
      </p>
      <div className="mt-6 h-2 w-full max-w-sm overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-amber-400"
          style={{ width: `${(filled / totalSpots) * 100}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-white/50">{copy.spotsFilled[lang](filled, totalSpots)}</p>
    </div>
  );
}
