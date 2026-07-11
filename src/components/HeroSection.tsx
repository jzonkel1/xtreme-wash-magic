import { useState } from "react";
import heroBg from "@/assets/hero-bg.webp";
import logo from "@/assets/logo.jpg";
import { Phone, Shield, MapPin, Leaf, Star } from "lucide-react";
import { toast } from "sonner";
import { submitQuote } from "@/lib/netlifyForms";

const serviceTypes = [
  "Residential Power Washing",
  "Commercial Power Washing",
  "Soft Wash (Roof / Stucco)",
  "Industrial Equipment Cleaning",
  "Steam Degreasing",
  "Chemical Concrete Cleaning",
  "Not Sure — Just Quote Me",
];

const HeroSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please provide your name and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      await submitQuote({ ...form, source: "Hero — Quick Quote" });
      toast.success("Thanks! We'll be in touch within 24 hours.");
      setForm({ name: "", phone: "", email: "", service: "" });
    } catch {
      toast.error("Something went wrong. Please call or text 361-947-7811.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-xk-charcoal/80 border border-xk-warm-white/20 text-xk-warm-white px-4 py-3 rounded-lg focus:outline-none focus:border-xk-red focus:ring-1 focus:ring-xk-red font-body text-sm placeholder:text-xk-warm-white/40";

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-20 bg-xk-charcoal"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Layered overlay: darkest behind the headline, warm red glow top-right, grounded vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(102deg, rgba(20,18,17,0.96) 0%, rgba(20,18,17,0.86) 40%, rgba(24,20,19,0.72) 64%, rgba(34,17,17,0.82) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(620px 440px at 90% 4%, rgba(226,54,54,0.20), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 tex-grid opacity-60" />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }}
      />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Left side — Hero content */}
          <div className="lg:col-span-3">
            <div
              className="flex items-center gap-4 mb-8 animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              <img
                src={logo}
                alt="Xtreme Kleen"
                className="h-14 md:h-18 rounded-lg shadow-lg"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xk-warm-white/70 text-xs font-body">5-Star Rated</span>
                </div>
                <span className="font-heading text-xs tracking-widest text-xk-warm-white/60 font-medium">
                  SOUTH & CENTRAL TEXAS
                </span>
              </div>
            </div>

            <h1
              className="font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight mb-5 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              <span className="text-xk-warm-white block">Professional</span>
              <span className="text-xk-red block whitespace-nowrap">Power Washing</span>
              <span className="text-xk-warm-white block">That Delivers Results</span>
            </h1>

            <p
              className="max-w-xl text-xk-warm-white/75 text-base md:text-lg mb-8 font-body leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              Industrial, commercial, and residential pressure washing across Texas.
              High pressure, soft wash, steam degreasing — a solution for every surface.
            </p>

            <div
              className="flex flex-col sm:flex-row items-start gap-3 mb-10 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href="#quote"
                className="bg-xk-red text-xk-warm-white font-heading font-bold text-base px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
              >
                GET YOUR FREE QUOTE
              </a>
              <a
                href="tel:3619477811"
                className="border-2 border-xk-warm-white/40 text-xk-warm-white font-heading font-semibold text-base px-8 py-4 rounded-lg hover:bg-xk-warm-white/10 transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                361-947-7811
              </a>
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up"
              style={{ animationDelay: "0.45s" }}
            >
              {[
                { icon: Star, label: "Free On-Site Quotes" },
                { icon: Shield, label: "Fully Insured" },
                { icon: MapPin, label: "3 Cities Served" },
                { icon: Leaf, label: "Eco-Safe Chemicals" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-xk-warm-white/5 border border-xk-warm-white/10 rounded-lg px-3 py-2.5"
                >
                  <b.icon className="w-4 h-4 text-xk-red flex-shrink-0" />
                  <span className="text-xk-warm-white text-xs font-body font-medium leading-tight">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — Quick Quote Form */}
          <div className="lg:col-span-2">
            <div
              className="bg-xk-steel/90 backdrop-blur-sm border border-xk-warm-white/10 rounded-xl p-6 md:p-8 shadow-2xl animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="font-heading font-bold text-xl text-xk-warm-white mb-1">
                Request a Free Estimate
              </h3>
              <p className="text-xk-warm-white/50 text-sm font-body mb-6">
                We'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  maxLength={100}
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                  maxLength={20}
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  maxLength={255}
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Select Service Type</option>
                  {serviceTypes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-xk-red text-xk-warm-white font-heading font-bold text-base py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "SENDING..." : "GET MY FREE QUOTE →"}
                </button>
              </form>

              <p className="text-xk-warm-white/40 text-xs font-body text-center mt-4">
                No spam. No obligation. Just a straight price. By submitting, you
                agree to be contacted by phone, text, or email about your request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
