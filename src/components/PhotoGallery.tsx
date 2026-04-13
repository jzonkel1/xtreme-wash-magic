import { useState } from "react";
import before1 from "@/assets/before1.jpg";
import after1 from "@/assets/after1.jpg";
import before2 from "@/assets/before2.jpg";
import after2 from "@/assets/after2.jpg";
import { X } from "lucide-react";

const photos = [
  { src: before1, label: "Brick Patio — Before", category: "residential" },
  { src: after1, label: "Brick Patio — After", category: "residential" },
  { src: before2, label: "Semi Truck — Before", category: "equipment" },
  { src: after2, label: "Semi Truck — After", category: "equipment" },
];

const filters = ["ALL", "RESIDENTIAL", "EQUIPMENT"] as const;

const PhotoGallery = () => {
  const [active, setActive] = useState<string>("ALL");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "ALL"
      ? photos
      : photos.filter((p) => p.category === active.toLowerCase());

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <span className="font-heading text-xk-blue text-sm tracking-widest font-semibold block text-center mb-3">
          OUR WORK
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
          The Results Speak for Themselves
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-8 font-body">
          From concrete cleaning to industrial equipment degreasing — here's
          what Xtreme Kleen delivers.
        </p>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-heading text-sm px-5 py-2 rounded transition-colors ${
                active === f
                  ? "bg-xk-blue text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <div
              key={i}
              onClick={() => setLightbox(p.src)}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-xk-charcoal/0 group-hover:bg-xk-charcoal/40 transition-all duration-300 group-hover:border-2 group-hover:border-xk-blue group-hover:border-glow-blue rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-xk-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-heading text-sm text-primary-foreground">{p.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#quote"
            className="inline-block bg-xk-blue text-primary-foreground font-heading font-bold px-8 py-3 rounded hover:bg-xk-blue-glow transition-colors shadow-glow-blue"
          >
            Like what you see? Get your free quote today.
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-xk-charcoal/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-primary-foreground hover:text-xk-blue transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
