import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { reels, business } from "@/data";

/**
 * Self-hosted job footage. Clips autoplay muted + looping (so they work as
 * ambient "before/after" motion), with a tap to unmute and hear the job.
 */
const ReelCard = ({
  src,
  poster,
  title,
  caption,
}: {
  src: string;
  poster: string;
  title: string;
  caption: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  /**
   * Lazy-attach the source, then play — only once the clip is actually on screen.
   *
   * The `src`/`autoPlay` combination is a trap: a <video autoPlay> starts
   * downloading the moment it mounts, no matter what `preload` says and no
   * matter that an observer pauses it a beat later. With every carousel slide
   * mounted, that meant the homepage pulled ~9MB of video before the visitor
   * had scrolled anywhere near it. So the element ships with no src at all, and
   * we set it on first intersection. Off-screen slides cost exactly zero bytes.
   */
  useEffect(() => {
    const v = videoRef.current;
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

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  };

  return (
    <div className="w-full max-w-[300px] bg-xk-light-gray/50 border border-xk-warm-white/10 rounded-xl overflow-hidden flex flex-col">
      <div className="relative bg-black aspect-[9/16]">
        {/* No `src` and no `autoPlay` here on purpose — see the effect above.
            The poster carries the visual until the clip scrolls into view. */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          loop
          muted
          playsInline
          preload="none"
        />
        <button
          onClick={toggleSound}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/55 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-xk-red transition-colors"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-5 flex-1">
        <h3 className="font-heading font-bold text-xk-warm-white text-base mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-xk-warm-white/55 text-sm font-body leading-relaxed">
          {caption}
        </p>
      </div>
    </div>
  );
};

const GAP = 24; // px — must match the `gap-6` on the track

/** Slides visible at once, by breakpoint. Mirrors the Crosscut reel carousel. */
const usePerView = () => {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const sm = window.matchMedia("(min-width: 640px)");
    const lg = window.matchMedia("(min-width: 1024px)");
    const sync = () => setPerView(lg.matches ? 4 : sm.matches ? 2 : 1);
    sync();
    sm.addEventListener("change", sync);
    lg.addEventListener("change", sync);
    return () => {
      sm.removeEventListener("change", sync);
      lg.removeEventListener("change", sync);
    };
  }, []);

  return perView;
};

/**
 * Portrait reel carousel — the house pattern for 9:16 job footage.
 *
 * A transform-translated track, NOT a rotating window of cards: every slide
 * stays mounted so the <video> elements are never re-created. Paging by
 * re-rendering a modulo window (the way the Facebook-iframe carousels do it)
 * would remount the video on each arrow click and restart playback from zero.
 *
 * Offscreen slides cost nothing: the track's overflow clip means the
 * IntersectionObserver inside each ReelCard sees them as off-screen and pauses
 * them, and preload="metadata" keeps them from pulling video data until played.
 */
const Reels = () => {
  const perView = usePerView();
  const [page, setPage] = useState(0);

  const pages = Math.max(1, Math.ceil(reels.length / perView));
  const clamped = Math.min(page, pages - 1);

  const btnClass =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-xk-warm-white/20 text-xk-warm-white/60 transition hover:border-xk-red hover:text-xk-warm-white disabled:opacity-25 disabled:hover:border-xk-warm-white/20 disabled:hover:text-xk-warm-white/60 disabled:cursor-not-allowed";

  return (
    <section id="work" className="relative bg-xk-medium-gray py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 tex-grid opacity-40" />

      <div className="relative container mx-auto px-4">
        <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
          — STRAIGHT FROM THE JOB SITE —
        </span>
        <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-xk-warm-white text-center mb-5 tracking-tight">
          Watch the Grime Come Off
        </h2>
        <p className="text-xk-warm-white/60 text-center max-w-2xl mx-auto mb-4 font-body leading-relaxed">
          No stock footage. Every clip is a real {business.brand} job across the
          Coastal Bend — driveways, roofs, glass, equipment, and full home
          exteriors.
        </p>
        <p className="text-xk-warm-white/40 text-center text-sm font-body mb-12 flex items-center justify-center gap-1.5">
          <Play className="w-3.5 h-3.5" /> Playing muted — tap the speaker to turn on sound
        </p>

        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={clamped === 0}
            aria-label="Previous clips"
            className={btnClass}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
              style={{
                transform: `translateX(calc(-${clamped} * (100% + ${GAP}px)))`,
              }}
            >
              {reels.map((r) => (
                <div
                  key={r.src}
                  className="shrink-0 flex justify-center"
                  style={{
                    flexBasis: `calc((100% - ${(perView - 1) * GAP}px) / ${perView})`,
                  }}
                >
                  <ReelCard {...r} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
            disabled={clamped >= pages - 1}
            aria-label="More clips"
            className={btnClass}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {pages > 1 && (
          <div className="flex justify-center gap-1.5 mt-8">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to clips ${i + 1} of ${pages}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === clamped
                    ? "w-5 bg-xk-red"
                    : "w-1.5 bg-xk-warm-white/30 hover:bg-xk-warm-white/50"
                }`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="#quote"
            className="inline-block bg-xk-red text-xk-warm-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
          >
            Get This Done at My Property
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reels;
