// ---------------------------------------------------------------------------
// Xtreme Kleen — single source of truth for all site content.
// Edit this file to change copy, services, reviews, reels, and service areas.
// ---------------------------------------------------------------------------
import softWashPhoto from "@/assets/action2.webp"; // condo soft wash at sunset
import highReachPhoto from "@/assets/action3.webp"; // boom-lift building wash
import fleetPhoto from "@/assets/truck-wash.webp"; // Dura-Haul trailer washdown
import glassPhoto from "@/assets/access-ford.webp"; // Access Ford glass storefront
import drivewayPhoto from "@/assets/after7.webp"; // finished driveway, clean line

// Public-folder assets must respect Vite's base path (GitHub Pages serves the
// site from /xtreme-wash-magic/, not the domain root).
const pub = (p: string) => `${import.meta.env.BASE_URL}${p}`;

export const business = {
  brand: "Xtreme Kleen",
  legalName: "Extreme Clean Wash and Rental LLC",
  owner: "Eric Kuhn",
  tagline: "Wash Away the Past",
  phone: "361-947-7811",
  phoneHref: "tel:3619477811",
  email: "Xtreme.Kleen2023@gmail.com",
  hours: "Open 24 Hours",
  primaryCity: "Portland, TX",
  region: "The Coastal Bend",
  googleProfile: "https://share.google/7q83LZUVLtkeXmbaS",
  rating: 5.0,
  reviewCount: 5,

  // Hero background video (HydroChem-style). Set to "" to fall back to the
  // cinematic still (hero-spray) with a slow Ken Burns drift.
  // Current clip: royalty-free backlit pressure-spray (Pexels license — free for
  // commercial use, no attribution). Swap for Eric's own HORIZONTAL footage
  // whenever he films some; drop the mp4 in public/ and update this path.
  heroVideo: pub("hero.mp4"),
};

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
export const services = [
  {
    icon: "pressure",
    photo: drivewayPhoto,
    title: "Power & Pressure Washing",
    desc: "Driveways, sidewalks, concrete, patios, and commercial flatwork brought back to bare, clean surface.",
  },
  {
    icon: "softwash",
    photo: softWashPhoto,
    title: "Soft Wash Cleaning",
    desc: "Low-pressure, chemistry-first cleaning for siding, stucco, and delicate surfaces. No damage, ever.",
  },
  {
    icon: "roof",
    photo: pub("reels/roof-poster.jpg"), // aerial commercial roof shot
    title: "Roof Cleaning",
    desc: "Black streaks, algae, and salt-air buildup removed safely — without walking a high-pressure wand across your shingles.",
  },
  {
    icon: "window",
    photo: highReachPhoto,
    title: "Interior & Exterior Window Cleaning",
    desc: "Streak-free glass inside and out, from single-story homes to multi-story commercial buildings.",
  },
  {
    icon: "glass",
    photo: glassPhoto,
    title: "Glass & Mirror Cleaning",
    desc: "Storefront glass, mirrors, and display windows kept spotless and sales-ready.",
  },
  {
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

// Real job footage from Xtreme Kleen's Facebook page, self-hosted as muted,
// looping MP4s (see public/reels/). We self-host instead of embedding because
// Facebook blocks embeds on reels containing licensed background music
// ("This video can't be embedded..."). Serving the raw clips muted sidesteps
// that entirely and drops the Facebook player chrome for a cleaner look.
// To refresh: download the reel, strip audio, and compress (see project notes).
export const reels = [
  {
    src: pub("reels/softwash.mp4"),
    poster: pub("reels/softwash-poster.jpg"),
    title: "Driveway Degrease & Soft Wash",
    caption:
      "Oil-stained concrete pulled back to a clean, even finish — no etching, no damage.",
  },
  {
    src: pub("reels/roof.mp4"),
    poster: pub("reels/roof-poster.jpg"),
    title: "Roof Cleaning — Black Streaks Gone",
    caption:
      "Algae and salt-air staining lifted off the roof with low pressure and the right chemistry.",
  },
  {
    src: pub("reels/equipment.mp4"),
    poster: pub("reels/equipment-poster.jpg"),
    title: "Steam-Cleaning Heavy Equipment",
    caption:
      "High-heat steam cutting through grease and grime on industrial equipment.",
  },
  {
    src: pub("reels/house.mp4"),
    poster: pub("reels/house-poster.jpg"),
    title: "Soft Washing a Two-Story Home",
    caption:
      "The whole exterior brought back to life — chemistry doing the work, not brute force.",
  },
];
