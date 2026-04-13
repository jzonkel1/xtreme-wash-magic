import { useState } from "react";
import heroBg from "@/assets/hero-bg.webp";
import logo from "@/assets/logo.jpg";
import { Phone, Shield, MapPin, Leaf, Star } from "lucide-react";
import { toast } from "sonner";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please provide your name and phone number.");
      return;
    }
    toast.success("Thanks! We'll be in touch soon.");
    setForm({ name: "", phone: "", email: "", service: "" });
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
      >
        <div className="absolute inset-0 bg-xk-medium-gray/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Left side — Hero content */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-8">
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

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              <span className="text-xk-warm-white">Professional </span>
              <span className="text-xk-red">Power Washing</span>
              <span className="text-xk-warm-white block mt-1">
                That Delivers Results
              </span>
            </h1>

            <p className="max-w-xl text-xk-warm-white/75 text-base md:text-lg mb-8 font-body leading-relaxed">
              Industrial, commercial, and residential pressure washing across Texas.
              High pressure, soft wash, steam degreasing — a solution for every surface.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
            <div className="bg-xk-steel/90 backdrop-blur-sm border border-xk-warm-white/10 rounded-xl p-6 md:p-8 shadow-2xl">
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
                  className="w-full bg-xk-red text-xk-warm-white font-heading font-bold text-base py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
                >
                  GET MY FREE QUOTE →
                </button>
              </form>

              <p className="text-xk-warm-white/40 text-xs font-body text-center mt-4">
                No spam. No obligation. Just a straight price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
