// Shared Netlify Forms submission helper.
// Both the hero quick-quote and the full contact form post to the same
// Netlify form ("xtreme-kleen-quote"); the `source` field tells them apart.
// The static declaration lives in public/__forms.html so Netlify's build-time
// bot can register the form even though the real inputs are rendered by React.

export const FORM_NAME = "xtreme-kleen-quote";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k] ?? ""))
    .join("&");

export async function submitQuote(fields: Record<string, string>) {
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": FORM_NAME, "bot-field": "", ...fields }),
  });
  if (!res.ok) throw new Error(`Netlify form submit failed: ${res.status}`);
}
