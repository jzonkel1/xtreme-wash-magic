// ---------------------------------------------------------------------------
// Xtreme Kleen — single source of truth for all site content.
// Edit this file to change copy, services, reviews, reels, and service areas.
// ---------------------------------------------------------------------------
import houseWashPhoto from "@/assets/action2.webp"; // condo soft wash at sunset
import buildingWashPhoto from "@/assets/action3.webp"; // boom-lift building wash
import fleetPhoto from "@/assets/truck-wash.webp"; // Dura-Haul trailer washdown
import drivewayPhoto from "@/assets/concrete-flatwork.webp"; // clean/dirty split, commercial flatwork
import roofPhoto from "@/assets/roof-tile.webp"; // clean tile roof
import glassPanelsPhoto from "@/assets/glass-panels.webp"; // mirror-clean glass panels
import windowsPhoto from "@/assets/windows-arched.webp"; // real windows, not a house wash
import pressureSprayPhoto from "@/assets/pressure-spray.webp"; // wand in hand, visible spray

// Before/after pairs. before3/7 + after3/7 are the originals; the `ba/` set was
// recovered from the old xtremekleen.biz gallery (2026-07-12).
import before3 from "@/assets/before3.webp";
import after3 from "@/assets/after3.webp";
import before7 from "@/assets/before7.webp";
import after7 from "@/assets/after7.webp";
import northshoreBefore from "@/assets/ba/northshore-sign-closeup-before.webp";
import northshoreAfter from "@/assets/ba/northshore-sign-closeup-after.webp";
import ranchBefore from "@/assets/ba/stone-ranch-house-before.webp";
import ranchAfter from "@/assets/ba/stone-ranch-house-after.webp";
import industrialBefore from "@/assets/ba/industrial-wall-1993-sign-before.webp";
import industrialAfter from "@/assets/ba/industrial-wall-1993-sign-after.webp";
import churchBefore from "@/assets/ba/church-electrical-wall-before.webp";
import churchAfter from "@/assets/ba/church-electrical-wall-after.webp";
import trailerBefore from "@/assets/ba/dump-trailer-interior-before.webp";
import trailerAfter from "@/assets/ba/dump-trailer-interior-after.webp";
import blueTruckBefore from "@/assets/ba/blue-truck-before.webp";
import blueTruckAfter from "@/assets/ba/blue-truck-after.webp";
// The red-truck shots came off the old site as ONE stacked image (dirty chassis
// above, washed chassis below); split back into a real pair.
import redTruckBefore from "@/assets/ba/red-truck-before.webp";
import redTruckAfter from "@/assets/ba/red-truck-after.webp";
// Second wave, pulled from the same gallery (2026-07-13).
import brickGableBefore from "@/assets/ba/brick-gable-before.webp";
import brickGableAfter from "@/assets/ba/brick-gable-after.webp";
import brickRanchBefore from "@/assets/ba/brick-ranch-before.webp";
import brickRanchAfter from "@/assets/ba/brick-ranch-after.webp";
import condoBefore from "@/assets/ba/condo-complex-before.webp";
import condoAfter from "@/assets/ba/condo-complex-after.webp";
import beachHouseBefore from "@/assets/ba/beach-house-before.webp";
import beachHouseAfter from "@/assets/ba/beach-house-after.webp";
import stuccoBefore from "@/assets/ba/stucco-wall-before.webp";
import stuccoAfter from "@/assets/ba/stucco-wall-after.webp";

// Commercial job photos — Xtreme Kleen's own rig on the client's site — plus
// each client's own logo, pulled from their site.
//
// These are REVERSED (knockout) marks: on a dark theme a dark-ink logo either
// disappears or has to be parked on a little white sticker, and the sticker
// looks cheap. So the neutral ink in each mark is recoloured to warm white while
// its BRAND colour is left untouched — Grumbles keeps its red G, United Rentals
// keeps its blue, and Doc's is left completely alone because it's a colour badge
// that already reads on dark. That's the standard reversed-logo treatment, not a
// redrawing of anyone's mark.
import accessFordPhoto from "@/assets/access-ford.webp";
import docsPhoto from "@/assets/commercial/docs-seafood.webp";
import grumblesPhoto from "@/assets/commercial/grumbles-seafood.webp";
import docsLogo from "@/assets/commercial/docs-logo.webp";
import grumblesLogo from "@/assets/commercial/grumbles-logo.png";
import unitedRentalsLogo from "@/assets/commercial/united-rentals-logo.png";
// Their official mark ships as a WHITE svg, which is exactly what we want now
// that the logos sit straight on the dark card. (It had been recoloured dark to
// survive the old white chip; that chip is gone.)
import fishermansWharfLogo from "@/assets/commercial/fishermans-wharf-logo.svg";

