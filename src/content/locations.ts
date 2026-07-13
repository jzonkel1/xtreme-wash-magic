// ---------------------------------------------------------------------------
// Location page content — one entry per city page (/service-areas/<slug>).
// Each city gets its own angle: what the Gulf does to property THERE, what
// kind of work dominates, and why a Portland-based crew makes sense for it.
// Edit this file to change city page copy, FAQs, and meta tags.
// ---------------------------------------------------------------------------

// Hero photos. Every one of these is a REAL Xtreme Kleen job — the city pages
// all used to share one AI-rendered "hero bridge" image, which is exactly the
// stock-photo smell these pages exist to avoid. Each city now gets the photo
// that matches the work its copy actually talks about.
import rigPhoto from "@/assets/action1.webp"; // the loaded rig, on site
import condoWashPhoto from "@/assets/action2.webp"; // coastal condo soft wash
import highReachPhoto from "@/assets/action3.webp"; // boom-lift building wash
import ppePhoto from "@/assets/ppe-equipment-wash.webp"; // PPE, plant equipment
import crewPhoto from "@/assets/crew-thumbs-up.webp"; // crew after a plant job
import roofPhoto from "@/assets/roof-tile.webp"; // clean tile roof
import glassPhoto from "@/assets/glass-panels.webp"; // storefront glass
import windowsPhoto from "@/assets/windows-arched.webp"; // residential windows
import concretePhoto from "@/assets/concrete-flatwork.webp"; // commercial flatwork
import fordPhoto from "@/assets/access-ford.webp"; // Access Ford, Corpus Christi
import pressurePhoto from "@/assets/pressure-spray.webp"; // wand + spray fan

/** Shared hero for the /service-areas hub: Eric's own rig, parked on a job. */
export const serviceAreasHeroPhoto = rigPhoto;

export type LocationFaq = { q: string; a: string };

export type LocationContent = {
  slug: string;
  city: string;
  /** "Portland, TX" — used in titles and schema. */
  cityState: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Real job photo behind this city's hero banner. */
  heroPhoto: string;
  /** Self-contained direct answer for "[service] in [city]" queries. */
  answer: string;
  /** The local story — why this town's cleaning problems are its own. */
  localAngle: string[];
  /** Short local proof points shown as a bullet strip. */
  highlights: string[];
  /** Service slugs to feature first for this market. */
  featuredServices: string[];
  faqs: LocationFaq[];
};

