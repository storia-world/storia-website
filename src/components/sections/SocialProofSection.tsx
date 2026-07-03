"use client";

import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/FadeIn";
import { communityTestimonials } from "@/lib/constants";
import { Section, SectionContainer } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const QuoteMark = () => {
  return (
    <span className={"font-serif text-5xl leading-none text-blue"} aria-hidden>
      &ldquo;
    </span>
  );
};

const TestimonialBentoCard = ({
  name,
  detail,
  quote,
  avatar,
  featured,
}: (typeof communityTestimonials)[number]) => {
  const isFeatured = Boolean(featured);

  return (
    <article
      className={cn(
        "flex h-full flex-col justify-between rounded-[1.75rem] p-6 sm:p-7 bg-blue/35 text-black shadow-[0_8px_32px_rgba(122,173,201,0.12)]",
        isFeatured ? "min-h-[300px] lg:min-h-full lg:p-8" : "min-h-[180px]",
      )}
    >
      <div>
        <QuoteMark />
        <p
          className={cn(
            "mt-3 leading-relaxed text-black75",
            isFeatured ? "text-base sm:text-lg" : "text-sm",
          )}
        >
          {quote}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-black",
            isFeatured ? "bg-white/20" : "bg-blue/25",
          )}
        >
          {avatar}
        </div>
        <div>
          <p className={"text-sm font-semibold text-black"}>{name}</p>
          <p className={"text-xs text-black75"}>{detail}</p>
        </div>
      </div>
    </article>
  );
};

export const SocialProofSection = () => {
  const featured = communityTestimonials.find((t) => t.featured)!;
  const others = communityTestimonials.filter((t) => !t.featured);

  return (
    <Section id="testimonials">
      <SectionContainer className="relative">
        <FadeIn className="mb-10 md:mb-14">
          <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-black75">
            <span className="h-px w-8 bg-black75/40" aria-hidden />
            Loved by our community
          </p>
          <h2 className="max-w-xl font-fraunces text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
            Made for <em className="italic text-blue">real</em> humans, like
            you.
          </h2>
        </FadeIn>

        <StaggerChildren className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 lg:gap-5">
          <StaggerItem className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <TestimonialBentoCard {...featured} />
          </StaggerItem>

          {others.map((testimonial) => (
            <StaggerItem key={testimonial.name} className="lg:col-span-2">
              <TestimonialBentoCard {...testimonial} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>
    </Section>
  );
};