// Public-folder assets must respect Vite's base path (GitHub Pages serves the
// site from /xtreme-wash-magic/, not the domain root).
const pub = (p: string) => `${import.meta.env.BASE_URL}${p}`;

/**
 * Real before/after pairs — SAME surface, same angle, genuinely photographed
 * before and after the wash. Only add a pair here if it truly is one; a fake
 * pairing is the one lie a washing company can't afford.
 *
 * `home: true` marks the three that run on the homepage (Jeffrey's pick).
 * /our-work shows every pair.
 */
export const beforeAfters = [
  {
    // CORRECTED 2026-07-13. This pair used to be before3 (the FRONT elevation,
    // with a ladder against it) paired with after3 (the GABLE END). Same house,
    // but two different walls — which is not a before/after, it's a bait and
    // switch. brick-gable-before is the true before of that gable: same wall,
    // same angle, streaked with algae.
    before: brickGableBefore,
    after: brickGableAfter,
    label: "Brick House — Soft Wash",
    sub: "Years of algae streaking off the gable end — same wall, same angle, no pressure on the mortar.",
    home: true,
  },
  {
    before: ranchBefore,
    after: ranchAfter,
    label: "Stone Ranch House — Soft Wash",
    sub: "Whole exterior soft washed, roof to stone, in a single visit.",
    home: true,
  },
  {
    before: industrialBefore,
    after: industrialAfter,
    label: "Industrial Structure — Hot Water",
    sub: "Heavy rust staining and grime cut off a plant structure.",
    home: true,
  },
  {
    before: northshoreBefore,
    after: northshoreAfter,
    label: "Northshore Country Club Sign",
    sub: "Faded, algae-stained monument sign brought back to gold lettering.",
  },
  {
    before: blueTruckBefore,
    after: blueTruckAfter,
    label: "Kenworth Sleeper — Fleet Wash",
    sub: "Road film and dust off the paint — the blue comes back, not just cleaner dirt.",
  },
  {
    before: redTruckBefore,
    after: redTruckAfter,
    label: "Day Cab Chassis — Fleet Wash",
    sub: "Frame, tanks, and wheels degreased down to bright metal.",
  },
  {
    before: before7,
    after: after7,
    label: "Driveway — Pressure Wash",
    sub: "Oil-stained concrete taken back to an even, bare surface.",
    home: true,
  },
  {
    before: churchBefore,
    after: churchAfter,
    label: "Church Wall — Soft Wash",
    sub: "Years of dirt and cobwebs off the masonry, panels left untouched.",
  },
  {
    before: trailerBefore,
    after: trailerAfter,
    label: "Dump Trailer — Fleet Wash",
    sub: "Caked-in debris washed out of a working dump trailer, inside and out.",
  },
  {
    before: brickRanchBefore,
    after: brickRanchAfter,
    label: "Brick Ranch — House & Patio",
    sub: "Brick brightened and the patio slab taken back to clean concrete in one visit.",
  },
  {
    before: condoBefore,
    after: condoAfter,
    label: "Condo Complex — Soft Wash",
    sub: "Green-stained stucco across a multi-unit building, washed back to cream.",
  },
  {
    before: beachHouseBefore,
    after: beachHouseAfter,
    label: "Coastal Beach House — Soft Wash",
    sub: "Algae had gone the siding green-yellow. Soft washed back to the color it was painted.",
  },
  {
    before: stuccoBefore,
    after: stuccoAfter,
    label: "Stucco Wall — Stain Removal",
    sub: "Rust bleed and dirt streaks pulled off stucco without etching the finish.",
  },
];

