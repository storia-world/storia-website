"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { OfficialAppStoreBadge } from "../ui/StoreBadges";
import Image from "next/image";

export const FinalCTASection = () => {
  return (
    <Section>
      <FadeIn>
        <SectionContainer
          width="narrow"
          className="overflow-hidden rounded-card-lg bg-gradient-cta p-10 text-center animate-gradient-shift sm:p-16"
        >
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo.png"
              alt="Storia"
              width={36}
              height={36}
              className="rounded-xl"
              priority
            />
          </div>
          <SectionHeader
            eyebrow="Start today"
            title="Ready to author your own story?"
            description="Take the pledge. Start Day 1."
          />
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <OfficialAppStoreBadge size="lg" />
          </div>
        </SectionContainer>
      </FadeIn>
    </Section>
  );
};
