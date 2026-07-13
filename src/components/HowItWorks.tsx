import { Phone, ClipboardList, Calendar } from "lucide-react";
import { steps, business } from "@/data";

const stepIcons = [Phone, ClipboardList, Calendar];

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
        {steps.map((s, i) => {
          const Icon = stepIcons[i];
          return (
            <div key={s.num} className="relative text-center">
              <div className="w-16 h-16 bg-xk-red/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Icon className="w-7 h-7 text-xk-red" />
              </div>
              <span className="font-heading text-xk-red font-bold text-sm tracking-wider mb-2 block">
                STEP {s.num}
              </span>
              <h3 className="font-display uppercase text-xk-text-dark text-xl mb-2 tracking-tight">
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
          );
        })}
      </div>

      {/* Two ways in, not one. Step 1 of this section is literally "get in touch",
          so the box that closes it shouldn't offer a phone call as the only door —
          plenty of people would rather grab a slot than talk to a stranger, and
          the booking calendar is right there further down the page. */}
      <div className="bg-xk-red rounded-xl py-9 px-8 text-center max-w-3xl mx-auto">
        <p className="text-xk-warm-white font-display uppercase text-xl md:text-2xl mb-3 tracking-tight">
          Ready to get started? It's that simple.
        </p>
        <p className="text-xk-warm-white/85 font-body text-sm md:text-base mb-6 max-w-xl mx-auto leading-relaxed">
          Reach us any time at {business.phone} — or pick a time online and we'll
          come to you.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 bg-xk-charcoal text-xk-warm-white font-heading font-bold px-8 py-3.5 rounded-lg hover:bg-xk-steel transition-colors"
          >
            <Phone className="w-5 h-5" />
            CALL OR TEXT {business.phone}
          </a>
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2.5 border-2 border-xk-warm-white/60 text-xk-warm-white font-heading font-bold px-8 py-3.5 rounded-lg hover:bg-xk-warm-white hover:text-xk-red transition-colors"
          >
            <Calendar className="w-5 h-5" />
            BOOK ONLINE
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
