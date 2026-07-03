"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";

export const WorldRitualSection = () => {
  return (
    <Section id="world-ritual">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <FadeIn className="max-w-lg">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.1em] text-black75">
              — Join the movement
            </p>

            <h2 className="font-fraunces text-4xl font-semibold leading-[1.12] tracking-tight text-black sm:text-5xl lg:text-[3.25rem]">
              The ritual the world is doing.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-black75 sm:text-lg">
              Join over{" "}
              <span className="font-semibold uppercase tracking-wide text-black">
                40,000
              </span>{" "}
              people already journaling with Storia.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-black/15 bg-white/60 px-5 py-3 text-sm font-medium text-black sm:text-base">
              1.2 million reflections written...
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Image
              src="/CommunityNetwork.png"
              alt="Storia community members connected in a network"
              width={1200}
              height={560}
              className="h-auto w-full rounded-[2rem] object-contain"
            />
          </FadeIn>
        </div>
      </SectionContainer>
    </Section>
  );
};
