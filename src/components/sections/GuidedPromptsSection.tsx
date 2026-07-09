"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Check In",
    description:
      "Name how you feel. Storia helps you process it.",
  },
  {
    number: "02",
    title: "Gratitude",
    description: "Reframe your day. Small shifts. Quiet wins.",
  },
  {
    number: "03",
    title: "Daily Storia",
    description: "Learn from others finding their way too.",
  },
];

export const GuidedPromptsSection = () => {
  return (
    <Section id="guided-prompts">
      <SectionContainer>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-18">
          <div className="max-w-xl">
            <SectionHeader
              align="left"
              eyebrow="Guided prompts"
              title={"A ritual made for the mess in 3 simple steps."}
            />

            <FadeIn>
              <ol className="mt-8 space-y-4">
                {steps.map((step) => (
                  <li key={step.number}>
                    <p className="text-base font-bold text-black sm:text-lg">
                      <span className="text-black">{step.number}</span>
                      {" — "}
                      {step.title}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-black75">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>

              <p className="mt-8 text-base font-medium text-black">→ Done.</p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="flex justify-center lg:justify-end">
            <Image
              src="/guidedJournals.png"
              alt="Woman using Storia's guided journal prompts at a cafe"
              width={2000}
              height={1584}
              className="h-auto w-full max-w-[560px] rounded-[2rem] object-cover shadow-[0_24px_64px_rgba(33,37,41,0.1)] ring-1 ring-black/5 lg:max-w-none"
            />
          </FadeIn>
        </div>
      </SectionContainer>
    </Section>
  );
};
