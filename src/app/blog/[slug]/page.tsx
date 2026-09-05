import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = portfolioData.blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — ${portfolioData.profile.name}`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = portfolioData.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col justify-between">
      <main className="pt-32 pb-24 px-[5%] min-h-[calc(100vh-64px)]">
        <article className="max-w-[780px] mx-auto">
          {/* Back link */}
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--accent)] hover:underline mb-8"
            >
              <span>← Back to all articles</span>
            </Link>
          </Reveal>

          {/* Post Header */}
          <Reveal delay={100}>
            <div className="flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--dim)] mb-4">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-black text-[var(--text)] tracking-[-0.015em] leading-[1.05] mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-[var(--border)]">
              {post.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Post Body Content */}
          <Reveal delay={200}>
            <div className="text-[0.98rem] leading-[1.9] text-[var(--dim)] [&_h1]:text-[var(--text)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[var(--text)] [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[var(--text)] [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-5 [&_strong]:text-[var(--text)] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_li]:mb-2 [&_a]:text-[var(--accent)] [&_a]:underline">
              {post.content.split('\n\n').map((block, i) => {
                const trimmed = block.trim();
                if (trimmed.startsWith('# ')) {
                  return null; // already rendered H1 in header
                }
                if (trimmed.startsWith('## ')) {
                  return <h2 key={i}>{trimmed.replace('## ', '')}</h2>;
                }
                if (trimmed.startsWith('### ')) {
                  return <h3 key={i}>{trimmed.replace('### ', '')}</h3>;
                }
                if (trimmed.startsWith('- ')) {
                  const items = trimmed.split('\n- ').map(item => item.replace(/^- /, ''));
                  return (
                    <ul key={i}>
                      {items.map((it, idx) => (
                        <li key={idx}>{it}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{trimmed}</p>;
              })}
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </div>
  );
}
