"use client";

import { Fragment } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => {
  const hasLineBreak = title.includes("\n");
  const titleLines = title.split("\n");

  return (
    <FadeIn
      className={cn(
        "mb-10 md:mb-12",
        align === "center" ? "text-center" : "text-left",
      )}
    >
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.1em] text-black75">
        — {eyebrow}
      </p>
      <h2
        className={cn(
          "font-fraunces text-4xl font-semibold leading-tight text-black sm:text-5xl",
          align === "left" && hasLineBreak && "max-w-2xl",
        )}
      >
        {hasLineBreak
          ? titleLines.map((line, index) => (
              <Fragment key={`${line}-${index}`}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))
          : title}
      </h2>
      {description && (
        <div
          className={cn(
            "mt-4 space-y-4 text-lg leading-relaxed text-black75",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description.split(/\n\n+/).map((paragraph) => (
            <p key={paragraph}>{paragraph.trim()}</p>
          ))}
        </div>
      )}
    </FadeIn>
  );
};
