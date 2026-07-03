"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";

export const FounderSection = () => {
  return (
    <Section id="founder">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <FadeIn className="flex justify-center lg:justify-start">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
              <Image
                src="/founder.jpeg"
                alt="Elizabeth Uviebinené, founder of Storia"
                width={2346}
                height={2645}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <blockquote className="font-fraunces text-2xl leading-snug text-black sm:text-3xl lg:text-3xl lg:leading-[1.2]">
              &ldquo;I created Storia because I wished something like this
              existed — evidence-based, ritual-driven, and deeply personal. Five
              minutes a day changed how I see my own story. I built it so others
              could find theirs.&rdquo;
            </blockquote>
            <p className="mt-6 text-base text-black75">
              — Elizabeth, Founder of Storia
            </p>
            <div className="mt-8">
              <a
                href="https://www.elizabethuviebinene.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-black/90 active:scale-[0.98]"
              >
                Meet Elizabeth
                <span aria-hidden>→</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>
    </Section>
  );
};
