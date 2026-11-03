"use client";

import { useRef, useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { ContactActions } from "./ContactActions";
import { useLanguage } from "@/lib/language-context";
import { FORMSUBMIT_ENDPOINT, INTAKE_SUBJECT } from "@/config/forms";

// Submitted values stay in English so notification emails read the same in both
// languages; only the labels are translated. The `language` field says which page was used.
const contactMethods = [
  { value: "Text", label: { en: "Text", es: "Mensaje de texto" } },
  { value: "Call", label: { en: "Call", es: "Llamada" } },
  { value: "WhatsApp", label: { en: "WhatsApp", es: "WhatsApp" } },
];

const bestTimes = [
  { value: "Morning", label: { en: "Morning", es: "Mañana" } },
  { value: "Afternoon", label: { en: "Afternoon", es: "Tarde" } },
  { value: "Evening", label: { en: "Evening", es: "Noche" } },
];

const serviceOptions = [
  { value: "A website", label: { en: "A website", es: "Un sitio web" } },
  { value: "Showing up on Google", label: { en: "Showing up on Google", es: "Aparecer en Google" } },
  { value: "Getting more calls", label: { en: "Getting more calls", es: "Recibir más llamadas" } },
  { value: "Design and printing", label: { en: "Design and printing", es: "Diseño e impresión" } },
  { value: "Ads", label: { en: "Ads", es: "Anuncios" } },
  { value: "Not sure, help me decide", label: { en: "Not sure, help me decide", es: "No estoy seguro, ayúdenme a decidir" } },
];

const copy = {
  title: { en: "Tell us about your business", es: "Cuéntanos sobre tu negocio" },
  intro: {
    en: "It takes about a minute. We'll get back to you the way you prefer.",
    es: "Toma como un minuto. Te contactamos por el medio que prefieras.",
  },
  name: { en: "Your name", es: "Tu nombre" },
  business: { en: "Business name", es: "Nombre de tu negocio" },
  phone: { en: "Phone number", es: "Número de teléfono" },
  email: { en: "Email", es: "Correo electrónico" },
  optional: { en: "(optional)", es: "(opcional)" },
  method: { en: "How should we reach you?", es: "¿Cómo te contactamos?" },
  bestTime: { en: "Best time to reach you", es: "Mejor horario para contactarte" },
  services: { en: "What do you need help with?", es: "¿En qué necesitas ayuda?" },
  message: { en: "Anything else we should know?", es: "¿Algo más que debamos saber?" },
  submit: { en: "Send", es: "Enviar" },
  sending: { en: "Sending...", es: "Enviando..." },
  privacy: {
    en: "We only use this to contact you about your request.",
    es: "Solo usamos esto para contactarte sobre tu solicitud.",
  },
  required: {
    name: { en: "Please tell us your name.", es: "Por favor escribe tu nombre." },
    business: { en: "Please tell us your business name.", es: "Por favor escribe el nombre de tu negocio." },
    phone: { en: "Please enter a phone number we can reach you at.", es: "Por favor escribe un teléfono donde podamos contactarte." },
  },
  fixErrors: { en: "Please check the fields marked below.", es: "Por favor revisa los campos marcados." },
  successTitle: { en: "Thanks, we got it.", es: "Gracias, lo recibimos." },
  successBody: { en: "We'll call or text you soon.", es: "Te llamaremos o escribiremos pronto." },
  successContact: { en: "Need us sooner? Call or text:", es: "¿Nos necesitas antes? Llama o escribe:" },
  errorBody: {
    en: "Something went wrong. Please call or text us instead:",
    es: "Algo salió mal. Por favor llámanos o escríbenos:",
  },
};

type Status = "idle" | "sending" | "success" | "error";
type RequiredField = "name" | "business" | "phone";

function validate(data: FormData): RequiredField[] {
  const missing: RequiredField[] = [];
  if (!String(data.get("name") ?? "").trim()) missing.push("name");
  if (!String(data.get("business") ?? "").trim()) missing.push("business");
  // Any phone format is fine; just make sure there are enough digits to call back.
  if (String(data.get("phone") ?? "").replace(/\D/g, "").length < 7) missing.push("phone");
  return missing;
}

export function IntakeForm({ id = "intake" }: { id?: string }) {
  const { lang } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<RequiredField[]>([]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const missing = validate(data);
    setErrors(missing);
    if (missing.length > 0) {
      formRef.current?.querySelector<HTMLElement>(`[name="${missing[0]}"]`)?.focus();
      return;
    }

    if (!FORMSUBMIT_ENDPOINT) {
      console.warn(
        "[IntakeForm] NEXT_PUBLIC_FORMSUBMIT_ENDPOINT is not set, so the form can't be sent. " +
          "Add it to .env.local (local) or the hosting environment variables, then rebuild."
      );
      setStatus("error");
      return;
    }

    // Every field as a string; the checked "services" boxes become one comma-separated value.
    const payload: Record<string, string> = {};
    data.forEach((value, key) => {
      if (key !== "services") payload[key] = String(value);
    });
    payload.services = data.getAll("services").map(String).join(", ");
    payload.language = lang;
    payload._subject = INTAKE_SUBJECT;
    payload._template = "table";
    payload._captcha = "false";
    payload._honey = String(data.get("_honey") ?? "");

    setStatus("sending");

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await res.json().catch(() => null)) as { success?: string | boolean } | null;
      // FormSubmit answers { success: "true" } (a string) when the message was accepted.
      if (!res.ok || String(result?.success) !== "true") {
        throw new Error(`Form submission failed: ${res.status}`);
      }
      setStatus("success");
    } catch {
      // Inputs are uncontrolled and the form stays mounted, so what they typed is kept.
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div id={id} className="scroll-mt-24 rounded-2xl border border-border bg-white p-8 sm:p-10" role="status" aria-live="polite">
        <CheckCircle2 className="h-10 w-10 text-amber-500" aria-hidden="true" />
        <h2 className="mt-4 font-display text-2xl font-semibold text-navy-900">{copy.successTitle[lang]}</h2>
        <p className="mt-2 text-lg text-navy-900/80">{copy.successBody[lang]}</p>
        <p className="mt-8 text-sm font-medium text-muted">{copy.successContact[lang]}</p>
        <ContactActions className="mt-4" />
      </div>
    );
  }

  const hasError = (f: RequiredField) => errors.includes(f);
  const input =
    "mt-2 block w-full min-h-12 rounded-xl border bg-white px-4 py-3 text-base text-navy-900 shadow-sm outline-none transition-colors placeholder:text-muted/70 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/50";
  const inputBorder = (f?: RequiredField) => (f && hasError(f) ? "border-red-500" : "border-border");
  const label = "block text-sm font-semibold text-navy-900";
  const choice =
    "flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy-900 transition-colors hover:border-amber-400 has-[:checked]:border-amber-500 has-[:checked]:bg-amber-100/40 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-amber-400/60";

  function requiredField(name: RequiredField, type: string, autoComplete: string) {
    return (
      <div>
        <label htmlFor={`intake-${name}`} className={label}>
          {copy[name][lang]} <span className="text-amber-600" aria-hidden="true">*</span>
        </label>
        <input
          id={`intake-${name}`}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required
          aria-required="true"
          aria-invalid={hasError(name) || undefined}
          aria-describedby={hasError(name) ? `intake-${name}-error` : undefined}
          className={`${input} ${inputBorder(name)}`}
        />
        {hasError(name) && (
          <p id={`intake-${name}-error`} className="mt-1.5 text-sm text-red-600">
            {copy.required[name][lang]}
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      id={id}
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white p-6 sm:p-10"
    >
      <h2 className="font-display text-2xl font-semibold text-navy-900">{copy.title[lang]}</h2>
      <p className="mt-2 text-muted">{copy.intro[lang]}</p>

      {/* Honeypot (FormSubmit's _honey): invisible to people and screen readers, not
          tabbable. Bots fill it in, and FormSubmit drops any submission where it isn't empty. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      {/* Announces validation and send errors to screen readers. */}
      <div aria-live="assertive" className="mt-4">
        {errors.length > 0 && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{copy.fixErrors[lang]}</p>
        )}
        {status === "error" && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <p className="text-sm font-semibold text-red-700">{copy.errorBody[lang]}</p>
            <ContactActions className="mt-4" />
          </div>
        )}
      </div>

      <div className="mt-6 space-y-6">
        {requiredField("name", "text", "name")}
        {requiredField("business", "text", "organization")}
        {requiredField("phone", "tel", "tel")}

        <div>
          <label htmlFor="intake-email" className={label}>
            {copy.email[lang]} <span className="font-normal text-muted">{copy.optional[lang]}</span>
          </label>
          <input id="intake-email" name="email" type="email" autoComplete="email" className={`${input} ${inputBorder()}`} />
        </div>

        <fieldset>
          <legend className={label}>{copy.method[lang]}</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {contactMethods.map((m) => (
              <label key={m.value} className={choice}>
                <input
                  type="radio"
                  name="contact_method"
                  value={m.value}
                  defaultChecked={m.value === "Text"}
                  className="h-5 w-5 accent-amber-500"
                />
                {m.label[lang]}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className={label}>
            {copy.bestTime[lang]} <span className="font-normal text-muted">{copy.optional[lang]}</span>
          </legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {bestTimes.map((t) => (
              <label key={t.value} className={choice}>
                <input type="radio" name="best_time" value={t.value} className="h-5 w-5 accent-amber-500" />
                {t.label[lang]}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className={label}>{copy.services[lang]}</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {serviceOptions.map((s) => (
              <label key={s.value} className={choice}>
                <input type="checkbox" name="services" value={s.value} className="h-5 w-5 accent-amber-500" />
                {s.label[lang]}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="intake-message" className={label}>
            {copy.message[lang]} <span className="font-normal text-muted">{copy.optional[lang]}</span>
          </label>
          <textarea id="intake-message" name="message" rows={4} className={`${input} ${inputBorder()}`} />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-base font-semibold text-navy-950 shadow-sm shadow-amber-500/20 transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
        {status === "sending" ? copy.sending[lang] : copy.submit[lang]}
      </button>
      <p className="mt-3 text-xs text-muted">{copy.privacy[lang]}</p>
    </form>
  );
}
