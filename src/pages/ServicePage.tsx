import { Link, useParams } from "react-router-dom";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import QuoteWizard from "@/components/QuoteWizard";
import FaqSection from "@/components/FaqSection";
import VideoBeforeAfter from "@/components/VideoBeforeAfter";
import ServiceVideos from "@/components/ServiceVideos";
import HowItWorks from "@/components/HowItWorks";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { HandDrawnIcon } from "@/components/icons/HandDrawn";
import { getService, servicesContent } from "@/content/services";
import { locationsContent } from "@/content/locations";
import { breadcrumbLd, faqLd, serviceLd } from "@/lib/seo";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <NotFound />;

  const path = `/services/${service.slug}`;
  const related = service.related
    .map((r) => servicesContent.find((s) => s.slug === r))
    .filter(Boolean) as typeof servicesContent;

  return (
    <PageLayout>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={path}
        jsonLd={[
          serviceLd({
            name: service.title,
            description: service.answer,
            path,
            areaServed: locationsContent.map((l) => l.city),
          }),
          faqLd(service.faqs),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title },
          ]),
        ]}
      />

      <PageHero
        kicker="OUR SERVICES"
        title={service.h1}
        sub={service.heroSub}
        photo={service.heroVideo ? service.heroVideoPoster : service.photo}
        video={service.heroVideo}
        photoPosition={service.heroPosition}
        flipPhotoOnDesktop={service.flipHeroOnDesktop}
        aside={
          <div className="bg-xk-steel/95 backdrop-blur-sm border border-xk-warm-white/10 rounded-2xl p-5 shadow-2xl">
            <QuoteWizard
              source={`Hero — ${service.title}`}
              defaultService={service.title}
              compact
            />
          </div>
        }
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title },
        ]}
      />

      {/* Direct answer + what we clean */}
      <section className="bg-xk-charcoal py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto items-start">
            <div className="bg-xk-steel/70 border-l-4 border-xk-red rounded-r-xl p-7 md:p-8">
              <p className="text-xk-warm-white/85 font-body leading-relaxed text-base md:text-lg">
                {service.answer}
              </p>
            </div>
            <div>
              <h2 className="font-display uppercase text-2xl md:text-3xl text-xk-warm-white mb-6 tracking-tight">
                {service.whatWeCleanTitle}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.whatWeClean.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xk-warm-white/70 font-body text-sm leading-snug"
                  >
                    <CheckCircle2 className="w-5 h-5 text-xk-red flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Method — why we do it this way */}
      <section className="relative bg-xk-steel py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 tex-grid opacity-20" />

        {/* The service's own hand-drawn icon, blown up and bled off the left edge
            as a watermark. DESKTOP ONLY and deliberately near-invisible (4%): on
            a phone there is no empty gutter for it to live in, so it would land
            behind body copy and just make the text harder to read. */}
        <HandDrawnIcon
          name={service.icon}
          className="hidden lg:block absolute -left-24 top-1/2 -translate-y-1/2 w-[560px] h-[560px] text-xk-warm-white pointer-events-none select-none"
          style={{ opacity: 0.04 }}
        />

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto items-center">
            <div className="lg:col-span-3">
              <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
                <span className="lg:hidden">— </span>HOW WE DO IT<span className="lg:hidden"> —</span>
              </span>
              <h2 className="font-display uppercase text-3xl md:text-4xl text-xk-warm-white mb-6 tracking-tight leading-[0.95]">
                {service.method.title}
              </h2>
              <div className="space-y-4">
                {service.method.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)} className="text-xk-warm-white/65 font-body leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden border border-xk-warm-white/10 shadow-2xl">
                <img
                  src={service.photo}
                  alt={`${service.title} — real Xtreme Kleen job`}
                  loading="lazy"
                  className="w-full h-72 lg:h-96 object-cover"
                />
                <div className="absolute left-4 bottom-4 flex items-center gap-2.5 bg-xk-charcoal/85 backdrop-blur-sm rounded-lg px-3.5 py-2">
                  <HandDrawnIcon name={service.icon} className="w-6 h-6 text-xk-red" />
                  <span className="text-xk-warm-white font-heading font-semibold text-xs tracking-wide">
                    REAL JOB PHOTO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.videoPair && <VideoBeforeAfter pair={service.videoPair} />}

      {service.videos && (
        <ServiceVideos videos={service.videos} serviceTitle={service.title} />
      )}

      <HowItWorks />

      <FaqSection title={`${service.title} — Questions We Actually Get`} faqs={service.faqs} />

      {/* Areas served + related services */}
      <section className="bg-xk-charcoal py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display uppercase text-2xl md:text-3xl text-xk-warm-white text-center mb-8 tracking-tight">
            Where We Do This Work
          </h2>
          <div className="flex flex-wrap justify-center gap-2.5 mb-16">
            {locationsContent.map((l) => (
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

          <h2 className="font-display uppercase text-2xl md:text-3xl text-xk-warm-white text-center mb-8 tracking-tight">
            Related Services
          </h2>
          {/* Same card language as the homepage grid: real job photo, icon badge
              riding the photo edge, solid panel. These used to be bare icon +
              text on a translucent tile, which is what made them read as
              placeholder scaffolding rather than part of the site. */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                className="group relative bg-xk-steel border border-xk-warm-white/10 rounded-xl overflow-hidden shadow-lg shadow-black/25 hover:border-xk-red/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={r.photo}
                    alt={r.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-t from-xk-steel/70 via-transparent to-transparent" />
                </div>

                <div className="absolute left-5 top-36 -translate-y-1/2 w-11 h-11 rounded-lg bg-xk-red flex items-center justify-center shadow-glow-red">
                  <HandDrawnIcon name={r.icon} className="w-6 h-6 text-xk-warm-white" />
                </div>

                <div className="px-6 pb-6 pt-9">
                  <h3 className="font-display uppercase text-xk-warm-white text-lg mb-2 tracking-tight">
                    {r.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xk-red font-heading font-semibold text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicePage;
