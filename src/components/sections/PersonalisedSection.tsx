"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const PersonalisedSection = () => {
  return (
    <Section id="personalised">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <SectionHeader
            align="left"
            eyebrow="Personalised to you"
            title={`See how you're doing\nweek to week`}
            description={`Storia learns from your reflections to create a real-time picture of your emotional wellbeing.\n\nNo two journeys are the same. Your daily thoughts, emotions, and experiences are transformed into personalised insights — revealing patterns in your confidence, energy, stress, and behaviour.\n\nSee what’s changing. Understand what’s driving it. Know what to focus on next.`}
          />

          <FadeIn delay={0.1} className="flex justify-center">
            <Image
              src="/personalisedToYou.png"
              alt="Woman using Storia with personalised insights and coaching cards"
              width={1300}
              height={1900}
              className="h-auto w-full max-w-[320px] rounded-[1.75rem] object-cover shadow-[0_24px_64px_rgba(33,37,41,0.1)] ring-1 ring-black/5 sm:max-w-[360px] lg:max-w-[420px]"
            />
          </FadeIn>
        </div>
      </SectionContainer>
    </Section>
  );
};
