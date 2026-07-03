import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const Logo = ({
  className,
  href = "/",
  onClick,
}: LogoProps) => {
  const content = (
    <>
      <Image
        src="/logo.png"
        alt="Storia"
        width={36}
        height={36}
        className="rounded-xl"
        priority
      />
      <span className="font-fraunces text-xl font-semibold text-black">
        Storia
      </span>
    </>
  );

  const classes = cn("flex items-center gap-2", className);

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(classes, "transition-opacity hover:opacity-80")}
      >
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
};
