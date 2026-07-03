import Image from "next/image";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AppleLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M16.52 12.63c-.02-2.17 1.77-3.21 1.85-3.26-1.01-1.47-2.58-1.67-3.13-1.7-1.33-.14-2.6.79-3.27.79-.68 0-1.72-.77-2.83-.75-1.46.02-2.8.84-3.55 2.14-1.52 2.63-.39 6.53 1.09 8.67.72 1.04 1.58 2.21 2.71 2.17 1.09-.04 1.5-.7 2.82-.7 1.32 0 1.69.7 2.83.68 1.17-.02 1.91-1.06 2.62-2.1.82-1.2 1.16-2.37 1.18-2.43-.03-.01-2.26-.87-2.28-3.44zM13.58 3.8c.6-.72 1-1.73.89-2.73-.86.03-1.9.57-2.52 1.29-.55.64-1.04 1.67-.91 2.65.96.07 1.94-.49 2.54-1.21z" />
    </svg>
  );
};

export const OfficialAppStoreBadge = ({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "lg";
}) => {
  const isLarge = size === "lg";

  return (
    <a
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-[10px] bg-black text-white transition-transform hover:scale-[1.03] active:scale-[0.98]",
        isLarge ? "min-h-[56px] gap-[10px] px-5 py-3" : "min-h-[40px] gap-2 px-3.5 py-2",
        className,
      )}
      aria-label="Download on the App Store"
    >
      <AppleLogo
        className={cn(
          "shrink-0",
          isLarge ? "h-[30px] w-[30px]" : "h-[22px] w-[22px]",
        )}
      />
      <div className="flex flex-col justify-center gap-px text-left leading-none">
        <span
          className={cn("tracking-wide", isLarge ? "text-xs" : "text-[10px]")}
        >
          Download on the
        </span>
        <span
          className={cn(
            "font-semibold tracking-tight",
            isLarge ? "text-[21px] leading-none" : "text-[17px] leading-none",
          )}
        >
          App Store
        </span>
      </div>
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
