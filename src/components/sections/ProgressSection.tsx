"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";

export const ProgressSection = () => {
  return (
    <Section id="progress">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:gap-8 xl:gap-12">
          <FadeIn className="max-w-lg">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.1em] text-black75">
              — Your progress
            </p>

            <h2 className="font-fraunces text-4xl leading-[1.12] tracking-tight text-black sm:text-5xl lg:text-[3.25rem]">
              Progress you can <em className="font-normal italic">feel.</em>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-black75 sm:text-lg">
              <p>
                You won&apos;t just feel better. You&apos;ll{" "}
                <em className="text-black">see</em> it.
              </p>
              <p>
                Every Magic 3 completion. Every streak. Every moment you showed
                up for yourself—reflected back with meaning.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full min-w-0">
            <Image
              src="/progressImage.png"
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