export const business = {
  brand: "Xtreme Kleen",
  legalName: "Xtreme Kleen Wash & Rental LLC",
  owner: "Eric Kuhn",
  tagline: "Wash Away the Past",
  phone: "361-947-7811",
  phoneHref: "tel:3619477811",
  email: "Xtreme.Kleen2023@gmail.com",
  hours: "Open 24 Hours",
  primaryCity: "Portland, TX",
  region: "The Coastal Bend",
  googleProfile: "https://share.google/7q83LZUVLtkeXmbaS",
  // Deep link that opens the Google "write a review" box directly, instead of
  // dropping people on the profile and making them hunt for the button.
  googleReviewUrl: "https://g.page/r/CbVqlQ5JGcJYEBM/review",
  rating: 5.0,
  reviewCount: 5,

  // Hero background video (HydroChem-style). Set to "" to fall back to the
  // cinematic still (hero-spray) with a slow Ken Burns drift.
  // Current clip: royalty-free backlit pressure-spray (Pexels license — free for
  // commercial use, no attribution). Swap for Eric's own HORIZONTAL footage
  // whenever he films some; drop the mp4 in public/ and update this path.
  heroVideo: pub("hero.mp4"),
};

// Online booking. Paste Eric's GoHighLevel calendar embed URL into `calendarUrl`
// and the booking section swaps its two-CTA fallback for the live calendar —
// no other change needed. Leave it "" until the calendar exists; an empty
// iframe is worse than no iframe.
// GHL: Calendars → the calendar → Share/Embed → copy the widget URL, which
// looks like https://api.leadconnectorhq.com/widget/booking/XXXXXXXXXXXX
export const booking = {
  // "Free On-Site Estimate", 30 min. The widget's appearance (warm-white
  // background, red primary, "Book Estimate" button) is saved ON the calendar in
  // GHL, so the bare widget URL inherits it — do NOT append ?primaryColor=... etc.
  // here, or the embed and the GHL settings can drift apart silently.
  calendarUrl: "https://api.leadconnectorhq.com/widget/booking/CPL5vK0MHuKagAaj221r",
  calendarId: "CPL5vK0MHuKagAaj221r",
  // GHL ships this alongside the iframe. It installs ONE global postMessage
  // listener that resizes the iframe to its real content height — without it the
  // calendar is stuck at whatever height we hard-code and either clips the time
  // slots or leaves a slab of dead space under them.
  embedScript: "https://link.msgsndr.com/js/form_embed.js",
};

// Out-of-area work. The Coastal Bend is home turf, but the crew travels for the
// right job — real jobs have run as far as Houston, Dallas, and Austin. Quoted
// by phone, not by the website form, because travel/lodging changes the number.
export const travel = {
  cities: ["Houston", "Dallas", "Austin"],
  headline: "Outside the Coastal Bend? We Travel.",
  blurb:
    "We've taken jobs as far out as Houston, Dallas, and Austin. If the job's big enough and the price is right, we'll go pretty much anywhere in Texas. Out-of-area work gets quoted over the phone — give us a call and we'll talk it through.",
  short: "We travel — we've run jobs as far as Houston, Dallas, and Austin. Outside the Coastal Bend? Just call.",
};

/**
 * Commercial clients — real businesses Xtreme Kleen has worked for.
 *
 * `photo` only where we actually have a job photo from that site; the rest are
 * listed by name only. Do NOT pad this with stock imagery or a stand-in photo
 * of a different property — an unverifiable "job photo" is worse than a name.
 * Ask Eric for photos (and a confirmed city) for the name-only entries.
 */
export type CommercialJob = {
  name: string;
  type: string;
  location: string;
  blurb: string;
  photo: string | null;
  logo: string | null;
  /** Show this one in the homepage preview (see CommercialWork.tsx). */
  preview?: boolean;
};

