import { portfolioData, Project } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects — ${portfolioData.profile.name}`,
  description: "Featured machine learning, cybersecurity, computer vision, and systems engineering projects.",
};

export default function ProjectsPage() {
  const { projects, tickerItems } = portfolioData;

  const typeConfig: Record<Project['type'], { bar: string; text: string }> = {
    cv: { bar: 'bg-cyan-500', text: 'text-cyan-400' },
    sec: { bar: 'bg-rose-500', text: 'text-rose-400' },
    ml: { bar: 'bg-blue-500', text: 'text-blue-400' },
    misc: { bar: 'bg-amber-500', text: 'text-amber-400' }
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="pt-32 pb-24 min-h-[calc(100vh-64px)]">
        {/* Title Header */}
        <div className="max-w-[1300px] mx-auto px-[5%] mb-8">
          <Reveal>
            <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-5 flex items-center gap-3.5">
              <span className="inline-block w-7 h-px bg-[var(--accent)]" />
              Artifacts
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-[clamp(2.6rem,5vw,3.8rem)] font-black text-[var(--text)] tracking-[-0.015em] mb-4">
              Projects
            </h1>
          </Reveal>
        </div>

        {/* Ticker Marquee Banner */}
        <div className="border-y border-[var(--border)] py-3.5 mb-24 overflow-hidden bg-[var(--s2)]/40">
          <div className="flex whitespace-nowrap ticker-track">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
              <span
                key={idx}
                className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-[var(--dim)] px-10 flex-shrink-0 flex items-center gap-3"
              >
                {item}
                <span className="text-[var(--accent)] font-bold">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Sticky Stacking Cards */}
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="flex flex-col gap-10 w-full pb-[25vh]">
            {projects.map((project, idx) => {
              const conf = typeConfig[project.type] || typeConfig.ml;
              return (
                <div
                  key={project.num}
                  className="sticky z-10 w-full"
                  style={{ top: `calc(12vh + ${idx * 36}px)` }}
                >
                  <Reveal delay={idx * 50}>
                    <div className="relative overflow-hidden border border-[var(--border)] rounded-xl p-8 sm:p-10 lg:px-12 lg:py-11 bg-[var(--s1)] hover:border-[var(--border-hi)] shadow-[0_-12px_45px_-15px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col items-center text-center backdrop-blur-md">
                      {/* Top Accent Bar */}
                      <span className={`absolute top-0 left-0 w-full h-[3px] ${conf.bar}`} />

                      <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-[var(--dim)] mb-3">
                        Project / {project.num}
                      </p>

                      <div className="flex items-center justify-center gap-3 mb-2">
                        <h3 className="font-display text-[1.6rem] sm:text-[1.85rem] font-extrabold text-[var(--text)] tracking-[-0.01em] leading-tight hover:text-[var(--accent)] transition-colors">
                          {project.github ? (
                            <a href={project.github} target="_blank" rel="noreferrer">
                              {project.name}
                            </a>
                          ) : (
                            project.name
                          )}
                        </h3>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[var(--dim)] hover:text-[var(--text)] transition-colors mt-0.5"
                            aria-label={`View ${project.name} on GitHub`}
                          >
                            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
                            </svg>
                          </a>
                        )}
                      </div>

                      <div className="flex flex-col items-center gap-3 mb-6">
                        <p className={`font-mono text-[0.66rem] uppercase tracking-wider font-semibold ${conf.text}`}>
                          {project.metric}
                        </p>
                      </div>

                      <p className="text-[0.92rem] leading-[1.75] text-[var(--dim)] max-w-[820px] mb-8">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap justify-center gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