export const locationsContent: LocationContent[] = [
  {
    slug: "portland-tx",
    city: "Portland",
    cityState: "Portland, TX",
    metaTitle: "Pressure Washing & Soft Wash Portland, TX | Xtreme Kleen",
    metaDescription:
      "Xtreme Kleen is Portland, TX's hometown pressure washing and soft wash crew. Houses, driveways, roofs, windows, and storefronts — 5.0-rated on Google. Free on-site quotes: 361-947-7811.",
    h1: "Pressure Washing & Soft Washing in Portland, TX",
    heroPhoto: condoWashPhoto, // home base, bayfront residential soft wash
    answer:
      "Xtreme Kleen is based in Portland, Texas — this is our home turf. We pressure wash driveways and concrete, soft wash houses and roofs, and clean windows and storefronts throughout Portland, with free on-site quotes and a 5.0 Google rating. Call or text 361-947-7811 any time; we're open 24 hours.",
    localAngle: [
      "Portland sits on a bluff between Corpus Christi Bay and Nueces Bay, which means almost every street in town catches salt-laden Gulf breeze from two directions. That air is why siding here greens up faster than it does even a few miles inland — algae and mildew get a year-round growing season, and north-facing walls and shaded fence lines go first.",
      "Being based here means Portland jobs get the fastest response we offer. From the established neighborhoods off Wildcat Drive to the new construction pushing out toward Gregory, we quote in person, usually fast — and because it's our own town, the before-and-afters end up in front of your neighbors.",
    ],
    highlights: [
      "Home base — fastest response times in our service area",
      "5.0-rated on Google by Portland-area customers",
      "Bayfront salt air is our specialty, not a surprise",
      "Residential, storefront, and HOA work throughout town",
    ],
    featuredServices: ["soft-washing", "pressure-washing", "roof-cleaning", "window-cleaning"],
    faqs: [
      {
        q: "How fast can you get to a job in Portland?",
        a: "Faster than anywhere else we serve — we're based in Portland. Call or text 361-947-7811 and we'll set up a free on-site quote, usually quickly since there's no drive to plan around.",
      },
      {
        q: "Why does my Portland house grow green film so fast?",
        a: "Portland catches humid, salt-carrying air off both Corpus Christi Bay and Nueces Bay, and that combination feeds algae and mildew year-round. A soft wash kills the growth instead of rinsing it off, which is why it stays clean far longer than a DIY pressure rinse.",
      },
      {
        q: "Do you handle HOA and multi-home work in Portland?",
        a: "Yes — we've soft washed condo and multi-unit properties, and we can quote a whole property or coordinate multiple homes on one visit. On-site quotes are free either way.",
      },
    ],
  },
  {
    slug: "gregory-tx",
    city: "Gregory",
    cityState: "Gregory, TX",
    metaTitle: "Pressure Washing Gregory, TX | Soft Wash & Roof Cleaning | Xtreme Kleen",
    metaDescription:
      "Pressure washing, soft washing, and roof cleaning in Gregory, TX — minutes from our Portland home base. Houses, driveways, and heavy-duty cleaning near the industrial corridor. 361-947-7811.",
    h1: "Pressure Washing & Soft Washing in Gregory, TX",
    heroPhoto: ppePhoto, // industrial-corridor equipment work
    answer:
      "Xtreme Kleen serves Gregory, Texas from our home base in neighboring Portland — just minutes up US-181. We pressure wash driveways, soft wash houses and roofs, and handle the heavier equipment and fleet cleaning that fits a town on the edge of the Coastal Bend's industrial corridor. Free on-site quotes: 361-947-7811.",
    localAngle: [
      "Gregory is right next door to us — Portland and Gregory run together along US-181, and G-P homeowners deal with the same double dose of bay humidity that we clean off houses in Portland every week. Siding, fences, and shaded driveways here green up on the same schedule.",
      "Gregory also sits at the gateway to the San Patricio industrial corridor, where heavy industry means heavy equipment, work trucks, and plants that need exterior cleaning done under a real safety program. We run both sides of that street: soft washing a house in the morning, degreasing equipment or washing a fleet in the afternoon — with an OSHA-aligned safety program for the industrial work.",
    ],
    highlights: [
      "Minutes from our Portland home base up US-181",
      "Same-town response times — Gregory is next door",
      "Industrial corridor capability: fleets, equipment, plant exteriors",
      "OSHA-aligned safety program for industrial jobs",
    ],
    featuredServices: ["soft-washing", "pressure-washing", "industrial-cleaning", "roof-cleaning"],
    faqs: [
      {
        q: "Do you charge extra to come out to Gregory?",
        a: "Gregory is minutes from our Portland base — it's core service area, and quotes are free and done on-site like everywhere else we work.",
      },
      {
        q: "Can you clean equipment and trucks for crews working the industrial corridor?",
        a: "Yes. Fleet washing, equipment degreasing, and facility exteriors are an established part of our work, and industrial jobs run under our OSHA-aligned safety program — JSA, lockout/tagout, stop-work authority, and full PPE.",
      },
      {
        q: "What services do Gregory homeowners book most?",
        a: "The same Gulf-humidity fixes as Portland: house soft washing to kill algae on siding, driveway pressure washing, and roof cleaning for black streaks.",
      },
    ],
  },
  {
    slug: "ingleside-tx",
    city: "Ingleside",
    cityState: "Ingleside, TX",
    metaTitle: "Pressure Washing Ingleside, TX | Soft Wash & Industrial | Xtreme Kleen",
    metaDescription:
      "Pressure washing and soft washing in Ingleside, TX. Bayfront homes, businesses, and industrial facilities cleaned by a Portland-based crew with an OSHA-aligned safety program. 361-947-7811.",
    h1: "Pressure Washing & Soft Washing in Ingleside, TX",
    heroPhoto: crewPhoto, // energy-terminal / plant work
    answer:
      "Xtreme Kleen provides pressure washing, soft washing, roof cleaning, and industrial exterior cleaning in Ingleside, Texas — a short drive from our Portland base via TX-361. Ingleside's bayfront position makes salt film and algae constant problems for homes, and its energy terminals make safety-program industrial cleaning a local necessity. Free quotes: 361-947-7811.",
    localAngle: [
      "Ingleside sits directly on Corpus Christi Bay, and bayfront exposure is the hardest duty an exterior can pull: salt film on glass, algae on siding, and grime that comes back quicker than anywhere inland. Homes here benefit most from soft washing — killing the growth rather than rinsing it — because regrowth pressure is relentless this close to the water.",
      "Ingleside is also one of the Gulf coast's serious energy ports, surrounded by terminals, fabrication yards, and heavy industry. That's work we're built for: fin fan and heat exchanger cleaning, tank exteriors, pipe racks, fleets, and equipment — all under an OSHA-aligned safety program with JSA, lockout/tagout, and stop-work authority on every job.",
    ],
    highlights: [
      "Bayfront homes: soft wash beats regrowth pressure",
      "Industrial capability for terminals and yards",
      "Salt-film window and glass cleaning",
      "Short run from Portland via TX-361",
    ],
    featuredServices: ["industrial-cleaning", "soft-washing", "window-cleaning", "pressure-washing"],
    faqs: [
      {
        q: "Do you work on industrial sites in Ingleside?",
        a: "Yes — industrial exterior cleaning is one of our core services: fin fans and heat exchangers, structural steel and pipe racks, tank exteriors, equipment degreasing, and fleet washing, all run under our OSHA-aligned safety program.",
      },
      {
        q: "Why do Ingleside houses get dirty so fast?",
        a: "Direct bayfront exposure. Salt air feeds algae and films over glass faster than anywhere inland, so a rinse-only clean fails quickly here. Soft washing kills the growth at the root, which is what makes the clean hold on the bay.",
      },
      {
        q: "Is Ingleside inside your normal service area?",
        a: "Yes — it's a short drive from our Portland base down TX-361, and it's listed in our core Coastal Bend service area. On-site quotes are free.",
      },
    ],
  },
  {
    slug: "aransas-pass-tx",
    city: "Aransas Pass",
    cityState: "Aransas Pass, TX",
    metaTitle: "Pressure Washing Aransas Pass, TX | Soft Wash | Xtreme Kleen",
    metaDescription:
      "Pressure washing and soft washing in Aransas Pass, TX. Homes, storefronts, and working-waterfront properties cleaned right by a Coastal Bend crew. Free on-site quotes: 361-947-7811.",
    h1: "Pressure Washing & Soft Washing in Aransas Pass, TX",
    heroPhoto: glassPhoto, // working-waterfront storefront glass
    answer:
      "Xtreme Kleen pressure washes and soft washes homes, storefronts, and commercial properties in Aransas Pass, Texas. A working waterfront town takes real salt exposure — we clean the algae, salt film, and grime it leaves on siding, concrete, glass, and roofs, with free on-site quotes. Call or text 361-947-7811.",
    localAngle: [
      "Aransas Pass is a working waterfront town — the shrimp fleet at Conn Brown Harbor, the channel traffic, and the constant Gulf breeze mean exteriors here take salt the way inland towns take dust. Siding, storefront glass, and metal roofs all show it, and the buildup accelerates the closer you get to the harbor.",
      "We clean all of it: house soft washes that kill the algae instead of feeding it a fresh rinse, storefront and glass service for the businesses along Wheeler Avenue and the highway corridor, and concrete work for driveways and commercial pads that haven't been bare-clean in years.",
    ],
    highlights: [
      "Working-waterfront salt exposure is standard duty for us",
      "Storefront and commercial glass service",
      "House soft washing that holds against harbor air",
      "Easy reach from Portland via TX-361",
    ],
    featuredServices: ["soft-washing", "pressure-washing", "glass-mirror-cleaning", "roof-cleaning"],
    faqs: [
      {
        q: "Do you serve businesses in Aransas Pass?",
        a: "Yes — storefront glass, entry concrete, building washes, and recurring scheduled service for businesses that want the entrance permanently presentable. We're open 24 hours, so service can happen outside your business hours.",
      },
      {
        q: "Can you handle properties close to the harbor?",
        a: "That's exactly the work soft washing was made for. Heavy salt-air exposure means growth comes back fast unless it's killed at the root — our chemistry-first wash is built for waterfront duty.",
      },
      {
        q: "How do quotes work in Aransas Pass?",
        a: "Same as everywhere we serve: free and in person. We look at the actual property, give you a straight price, and schedule the work — no phone-guess pricing.",
      },
    ],
  },
  {
    slug: "rockport-tx",
    city: "Rockport",
    cityState: "Rockport, TX",
    metaTitle: "Pressure Washing Rockport, TX | Soft Wash & Roof Cleaning | Xtreme Kleen",
    metaDescription:
      "Pressure washing, soft washing, and roof cleaning in Rockport, TX. Coastal homes, vacation rentals, and live-oak shade mildew handled by a Coastal Bend crew. 361-947-7811.",
    h1: "Pressure Washing & Soft Washing in Rockport, TX",
    heroPhoto: roofPhoto, // coastal roofs + vacation rentals
    answer:
      "Xtreme Kleen serves Rockport, Texas with pressure washing, soft washing, roof cleaning, and window cleaning — up TX-35 from our Portland base. Rockport's mix of waterfront homes, vacation rentals, and deep live-oak shade makes algae and mildew a constant fight; our soft wash kills the growth so the clean actually lasts. Call 361-947-7811.",
    localAngle: [
      "Rockport properties fight the Gulf on two fronts. The waterfront side takes direct salt air off Aransas Bay, and the inland side lives under the town's famous wind-sculpted live oaks — beautiful trees that cast permanent shade, drop organic debris, and keep roofs and north walls damp enough for mildew to feel at home year-round.",
      "There's also more at stake per square foot here: a huge share of Rockport properties are vacation rentals, second homes, and waterfront investments where curb appeal is income. A green-streaked exterior shows up in listing photos. We keep rentals photo-ready, clean roofs without touching a shingle with pressure, and pull the salt film off view windows so the bay actually looks like the bay.",
    ],
    highlights: [
      "Vacation rentals kept listing-photo ready",
      "Live-oak shade mildew is a specialty problem we know",
      "No-pressure roof cleaning for coastal shingles",
      "View-window salt film removal",
    ],
    featuredServices: ["soft-washing", "roof-cleaning", "window-cleaning", "pressure-washing"],
    faqs: [
      {
        q: "Do you work with vacation rental owners in Rockport?",
        a: "Yes — exterior washes, driveway cleaning, and window service timed between guests. For out-of-town owners, we can walk the property, quote it free, and handle the job without you needing to be there.",
      },
      {
        q: "My Rockport house is under live oaks and always mildews. Can that be fixed?",
        a: "It can be managed properly. Shade means the surface never fully dries, so growth is inevitable — but a soft wash kills the colony instead of rinsing it, which resets the clock by a long stretch instead of a few months.",
      },
      {
        q: "Is Rockport within your service area?",
        a: "Yes — Rockport and Fulton are a straight run up TX-35 from our Portland base, and Rockport is part of our core Coastal Bend service area. On-site quotes are free.",
      },
    ],
  },
  {
    slug: "corpus-christi-tx",
    city: "Corpus Christi",
    cityState: "Corpus Christi, TX",
    metaTitle: "Pressure Washing Corpus Christi, TX | Soft Wash & Commercial | Xtreme Kleen",
    metaDescription:
      "Pressure washing and soft washing in Corpus Christi, TX — homes, storefronts, and industrial facilities from Calallen to the Southside. 5.0-rated Coastal Bend crew. 361-947-7811.",
    h1: "Pressure Washing & Soft Washing in Corpus Christi, TX",
    heroPhoto: fordPhoto, // the page literally cites Access Ford as ours
    answer:
      "Xtreme Kleen serves Corpus Christi, Texas — residential, commercial, and industrial — from just across the Harbor Bridge in Portland. We pressure wash concrete, soft wash houses and buildings, clean storefront glass, and handle plant and refinery-corridor industrial work under an OSHA-aligned safety program. Free on-site quotes: 361-947-7811.",
    localAngle: [
      "Corpus Christi is the big market of the Coastal Bend, and it throws every kind of cleaning problem at us: bayfront homes on Ocean Drive taking direct salt spray, Southside subdivisions fighting the same algae as everyone else on the Gulf, storefronts along SPID that need glass and concrete kept presentable, and the refinery corridor — where industrial exterior cleaning needs a crew that shows up with a real safety program, not just a pressure washer.",
      "We're just across the Harbor Bridge, so Corpus jobs are an easy run for us. Some of the work on this site is Corpus work — the Access Ford storefront glass is ours — and our industrial capabilities (fin fans, heat exchangers, tank exteriors, fleets) are built for the plants that line the ship channel.",
    ],
    highlights: [
      "Minutes across the Harbor Bridge from our base",
      "Residential, storefront, and industrial capability in one crew",
      "Refinery-corridor safety program: JSA, LOTO, stop-work, full PPE",
      "Real Corpus work in our portfolio, including dealership glass",
    ],
    featuredServices: ["pressure-washing", "soft-washing", "industrial-cleaning", "glass-mirror-cleaning"],
    faqs: [
      {
        q: "Which parts of Corpus Christi do you serve?",
        a: "All of it — Calallen and Annaville, the Northside and downtown, Ocean Drive, the Southside, and Flour Bluff. We're based just across the Harbor Bridge in Portland, so most of Corpus is a short run for us.",
      },
      {
        q: "Do you do commercial and industrial work in Corpus Christi?",
        a: "Yes. Storefront glass and concrete for retail, building washes for offices, and industrial exterior cleaning — fin fans, heat exchangers, pipe racks, tanks, and fleets — under an OSHA-aligned safety program built for plant sites.",
      },
      {
        q: "Can you handle bayfront homes on Ocean Drive?",
        a: "Direct salt spray is the hardest exposure there is, and it's exactly what soft washing is built for. We kill the growth, pull the salt film off glass, and the clean holds far longer than a pressure rinse would.",
      },
    ],
  },
  {
    slug: "taft-tx",
    city: "Taft",
    cityState: "Taft, TX",
    metaTitle: "Pressure Washing Taft, TX | House Washing & Concrete | Xtreme Kleen",
    metaDescription:
      "Pressure washing and house soft washing in Taft, TX. Farm-town dust plus Gulf humidity is a rough mix for exteriors — we clean it right. Free on-site quotes: 361-947-7811.",
    h1: "Pressure Washing & House Washing in Taft, TX",
    heroPhoto: pressurePhoto, // farm-town houses, driveways, fences
    answer:
      "Xtreme Kleen provides pressure washing, house soft washing, and roof cleaning in Taft, Texas — a quick run up US-181 from our Portland home base. Taft exteriors collect a rough mix of farm dust and Gulf-humidity algae; we clean both, with free on-site quotes. Call or text 361-947-7811.",
    localAngle: [
      "Taft sits in San Patricio farm country, and that shows up on houses: field dust rides the wind and sticks to humid siding, shaded walls grow the same green film as the rest of the Coastal Bend, and driveways collect a mix of soil and mildew that a garden hose only smears around.",
      "It's an easy run for us up US-181 through Gregory, so Taft gets the same treatment as our home-base jobs — a free in-person quote, the right method for each surface, and equipment that finishes in hours what a rented machine turns into a lost weekend.",
    ],
    highlights: [
      "Quick run up US-181 from Portland",
      "Farm dust + humidity buildup handled with the right chemistry",
      "House washes, driveways, roofs, and metal buildings",
      "Free on-site quotes, straight pricing",
    ],
    featuredServices: ["soft-washing", "pressure-washing", "roof-cleaning", "window-cleaning"],
    faqs: [
      {
        q: "Do you come out to Taft for single-house jobs?",
        a: "Yes — Taft is core service area for us, minutes up US-181. House washes, driveways, and roofs are all worth the trip, and the quote visit is free.",
      },
      {
        q: "Can you clean metal buildings and barns?",
        a: "Yes. Metal buildings, shops, and barn exteriors clean up well with the right approach — soft wash for painted metal to protect the finish, pressure where the surface calls for it.",
      },
      {
        q: "What's the most common job you do in Taft?",
        a: "Full house washes — killing the algae film that Gulf humidity grows on siding — plus driveway and sidewalk concrete cleaning.",
      },
    ],
  },
  {
    slug: "sinton-tx",
    city: "Sinton",
    cityState: "Sinton, TX",
    metaTitle: "Pressure Washing Sinton, TX | House & Storefront Washing | Xtreme Kleen",
    metaDescription:
      "Pressure washing and soft washing in Sinton, TX — the county seat's homes, storefronts, and commercial properties cleaned by a Coastal Bend crew. Free quotes: 361-947-7811.",
    h1: "Pressure Washing & Soft Washing in Sinton, TX",
    heroPhoto: windowsPhoto, // county-seat storefronts and homes
    answer:
      "Xtreme Kleen serves Sinton, Texas — the San Patricio County seat — with pressure washing, house soft washing, roof cleaning, and storefront service, about twenty minutes up US-181 from our Portland base. Free on-site quotes for homes and businesses: 361-947-7811.",
    localAngle: [
      "Sinton is the county seat, and its downtown wears that role — storefronts and offices around the courthouse square that look their best when the glass is clean and the sidewalks aren't grown over with grime. That's bread-and-butter work for us: storefront glass, entry concrete, and building washes on a schedule that suits the business.",
      "Residentially, Sinton homes fight the same Coastal Bend combination as the rest of the county — humidity-fed algae on siding and roofs, plus ranch-country dust — just far enough inland that owners are sometimes surprised how green a north wall can get. The fix is the same chemistry-first soft wash we run on the bayfront, and it holds even better up here.",
    ],
    highlights: [
      "County-seat downtown storefront service",
      "House washes and roof cleaning for Sinton neighborhoods",
      "About twenty minutes up US-181 from Portland",
      "Free on-site quotes for homes and businesses",
    ],
    featuredServices: ["pressure-washing", "soft-washing", "glass-mirror-cleaning", "roof-cleaning"],
    faqs: [
      {
        q: "Do you serve businesses around the square in Sinton?",
        a: "Yes — storefront glass, entryways, sidewalks, and building exteriors, either one-time or on a recurring schedule. Being open 24 hours means we can work outside your business hours.",
      },
      {
        q: "Is Sinton too far for a free quote?",
        a: "Not at all — Sinton is about twenty minutes up US-181 and squarely inside our service area. Quotes are free and done in person.",
      },
      {
        q: "Do inland homes really need soft washing?",
        a: "Yes — Gulf humidity reaches well past the bayfront, and shaded siding in Sinton grows the same algae film as coastal homes, just a bit slower. Killing it with a soft wash keeps it gone longest.",
      },
    ],
  },
  {
    slug: "odem-tx",
    city: "Odem",
    cityState: "Odem, TX",
    metaTitle: "Pressure Washing Odem, TX | House Washing & Driveways | Xtreme Kleen",
    metaDescription:
      "Pressure washing and house soft washing in Odem, TX. Driveways, siding, and roofs cleaned right by a Portland-based Coastal Bend crew. Free on-site quotes: 361-947-7811.",
    h1: "Pressure Washing & House Washing in Odem, TX",
    heroPhoto: concretePhoto, // house washes and driveway concrete
    answer:
      "Xtreme Kleen provides pressure washing, house soft washing, and roof cleaning in Odem, Texas, a short drive from our Portland home base. Odem homes deal with the same humidity-fed algae as the rest of the Coastal Bend — we kill it with a chemistry-first wash and clean the concrete to match. Free quotes: 361-947-7811.",
    localAngle: [
      "Odem is a small town on the US-77 corridor where most folks commute toward Corpus or Sinton — and small-town properties deserve the same professional treatment as a bayfront address. House washes, driveway and sidewalk cleaning, and roof streak removal are the jobs we run most here.",
      "Because Odem is compact, it pairs well with our routes through Sinton and Taft — which keeps scheduling easy and means a single-house job never feels like a stretch for us. Quote's free, price is straight, and the work gets done in hours.",
    ],
    highlights: [
      "Easy scheduling alongside our Sinton and Taft routes",
      "House washes, driveways, and roof streak removal",
      "Same professional treatment as our bayfront jobs",
      "Free on-site quotes, straight pricing",
    ],
    featuredServices: ["pressure-washing", "soft-washing", "roof-cleaning", "window-cleaning"],
    faqs: [
      {
        q: "Do you really come out to Odem for one house?",
        a: "Yes. Odem sits right on our route network through San Patricio County, so single-house jobs are easy to schedule — and the on-site quote is free.",
      },
      {
        q: "What do Odem homeowners usually book?",
        a: "Full house soft washes and driveway cleanings, often together — the siding gets the chemistry-first wash and the concrete gets the surface cleaner, and the whole property reads new again.",
      },
      {
        q: "Can you do roofs in Odem?",
        a: "Yes — black-streak roof cleaning with the no-pressure soft wash method, the same way we do it everywhere: the chemistry kills the algae, and no wand ever grinds against your shingles.",
      },
    ],
  },
];

export const getLocation = (slug: string) =>
  locationsContent.find((l) => l.slug === slug);
