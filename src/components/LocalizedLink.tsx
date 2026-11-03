"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLanguage } from "@/lib/language-context";
import { localizePath } from "@/lib/i18n";

// Drop-in replacement for next/link: internal paths ("/services") automatically get
// the "/es" prefix on Spanish pages. External, tel:, sms: and # links pass through.
export function Link({ href, ...props }: ComponentProps<typeof NextLink> & { href: string }) {
  const { lang } = useLanguage();
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  return <NextLink href={isInternal ? localizePath(lang, href) : href} {...props} />;
}
