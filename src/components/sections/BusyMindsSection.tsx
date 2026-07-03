"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionContainer } from "@/components/ui/Section";

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
              <p className="absolute bottom-6 left-6 font-fraunces text-3xl font-medium leading-tight text-white sm:bottom-8 sm:left-8 sm:text-4xl">
                Only 5 Minutes
                <br />a day
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="max-w-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.1em] text-black75">
              — Five minutes
            </p>

            <h2 className="font-fraunces text-4xl leading-[1.12] tracking-tight text-black sm:text-5xl lg:text-[3.25rem]">
              Built for <em className="font-normal italic">busy minds.</em> Not
              perfect ones.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-black75 sm:text-lg">
              <p>
                You don&apos;t need to be a writer. Or a planner. Or someone who
                journals.
              </p>
              <p>
                You just need{" "}
                <span className="font-semibold text-black">five minutes</span> —
                and your own attention.
              </p>
            </div>

            <Link
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r bg-blue px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.03] hover:shadow-soft-lg sm:px-10 sm:py-4 sm:text-base"
            >
              Try Storia for free
            </Link>
          </FadeIn>
        </div>
      </SectionContainer>
    </Section>
  );
};
