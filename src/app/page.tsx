import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FounderSection } from "@/components/sections/FounderSection";
// import { WhyStoriaSection } from "@/components/sections/WhyStoriaSection";
// import { CommunityStatsSection } from "@/components/sections/CommunityStatsSection";
// import { WorldRitualSection } from "@/components/sections/WorldRitualSection";
import { AboutTheAppSection } from "@/components/sections/AboutTheAppSection";
import { GuidedPromptsSection } from "@/components/sections/GuidedPromptsSection";
import { FeaturesCarouselSection } from "@/components/sections/FeaturesCarouselSection";
import { PersonalisedSection } from "@/components/sections/PersonalisedSection";
// import { WeeklyProgressSection } from "@/components/sections/WeeklyProgressSection";
import { BusyMindsSection } from "@/components/sections/BusyMindsSection";
import { ProgressSection } from "@/components/sections/ProgressSection";
import { FAQPreviewSection } from "@/components/sections/FAQPreviewSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutTheAppSection />
      <GuidedPromptsSection />
      <FeaturesCarouselSection />
      <PersonalisedSection />
      {/* <WeeklyProgressSection /> */}
      <BusyMindsSection />
      <ProgressSection />
      <ProblemSection />
      {/* <WhyStoriaSection /> */}
      {/* <CommunityStatsSection /> */}
      {/* <WorldRitualSection /> */}
      <SocialProofSection />
      <FounderSection />
      <FAQPreviewSection />
      <FinalCTASection />
    </>
  );
};

export default HomePage;
