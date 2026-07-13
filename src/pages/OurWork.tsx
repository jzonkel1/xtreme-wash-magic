import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import PhotoGallery from "@/components/PhotoGallery";
import CommercialWork from "@/components/CommercialWork";
import TeamInAction from "@/components/TeamInAction";
import Reels from "@/components/Reels";
import EquipmentBand from "@/components/EquipmentBand";
import { breadcrumbLd } from "@/lib/seo";
import actionPhoto from "@/assets/action1.webp";

const OurWork = () => (
  <PageLayout>
    <Seo
      title="Our Work | Real Before & Afters, Job Photos & Videos | Xtreme Kleen"
      description="Real Xtreme Kleen jobs across the Coastal Bend — before-and-after transformations, the crew in action, and job-site video. No stock photos, all our own work. 361-947-7811."
      path="/our-work"
      jsonLd={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Our Work" }])]}
    />

    <PageHero
      kicker="PROOF, NOT PROMISES"
      title="Our Work, Not Stock Photos"
      sub="Every photo and video on this page is a real Xtreme Kleen job in the Coastal Bend. Flip the before-and-afters, watch the crew work, and judge for yourself."
      photo={actionPhoto}
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Our Work" }]}
    />

    <PhotoGallery />
    <CommercialWork />
    <TeamInAction />
    <Reels />
    <EquipmentBand />
  </PageLayout>
);

export default OurWork;
