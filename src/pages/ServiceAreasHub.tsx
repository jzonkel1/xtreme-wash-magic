import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Truck, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { locationsContent } from "@/content/locations";
import { business, travel } from "@/data";
import { breadcrumbLd } from "@/lib/seo";
import { serviceAreasHeroPhoto } from "@/content/locations";

const ServiceAreasHub = () => (
  <PageLayout>
    <Seo
      title="Service Areas | Pressure Washing Across the Coastal Bend | Xtreme Kleen"
      description="Xtreme Kleen serves the Coastal Bend from Portland, TX: Gregory, Ingleside, Aransas Pass, Rockport, Corpus Christi, Taft, Sinton, and Odem. Pressure washing, soft washing, roofs, windows, and industrial. 361-306-1551."
      path="/service-areas"
      jsonLd={[
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Service Areas" }]),
      ]}
    />

    <PageHero
      kicker="WHERE WE WORK"
      title="Serving the Coastal Bend From Portland, TX"
      sub="Salt air on the coast, caliche and crude in the oil patch — different dirt, same crew. We're based in Portland and work the whole Coastal Bend plus the Eagle Ford. Pick your town for the local rundown."
      photo={serviceAreasHeroPhoto}
      // A wide hero crops this shot to a short band; dead-center lands on the
      // trailer deck and cuts Eric's head off. Bias it upward.
      photoPosition="center 22%"
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Service Areas" }]}
    />

    <section className="bg-xk-charcoal py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Flex-wrap + justify-center: 19 cities in a 3-col grid strand the last
            one hard-left. Centering the short final row keeps it intentional.
            Widths use the gap-5 (1.25rem) offsets. See ServicesGrid.tsx. */}
        <div className="flex flex-wrap justify-center gap-5 mb-16">
          {locationsContent.map((l) => (
            <Link
              key={l.slug}
              to={`/service-areas/${l.slug}`}
              className="group w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] bg-xk-light-gray/40 border border-xk-warm-white/10 rounded-xl p-6 hover:border-xk-red/50 hover:bg-xk-light-gray/60 transition-all"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-xk-red/15 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-xk-red" />
                </div>
                <h2 className="font-display uppercase text-xk-warm-white text-xl tracking-tight">
                  {l.cityState}
                </h2>
              </div>
              <p className="text-xk-warm-white/60 text-sm font-body leading-relaxed mb-4">
                {l.highlights[0]}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xk-red font-heading font-semibold text-sm">
                {l.city} Details
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="bg-xk-light-gray/40 border border-xk-warm-white/10 rounded-xl p-7 md:p-9 mb-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-lg bg-xk-red/15 flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-xk-red" />
              </div>
              <div>
                <h2 className="font-display uppercase text-xk-warm-white text-2xl md:text-3xl tracking-tight mb-2">
                  {travel.headline}
                </h2>
                <p className="text-xk-warm-white/60 text-sm font-body leading-relaxed">
                  {travel.blurb}
                </p>
              </div>
            </div>
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2.5 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-7 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red flex-shrink-0"
            >
              <Phone className="w-5 h-5" />
              Call {business.phone}
            </a>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-xk-warm-white/10">
          <iframe
            title="Xtreme Kleen service area — the Coastal Bend, Texas"
            src="https://maps.google.com/maps?q=Portland,+TX&z=10&output=embed"
            className="w-full h-72 md:h-96"
            style={{ border: 0, filter: "grayscale(35%) contrast(1.05)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ServiceAreasHub;
