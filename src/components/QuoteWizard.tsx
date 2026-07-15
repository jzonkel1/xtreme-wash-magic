import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ChevronLeft, Check, Phone, HelpCircle } from "lucide-react";
import { HandDrawnIcon } from "@/components/icons/HandDrawn";
import { submitQuote } from "@/lib/netlifyForms";
import SmsConsentFields, { emptySmsConsent, smsConsentFields } from "@/components/SmsConsentFields";
import { business } from "@/data";

// Tap-first first step — the hand-drawn service icons double as the choices.
const serviceChoices = [
  { key: "Soft Wash Cleaning", label: "Soft Wash", icon: "softwash" },
  { key: "Power & Pressure Washing", label: "Pressure Wash", icon: "pressure" },
  { key: "Roof Cleaning", label: "Roof Cleaning", icon: "roof" },
  { key: "Window & Glass Cleaning", label: "Windows & Glass", icon: "window" },
  { key: "Industrial & Construction Cleanup", label: "Industrial / Fleet", icon: "industrial" },
];

const propertyTypes = ["Residential", "Commercial", "Industrial"];

const totalSteps = 3;

const QuoteWizard = () => {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [consent, setConsent] = useState(emptySmsConsent);
  const [form, setForm] = useState({
    service: "",
    propertyType: "",
    city: "",
    name: "",
    phone: "",
    email: "",
    contact: "call",
  });

  const set = (patch: Partial<typeof form>) => setForm((f) => ({ ...f, ...patch }));

  const pickService = (service: string) => {
    set({ service });
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please add your name and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      await submitQuote({ ...form, source: "Hero — Quote Wizard", ...smsConsentFields(consent) });
      setDone(true);
    } catch {
      toast.error(`Something went wrong. Please call or text ${business.phone}.`);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-xk-charcoal/80 border border-xk-warm-white/20 text-xk-warm-white px-4 py-3 rounded-lg focus:outline-none focus:border-xk-red focus:ring-1 focus:ring-xk-red font-body text-sm placeholder:text-xk-warm-white/40";

  if (done) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-xk-red/20 border-2 border-xk-red flex items-center justify-center mx-auto mb-5">
          <Check className="w-8 h-8 text-xk-red" />
        </div>
        <h3 className="font-display uppercase text-2xl text-xk-warm-white mb-2 tracking-tight">
          You're all set
        </h3>
        <p className="text-xk-warm-white/60 font-body text-sm mb-6">
          Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}! We'll reach out
          within 24 hours. Need it sooner?
        </p>
        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-6 py-3.5 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
        >
          <Phone className="w-5 h-5" /> Call or Text {business.phone}
        </a>
      </div>
    );
  }

  return (
    <div>
      {/* header + progress */}
      <div className="flex items-center gap-3 mb-1">
        {step > 1 && (
          <button
            onClick={() => setStep((s) => s - 1)}
            aria-label="Back"
            className="text-xk-warm-white/60 hover:text-xk-warm-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        <h3 className="font-heading font-bold text-xl text-xk-warm-white">
          {step === 1 && "What do you need cleaned?"}
          {step === 2 && "Tell us about the property"}
          {step === 3 && "Where do we send the quote?"}
        </h3>
      </div>
      <div className="flex gap-1.5 mb-6">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < step ? "bg-xk-red" : "bg-xk-warm-white/15"
            }`}
          />
        ))}
      </div>

      {/* STEP 1 — tap a service */}
      {step === 1 && (
        <div className="grid grid-cols-2 gap-3">
          {serviceChoices.map((s) => (
            <button
              key={s.key}
              onClick={() => pickService(s.key)}
              className="group flex flex-col items-center gap-2 bg-xk-charcoal/60 border border-xk-warm-white/15 rounded-xl py-4 px-2 hover:border-xk-red hover:bg-xk-red/10 transition-all"
            >
              <HandDrawnIcon
                name={s.icon}
                className="w-9 h-9 text-xk-red group-hover:scale-110 transition-transform"
              />
              <span className="text-xk-warm-white text-xs font-heading font-semibold text-center leading-tight">
                {s.label}
              </span>
            </button>
          ))}
          <button
            onClick={() => pickService("Not Sure — Just Quote Me")}
            className="group flex flex-col items-center gap-2 bg-xk-charcoal/60 border border-xk-warm-white/15 rounded-xl py-4 px-2 hover:border-xk-red hover:bg-xk-red/10 transition-all"
          >
            <HelpCircle className="w-9 h-9 text-xk-red group-hover:scale-110 transition-transform" />
            <span className="text-xk-warm-white text-xs font-heading font-semibold text-center leading-tight">
              Not Sure
            </span>
          </button>
        </div>
      )}

      {/* STEP 2 — property type + city */}
      {step === 2 && (
        <div className="space-y-5">
          <div>
            <p className="text-xk-warm-white/50 text-xs font-body mb-2 uppercase tracking-wide">
              Property type
            </p>
            <div className="grid grid-cols-3 gap-2">
              {propertyTypes.map((p) => (
                <button
                  key={p}
                  onClick={() => set({ propertyType: p })}
                  className={`py-3 rounded-lg font-heading font-semibold text-sm transition-all border ${
                    form.propertyType === p
                      ? "bg-xk-red border-xk-red text-xk-warm-white"
                      : "bg-xk-charcoal/60 border-xk-warm-white/15 text-xk-warm-white/80 hover:border-xk-red/60"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <input
            type="text"
            placeholder="City (Portland, Ingleside, Rockport…)"
            value={form.city}
            onChange={(e) => set({ city: e.target.value })}
            className={inputClass}
            maxLength={100}
          />
          <button
            onClick={() => setStep(3)}
            className="w-full bg-xk-red text-xk-warm-white font-heading font-bold text-base py-3.5 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
          >
            Continue →
          </button>
        </div>
      )}

      {/* STEP 3 — contact */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your Name *"
            value={form.name}
            onChange={(e) => set({ name: e.target.value })}
            className={inputClass}
            maxLength={100}
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={(e) => set({ phone: e.target.value })}
            className={inputClass}
            maxLength={20}
          />
          <input
            type="email"
            placeholder="Email (optional)"
            value={form.email}
            onChange={(e) => set({ email: e.target.value })}
            className={inputClass}
            maxLength={255}
          />
          <div className="flex items-center gap-4 text-xk-warm-white/80 font-body text-sm pt-1">
            <span className="text-xk-warm-white/50">Reach me by:</span>
            {["call", "text", "email"].map((c) => (
              <label key={c} className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="contact"
                  value={c}
                  checked={form.contact === c}
                  onChange={(e) => set({ contact: e.target.value })}
                  className="accent-xk-red"
                />
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </label>
            ))}
          </div>
          <div className="pt-1">
            <SmsConsentFields value={consent} onChange={setConsent} />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-xk-red text-xk-warm-white font-heading font-bold text-base py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "SENDING..." : "GET MY FREE QUOTE →"}
          </button>
          <p className="text-xk-warm-white/40 text-xs font-body text-center">
            We only use your details to reply about this request. No spam, ever.
          </p>
        </form>
      )}
    </div>
  );
};

export default QuoteWizard;
