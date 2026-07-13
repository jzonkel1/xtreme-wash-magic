// Netlify event function: fires on EVERY verified form submission
// (submission-created is a reserved name — do not rename).
//
// Forwards the lead to the GoHighLevel inbound webhook so speed-to-lead
// automation (instant text-back, pipeline opportunity, follow-up) runs off the
// website forms. All site forms post one Netlify form ("xtreme-kleen-quote")
// and branch by the `source` field inside GHL — same routing pattern as
// Crosscut.
//
// ACTIVATION: set GHL_WEBHOOK_URL in Netlify env (Site config → Environment
// variables) to the subaccount's inbound-webhook URL. Until it's set, this
// function no-ops and Netlify Forms email notifications still work — safe to
// deploy before the GHL subaccount exists.
import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  const url = process.env.GHL_WEBHOOK_URL;
  if (!url) {
    console.log("GHL_WEBHOOK_URL not set — skipping forward");
    return { statusCode: 200, body: "skipped" };
  }

  const submission = JSON.parse(event.body ?? "{}")?.payload ?? {};
  const data: Record<string, string> = submission.data ?? {};

  // Flat payload; GHL's inbound webhook maps fields by key.
  const lead = {
    ...data,
    form_name: submission.form_name ?? "xtreme-kleen-quote",
    site: "xtremekleentx.com",
    submitted_at: submission.created_at ?? new Date().toISOString(),
  };
  delete (lead as Record<string, unknown>)["bot-field"];

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  console.log(`forwarded to GHL: ${res.status} (source: ${data.source ?? "?"})`);

  // Always 200 — a GHL hiccup must never make Netlify treat the submission as
  // failed; the lead is still in Netlify Forms + email either way.
  return { statusCode: 200, body: "ok" };
};
