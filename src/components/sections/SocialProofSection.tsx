"use client";

import Image from "next/image";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/FadeIn";
import { communityTestimonials } from "@/lib/constants";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const stats = [
  {
    value: "45",
    suffix: "M",
    label: "Words written",
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
  profilePicture,

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
        <Image
          src={profilePicture}
          alt=""
          width={900}
          height={1200}
          className="h-9 w-9 shrink-0 rounded-full object-cover"
        />
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
        <div className="mb-10 grid items-center gap-10 md:mb-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Loved by our community"
              title={`The ritual the world is\ndoing.`}
            />
            <StaggerChildren className="grid gap-5 sm:grid-cols-3 sm:gap-6">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <article className="flex min-h-[160px] flex-col items-center justify-center rounded-card-lg border border-black/10 bg-beige px-6 py-10 text-center sm:min-h-[180px]">
                    <p className="flex items-baseline justify-center gap-1 font-fraunces text-3xl font-semibold text-black sm:text-4xl">
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
                    <p className="mt-3 px-4 text-xs font-medium uppercase tracking-[0.14em] text-black75">
                      {stat.label}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          <FadeIn delay={0.1} className="flex justify-center lg:justify-end">
            <Image
              src="/CommunityNetwork.png"
              alt="Storia community members connected in a network"
              width={1000}
              height={460}
              className="h-auto w-full max-w-xs rounded-[2rem] object-contain sm:max-w-sm md:max-w-md lg:max-w-none"
            />
          </FadeIn>
        </div>

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
