// Lead intake. The website's quote/contact/feedback forms POST here, and this
// function forwards the lead server-side to the GoHighLevel inbound webhook.
//
// WHY A FUNCTION instead of Netlify Forms: Netlify's form detection was never
// enabled on this site, so the old "/" Netlify-Forms POST 404'd and NO
// submission was ever captured (a live lead from a real prospect would have
// errored to a "call/text" toast). This path removes that dependency entirely —
// the browser talks to our function, the function talks to GHL. It also keeps
// the webhook URL server-side (env var) instead of exposing it in the bundle.
//
// SETUP (one time):
//   1. In GHL, build a Workflow with trigger = Inbound Webhook; copy its URL.
//      (One webhook for every form; branch inside GHL on the `source` field —
//      same pattern as Crosscut.)
//   2. Netlify → Site config → Environment variables → add GHL_WEBHOOK_URL = that URL.
//   3. Redeploy (env changes only take effect on a new deploy).
//
// Until GHL_WEBHOOK_URL is set this returns 503, which surfaces as the form's
// "please call or text" toast — a loud, honest failure, never a fake success.
import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(event.body ?? "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "bad json" }) };
  }

  // Honeypot: real users never fill the hidden bot-field. Pretend success so the
  // bot sees a normal response, but drop the submission.
  if (data["bot-field"]) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  }
  delete data["bot-field"];

  const url = process.env.GHL_WEBHOOK_URL;
  if (!url) {
    console.error("GHL_WEBHOOK_URL not set — cannot forward lead. Lead was NOT captured.");
    return { statusCode: 503, body: JSON.stringify({ error: "not configured" }) };
  }

  const lead = {
    ...data,
    site: "xtremekleentx.com",
    submitted_at: new Date().toISOString(),
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      console.error(`GHL webhook returned ${res.status} — lead not confirmed`);
      return { statusCode: 502, body: JSON.stringify({ error: "upstream" }) };
    }
    console.log(`lead forwarded to GHL (source: ${data.source ?? "unknown"})`);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    console.error("GHL forward threw", e);
    return { statusCode: 502, body: JSON.stringify({ error: "forward failed" }) };
  }
};
