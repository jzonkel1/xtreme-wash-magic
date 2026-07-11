import { Phone, ClipboardList, Calendar } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Give Us a Call",
    desc: "Call or text 361-947-7811. Tell us about your property and what needs cleaning. We'll set up a time to take a look.",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "Get Your Free Estimate",
    desc: "We come to you for a free on-site assessment. No guessing, no hidden fees — a clear, honest price before any work begins.",
  },
  {
    num: "03",
    icon: Calendar,
    title: "Schedule Your Clean",
    desc: "Once you're happy with the quote, we schedule your clean and show up ready to work. Done right, done fast.",
  },
];

const HowItWorks = () => (
  <section className="bg-xk-warm-white py-20 md:py-28">
    <div className="container mx-auto px-4">
      <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
        HOW IT WORKS
      </span>
      <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-xk-text-dark text-center mb-4 tracking-tight">
        Getting Clean Has Never Been Easier
      </h2>
      <p className="text-xk-text-dark/60 text-center max-w-xl mx-auto mb-14 font-body">
        Three simple steps from first call to finished job.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-14">
        {steps.map((s, i) => (
          <div key={s.num} className="relative text-center">
            <div className="w-16 h-16 bg-xk-red/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <s.icon className="w-7 h-7 text-xk-red" />
            </div>
            <span className="text-xk-red font-heading font-bold text-sm tracking-wider mb-2 block">
              STEP {s.num}
            </span>
            <h3 className="font-heading font-bold text-xk-text-dark text-lg mb-2">
              {s.title}
            </h3>
            <p className="text-xk-text-dark/60 text-sm font-body leading-relaxed">
              {s.desc}
            </p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 -right-4 w-8 text-xk-red/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-xk-red rounded-xl py-8 px-8 text-center max-w-3xl mx-auto">
        <p className="text-xk-warm-white font-heading text-lg md:text-xl mb-5">
          Ready to get started? It's that simple.
        </p>
        <a
          href="tel:3619477811"
          className="inline-block bg-xk-charcoal text-xk-warm-white font-heading font-bold px-8 py-3.5 rounded-lg hover:bg-xk-steel transition-colors"
        >
          CALL OR TEXT 361-947-7811
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorks;
