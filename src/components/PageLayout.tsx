import StickyHeader from "@/components/StickyHeader";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

/**
 * Shared shell for every subpage: sticky nav on top, the quote form + footer
 * as the closer. Every page therefore has an in-page #quote target, so the
 * nav's "Free Quote" button works identically everywhere.
 *
 * Pages that render their own #quote form (the contact page) pass
 * quoteForm={false} so the closer isn't duplicated below it.
 */
const PageLayout = ({
  children,
  quoteForm = true,
}: {
  children: React.ReactNode;
  quoteForm?: boolean;
}) => (
  <>
    <StickyHeader />
    <main>{children}</main>
    {quoteForm && <LeadCaptureForm />}
    <Footer />
    <FloatingActions />
  </>
);

export default PageLayout;
