import { Link } from "react-router-dom";
import { MapPin, Phone, CalendarDays, Truck } from "lucide-react";
import { business, travel } from "@/data";
import { locationsContent } from "@/content/locations";

/**
 * Where we work.
 *
 * This used to be a pile of loose pills: ten ragged flex-wrapped chips (nine
 * towns plus "Coastal Bend", which isn't even a town — it's the region, and
 * mixing a region in with cities is what made the row read as random), then a
 * grey card, then a red button sitting next to a grey box that LOOKED like a
 * button but wasn't clickable. Four different box shapes, no alignment, nothing
 * repeating. That's the "no pattern" feeling.
 *
 * Now: the nine real towns are a proper grid — and it's exactly nine, so a 3-up
 * grid fills every row with nothing stranded. Each cell links to that town's own
 * page, so the block does real work (nine internal links to the city pages)
 * instead of just decorating. It's driven straight off locationsContent, so a
 * new city page can never fall out of sync with this list.
 *
 * The travel note drops from a card to a quiet rule, and the bottom row is two
 * REAL actions — call, or book — instead of one action and one fake button.
 */
const ServiceArea = () => (
  <section className="bg-xk-warm-white py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-white border-2 border-xk-red/25 rounded-2xl p-8 md:p-12 shadow-xl">
        <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
          — WHERE WE WORK —
        </span>
        <h2 className="font-display uppercase text-3xl md:text-5xl text-xk-text-dark text-center mb-5 tracking-tight leading-[0.95]">
          Based in Portland.
          <span className="block">Working All Over Texas.</span>
        </h2>
        <p className="text-xk-text-dark/65 text-center max-w-2xl mx-auto mb-9 font-body leading-relaxed">
          The Coastal Bend is home — salt air, humidity, and year-round algae are
          a different problem than inland dirt, and we know exactly what the Gulf
          does to a property. But the trailer doesn't stop at the county line: if
          the job's worth the drive, we'll take it anywhere in the state.
        </p>

        {/* Nine towns, nine cells. The hairline grid comes from a 1px gap over a
            grey backing, so the cells share edges instead of floating — that
            shared edge is what makes it read as one object rather than nine. */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-xk-text-dark/10 border border-xk-text-dark/10 rounded-xl overflow-hidden mb-9">
          {locationsContent.map((l) => (
            <Link
              key={l.slug}
              to={`/service-areas/${l.slug}`}
              className="group flex items-center gap-2.5 bg-white px-4 py-4 transition-colors hover:bg-xk-red/[0.06] last:col-span-2 sm:last:col-span-1"
            >
              <MapPin className="w-4 h-4 text-xk-red flex-none" />
              <span className="font-heading font-semibold text-sm text-xk-text-dark/80 group-hover:text-xk-red transition-colors">
                {l.city}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-start gap-3.5 border-l-2 border-xk-red/40 pl-5 mb-9">
          <Truck className="w-5 h-5 text-xk-red flex-none mt-0.5" />
          <div>
            <p className="font-heading font-bold text-xk-text-dark text-base mb-1">
              {travel.headline}
            </p>
            <p className="text-xk-text-dark/60 font-body text-sm leading-relaxed">
              {travel.blurb}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={business.phoneHref}
            className="flex items-center justify-center gap-2.5 bg-xk-red text-xk-warm-white font-heading font-bold text-base py-4 rounded-lg hover:bg-xk-red-glow transition-all"
          >
            <Phone className="w-5 h-5" />
            CALL OR TEXT {business.phone}
          </a>
          <a
            href="#book"
            className="flex items-center justify-center gap-2.5 border-2 border-xk-text-dark/15 text-xk-text-dark font-heading font-bold text-base py-4 rounded-lg hover:border-xk-red hover:text-xk-red transition-colors"
          >
            <CalendarDays className="w-5 h-5 text-xk-red" />
            BOOK ONLINE
          </a>
        </div>
        <p className="text-center text-xk-text-dark/45 font-body text-xs mt-4">
          {business.hours} — a real person answers, not a call center.
        </p>
      </div>
    </div>
  </section>
);

export default ServiceArea;
