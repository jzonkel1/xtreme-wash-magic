import StickyHeader from "@/components/StickyHeader";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

/**
 * Shared shell for every subpage: sticky nav on top, the quote form + footer
 * as the closer. Every page therefore has an in-page #quote target, so the
 * nav's "Free Quote" button works identically everywhere.
 */
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <StickyHeader />
    <main>{children}</main>
    <LeadCaptureForm />
    <Footer />
    <FloatingActions />
  </>
);

export default PageLayout;
