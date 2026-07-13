import { useState } from "react";
import { beforeAfters } from "@/data";

/**
 * Before/after flip cards — click to flip from before to after.
 *
 * 4:3, not squares, and laid out as a stack of wide cards rather than a tight
 * grid: two across on desktop, one across on mobile. The flip is the point —
 * the same frame swapping in place is what sells the transformation.
 */
const FlipCard = ({
  before,
  after,
  label,
  sub,
}: {
  before: string;
  after: string;
  label: string;
  sub: string;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setFlipped((f) => !f)}
        aria-label={`${label} — show ${flipped ? "before" : "after"}`}
        className="relative w-full block cursor-pointer group"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative w-full aspect-[4/3] transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* BEFORE */}
          <div
            className="absolute inset-0 rounded-xl overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={before}
              alt={`${label} — Before`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-xk-text-dark/75 via-transparent to-transparent" />
            <span className="absolute top-4 left-4 bg-xk-charcoal/85 text-xk-warm-white border border-xk-warm-white/25 font-heading font-bold text-xs tracking-wider px-3 py-1.5 rounded-md">
              BEFORE
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
              <span className="font-display uppercase text-xl md:text-2xl text-xk-warm-white tracking-tight block">
                {label}
              </span>
              <span className="block text-xk-warm-white/70 text-xs font-body mt-1 group-hover:text-xk-red transition-colors">
                Tap to see the result →
              </span>
            </div>
          </div>

          {/* AFTER */}
          <div
            className="absolute inset-0 rounded-xl overflow-hidden"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <img
              src={after}
              alt={`${label} — After`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-xk-text-dark/75 via-transparent to-transparent" />
            <span className="absolute top-4 left-4 bg-xk-red text-xk-warm-white font-heading font-bold text-xs tracking-wider px-3 py-1.5 rounded-md">
              AFTER
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
              <span className="font-display uppercase text-xl md:text-2xl text-xk-warm-white tracking-tight block">
                {label}
              </span>
              <span className="block text-xk-warm-white/70 text-xs font-body mt-1 group-hover:text-xk-red transition-colors">
                ← Tap to see before
              </span>
            </div>
          </div>
        </div>
      </button>

      <p className="text-xk-text-dark/55 font-body text-sm mt-3">{sub}</p>
    </div>
  );
};

/**
 * `home` shows only the pairs flagged `home: true` in data.ts (a deliberate
 * pick, not the first N — so reordering the list can't quietly change what the
 * homepage leads with). /our-work passes nothing and gets every pair.
 */
const PhotoGallery = ({ home }: { home?: boolean }) => {
  const shown = home ? beforeAfters.filter((p) => p.home) : beforeAfters;

  return (
    <section className="bg-xk-warm-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
          — PROVEN RESULTS —
        </span>
        <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-xk-text-dark text-center mb-4 tracking-tight">
          The Results Speak for Themselves
        </h2>
        <p className="text-xk-text-dark/60 text-center max-w-xl mx-auto mb-4 font-body leading-relaxed">
          Real Xtreme Kleen jobs — houses, storefronts, concrete, and plant
          equipment. Same surface, same angle, before and after.
        </p>
        <p className="text-xk-red text-center text-sm font-heading font-semibold mb-12">
          Click any photo to see the transformation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {shown.map((p) => (
            <FlipCard key={p.label} {...p} />
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#quote"
            className="inline-block bg-xk-red text-xk-warm-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
          >
            Like What You See? Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
