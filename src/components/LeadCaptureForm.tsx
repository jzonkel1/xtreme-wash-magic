import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
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
    "w-full bg-xk-light-gray border border-xk-warm-white/20 text-xk-warm-white px-4 py-3 rounded focus:outline-none focus:border-xk-red focus:ring-1 focus:ring-xk-red font-body text-sm placeholder:text-xk-warm-white/50";

  return (
    <section id="quote" className="bg-xk-charcoal py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-xk-warm-white mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-xk-red font-body mb-8">
              On-site quotes available. We come to you, assess the job, and give
              you a straight price before we start anything.
            </p>

            <div className="space-y-4 mb-8">
              <a href="tel:3619477811" className="flex items-center gap-3 text-xk-red font-heading text-lg hover:text-xk-red-glow transition-colors">
                <Phone className="w-5 h-5" /> 361-947-7811 — Call or Text
              </a>
              <a href="mailto:Xtreme.Kleen2023@gmail.com" className="flex items-center gap-3 text-xk-red font-heading text-lg hover:text-xk-red-glow transition-colors">
                <Mail className="w-5 h-5" /> Xtreme.Kleen2023@gmail.com
              </a>
              <div className="flex items-center gap-3 text-xk-red font-heading text-lg">
                <MapPin className="w-5 h-5" /> Corpus Christi · McAllen · San Antonio, TX
              </div>
            </div>

            <p className="text-xk-warm-white/60 italic font-body text-sm">
              "Let's get you cleaned up right the first time."
            </p>
          </div>

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
              <span className="text-xk-warm-white/70">Preferred Contact:</span>
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
              className="w-full bg-xk-red text-xk-warm-white font-heading font-bold text-lg py-4 rounded hover:bg-xk-red-glow transition-colors shadow-glow-red"
            >
              GET MY FREE QUOTE →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
