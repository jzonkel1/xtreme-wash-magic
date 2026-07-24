import { Link } from "react-router-dom";
import { Phone, ShieldCheck, Clock, MapPin, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { business, travel } from "@/data";
import { breadcrumbLd } from "@/lib/seo";
import ericPhoto from "@/assets/eric-owner.webp";
import ericFishingPhoto from "@/assets/eric-fishing.webp";
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
              Built on Hard Work.
              <br className="hidden sm:block" /> Driven by Pride.
            </h2>
            <div className="space-y-4 text-xk-warm-white/65 font-body leading-relaxed">
              <p>
                I'm Eric, founder of {business.brand}. I didn't start this company
                because I wanted to wash houses — I started it because I was tired
                of watching contractors cut corners, rush jobs, and settle for
                "good enough." My mission is simple: restore every property as if
                it were my own, and leave every customer saying, "I can't believe
                that's the same place."
              </p>
              <p>
                Living on the Texas Gulf Coast means battling salt air, humidity,
                algae, mold, rust, and oxidation year-round. We don't just make
                properties look clean — we restore them the right way, so the
                results last. Family home, apartment complex, refinery, restaurant,
                or commercial property: if I wouldn't be proud to put my name on
                it, it isn't finished.
              </p>
              <p>
                When you choose {business.brand}, you're hiring the owner. From the
                first phone call to the final walkthrough, my reputation is on
                every estimate, every project, and every property we leave behind.
                I don't just want to earn your business — I want to earn your trust.
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

        {/* Off the clock — the personal side Eric asked to include */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,360px)] gap-10 lg:gap-14 items-center mt-14 md:mt-20">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
              — OFF THE CLOCK —
            </span>
            <h3 className="font-display uppercase text-2xl md:text-3xl text-xk-warm-white mb-4 leading-[0.95] tracking-tight">
              Patience Pays Off — On the Water and On the Job
            </h3>
            <p className="text-xk-warm-white/65 font-body leading-relaxed">
              When I'm not working, you'll usually find me somewhere on the Texas
              coast chasing snook and tarpon. Fishing taught me patience,
              discipline, and attention to detail — the same mindset I bring to
              every project. Success comes from preparation, persistence, and
              never cutting corners.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-xk-warm-white/10 mx-auto lg:mx-0 max-w-[360px] w-full order-1 lg:order-2">
            <img
              src={ericFishingPhoto}
              alt={`${business.owner}, owner of ${business.brand}, holding a snook on the Texas coast`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-14 md:mt-20 bg-xk-steel/70 border-l-4 border-xk-red rounded-r-xl p-8 md:p-10 max-w-4xl mx-auto">
          <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-4">
            OUR MISSION
          </span>
          <p className="font-heading font-medium text-xl md:text-2xl text-xk-warm-white leading-snug">
            To become the most trusted exterior restoration company on the Texas
            Gulf Coast — delivering exceptional results, treating every property
            like it's our own, and proving that quality workmanship still matters.
          </p>
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
