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
import fleetPhoto from "@/assets/truck-wash.webp"; // Dura-Haul trailer washdown
import wharfPhoto from "@/assets/commercial/fishermans-wharf.webp"; // night dock wash, Port Aransas

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
  // -------------------------------------------------------------------------
  // Port Aransas — coastal commercial, backed by REAL clients on the island
  // (Fisherman's Wharf, Grumbles Seafood).
  // -------------------------------------------------------------------------
  {
    slug: "port-aransas-tx",
    city: "Port Aransas",
    cityState: "Port Aransas, TX",
    metaTitle: "Pressure Washing Port Aransas, TX | Restaurants & Rentals | Xtreme Kleen",
    metaDescription:
      "Pressure washing and soft washing in Port Aransas, TX — restaurants, vacation rentals, and waterfront decks cleaned overnight so the doors never close. We already work the island: 361-947-7811.",
    h1: "Pressure Washing & Soft Washing in Port Aransas, TX",
    heroPhoto: wharfPhoto, // our own night dock wash at Fisherman's Wharf
    answer:
      "Xtreme Kleen pressure washes and soft washes in Port Aransas, Texas — restaurants, vacation rentals, waterfront decks, and storefronts. We already work the island: the dock washdowns at Fisherman's Wharf and the patio at Grumbles Seafood are our jobs, done overnight so the doors never closed. Call or text 361-947-7811.",
    localAngle: [
      "Nowhere in our service area punishes property like Port Aransas. Salt spray doesn't drift here — it lands. Boardwalks gray out, gull traffic and bait-stand grime build up on commercial decking, and rental exteriors green up between seasons fast enough to show up in booking photos.",
      "We're already on the island: the night dock wash-downs at Fisherman's Wharf and the stamped-concrete patio at Grumbles Seafood are Xtreme Kleen jobs, both worked overnight so neither business lost an hour of trade. That's the standing offer for Port A — the wash happens while the island sleeps.",
    ],
    highlights: [
      "Working island clients: Fisherman's Wharf and Grumbles Seafood",
      "Overnight scheduling — doors never close for the wash",
      "Vacation-rental turnarounds between seasons",
      "Salt-side decks, docks, and storefront concrete",
    ],
    featuredServices: ["pressure-washing", "soft-washing", "window-cleaning", "glass-mirror-cleaning"],
    faqs: [
      {
        q: "Can you wash our restaurant without closing us down?",
        a: "That's how we already do it in Port Aransas — the Fisherman's Wharf docks and the Grumbles patio were both washed at night, finished before the morning crowd. We're open 24 hours, so overnight is a scheduling choice, not a special favor.",
      },
      {
        q: "Do you handle vacation rentals?",
        a: "Yes — exterior soft wash, deck and walkway cleaning, and window cleaning between guest seasons. A rental that photographs clean books better, and the island's salt air undoes the look faster than owners expect.",
      },
      {
        q: "Is the ferry a problem for scheduling?",
        a: "No — we plan around ferry traffic or run SH-361 through the island's back door, and night work misses the lines entirely.",
      },
    ],
  },
  // -------------------------------------------------------------------------
  // Eagle Ford oil-patch towns. The angle everywhere: hot-water degreasing,
  // OSHA-aligned safety program, 24-hour scheduling, mobilized yard work.
  // Residential in the far towns gets bundled into route days — said honestly.
  // -------------------------------------------------------------------------
  {
    slug: "beeville-tx",
    city: "Beeville",
    cityState: "Beeville, TX",
    metaTitle: "Pressure Washing Beeville, TX | Oilfield & Commercial | Xtreme Kleen",
    metaDescription:
      "Pressure washing in Beeville, TX — oilfield equipment and yards, county-seat storefronts, and house washing, under an OSHA-aligned safety program. Call or text 361-947-7811.",
    h1: "Oilfield & Commercial Pressure Washing in Beeville, TX",
    heroPhoto: fleetPhoto,
    answer:
      "Xtreme Kleen provides pressure washing in Beeville, Texas — oilfield equipment and yard washing on the Eagle Ford's eastern flank, plus storefronts, flatwork, and house washes around the county seat. Hot-water degreasing, an OSHA-aligned safety program, open 24 hours. Call or text 361-947-7811.",
    localAngle: [
      "Beeville sits where the Coastal Bend meets the oil patch — a county seat with courthouse-square storefronts on one side and equipment yards feeding the Eagle Ford on the other. Both kinds of dirty are our work: gum-and-grime downtown concrete, and haul trucks and yard iron carrying half the lease road home on them.",
      "It's a straight run up US-181 from our Portland base, close enough that Beeville gets the same free on-site quotes as the home turf. Yard washes and fleets are the anchor jobs; house washes and storefront concrete ride along on the same trips.",
    ],
    highlights: [
      "Eagle Ford equipment yards and DOT fleets",
      "Hot-water degreasing for oil, grease, and lease-road mud",
      "OSHA-aligned safety program on every industrial job",
      "County-seat storefronts and residential too",
    ],
    featuredServices: ["oilfield-cleaning", "industrial-cleaning", "pressure-washing", "soft-washing"],
    faqs: [
      {
        q: "Do you wash oilfield equipment in Beeville?",
        a: "Yes — frac tanks, yard iron, haul trucks, and heavy equipment, with degreaser and hot water rather than a cold-water polish. Multi-unit yard washes are the jobs we build routes around.",
      },
      {
        q: "Will you take residential jobs in Beeville?",
        a: "Yes. House washes, driveways, and roofs get bundled onto Beeville route days, so the drive never shows up in your price.",
      },
      {
        q: "Can you work our yard overnight or on a weekend?",
        a: "We're open 24 hours — equipment gets washed when it's parked, not when it's earning. Nights and weekends are normal scheduling for us.",
      },
    ],
  },
  {
    slug: "kenedy-tx",
    city: "Kenedy",
    cityState: "Kenedy, TX",
    metaTitle: "Oilfield Pressure Washing Kenedy, TX | Eagle Ford Equipment | Xtreme Kleen",
    metaDescription:
      "Oilfield pressure washing in Kenedy, TX — the heart of the Eagle Ford. Frac tanks, yard iron, fleets, and man-camp exteriors, hot-water degreased under a real safety program. 361-947-7811.",
    h1: "Oilfield Pressure Washing in Kenedy, TX",
    heroPhoto: ppePhoto,
    answer:
      "Xtreme Kleen washes oilfield equipment in Kenedy, Texas — the middle of the Eagle Ford. Frac tanks, rig equipment, haul trucks, and yard iron get hot-water degreasing under an OSHA-aligned safety program (JSA, lockout/tagout, stop-work authority, full PPE). Open 24 hours. Call or text 361-947-7811.",
    localAngle: [
      "Kenedy and Karnes County sit on top of the most drilled stretch of the Eagle Ford, and the equipment shows it: drilling mud, crude, and caliche dust baked onto everything that works a lease. That buildup is a chemistry job — degreaser, dwell time, hot water — not something a rented cold-water machine touches.",
      "We mobilize into Karnes County for yard washes, fleet work, and equipment turnarounds, and we bring the plant-work safety program with us: documented JSA before work starts, lockout/tagout, stop-work authority, full PPE. Man camps, crew quarters, and hotel exteriors along Business 181 are the other side of the same trip.",
    ],
    highlights: [
      "Heart-of-the-Eagle-Ford equipment washing",
      "Hot water + degreaser for drilling mud and crude",
      "JSA, LOTO, stop-work, PPE — documented on request",
      "Man camps, crew quarters, and hotels too",
    ],
    featuredServices: ["oilfield-cleaning", "industrial-cleaning", "pressure-washing", "soft-washing"],
    faqs: [
      {
        q: "What oilfield equipment do you wash in Kenedy?",
        a: "Frac tanks and tank batteries, rig and wellsite equipment exteriors, dozers and yard iron, haul trucks and belly dumps — plus the yard concrete they park on.",
      },
      {
        q: "Our site requires safety documentation. Can you provide it?",
        a: "Yes — we run an OSHA-aligned program on industrial work (JSA, lockout/tagout, stop-work authority, PPE) and can provide documentation ahead of mobilization.",
      },
      {
        q: "How do you price a yard in Kenedy?",
        a: "Send photos or a unit count and we'll quote it. Multi-unit and recurring washes price better per unit than a single machine, and we schedule around your dispatch, not against it.",
      },
    ],
  },
  {
    slug: "karnes-city-tx",
    city: "Karnes City",
    cityState: "Karnes City, TX",
    metaTitle: "Oilfield Pressure Washing Karnes City, TX | Equipment & Yards | Xtreme Kleen",
    metaDescription:
      "Oilfield equipment and yard washing in Karnes City, TX — hot-water degreasing for Eagle Ford iron, fleets, and facilities under an OSHA-aligned safety program. Call or text 361-947-7811.",
    h1: "Oilfield & Equipment Washing in Karnes City, TX",
    heroPhoto: crewPhoto,
    answer:
      "Xtreme Kleen provides oilfield and heavy equipment washing in Karnes City, Texas — county seat of the Eagle Ford's most active county. Hot-water degreasing for yard iron, fleets, and facility exteriors, under an OSHA-aligned safety program. Open 24 hours. Call or text 361-947-7811.",
    localAngle: [
      "Karnes City wears the Eagle Ford the same way Kenedy does — lease-road caliche on every truck, grease on every machine, and facility exteriors that gray out under dust the county never stops making. The courthouse square gets the other kind of dirty: gum, grime, and storefront concrete that hasn't seen a surface cleaner in years.",
      "We treat Karnes City and Kenedy as one route: yard washes and fleet work anchor the trip, and storefronts, offices, and house washes fill it out. Same hot-water rigs, same safety program, same 24-hour scheduling.",
    ],
    highlights: [
      "One route with Kenedy — the Eagle Ford core",
      "Yard iron, fleets, and facility exteriors",
      "Hot-water degreasing, not a cold-water polish",
      "Storefronts and residential fill out the trip",
    ],
    featuredServices: ["oilfield-cleaning", "industrial-cleaning", "pressure-washing", "soft-washing"],
    faqs: [
      {
        q: "Do you serve both Karnes City and Kenedy?",
        a: "Yes — they're one trip for us. If your yard is anywhere in Karnes County, we'll route it together with the rest of the county's work.",
      },
      {
        q: "Can you wash our office or shop building, not just equipment?",
        a: "Yes — building exteriors, shop floors, wash bays, and the yard concrete all clean up on the same mobilization.",
      },
      {
        q: "How far in advance do we need to book?",
        a: "Call or text 361-947-7811 — yard work usually schedules within days, and we're open 24 hours, so overnight slots are often the fastest.",
      },
    ],
  },
  {
    slug: "three-rivers-tx",
    city: "Three Rivers",
    cityState: "Three Rivers, TX",
    metaTitle: "Industrial Pressure Washing Three Rivers, TX | Refinery Corridor | Xtreme Kleen",
    metaDescription:
      "Industrial and oilfield pressure washing in Three Rivers, TX — refinery-corridor facilities, Eagle Ford equipment, and fleets, washed under an OSHA-aligned safety program. 361-947-7811.",
    h1: "Industrial & Oilfield Washing in Three Rivers, TX",
    heroPhoto: ppePhoto,
    answer:
      "Xtreme Kleen provides industrial and oilfield pressure washing in Three Rivers, Texas — a refinery town on the Eagle Ford's truck routes. Facility exteriors, heavy equipment, and fleets get hot-water degreasing under an OSHA-aligned safety program: JSA, lockout/tagout, stop-work authority, full PPE. Call or text 361-947-7811.",
    localAngle: [
      "Three Rivers is a refinery town sitting on the Eagle Ford's busiest truck corridor, where US-281 meets TX-72. That means two kinds of work: plant-adjacent facilities that expect a contractor to show up with a real safety program, and the haul trucks and equipment yards that feed the patch.",
      "Plant-style work is where we come from — fin fans, structural steel, tank exteriors — so the JSA-first, full-PPE routine isn't new clothes for us. Equipment washdowns, facility exteriors, and fleet work in Three Rivers run under the same program, on 24-hour scheduling.",
    ],
    highlights: [
      "Refinery-corridor facility washing",
      "US-281 / TX-72 fleet and equipment work",
      "Plant-grade safety program, documented",
      "24-hour scheduling around operations",
    ],
    featuredServices: ["oilfield-cleaning", "industrial-cleaning", "pressure-washing", "soft-washing"],
    faqs: [
      {
        q: "Can you work near or around plant facilities?",
        a: "Yes — industrial exteriors are core work for us, under an OSHA-aligned program: documented JSA, lockout/tagout where equipment demands it, stop-work authority, and full PPE.",
      },
      {
        q: "Do you wash trucks that run the Eagle Ford routes?",
        a: "Yes — haul trucks, belly dumps, and DOT fleets, degreased with hot water so the paint and the DOT inspection both come out better.",
      },
      {
        q: "Do you take house-wash jobs in Three Rivers?",
        a: "Yes — residential jobs get bundled onto Three Rivers route days alongside the commercial work, which keeps the drive out of your price.",
      },
    ],
  },
  {
    slug: "george-west-tx",
    city: "George West",
    cityState: "George West, TX",
    metaTitle: "Pressure Washing George West, TX | Oilfield & Ranch Country | Xtreme Kleen",
    metaDescription:
      "Pressure washing in George West, TX — oilfield equipment, ranch buildings, and county-seat storefronts at the US-59/US-281 crossroads. Hot-water rigs, free quotes: 361-947-7811.",
    h1: "Pressure Washing in George West, TX",
    heroPhoto: pressurePhoto,
    answer:
      "Xtreme Kleen provides pressure washing in George West, Texas — oilfield equipment and fleets moving through the US-59/US-281 crossroads, plus ranch buildings, metal roofs, and the Live Oak county seat's storefronts and homes. Hot-water degreasing, free quotes. Call or text 361-947-7811.",
    localAngle: [
      "George West sits at the crossroads the Eagle Ford drives through — US-59 meeting US-281 — with working ranches on every side of town. The mix on our schedule looks like the town: equipment and fleet washdowns from the patch, then barns, metal buildings, and ranch-house exteriors wearing years of caliche dust and humidity film.",
      "Painted metal is half the work out here, and it's a soft-wash job — the wrong pressure strips a barn's paint faster than the weather ever would. We match the method to the surface: chemistry on the metal, surface cleaners on the concrete, hot water on the grease.",
    ],
    highlights: [
      "US-59/281 crossroads fleet and equipment work",
      "Barns, metal buildings, and ranch exteriors",
      "Soft wash for painted metal — no stripped paint",
      "County-seat storefronts and homes",
    ],
    featuredServices: ["oilfield-cleaning", "pressure-washing", "soft-washing", "roof-cleaning"],
    faqs: [
      {
        q: "Can you clean barns and ranch metal buildings?",
        a: "Yes — painted metal gets a soft wash so the finish stays put, and heavy equipment or concrete around the place gets pressure where it belongs. One visit can usually cover the headquarters.",
      },
      {
        q: "Do you wash oilfield equipment out of George West?",
        a: "Yes — yard iron, haul trucks, and equipment staged along the corridor. Hot water and degreaser, scheduled around your dispatch.",
      },
      {
        q: "Is George West too far for a free quote?",
        a: "No — photo quotes are instant, and in-person looks get bundled onto route days through Live Oak County. Call or text 361-947-7811.",
      },
    ],
  },
  {
    slug: "pleasanton-tx",
    city: "Pleasanton",
    cityState: "Pleasanton, TX",
    metaTitle: "Pressure Washing Pleasanton, TX | Oilfield & Commercial | Xtreme Kleen",
    metaDescription:
      "Pressure washing in Pleasanton, TX — Eagle Ford equipment yards, commercial storefronts, and house washing where the patch meets San Antonio's edge. Call or text 361-947-7811.",
    h1: "Oilfield & Commercial Pressure Washing in Pleasanton, TX",
    heroPhoto: fleetPhoto,
    answer:
      "Xtreme Kleen provides pressure washing in Pleasanton, Texas — oilfield equipment and yard washing on the Eagle Ford's western flank, plus commercial storefronts and house washes. Hot-water degreasing under an OSHA-aligned safety program, open 24 hours. Call or text 361-947-7811.",
    localAngle: [
      "Pleasanton calls itself the birthplace of the cowboy, but its working economy rides the Eagle Ford — service yards and fleets staging along TX-97 and I-37, hauling the patch's dust and grease back to town every night. That iron is hot-water work: degreaser, dwell, then heat, or the oil just moves around.",
      "The town side of Pleasanton looks more like our Coastal Bend work — storefront concrete, commercial exteriors, and neighborhoods where humidity films up siding the same way it does closer to the coast. Both halves ride the same mobilization: yards anchor the trip, town work fills it.",
    ],
    highlights: [
      "Eagle Ford western-flank yards and fleets",
      "TX-97 / I-37 corridor equipment washing",
      "Commercial storefronts and flatwork",
      "House washes bundled onto route days",
    ],
    featuredServices: ["oilfield-cleaning", "industrial-cleaning", "pressure-washing", "soft-washing"],
    faqs: [
      {
        q: "Do you really cover Pleasanton from Portland?",
        a: "Yes — for yard, fleet, and multi-unit commercial work we mobilize; that's the job we're built for and the drive is priced into nothing. One-off residential jobs get bundled onto Pleasanton route days.",
      },
      {
        q: "What's the anchor job you look for in Pleasanton?",
        a: "Equipment yards and fleets — recurring washes especially. Once a route day exists, storefronts, offices, and house washes in town get the same-day treatment.",
      },
      {
        q: "Can you wash at night so the yard keeps moving?",
        a: "Yes — we're open 24 hours. Overnight yard washes are normal for us, not an upcharge conversation.",
      },
    ],
  },
  {
    slug: "cotulla-tx",
    city: "Cotulla",
    cityState: "Cotulla, TX",
    metaTitle: "Oilfield Pressure Washing Cotulla, TX | La Salle County | Xtreme Kleen",
    metaDescription:
      "Oilfield pressure washing in Cotulla, TX — La Salle County frac tanks, yard iron, fleets, and man-camp exteriors on the Eagle Ford's western core. Mobilized crews: 361-947-7811.",
    h1: "Oilfield Pressure Washing in Cotulla, TX",
    heroPhoto: ppePhoto,
    answer:
      "Xtreme Kleen mobilizes for oilfield washing in Cotulla, Texas — the Eagle Ford's western core. Frac tanks, wellsite equipment, yard iron, fleets, and man-camp exteriors get hot-water degreasing under an OSHA-aligned safety program. Multi-unit and recurring yard work is what makes the trip. Call or text 361-947-7811.",
    localAngle: [
      "Cotulla is deep Eagle Ford — La Salle County lease roads, I-35 truck traffic, and equipment that works harder and dirtier than anywhere else we go. Nobody sensibly drives to Cotulla to wash one machine, so we're straight about the model: yards, fleets, and multi-unit washes make the mobilization, and recurring schedules make it cheap per unit.",
      "The same trip covers the town the boom built — man camps, crew quarters, hotels, and commercial exteriors along I-35 and TX-97 that gray out under caliche dust. Everything runs under the same safety program we use for plant work: JSA first, full PPE, stop-work authority for everyone on site.",
    ],
    highlights: [
      "Eagle Ford western core — mobilized yard work",
      "Frac tanks, wellsite iron, and fleet washing",
      "Man camps, hotels, and I-35 commercial",
      "Recurring schedules drop the per-unit price",
    ],
    featuredServices: ["oilfield-cleaning", "industrial-cleaning", "pressure-washing", "soft-washing"],
    faqs: [
      {
        q: "What makes a Cotulla trip worth it?",
        a: "Volume — a yard, a fleet, or several machines at once. Send photos and a unit count to 361-947-7811 and we'll quote the mobilization honestly; recurring washes price best.",
      },
      {
        q: "Can you service man camps and crew housing?",
        a: "Yes — building exteriors, walkways, and concrete. Housing that looks maintained keeps operators and workers happier, and it's the easy add-on once we're on the ground in La Salle County.",
      },
      {
        q: "Do you carry your own water and equipment?",
        a: "We run self-contained hot-water rigs with tanks and reels — remote yards without a convenient spigot are a normal day, not a problem.",
      },
    ],
  },
  {
    slug: "alice-tx",
    city: "Alice",
    cityState: "Alice, TX",
    metaTitle: "Pressure Washing Alice, TX | Oilfield Service Capital | Xtreme Kleen",
    metaDescription:
      "Pressure washing in Alice, TX — the hub city of South Texas oilfield services. Equipment yards, fleets, storefronts, and house washing with hot-water rigs. Call or text 361-947-7811.",
    h1: "Oilfield & Commercial Pressure Washing in Alice, TX",
    heroPhoto: crewPhoto,
    answer:
      "Xtreme Kleen provides pressure washing in Alice, Texas — the historic hub of South Texas oilfield services. Equipment yards, fleets, and shop facilities get hot-water degreasing; storefronts, offices, and homes get the same crew on the same trip. Under an hour from our Portland base. Call or text 361-947-7811.",
    localAngle: [
      "Alice has been the oilfield's service capital since before the Eagle Ford had a name — the yards along US-281 and TX-44 have been staging iron for generations. That's our anchor work in town: equipment, fleets, shop floors, and the yard concrete under all of it, degreased with hot water instead of polished with cold.",
      "It's under an hour from our Portland base, so Alice isn't a mobilization story — it's regular coverage. Storefronts along Main Street, office exteriors, and house washes get quoted free and in person, same as the Coastal Bend towns.",
    ],
    highlights: [
      "Historic oilfield-services yards on US-281 / TX-44",
      "Under an hour from home base — regular coverage",
      "Hot-water degreasing for equipment and shops",
      "Free in-person quotes, residential included",
    ],
    featuredServices: ["oilfield-cleaning", "industrial-cleaning", "pressure-washing", "soft-washing"],
    faqs: [
      {
        q: "Is Alice inside your normal service area?",
        a: "Yes — under an hour from our Portland base, so it gets regular coverage and free in-person quotes, not mobilization pricing.",
      },
      {
        q: "What do you wash for oilfield service companies?",
        a: "Yard iron, haul trucks, frac tanks, shop exteriors and floors, wash bays, and the yard concrete — with degreaser and hot water matched to the buildup.",
      },
      {
        q: "Do you do house washes in Alice?",
        a: "Yes — full soft washes, driveways, and roofs, same as our Coastal Bend residential work. Call or text 361-947-7811 for a free quote.",
      },
    ],
  },
  {
    slug: "freer-tx",
    city: "Freer",
    cityState: "Freer, TX",
    metaTitle: "Oilfield Pressure Washing Freer, TX | Duval County | Xtreme Kleen",
    metaDescription:
      "Oilfield pressure washing in Freer, TX — Duval County equipment, fleets, and yard washing with self-contained hot-water rigs. Scheduled routes, honest pricing: 361-947-7811.",
    h1: "Oilfield Pressure Washing in Freer, TX",
    heroPhoto: fleetPhoto,
    answer:
      "Xtreme Kleen washes oilfield equipment in Freer, Texas — Duval County iron, fleets, and yards on TX-44 west of Alice. Self-contained hot-water rigs handle remote yards; multi-unit and recurring washes make the route. Under an OSHA-aligned safety program. Call or text 361-947-7811.",
    localAngle: [
      "Freer is old oil country — Duval County leases that never stopped working, plus Eagle Ford traffic passing through on TX-44. Equipment out here runs remote and comes back caked: drilling mud, grease, and caliche that only chemistry and hot water actually remove.",
      "We run Freer as an extension of the Alice route — self-contained rigs with our own water, so a yard without a working spigot is a normal stop. Multi-unit washes and recurring schedules are what make the western leg run; single machines get folded into the next route day.",
    ],
    highlights: [
      "Duval County yards and lease equipment",
      "Self-contained rigs — we bring the water",
      "Routed with Alice for honest pricing",
      "Hot-water degreasing, OSHA-aligned program",
    ],
    featuredServices: ["oilfield-cleaning", "industrial-cleaning", "pressure-washing", "soft-washing"],
    faqs: [
      {
        q: "Our yard has no water hookup. Is that a problem?",
        a: "No — our rigs carry their own tanks and hot-water units. Remote and dry-site yards are normal work for us.",
      },
      {
        q: "When do you run the Freer route?",
        a: "Freer rides the western leg with Alice. Call or text 361-947-7811 with photos or a unit count and we'll slot you into the next route day — or schedule a dedicated trip for yard-sized work.",
      },
      {
        q: "Do you wash anything besides equipment out here?",
        a: "Yes — shop and office exteriors, storefront concrete, and house washes, bundled onto the same trip as the yard work.",
      },
    ],
  },
];

export const getLocation = (slug: string) =>
  locationsContent.find((l) => l.slug === slug);
