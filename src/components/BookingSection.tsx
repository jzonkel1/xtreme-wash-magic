import { useEffect, useRef, useState } from "react";
import { Phone, CalendarDays, ClipboardList } from "lucide-react";
import { business, booking } from "@/data";

/**
 * "Book online or just call" — two paths to the same place.
 *
 * When `booking.calendarUrl` is set (see src/data.ts) this renders the live
 * GoHighLevel calendar. Until then it renders the two-CTA fallback, so the
 * section is useful on day one and needs no rebuild when the calendar lands.
 */
const steps = [
  "Pick a window that works — mornings, evenings, weekends.",
  "We show up, walk the property, and quote it on the spot.",
  "Like the number? We can often start the same visit.",
];

/**
 * The live GoHighLevel calendar.
 *
 * Nothing third-party loads until you scroll near it. That matters twice over:
 * the homepage shouldn't pay for a cross-origin script and an iframe on every
 * visit when most people never reach this section — and the Puppeteer prerender
 * waits for networkidle, so a script that fires on mount is exactly the kind of
 * thing that makes a build hang (the hero video already taught us that one).
 *
 * ORDER MATTERS, AND IT IS THE OPPOSITE OF WHAT YOU'D GUESS.
 * The intuitive order is "load the script first so its postMessage listener
 * exists before the iframe can report its height." That is WRONG and it silently
 * breaks the calendar. form_embed.js bundles iframe-resizer, which scans the DOM
 * for <iframe> elements AT THE MOMENT IT RUNS and attaches to what it finds. Load
 * it before the iframe exists and it attaches to nothing — the widget then posts
 * `highlevel.setHeight` forever and nobody is listening, so the calendar stays
 * frozen at whatever height we hard-coded and clips its own date grid.
 *
 * So: mount the iframe, THEN inject the script. Which is exactly why GHL's own
 * copy-paste snippet puts the <script> tag after the <iframe>.
 *
 * The min-height is a floor for the moment before the resizer reports in; GHL
 * sets the true height as an inline style, which outranks a class.
 *
 * WIDTH IS WHY THIS THING FEELS HUGE. The widget has a hard layout breakpoint at
 * an iframe width of 1024px. Measured, by watching what height it reports:
 *
 *     760px -> 1109px tall     (stacked: info block, then calendar, then times)
 *     900px -> 1109px tall     (still stacked)
 *    1024px ->  830px tall     (two-pane: info left, calendar + times right)
 *    1180px ->  830px tall
 *
 * So every pixel of width under 1024 costs ~280px of height. That's why this sits
 * in its own 1120px wrapper OUTSIDE the section's `container` — the container caps
 * at 1024px on lg screens, which (minus padding) would leave the iframe just under
 * the line and silently hand us the tall layout.
 */
