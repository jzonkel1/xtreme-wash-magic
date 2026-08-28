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

const ClientLogoMarquee = () => {
  // Two identical passes: the visible list, then a copy the animation slides in
  // behind it. The copy is aria-hidden and drops out entirely under
  // prefers-reduced-motion (see .marquee-dupe in index.css).
  const track = [...withLogos, ...withLogos];

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

        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max items-center gap-12 md:gap-20 animate-marquee hover:[animation-play-state:paused]">
            {track.map((job, i) => {
              const dupe = i >= withLogos.length;
              return (
                <img
                  key={`${job.name}-${i}`}
                  src={job.logo!}
                  alt={dupe ? "" : `${job.name} logo`}
                  aria-hidden={dupe || undefined}
                  loading="lazy"
                  className={`w-auto max-w-[190px] object-contain flex-none opacity-70 ${
                    SIZES[job.name] ?? "h-8 md:h-11"
                  } ${dupe ? "marquee-dupe" : ""}`}
                />
              );
            })}
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
