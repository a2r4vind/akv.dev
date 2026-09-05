import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Experience — ${portfolioData.profile.name}`,
  description: "Work history, engineering internships, and research experience.",
};

export default function ExperiencePage() {
  const { experiences } = portfolioData;

  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="pt-32 pb-24 px-[5%] min-h-[calc(100vh-64px)]">
        <div className="max-w-[860px] mx-auto">
          <Reveal>
            <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-5 flex items-center gap-3.5">
              <span className="inline-block w-7 h-px bg-[var(--accent)]" />
              History
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-[clamp(2.6rem,5vw,3.8rem)] font-black text-[var(--text)] tracking-[-0.015em] mb-14">
              Experience
            </h1>
          </Reveal>

          <div className="flex flex-col gap-12 relative">
            {experiences.map((exp, idx) => (
              <Reveal key={idx} delay={150 + idx * 100}>
                <div className="relative pl-6 md:pl-8 border-l border-[var(--border)] pb-4">
                  {/* Glowing Node Dot */}
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />

                  <div className="border border-[var(--border)] rounded-md p-7 md:p-9 bg-[var(--s2)] hover:border-[var(--border-hi)] transition-colors flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
                      <div>
                        <h2 className="font-display text-2xl font-bold text-[var(--text)]">
                          {exp.role}
                        </h2>
                        <p className="font-mono text-sm text-[var(--accent)] mt-0.5 font-medium">
                          {exp.org}
                        </p>
                      </div>

                      <span className="font-mono text-[0.68rem] tracking-wider uppercase px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--s1)] text-[var(--dim)] w-fit">
                        {exp.badge}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      {exp.points.map((pt, pIdx) => (
                        <p key={pIdx} className="text-[0.92rem] leading-[1.75] text-[var(--dim)]">
                          {pt}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border)]">
                      {exp.chips.map((c) => (
                        <span key={c} className="chip">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
