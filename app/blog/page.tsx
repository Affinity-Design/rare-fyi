import Link from "next/link";
import { getPosts } from "../../lib/posts";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen px-6 py-24 bg-void">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-gradient mb-6">
            The Rare Journal
          </h1>
          <p className="text-text-tertiary text-xl max-w-2xl mx-auto">
            Deep dives into fair distribution, AI trading agents, and the Rare Coin ecosystem on Base.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group glass-card overflow-hidden hover:border-pink-500/50 transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden bg-void/50">
                 <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent z-10 opacity-60" />
                 {/* Image Placeholder - To be replaced with Gemini Generated Assets */}
                 <div className="absolute inset-0 flex items-center justify-center text-text-tertiary group-hover:scale-110 transition-transform duration-700">
                    <span className="text-sm tracking-widest uppercase">Rare Media</span>
                 </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-xs tracking-widest uppercase text-pink-500 font-bold">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-void-light" />
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-gradient transition-all duration-300 leading-tight">
                  {post.title}
                </h2>
                <p className="text-text-tertiary line-clamp-3 mb-6 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-text-primary font-bold text-sm">
                  READ STORY 
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO Callout */}
        <div className="mt-32 p-12 glass-card border-cyan-500/20 text-center bg-gradient-to-b from-cyan-500/5 to-transparent">
          <h3 className="text-3xl font-bold text-text-primary mb-4">Want to learn more?</h3>
          <p className="text-text-tertiary mb-8">Join the community and help us build the future of fair distribution on Base Chain.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://t.me/rarecoin" className="btn-glass px-8 py-3">Telegram</Link>
            <Link href="https://rare.claims" className="btn-glass px-8 py-3 border-pink-500/50">Get Claiming</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
