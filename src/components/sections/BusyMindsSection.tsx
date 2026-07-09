"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const BusyMindsSection = () => {
  return (
    <Section id="busy-minds">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <FadeIn className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_64px_rgba(33,37,41,0.12)] ring-1 ring-black/5">
              <Image
                src="/busyMindsImage.png"
                alt="Woman checking her phone outdoors with a Storia daily spark notification"
                width={1916}
                height={1912}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
          </FadeIn>

          <div className="max-w-xl">
            <SectionHeader
              align="left"
              eyebrow="Five minutes"
              title="Built for busy minds. Not perfect ones."
              description={`You don't need to be a writer. Or a planner. Or someone who journals.\n\nYou just need five minutes — and your own attention.`}
            />

            <Link
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r bg-blue px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.03] hover:shadow-soft-lg sm:px-10 sm:py-4 sm:text-base"
            >
              Try Storia for free
            </Link>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};
