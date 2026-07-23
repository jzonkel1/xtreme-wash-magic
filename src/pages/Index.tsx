import Seo from "@/components/Seo";
import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import TeamInAction from "@/components/TeamInAction";
import Reels from "@/components/Reels";
import EquipmentBand from "@/components/EquipmentBand";
import IndustrialSafety from "@/components/IndustrialSafety";
import PhotoGallery from "@/components/PhotoGallery";
import Reviews from "@/components/Reviews";
import CommercialWork from "@/components/CommercialWork";
import ServiceArea from "@/components/ServiceArea";
import BookingSection from "@/components/BookingSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

/**
 * Conversion arc: hook → proof (motion, then stills) → agitate → trust →
 * mechanism → services → process → BOOK → depth → close.
 *
 * Two conversion blocks, deliberately spaced rather than stacked at the bottom:
 *
 *   BookingSection sits directly after HowItWorks because HowItWorks explains the
 *   three-step process and ends on "ready to get started?" — the honest next beat
 *   is the calendar itself, not six more sections of persuasion followed by one.
 *   It used to sit at #15, so the BOOK ONLINE button was teleporting people
 *   halfway down the page to reach the thing it had just promised them.
 *
 *   LeadCaptureForm stays the final close, for anyone who read the whole way down.
 *
 * The calendar is NOT any higher than this. Booking means inviting a stranger onto
 * your property at a named time — that's a real commitment, and it needs the
 * reviews, the method, and the services to land first. Everything above it instead
 * carries a jump link (#book), so a visitor who is already sold never has to wait
 * for it: PainPoints, Reviews, HowItWorks, ServiceArea and the mobile sticky bar
 * all offer call-or-book side by side.
 */
const Index = () => (
  <>
    <Seo
      title="Xtreme Kleen | Power Washing & Soft Wash — Portland, TX & the Coastal Bend"
      description="Soft wash, pressure washing, roof and window cleaning in Portland, TX and across the Coastal Bend. No high pressure, no damage. Free on-site quotes. Open 24 hours — call or text 361-306-1551."
      path="/"
    />
    <StickyHeader />
    <HeroSection />
    <TrustBar />
    {/* Video before stills. Motion is the strongest proof a washing company has —
        a clip of grime actually lifting off beats a static before/after, so the
        reels lead and the photo gallery backs them up. */}
    <Reels />
    <PhotoGallery home />
    <PainPoints />
    <Reviews />
    <Solution />
    <ServicesGrid />
    <HowItWorks />
    <BookingSection />
    <TeamInAction />
    <EquipmentBand />
    <IndustrialSafety />
    <CommercialWork preview />
    <ServiceArea />
    <LeadCaptureForm />
    <Footer />
    <FloatingActions />
  </>
);

export default Index;
