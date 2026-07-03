"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Section, SectionContainer } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageFaq } from "@/lib/constants";

export const FAQPreviewSection = () => {
  return (
    <Section id="faq">
      <SectionContainer width="narrow">
        <SectionHeader eyebrow="FAQ" title="Questions? We've got you." />

        <FadeIn delay={0.1}>
          <FAQAccordion items={homepageFaq} />
        </FadeIn>
      </SectionContainer>
    </Section>
  );
};
