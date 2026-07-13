import { Link, useParams } from "react-router-dom";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import FaqSection from "@/components/FaqSection";
import Reviews from "@/components/Reviews";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { HandDrawnIcon } from "@/components/icons/HandDrawn";
import { getLocation, locationsContent } from "@/content/locations";
import { servicesContent } from "@/content/services";
import { breadcrumbLd, faqLd, serviceLd } from "@/lib/seo";

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocation(slug) : undefined;

  if (!location) return <NotFound />;

  const path = `/service-areas/${location.slug}`;
  const featured = location.featuredServices
    .map((f) => servicesContent.find((s) => s.slug === f))
    .filter(Boolean) as typeof servicesContent;
  const nearby = locationsContent.filter((l) => l.slug !== location.slug);

  return (
    <PageLayout>
      <Seo
        title={location.metaTitle}
        description={location.metaDescription}
        path={path}
        jsonLd={[
          serviceLd({
            name: `Pressure Washing & Soft Washing in ${location.cityState}`,
            description: location.answer,
            path,
            areaServed: [location.city],
          }),
          faqLd(location.faqs),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: location.cityState },
          ]),
        ]}
      />

      <PageHero
        kicker="SERVICE AREA"
        title={location.h1}
        sub={location.answer}
        photo={location.heroPhoto}
        aside={
          <HeroQuoteForm
            source={`Hero — ${location.cityState}`}
            defaultCity={location.city}
          />
        }
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: location.cityState },
        ]}
      />

      {/* Local story + proof points */}
      <section className="bg-xk-charcoal py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 max-w-5xl mx-auto items-start">
            <div className="lg:col-span-3">
              <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
                <span className="lg:hidden">— </span>LOCAL KNOWLEDGE<span className="lg:hidden"> —</span>
              </span>
              <h2 className="font-display uppercase text-3xl md:text-4xl text-xk-warm-white mb-6 tracking-tight leading-[0.95]">
                What the Gulf Does to {location.city}
              </h2>
              <div className="space-y-4">
                {location.localAngle.map((p) => (
                  <p key={p.slice(0, 32)} className="text-xk-warm-white/65 font-body leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 space-y-3">
              {location.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-3 bg-xk-steel/70 border border-xk-warm-white/10 rounded-xl px-5 py-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-xk-red flex-shrink-0 mt-0.5" />
                  <span className="text-xk-warm-white/80 font-body text-sm leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services for this market */}
      <section className="relative bg-xk-steel py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 tex-grid opacity-20" />
        <div className="relative container mx-auto px-4 max-w-5xl">
          <h2 className="font-display uppercase text-3xl md:text-4xl text-xk-warm-white text-center mb-10 tracking-tight">
            What We Clean in {location.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-xk-charcoal/60 border border-xk-warm-white/10 rounded-xl p-6 hover:border-xk-red/50 transition-all"
              >
                <HandDrawnIcon name={s.icon} className="w-9 h-9 text-xk-red mb-4" />
                <h3 className="font-display uppercase text-xk-warm-white text-base mb-2 tracking-tight leading-tight">
                  {s.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xk-red font-heading font-semibold text-xs">
                  Details
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      <FaqSection title={`${location.city} Questions, Answered`} faqs={location.faqs} />

      {/* Map + nearby cities */}
      <section className="bg-xk-charcoal py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-xl overflow-hidden border border-xk-warm-white/10 mb-14">
            <iframe
              title={`Map of ${location.cityState}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(location.cityState)}&z=12&output=embed`}
              className="w-full h-72 md:h-96"
              style={{ border: 0, filter: "grayscale(35%) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <h2 className="font-display uppercase text-2xl md:text-3xl text-xk-warm-white text-center mb-8 tracking-tight">
            Also Serving
          </h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {nearby.map((l) => (
              <Link
                key={l.slug}
                to={`/service-areas/${l.slug}`}
                className="flex items-center gap-1.5 bg-xk-warm-white/5 border border-xk-warm-white/10 text-xk-warm-white/75 hover:text-xk-warm-white hover:border-xk-red/50 font-heading font-medium text-sm px-3.5 py-2 rounded-lg transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-xk-red" />
                {l.city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CityPage;
