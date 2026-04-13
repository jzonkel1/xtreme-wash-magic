import { CheckCircle } from "lucide-react";

const bullets = [
  "Fully insured to meet all customer requirements",
  "Biodegradable chemicals — safe for every surface",
  "Multiple unique washing methods for any situation",
  "Industrial, commercial, and residential expertise",
  "Free on-site quotes — no surprises on the invoice",
  "Serving Corpus Christi, McAllen & San Antonio",
];

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "3", label: "Cities Served" },
  { value: "FREE", label: "On-Site Quotes" },
  { value: "100%", label: "Satisfaction Goal" },
];

const WhyXtremeKleen = () => (
  <section className="bg-xk-charcoal py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-heading text-xk-blue text-sm tracking-widest font-semibold block mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
            We Don't Leave Until You're Satisfied
          </h2>
          <p className="text-xk-text-light font-body mb-4">
            At Xtreme Kleen we start by actually listening to understand your biggest concerns.
            With 5+ years of experience we've developed multiple unique washing methods to tackle any job.
          </p>
          <p className="text-xk-text-light font-body mb-6">
            We never leave a customer with dissatisfaction. Every surface, every job — done right the first time.
          </p>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-primary-foreground font-body text-sm">
                <CheckCircle className="w-5 h-5 text-xk-blue flex-shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-xk-steel border-l-4 border-xk-blue p-6 rounded-lg"
            >
              <div className="font-heading font-bold text-3xl md:text-4xl text-xk-blue mb-1">
                {s.value}
              </div>
              <div className="text-primary-foreground font-body text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyXtremeKleen;
