"use client";

import Link from "next/link";
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
            title="No two paths are the same."
            description="Whether you're spiralling, building, or just looking for something real—Storia adapts to your emotional state in real time."
          />

          <FadeIn delay={0.1} className="relative">
            <div className="flex flex-col items-center pt-6 text-center sm:pt-4">
              <div
                className="aspect-[9/16] w-full max-w-[220px] rounded-[1.75rem] bg-[#2A2640]/40 ring-1 ring-white/10 sm:max-w-[240px] lg:max-w-[260px]"
                aria-hidden
              />

              <p className="mt-8 max-w-xs font-fraunces text-lg font-medium uppercase leading-snug tracking-[0.08em] text-black sm:mt-10 sm:text-xl">
                Your daily ritual for becoming.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>
    </Section>
  );
};
