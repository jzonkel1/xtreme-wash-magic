import { MapPin, Clock, Phone } from "lucide-react";
import { serviceAreas, business } from "@/data";

const ServiceArea = () => (
  <section className="bg-xk-warm-white py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-white border-2 border-xk-red/25 rounded-2xl p-8 md:p-12 shadow-xl">
        <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
          BASED IN PORTLAND, TEXAS
        </span>
        <h2 className="font-display uppercase text-3xl md:text-5xl text-xk-text-dark text-center mb-5 tracking-tight leading-[0.95]">
          A Coastal Bend Crew
          <span className="block">That Knows Coastal Grime</span>
        </h2>
        <p className="text-xk-text-dark/65 text-center max-w-2xl mx-auto mb-9 font-body leading-relaxed">
          Salt air, humidity, and year-round algae are a different problem than
          inland dirt — and they come back if they're not treated right. We're
          local, so we know exactly what the Gulf does to a property.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {serviceAreas.map((a) => (
            <span
              key={a}
              className="flex items-center gap-1.5 bg-xk-text-dark/[0.04] border border-xk-text-dark/10 text-xk-text-dark/80 font-heading font-medium text-sm px-3.5 py-2 rounded-lg"
            >
              <MapPin className="w-3.5 h-3.5 text-xk-red" />
              {a}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={business.phoneHref}
            className="flex items-center justify-center gap-2.5 bg-xk-red text-xk-warm-white font-heading font-bold text-base py-4 rounded-lg hover:bg-xk-red-glow transition-all"
          >
            <Phone className="w-5 h-5" />
            CALL OR TEXT {business.phone}
          </a>
          <div className="flex items-center justify-center gap-2.5 bg-xk-text-dark/[0.04] border border-xk-text-dark/10 text-xk-text-dark font-heading font-semibold text-base py-4 rounded-lg">
            <Clock className="w-5 h-5 text-xk-red" />
            {business.hours}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceArea;
