import heroBg from "@/assets/hero-bg.webp";
import logo from "@/assets/logo.jpg";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-xk-charcoal"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-xk-medium-gray/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-16">
        <img
          src={logo}
          alt="Xtreme Kleen"
          className="mx-auto h-16 md:h-24 mb-8"
        />

        <div className="inline-block bg-xk-red/20 border border-xk-red/50 rounded-full px-5 py-2 mb-6">
          <span className="font-heading text-xs md:text-sm tracking-widest text-xk-red font-semibold">
            CORPUS CHRISTI · MCALLEN · SAN ANTONIO · ALL OF TEXAS
          </span>
        </div>

        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          <span className="block">
            <span className="text-xk-red">X</span>
            <span className="text-xk-warm-white">TREME </span>
            <span className="text-xk-red">K</span>
            <span className="text-xk-warm-white">LEEN</span>
          </span>
          <span className="text-xk-red block text-glow-red">
            WASH AWAY THE PAST
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xk-warm-white/80 text-base md:text-lg mb-10 font-body">
          Industrial, commercial, and residential power washing across South and
          Central Texas. High pressure, soft wash, steam degreasing — Xtreme
          Kleen has a solution for every surface and every job.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#quote"
            className="bg-xk-red text-xk-warm-white font-heading font-bold text-lg px-8 py-4 rounded hover:bg-xk-red-glow transition-colors shadow-glow-red animate-pulse-glow"
          >
            GET YOUR FREE QUOTE
          </a>
          <a
            href="tel:3619477811"
            className="border-2 border-xk-warm-white/80 text-xk-warm-white font-heading font-semibold text-lg px-8 py-4 rounded hover:bg-xk-warm-white/10 transition-colors flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call or Text: 361-947-7811
          </a>
        </div>

        <div className="bg-xk-red/15 border border-xk-red/30 rounded-lg inline-flex flex-wrap justify-center gap-x-4 gap-y-1 px-6 py-3">
          {[
            "On-Site Free Quotes Available",
            "Insured",
            "Biodegradable Chemicals",
            "Industrial to Residential",
          ].map((item) => (
            <span
              key={item}
              className="text-xk-warm-white text-xs md:text-sm font-body font-medium flex items-center gap-1.5"
            >
              <span className="text-xk-red">✅</span> {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
