"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { posts as staticPosts } from "../../lib/static-posts";

const categories = [
  { id: "all", label: "All Posts", icon: "📖" },
  { id: "tutorial", label: "Tutorials", icon: "📚" },
  { id: "education", label: "Learn", icon: "🎓" },
  { id: "news", label: "News", icon: "📰" },
  { id: "migration", label: "Migration", icon: "🔄" },
  { id: "security", label: "Security", icon: "🛡️" },
  { id: "utility", label: "Utility", icon: "⚡" },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read category from URL on mount
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && categories.some(c => c.id === cat)) {
      setActiveCategory(cat);
    }
  }, []);

  const filteredPosts = useMemo(() => {
    return staticPosts.filter((post) => {
      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory =
        activeCategory === "all" ||
        post.tags?.includes(activeCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  if (!mounted) {
    return (
      <main className="min-h-screen px-6 py-24 bg-void">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-pulse text-text-tertiary">Loading...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-24 bg-void">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-gradient mb-6">
            The Rare Journal
          </h1>
          <p className="text-text-tertiary text-xl max-w-2xl mx-auto mb-8">
            Deep dives into fair distribution, AI trading agents, and the Rare Coin ecosystem on Base.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-6 py-4 bg-void/50 border border-void-light rounded-full text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-text-tertiary">
                ⌘K
              </span>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                    : "bg-void-light/30 text-text-tertiary hover:text-text-primary hover:bg-void-light/50"
                }`}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-text-tertiary text-sm">
          {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass-card overflow-hidden hover:border-pink-500/50 transition-all duration-500"
              >
                <div className="aspect-video relative overflow-hidden bg-void/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent z-10 opacity-60" />
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
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">No articles found</h3>
            <p className="text-text-tertiary mb-6">Try adjusting your search or filter</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="px-6 py-3 rounded-full bg-void-light/30 text-text-primary hover:bg-void-light/50 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

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
