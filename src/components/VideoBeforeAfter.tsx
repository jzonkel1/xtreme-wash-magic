import { useEffect, useRef } from "react";
import type { ServiceVideoPair } from "@/content/services";

/**
 * Before/after as VIDEO — the strongest proof a washing company has.
 *
 * Same lazy-attach rule as the reels: no `src` and no `autoPlay` until the clip
 * is actually on screen, or the browser downloads it the moment it mounts.
 *
 * No sound toggle: every clip in public/reels is a silent capture (zero audio
 * streams), so the speaker button here was a control that did nothing.
 */
const Clip = ({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!v.src) v.src = src;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);

  const isBefore = label === "BEFORE";

  return (
    <div className="relative bg-black rounded-xl overflow-hidden border border-xk-warm-white/10">
      <div className="aspect-[9/16]">
        <video
          ref={ref}
          className="w-full h-full object-cover"
          poster={poster}
          loop
          muted
          playsInline
          preload="none"
        />
      </div>

      <span
        className={`absolute top-3 left-3 px-3 py-1 rounded-md font-heading font-bold text-xs tracking-wider ${
          isBefore
            ? "bg-xk-charcoal/85 text-xk-warm-white/85 border border-xk-warm-white/25"
            : "bg-xk-red text-xk-warm-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

const VideoBeforeAfter = ({ pair }: { pair: ServiceVideoPair }) => {
  return (
    <section className="bg-xk-charcoal py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
            — REAL JOB, REAL FOOTAGE —
          </span>
          <h2 className="font-display uppercase text-3xl md:text-4xl text-xk-warm-white mb-4 leading-tight tracking-tight">
            {pair.title}
          </h2>
          <p className="text-xk-warm-white/60 font-body leading-relaxed">
            {pair.caption}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <Clip src={pair.before.src} poster={pair.before.poster} label="BEFORE" />
          <Clip src={pair.after.src} poster={pair.after.poster} label="AFTER" />
        </div>
      </div>
    </section>
  );
};

export default VideoBeforeAfter;
