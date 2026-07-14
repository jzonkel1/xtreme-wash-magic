// Lead submission. Every quote/contact form and the review-page private feedback
// form calls submitQuote(); the `source` field distinguishes them, and GHL
// branches on it — ONE inbound webhook for the whole site, the same pattern as
// Crosscut.
//
// The browser POSTs straight to the GHL inbound webhook (no proxy, no env var).
// Verified in a real browser that GHL returns CORS headers, so an
// application/json POST works cross-origin AND the response is readable — which
// means we still throw on failure and the caller shows its "call or text" toast.
//
// (This was Netlify Forms, which never captured a single lead because form
// detection was never enabled on the site. Filename kept only to avoid churning
// imports across four components.)

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/JTMq0EQxaeekIieKZLER/webhook-trigger/73e21c6f-8d50-4344-979c-6fd9a22242ac";

export async function submitQuote(fields: Record<string, string>) {
  const res = await fetch(GHL_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...fields, site: "xtremekleentx.com" }),
  });
  if (!res.ok) throw new Error(`Lead submit failed: ${res.status}`);
}
