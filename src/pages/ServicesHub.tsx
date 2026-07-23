import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import HowItWorks from "@/components/HowItWorks";
import { HandDrawnIcon } from "@/components/icons/HandDrawn";
import { servicesContent } from "@/content/services";
import { breadcrumbLd } from "@/lib/seo";
import { business } from "@/data";
import heroBg from "@/assets/hero-spray.webp";

const ServicesHub = () => (
  <PageLayout>
    <Seo
      title="Exterior Cleaning Services | Pressure Washing, Soft Wash & More | Xtreme Kleen"
      description="Every exterior cleaning service Xtreme Kleen offers in Portland, TX and the Coastal Bend: pressure washing, soft washing, roof cleaning, window cleaning, storefront glass, and industrial plant services. Free on-site quotes: 361-306-1551."
      path="/services"
      jsonLd={[
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services" }]),
      ]}
    />

    <PageHero
      kicker="WHAT WE DO"
      title="Exterior Cleaning Services for the Coastal Bend"
      sub="Six services, one standard: the right method, the right chemistry, and the equipment to reach it — from a stained driveway to a full industrial plant. Every quote is free and done on-site."
      photo={heroBg}
      video={business.heroVideo}
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services" }]}
    />

    <section className="relative bg-xk-charcoal py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 tex-grid opacity-30" />
      <div className="relative container mx-auto px-4">
        {/* Flex-wrap + justify-center so the 7th service card centers instead of
            stranding hard-left in an empty final row. See ServicesGrid.tsx. */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {servicesContent.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              /* Same fix as the homepage grid: solid bg-xk-steel (darker than
                 the section) instead of a translucent tile that let the grid
                 texture show through and made the cards read as flat overlays. */
              className="group relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-xk-steel border border-xk-warm-white/10 rounded-xl overflow-hidden shadow-lg shadow-black/25 hover:border-xk-red/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={s.photo}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-t from-xk-steel/60 via-transparent to-transparent" />
              </div>
              <div className="absolute left-6 top-44 -translate-y-1/2 w-14 h-14 rounded-xl bg-xk-red flex items-center justify-center shadow-glow-red">
                <HandDrawnIcon name={s.icon} className="w-8 h-8 text-xk-warm-white" />
              </div>
              <div className="px-7 pb-7 pt-11">
                <h2 className="font-display uppercase text-xk-warm-white text-xl mb-2.5 tracking-tight">
                  {s.title}
                </h2>
                <p className="text-xk-warm-white/60 text-sm font-body leading-relaxed mb-4">
                  {s.heroSub}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xk-red font-heading font-semibold text-sm">
                  See Details & FAQs
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: stack and center. Left-aligned ragged text in a narrow column
            next to an icon squeezes the last line so the phone number breaks
            across two lines. Centered + nowrap keeps the number in one piece. */}
        <div className="max-w-3xl mx-auto mt-14 flex flex-col items-center text-center gap-4 sm:flex-row sm:items-start sm:text-left bg-xk-steel/70 border border-xk-warm-white/10 rounded-xl p-6">
          <ShieldCheck className="w-8 h-8 text-xk-red flex-shrink-0" />
          <p className="text-xk-warm-white/70 font-body text-sm leading-relaxed">
            <span className="text-xk-warm-white font-semibold">Not sure which service your property needs?</span>{" "}
            That's what the free on-site quote is for. We look at the surfaces, tell you what
            actually needs cleaning and what doesn't, and give you a straight price — no phone
            guessing, no upsell theater. Call or text{" "}
            <a
              href="tel:3613061551"
              className="text-xk-red font-semibold hover:underline whitespace-nowrap"
            >
              361-306-1551
            </a>
            .
          </p>
        </div>
      </div>
    </section>

    <HowItWorks />
  </PageLayout>
);

export default ServicesHub;
