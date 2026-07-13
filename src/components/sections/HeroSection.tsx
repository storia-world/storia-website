"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Section, SectionContainer } from "@/components/ui/Section";
import {
  AppOfTheDayBadge,
  OfficialAppStoreBadge,
} from "@/components/ui/StoreBadges";
import { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";

const lifeAreaTags: {
  label: string;
  icon: string;
  className: string;
}[] = [
    {
      label: "Health",
      icon: "🍏",
      className:
        "left-[2%] top-[26%] border-green-200/80 bg-green-50/95 text-green-900",
    },
    {
      label: "Career",
      icon: "🪜",
      className:
        "left-[34%] top-[4%] border-amber-200/80 bg-amber-50/95 text-amber-900",
    },
    {
      label: "Burnout",
      icon: "⚠️",
      className:
        "right-[2%] top-[10%] border-orange-200/80 bg-orange-50/95 text-orange-900",
    },
    {
      label: "Confidence",
      icon: "💪",
      className:
        "bottom-[18%] left-[4%] border-purple-200/80 bg-purple-50/95 text-purple-900",
    },
    {
      label: "Relationships",
      icon: "❤️",
      className: "right-[0%] top-[42%] border-amber-200/80 bg-amber-50/95 text-amber-900",
    },
    {
      label: "Resilience",
      icon: "🌱",
      className:
        "bottom-[12%] right-[12%] border-emerald-200/80 bg-emerald-50/95 text-emerald-900",
    },
  ];



const randomOffset = () => (Math.random() - 0.5) * 14;

const FloatingTag = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    let active = true;

    const drift = async () => {
      while (active) {
        await Promise.all([
          animate(x, randomOffset(), {
            duration: 2 + Math.random() * 2.5,
            ease: "easeInOut",
          }),
          animate(y, randomOffset(), {
            duration: 2 + Math.random() * 2.5,
            ease: "easeInOut",
          }),
        ]);
      }
    };

    void drift();

    return () => {
      active = false;
    };
  }, [x, y]);

  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
};

const HeroVideoVisual = () => {
  return (
    <div className="relative mx-auto flex h-[min(92vw,620px)] w-full max-w-[660px] items-center justify-center sm:h-[600px]">
      <div className="relative flex items-center justify-center">
        <div className="relative z-10 rounded-full bg-blue/40 sm:p-10 lg:p-14">
          <div className="relative z-10 rounded-full bg-blue/70 sm:p-10 lg:p-14">
            <div className="size-[280px] overflow-hidden rounded-full bg-blue/10 sm:size-[320px] lg:size-[380px]">
              <video
                src="/heroSectionVideo2.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Person smiling while journaling with Storia"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {lifeAreaTags.map((tag) => (
        <FloatingTag
          key={tag.label}
          className={cn(
            "absolute z-20 flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium shadow-[0_8px_24px_rgba(33,37,41,0.08)] backdrop-blur-sm sm:px-4 sm:py-2.5 sm:text-[0.95rem]",
            tag.className,
          )}
        >
          <span className="shrink-0 text-base leading-none" aria-hidden>
            {tag.icon}
          </span>
          {tag.label}
        </FloatingTag>
      ))}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <Section padding={false} id="home" className="relative -mt-16">
      <SectionContainer className="grid min-h-screen items-center gap-10 pb-28 pt-28 sm:pt-40 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.h1
            className="max-w-xl text-[2.25rem] font-fraunces leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:max-w-none lg:text-[3.25rem] xl:text-[3.75rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Find confidence, resilience and clarity.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-black75 sm:text-lg md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            Become the best version of yourself through a guided 5-minute ritual every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.44 }}
            className="flex flex-wrap items-center justify-center gap-8 lg:justify-start"
          >
            <OfficialAppStoreBadge size="lg" />
            <AppOfTheDayBadge size="lg" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/heroSectionImage1.png"
            alt="Woman using Storia outdoors with life area tags for career, confidence, health, relationships, and burnout"
            width={1200}
            height={1200}
            priority
            className="h-auto w-full max-w-[420px] rounded-[2rem] object-contain sm:max-w-[480px] lg:max-w-[520px]"
          />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <HeroVideoVisual />
        </motion.div> */}
      </SectionContainer >
    </Section >
  );
};
