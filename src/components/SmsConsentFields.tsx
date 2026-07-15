import { Link } from "react-router-dom";
import { business } from "@/data";

/**
 * A2P-compliant SMS consent block, shared by every quote form.
 *
 * Carrier rules for a Low Volume Mixed campaign (what Eric's number runs on):
 * TWO separate checkboxes — non-marketing and marketing — each OPTIONAL and
 * UNCHECKED by default, each carrying its own full disclosure, with the
 * Privacy Policy and Terms linked right below. Consent can never be a
 * condition of getting a quote, so the form submits fine with neither box
 * ticked; the values ride along to Netlify/GHL so automation only texts
 * contacts who actually consented.
 *
 * Do NOT collapse this to one checkbox or fold it into the submit button —
 * implied "by submitting you agree" consent is exactly what carriers reject
 * on mixed campaigns.
 */
export type SmsConsent = { nonmarketing: boolean; marketing: boolean };

export const emptySmsConsent: SmsConsent = {
  nonmarketing: false,
  marketing: false,
};

/** Flatten for submitQuote() — lands in Netlify Forms and the GHL webhook. */
export const smsConsentFields = (c: SmsConsent) => ({
  sms_consent_nonmarketing: c.nonmarketing ? "yes" : "no",
  sms_consent_marketing: c.marketing ? "yes" : "no",
});

const Box = ({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
}) => (
  <label className="flex items-start gap-2.5 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="mt-0.5 h-4 w-4 flex-none rounded accent-[#c01818] cursor-pointer"
    />
    <span className="text-left text-[11px] leading-relaxed text-xk-warm-white/55 font-body">
      {children}
    </span>
  </label>
);

const SmsConsentFields = ({
  value,
  onChange,
}: {
  value: SmsConsent;
  onChange: (v: SmsConsent) => void;
}) => (
  <div className="space-y-2.5">
    <Box
      checked={value.nonmarketing}
      onChange={(v) => onChange({ ...value, nonmarketing: v })}
    >
      I agree to receive non-marketing text messages from {business.brand} about
      my request — quotes, appointment confirmations, reminders, and service
      updates — at the number provided. Msg frequency varies. Msg &amp; data
      rates may apply. Reply HELP for help, STOP to opt out.
    </Box>
    <Box
      checked={value.marketing}
      onChange={(v) => onChange({ ...value, marketing: v })}
    >
      I agree to receive marketing text messages from {business.brand} — such as
      offers, seasonal reminders, and review requests — at the number provided.
      Msg frequency varies. Msg &amp; data rates may apply. Reply HELP for help,
      STOP to opt out.
    </Box>
    <p className="text-left text-[11px] leading-relaxed text-xk-warm-white/40 font-body">
      Consent is not a condition of purchase, and we never share or sell your
      mobile number to third parties. See our{" "}
      <Link to="/privacy" className="underline hover:text-xk-warm-white/70">
        Privacy Policy
      </Link>{" "}
      and{" "}
      <Link to="/terms" className="underline hover:text-xk-warm-white/70">
        Terms of Service
      </Link>
      .
    </p>
  </div>
);

export default SmsConsentFields;
