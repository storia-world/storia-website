"use client";

import { StaggerChildren, StaggerItem } from "@/components/motion/FadeIn";
import { AppScreenshot } from "@/components/ui/AppScreenshot";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "No blank pages, no judgment",
    description:
      "Open Storia and check in. Sunny meets you where you are — no waiting, no pressure to perform.",
    image: "/checkin.png",
    alt: "Storia check-in screen asking how you are feeling",
  },
  {
    number: "02",
    title: "Five minutes, three rituals",
    description:
      "The Magic 3 — Check-in, Daily Storia, Gratitude. A bite-sized practice built on evidence-based reflection.",
    image: "/homePage.png",
    alt: "Storia home screen with the Magic 3 daily rituals",
  },
  {
    number: "03",
    title: "Progress at your pace, your way",
    description:
      "Life Arc and Weekly Review surface real patterns across your life — clarity you can actually use.",
    image: "/coreInsights.png",
    alt: "Storia Core insights showing emotional wellbeing score",
  },
];

export const ProblemSection = () => {
  return (
    <Section id="how-it-works" className="relative">
      <SectionContainer className="relative">
        <SectionHeader
          eyebrow="How Storia works"
          title="Growth needs to be accessible"
        />

        <StaggerChildren className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <article className="flex h-full flex-col rounded-[2.5rem] bg-white/40 p-8 shadow-[0_12px_48px_rgba(122,173,201,0.18)] sm:p-9 lg:p-10">
                <div className="mb-6 flex items-center justify-center px-2">
                  <AppScreenshot src={step.image} alt={step.alt} />
                </div>

                <p className="text-xs font-semibold tracking-wide text-blue-deep">
                  {step.number}
                </p>
                <h3 className="mt-1.5 text-base font-bold leading-snug text-black sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black75">
                  {step.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>
    </Section>
  );
};
