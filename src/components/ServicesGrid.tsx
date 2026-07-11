import { Droplets, Building2, Home, Settings, Flame, Leaf } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Residential Power Washing",
    desc: "Driveways, sidewalks, fences, patios, and home exteriors — restore your property's curb appeal fast.",
  },
  {
    icon: Building2,
    title: "Commercial Power Washing",
    desc: "Storefronts, parking lots, warehouses, and commercial buildings kept spotless and inviting.",
  },
  {
    icon: Home,
    title: "Soft Washing",
    desc: "Low-pressure cleaning for roofs, aged stucco, and delicate surfaces. Safe, effective, thorough.",
  },
  {
    icon: Settings,
    title: "Industrial Equipment Cleaning",
    desc: "Concrete machines, heavy equipment, and industrial machinery cleaned with precision chemical solutions.",
  },
  {
    icon: Flame,
    title: "High Heat Steam Degreasing",
    desc: "The toughest grease and grime removed with high-heat steam. No surface too dirty.",
  },
  {
    icon: Leaf,
    title: "Biodegradable Chemical Cleaning",
    desc: "Eco-friendly biodegradable chemicals — safe for your property and the environment.",
  },
];

const ServicesGrid = () => (
  <section id="services" className="bg-xk-steel py-20 md:py-28">
    <div className="container mx-auto px-4">
      <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
        WHAT WE DO
      </span>
      <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-xk-warm-white text-center mb-4 tracking-tight">
        A Solution for Every Surface
      </h2>
      <p className="text-xk-warm-white/60 text-center max-w-2xl mx-auto mb-14 font-body">
        From concrete pouring machines to your home's roof — we have the right method
        and the right chemicals to get it done right the first time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-xk-light-gray/60 border border-xk-warm-white/8 rounded-xl p-7 hover:border-xk-red/40 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-xk-red/15 rounded-lg flex items-center justify-center mb-5 group-hover:bg-xk-red/25 transition-colors">
              <s.icon className="w-6 h-6 text-xk-red" />
            </div>
            <h3 className="font-heading font-bold text-xk-warm-white text-lg mb-2">
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
