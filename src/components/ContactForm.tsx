"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/language-context";

const copy = {
  yourName: { en: "Your name", es: "Tu nombre" },
  businessName: { en: "Business name", es: "Nombre del negocio" },
  phone: { en: "Phone", es: "Teléfono" },
  email: { en: "Email", es: "Correo" },
  helpWith: {
    en: "What are you looking for help with?",
    es: "¿Con qué necesitas ayuda?",
  },
  sendMessage: { en: "Send message", es: "Enviar mensaje" },
  sentConfirmation: {
    en: "Your email app should be opening now with your message ready to send. If it didn't, email us directly at",
    es: "Tu aplicación de correo debería estar abriéndose con tu mensaje listo para enviar. Si no fue así, escríbenos directamente a",
  },
};

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { lang } = useLanguage();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const business = String(form.get("business") ?? "");
    const phone = String(form.get("phone") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`New inquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nBusiness: ${business}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={copy.yourName[lang]} name="name" required />
        <Field label={copy.businessName[lang]} name="business" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={copy.phone[lang]} name="phone" type="tel" required />
        <Field label={copy.email[lang]} name="email" type="email" required />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-900">
          {copy.helpWith[lang]}
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-amber-400"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-amber-400"
      >
        {copy.sendMessage[lang]}
      </button>
      {sent && (
        <p className="text-sm text-muted">
          {copy.sentConfirmation[lang]}{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-navy-900 underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-amber-400"
      />
    </div>
  );
}
