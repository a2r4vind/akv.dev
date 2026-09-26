import { portfolioData } from "@/data/portfolio";
import { ResumeView } from "@/components/ResumeView";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume — ${portfolioData.profile.name}`,
  description: `Curriculum Vitae and background of ${portfolioData.profile.name}. Review experience, research at ISRO SAC, projects, and download the official resume PDF.`,
  openGraph: {
    title: `Resume — ${portfolioData.profile.name}`,
    description: `Curriculum Vitae of ${portfolioData.profile.name} — AIML Engineer & AI Researcher.`,
  },
};

export default function ResumePage() {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="pt-28 pb-20 px-[5%] min-h-[calc(100vh-64px)]">
        <ResumeView />
      </main>
      <Footer />
    </div>
  );
}
