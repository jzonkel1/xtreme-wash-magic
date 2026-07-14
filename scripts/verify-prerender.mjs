/**
 * Build guard: fail the deploy if the prerender didn't actually happen.
 *
 * scripts/prerender.mjs is deliberately deploy-safe — if Chromium can't launch
 * it warns and exits 0 so a broken prerender never blocks a release. The cost of
 * that choice showed up in production: Netlify restored node_modules from cache,
 * Puppeteer's browser binary was missing, prerender skipped itself, and the site
 * shipped as a bare SPA. Every page returned <div id="root"></div> with the
 * homepage's title and canonical — invisible to non-JS crawlers, and blank to
 * the A2P reviewer fetching /privacy and /terms. The deploy was green for days.
 *
 * So: the prerender may fail quietly, but the BUILD may not. This asserts that
 * the pages actually exist and carry real content, and exits 1 if they don't —
 * a failed build leaves the previous good deploy live, which is the safe outcome.
 */
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const DIST = resolve("dist");

/** Routes whose absence would do real damage, and a string each must contain. */
const REQUIRED = [
  ["privacy", "No mobile information"],       // A2P: carrier reviewers fetch this
  ["terms", "Age restriction"],               // A2P: SMS program terms
  ["contact", "non-marketing text messages"], // A2P: the opt-in consent checkboxes
  ["services/pressure-washing", "Pressure Washing in Portland"],
  ["service-areas/portland-tx", "Portland"],
];

const failures = [];

for (const [route, needle] of REQUIRED) {
  const file = resolve(DIST, route, "index.html");
  if (!existsSync(file)) {
    failures.push(`MISSING  /${route} — no prerendered index.html`);
    continue;
  }
  const html = await readFile(file, "utf8");
  if (!html.includes(needle)) {
    failures.push(`EMPTY    /${route} — prerendered but missing "${needle}" (SPA shell?)`);
  }
}

if (failures.length) {
  console.error("\n[verify-prerender] BUILD FAILED — the site would ship unprerendered.\n");
  failures.forEach((f) => console.error("  " + f));
  console.error(
    "\nUsually this means Puppeteer could not launch Chromium during the build.\n" +
      "Check that `npx puppeteer browsers install chrome` ran and that\n" +
      "PUPPETEER_CACHE_DIR points somewhere the build cache persists.\n",
  );
  process.exit(1);
}

console.log(`[verify-prerender] OK — ${REQUIRED.length}/${REQUIRED.length} critical routes prerendered with real content.`);
