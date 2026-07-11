import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Brandon Trammell",
    reviewCount: "4 reviews",
    timeAgo: "a year ago",
    text: "Xtreme Kleen Wash is hands down the best cleaning service I've used! Eric Kuhn was very knowledgeable in his expertise and I could tell he takes a lot of pride in each job he takes on. Very satisfied with the work that was done!",
  },
  {
    name: "Jackson Soward",
    reviewCount: "1 review",
    timeAgo: "a year ago",
    text: "Xtreme Kleen provided awesome work on my restaurant and rental properties. Eric Kuhn came in with a strategic plan with a fair price point and couldn't be happier with the results.",
  },
  {
    name: "Braden Menn",
    reviewCount: "3 reviews",
    timeAgo: "a year ago",
    text: "I have used Xtreme Kleen for construction site clean ups. Eric is very professional and easy to work with. He showed up on time and did exactly what he said he was going to do. I highly recommend this business.",
  },
];

const Reviews = () => (
  <section id="reviews" className="bg-xk-medium-gray py-20 md:py-28">
    <div className="container mx-auto px-4">
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
        <span className="text-xk-warm-white/60 text-sm font-body">5.0 on Google</span>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-xk-light-gray/60 border border-xk-warm-white/8 rounded-xl p-7 flex flex-col relative"
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
              <div className="w-10 h-10 rounded-full bg-xk-red flex items-center justify-center text-xk-warm-white font-bold text-sm">
                {r.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-xk-warm-white text-sm">{r.name}</p>
                <p className="text-xk-warm-white/40 text-xs font-body">
                  {r.reviewCount} · {r.timeAgo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