export const commercialJobs: CommercialJob[] = [
  {
    name: "Doc's Seafood & Steaks",
    type: "Restaurant",
    location: "Corpus Christi, TX",
    blurb:
      "Surface-cleaned the flatwork and exterior at the waterfront restaurant under the JFK bridge — a high-traffic parking area taken back to clean concrete.",
    photo: docsPhoto,
    logo: docsLogo,
    preview: true,
  },
  {
    name: "Grumbles Seafood Co.",
    type: "Restaurant",
    location: "Port Aransas, TX",
    blurb:
      "Stamped-concrete patio and building exterior washed at the Tarpon Street seafood house — worked at night, so the doors never had to close.",
    photo: grumblesPhoto,
    logo: grumblesLogo,
  },
  {
    name: "Access Ford",
    type: "Auto dealership",
    location: "Corpus Christi, TX",
    blurb:
      "Storefront and showroom glass at the Ford dealership off the I-69 access road — the glass a customer walks past on the way to a $70,000 truck, so a streak is not an option.",
    photo: accessFordPhoto,
    preview: true,
    // No logo chip: the dealership's own signage is right there in the photo,
    // and their site blocks scrapers. A chip would be redundant, and the Ford
    // corporate oval is NOT this client's mark — Ford Motor Co. isn't the client.
    logo: null,
  },
  // TODO(Eric): these three are confirmed clients but we don't have job photos
  // or a description of the actual scope from him yet. They render as name +
  // logo only. Do NOT write a blurb describing work we're guessing at — get the
  // real scope (and a photo) from Eric, then promote them to full rows above.
  {
    name: "United Rentals",
    type: "Equipment rental",
    location: "",
    blurb: "",
    photo: null,
    logo: unitedRentalsLogo,
  },
  {
    name: "Fisherman's Wharf",
    type: "Marina & charters",
    location: "Port Aransas, TX",
    blurb: "",
    photo: null,
    logo: fishermansWharfLogo,
  },
  {
    name: "Coast Materials Inc.",
    type: "Industrial / materials",
    location: "",
    blurb: "",
    photo: null,
    logo: null,
  },
];

// Portland is home base; these are the surrounding Coastal Bend towns served.
export const serviceAreas = [
  "Portland",
  "Gregory",
  "Ingleside",
  "Aransas Pass",
  "Taft",
  "Odem",
  "Sinton",
  "Rockport",
  "Corpus Christi",
  "Coastal Bend",
];

// The "cost of waiting" cards — scan top-to-bottom: icon → problem → cost.
// Each `icon` maps to a hand-drawn SVG in src/components/icons/HandDrawn.tsx
export const painPoints = [
  {
    icon: "weekend",
    title: "Doing It Yourself",
    cost: "A weekend gone — and it's still streaky.",
  },
  {
    icon: "mildew",
    title: "Letting It Sit",
    cost: "Stains set in. Your roof ages years early.",
  },
  {
    icon: "damage",
    title: "A Cheap Blast Job",
    cost: "Etched concrete. Stripped paint. Repair bills.",
  },
];

// The three payoffs of doing it right (circular badge row).
export const benefits = [
  {
    icon: "clock",
    title: "Done in Hours, Not Weekends",
    desc: "Professional equipment and the right chemistry finish in a fraction of the time.",
  },
  {
    icon: "shield",
    title: "No High Pressure, No Damage",
    desc: "True soft wash. The chemistry does the work, so your surfaces never take a beating.",
  },
  {
    icon: "shine",
    title: "Brought Back to Life",
    desc: "Clean. Safe. Like new. The finish that makes the whole property look newer.",
  },
];

