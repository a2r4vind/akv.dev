import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blog — ${portfolioData.profile.name}`,
  description: "Articles, technical frameworks, and essays on AI, engineering, and systems thinking.",
};

export default function BlogPage() {
  const { blogPosts } = portfolioData;

  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="pt-32 pb-24 px-[5%] min-h-[calc(100vh-64px)]">
        <div className="max-w-[860px] mx-auto">
          <Reveal>
            <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-5 flex items-center gap-3.5">
              <span className="inline-block w-7 h-px bg-[var(--accent)]" />
              Writing
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-[clamp(2.6rem,5vw,3.8rem)] font-black text-[var(--text)] tracking-[-0.015em] mb-14">
              Blog
            </h1>
          </Reveal>

          <div className="flex flex-col gap-6">
            {blogPosts.map((post, idx) => (
              <Reveal key={post.slug} delay={150 + idx * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block border border-[var(--border)] rounded-md p-8 bg-[var(--s2)] hover:border-[var(--border-hi)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between gap-4 mb-3 font-mono text-[0.62rem] tracking-[0.14em] uppercase text-[var(--dim)]">
                    <span>{post.timeAgo}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-display text-[1.6rem] font-extrabold text-[var(--text)] mb-3 leading-tight group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-[0.9rem] leading-[1.8] text-[var(--dim)] mb-5">
                    {post.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
