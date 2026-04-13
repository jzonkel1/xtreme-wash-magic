import { Droplets, Building2, Home, Settings, Flame, Leaf } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "RESIDENTIAL POWER WASHING",
    desc: "Driveways, sidewalks, fences, patios, and home exteriors. Restore your property's curb appeal fast.",
  },
  {
    icon: Building2,
    title: "COMMERCIAL POWER WASHING",
    desc: "Storefronts, parking lots, warehouses, and commercial buildings. Keep your business looking its best.",
  },
  {
    icon: Home,
    title: "SOFT WASHING",
    desc: "Low-pressure cleaning for roofs, aged stucco, and delicate surfaces. Safe, effective, and thorough.",
  },
  {
    icon: Settings,
    title: "INDUSTRIAL EQUIPMENT CLEANING",
    desc: "Concrete pouring machines, heavy equipment, and industrial machinery cleaned with precision chemical solutions.",
  },
  {
    icon: Flame,
    title: "HIGH HEAT STEAM DEGREASING",
    desc: "The toughest grease and grime removed with high-heat steam. No surface too dirty for Xtreme Kleen.",
  },
  {
    icon: Leaf,
    title: "BIODEGRADABLE CHEMICAL CLEANING",
    desc: "All washes completed with eco-friendly biodegradable chemicals — safe for your property and the environment.",
  },
];

const ServicesGrid = () => (
  <section className="bg-xk-steel py-20">
    <div className="container mx-auto px-4">
      <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
        WHAT WE DO
      </span>
      <h2 className="font-heading font-bold text-3xl md:text-5xl text-xk-warm-white text-center mb-4">
        A Solution for Every Surface
      </h2>
      <p className="text-xk-warm-white/70 text-center max-w-2xl mx-auto mb-12 font-body">
        Whether it's a concrete pouring machine, a commercial property, or your home's roof —
        we have the right method and the right chemicals to get it done right the first time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-xk-light-gray border-l-4 border-xk-red p-6 rounded hover:border-glow-red transition-all duration-300 group"
          >
            <s.icon className="w-10 h-10 text-xk-red mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading font-bold text-xk-warm-white text-lg mb-2">{s.title}</h3>
            <p className="text-xk-warm-white/70 text-sm font-body">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
