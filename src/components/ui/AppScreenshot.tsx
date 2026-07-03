import Image from "next/image";
import { cn } from "@/lib/utils";

interface AppScreenshotProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const AppScreenshot = ({
  src,
  alt,
  className,
  priority = false,
}: AppScreenshotProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Image
        src={src}
        alt={alt}
        width={390}
        height={844}
        priority={priority}
        className="h-auto w-auto max-h-[340px] object-contain drop-shadow-[0_12px_40px_rgba(33,37,41,0.12)] sm:max-h-[360px]"
      />
    </div>
  );
};
