import Link from "next/link";
import { getPostBySlug } from "../../../lib/posts";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-24 bg-void">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-12">
          <Link 
            href="/blog" 
            className="text-text-tertiary hover:text-text-primary transition-colors flex items-center gap-2 font-medium"
          >
            <span>←</span> Back to Journal
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 text-pink-500 font-bold text-xs tracking-widest uppercase mb-6">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-void-light" />
            <span>By {post.author}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-8 leading-tight">
            {post.title}
          </h1>
          <p className="text-text-tertiary text-xl leading-relaxed italic border-l-4 border-cyan-500 pl-6 py-2 bg-cyan-500/5 rounded-r-lg">
            {post.description}
          </p>
        </header>

        {/* Post Content */}
        <article className="prose prose-invert prose-pink max-w-none">
          <div className="text-text-secondary text-lg leading-loose space-y-8 whitespace-pre-wrap">
            {post.body}
          </div>
        </article>

        {/* Post Footer */}
        <footer className="mt-24 pt-12 border-t border-void-light">
          <div className="p-12 glass-card border-pink-500/20 text-center bg-gradient-to-b from-pink-500/5 to-transparent">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Start your journey with Rare Coin.</h3>
            <p className="text-text-tertiary mb-8">Claim your RARE on Base Chain and join the fair distribution movement.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://t.me/rarecoin" className="btn-glass px-8 py-3">Telegram</Link>
              <Link href="https://rare.claims" className="btn-glass px-8 py-3 border-cyan-500/50">Visit rare.claims</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