// Services — sourced from the Google Business Profile, plus the industrial work
// the crew is known for (construction cleanups, fleet & equipment).
// Every `photo` is a real Xtreme Kleen job shot — no stock.
// `slug` links each card to its detail page (content in src/content/services.ts).
export const services = [
  {
    slug: "pressure-washing",
    icon: "pressure",
    photo: pressureSprayPhoto,
    title: "Power & Pressure Washing",
    desc: "Driveways, sidewalks, concrete, patios, and commercial flatwork brought back to bare, clean surface.",
  },
  {
    slug: "soft-washing",
    icon: "softwash",
    photo: buildingWashPhoto,
    title: "Soft Wash Cleaning",
    desc: "Low-pressure, chemistry-first cleaning for siding, stucco, and delicate surfaces. No damage, ever.",
  },
  {
    slug: "roof-cleaning",
    icon: "roof",
    photo: roofPhoto,
    title: "Roof Cleaning",
    desc: "Black streaks, algae, and salt-air buildup removed safely — without walking a high-pressure wand across your shingles.",
  },
  {
    slug: "window-cleaning",
    icon: "window",
    photo: windowsPhoto,
    title: "Interior & Exterior Window Cleaning",
    // The two glass services USED to read almost identically. The real axis
    // between them is WHO BUYS and HOW OFTEN: this one is the whole building's
    // windows, done once and done properly...
    desc: "Every window in the building — inside and out, screens, tracks, and sills included, up to multi-story with lift access.",
  },
  {
    slug: "glass-mirror-cleaning",
    icon: "glass",
    photo: glassPanelsPhoto,
    title: "Glass & Mirror Cleaning",
    // ...and this one is the retail glass a customer sees first, kept clean on
    // a recurring schedule. Different buyer, different cadence.
    desc: "Retail glass on a schedule — storefronts, display cases, and mirrors kept sales-ready week after week.",
  },
  {
    slug: "industrial-cleaning",
    icon: "industrial",
    photo: fleetPhoto,
    title: "Industrial & Plant Services",
    desc: "Fin fan and heat exchanger cleaning, pipe racks, tank exteriors, fleet washing, and construction cleanup — OSHA-aligned safety program on every site.",
  },
];

// Industrial capabilities & safety program — sourced directly from Xtreme
// Kleen's own "Industrial Cleaning Capabilities & Safety Overview" document.
export const industrial = {
  capabilities: [
    "Air-Cooled Heat Exchanger (Fin Fan) Cleaning",
    "Heat Exchanger Exterior Cleaning",
    "Structural Steel & Pipe Rack Cleaning",
    "Tank Exterior Cleaning",
    "Equipment Washing & Degreasing",
    "Fleet Washing",
    "Warehouse & Facility Exteriors",
    "Concrete, Oil & Grease Removal",
  ],
  safety: [
    { title: "Job Safety Analysis (JSA)", desc: "Hazard assessment before any work begins — risks identified, controls established." },
    { title: "Lock Out / Tag Out", desc: "Energy isolation procedures followed around rotating and electrical equipment." },
    { title: "Stop Work Authority", desc: "Any unsafe condition stops the job immediately until it's evaluated and corrected." },
    { title: "Full PPE, Every Job", desc: "Hard hats, safety glasses, hearing protection, hi-vis, steel toes — plus site-specific PPE." },
  ],
};

export const steps = [
  {
    num: "01",
    title: "Call or Text",
    desc: "Reach us any time at 361-947-7811. Tell us the property and what needs cleaning.",
  },
  {
    num: "02",
    title: "Free On-Site Quote",
    desc: "We come look at the job in person and give you a straight price. No guessing, no hidden fees.",
  },
  {
    num: "03",
    title: "We Get It Done",
    desc: "Right equipment, right chemistry, right the first time. Clean. Safe. Like new.",
  },
];

// Real Google reviews.
export const reviews = [
  {
    name: "Karen Roberts",
    meta: "13 reviews · 2 photos",
    timeAgo: "2 months ago",
    text: "Extreme Kleen is a great company! They did an excellent job and my home looks awesome. They are on time and fast and efficient.",
  },
  {
    name: "Sharon Miller",
    meta: "2 reviews",
    timeAgo: "2 months ago",
    text: "This company is responsive, dependable, honest, hard working. I couldn't ask for more and it is a pleasure doing business with them. But don't trust me. Try them for yourselves. You won't be disappointed.",
  },
  {
    name: "Brandon Trammell",
    meta: "4 reviews",
    timeAgo: "a year ago",
    text: "Xtreme Kleen Wash is hands down the best cleaning service I've used! Eric Kuhn was very knowledgeable in his expertise and I could tell he takes a lot of pride in each job he takes on. Very satisfied with the work that was done!",
  },
  {
    name: "Braden Menn",
    meta: "3 reviews",
    timeAgo: "a year ago",
    text: "I have used Xtreme Kleen for construction site clean ups. Eric is very professional and easy to work with. He showed up on time and did exactly what he said he was going to do. I highly recommend this business.",
  },
  {
    name: "Jackson Soward",
    meta: "1 review",
    timeAgo: "a year ago",
    text: "Xtreme Kleen provided awesome work on my restaurant and rental properties. Eric Kuhn came in with a strategic plan with a fair price point and couldn't be happier with the results.",
  },
];

