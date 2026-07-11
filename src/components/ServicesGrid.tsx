import { services } from "@/data";
import { HandDrawnIcon } from "@/components/icons/HandDrawn";

const ServicesGrid = () => (
  <section id="services" className="relative bg-xk-charcoal py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 tex-grid opacity-30" />

    <div className="relative container mx-auto px-4">
      <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
        WHAT WE DO
      </span>
      <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-xk-warm-white text-center mb-4 tracking-tight">
        A Solution for Every Surface
      </h2>
      <p className="text-xk-warm-white/60 text-center max-w-2xl mx-auto mb-14 font-body leading-relaxed">
        From a stained driveway to an entire condo complex — we bring the right
        method, the right chemistry, and the equipment to reach it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-xk-light-gray/40 border border-xk-warm-white/10 rounded-xl p-7 hover:border-xk-red/50 hover:bg-xk-light-gray/60 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-xl bg-xk-red/15 border border-xk-red/25 flex items-center justify-center mb-6 group-hover:bg-xk-red/25 transition-colors">
              <HandDrawnIcon name={s.icon} className="w-9 h-9 text-xk-red" />
            </div>
            <h3 className="font-display uppercase text-xk-warm-white text-xl mb-2.5 tracking-tight">
              {s.title}
            </h3>
            <p className="text-xk-warm-white/60 text-sm font-body leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#quote"
          className="inline-block bg-xk-red text-xk-warm-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
        >
          Get a Free Quote for Your Project
        </a>
      </div>
    </div>
  </section>
);

export default ServicesGrid;
