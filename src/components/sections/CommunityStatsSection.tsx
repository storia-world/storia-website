"use client";

import { Star } from "lucide-react";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const stats = [
  {
    value: "1.2",
    suffix: "M",
    label: "Reflections written",
  },
  {
    value: "8.5",
    suffix: "K",
    label: "Members journaling",
  },
  {
    value: "4.9",
    suffix: "star",
    label: "1,000+ reviews",
  },
];

export const CommunityStatsSection = () => {
  return (
    <Section id="community">
      <SectionContainer>
        <SectionHeader eyebrow="Community" title="What people are saying" />

        <StaggerChildren className="grid gap-5 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <article className="flex min-h-[160px] flex-col items-center justify-center rounded-card-lg border border-black/10 bg-beige px-6 py-10 text-center sm:min-h-[180px]">
                <p className="flex items-baseline justify-center gap-1 font-fraunces text-4xl font-semibold text-black sm:text-5xl">
                  <span>{stat.value}</span>
                  {stat.suffix === "star" ? (
                    <Star
                      className="h-7 w-7 fill-blue-deep text-blue-deep sm:h-8 sm:w-8"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  ) : (
                    <span className="text-blue-deep">{stat.suffix}</span>
                  )}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-black75">
                  {stat.label}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>
    </Section>
  );
};
