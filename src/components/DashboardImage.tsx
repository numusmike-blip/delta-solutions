"use client";

import Image from "next/image";
import { useRef } from "react";
import { X, Maximize2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import type { DashboardShot } from "@/data/dashboards";

const copy = {
  enlarge: { en: "Click to enlarge", es: "Clic para ampliar" },
  close: { en: "Close", es: "Cerrar" },
};

// A dashboard screenshot with caption that opens full-size in a native <dialog>
// (Esc, backdrop click and the close button all dismiss it). No lightbox library.
export function DashboardImage({ shot, sizes }: { shot: DashboardShot; sizes: string }) {
  const { lang } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <figure className="flex flex-col">
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="group relative block overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-amber-500"
        aria-label={`${copy.enlarge[lang]}: ${shot.alt[lang]}`}
      >
        <Image
          src={shot.src}
          alt={shot.alt[lang]}
          width={shot.width}
          height={shot.height}
          sizes={sizes}
          loading="lazy"
          className="h-auto w-full"
        />
        <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-navy-900/80 px-3 py-1.5 text-xs font-medium text-white opacity-90 group-hover:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
          {copy.enlarge[lang]}
        </span>
      </button>
      <figcaption className="mt-3 text-sm leading-relaxed text-muted">{shot.caption[lang]}</figcaption>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
        className="m-auto max-h-[92vh] w-[min(1400px,94vw)] rounded-xl bg-white p-0 backdrop:bg-navy-950/80"
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-navy-900/85 text-white hover:bg-navy-900"
            aria-label={copy.close[lang]}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <Image
            src={shot.src}
            alt={shot.alt[lang]}
            width={shot.width}
            height={shot.height}
            sizes="94vw"
            loading="lazy"
            className="h-auto w-full"
          />
          <p className="px-5 py-4 text-sm text-muted">{shot.caption[lang]}</p>
        </div>
      </dialog>
    </figure>
  );
}
