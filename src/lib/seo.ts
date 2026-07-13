// ---------------------------------------------------------------------------
// SEO helpers: canonical site URL + JSON-LD builders shared by every page.
// The prerender step (scripts/prerender.mjs) bakes whatever these produce
// into the static HTML each crawler sees.
// ---------------------------------------------------------------------------
import { business } from "@/data";
import { locationsContent } from "@/content/locations";

export const SITE_URL = "https://xtremekleen.biz";

/**
 * Every city we publish a page for. Service schema defaults to this list so a
 * service page claims the same coverage the site actually claims — previously
 * it hardcoded three cities, which quietly told Google we don't work in six of
 * the towns we have full pages for.
 */
export const SERVICE_AREA_CITIES = locationsContent.map((l) => l.city);

/**
 * Compact LocalBusiness reference embedded as provider in Service schema.
 * The @id matches the full business node in index.html, so every service page
 * points at the SAME entity instead of declaring a new business per page.
 */
export const businessRef = {
  "@type": "PressureWashingService",
  "@id": `${SITE_URL}/#business`,
  name: business.brand,
  legalName: business.legalName,
  telephone: "+1-361-947-7811",
  email: business.email,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Portland",
    addressRegion: "TX",
    addressCountry: "US",
  },
};

export const breadcrumbLd = (items: { name: string; path?: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    ...(item.path ? { item: `${SITE_URL}${item.path}` } : {}),
  })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceLd = (opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  url: `${SITE_URL}${opts.path}`,
  provider: businessRef,
  areaServed: (opts.areaServed ?? SERVICE_AREA_CITIES).map((name) => ({
    "@type": "City",
    name,
  })),
});