const BookingCalendar = () => {
  const holderRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // 1. Mount the iframe once the section is close to the viewport.
  useEffect(() => {
    const el = holderRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setMounted(true);
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 2. Only once it's actually in the DOM, load the resizer. See above.
  useEffect(() => {
    if (!mounted) return;
    if (document.querySelector(`script[src="${booking.embedScript}"]`)) return;
    const s = document.createElement("script");
    s.src = booking.embedScript;
    s.async = true;
    document.body.appendChild(s);
  }, [mounted]);

  return (
    // The GHL widget already ships its own warm-white card. Wrapping THAT in a
    // dark charcoal box with padding made a box-inside-a-box that read heavy on
    // desktop. So the wrapper adds no fill of its own now — it just rounds the
    // corners and floats the white card off the dark section with a shadow. No
    // padding, so the iframe also gets the full 1120px of width (still well over
    // the widget's 1024px two-pane breakpoint — see above).
    <div
      ref={holderRef}
      className="max-w-[1120px] mx-auto overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-black/10"
    >
      {mounted ? (
        <iframe
          id={booking.calendarId}
          title={`Book a free on-site estimate with ${business.brand}`}
          src={booking.calendarUrl}
          className="w-full min-h-[640px] block"
          style={{ border: 0 }}
          scrolling="no"
        />
      ) : (
        // Same floor as the calendar, so nothing below jumps when it lands; a
        // faint fill keeps the empty rounded card from looking like a hole.
        <div className="min-h-[640px] bg-xk-warm-white/[0.03]" aria-hidden />
      )}
    </div>
  );
};

const BookingSection = ({ hideHeader = false }: { hideHeader?: boolean } = {}) => (
  <section id="book" className="relative bg-xk-steel py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 tex-grid opacity-40" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(620px 420px at 15% 10%, rgba(226,54,54,0.14), transparent 62%)",
      }}
    />

    <div className="relative container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        {!hideHeader && (
          <div className="text-center mb-12">
            <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
              — BOOK YOUR QUOTE —
            </span>
            <h2 className="font-display uppercase text-4xl md:text-5xl text-xk-warm-white mb-4 leading-[0.95] tracking-tight">
              Book Online, or Just Call Us
            </h2>
            <p className="text-xk-warm-white/60 font-body leading-relaxed max-w-2xl mx-auto">
              Some people want to grab a time without talking to anyone. Some people
              want to hear a voice. Either works — the quote is free and on-site
              either way.
            </p>
          </div>
        )}

        {booking.calendarUrl ? (
          <>
            {/* The steps run across the top, not down a side column — the calendar
                needs every pixel of width it can get (see BookingCalendar above). */}
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-4xl mx-auto">
              {steps.map((s, i) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-xk-red/15 text-xk-red font-heading font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-xk-warm-white/70 font-body text-sm leading-relaxed">
                    {s}
                  </p>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <ol className="space-y-5 mb-10">
                {steps.map((s) => (
                  <li key={s} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-xk-red mt-2.5 flex-shrink-0" />
                    <p className="text-xk-warm-white/75 font-body leading-relaxed">{s}</p>
                  </li>
                ))}
              </ol>

              <a
                href={business.phoneHref}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-7 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
              >
                <Phone className="w-5 h-5" />
                Call or Text {business.phone}
              </a>
              <p className="text-xk-warm-white/40 text-xs font-body mt-3">
                {business.hours} — a real person, not a call center.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="#quote"
                className="flex items-center gap-5 bg-xk-charcoal/70 border border-xk-warm-white/10 rounded-xl p-6 hover:border-xk-red/60 transition-colors group"
              >
                <div className="w-12 h-12 bg-xk-red/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-xk-red/25 transition-colors">
                  <ClipboardList className="w-6 h-6 text-xk-red" />
                </div>
                <div>
                  <p className="text-xk-warm-white font-heading font-bold text-lg">
                    Send Your Job Details
                  </p>
                  <p className="text-xk-warm-white/50 text-sm font-body">
                    Tell us what needs cleaning and we'll come back with a time.
                  </p>
                </div>
              </a>
              <a
                href={business.phoneHref}
                className="flex items-center gap-5 bg-xk-charcoal/70 border border-xk-warm-white/10 rounded-xl p-6 hover:border-xk-red/60 transition-colors group"
              >
                <div className="w-12 h-12 bg-xk-red/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-xk-red/25 transition-colors">
                  <CalendarDays className="w-6 h-6 text-xk-red" />
                </div>
                <div>
                  <p className="text-xk-warm-white font-heading font-bold text-lg">
                    Text Us a Time
                  </p>
                  <p className="text-xk-warm-white/50 text-sm font-body">
                    Send the day that works and we'll lock it in — quotes run
                    about 20 minutes.
                  </p>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* OUTSIDE the container on purpose. `container` caps at 1024px on lg screens
        and 1280px on xl; minus padding that leaves the iframe just under the
        widget's 1024px layout breakpoint, which silently costs ~280px of height.
        Its own padded wrapper gives it the width it needs. */}
    {booking.calendarUrl && (
      <div className="relative px-4 mt-12">
        <BookingCalendar />

        <div className="text-center mt-10">
          <p className="text-xk-warm-white/50 font-body text-sm mb-4">
            Rather just talk it through?
          </p>
          <a
            href={business.phoneHref}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-7 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
          >
            <Phone className="w-5 h-5" />
            Call or Text {business.phone}
          </a>
          <p className="text-xk-warm-white/40 text-xs font-body mt-3">
            {business.hours} — a real person, not a call center.
          </p>
        </div>
      </div>
    )}
  </section>
);

export default BookingSection;
