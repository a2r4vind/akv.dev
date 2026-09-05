import { portfolioData } from "@/data/portfolio";
import { SkillsView } from "@/components/SkillsView";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Skills — ${portfolioData.profile.name}`,
  description: "Technical skills, machine learning frameworks, databases, and certifications.",
};

export default function SkillsPage() {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="pt-32 pb-24 px-[5%] min-h-[calc(100vh-64px)]">
        <SkillsView />
      </main>
      <Footer />
    </div>
  );
}
