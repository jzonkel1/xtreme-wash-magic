// Lead submission helper. Every quote/contact form and the review-page private
// feedback form call submitQuote(); the `source` field distinguishes them.
//
// This posts to our own Netlify function (netlify/functions/submit-lead.ts),
// which forwards the lead server-side to the GoHighLevel inbound webhook. It was
// previously a Netlify Forms POST to "/", but Netlify's form detection was never
// enabled on the site, so every submission 404'd and nothing was captured. The
// function path removes that dependency and keeps the webhook URL off the client.
//
// Filename kept as netlifyForms.ts only to avoid churning imports across four
// components; it no longer uses Netlify Forms.

export async function submitQuote(fields: Record<string, string>) {
  const res = await fetch("/.netlify/functions/submit-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
  // Throw on any non-2xx so the caller's catch fires its "call or text" toast.
  // A 503 here means GHL_WEBHOOK_URL isn't set yet — see the function's header.
  if (!res.ok) throw new Error(`Lead submit failed: ${res.status}`);
}
