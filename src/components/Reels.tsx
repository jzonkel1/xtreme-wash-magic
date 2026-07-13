import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reels, business } from "@/data";

/**
 * Self-hosted job footage. Clips autoplay muted + looping as ambient proof.
 *
 * THERE IS NO SOUND BUTTON, AND THAT IS DELIBERATE. Every clip in public/reels
 * is a silent capture — `ffprobe` reports zero audio streams on all twelve. The
 * speaker toggle that used to sit on each card was a control that did nothing
 * when you pressed it, plus a "tap the speaker to turn on sound" caption
 * promising audio that does not exist. If a clip WITH audio is ever added, the
 * toggle has to come back — but it comes back for that clip, not for all of them.
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

  /**
   * Lazy-attach the source, then play — only once the clip is actually on screen.
   *
   * The `src`/`autoPlay` combination is a trap: a <video autoPlay> starts
   * downloading the moment it mounts, no matter what `preload` says and no
   * matter that an observer pauses it a beat later. With every carousel slide
   * mounted, that meant the homepage pulled megabytes of video before the
   * visitor had scrolled anywhere near it. So the element ships with no src at
   * all, and we set it on first intersection. Off-screen slides cost zero bytes.
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

  return (
    <div className="w-full bg-xk-light-gray/50 border border-xk-warm-white/10 rounded-xl overflow-hidden flex flex-col">
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

/**
 * Portrait reel carousel — the house pattern for 9:16 job footage.
 *
 * A NATIVE scroll-snap track, not a transform-translated one. The old version
 * paged by translating a track, which meant the only way through the clips was
 * the arrow buttons — and nobody taps arrows on portrait video, they swipe. Now
 * the track is a real overflow-x container with snap points, so a phone gets the
 * gesture it already expects (and momentum, and the rubber-band, for free). The
 * arrows survive on desktop, where there is no swipe and a 4-up grid genuinely
 * needs them; they just drive the same native scroll.
 *
 * Slides are sized in exact fractions of the track (80% / 50% / 25%), so one
 * "page" is exactly clientWidth and the arrows land cleanly on a slide edge.
 * The 80% on mobile is on purpose: the sliver of the next card peeking in from
 * the right IS the swipe affordance, which is why there is no "swipe for more"
 * caption cluttering the section.
 *
 * Every slide stays mounted, so the <video> elements are never re-created and
 * playback never restarts. Off-screen ones are paused by the observer above.
 */
const Reels = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const sync = () => {
      const perPage = el.clientWidth;
      if (!perPage) return;
      setPages(Math.max(1, Math.round(el.scrollWidth / perPage)));
      setPage(Math.round(el.scrollLeft / perPage));
    };
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const scrollToPage = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  const btnClass =
    "hidden md:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-xk-warm-white/20 text-xk-warm-white/60 transition hover:border-xk-red hover:text-xk-warm-white disabled:opacity-25 disabled:hover:border-xk-warm-white/20 disabled:hover:text-xk-warm-white/60 disabled:cursor-not-allowed";

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
        {/* One line, not three. This section sits directly under the hero, where
            every extra line of preamble is another thing between a stranger and
            the footage that actually does the selling. */}
        <p className="text-xk-warm-white/60 text-center max-w-2xl mx-auto mb-10 md:mb-12 font-body leading-relaxed">
          No stock footage — every clip is a real {business.brand} job across the
          Coastal Bend.
        </p>

        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={() => scrollToPage(page - 1)}
            disabled={page === 0}
            aria-label="Previous clips"
            className={btnClass}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="flex-1 flex overflow-x-auto snap-x snap-mandatory no-scrollbar overscroll-x-contain"
          >
            {reels.map((r) => (
              <div
                key={r.src}
                className="snap-start shrink-0 basis-[80%] sm:basis-1/2 lg:basis-1/4 px-2 sm:px-3 first:pl-0 lg:first:pl-2"
              >
                <ReelCard {...r} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToPage(page + 1)}
            disabled={page >= pages - 1}
            aria-label="More clips"
            className={btnClass}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots are a desktop affordance. On a phone the peeking next card
            already says "swipe", and a row of dots under it is just noise. */}
        {pages > 1 && (
          <div className="hidden md:flex justify-center gap-1.5 mt-8">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                aria-label={`Go to clips ${i + 1} of ${pages}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page
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
