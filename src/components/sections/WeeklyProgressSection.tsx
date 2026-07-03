"use client";

import { Fragment } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";

export const WeeklyProgressSection = () => {
  return (
    <Section id="weekly-progress">
      <SectionContainer>
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <FadeIn className="flex max-w-xl flex-col gap-4 sm:gap-6 lg:min-h-[320px] lg:gap-0">
            <div className="lg:my-auto">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.1em] text-black75 sm:mb-4">
                — Weekly insights
              </p>
              <h2 className="max-w-2xl font-fraunces text-4xl font-semibold leading-[1.12] tracking-tight text-black sm:text-5xl lg:text-[3.25rem]">
                {"See how you're doing week to week"}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black75 sm:text-base lg:my-4">
              Our AI reviews your entries to reveal patterns in your thoughts,
              moods and triggers, helping you see the bigger picture
            </p>

            <p className="text-sm leading-relaxed text-black75 sm:text-base lg:my-4">
              You don&apos;t need a five-year plan — just a snapshot of how
              you&apos;re doing. A personalized roadmap.
            </p>
          </FadeIn>

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
