/**
 * Post-build prerender: crawls every route in the sitemap with headless Chrome
 * and writes a fully-rendered static index.html per route into dist/.
 *
 * Why: the app is a client-side SPA, so non-JS crawlers (GPTBot, PerplexityBot,
 * ClaudeBot, etc.) would otherwise see an empty <div id="root">. This bakes the
 * real per-page <title>, meta, canonical, JSON-LD (set by src/components/Seo.tsx)
 * and body content into the HTML those crawlers fetch. It also makes deep links
 * real files on GitHub Pages instead of 404-fallback loads.
 *
 * Base path: the GH Pages workflow builds with GHPAGES=1, which moves the site
 * under /xtreme-wash-magic/. The local server and page URLs account for that;
 * output files still land at dist/<route>/index.html, which GH Pages serves
 * from the right place.
 *
 * Deploy-safe: any failure logs a warning and exits 0 so the site still ships
 * as a working SPA rather than breaking the build.
 */
import http from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 4199;
const ORIGIN = `http://localhost:${PORT}`;
// Must match vite.config.ts: GHPAGES=1 builds under /xtreme-wash-magic/.
const BASE = process.env.GHPAGES ? "/xtreme-wash-magic" : "";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".mp4": "video/mp4",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

// Minimal static server for dist/ with SPA fallback, mounted at BASE.
function startServer() {
  const server = http.createServer(async (req, res) => {
    try {
      let urlPath = decodeURIComponent(req.url.split("?")[0]);
      if (BASE && urlPath.startsWith(BASE)) urlPath = urlPath.slice(BASE.length) || "/";
      let filePath = path.join(DIST, urlPath);
      const isDir = existsSync(filePath) && (await stat(filePath)).isDirectory();
      if (urlPath.endsWith("/") || isDir) filePath = path.join(filePath, "index.html");

      if (!existsSync(filePath)) {
        // No file: assets 404, routes fall back to the SPA shell.
        if (path.extname(filePath)) {
          res.writeHead(404);
          return res.end("Not found");
        }
        filePath = path.join(DIST, "index.html");
      }
      const data = await readFile(filePath);
      res.writeHead(200, { "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream" });
      res.end(data);
    } catch {
      res.writeHead(500);
      res.end("Server error");
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function run() {
  let puppeteer;
  try {
    puppeteer = (await import("puppeteer")).default;
  } catch (e) {
    console.warn("[prerender] puppeteer not available — skipping prerender, shipping SPA.", e?.message);
    process.exit(0);
  }

  // Routes come from the sitemap, so adding a page there prerenders it too.
  const sitemapPath = path.join(DIST, "sitemap.xml");
  let routes = ["/"];
  if (existsSync(sitemapPath)) {
    const xml = readFileSync(sitemapPath, "utf-8");
    const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => {
        try {
          return new URL(m[1]).pathname;
        } catch {
          return null;
        }
      })
      .filter(Boolean);
    if (paths.length) routes = [...new Set(paths)];
  }

  const server = await startServer();
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });
  } catch (e) {
    console.warn("[prerender] could not launch Chromium — skipping prerender, shipping SPA.", e?.message);
    server.close();
    process.exit(0);
  }

  // Block third-party embeds and heavy media: they don't change the rendered
  // HTML (src attributes stay in the DOM) but they slow every page load.
  const BLOCK = /googletagmanager|google-analytics|doubleclick|maps\.google|google\.com\/maps|maps\.googleapis|\.mp4(\?|$)/i;
  let ok = 0;
  let failed = 0;

  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.setRequestInterception(true);
      page.on("request", (r) => (BLOCK.test(r.url()) ? r.abort() : r.continue()));
      page.on("pageerror", () => {});

      await page.goto(`${ORIGIN}${BASE}${route}`, { waitUntil: "networkidle2", timeout: 30000 });
      // Every in-layout route renders a <footer>; wait for it, then let the
      // Seo effect flush its head updates.
      await page.waitForSelector("footer", { timeout: 15000 }).catch(() => {});
      await new Promise((r) => setTimeout(r, 300));

      const html = await page.content();
      const outDir = route === "/" ? DIST : path.join(DIST, route);
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, "index.html"), html, "utf-8");
      ok++;
      console.log(`[prerender] ${route} -> ${path.relative(DIST, path.join(outDir, "index.html"))}`);
    } catch (e) {
      failed++;
      console.warn(`[prerender] failed ${route}: ${e?.message}`);
    } finally {
      await page.close().catch(() => {});
    }
  }

  await browser.close().catch(() => {});
  server.close();
  console.log(`[prerender] done — ${ok} pages prerendered, ${failed} failed.`);
}

run().catch((e) => {
  console.warn("[prerender] unexpected error — shipping SPA.", e?.message);
  process.exit(0);
});
