// ---------------------------------------------------------------------------
// Service page content — one entry per service detail page (/services/<slug>).
// Edit this file to change service page copy, FAQs, and meta tags.
// Card-level copy (homepage grid) still lives in src/data.ts.
// ---------------------------------------------------------------------------
import softWashPhoto from "@/assets/action2.webp";
import highReachPhoto from "@/assets/action3.webp";
import fleetPhoto from "@/assets/truck-wash.webp";
import glassPhoto from "@/assets/access-ford.webp";
import drivewayPhoto from "@/assets/after7.webp";

const pub = (p: string) => `${import.meta.env.BASE_URL}${p}`;

export type ServiceFaq = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  icon: string;
  photo: string;
  /** Short name used in cards, footers, and related-service links. */
  title: string;
  /** H1 on the service page. */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSub: string;
  /**
   * Direct-answer block: a self-contained 40–60 word answer to
   * "what is / who does [service] in the Coastal Bend" — written so an AI
   * engine or featured snippet can lift it verbatim.
   */
  answer: string;
  whatWeCleanTitle: string;
  whatWeClean: string[];
  method: { title: string; paragraphs: string[] };
  faqs: ServiceFaq[];
  related: string[];
};

export const servicesContent: ServiceContent[] = [
  {
    slug: "pressure-washing",
    icon: "pressure",
    photo: drivewayPhoto,
    title: "Power & Pressure Washing",
    h1: "Pressure Washing in Portland, TX & the Coastal Bend",
    metaTitle: "Pressure Washing Portland, TX | Driveways & Concrete | Xtreme Kleen",
    metaDescription:
      "Professional pressure washing in Portland, TX and the Coastal Bend. Driveways, sidewalks, patios, and commercial concrete — cleaned without etching. Free on-site quotes. Call or text 361-947-7811.",
    heroSub:
      "Driveways, sidewalks, patios, and commercial flatwork stripped of oil, grime, and years of buildup — with the pressure dialed to the surface, not cranked to max.",
    answer:
      "Xtreme Kleen provides professional pressure washing for homes and businesses in Portland, Texas and across the Coastal Bend. We clean driveways, sidewalks, patios, curbs, and commercial concrete using surface cleaners and calibrated pressure that lift oil, algae, and grime without etching the surface. Quotes are free and done on-site.",
    whatWeCleanTitle: "Concrete & Hard Surfaces We Clean",
    whatWeClean: [
      "Driveways and parking pads",
      "Sidewalks, walkways, and curbs",
      "Patios and pool decks",
      "Commercial flatwork and drive-thrus",
      "Dumpster pads and loading areas",
      "Oil, grease, and rust stains",
      "Gum and grime on storefront concrete",
      "Fences, brick, and stone (pressure-appropriate)",
    ],
    method: {
      title: "The Right Pressure Beats Maximum Pressure",
      paragraphs: [
        "Concrete looks tough, but a wand cranked wide open at close range carves permanent lines into it — you've probably seen driveways striped with 'wand marks' from a cheap blast job. We run professional surface cleaners that keep pressure even across the whole slab, so the finish comes out uniform instead of zebra-striped.",
        "Stains get treated as chemistry problems first. Oil and grease get a degreaser and dwell time before any water hits the slab; rust and battery stains get their own treatment. Blasting a stain without treating it just spreads it thinner.",
        "On the Gulf coast, concrete doesn't just get dirty — it grows algae. That green-black film comes back fast if it's only rinsed off, so we treat it to kill the growth, not just push it around the slab.",
      ],
    },
    faqs: [
      {
        q: "Will pressure washing damage my driveway?",
        a: "Not when it's done with the right equipment. Damage happens when high pressure is concentrated in one spot — that's how concrete gets etched with wand lines. We use surface cleaners that spread consistent pressure across the slab, and we drop the PSI on anything delicate. If a surface shouldn't take pressure at all, we soft wash it instead.",
      },
      {
        q: "Can you get oil stains out of concrete?",
        a: "Most oil and grease stains come out or fade dramatically with degreaser, dwell time, and hot cleaning. Very old stains that have soaked deep into the pores may leave a shadow, and we'll tell you honestly on-site what to expect before we start.",
      },
      {
        q: "How often should concrete be pressure washed on the Coastal Bend?",
        a: "Most Portland-area driveways benefit from a cleaning every 12 to 18 months. Gulf humidity and salt air feed algae year-round here, so shaded or north-facing concrete usually needs it sooner than inland concrete would.",
      },
      {
        q: "How much does pressure washing cost?",
        a: "Every quote is free and done in person, so the price you get is based on the actual square footage and condition of your surfaces — not a phone guess. Call or text 361-947-7811 and we'll come take a look.",
      },
      {
        q: "Do you do commercial properties?",
        a: "Yes. We clean storefront concrete, drive-thrus, dumpster pads, and full commercial flatwork, and we can schedule around your business hours — we're open 24 hours, so overnight and early-morning work is on the table.",
      },
    ],
    related: ["soft-washing", "roof-cleaning", "industrial-cleaning"],
  },
  {
    slug: "soft-washing",
    icon: "softwash",
    photo: softWashPhoto,
    title: "Soft Wash Cleaning",
    h1: "Soft Wash House & Building Cleaning in the Coastal Bend",
    metaTitle: "Soft Washing Portland, TX | Safe House Washing | Xtreme Kleen",
    metaDescription:
      "True soft wash house and building cleaning in Portland, TX and the Coastal Bend. Low pressure, chemistry-first — kills algae and mildew without damaging siding, stucco, or paint. Call 361-947-7811.",
    heroSub:
      "Low-pressure, chemistry-first cleaning for siding, stucco, and every surface a pressure washer would destroy. The mix does the work — your house never takes a beating.",
    answer:
      "Soft washing is low-pressure exterior cleaning that uses a detergent solution to kill algae, mildew, and organic growth instead of blasting it off. Xtreme Kleen soft washes houses, siding, stucco, and commercial buildings across Portland, TX and the Coastal Bend — removing the green and black staining that Gulf humidity feeds, without damaging paint or surfaces.",
    whatWeCleanTitle: "Surfaces That Should Be Soft Washed",
    whatWeClean: [
      "Vinyl, Hardie, and wood siding",
      "Stucco and EIFS exteriors",
      "Full house washes",
      "Condos, apartments, and HOAs",
      "Commercial building exteriors",
      "Painted surfaces and trim",
      "Screened enclosures and porches",
      "Gutters and exterior eaves",
    ],
    method: {
      title: "Why Low Pressure Cleans Better Here",
      paragraphs: [
        "The green film on Coastal Bend houses isn't dirt — it's alive. Algae and mildew feed on humidity and salt air, and if you strip them off with raw pressure they grow right back, usually within months. A soft wash solution kills the growth at the root, which is why the clean holds.",
        "Pressure is the enemy of siding. High PSI forces water behind vinyl, chews up soft wood, blows out window seals, and strips paint. Soft washing applies the cleaning mix at roughly garden-hose pressure, lets it do the work, then rinses — the surface never takes mechanical abuse.",
        "Tell us about your landscaping, pets, and anything sensitive around the house when we quote the job — we plan the wash around them and rinse thoroughly.",
      ],
    },
    faqs: [
      {
        q: "What's the difference between soft washing and pressure washing?",
        a: "Pressure washing cleans with mechanical force — high-PSI water — and belongs on hard surfaces like concrete. Soft washing cleans with a detergent solution applied at low pressure and belongs on siding, stucco, roofs, and anything paint-coated. Using pressure where soft wash belongs is how siding, seals, and paint get destroyed.",
      },
      {
        q: "Is soft washing safe for my plants and pets?",
        a: "Yes, with proper technique. The solution is diluted for the surface being cleaned, and we plan around landscaping, pools, ponds, and pets — just point them out when we walk the property for your free quote.",
      },
      {
        q: "How long does a soft wash keep the algae away?",
        a: "Because the solution kills the growth instead of just rinsing it off, a soft wash typically holds several times longer than a pressure-rinse. On the humid Gulf coast most homes stay clean noticeably longer when washed this way — shaded, north-facing walls always regrow first.",
      },
      {
        q: "My house has never been washed. Is it too far gone?",
        a: "Almost never. Heavy black and green staining looks permanent but it's organic growth, and the chemistry is built for exactly that. The before-and-afters on this site are real local jobs — most of them started as 'too far gone.'",
      },
    ],
    related: ["roof-cleaning", "pressure-washing", "window-cleaning"],
  },
  {
    slug: "roof-cleaning",
    icon: "roof",
    photo: pub("reels/roof-poster.jpg"),
    title: "Roof Cleaning",
    h1: "Roof Cleaning in Portland, TX & the Coastal Bend",
    metaTitle: "Roof Cleaning Portland, TX | Black Streak Removal | Xtreme Kleen",
    metaDescription:
      "Safe, no-pressure roof cleaning in Portland, TX and the Coastal Bend. Black streaks, algae, and salt-air buildup removed without damaging shingles. Free on-site quotes — call or text 361-947-7811.",
    heroSub:
      "Black streaks, algae, and salt-air buildup lifted off your roof with low pressure and the right chemistry — never a pressure wand ground into your shingles.",
    answer:
      "Xtreme Kleen cleans roofs in Portland, TX and across the Coastal Bend using the soft wash method: a low-pressure detergent application that kills the algae causing black streaks, then rinses clean. No pressure washing, no granule loss, no walking a wand across your shingles — the treatment removes the growth and helps keep it from coming right back.",
    whatWeCleanTitle: "Roofs & Roof Problems We Handle",
    whatWeClean: [
      "Asphalt shingle roofs",
      "Metal roofs",
      "Tile and flat roofs",
      "Black streaks (Gloeocapsa magma algae)",
      "Moss and lichen growth",
      "Salt-air and coastal grime buildup",
      "Commercial roof washing",
      "Gutter face cleaning",
    ],
    method: {
      title: "Never Pressure Wash a Shingle Roof",
      paragraphs: [
        "Those black streaks are a living algae colony feeding on the limestone filler in your shingles — and on Gulf humidity. Pressure washing tears off the protective granules that give a shingle its lifespan, which is why shingle manufacturers call for low-pressure chemical cleaning instead.",
        "Our soft wash treatment kills the algae, streaks and all, and lets rain and rinse carry it away. The roof comes out clean without losing a year of its life in the process.",
        "A clean roof isn't just curb appeal. Algae holds moisture against the shingle and the dark staining absorbs more heat — killing it early is far cheaper than replacing a roof early.",
      ],
    },
    faqs: [
      {
        q: "What causes the black streaks on my roof?",
        a: "A cyanobacteria called Gloeocapsa magma — an algae that eats the limestone filler in asphalt shingles. It thrives in humid coastal air, which is why roofs streak faster in the Coastal Bend than inland. The streaks spread until the colony is killed; rinsing or brushing alone won't stop it.",
      },
      {
        q: "Will roof cleaning damage my shingles?",
        a: "Soft washing won't — that's the point of it. The damage risk comes from pressure washing, which strips the granules that protect the shingle. We never put high pressure on a roof. The cleaning solution does the work and the rinse is gentle.",
      },
      {
        q: "How long does a roof cleaning last?",
        a: "Typically a few years, depending on shade, tree cover, and how much moisture the roof holds. Because the treatment kills the algae colony rather than just knocking the streaks off, it holds far longer than any pressure rinse would.",
      },
      {
        q: "Do I need to be home while you clean the roof?",
        a: "No — as long as we have access to the areas we need and we've walked the job with you beforehand, you don't need to be there. Exterior water access and clear communication are all it takes.",
      },
    ],
    related: ["soft-washing", "pressure-washing", "window-cleaning"],
  },
  {
    slug: "window-cleaning",
    icon: "window",
    photo: highReachPhoto,
    title: "Interior & Exterior Window Cleaning",
    h1: "Window Cleaning in Portland, TX & the Coastal Bend",
    metaTitle: "Window Cleaning Portland, TX | Homes & Commercial | Xtreme Kleen",
    metaDescription:
      "Streak-free interior and exterior window cleaning in Portland, TX and the Coastal Bend — from single-story homes to multi-story commercial buildings. Free quotes: 361-947-7811.",
    heroSub:
      "Streak-free glass inside and out — from single-story homes to multi-story commercial buildings, including the high glass that needs lift equipment to reach.",
    answer:
      "Xtreme Kleen cleans windows inside and out for homes and commercial buildings in Portland, TX and the Coastal Bend. That includes screens, tracks, and hard-to-reach upper-story glass — we have the boom-lift capability for multi-story buildings. Salt haze from Gulf air films coastal glass fast; regular professional cleaning keeps it clear.",
    whatWeCleanTitle: "Window & Glass Work We Do",
    whatWeClean: [
      "Residential windows, inside and out",
      "Screens and window tracks",
      "Multi-story and high-access glass",
      "Commercial curtain walls and storefronts",
      "Post-construction window cleanup",
      "Hard water and sprinkler stain treatment",
      "Skylights",
      "Salt-film removal on coastal glass",
    ],
    method: {
      title: "Coastal Glass Films Over Faster",
      paragraphs: [
        "Gulf air carries salt, and salt hazes glass. Add sprinkler overspray and blowing dust, and Coastal Bend windows go cloudy noticeably faster than glass inland. Professional cleaning strips that film instead of smearing it around, which is the difference between clean and 'streaky the next sunny day.'",
        "We clean both sides. Exterior-only cleaning leaves the interior haze — cooking film, dust, and handprints — that's half of why glass looks dull. Screens and tracks come out and get cleaned too, because dirty screens re-dirty clean windows the first time it rains.",
        "For multi-story buildings we bring the reach — boom lift work is something we do routinely, so upper-floor glass gets the same clean as the ground floor.",
      ],
    },
    faqs: [
      {
        q: "Do you clean interior windows too?",
        a: "Yes — interior and exterior, plus screens and tracks. Exterior-only cleaning leaves interior haze behind, so glass never quite looks clear. We do both sides so it actually does.",
      },
      {
        q: "Can you reach second-story or higher windows?",
        a: "Yes. We handle multi-story residential and commercial glass, including buildings that need boom-lift access — that's routine work for us, not a special order.",
      },
      {
        q: "How often should windows be cleaned near the coast?",
        a: "Storefronts and businesses usually want monthly or quarterly service to stay presentable; homes commonly do well with a cleaning once or twice a year. Salt film builds faster the closer you are to the bay, so waterfront glass needs attention more often.",
      },
      {
        q: "Can you remove hard water spots from sprinklers?",
        a: "Usually, yes. Fresh mineral spotting comes off with the right treatment. Spots that have baked onto glass for years can permanently etch it — we'll tell you on-site what will come off and what won't before any work starts.",
      },
    ],
    related: ["glass-mirror-cleaning", "soft-washing", "pressure-washing"],
  },
  {
    slug: "glass-mirror-cleaning",
    icon: "glass",
    photo: glassPhoto,
    title: "Glass & Mirror Cleaning",
    h1: "Storefront Glass & Mirror Cleaning for Coastal Bend Businesses",
    metaTitle: "Storefront Glass Cleaning Portland & Corpus Christi, TX | Xtreme Kleen",
    metaDescription:
      "Storefront glass, display windows, and mirror cleaning for Coastal Bend businesses. Scheduled service that keeps your entrance spotless and sales-ready. Call or text 361-947-7811.",
    heroSub:
      "Storefront glass, display windows, and mirrors kept spotless and sales-ready — on a schedule, so your entrance never greets customers with smudges.",
    answer:
      "Xtreme Kleen keeps storefront glass, display windows, entry doors, and mirrors clean for businesses across Portland, Corpus Christi, and the Coastal Bend. One-time deep cleans or recurring scheduled service — including dealership showrooms and glass-heavy storefronts like the Access Ford storefront shown on this page. Open 24 hours, so service can happen outside your business hours.",
    whatWeCleanTitle: "Business Glass We Keep Spotless",
    whatWeClean: [
      "Storefront windows and entry doors",
      "Display windows and showcases",
      "Dealership showroom glass",
      "Restaurant and retail glass",
      "Interior mirrors and mirror walls",
      "Glass partitions and railings",
      "Office building lobbies",
      "Recurring scheduled storefront service",
    ],
    method: {
      title: "Your Glass Is Your First Impression",
      paragraphs: [
        "Customers touch your door before they touch your product. Fingerprinted entry glass and hazy display windows read as neglect — clean glass reads as a business that has itself together. It's the cheapest curb-appeal upgrade a storefront can buy.",
        "Storefront glass on the Coastal Bend fights salt haze on the outside and handprints on the inside, which is why a one-time clean fades fast. Recurring service — weekly, biweekly, or monthly, sized to your traffic — is what keeps an entrance permanently presentable.",
        "We're open 24 hours, so the work happens when it suits you: before open, after close, or overnight. Your customers only ever see the result.",
      ],
    },
    faqs: [
      {
        q: "Do you offer recurring storefront glass service?",
        a: "Yes — that's the main way businesses use us. Weekly, biweekly, or monthly schedules keep entry glass and displays consistently clean, and we can service before or after your business hours since we're open 24 hours.",
      },
      {
        q: "Can you clean glass without disrupting our customers?",
        a: "Yes. We schedule around your hours — early mornings, evenings, or overnight — so the crew is never working through your customer traffic.",
      },
      {
        q: "Do you clean interior mirrors and partitions too?",
        a: "Yes. Mirrors, mirror walls, glass partitions, railings, and display cases are all part of the service — anywhere smudged glass shows, we clean it.",
      },
    ],
    related: ["window-cleaning", "pressure-washing", "soft-washing"],
  },
  {
    slug: "industrial-cleaning",
    icon: "industrial",
    photo: fleetPhoto,
    title: "Industrial & Plant Services",
    h1: "Industrial Cleaning Services — Coastal Bend Plants & Facilities",
    metaTitle: "Industrial Cleaning Coastal Bend | Fin Fans, Fleet, Plants | Xtreme Kleen",
    metaDescription:
      "Industrial exterior cleaning for Coastal Bend plants and facilities: fin fan and heat exchanger cleaning, pipe racks, tank exteriors, fleet washing, construction cleanup. OSHA-aligned safety program. 361-947-7811.",
    heroSub:
      "Fin fans, heat exchangers, pipe racks, tank exteriors, fleets, and construction cleanup — with an OSHA-aligned safety program on every site, because plant work is safety work.",
    answer:
      "Xtreme Kleen provides industrial exterior cleaning across the Coastal Bend's plants, terminals, and job sites: air-cooled heat exchanger (fin fan) cleaning, structural steel and pipe racks, tank exteriors, equipment degreasing, fleet washing, and construction cleanup. Every job runs under an OSHA-aligned safety program — JSA before work begins, lockout/tagout, stop-work authority, and full PPE.",
    whatWeCleanTitle: "Industrial Capabilities",
    whatWeClean: [
      "Air-cooled heat exchanger (fin fan) cleaning",
      "Heat exchanger exterior cleaning",
      "Structural steel and pipe rack cleaning",
      "Tank exterior cleaning",
      "Equipment washing and degreasing",
      "Fleet washing",
      "Warehouse and facility exteriors",
      "Concrete, oil, and grease removal",
      "Construction site cleanup",
    ],
    method: {
      title: "Safety Program First, Spray Second",
      paragraphs: [
        "Industrial cleaning isn't residential work with a bigger machine — it's work inside live facilities with rotating equipment, energized systems, and site safety requirements. Our program is built for that: a Job Safety Analysis before any work begins, lockout/tagout around energized and rotating equipment, stop-work authority for every crew member, and full PPE on every job.",
        "Fouled fin fans are a production problem, not a cosmetic one. Debris and grime on air-cooled heat exchangers cut airflow and thermal efficiency, which shows up as lost cooling capacity. Cleaning them restores the exchange surface — one of the highest-ROI maintenance cleans a facility can schedule.",
        "We also keep fleets and heavy equipment clean and degreased — steam cutting through grease, as shown in the real job footage on this site — and handle construction cleanup, a service local builders have publicly reviewed us on.",
      ],
    },
    faqs: [
      {
        q: "What safety standards does your crew follow on plant sites?",
        a: "Every job runs under our OSHA-aligned safety program: a Job Safety Analysis before work begins, lockout/tagout procedures around rotating and electrical equipment, stop-work authority for any unsafe condition, and full PPE — hard hats, safety glasses, hearing protection, hi-vis, steel toes, plus whatever the site specifically requires.",
      },
      {
        q: "Why clean fin fans and heat exchangers?",
        a: "Because fouling costs efficiency. Grime and debris on air-cooled heat exchangers restrict airflow and heat transfer, which degrades cooling performance. Regular exterior cleaning restores the exchange surfaces and is one of the cheapest efficiency recoveries available to a facility.",
      },
      {
        q: "Do you do fleet washing on-site?",
        a: "Yes — trucks, trailers, and heavy equipment, washed and degreased where they're parked. The Dura-Haul trailer wash pictured on this page is our work.",
      },
      {
        q: "Can you handle construction site cleanup?",
        a: "Yes. Construction cleanup is an established part of our work — one of our public Google reviews is from a builder who used us for exactly that and reported we showed up on time and did what we said we'd do.",
      },
    ],
    related: ["pressure-washing", "soft-washing", "glass-mirror-cleaning"],
  },
];

export const getService = (slug: string) =>
  servicesContent.find((s) => s.slug === slug);
