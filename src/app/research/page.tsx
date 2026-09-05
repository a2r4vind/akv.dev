import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Research — ${portfolioData.profile.name}`,
  description: "Peer-reviewed research papers and academic publications in AI, computer vision, and biometrics.",
};

export default function ResearchPage() {
  const { publications } = portfolioData;

  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="pt-32 pb-24 px-[5%] min-h-[calc(100vh-64px)]">
        <div className="max-w-[860px] mx-auto">
          <Reveal>
            <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-5 flex items-center gap-3.5">
              <span className="inline-block w-7 h-px bg-[var(--accent)]" />
              Inquiry
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-[clamp(2.6rem,5vw,3.8rem)] font-black text-[var(--text)] tracking-[-0.015em] mb-14">
              Research
            </h1>
          </Reveal>

          <div className="flex flex-col gap-8">
            {publications.map((pub, idx) => (
              <Reveal key={idx} delay={150 + idx * 100}>
                <div className="border border-[var(--border)] rounded-md p-7 md:p-9 bg-[var(--s2)] hover:border-[var(--border-hi)] transition-colors flex flex-col gap-5">
                  <div>
                    <span className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-[var(--accent)] block mb-2 font-medium">
                      {pub.venue}
                    </span>
                    <h2 className="font-display text-2xl font-bold text-[var(--text)] leading-tight">
                      {pub.title}
                    </h2>
                  </div>

                  <p className="text-[0.92rem] leading-[1.8] text-[var(--dim)]">
                    {pub.body}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {pub.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] flex justify-end">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-[var(--accent)] hover:text-white border border-[var(--accent)]/40 hover:bg-[var(--accent)] px-4 py-2 rounded-sm transition-all duration-200 inline-flex items-center gap-2"
                    >
                      <span>Read Paper</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
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
