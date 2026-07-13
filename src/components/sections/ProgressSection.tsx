"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const ProgressSection = () => {
  return (
    <Section id="progress">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:gap-8 xl:gap-12">
          <div className="max-w-lg">
            <SectionHeader
              align="left"
              eyebrow="Your progress"
              title="Progress you can feel."
              description={`You won't just feel better. You'll see it.\n\nEvery Magic 3 completion. Every streak. Every moment you showed up for yourself—reflected back with meaning.`}
            />
          </div>

          <FadeIn delay={0.1} className="w-full min-w-0">
            <Image
              src="/progressImage3.png"
              alt="Storia app showing daily check-in, weekly progress, and achievement badges"
              width={2256}
              height={1748}
              className="h-auto w-full rounded-[2rem] object-contain shadow-[0_24px_64px_rgba(33,37,41,0.1)]"
            />
          </FadeIn>
        </div>
      </SectionContainer>
    </Section>
  );
};
