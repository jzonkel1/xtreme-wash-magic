import { Star } from "lucide-react";

const reviews = [
  {
    name: "Brandon Trammell",
    reviewCount: "4 reviews",
    timeAgo: "a year ago",
    text: "Xtreme Kleen Wash is hands down the best cleaning service I've used! Eric Kuhn was very knowledgeable in his expertise and I could tell he takes a lot of pride in each job he takes on. Very satisfied with the work that was done!",
    reactions: "🙏 2",
  },
  {
    name: "Jackson Soward",
    reviewCount: "1 review",
    timeAgo: "a year ago",
    text: "Xtreme Kleen provided awesome work on my restaurant and rental properties. Eric Kuhn came in with a strategic plan with a fair price point and couldn't be happier with the results.",
    reactions: "🙏 1",
  },
  {
    name: "Braden Menn",
    reviewCount: "3 reviews",
    timeAgo: "a year ago",
    text: "I have used Xtreme Kleen for construction site clean ups. Eric is very professional and easy to work with. He showed up on time and did exactly what he said he was going to do. I highly recommend this business.",
    reactions: "",
  },
];

const Reviews = () => (
  <section className="bg-xk-warm-white py-16 md:py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <p className="text-xk-red font-bold tracking-widest text-sm text-center mb-2">
        CUSTOMER REVIEWS
      </p>
      <h2 className="font-heading font-bold text-3xl md:text-5xl text-xk-charcoal text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-card rounded-xl p-6 shadow-md border-l-4 border-xk-red flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review text */}
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
              "{r.text}"
            </p>

            {/* Author info */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-xk-red flex items-center justify-center text-primary-foreground font-bold text-sm">
                {r.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{r.name}</p>
                <p className="text-muted-foreground text-xs">
                  {r.reviewCount} · {r.timeAgo}
                </p>
              </div>
              {r.reactions && (
                <span className="ml-auto text-sm">{r.reactions}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
