import { useState } from "react";
import before3 from "@/assets/before3.jpg";
import after3 from "@/assets/after3.jpg";
import before7 from "@/assets/before7.jpg";
import after7 from "@/assets/after7.jpg";

const projects = [
  {
    before: before3,
    after: after3,
    label: "Brick House — Soft Wash",
    category: "residential",
  },
  {
    before: before7,
    after: after7,
    label: "Driveway — Pressure Wash",
    category: "residential",
  },
];

const FlipCard = ({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="relative cursor-pointer group"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-72 md:h-80 transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front — Before */}
        <div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={before}
            alt={`${label} — Before`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-xk-steel/20 group-hover:bg-xk-steel/40 transition-all duration-300" />
          <div className="absolute top-3 left-3 bg-xk-red text-xk-warm-white font-heading font-bold text-xs px-3 py-1 rounded">
            BEFORE
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-xk-steel/80 to-transparent">
            <span className="font-heading text-sm text-xk-warm-white">{label}</span>
            <span className="block text-xk-warm-white/70 text-xs font-body mt-0.5">
              Tap to see the result →
            </span>
          </div>
        </div>

        {/* Back — After */}
        <div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={after}
            alt={`${label} — After`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-xk-steel/20 group-hover:bg-xk-steel/40 transition-all duration-300" />
          <div className="absolute top-3 left-3 bg-green-600 text-xk-warm-white font-heading font-bold text-xs px-3 py-1 rounded">
            AFTER
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-xk-steel/80 to-transparent">
            <span className="font-heading text-sm text-xk-warm-white">{label}</span>
            <span className="block text-xk-warm-white/70 text-xs font-body mt-0.5">
              ← Tap to see before
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhotoGallery = () => {
  return (
    <section className="bg-xk-warm-white py-20">
      <div className="container mx-auto px-4">
        <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
          OUR WORK
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-xk-text-dark text-center mb-4">
          The Results Speak for Themselves
        </h2>
        <p className="text-xk-text-dark/70 text-center max-w-xl mx-auto mb-4 font-body">
          From concrete cleaning to industrial equipment degreasing — here's
          what Xtreme Kleen delivers.
        </p>
        <p className="text-xk-red text-center text-sm font-heading font-semibold mb-10">
          Click any photo to flip and see the transformation
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <FlipCard
              key={i}
              before={p.before}
              after={p.after}
              label={p.label}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#quote"
            className="inline-block bg-xk-red text-xk-warm-white font-heading font-bold px-8 py-3 rounded hover:bg-xk-red-glow transition-colors shadow-glow-red"
          >
            Like what you see? Get your free quote today.
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
