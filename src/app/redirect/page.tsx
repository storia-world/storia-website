import type { Metadata } from "next";
import { OfficialAppStoreBadge } from "@/components/ui/StoreBadges";

export const metadata: Metadata = {
  title: "Download Storia",
  description:
    "Download Storia on the App Store to accept your friend invite and start journaling.",
  robots: {
    index: false,
    follow: false,
  },
};

const RedirectPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center section-padding">
      <OfficialAppStoreBadge size="xl" />
    </section>
  );
};

export default RedirectPage;
