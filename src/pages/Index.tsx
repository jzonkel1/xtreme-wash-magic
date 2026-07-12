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
import ServiceArea from "@/components/ServiceArea";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

/**
 * Conversion arc: hook → instant proof (before/afters) → trust (reviews) →
 * agitate → the fix → services → deeper proof → close.
 * Before/after flips and reviews sit high because they earn the most
 * engagement — visitors decide on photos and stars.
 */
const Index = () => (
  <>
    <Seo
      title="Xtreme Kleen | Power Washing & Soft Wash — Portland, TX & the Coastal Bend"
      description="Soft wash, pressure washing, roof and window cleaning in Portland, TX and across the Coastal Bend. No high pressure, no damage. Free on-site quotes. Open 24 hours — call or text 361-947-7811."
      path="/"
    />
    <StickyHeader />
    <HeroSection />
    <TrustBar />
    <PhotoGallery />
    <PainPoints />
    <Reviews />
    <Solution />
    <ServicesGrid />
    <HowItWorks />
    <TeamInAction />
    <Reels />
    <EquipmentBand />
    <IndustrialSafety />
    <ServiceArea />
    <LeadCaptureForm />
    <Footer />
    <FloatingActions />
  </>
);

export default Index;
