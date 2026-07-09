"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const WeeklyProgressSection = () => {
  return (
    <Section id="weekly-progress">
      <SectionContainer>
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="flex max-w-xl flex-col lg:min-h-[320px] lg:justify-center">
            <SectionHeader
              align="left"
              eyebrow="Weekly insights"
              title={"See how you're doing week to week"}
              description={`Our AI reviews your entries to reveal patterns in your thoughts, moods and triggers, helping you see the bigger picture\n\nYou don't need a five-year plan — just a snapshot of how you're doing. A personalized roadmap.`}
            />
          </div>

          <FadeIn delay={0.1} className="flex justify-center">
            <div
              className="aspect-[9/16] w-full max-w-[220px] rounded-[1.75rem] bg-white/80 shadow-[0_24px_64px_rgba(33,37,41,0.08)] ring-1 ring-black/5 sm:max-w-[240px] lg:max-w-[260px]"
              aria-hidden
            />
          </FadeIn>
        </div>
      </SectionContainer>
    </Section>
  );
};
