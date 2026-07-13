import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { business } from "@/data";

/**
 * The closer that ends the homepage and every subpage. Anyone reading this far
 * is sold — so the job here is to hand them the shortest path to a price:
 * call/text on the left (fastest), the full form on the right (richest detail).
 */
const LeadCaptureForm = () => (
  <section id="quote" className="relative bg-xk-charcoal py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 tex-grid opacity-50" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(680px 460px at 82% 12%, rgba(226,54,54,0.16), transparent 62%)",
      }}
    />
    <div className="relative container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
        <div className="text-center lg:text-left">
          <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
            — FREE ON-SITE QUOTE —
          </span>
          <h2 className="font-display uppercase text-4xl md:text-5xl text-xk-warm-white mb-4 leading-[0.95] tracking-tight">
            Find Out What It Costs to Get It Clean
          </h2>
          <p className="text-xk-warm-white/60 font-body mb-8 leading-relaxed">
            We come out, walk the property, and give you a straight price before
            anything gets sprayed. No deposit, no pressure to book on the spot.
          </p>

          <a
            href={business.phoneHref}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-7 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red mb-10"
          >
            <Phone className="w-5 h-5" />
            Call or Text {business.phone}
          </a>

          <div className="space-y-5 mb-10 text-left">
            <a href={`mailto:${business.email}`} className="flex items-center gap-4 group">
              <div className="w-11 h-11 bg-xk-red/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-xk-red/25 transition-colors">
                <Mail className="w-5 h-5 text-xk-red" />
              </div>
              <div className="min-w-0">
                <p className="text-xk-warm-white font-heading font-bold text-base break-all">
                  {business.email}
                </p>
                <p className="text-xk-warm-white/40 text-xs font-body">
                  Send photos of the job and we'll price it
                </p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-xk-red/15 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-xk-red" />
              </div>
              <div>
                <p className="text-xk-warm-white font-heading font-bold text-base">
                  {business.primaryCity}
                </p>
                <p className="text-xk-warm-white/40 text-xs font-body">
                  Serving Portland &amp; the Coastal Bend
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-xk-red/15 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-xk-red" />
              </div>
              <div>
                <p className="text-xk-warm-white font-heading font-bold text-base">
                  {business.hours}
                </p>
                <p className="text-xk-warm-white/40 text-xs font-body">
                  Call or text any time — we answer
                </p>
              </div>
            </div>
          </div>

          {/* Say something only THIS company can say. The old line ("let's get
              you cleaned up right the first time") is a template sentence that
              would fit any contractor in any trade. On-site quoting is a real
              differentiator Eric actually has — so lead with that instead. */}
          <p className="text-xk-warm-white/45 font-body text-sm border-l-2 border-xk-red/40 pl-4 text-left leading-relaxed">
            We price the job standing on your property — not guessing at it over
            the phone. You'll know the number and the method before a hose comes
            off the trailer.
          </p>
        </div>

        <QuoteForm source="Closer — Full Quote Form" />
      </div>
    </div>
  </section>
);

export default LeadCaptureForm;
