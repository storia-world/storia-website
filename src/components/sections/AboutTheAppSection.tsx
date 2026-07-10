"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const slides = [
  {
    number: "01",
    title: "No blank pages, no judgment",
    description:
      "Open Storia and check in. Sunny meets you where you are — no waiting, no pressure to perform.",
    image: "/checkinFrame.png",
    alt: "Hand holding a phone showing Storia's daily check-in screen",
  },
  {
    number: "02",
    title: "Five minutes, three rituals",
    description:
      "The Magic 3 — Check-in, Daily Storia, Gratitude. A bite-sized practice built on evidence-based reflection.",
    image: "/homepageFrame.png",
    alt: "Hand holding a phone showing Storia's home screen with daily rituals",
  },
  {
    number: "03",
    title: "Progress at your pace, your way",
    description:
      "Life Arc and Weekly Review surface real patterns across your life — clarity you can actually use.",
    image: "/insightsFrame.png",
    alt: "Hand holding a phone showing Storia's emotional wellbeing insights",
  },
];

const AUTO_ADVANCE_MS = 5000;

export const AboutTheAppSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  const selectSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Section id="about-the-app" className="relative overflow-hidden">
      <SectionContainer className="relative">
        <div className="relative z-20">
          <SectionHeader
            align="left"
            eyebrow="How storia works"
            title="Growth needs to be accessible"
          />
        </div>

        <FadeIn delay={0.1}>
          <div className="relative grid items-end gap-10 lg:grid-cols-[minmax(0,50%)_minmax(0,50%)] lg:gap-14 xl:gap-20">
            <div className="relative z-0 -ml-5 flex min-h-[400px] items-end justify-start overflow-visible sm:-ml-8 sm:min-h-[460px] lg:-mb-28 lg:ml-0 lg:min-h-[520px] xl:min-h-[560px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  className="flex w-full items-end justify-start"
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={1963}
                    height={2073}
                    className="h-auto w-full max-w-[360px] object-contain object-left-bottom sm:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative z-10 flex flex-col gap-2 sm:gap-3">
              {slides.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => selectSlide(index)}
                    className={cn(
                      "w-full rounded-[1.25rem] px-5 py-5 text-left transition-colors duration-300 sm:px-6 sm:py-6",
                      isActive
                        ? "bg-blue/35"
                        : "bg-transparent hover:bg-blue/15",
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <h3
                      className={cn(
                        "font-fraunces text-xl font-semibold leading-snug text-black sm:text-2xl",
                        !isActive && "text-black/90",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-black75 sm:text-base">
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </Section>
  );
};
