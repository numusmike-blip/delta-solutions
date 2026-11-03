// FormSubmit AJAX endpoint for the intake form, read from NEXT_PUBLIC_FORMSUBMIT_ENDPOINT
// (.env.local locally, the host's environment variables in production). Never hardcode it.
// Note: NEXT_PUBLIC_ values are inlined into the browser bundle at build time, so whatever
// this contains is visible to visitors. After activating FormSubmit, switch it to the random
// alias FormSubmit gives you so the address itself isn't public.
export const FORMSUBMIT_ENDPOINT = process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT ?? "";

export const INTAKE_SUBJECT = "New Delta Solutions inquiry";
