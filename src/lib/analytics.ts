// GA4 event helper.
//
// The tag itself is set up in index.html: the inline gtag()/dataLayer bootstrap
// runs immediately and the 155KB remote script is deferred to the first
// interaction (or 4s idle) so it stays out of the LCP window. That means calls
// from here are ALWAYS safe — they queue on dataLayer and flush when the tag
// lands — and they are silently dropped if no measurement ID is configured.
//
// Sitewide tel:, sms:, review and /book link clicks are already captured by the
// delegated listener in index.html. Use this module for things a click listener
// cannot see: form submissions, wizard progress, SPA route changes.

type Params = Record<string, string | number | boolean | undefined>;

const gtag = (...args: unknown[]) => {
  const w = window as unknown as { dataLayer?: unknown[]; XK_GA_ID?: string };
  if (!w.XK_GA_ID) return;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
};

export const track = (event: string, params: Params = {}) => {
  gtag("event", event, { page_path: window.location.pathname, ...params });
};

// gtag('config', ID) in index.html already sent the page_view for the document
// that loaded, so the first call here is a duplicate and is dropped. Subsequent
// calls are real client-side route changes.
let firstRoute = true;
export const trackPageView = (path: string, title: string) => {
  if (firstRoute) {
    firstRoute = false;
    return;
  }
  gtag("event", "page_view", { page_path: path, page_title: title });
};
