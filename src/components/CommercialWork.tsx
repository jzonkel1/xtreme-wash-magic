import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import { commercialJobs, business } from "@/data";

/**
 * Commercial clients — the Pivot/Venture editorial "showcase" pattern.
 *
 * Alternating photo/copy rows: eyebrow, name with the client's logo beside it,
 * location, and a line about the work.
 *
 * Logos sit STRAIGHT ON THE DARK CARD — no white chip. The chip used to exist
 * because most client marks are dark ink and vanish on a dark theme, but a logo
 * marooned on a little white sticker looks like a sticker. The marks are reversed
 * (knockout) at the asset level instead — see the note in data.ts — so they read
 * on charcoal with their brand colours intact.
 *
 * Two presentations off one array in data.ts:
 *   preview → homepage: the two jobs flagged `preview` in data.ts, then a
 *             "see the rest" CTA. It is a deliberate pick, not the first two:
 *             the homepage should show one restaurant and one dealership, so
 *             the range of work is obvious at a glance. Two restaurants would
 *             read as "he does restaurants."
 *   full    → /our-work: every job with a photo, then the name-only clients.
 *
 * A client with no job photo is NEVER given a stand-in image. Eric's word is
 * enough to print the name; it is not enough to show someone else's property
 * and imply it's theirs.
 */
const ClientLogo = ({ logo, name }: { logo: string; name: string }) => (
  <img
    src={logo}
    alt={`${name} logo`}
    loading="lazy"
    className="h-11 max-w-[150px] w-auto object-contain object-left flex-none"
  />
);

const Row = ({
  job,
  flip,
}: {
  job: (typeof commercialJobs)[number];
  flip: boolean;
}) => (
  <article className="grid grid-cols-1 md:grid-cols-2 bg-xk-charcoal/70 border border-xk-warm-white/10 rounded-2xl overflow-hidden">
    <div
      className={`relative min-h-[280px] bg-black overflow-hidden group ${
        flip ? "md:order-2" : ""
      }`}
    >
      <img
        src={job.photo!}
        alt={`Xtreme Kleen on site at ${job.name}, ${job.location}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-8 md:p-10 flex flex-col justify-center">
      <span className="font-heading text-xk-red text-xs tracking-widest font-semibold uppercase">
        Commercial · {job.type}
      </span>

      <div className="flex items-center gap-5 flex-wrap mt-3">
        <h3 className="font-display uppercase text-2xl md:text-3xl text-xk-warm-white tracking-tight leading-none">
          {job.name}
        </h3>
        {job.logo && <ClientLogo logo={job.logo} name={job.name} />}
      </div>

      {job.location && (
        <span className="flex items-center gap-2 text-xk-warm-white/45 font-body text-sm mt-3">
          <span className="w-1.5 h-1.5 rounded-full bg-xk-red flex-none" />
          {job.location}
        </span>
      )}

      <p className="text-xk-warm-white/60 font-body leading-relaxed mt-4 max-w-[54ch]">
        {job.blurb}
      </p>
    </div>
  </article>
);

const CommercialWork = ({ preview }: { preview?: boolean }) => {
  const withPhoto = commercialJobs.filter((j) => j.photo);
  const noPhoto = commercialJobs.filter((j) => !j.photo);
  const rows = preview ? withPhoto.filter((j) => j.preview) : withPhoto;

  return (
    <section
      id="commercial"
      className="relative bg-xk-steel py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 tex-grid opacity-40" />

      <div className="relative container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mb-12 text-center lg:text-left mx-auto lg:mx-0">
          <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
            — COMMERCIAL PORTFOLIO —
          </span>
          <h2 className="font-display uppercase text-4xl md:text-5xl text-xk-warm-white mb-4 leading-[0.95] tracking-tight">
            Trusted by Local Businesses
          </h2>
          <p className="text-xk-warm-white/60 font-body leading-relaxed">
            Restaurants, rental yards, and industrial sites across the Coastal
            Bend call {business.brand} when the property has to look right — and
            when the work has to happen without shutting the doors.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {rows.map((job, i) => (
            <Row key={job.name} job={job} flip={i % 2 === 1} />
          ))}
        </div>

        {/* Clients we've worked for but don't have a job photo of yet. */}
        {!preview && noPhoto.length > 0 && (
          <div className="mt-12 pt-10 border-t border-xk-warm-white/10">
            <p className="text-xk-warm-white/40 font-heading text-xs tracking-widest font-semibold uppercase mb-5 text-center lg:text-left">
              Also trusted by
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {noPhoto.map((j) => (
                <span
                  key={j.name}
                  className="inline-flex items-center gap-3.5 bg-xk-charcoal/70 border border-xk-warm-white/10 rounded-xl px-5 py-3"
                >
                  {j.logo ? (
                    <ClientLogo logo={j.logo} name={j.name} />
                  ) : (
                    <Building2 className="w-5 h-5 text-xk-red flex-none" />
                  )}
                  <span className="font-heading font-semibold text-sm text-xk-warm-white/80">
                    {j.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="text-center lg:text-left mt-12">
          {preview ? (
            <Link
              to="/our-work#commercial"
              className="inline-flex items-center gap-2 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-7 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
            >
              See the Commercial Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-7 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
            >
              Get a Commercial Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommercialWork;
