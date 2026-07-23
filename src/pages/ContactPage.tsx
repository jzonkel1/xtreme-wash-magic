import { Phone, Mail, Clock, MapPin, MessageSquare, CalendarDays } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import BookingSection from "@/components/BookingSection";
import { business } from "@/data";
import { breadcrumbLd } from "@/lib/seo";

const details = [
  {
    icon: Mail,
    title: business.email,
    sub: "Email works too — attach photos of the job",
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

/**
 * Contact page. Someone who clicks "Contact" has already decided — so the fast
 * paths (call, text, book) sit at the very top instead of behind a hero, and
 * the form is beside them for people who'd rather type than talk.
 */
const ContactPage = () => (
  <PageLayout quoteForm={false}>
    <Seo
      title="Contact Xtreme Kleen | Free On-Site Quotes | Call or Text 361-306-1551"
      description="Contact Xtreme Kleen for a free on-site quote in Portland, TX and the Coastal Bend. Call or text 361-306-1551 any time — open 24 hours — book a quote online, or send the form and we'll reach out within 24 hours."
      path="/contact"
      jsonLd={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact" }])]}
    />

    <section
      id="quote"
      className="relative bg-xk-charcoal pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 tex-grid opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 480px at 80% 8%, rgba(226,54,54,0.16), transparent 62%)",
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-6">
            <div className="text-center lg:text-left">
              <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
                — CONTACT US —
              </span>
              <h1 className="font-display uppercase text-4xl md:text-6xl text-xk-warm-white mb-4 leading-[0.92] tracking-tight">
                Talk to the Crew, Not a Call Center
              </h1>
              <p className="text-xk-warm-white/60 font-body mb-8 leading-relaxed">
                Call, text, book a time, or send the form — either way you're
                talking to the people who actually run the wand. Quotes are free
                and done on-site.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a
                  href={business.phoneHref}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-6 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
                >
                  <Phone className="w-5 h-5" />
                  Call {business.phone}
                </a>
                <a
                  href={`sms:${business.phoneHref.replace("tel:", "")}`}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 bg-transparent border border-xk-warm-white/25 text-xk-warm-white font-heading font-bold text-base px-6 py-4 rounded-lg hover:border-xk-red hover:bg-xk-red/10 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Text Us
                </a>
              </div>
              <a
                href="#book"
                className="inline-flex items-center gap-2 text-xk-warm-white/60 hover:text-xk-red font-body text-sm transition-colors mb-10"
              >
                <CalendarDays className="w-4 h-4" />
                Or book a quote time online →
              </a>

              <div className="space-y-5 text-left">
                {details.map((d) => {
                  const content = (
                    <>
                      <div className="w-11 h-11 bg-xk-red/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-xk-red/25 transition-colors">
                        <d.icon className="w-5 h-5 text-xk-red" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xk-warm-white font-heading font-bold text-base break-all">
                          {d.title}
                        </p>
                        <p className="text-xk-warm-white/40 text-xs font-body">{d.sub}</p>
                      </div>
                    </>
                  );
                  return d.href ? (
                    <a key={d.title} href={d.href} className="flex items-center gap-4 group">
                      {content}
                    </a>
                  ) : (
                    <div key={d.title} className="flex items-center gap-4 group">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <QuoteForm source="Contact Page — Full Quote Form" />
          </div>
        </div>
      </div>
    </section>

    <BookingSection />

    <section className="bg-xk-charcoal pb-20 md:pb-28">
      <div className="container mx-auto px-4 max-w-5xl">
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
