import { useState } from "react";
import { Phone, Check } from "lucide-react";
import { toast } from "sonner";
import { submitQuote } from "@/lib/netlifyForms";
import SmsConsentFields, { emptySmsConsent, smsConsentFields } from "@/components/SmsConsentFields";
import { business, services } from "@/data";

/**
 * Compact quote card that sits IN the hero on service and city pages.
 *
 * Why it exists: these are the pages Google actually ranks. Someone who lands on
 * "Pressure Washing Rockport, TX" from a search has a dirty house — they are not
 * there to read an essay and then hunt for a form at the bottom of the page. The
 * ask should be visible in the first screenful.
 *
 * It is deliberately NOT the full form from the bottom of the page:
 *   - The first interaction is a TAP, not typing — pick what needs cleaning.
 *     Tapping a chip is a far lower commitment than facing an empty text box,
 *     and once someone has tapped, they're already in the flow.
 *   - Two typed fields, both of them things Eric genuinely needs to call back.
 *     Everything else (email, city, details) stays on the full form below, where
 *     the visitor has already decided they want a quote.
 *
 * `source` records which page it came from, so Eric can see which service and
 * which city actually produce leads.
 */
/**
 * Residential / Commercial / Industrial. This is a TAP, so it costs the visitor
 * nothing — and it's the single most useful field for GoHighLevel, because those
 * three are different pipelines with different follow-up. Email is deliberately
 * NOT here: it's the field people abandon on, and GHL only needs a phone number
 * to create the contact and start an SMS sequence. The full form below the fold
 * still collects email from anyone who gets that far.
 */
const PROPERTY_TYPES = ["Residential", "Commercial", "Industrial"];

const HeroQuoteForm = ({
  source,
  defaultService,
  defaultCity,
}: {
  source: string;
  /** Preselect the service when the page IS a service page. */
  defaultService?: string;
  /** Prefill the city when the page IS a city page. */
  defaultCity?: string;
}) => {
  const [service, setService] = useState(defaultService ?? "");
  const [propertyType, setPropertyType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(emptySmsConsent);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("We just need a name and a number to call you back.");
      return;
    }
    setSubmitting(true);
    try {
      await submitQuote({
        name,
        phone,
        service,
        propertyType,
        city: defaultCity ?? "",
        source,
        ...smsConsentFields(consent),
      });
      setDone(true);
    } catch {
      toast.error(`Something went wrong. Please call or text ${business.phone}.`);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="bg-xk-steel/95 backdrop-blur-sm border border-xk-warm-white/15 rounded-2xl p-7 shadow-2xl text-center">
        <div className="w-14 h-14 rounded-full bg-xk-red/20 border-2 border-xk-red flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 text-xk-red" />
        </div>
        <h3 className="font-display uppercase text-2xl text-xk-warm-white mb-2 tracking-tight">
          Got It — We'll Call You
        </h3>
        <p className="text-xk-warm-white/60 font-body text-sm mb-5">
          {business.owner} will reach out to set up your free on-site quote.
        </p>
        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2 text-xk-red hover:text-xk-red-glow font-heading font-bold text-sm"
        >
          <Phone className="w-4 h-4" /> Need it sooner? Call {business.phone}
        </a>
      </div>
    );
  }

  const fieldClass =
    // 16px on mobile — under 16px, iOS Safari force-zooms the page on focus.
    "w-full bg-xk-charcoal/80 border border-xk-warm-white/20 text-xk-warm-white px-4 py-3.5 rounded-lg focus:outline-none focus:border-xk-red focus:ring-1 focus:ring-xk-red font-body text-base md:text-sm placeholder:text-xk-warm-white/35";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-xk-steel/95 backdrop-blur-sm border border-xk-warm-white/15 rounded-2xl p-6 md:p-7 shadow-2xl"
    >
      <h3 className="font-display uppercase text-2xl md:text-[1.75rem] text-xk-warm-white tracking-tight leading-none mb-1.5">
        Get a Free Quote
      </h3>
      <p className="text-xk-warm-white/55 font-body text-sm mb-5">
        Two fields. We call you back and come price it in person.
      </p>

      <span className="block text-xk-warm-white/60 text-xs font-heading font-semibold uppercase tracking-wide mb-2">
        What needs cleaning?
      </span>
      <div className="flex flex-wrap gap-2 mb-5">
        {services.map((s) => {
          const active = service === s.title;
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => setService(active ? "" : s.title)}
              aria-pressed={active}
              className={`font-heading font-semibold text-xs px-3 py-2 rounded-lg border transition-colors ${
                active
                  ? "bg-xk-red border-xk-red text-xk-warm-white"
                  : "bg-xk-charcoal/70 border-xk-warm-white/15 text-xk-warm-white/70 hover:border-xk-red/60 hover:text-xk-warm-white"
              }`}
            >
              {s.title}
            </button>
          );
        })}
      </div>

      <span className="block text-xk-warm-white/60 text-xs font-heading font-semibold uppercase tracking-wide mb-2">
        Property type
      </span>
      <div className="flex flex-wrap gap-2 mb-5">
        {PROPERTY_TYPES.map((t) => {
          const active = propertyType === t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setPropertyType(active ? "" : t)}
              aria-pressed={active}
              className={`flex-1 min-w-[100px] font-heading font-semibold text-xs px-3 py-2 rounded-lg border transition-colors ${
                active
                  ? "bg-xk-red border-xk-red text-xk-warm-white"
                  : "bg-xk-charcoal/70 border-xk-warm-white/15 text-xk-warm-white/70 hover:border-xk-red/60 hover:text-xk-warm-white"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div className="space-y-3">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
          className={fieldClass}
          required
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
          inputMode="tel"
          autoComplete="tel"
          className={fieldClass}
          required
        />
      </div>

      <div className="mt-4">
        <SmsConsentFields value={consent} onChange={setConsent} />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full mt-4 bg-xk-red text-xk-warm-white font-heading font-bold text-base py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red disabled:opacity-60"
      >
        {submitting ? "Sending..." : "GET MY FREE QUOTE →"}
      </button>

      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 mt-3.5 text-xk-warm-white/60 hover:text-xk-red font-heading font-semibold text-sm transition-colors"
      >
        <Phone className="w-4 h-4" />
        Or call/text {business.phone} — open 24 hours
      </a>
    </form>
  );
};

export default HeroQuoteForm;
