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
 * N is computed, not hard-coded: a wide desktop viewport needs more copies than
 * a phone. Get this wrong and the wrap has nowhere to land and the row snaps
 * visibly at the edges — the exact "breaking left and right" this replaced.
 *
 * ---------------------------------------------------------------------------
 * HANDS OFF WHILE THE VISITOR IS SCROLLING. (Fixes the mobile flicker.)
 *
 * Touch scrolling and its momentum run on the COMPOSITOR. Writing `scrollLeft`
 * from a rAF while that's happening is the main thread and the compositor both
 * claiming the same number sixty times a second, and it looks like exactly what
 * it is — a stutter. The first version did this two ways: it resumed drifting
 * on a fixed 900ms timer that iOS momentum happily outlasts, and it ran the
 * wrap mid-gesture, so a ±copyW snap landed while the browser was still
 * tracking the finger.
 *
 * So: the scroller is either OURS or THEIRS, never both. It's theirs while a
 * pointer is down and for IDLE_MS after the last scroll we didn't cause — which
 * tracks real momentum however long it actually runs, instead of guessing. It's
 * ours the rest of the time, and only then does anything get written, wrap
 * included. The cost is that a wrap can't fire mid-flick, so the runway is
 * deliberately long (see COPY_SLACK) — a hard flick has three copy widths of
 * road in front of it, and the wrap tidies up the moment the flick settles.
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

/**
 * How long after the last scroll we didn't cause before the strip counts as
 * settled. Long enough not to be fooled by the gap between two momentum frames,
 * short enough that the drift picks back up without feeling stalled.
 */
const IDLE_MS = 180;

/**
 * Spare copies either side of the visible band. Because the wrap now waits for
 * the strip to settle, this is the road a single hard flick gets to run out on
 * before it could reach a real end — three copy widths each way, roughly 2200px
 * on a phone, which is more than a thumb can throw it.
 */
const COPY_SLACK = 6;

const ClientLogoMarquee = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const firstCopy = useRef<HTMLDivElement>(null);
  const copyW = useRef(0);
  const [copies, setCopies] = useState(4);

  /** True while a finger or mouse button is down on the strip. */
  const pointerDown = useRef(false);
  /** The strip belongs to the visitor until this timestamp (performance.now). */
  const busyUntil = useRef(0);
  /** Mouse is over it — drift stops, but this doesn't hand the strip over. */
  const hovering = useRef(false);
  const drag = useRef<{ x: number; left: number } | null>(null);

  /** Hand the strip to the visitor for a beat. */
  const yieldControl = () => {
    busyUntil.current = performance.now() + IDLE_MS;
  };

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

  /** Left edge of the band scrollLeft is kept inside: [home, home + copyW). */
  const home = useRef(0);

  /** Measure one copy and make sure there are enough of them to wrap inside. */
  const measure = useCallback(() => {
    const el = scroller.current;
    const copy = firstCopy.current;
    if (!el || !copy) return;

    const w = copy.getBoundingClientRect().width;
    if (!w) return; // logos haven't laid out yet
    copyW.current = w;

    const need = Math.max(3, Math.ceil(el.clientWidth / w) + COPY_SLACK);
    setCopies((c) => (c === need ? c : need));

    // Sit in the middle so there's equal road in both directions.
    home.current = Math.floor((need - 1) / 2) * w;

    const lo = home.current;
    if (el.scrollLeft < lo || el.scrollLeft >= lo + w) {
      el.scrollLeft = lo;
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
      // visitor moved it — a drag, a flick still coasting, a trackpad. Take
      // their position as the truth and hand them the strip for another beat.
      // This is what tracks momentum for its ACTUAL length rather than guessing
      // at it with a timer.
      if (Math.abs(el.scrollLeft - lastWrite.current) > 1.5) {
        pos.current = el.scrollLeft;
        // Re-baseline HERE too, not just on our own writes. Without this the
        // comparison above stays true forever once the visitor has scrolled —
        // every frame looks foreign, the strip is never handed back, and the
        // drift stops permanently after the first touch.
        lastWrite.current = el.scrollLeft;
        busyUntil.current = t + IDLE_MS;
      }

      // Theirs, not ours: write nothing at all. No drift, and no wrap either —
      // a wrap landing mid-gesture is the jump that made this flicker.
      if (pointerDown.current || t < busyUntil.current) return;

      let changed = false;

      if (!hovering.current && !reduce.matches) {
        pos.current += (mobile.matches ? SPEED_MOBILE : SPEED_DESKTOP) * dt;
        changed = true;
      }

      // Safe now — the strip has settled, so snapping it by exactly one copy
      // width lands on a pixel-identical position with nothing to fight.
      const w = copyW.current;
      const lo = home.current;
      if (w) {
        if (pos.current < lo) {
          pos.current += w;
          changed = true;
        } else if (pos.current >= lo + w) {
          pos.current -= w;
          changed = true;
        }
      }

      if (changed) {
        el.scrollLeft = pos.current;
        lastWrite.current = el.scrollLeft;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  // Mouse drag. Touch and trackpad already work through native scrolling; a
  // mouse has no way to push a horizontal strip, so grab-and-pull it is.
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerDown.current = true;
    yieldControl();
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
    pointerDown.current = false;
    // No fixed grace period any more: momentum keeps re-arming busyUntil from
    // the tick for exactly as long as it actually runs.
    yieldControl();
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

        {/* The edge fade is TWO STATIC GRADIENT PANELS, not a mask-image on the
            scroller. A mask has to be re-applied as the content moves under it,
            so it forced a repaint of a masked layer on every frame of drift —
            the third of the three things making this flicker on a phone. These
            just sit there and cost nothing per frame. */}
        <div className="relative">
          <div
            ref={scroller}
            className="no-scrollbar overflow-x-auto overflow-y-hidden overscroll-x-contain cursor-grab active:cursor-grabbing select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") hovering.current = true;
            }}
            onPointerLeave={(e) => {
              if (e.pointerType === "mouse") hovering.current = false;
            }}
            onWheel={yieldControl}
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

          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-24 bg-gradient-to-r from-xk-charcoal to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-24 bg-gradient-to-l from-xk-charcoal to-transparent"
          />
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
