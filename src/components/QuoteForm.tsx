import { useState } from "react";
import { Camera, ChevronDown, Phone, MessageSquare, Mail } from "lucide-react";
import { toast } from "sonner";
import { submitQuote } from "@/lib/netlifyForms";
import SmsConsentFields, { emptySmsConsent, smsConsentFields } from "@/components/SmsConsentFields";
import { business, services } from "@/data";

const serviceTypes = [...services.map((s) => s.title), "Not Sure — Just Quote Me"];

/**
 * Contact preference. This used to be "Reach me by:" followed by three inline
 * radio buttons on one wrapping line — which on a 390px iPhone ran out of room
 * and dropped "Email" onto a second line by itself, so the control looked broken.
 * A fixed 3-up grid can't wrap, and the icons let each tile stay narrow enough
 * that the row fits comfortably. Radios (visually hidden) still back it, so the
 * keyboard, screen readers, and the Netlify/GHL payload all behave exactly as
 * they did before.
 */
const CONTACT_METHODS = [
  { value: "call", label: "Call", icon: Phone },
  { value: "text", label: "Text", icon: MessageSquare },
  { value: "email", label: "Email", icon: Mail },
];

/** Native dropdown menus ignore CSS classes; inline styles are the only lever. */
const optionStyle = { backgroundColor: "#2b2b2b", color: "#f5f3f0" };

/**
 * The one-screen quote form, shared by the homepage closer and the contact page.
 * `source` is carried into the submission so leads can be routed by where they
 * came from (hero wizard vs. homepage closer vs. contact page).
 *
 * Only name + phone are required: for a washing job Eric quotes off a photo and
 * a phone call, so every other field is a bonus, not a gate.
 */
const QuoteForm = ({ source }: { source: string }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    details: "",
    contact: "call",
  });
  const [consent, setConsent] = useState(emptySmsConsent);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please add your name and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      await submitQuote({ ...form, source, ...smsConsentFields(consent) });
      setDone(true);
    } catch {
      toast.error(`Something went wrong. Please call or text ${business.phone}.`);
    } finally {
      setSubmitting(false);
    }
  };

  // text-base (16px) on mobile is NOT a style choice — iOS Safari force-zooms
  // the whole page when you focus an input whose font-size is under 16px, and
  // then leaves you zoomed in with the form half off-screen. Shrink to 14px
  // only from md up, where no iPhone is looking at it.
  const inputClass =
    "w-full bg-xk-light-gray/80 border border-xk-warm-white/15 text-xk-warm-white px-4 py-3.5 rounded-lg focus:outline-none focus:border-xk-red focus:ring-1 focus:ring-xk-red font-body text-base md:text-sm placeholder:text-xk-warm-white/35";
  const labelClass =
    "block text-xk-warm-white/60 text-xs font-heading font-semibold uppercase tracking-wide mb-1.5";

  if (done) {
    return (
      <div className="bg-xk-steel/80 border border-xk-warm-white/10 rounded-xl p-8 text-center">
        <h3 className="font-display uppercase text-3xl text-xk-warm-white mb-3 tracking-tight">
          Quote Request Sent
        </h3>
        <p className="text-xk-warm-white/60 font-body text-sm mb-7 leading-relaxed">
          Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""} — we'll reach out
          within 24 hours to set up your on-site quote. Need it handled sooner?
        </p>
        <a
          href={business.phoneHref}
          className="inline-flex items-center justify-center gap-2 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-7 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
        >
          Call or Text {business.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-xk-steel/80 border border-xk-warm-white/10 rounded-xl p-7 md:p-8">
      <h3 className="font-heading font-bold text-xl text-xk-warm-white mb-1">
        Request Your Free Quote
      </h3>
      <p className="text-xk-warm-white/50 font-body text-sm mb-6">
        Two required fields. Takes about 30 seconds.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="qf-name" className={labelClass}>
            Name *
          </label>
          <input
            id="qf-name"
            type="text"
            autoComplete="name"
            placeholder="Eric Kuhn"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            maxLength={100}
          />
        </div>

        <div>
          <label htmlFor="qf-phone" className={labelClass}>
            Phone *
          </label>
          <input
            id="qf-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="361-947-7811"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            maxLength={20}
          />
        </div>

        <div>
          <label htmlFor="qf-city" className={labelClass}>
            City <span className="text-xk-warm-white/30 normal-case">— optional</span>
          </label>
          <input
            id="qf-city"
            type="text"
            autoComplete="address-level2"
            placeholder="Portland, Ingleside, Rockport…"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className={inputClass}
            maxLength={100}
          />
        </div>

        <div>
          <label htmlFor="qf-service" className={labelClass}>
            What needs cleaning?{" "}
            <span className="text-xk-warm-white/30 normal-case">— optional</span>
          </label>
          {/* iOS renders a <select> with its own chrome unless appearance is
              stripped, so ours looked like a different control than the inputs
              above it. appearance-none + our own chevron makes it match. The
              <option> colors are set inline because a Tailwind class on <option>
              is ignored by every browser that draws a native menu. */}
          <div className="relative">
            <select
              id="qf-service"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className={`${inputClass} appearance-none pr-11 cursor-pointer`}
            >
              <option value="" style={optionStyle}>
                Select a service
              </option>
              {serviceTypes.map((s) => (
                <option key={s} value={s} style={optionStyle}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-xk-warm-white/50" />
          </div>
        </div>

        <div>
          <label htmlFor="qf-email" className={labelClass}>
            Email <span className="text-xk-warm-white/30 normal-case">— optional</span>
          </label>
          <input
            id="qf-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            maxLength={255}
          />
        </div>

        <div>
          <label htmlFor="qf-details" className={labelClass}>
            Tell us about the job{" "}
            <span className="text-xk-warm-white/30 normal-case">— optional</span>
          </label>
          <textarea
            id="qf-details"
            placeholder="Two-story house, green on the north side, driveway has oil stains…"
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            className={`${inputClass} min-h-[96px] resize-none`}
            maxLength={1000}
          />
        </div>

        <div className="pt-1">
          <span className={labelClass}>Reach me by</span>
          <div role="radiogroup" aria-label="Preferred contact method" className="grid grid-cols-3 gap-2">
            {CONTACT_METHODS.map(({ value, label, icon: Icon }) => {
              const active = form.contact === value;
              return (
                <label
                  key={value}
                  className={`flex items-center justify-center gap-2 py-3 rounded-lg border cursor-pointer transition-colors font-heading font-semibold text-sm ${
                    active
                      ? "bg-xk-red border-xk-red text-xk-warm-white shadow-glow-red"
                      : "bg-xk-light-gray/80 border-xk-warm-white/15 text-xk-warm-white/65 hover:border-xk-warm-white/35 hover:text-xk-warm-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="contact"
                    value={value}
                    checked={active}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="sr-only"
                  />
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {label}
                </label>
              );
            })}
          </div>
        </div>

        <SmsConsentFields value={consent} onChange={setConsent} />

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-xk-red text-xk-warm-white font-heading font-bold text-base py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "SENDING..." : "GET MY FREE QUOTE →"}
        </button>

        <p className="flex items-start gap-2 text-xk-warm-white/45 text-xs font-body leading-relaxed">
          <Camera className="w-4 h-4 mt-0.5 flex-shrink-0 text-xk-red/70" />
          In a hurry? Text a photo of the job to {business.phone} — we can usually
          price it from that.
        </p>
        <p className="text-xk-warm-white/40 text-xs font-body text-center">
          By submitting, you agree to be contacted about your request by phone or
          email. No spam, ever.
        </p>
      </form>
    </div>
  );
};

export default QuoteForm;
