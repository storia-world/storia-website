import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  padding?: boolean;
  id?: string;
}

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  width?: "wide" | "narrow";
}

export const Section = ({
  children,
  className,
  padding = true,
  id,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        padding && "section-padding",
        id && "scroll-mt-24",
        className,
      )}
    >
      {children}
    </section>
  );
};

export const SectionContainer = ({
  children,
  className,
  width = "wide",
}: SectionContainerProps) => {
  return (
    <div
      className={cn(
        width === "wide" ? "container-wide" : "container-narrow",
        className,
      )}
    >
      {children}
    </div>
  );
};
