import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhyStoriaSection } from "@/components/sections/WhyStoriaSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { CommunityStatsSection } from "@/components/sections/CommunityStatsSection";
import { WorldRitualSection } from "@/components/sections/WorldRitualSection";
import { AboutTheAppSection } from "@/components/sections/AboutTheAppSection";
import { GuidedPromptsSection } from "@/components/sections/GuidedPromptsSection";
import { PersonalisedSection } from "@/components/sections/PersonalisedSection";
import { WeeklyProgressSection } from "@/components/sections/WeeklyProgressSection";
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
      <PersonalisedSection />
      <WeeklyProgressSection />
      <BusyMindsSection />
      <ProgressSection />
      <ProblemSection />
      <WhyStoriaSection />
      <CommunityStatsSection />
      <WorldRitualSection />
      <SocialProofSection />
      <FounderSection />
      <FAQPreviewSection />
      <FinalCTASection />
    </>
  );
};

export default HomePage;
