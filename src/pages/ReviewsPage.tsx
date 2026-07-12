import { Star, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import Reviews from "@/components/Reviews";
import { business } from "@/data";
import { breadcrumbLd } from "@/lib/seo";
import softWashPhoto from "@/assets/action2.webp";

const ReviewsPage = () => (
  <PageLayout>
    <Seo
      title="Reviews | 5.0-Rated on Google | Xtreme Kleen — Portland, TX"
      description="Read real Google reviews of Xtreme Kleen — 5.0-rated power washing, soft washing, and construction cleanup across Portland, TX and the Coastal Bend. 361-947-7811."
      path="/reviews"
      jsonLd={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Reviews" }])]}
    />

    <PageHero
      kicker="CUSTOMER REVIEWS"
      title={`5.0 Stars on Google — Every Single Review`}
      sub="These are real, public Google reviews from homeowners, builders, and business owners across the Coastal Bend — word for word. Read them here, or verify every one on our Google profile."
      photo={softWashPhoto}
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Reviews" }]}
    />

    <Reviews />

    {/* Verify + leave a review */}
    <section className="bg-xk-charcoal py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-xk-steel/70 border border-xk-warm-white/10 rounded-2xl p-8 md:p-10 text-center">
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="font-display uppercase text-2xl md:text-3xl text-xk-warm-white mb-3 tracking-tight">
            Don't Take Our Word for It
          </h2>
          <p className="text-xk-warm-white/60 font-body leading-relaxed mb-8">
            Every review above is public on Google. Check them yourself — and if we've
            done work for you, an honest review helps your neighbors find us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={business.googleProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
            >
              SEE US ON GOOGLE
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center border-2 border-xk-warm-white/40 text-xk-warm-white font-heading font-semibold text-base px-8 py-4 rounded-lg hover:bg-xk-warm-white/10 transition-all"
            >
              GET YOUR FREE QUOTE
            </a>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ReviewsPage;
