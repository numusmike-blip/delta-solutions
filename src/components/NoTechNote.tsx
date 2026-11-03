"use client";

import { Smile } from "lucide-react";
import { siteCopy } from "@/data/site";
import { useLanguage } from "@/lib/language-context";

// Short "No tech knowledge needed" reassurance shown on Home, Services and How It Works.
export function NoTechNote({ className = "" }: { className?: string }) {
  const { lang } = useLanguage();
  return (
    <div className={`flex gap-4 rounded-2xl border border-amber-400/40 bg-amber-100/40 p-6 ${className}`}>
      <Smile className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" aria-hidden="true" />
      <div>
        <p className="font-display text-lg font-semibold text-navy-900">
          {siteCopy.noTechNeeded.title[lang]}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-navy-900/75">{siteCopy.noTechNeeded.body[lang]}</p>
      </div>
    </div>
  );
}
