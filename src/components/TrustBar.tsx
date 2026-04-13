import { Shield, MapPin, Leaf, Clock, Home } from "lucide-react";

const items = [
  { icon: Clock, label: "5+ Years Experience" },
  { icon: Shield, label: "Fully Insured" },
  { icon: Home, label: "Industrial · Commercial · Residential" },
  { icon: Leaf, label: "Biodegradable Chemicals" },
  { icon: MapPin, label: "Corpus Christi · McAllen · San Antonio" },
];

const TrustBar = () => (
  <section className="bg-xk-red py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-heading font-bold text-xk-warm-white text-xs md:text-sm tracking-wide flex items-center gap-2"
          >
            <item.icon className="w-4 h-4 text-xk-warm-white/80" />
            {item.label}
            {i < items.length - 1 && (
              <span className="ml-4 text-xk-warm-white/30 hidden md:inline">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
