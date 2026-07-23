import heroBg from "@/assets/hero-spray.webp";
import logo from "@/assets/logo.jpg";
import { Phone, Shield, MapPin, Leaf, Star } from "lucide-react";
import { business } from "@/data";
import QuoteWizard from "@/components/QuoteWizard";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative min-h-hero flex items-center pt-20 bg-xk-charcoal"
    >
      {/* Background: real video when supplied, otherwise the still with a slow
          cinematic drift. Swap by setting business.heroVideo in src/data.ts. */}
      <div className="absolute inset-0 overflow-hidden">
        {business.heroVideo ? (
          <video
            // Mobile crops this wide clip to a narrow slice — bias it right so
            // the wand nozzles stay in frame instead of a wall of mist.
            className="absolute inset-0 w-full h-full object-cover object-[85%_50%] md:object-center"
            src={business.heroVideo}
            poster={heroBg}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center animate-ken-burns"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
        )}
      </div>
      {/* Layered overlay: darkest behind the headline, warm red glow top-right, grounded vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(102deg, rgba(20,18,17,0.96) 0%, rgba(20,18,17,0.86) 40%, rgba(24,20,19,0.72) 64%, rgba(34,17,17,0.82) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(620px 440px at 90% 4%, rgba(226,54,54,0.20), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Left side — Hero content (centered on mobile, left on desktop) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-3 mb-5 md:mb-8 animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              {/* The logo is ALREADY in the sticky header, which is on screen at
                  the same time on a phone — the same mark twice, and it pushed the
                  CTAs below the fold. Desktop keeps it: there the header logo is
                  small and off in the corner. */}
              <img
                src={logo}
                alt="Xtreme Kleen"
                className="hidden lg:block h-14 md:h-18 rounded-lg shadow-lg"
              />
              <div>
                {/* Centre the stars on mobile: this line is narrower than the
                    PORTLAND line beneath it, so left-aligning it inside a centred
                    block made it read as mis-aligned. */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xk-warm-white/70 text-xs font-body">5-Star Rated</span>
                </div>
                <span className="font-heading text-xs tracking-widest text-xk-warm-white/60 font-medium">
                  PORTLAND, TX · THE COASTAL BEND
                </span>
              </div>
            </div>

            <h1
              className="font-display uppercase text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight mb-4 md:mb-5 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              <span className="text-xk-warm-white block">Professional</span>
              <span className="text-xk-red block whitespace-nowrap">Power Washing</span>
              <span className="text-xk-warm-white block">That Delivers Results</span>
            </h1>

            <p
              className="max-w-xl mx-auto lg:mx-0 text-xk-warm-white/75 text-base md:text-lg mb-6 md:mb-8 font-body leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              {/* Phones get the short version — the full paragraph runs six lines
                  on a 390px screen and on its own pushed the CTAs out of view. */}
              <span className="md:hidden">
                Soft wash, pressure washing, roof and window cleaning across the
                Coastal Bend. No high pressure, no damage.
              </span>
              <span className="hidden md:inline">
                Soft wash, pressure washing, roof and window cleaning across Portland
                and the Coastal Bend. No high pressure, no damage — just the right
                chemistry and professional equipment. Clean. Safe. Like new.
              </span>
            </p>

            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center lg:justify-start lg:items-start gap-3 mb-6 md:mb-10 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href="#quote"
                className="text-center bg-xk-red text-xk-warm-white font-heading font-bold text-base px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
              >
                GET YOUR FREE QUOTE
              </a>
              <a
                href="tel:3613061551"
                className="border-2 border-xk-warm-white/40 text-xk-warm-white font-heading font-semibold text-base px-8 py-4 rounded-lg hover:bg-xk-warm-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                361-306-1551
              </a>
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up"
              style={{ animationDelay: "0.45s" }}
            >
              {[
                { icon: Star, label: "5.0 Google Rated" },
                { icon: Shield, label: "Fully Insured" },
                { icon: MapPin, label: "Based in Portland" },
                { icon: Leaf, label: "Safe Soft Wash" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center justify-center lg:justify-start gap-2 bg-xk-warm-white/5 border border-xk-warm-white/10 rounded-lg px-3 py-2.5"
                >
                  <b.icon className="w-4 h-4 text-xk-red flex-shrink-0" />
                  <span className="text-xk-warm-white text-xs font-body font-medium leading-tight">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — multi-step Quote Wizard */}
          <div className="lg:col-span-2">
            <div
              className="bg-xk-steel/90 backdrop-blur-sm border border-xk-warm-white/10 rounded-xl p-6 md:p-8 shadow-2xl animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <QuoteWizard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
