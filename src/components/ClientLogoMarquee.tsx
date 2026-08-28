import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { commercialJobs } from "@/data";

/**
 * Commercial client logos, scrolling, directly under the hero's trust bar.
 *
 * WHY IT'S THIS HIGH: the commercial portfolio used to live at section #13, so
 * the one thing that closes a property manager — other businesses already trust
 * this guy — was ten screens of residential proof away. A visitor deciding
 * whether Xtreme Kleen is "a guy with a trailer" or "a company that handles
 * buildings" makes that call in the first five seconds. So the names move up;
 * the full portfolio rows stay down the page where there's room to tell each
 * job's story.
 *
 * It's a band, not a section: no heading slab, no padding of its own beyond the
 * strip. It reads as a continuation of the red trust bar rather than a new
 * chapter, which is what keeps it from shoving the rest of the page down.
 *
 * Only clients whose logo we actually have appear here. Access Ford is on the
 * portfolio by name and photo but has no usable mark (see data.ts), and a
 * marquee of five logos plus one typeset name would look like a mistake.
 *
 * ---------------------------------------------------------------------------
 * IT IS A REAL SCROLL CONTAINER, NOT A CSS TRANSFORM.
 *
 * The first version animated `transform: translateX(-50%)` on a doubled track.
 * That looks right and is completely dead to the touch: a finger on it does
 * nothing, and a finger that tries drags the whole page sideways instead. So
 * this is `overflow-x: auto` with the real thing scrolling — which buys native
 * iOS momentum and trackpad support for free — and the auto-advance is a rAF
 * nudging `scrollLeft` on top of it.
 *
 * The loop is modular arithmetic, not a keyframe. The list is repeated N times
 * and `scrollLeft` is kept inside the band [copyW, 2 * copyW): step out one
 * side and it's snapped back by exactly one copy width, which is a pixel-
 * identical position, so nothing visible happens. That's what makes it
 * endless in BOTH directions — flick it backwards and it keeps going, because
 * there is always another copy behind the one you're looking at.
 *
 * N is computed, not hard-coded: the band needs `copies * copyW - clientWidth
 * >= 2 * copyW` of room, so a wide desktop viewport needs more copies than a
 * phone. Get this wrong and the wrap has nowhere to land and the row snaps
 * visibly at the edges — the exact "breaking left and right" this replaced.
 * ---------------------------------------------------------------------------
 */

/**
 * Optical sizing. A logo row set to one uniform height is wrong every time: a
 * long wordmark (United Rentals, Grumbles) at the same HEIGHT as a squarish
 * badge (Coast Materials, Doc's) is three times the AREA and bullies the row.
 * So wide marks run shorter and tall marks run taller, tuned by eye until each
 * one carries the same weight. Keyed by `name` in data.ts — presentation lives
 * here, content stays there.
 */
const SIZES: Record<string, string> = {
  "AT&T": "h-9 md:h-12", // 2.43:1 lockup
  "Coast Materials Inc.": "h-8 md:h-11", // 1.42:1 badge — heavy solid mark, runs small
  "Doc's Seafood & Steaks": "h-9 md:h-12", // 1.77:1 badge
  "Fisherman's Wharf": "h-9 md:h-12", // 2.18:1
  "United Rentals": "h-6 md:h-8", // 3.64:1 wordmark
  "Grumbles Seafood Co.": "h-6 md:h-8", // 3.95:1 wordmark
};

const withLogos = commercialJobs.filter((j) => j.logo);

/**
 * Drift speed in PIXELS PER SECOND, which is the honest unit for this — the old
 * percentage-based keyframe meant the phone (a narrower track, same duration)
 * silently drifted at 17px/s against the desktop's 25px/s, so the small screen
 * got the slowest version of the thing. Mobile now runs faster outright: less
 * width to play with, so a logo has to clear the screen sooner to read as
 * moving at all.
 */
const SPEED_DESKTOP = 26;
const SPEED_MOBILE = 42;

const MOBILE_Q = "(max-width: 767px)";

