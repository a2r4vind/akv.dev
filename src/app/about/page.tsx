import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About — ${portfolioData.profile.name}`,
  description: portfolioData.profile.bioSubtitle,
};

export default function AboutPage() {
  const { profile } = portfolioData;

  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="pt-32 pb-24 px-[5%] min-h-[calc(100vh-64px)]">
        <div className="max-w-[860px] mx-auto">
          <Reveal>
            <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-5 flex items-center gap-3.5">
              <span className="inline-block w-7 h-px bg-[var(--accent)]" />
              Identity
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-[clamp(2.6rem,5vw,3.8rem)] font-black text-[var(--text)] tracking-[-0.015em] mb-14">
              About
            </h1>
          </Reveal>

          <div className="flex flex-col gap-12">
            {/* Bio Section */}
            <Reveal delay={200}>
              <div className="border border-[var(--border)] rounded-md p-8 md:p-10 bg-[var(--s2)] flex flex-col gap-5 hover:border-[var(--border-hi)] transition-colors">
                <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.8] text-[var(--dim)]">
                  {profile.bioParagraphs.map((para, i) => (
                    <p key={i} className="text-[var(--dim)]">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="pt-6 mt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--dim)]">
                  <div>
                    <span className="text-[var(--text)] uppercase tracking-wider font-semibold">Education:</span>{' '}
                    <span>{profile.education}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text)] uppercase tracking-wider font-semibold">Location:</span>{' '}
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Interests Section */}
            <Reveal delay={300}>
              <div>
                <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-5 flex items-center gap-3.5">
                  <span className="inline-block w-7 h-px bg-[var(--accent)]" />
                  Interests & Hobbies
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {profile.interests.map((interest, i) => (
                    <div
                      key={i}
                      className="border border-[var(--border)] rounded-md p-5 bg-[var(--s1)] hover:border-[var(--border-hi)] hover:-translate-y-1 transition-all duration-300"
                    >
                      <h3 className="font-display text-lg font-bold text-[var(--text)] mb-1">
                        {interest.label}
                      </h3>
                      <p className="font-mono text-xs text-[var(--dim)] leading-relaxed">
                        {interest.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
