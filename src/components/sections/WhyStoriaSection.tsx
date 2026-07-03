"use client";

import { BookOpen, Clock, Sparkles, Sun, type LucideIcon } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const cards: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "For every kind of journey",
    description:
      "Whether you're navigating burnout, career change, or just trying to show up — if you've got a story worth telling, you belong here.",
    icon: Sparkles,
  },
  {
    title: "Built by a habit expert",
    description:
      'Created by Elizabeth Uviebinené, bestselling author and researcher. Zero "blank page and good luck" fluff.',
    icon: BookOpen,
  },
  {
    title: "Five minutes changes everything",
    description:
      "Less time than your morning scroll → clarity that actually compounds.",
    icon: Clock,
  },
  {
    title: "Sunny remembers your story",
    description:
      "Not a generic chatbot — a companion who knows your patterns, rituals, and growth over time, so every reflection feels personal.",
    icon: Sun,
  },
];

const CardIcon = ({ icon: Icon }: { icon: LucideIcon }) => {
  return (
    <div
      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-deep shadow-sm"
      aria-hidden
    >
      <Icon size={22} strokeWidth={1.75} />
    </div>
  );
};

export const WhyStoriaSection = () => {
  return (
    <Section id="why-storia" className="relative overflow-hidden">
      <SectionContainer>
        <SectionHeader
          eyebrow="Why Storia"
          title="What makes Storia different."
        />

        <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="flex h-full flex-col rounded-[2rem] border border-white/60 bg-white/45 p-7 shadow-[0_8px_40px_rgba(122,173,201,0.15)] backdrop-blur-sm sm:p-8">
                <CardIcon icon={card.icon} />
                <h3 className="mt-5 text-base font-bold leading-snug text-black sm:text-[1.05rem]">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-black75">
                  {card.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>
    </Section>
  );
};
