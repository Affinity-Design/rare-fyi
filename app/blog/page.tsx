"use client";

import { Suspense, useMemo, useState, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { posts as staticPosts } from "../../lib/static-posts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionDivider from "@/components/section-divider";

const categories = [
  { id: "all", label: "All Posts", icon: "📖" },
  { id: "tutorial", label: "Tutorials", icon: "📚" },
  { id: "education", label: "Learn", icon: "🎓" },
  { id: "news", label: "News", icon: "📰" },
  { id: "migration", label: "Migration", icon: "🔄" },
  { id: "security", label: "Security", icon: "🛡️" },
  { id: "utility", label: "Utility", icon: "⚡" },
];

function BlogHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeUp = (delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: {
            duration: 0.7,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          },
        };

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-end px-6 pt-28 pb-24 md:px-10 md:pb-20 overflow-hidden"
    >
      {/* Backgrounds */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(246,51,255,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(50,53,251,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 100% 100% at 50% 100%, rgba(50,153,251,0.05) 0%, transparent 50%),
            var(--color-void)
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 70%)",
        }}
      />

      {/* Floating orb */}
      <motion.div
        className="absolute -top-24 -right-24 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full animate-orb-float opacity-10 pointer-events-none"
        style={{
          y: orbY,
          background:
            "conic-gradient(from 0deg, #F633FF, #9432FB, #3235FB, #3299FB, #9432FB, #F633FF)",
          filter: "blur(100px)",
        }}
      />

      {/* Content */}
      <motion.div
        style={reducedMotion ? {} : { y: contentY, opacity: heroOpacity }}
        className="relative z-10 w-full max-w-[1100px] mx-auto"
      >
        <div className="max-w-[700px]">
          <motion.div
            {...fadeUp(0)}
            className="font-mono text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-rare mb-5 flex items-center gap-3"
          >
            <span className="w-6 md:w-8 h-px bg-rare" />
            Rare Insights
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-[clamp(36px,7vw,72px)] leading-[0.95] tracking-[-0.03em] font-extrabold mb-4"
          >
            The Rare Journal
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-base md:text-lg text-muted leading-relaxed max-w-[550px]"
          >
            Deep dives into fair distribution, AI trading agents, and the Rare
            Coin ecosystem on Base.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

