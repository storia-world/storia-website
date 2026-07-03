"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const memberAvatars = [
  {
    src: "/testimonial1.png",
    alt: "Storia community member",
    width: 900,
    height: 1200,
  },
  {
    src: "/testimonial2.png",
    alt: "Storia community member",
    width: 2400,
    height: 2594,
  },
  {
    src: "/testimonial3.png",
    alt: "Storia community member",
    width: 736,
    height: 981,
  },
];

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

        <FadeIn delay={0.15} className="mt-8 flex justify-center sm:mt-10">
          <div className="inline-flex w-fit max-w-full flex-col items-center gap-5 rounded-card-lg bg-beige px-6 py-7 sm:flex-row sm:items-center sm:gap-8 sm:px-8 sm:py-8">
            <p className="shrink-0 font-fraunces text-5xl leading-none text-black sm:text-6xl">
              67k
            </p>

            <p className="max-w-[16rem] text-center text-base leading-snug text-black sm:max-w-none sm:text-left sm:text-lg">
              People are using Storia to
              <br />
              improve themselves already
            </p>

            <div className="flex shrink-0 items-center">
              {memberAvatars.map((member, index) => (
                <Image
                  key={member.src}
                  src={member.src}
                  alt={member.alt}
                  width={member.width}
                  height={member.height}
                  className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
                  style={{ marginLeft: index === 0 ? 0 : "-0.75rem" }}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </Section>
  );
};
