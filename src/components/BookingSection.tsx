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

const BookingSection = () => (
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
        <div className="text-center lg:text-left mb-12">
          <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
            — BOOK YOUR QUOTE —
          </span>
          <h2 className="font-display uppercase text-4xl md:text-5xl text-xk-warm-white mb-4 leading-[0.95] tracking-tight">
            Book Online, or Just Call Us
          </h2>
          <p className="text-xk-warm-white/60 font-body leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Some people want to grab a time without talking to anyone. Some people
            want to hear a voice. Either works — the quote is free and on-site
            either way.
          </p>
        </div>

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

          {booking.calendarUrl ? (
            <div className="bg-xk-charcoal/70 border border-xk-warm-white/10 rounded-xl p-2 md:p-3">
              <iframe
                title={`Book a free quote with ${business.brand}`}
                src={booking.calendarUrl}
                className="w-full h-[620px] rounded-lg"
                style={{ border: 0 }}
                loading="lazy"
                scrolling="no"
              />
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  </section>
);

export default BookingSection;
