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
import PhotoGallery from "@/components/PhotoGallery";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";

/**
 * Narrative arc: hook → agitate the problem → show the fix → prove it → close.
 */
const Index = () => (
  <>
    <StickyHeader />
    <HeroSection />
    <TrustBar />
    <PainPoints />
    <Solution />
    <ServicesGrid />
    <HowItWorks />
    <TeamInAction />
    <Reels />
    <EquipmentBand />
    <PhotoGallery />
    <Reviews />
    <ServiceArea />
    <LeadCaptureForm />
    <Footer />
  </>
);

export default Index;