// Real job footage, self-hosted as muted, looping MP4s (see public/reels/).
// Self-hosted rather than embedded because Facebook blocks embeds on reels with
// licensed background music ("This video can't be embedded...").
//
// ORDER MATTERS: sorted by source resolution, sharpest first. Eric's own phone
// originals are 540x960; the four older clips ripped from Facebook are only
// 360x640 / 404x538 and look soft, so they sit at the back where the homepage
// carousel's first page never shows them.
export const reels = [
  {
    src: pub("reels/house-softwash.mp4"),
    poster: pub("reels/house-softwash-poster.jpg"),
    title: "Soft Washing a Coastal Home",
    caption:
      "Low pressure, right chemistry — the mix does the work while the siding and window seals take nothing.",
  },
  {
    src: pub("reels/window-glass.mp4"),
    poster: pub("reels/window-glass-poster.jpg"),
    title: "Glass, Streak-Free",
    caption:
      "Salt haze stripped off commercial glass — the film comes off instead of getting smeared around.",
  },
  {
    src: pub("reels/mixer-truck.mp4"),
    poster: pub("reels/mixer-truck-poster.jpg"),
    title: "Washing Down a Concrete Mixer",
    caption:
      "Hardened concrete and road film cut off a mixer barrel — fleet work that keeps trucks looking hired, not tired.",
  },
  // Deck sits on the first page (the four slides desktop shows without an arrow
  // click) and high-reach moves back. Deck is a service a homeowner can picture
  // wanting; boom-lift work reads as "that's for a commercial building, not me".
  {
    src: pub("reels/wood-deck.mp4"),
    poster: pub("reels/wood-deck-poster.jpg"),
    title: "Deck & Wood Cleaning",
    caption:
      "Graying, algae-fed decking washed back to clean wood — pressure dialed down so the boards don't fuzz.",
  },
  {
    src: pub("reels/high-reach.mp4"),
    poster: pub("reels/high-reach-poster.jpg"),
    title: "High-Reach Building Wash",
    caption:
      "Boom-lift reach on a commercial building — the upper stories most crews can't get to.",
  },
  {
    src: pub("reels/brick-wall.mp4"),
    poster: pub("reels/brick-wall-poster.jpg"),
    title: "Bringing Brick Back",
    caption:
      "Years of Gulf grime pulled off masonry, leaving the brick its original color instead of a chalky film.",
  },
  {
    src: pub("reels/fin-fan.mp4"),
    poster: pub("reels/fin-fan-poster.jpg"),
    title: "Fin Fan & Heat Exchanger Cleaning",
    caption:
      "Plant work: pulling packed grime out of an air-cooled heat exchanger without bending a single fin.",
  },
  {
    src: pub("reels/roof.mp4"),
    poster: pub("reels/roof-poster.jpg"),
    title: "Roof Cleaning — Black Streaks Gone",
    caption:
      "Algae and salt-air staining lifted off the roof with low pressure and the right chemistry.",
  },
  {
    src: pub("reels/softwash.mp4"),
    poster: pub("reels/softwash-poster.jpg"),
    title: "Truck Fire Cleanup — Scorched Driveway",
    caption:
      "Soot and burn staining left on the concrete after a truck burned down, washed back to a clean, even finish.",
  },
  {
    src: pub("reels/equipment.mp4"),
    poster: pub("reels/equipment-poster.jpg"),
    title: "Hot-Water Surface Cleaning Concrete",
    caption:
      "A surface cleaner and high-heat water pulling grime out of concrete in a single, even pass — no wand lines.",
  },
  {
    src: pub("reels/house.mp4"),
    poster: pub("reels/house-poster.jpg"),
    title: "Soft Washing a Two-Story Home",
    caption:
      "The whole exterior brought back to life — chemistry doing the work, not brute force.",
  },
];
