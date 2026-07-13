import { useEffect } from "react";
import { SITE_URL } from "@/lib/seo";

type SeoProps = {
  title: string;
  description: string;
  /** Route path with leading slash, e.g. "/services/roof-cleaning". */
  path: string;
  jsonLd?: object[];
  /** Keep the page out of search results (review gate — customers arrive by text/QR). */
  noindex?: boolean;
};

const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

/**
 * Per-route head manager. index.html carries the homepage tags statically;
 * this component updates them in place on navigation (no duplicates), and the
 * prerender step bakes the result into each route's static HTML for crawlers.
 */
const Seo = ({ title, description, path, jsonLd, noindex }: SeoProps) => {
  const jsonLdKey = JSON.stringify(jsonLd ?? []);

  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Replace page-level JSON-LD (the static org-level block in index.html stays).
    document.head.querySelectorAll("script[data-page-jsonld]").forEach((el) => el.remove());
    (JSON.parse(jsonLdKey) as object[]).forEach((obj) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-page-jsonld", "true");
      script.textContent = JSON.stringify(obj);
      document.head.appendChild(script);
    });
  }, [title, description, path, jsonLdKey, noindex]);

  return null;
};

export default Seo;
