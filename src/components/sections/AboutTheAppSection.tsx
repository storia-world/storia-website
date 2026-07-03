"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const AboutTheAppSection = () => {
  return (
    <Section id="about-the-app">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,50%)_minmax(0,50%)] lg:gap-14 xl:gap-20">
          <FadeIn className="flex justify-center lg:justify-center">
            <Image
              src="/storiaFrames.png"
              alt="Storia app showing the Today dashboard and daily check-in screens"
              width={3169}
              height={4742}
              className="h-auto w-full max-w-[280px] object-contain drop-shadow-[0_24px_64px_rgba(33,37,41,0.12)] sm:max-w-[320px] lg:max-w-[340px]"
            />
          </FadeIn>

          <FadeIn delay={0.1} className="lg:max-w-none">
            <SectionHeader
              align="left"
              eyebrow="About the app"
              title="Something in you is asking to be heard."
              description={`Maybe it's the job that no longer fits. \n\nBurnout that doesn't go away. \n\nThe relationship that is weighing you down. \n\nYour brain isn't broken. It's just trying to tell you something. You don't need more advice. You need help getting clear — on your thoughts, your feelings.`}
            />
          </FadeIn>
        </div>
      </SectionContainer>
    </Section>
  );
};
