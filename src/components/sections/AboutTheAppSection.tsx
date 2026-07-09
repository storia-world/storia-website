"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const AboutTheAppSection = () => {
  return (
    <Section id="about-the-app" className="relative overflow-hidden">
      <SectionContainer className="relative">
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,50%)_minmax(0,50%)] lg:gap-14 xl:gap-20">
          <FadeIn className="relative z-0 -ml-5 flex items-end justify-start sm:-ml-8 lg:absolute lg:bottom-0 lg:left-0 lg:top-0 lg:-mb-28 lg:ml-0 lg:w-[calc((100%-3.5rem)/2)] lg:items-end xl:w-[calc((100%-5rem)/2)]">
            <Image
              src="/checkinFrame.png"
              alt="Hand holding a phone showing Storia's daily check-in screen"
              width={1963}
              height={2073}
              className="h-auto w-full max-w-[280px] object-contain object-left-bottom drop-shadow-[0_24px_64px_rgba(33,37,41,0.12)] sm:max-w-[340px] lg:max-h-full lg:w-auto lg:max-w-full"
            />
          </FadeIn>

          <FadeIn delay={0.1} className="relative z-10 lg:col-start-2 lg:max-w-none">
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
