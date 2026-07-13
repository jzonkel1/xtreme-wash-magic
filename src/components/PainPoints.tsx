import { Phone, CalendarDays } from "lucide-react";
import { painPoints, business } from "@/data";
import { HandDrawnIcon } from "@/components/icons/HandDrawn";

/**
 * This section's whole job is to make waiting feel expensive — and for a long
 * time it did that and then offered the reader nothing at all, handing them
 * straight off to the reviews. Agitating a problem and then providing no way to
 * act on it is the most wasteful thing a page can do: you spend the urgency you
 * just built and bank none of it.
 *
 * So it closes with both doors — call (for the person who wants a human now) and
 * book (for the person who would rather not talk to anyone). Not the calendar
 * itself: booking a visit means inviting a stranger onto your property, and this
 * early the reader hasn't met the reviews, the method, or the man yet. The jump
 * link takes anyone who's already sold straight to it.
 */
const PainPoints = () => (
  <section className="bg-xk-warm-white py-20 md:py-28">
    <div className="container mx-auto px-4">
      <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
        DON'T LET IT SET IN
      </span>
      <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl text-xk-text-dark text-center mb-4 tracking-tight leading-[0.92]">
        The Cost of Putting It Off
      </h2>
      <p className="text-xk-text-dark/70 text-center max-w-xl mx-auto mb-14 font-body text-lg">
        On the coast, waiting is never free. Here's what it costs you:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {painPoints.map((p) => (
          <div
            key={p.title}
            className="bg-black/[0.03] border border-xk-text-dark/10 rounded-xl p-8 flex flex-col items-center text-center"
          >
            <HandDrawnIcon
              name={p.icon}
              className="w-20 h-20 text-xk-text-dark/80 mb-5"
            />
            <h3 className="font-display uppercase text-2xl md:text-3xl text-xk-text-dark mb-2.5 tracking-tight leading-none">
              {p.title}
            </h3>
            <p className="font-heading font-semibold text-xk-red text-base md:text-lg leading-snug">
              {p.cost}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="font-heading font-semibold text-xk-text-dark/70 text-base md:text-lg mb-6 max-w-xl mx-auto leading-relaxed">
          None of it gets cheaper by waiting. The quote is free, and we come to
          you.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-lg sm:max-w-none mx-auto">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
          >
            <Phone className="w-5 h-5" />
            CALL OR TEXT {business.phone}
          </a>
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2.5 border-2 border-xk-text-dark/15 text-xk-text-dark font-heading font-bold text-base px-8 py-4 rounded-lg hover:border-xk-red hover:text-xk-red transition-colors"
          >
            <CalendarDays className="w-5 h-5 text-xk-red" />
            BOOK A FREE ESTIMATE
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PainPoints;
