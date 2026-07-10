import Image from "next/image";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const OfficialAppStoreBadge = ({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "lg" | "xl";
}) => {
  return (
    <a
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex transition-transform hover:scale-[1.03] active:scale-[0.98]",
        className,
      )}
      aria-label="Download on the App Store"
    >
      <Image
        src="/downloadOnTheAppStore.svg"
        alt="Download on the App Store"
        width={540}
        height={160}
        className={cn(
          "w-auto object-contain",
          size === "xl" ? "h-[364px]" : size === "lg" ? "h-[164px]" : "h-[124px]",
        )}
      />
    </a>
  );
};

export const AppOfTheDayBadge = ({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "lg";
}) => {
  return (
    <Image
      src="/appOfTheDay.png"
      alt="App of the Day on the App Store"
      width={2607}
      height={1459}
      className={cn(
        "w-auto object-contain",
        size === "lg" ? "h-[80px]" : "h-[44px]",
        className,
      )}
    />
  );
};
