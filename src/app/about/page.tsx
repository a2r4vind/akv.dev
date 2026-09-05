import { portfolioData } from "@/data/portfolio";
import { AboutView } from "@/components/AboutView";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About — ${portfolioData.profile.name}`,
  description: portfolioData.profile.bioSubtitle,
};

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="pt-32 pb-24 px-[5%] min-h-[calc(100vh-64px)]">
        <AboutView />
      </main>
      <Footer />
    </div>
  );
}

