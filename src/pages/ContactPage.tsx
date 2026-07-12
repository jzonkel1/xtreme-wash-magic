import { Phone, Mail, Clock, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { business } from "@/data";
import { breadcrumbLd } from "@/lib/seo";
import truckPhoto from "@/assets/hero-bridge.webp";

const cards = [
  {
    icon: Phone,
    title: business.phone,
    sub: "Call or text any time — fastest way to reach us",
    href: business.phoneHref,
  },
  {
    icon: Mail,
    title: business.email,
    sub: "Email works too — include photos of the job if you have them",
    href: `mailto:${business.email}`,
  },
  {
    icon: Clock,
    title: business.hours,
    sub: "Nights, weekends, before your business opens — we answer",
  },
  {
    icon: MapPin,
    title: "Portland, TX",
    sub: "Serving the whole Coastal Bend from our home base",
  },
];

const ContactPage = () => (
  <PageLayout>
    <Seo
      title="Contact Xtreme Kleen | Free On-Site Quotes | Call or Text 361-947-7811"
      description="Contact Xtreme Kleen for a free on-site quote in Portland, TX and the Coastal Bend. Call or text 361-947-7811 any time — open 24 hours — or send the quote form and we'll reach out within 24 hours."
      path="/contact"
      jsonLd={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact" }])]}
    />

    <PageHero
      kicker="CONTACT US"
      title="Talk to the Crew, Not a Call Center"
      sub="Call, text, email, or send the quote form below — either way you're talking to the people who actually do the work. Quotes are free and done on-site."
      photo={truckPhoto}
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Contact" }]}
    />

    <section className="bg-xk-charcoal py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {cards.map((c) => {
            const content = (
              <>
                <div className="w-12 h-12 bg-xk-red/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-6 h-6 text-xk-red" />
                </div>
                <div className="min-w-0">
                  <p className="text-xk-warm-white font-heading font-bold text-lg break-all">
                    {c.title}
                  </p>
                  <p className="text-xk-warm-white/50 text-sm font-body">{c.sub}</p>
                </div>
              </>
            );
            const className =
              "flex items-center gap-4 bg-xk-steel/70 border border-xk-warm-white/10 rounded-xl p-6 transition-colors" +
              (c.href ? " hover:border-xk-red/50" : "");
            return c.href ? (
              <a key={c.title} href={c.href} className={className}>
                {content}
              </a>
            ) : (
              <div key={c.title} className={className}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="rounded-xl overflow-hidden border border-xk-warm-white/10">
          <iframe
            title="Xtreme Kleen — Portland, TX"
            src="https://maps.google.com/maps?q=Portland,+TX&z=11&output=embed"
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

export default ContactPage;
