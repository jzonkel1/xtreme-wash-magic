import { Star, Quote, CalendarDays } from "lucide-react";
import { reviews, business } from "@/data";

const Reviews = () => (
  <section id="reviews" className="relative bg-xk-medium-gray py-20 md:py-28 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(700px 460px at 80% 0%, rgba(226,54,54,0.12), transparent 62%)",
      }}
    />

    <div className="relative container mx-auto px-4">
      <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
        CUSTOMER REVIEWS
      </span>
      <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-xk-warm-white text-center mb-4 tracking-tight">
        What Our Clients Say
      </h2>
      <div className="flex justify-center items-center gap-2 mb-12">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-xk-warm-white/60 text-sm font-body">
          {business.rating.toFixed(1)} on Google · {business.reviewCount} reviews
        </span>
      </div>

      {/* Wrapping flex, NOT a grid. With 5 reviews a 3-col grid strands the last
          two cards hard-left against an empty third column. Flex + justify-center
          centers any short final row, whatever the review count ends up being. */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-xk-light-gray/50 border border-xk-warm-white/10 rounded-xl p-7 flex flex-col relative"
          >
            <Quote className="w-8 h-8 text-xk-red/20 absolute top-5 right-5" />

            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-xk-warm-white/75 text-sm leading-relaxed flex-1 mb-6 font-body">
              "{r.text}"
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-xk-warm-white/10">
              <div className="w-10 h-10 rounded-full bg-xk-red flex items-center justify-center text-xk-warm-white font-heading font-bold text-sm">
                {r.name.charAt(0)}
              </div>
              <div>
                <p className="font-heading font-semibold text-xk-warm-white text-sm">
                  {r.name}
                </p>
                <p className="text-xk-warm-white/40 text-xs font-body">
                  {r.meta} · {r.timeAgo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* This is the belief peak of the page, and the only thing it used to offer
          was a link OFF the site to Google. Keep that link — it's the proof that
          the stars are real — but demote it, and give the reader something to
          actually do here first. */}
      <div className="mt-12 flex flex-col items-center gap-5">
        <a
          href="#book"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
        >
          <CalendarDays className="w-5 h-5" />
          Book Your Free Estimate
        </a>
        <a
          href={business.googleProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xk-warm-white/50 font-heading font-semibold text-sm underline underline-offset-4 decoration-xk-warm-white/25 hover:text-xk-warm-white transition-colors"
        >
          Read all {business.reviewCount} reviews on Google
        </a>
      </div>
    </div>
  </section>
);

export default Reviews;
