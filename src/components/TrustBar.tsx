import { Shield, MapPin, Leaf, Clock, Home } from "lucide-react";

/**
 * `short` is the phone-width label. On a 390px screen a centred flex-wrap of
 * five items breaks into a ragged three-row block with one word stranded on its
 * own line — so mobile gets an explicit 2-column grid instead, with the one long
 * item (Residential · Commercial · Industrial) spanning the full width.
 * Desktop keeps the single pipe-separated row.
 */
const items = [
  { icon: Clock, label: "Open 24 Hours", short: "Open 24 Hours" },
  { icon: Shield, label: "Fully Insured", short: "Fully Insured" },
  { icon: Leaf, label: "True Soft Wash — No Damage", short: "Soft Wash — No Damage" },
  { icon: MapPin, label: "Portland & the Coastal Bend", short: "Portland & Coastal Bend" },
  {
    icon: Home,
    label: "Residential · Commercial · Industrial",
    short: "Residential · Commercial · Industrial",
    wide: true,
  },
];

const TrustBar = () => (
  <section className="bg-xk-red py-4">
    <div className="container mx-auto px-4">
      {/* Mobile: 2-up grid, long item full width. */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 md:hidden">
        {items.map((item) => (
          <span
            key={item.label}
            className={`font-heading font-bold text-xk-warm-white text-[11px] tracking-wide leading-tight flex items-center justify-center gap-1.5 text-center ${
              item.wide ? "col-span-2 pt-0.5" : ""
            }`}
          >
            <item.icon className="w-3.5 h-3.5 text-xk-warm-white/80 flex-shrink-0" />
            {item.short}
          </span>
        ))}
      </div>

      {/* Desktop: one row, pipe separated. */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
        {items.map((item, i) => (
          <span
            key={item.label}
            className="font-heading font-bold text-xk-warm-white text-sm tracking-wide flex items-center gap-2"
          >
            <item.icon className="w-4 h-4 text-xk-warm-white/80" />
            {item.label}
            {i < items.length - 1 && (
              <span className="ml-4 text-xk-warm-white/30">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
