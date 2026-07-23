import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import BookingSection from "@/components/BookingSection";
import { breadcrumbLd } from "@/lib/seo";
import heroBridge from "@/assets/hero-bridge-new.webp";

/**
 * Dedicated booking page. The calendar used to live ONLY in the #book section on
 * the home and contact pages — so the sitewide "Book" button (the sticky bar,
 * plus the HowItWorks/Reviews CTAs that ride onto service and city pages) pointed
 * at an #book anchor that doesn't exist on most pages: a dead link. This gives
 * booking a real, linkable URL that works from every page, from the Google
 * Business Profile "Book" button, texts, and the missed-call text-back.
 *
 * PageHero carries the H1 + breadcrumb, so BookingSection renders with its own
 * heading suppressed (hideHeader) to avoid two stacked "Book…" titles. Pushing
 * the calendar below a full hero also keeps it out of the prerenderer's initial
 * viewport, so the GHL embed doesn't try to load during the static build.
 */
const BookPage = () => (
  <PageLayout quoteForm={false}>
    <Seo
      title="Book a Free On-Site Estimate | Xtreme Kleen"
      description="Book your free on-site power washing estimate online across Portland, TX and the Coastal Bend — pick a time that works. Prefer to talk? Call or text 361-306-1551, open 24 hours."
      path="/book"
      jsonLd={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Book" }])]}
    />
    <PageHero
      kicker="SCHEDULE ONLINE"
      title="Book Your Free On-Site Estimate"
      sub="Pick a time that works and we'll come walk the property and price it in person — free, and no obligation. Would rather talk it through? Call or text anytime; we're open 24 hours."
      photo={heroBridge}
      photoPosition="center 62%"
      hideQuoteCta
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Book" }]}
    />
    <BookingSection hideHeader />
  </PageLayout>
);

export default BookPage;
