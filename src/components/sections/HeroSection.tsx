"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionContainer } from "@/components/ui/Section";
import {
  AppOfTheDayBadge,
  OfficialAppStoreBadge,
} from "@/components/ui/StoreBadges";

export const HeroSection = () => {
  return (
    <Section padding={false} id="home" className="relative -mt-16">
      <SectionContainer className="grid min-h-screen items-center gap-10 pb-28 pt-28 sm:pt-32 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.h1
            className="max-w-xl text-[2.25rem] font-fraunces leading-[1.12] tracking-tight text-black sm:text-5xl md:text-6xl lg:max-w-none lg:text-[3.25rem] xl:text-[3.75rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            You&apos;re not <em className="text-gradient-hero">lost,</em>
            <br /> you&apos;re <em className="text-gradient-hero">becoming</em>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-black75 sm:text-lg md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            A 5-minute ritual for the ones in a season of change.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.44 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-8 md:mt-10 lg:justify-start"
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
            src="/heroImage.png"
            alt="Person smiling while holding coffee and phone, with life area tags for health, career, relationships, and burnout"
            width={1302}
            height={1308}
            priority
            className="h-auto w-full max-w-[420px] rounded-[2rem] object-contain sm:max-w-[480px] lg:max-w-[520px]"
          />
        </motion.div>
      </SectionContainer>
    </Section>
  );
};