const ClientLogoMarquee = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const firstCopy = useRef<HTMLDivElement>(null);
  const copyW = useRef(0);
  const [copies, setCopies] = useState(4);

  // Auto-advance is suspended while the visitor is touching, dragging, hovering
  // or wheeling, and for a beat afterwards so iOS momentum can play out without
  // the rAF piling speed on top of a flick.
  const paused = useRef(false);
  const resumeAt = useRef<number | undefined>(undefined);
  const drag = useRef<{ x: number; left: number } | null>(null);

  /**
   * The drift position, kept as a float BY US.
   *
   * `scrollLeft` rounds on assignment, so writing `el.scrollLeft += 26/60` each
   * frame writes 0.43px, gets 0 back, and the row never moves at all — while
   * the same code on a 2x phone rounds 0.7 UP to 1 and runs at 60px/s instead
   * of 42. Same code, two wrong answers, neither of them the number asked for.
   * So the real position accumulates here in full precision and the element
   * only ever receives the rounded result.
   */
  const pos = useRef(0);
  /** What we last wrote, to tell our own writes apart from the visitor's. */
  const lastWrite = useRef(0);

  const hold = useCallback(() => {
    paused.current = true;
    window.clearTimeout(resumeAt.current);
  }, []);

  const release = useCallback((delay: number) => {
    window.clearTimeout(resumeAt.current);
    resumeAt.current = window.setTimeout(() => {
      paused.current = false;
    }, delay);
  }, []);

  /** Measure one copy and make sure there are enough of them to wrap inside. */
  const measure = useCallback(() => {
    const el = scroller.current;
    const copy = firstCopy.current;
    if (!el || !copy) return;

    const w = copy.getBoundingClientRect().width;
    if (!w) return; // logos haven't laid out yet
    copyW.current = w;

    const need = Math.max(3, Math.ceil(el.clientWidth / w) + 2);
    setCopies((c) => (c === need ? c : need));

    if (el.scrollLeft < w) {
      el.scrollLeft = w;
      pos.current = el.scrollLeft;
      lastWrite.current = el.scrollLeft;
    }
  }, []);

  useLayoutEffect(() => {
    measure();

    const el = scroller.current;
    if (!el) return;

    // Logos are lazy and the SVGs settle a frame late, so the first measurement
    // can be of a half-built row. Re-measure when anything actually changes.
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    if (firstCopy.current) ro.observe(firstCopy.current);

    const imgs = Array.from(el.querySelectorAll("img"));
    imgs.forEach((img) => img.addEventListener("load", measure));

    return () => {
      ro.disconnect();
      imgs.forEach((img) => img.removeEventListener("load", measure));
    };
  }, [measure, copies]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia(MOBILE_Q);
    let raf = 0;
    let last = 0;

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);

      // Clamp dt: a backgrounded tab returns with a huge delta and would
      // teleport the row.
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;

      // Anything more than a rounding step away from our last write means the
      // visitor moved it — a drag, a flick still coasting, a trackpad — so take
      // their position as the truth and drift on from there.
      if (Math.abs(el.scrollLeft - lastWrite.current) > 1.5) {
        pos.current = el.scrollLeft;
      }

      let changed = false;

      if (!paused.current && !reduce.matches) {
        pos.current += (mobile.matches ? SPEED_MOBILE : SPEED_DESKTOP) * dt;
        changed = true;
      }

      // Runs every frame, so it catches the visitor's own scrolling and
      // momentum as well as our drift — no separate scroll listener needed.
      const w = copyW.current;
      if (w) {
        if (pos.current < w) {
          pos.current += w;
          changed = true;
        } else if (pos.current >= w * 2) {
          pos.current -= w;
          changed = true;
        }
      }

      // Only write when we actually have something to say. Assigning
      // scrollLeft on every frame would stamp on iOS momentum mid-flick.
      if (changed) {
        el.scrollLeft = pos.current;
        lastWrite.current = el.scrollLeft;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resumeAt.current);
    };
  }, []);

  // Mouse drag. Touch and trackpad already work through native scrolling; a
  // mouse has no way to push a horizontal strip, so grab-and-pull it is.
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    hold();
    if (e.pointerType !== "mouse" || !scroller.current) return;
    drag.current = { x: e.clientX, left: scroller.current.scrollLeft };
    scroller.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !scroller.current) return;
    e.preventDefault();
    scroller.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (drag.current && scroller.current?.hasPointerCapture(e.pointerId)) {
      scroller.current.releasePointerCapture(e.pointerId);
    }
    drag.current = null;
    // Touch gets the longer grace period — that's the one with momentum.
    release(e.pointerType === "touch" ? 900 : 500);
  };

  const track = Array.from({ length: copies }, (_, c) => c);

  return (
    <section
      aria-label="Commercial clients"
      className="relative bg-xk-charcoal border-b border-xk-warm-white/10 py-7 md:py-9 overflow-hidden"
    >
      <div className="absolute inset-0 tex-grid opacity-30" />

      <div className="relative">
        {/* Two strings, not one wrapping string: at 390px the full sentence
            breaks to two lines and the eyebrow starts competing with the logos
            it's supposed to be introducing. */}
        <p className="text-center font-heading text-[11px] md:text-xs tracking-[0.18em] md:tracking-[0.2em] font-semibold uppercase text-xk-warm-white/40 mb-6 px-4">
          <span className="md:hidden">Trusted by local businesses</span>
          <span className="hidden md:inline">
            Trusted by commercial properties across the Coastal Bend
          </span>
        </p>

        <div
          ref={scroller}
          className="marquee-mask no-scrollbar overflow-x-auto overflow-y-hidden overscroll-x-contain cursor-grab active:cursor-grabbing select-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerEnter={(e) => e.pointerType === "mouse" && hold()}
          onPointerLeave={(e) => e.pointerType === "mouse" && release(0)}
          onWheel={() => {
            hold();
            release(900);
          }}
        >
          <div className="flex w-max">
            {track.map((c) => (
              <div
                key={c}
                ref={c === 0 ? firstCopy : undefined}
                // The right padding matches the inner gap, so one copy's box
                // width IS the loop distance — no gap arithmetic at the seam.
                aria-hidden={c > 0 || undefined}
                className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20 flex-none"
              >
                {withLogos.map((job) => (
                  <img
                    key={job.name}
                    src={job.logo!}
                    alt={c === 0 ? `${job.name} logo` : ""}
                    draggable={false}
                    className={`w-auto max-w-[190px] object-contain flex-none opacity-70 pointer-events-none ${
                      SIZES[job.name] ?? "h-8 md:h-11"
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 px-4">
          <Link
            to="/our-work#commercial"
            className="font-heading font-semibold text-xs md:text-sm text-xk-warm-white/55 hover:text-xk-red transition-colors"
          >
            See the commercial work →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoMarquee;
