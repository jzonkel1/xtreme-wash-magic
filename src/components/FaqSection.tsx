import { ChevronDown } from "lucide-react";

type Faq = { q: string; a: string };

/**
 * FAQ block built on native <details> — unlike a JS accordion, every answer
 * stays in the server-rendered HTML, so crawlers and AI engines can read it.
 * The matching FAQPage JSON-LD is emitted per page via Seo.
 */
const FaqSection = ({ title, faqs }: { title?: string; faqs: Faq[] }) => (
  <section className="bg-xk-steel py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
          — STRAIGHT ANSWERS —
        </span>
        <h2 className="font-display uppercase text-3xl md:text-4xl text-xk-warm-white text-center mb-10 tracking-tight">
          {title ?? "Frequently Asked Questions"}
        </h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group bg-xk-charcoal/60 border border-xk-warm-white/10 rounded-xl open:border-xk-red/40 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-heading font-semibold text-base text-xk-warm-white">
                  {f.q}
                </h3>
                <ChevronDown className="w-5 h-5 text-xk-red flex-shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 text-xk-warm-white/65 font-body text-sm leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FaqSection;