function BlogContent() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(() => {
    const cat = searchParams.get("category");
    return cat && categories.some((c) => c.id === cat) ? cat : "all";
  });

  const filteredPosts = useMemo(() => {
    return staticPosts.filter((post) => {
      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "all" || post.tags?.includes(activeCategory);

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="relative mx-auto max-w-6xl px-6 md:px-10">
      {/* Search and Filter Header */}
      <header className="mb-12 rounded-3xl border border-white/10 bg-[linear-gradient(160deg,rgba(19,25,32,0.82),rgba(8,11,15,0.9))] px-6 py-10 shadow-[0_24px_65px_rgba(0,0,0,0.35)] backdrop-blur-xl md:mb-14 md:px-10 md:py-12">
        <div className="mx-auto mb-7 max-w-xl">
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <div className="group relative">
            <input
              id="blog-search"
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-void/70 px-5 py-3.5 pr-20 text-text-primary placeholder:text-text-tertiary/80 transition-all duration-300 focus:border-rare-light/60 focus:outline-none focus:ring-2 focus:ring-rare-light/25 group-hover:border-white/20 md:px-6"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] text-text-tertiary md:right-5">
              SEARCH
            </span>
          </div>
        </div>

        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rare-light/45 ${
                activeCategory === cat.id
                  ? "border-transparent bg-iridescent text-white shadow-[0_8px_30px_rgba(148,50,251,0.45)]"
                  : "border-white/10 bg-void-light/30 text-text-tertiary hover:border-white/20 hover:bg-void-light/50 hover:text-text"
              }`}
            >
              <span className="mr-1.5" aria-hidden>
                {cat.icon}
              </span>
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      <div
        className="mb-6 flex flex-col gap-2 rounded-2xl border border-white/10 bg-[linear-gradient(110deg,rgba(255,255,255,0.045),rgba(255,255,255,0.01))] px-4 py-3.5 text-sm text-text-tertiary shadow-[0_14px_30px_rgba(0,0,0,0.22)] md:mb-9 md:flex-row md:items-center md:justify-between md:px-5"
        aria-live="polite"
      >
        <p className="font-medium text-text-secondary">
          {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
        </p>
        <p className="text-xs tracking-[0.14em] text-text-tertiary/85 uppercase">Curated for the Rare community</p>
      </div>

      {filteredPosts.length > 0 ? (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7" aria-label="Blog posts">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(19,25,32,0.9),rgba(8,11,15,0.96))] p-0 shadow-[0_16px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-rare-light/45 hover:shadow-[0_24px_56px_rgba(50,153,251,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rare-light/45"
            >
              <div className="pointer-events-none absolute -inset-x-10 top-0 h-24 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(148,50,251,0.17),rgba(50,53,251,0.08),rgba(8,11,15,0.35))]">
                <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-void/70 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-text-tertiary uppercase backdrop-blur-sm">
                  Featured
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold tracking-[0.24em] text-text-tertiary/85 uppercase transition-transform duration-500 group-hover:scale-105">
                  Rare Media
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold tracking-[0.16em] text-rare-pink uppercase">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span>{post.readingTime}</span>
                </div>

                <h2 className="mb-3 text-xl font-bold leading-snug text-text transition-colors duration-300 group-hover:text-gradient md:text-[1.6rem]">
                  {post.title}
                </h2>

                <p className="mb-7 line-clamp-3 flex-1 text-sm leading-relaxed text-text-tertiary md:text-[15px]">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                  <span className="font-semibold tracking-[0.12em] text-text uppercase">Read Story</span>
                  <span className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold tracking-[0.12em] text-text-tertiary uppercase transition-all duration-300 group-hover:border-rare-light/45 group-hover:text-text">
                    Open
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-glass px-6 py-16 text-center shadow-[0_20px_45px_rgba(0,0,0,0.28)]">
          <div className="mb-4 text-5xl" aria-hidden>
            🔍
          </div>
          <h3 className="mb-2 text-2xl font-bold text-text">No articles found</h3>
          <p className="mb-6 text-text-tertiary">Try adjusting your search or filter</p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("all");
            }}
            className="rounded-full border border-white/15 bg-void-light/30 px-6 py-3 font-medium text-text transition-colors duration-200 hover:bg-void-light/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rare-light/45"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-20 rounded-3xl border border-cyan-500/25 bg-gradient-to-b from-cyan-500/8 via-transparent to-transparent p-10 text-center shadow-[0_16px_40px_rgba(0,0,0,0.3)] md:mt-24 md:p-12">
        <h3 className="mb-3 text-3xl font-bold text-text md:text-4xl">Want to learn more?</h3>
        <p className="mx-auto mb-8 max-w-2xl text-text-tertiary">
          Join the community and help us build the future of fair distribution on Base Chain.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="https://t.me/rarecoin" className="btn-glass px-8 py-3">
            Telegram
          </Link>
          <Link href="https://rare.claims" className="btn-glass border-pink-500/50 px-8 py-3">
            Get Claiming
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#050505]">
      {/* Global noise overlay is handled in globals.css */}

      {/* Floating Navigation */}
      <Navbar />

      {/* Hero Section */}
      <BlogHero />

      <SectionDivider label="Articles" />

      {/* Blog Content - wrapped in Suspense for useSearchParams */}
      <Suspense fallback={<div className="min-h-screen bg-void" />}>
        <BlogContent />
      </Suspense>

      {/* Footer */}
      <Footer />
    </main>
  );
}
