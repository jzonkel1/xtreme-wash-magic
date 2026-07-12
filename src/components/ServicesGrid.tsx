import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
          <Link
            to={`/services/${s.slug}`}
            key={s.title}
            className="group relative bg-xk-light-gray/40 border border-xk-warm-white/10 rounded-xl overflow-hidden hover:border-xk-red/50 hover:bg-xk-light-gray/60 transition-all duration-300"
          >
            {/* Real job photo */}
            <div className="h-44 overflow-hidden">
              <img
                src={s.photo}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-t from-xk-steel/60 via-transparent to-transparent" />
            </div>

            {/* Hand-drawn icon badge riding the photo edge */}
            <div className="absolute left-6 top-44 -translate-y-1/2 w-14 h-14 rounded-xl bg-xk-red flex items-center justify-center shadow-glow-red">
              <HandDrawnIcon name={s.icon} className="w-8 h-8 text-xk-warm-white" />
            </div>

            <div className="px-7 pb-7 pt-11">
              <h3 className="font-display uppercase text-xk-warm-white text-xl mb-2.5 tracking-tight">
                {s.title}
              </h3>
              <p className="text-xk-warm-white/60 text-sm font-body leading-relaxed mb-4">
                {s.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xk-red font-heading font-semibold text-sm">
                Details, FAQs & Pricing Info
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
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
