import { Link } from "react-router-dom";
import { Phone, ShieldCheck, Clock, MapPin, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { business, travel } from "@/data";
import { breadcrumbLd } from "@/lib/seo";
import ericPhoto from "@/assets/eric-owner.webp";
// A REAL photo of the crew in full PPE pressure-washing plant equipment. The
// old banner here was the AI-rendered bridge shot, which is exactly the wrong
// note for the one page whose entire job is "these are real people".
import bannerPhoto from "@/assets/ppe-equipment-wash.webp";

/**
 * About page. Everything here is verifiable: who owns the company, what it
 * actually does, the safety program that exists on paper, and the service area.
 * NO invented origin story, no "since 19XX", no made-up years of experience —
 * we don't have those facts, and a washing company's credibility is the product.
 */
const principles = [
  {
    icon: ShieldCheck,
    title: "The Chemistry Does the Work",
    body: "A cheap blast job etches concrete, strips paint, and blows out window seals. We match the method to the surface — soft wash where pressure would do damage, hot water and surface cleaners where it won't. It costs us more time. It costs you less in repairs.",
  },
  {
    icon: Phone,
    title: "You Talk to the Person Doing the Job",
    body: `Call 361-306-1551 and you get ${business.owner} — not a call center, not a dispatcher reading a script. The person who quotes your property is the person who shows up to clean it.`,
  },
  {
    icon: Clock,
    title: "We Work When You Can't Be Closed",
    body: "Restaurants, storefronts, and plants can't shut down for a wash. We're open 24 hours and we schedule around you — nights, weekends, before the doors open. The job gets done; your business keeps running.",
  },
];

const AboutPage = () => (
  <PageLayout>
    <Seo
      title="About Xtreme Kleen | Eric Kuhn, Portland TX | Power Washing the Coastal Bend"
      description="Xtreme Kleen is owned and run by Eric Kuhn out of Portland, Texas — residential, commercial, and industrial washing across the Coastal Bend, with a real OSHA-aligned safety program. Call or text 361-306-1551."
      path="/about"
      jsonLd={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "About" }])]}
    />

    <PageHero
      kicker="WHO YOU'RE HIRING"
      title="The Guy on the Wand Owns the Company"
      sub={`${business.brand} is ${business.owner}'s company — based in ${business.primaryCity}, working the whole Coastal Bend. Houses, storefronts, and plant equipment, cleaned by the people who answer the phone.`}
      photo={bannerPhoto}
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "About" }]}
    />

    {/* Eric */}
    <section className="bg-xk-charcoal py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-14 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-xk-warm-white/10 mx-auto lg:mx-0 max-w-[380px] w-full">
            <img
              src={ericPhoto}
              alt={`${business.owner}, owner of ${business.brand}, in front of the rig in Portland, TX`}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-xk-charcoal/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-display uppercase text-2xl text-xk-warm-white tracking-tight">
                {business.owner}
              </p>
              <p className="text-xk-warm-white/60 font-body text-sm">
                Owner · {business.legalName}
              </p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
              — MEET THE OWNER —
            </span>
            <h2 className="font-display uppercase text-3xl md:text-4xl text-xk-warm-white mb-5 leading-[0.95] tracking-tight">
              Local Crew. Coastal Problems.
            </h2>
            <div className="space-y-4 text-xk-warm-white/65 font-body leading-relaxed">
              <p>
                Eric runs {business.brand} out of {business.primaryCity} — which
                means the salt air, the humidity, and the algae that eats Coastal
                Bend properties aren't a theory to him. They're what's on his own
                house.
              </p>
              <p>
                That's the difference between a crew that washes a wall and a crew
                that knows why the wall got green in the first place. Gulf growth
                comes back if you only rinse it off. We treat it so the clean
                holds.
              </p>
              <p>
                The company runs the full range — driveways and home exteriors on
                one end, fin fan bundles and plant structures on the other. Same
                phone number, same person answering it.
              </p>
            </div>

            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2.5 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-7 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red mt-8"
            >
              <Phone className="w-5 h-5" />
              Call or Text {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* How we work */}
    <section className="bg-xk-steel py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display uppercase text-3xl md:text-4xl text-xk-warm-white text-center mb-12 tracking-tight">
          How We Actually Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p) => (
            <div
              key={p.title}
              className="bg-xk-charcoal/70 border border-xk-warm-white/10 rounded-xl p-7"
            >
              <div className="w-12 h-12 bg-xk-red/15 rounded-lg flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-xk-red" />
              </div>
              <h3 className="font-heading font-bold text-lg text-xk-warm-white mb-3">
                {p.title}
              </h3>
              <p className="text-xk-warm-white/60 font-body text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Safety + service area */}
    <section className="bg-xk-charcoal py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-xk-steel/70 border border-xk-warm-white/10 rounded-xl p-8">
            <ShieldCheck className="w-8 h-8 text-xk-red mb-4" />
            <h3 className="font-display uppercase text-2xl text-xk-warm-white mb-3 tracking-tight">
              Plant-Ready, Not Just Driveway-Ready
            </h3>
            <p className="text-xk-warm-white/60 font-body leading-relaxed mb-6">
              Industrial sites don't let just anyone through the gate. Xtreme
              Kleen runs a real safety program — Job Safety Analysis before work
              starts, lock out / tag out, stop work authority for anyone on the
              crew, and full PPE on every job. Documentation available on request.
            </p>
            <Link
              to="/services/industrial-cleaning"
              className="inline-flex items-center gap-2 text-xk-red hover:text-xk-red-glow font-heading font-bold text-sm transition-colors"
            >
              See the industrial work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-xk-steel/70 border border-xk-warm-white/10 rounded-xl p-8">
            <MapPin className="w-8 h-8 text-xk-red mb-4" />
            <h3 className="font-display uppercase text-2xl text-xk-warm-white mb-3 tracking-tight">
              Based in Portland. We Travel.
            </h3>
            <p className="text-xk-warm-white/60 font-body leading-relaxed mb-6">
              Home base is {business.primaryCity}, and we work the whole Coastal
              Bend — Corpus Christi, Rockport, Ingleside, Aransas Pass, and every
              town between. {travel.blurb}
            </p>
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-xk-red hover:text-xk-red-glow font-heading font-bold text-sm transition-colors"
            >
              See where we work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default AboutPage;
