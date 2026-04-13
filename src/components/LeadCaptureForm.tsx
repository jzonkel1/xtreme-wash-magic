import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const serviceTypes = [
  "Residential Power Washing",
  "Commercial Power Washing",
  "Soft Wash Roof or Stucco",
  "Industrial Equipment Cleaning",
  "Steam Degreasing",
  "Chemical Concrete Cleaning",
  "Not Sure — Just Quote Me",
];

const LeadCaptureForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    details: "",
    contact: "call",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please provide your name and phone number.");
      return;
    }
    toast.success("Thanks! We'll be in touch soon.");
    setForm({ name: "", phone: "", email: "", city: "", service: "", details: "", contact: "call" });
  };

  const inputClass =
    "w-full bg-xk-light-gray/80 border border-xk-warm-white/15 text-xk-warm-white px-4 py-3.5 rounded-lg focus:outline-none focus:border-xk-red focus:ring-1 focus:ring-xk-red font-body text-sm placeholder:text-xk-warm-white/40";

  return (
    <section id="quote" className="bg-xk-charcoal py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
          <div>
            <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
              GET IN TOUCH
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-xk-warm-white mb-4 leading-tight">
              Get Your Free Quote Today
            </h2>
            <p className="text-xk-warm-white/60 font-body mb-10 leading-relaxed">
              On-site quotes available. We come to you, assess the job, and give
              you a straight price before we start anything.
            </p>

            <div className="space-y-5 mb-10">
              <a href="tel:3619477811" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-xk-red/15 rounded-lg flex items-center justify-center group-hover:bg-xk-red/25 transition-colors">
                  <Phone className="w-5 h-5 text-xk-red" />
                </div>
                <div>
                  <p className="text-xk-warm-white font-heading font-bold text-base">361-947-7811</p>
                  <p className="text-xk-warm-white/40 text-xs font-body">Call or Text Anytime</p>
                </div>
              </a>
              <a href="mailto:Xtreme.Kleen2023@gmail.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-xk-red/15 rounded-lg flex items-center justify-center group-hover:bg-xk-red/25 transition-colors">
                  <Mail className="w-5 h-5 text-xk-red" />
                </div>
                <div>
                  <p className="text-xk-warm-white font-heading font-bold text-base">Xtreme.Kleen2023@gmail.com</p>
                  <p className="text-xk-warm-white/40 text-xs font-body">Email Us</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-xk-red/15 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-xk-red" />
                </div>
                <div>
                  <p className="text-xk-warm-white font-heading font-bold text-base">Corpus Christi · McAllen · San Antonio</p>
                  <p className="text-xk-warm-white/40 text-xs font-body">Serving All of South & Central Texas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-xk-red/15 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-xk-red" />
                </div>
                <div>
                  <p className="text-xk-warm-white font-heading font-bold text-base">Quick Response</p>
                  <p className="text-xk-warm-white/40 text-xs font-body">We respond within 24 hours</p>
                </div>
              </div>
            </div>

            <p className="text-xk-warm-white/40 italic font-body text-sm border-l-2 border-xk-red/40 pl-4">
              "Let's get you cleaned up right the first time."
            </p>
          </div>

          <div className="bg-xk-steel/80 border border-xk-warm-white/10 rounded-xl p-7 md:p-8">
            <h3 className="font-heading font-bold text-xl text-xk-warm-white mb-6">
              Request Your Free Estimate
            </h3>
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
              <input
                type="text"
                placeholder="Service Location / City"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className={inputClass}
                maxLength={100}
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={inputClass}
              >
                <option value="">Select Service Type</option>
                {serviceTypes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <textarea
                placeholder="Tell us about the job"
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className={`${inputClass} min-h-[100px] resize-none`}
                maxLength={1000}
              />
              <div className="flex items-center gap-6 text-xk-warm-white font-body text-sm">
                <span className="text-xk-warm-white/50">Preferred Contact:</span>
                {["call", "text", "email"].map((c) => (
                  <label key={c} className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contact"
                      value={c}
                      checked={form.contact === c}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className="accent-xk-red"
                    />
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </label>
                ))}
              </div>
              <button
                type="submit"
                className="w-full bg-xk-red text-xk-warm-white font-heading font-bold text-base py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
              >
                GET MY FREE QUOTE →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
