import type { Metadata } from "next";
import { faqs } from "@/data/faq";
import { FaqContent } from "./FaqContent";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Contracts, qualified calls, commission, account ownership, and how Delta Solutions works with the businesses we partner with.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer.en,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqContent />
    </>
  );
}
