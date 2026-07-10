"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const features = [
  {
    src: "/features1.png",
    alt: "Capture thoughts as they happen with voice reflections",
  },
  {
    src: "/features2.png",
    alt: "Meet the person you're becoming with future self reflections",
  },
  {
    src: "/features3.png",
    alt: "See patterns you might miss with weekly insights",
  },
  {
    src: "/features4.png",
    alt: "Watch yourself evolve over time with Life Arc",
  },
  {
    src: "/features5.png",
    alt: "Revisit moments that shaped you with memories",
  },
  {
    src: "/features6.png",
    alt: "Ask Sunny what you've been missing",
  },
];

export const FeaturesCarouselSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);

    const cards = container.querySelectorAll<HTMLElement>("[data-carousel-card]");
    if (!cards.length) return;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    const card = container?.querySelector<HTMLElement>(
      `[data-carousel-card="${index}"]`,
    );
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const scrollByDirection = (direction: "left" | "right") => {
    const nextIndex =
      direction === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, features.length - 1);
    scrollToIndex(nextIndex);
  };

  return (
    <Section id="features">
      <SectionContainer>
        <SectionHeader
          align="left"
          eyebrow="The experience"
          title={`Built for the way you\nactually live.`}
        />

        <FadeIn delay={0.1}>
          <div className="relative -mr-5 sm:-mr-8 lg:-mr-12">
            <div
              ref={scrollRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-0 pr-5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 sm:pr-8 lg:pr-12 [&::-webkit-scrollbar]:hidden"
            >
              {features.map((feature, index) => (
                <article
                  key={feature.src}
                  data-carousel-card={index}
                  className="w-[min(72vw,280px)] shrink-0 snap-start sm:w-[300px] lg:w-[320px]"
                >
                  <Image
                    src={feature.src}
                    alt={feature.alt}
                    width={1300}
                    height={1900}
                    className="aspect-[13/19] h-auto w-full rounded-[1.75rem] object-cover shadow-[0_12px_48px_rgba(33,37,41,0.12)] ring-1 ring-black/5"
                  />
                </article>
              ))}
            </div>

            {canScrollLeft && (
              <button
                type="button"
                onClick={() => scrollByDirection("left")}
                className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-[0_4px_24px_rgba(33,37,41,0.12)] transition-transform hover:scale-105 sm:flex"
                aria-label="Previous feature"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2} />
              </button>
            )}

            {canScrollRight && (
              <button
                type="button"
                onClick={() => scrollByDirection("right")}
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-[0_4px_24px_rgba(33,37,41,0.12)] transition-transform hover:scale-105"
                aria-label="Next feature"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2} />
              </button>
            )}
          </div>

          <div className="mt-8 flex justify-center gap-2.5">
            {features.map((feature, index) => (
              <button
                key={feature.src}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "h-2.5 w-2.5 bg-black"
                    : "h-2 w-2 bg-black/20 hover:bg-black/35",
                )}
                aria-label={`Go to feature ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </FadeIn>
      </SectionContainer>
    </Section>
  );
};
