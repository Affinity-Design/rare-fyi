"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";

/* ── Pricing Tiers ── */
const tiers = [
  {
    tier: "Explorer",
    name: "New To Crypto",
    price: "Free",
    period: "Just need a Base wallet + ETH",
    featured: false,
    features: [
      "Setup free Base-compatible wallet",
      "BrightID verification guide",
      "First claim walkthrough",
      "Community support access",
    ],
    cta: "Get Started Free",
    href: "#",
  },
  {
    tier: "Farmer",
    name: "Daily Claimer",
    price: "Claim",
    period: "Equal share of 100 RARE per day",
    featured: true,
    features: [
      "Daily claim via Rarify Fountain App on Base",
      "Equal split with all claimers",
      "Base Chain — sub-2s, sub-cent fees",
      "1 wallet, 1 claim per period",
      "Accumulate for staking",
    ],
    cta: "Start Claiming",
    href: "#claim",
  },
  {
    tier: "Investor",
    name: "Staker + Holder",
    price: "Stake",
    period: "Weighted share of staking rewards",
    featured: false,
    features: [
      "Stake RARE for weighted rewards",
      "Daily trading fee dividends",
      "Additional RARE over set weeks",
      "Rare Lotto participation",
    ],
    cta: "Start Staking",
    href: "#stake",
  },
];

/* ── CTA Cards ── */
const ctaCards = [
  {
    icon: "📚",
    title: "Tutorials & FAQs",
    desc: "Step-by-step guides for wallet setup, BrightID verification, claiming, and staking.",
  },
  {
    icon: "💬",
    title: "Support Community",
    desc: "Join the RARE Coin community for live support, news, and roadmap updates.",
  },
  {
    icon: "📊",
    title: "Price Chart",
    desc: "Track $RARE price in real time on our integrated exchange dashboard.",
  },
  {
    icon: "🗺️",
    title: "Roadmap",
    desc: "See what's coming: Lotto, new chain integrations and more.",
  },
];

/* ── Base Stats ── */
const baseStats = [
  { val: "<2s", label: "Block Time" },
  { val: "<$0.001", label: "Avg Fee" },
  { val: "13M+", label: "Daily Txns" },
  { val: "$4.7B", label: "TVL" },
];

const whyBase = [
  "🔒 Ethereum security via optimistic rollup",
  "⚡ 10× cheaper than Ethereum mainnet",
  "🌐 Built & backed by Coinbase",
  "🔗 EVM-compatible — same tools, new speed",
  "🏆 #1 L2 by revenue in 2024 & 2025",
];

export default function Pricing() {
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);
  const baseRef = useRef(null);
  const pricingInView = useInView(pricingRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });
  const baseInView = useInView(baseRef, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  const fadeUp = (inView: boolean, delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: {
            duration: 0.6,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          },
        };

  return (
    <>
      {/* ── Pricing Grid ── */}
      <section
        ref={pricingRef}
        id="apps"
        className="px-6 py-16 md:px-15 md:py-30 max-w-[1100px] mx-auto"
      >
        <motion.div {...fadeUp(pricingInView, 0)}>
          <div className="font-mono text-[10px] tracking-[0.5em] uppercase text-rare mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-rare" />
            Get Started
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
            Choose your
            <br />
            <em className="font-serif italic font-light text-[1.1em]">
              path in.
            </em>
          </h2>
          <p className="text-base md:text-lg text-muted leading-[1.7] max-w-[600px]">
            Whether you&apos;re brand new to crypto or a seasoned DeFi farmer,
            there&apos;s a path for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-12 md:mt-16">
          {tiers.map((card, i) => (
            <motion.div
              key={card.tier}
              {...fadeUp(pricingInView, 0.1 + i * 0.08)}
              className={`rounded-3xl p-7 md:p-9 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                card.featured
                  ? "bg-gradient-to-br from-rare-pink/8 via-rare/12 to-rare-blue/6 border border-rare/35 shadow-[0_0_40px_rgba(148,50,251,0.12)]"
                  : "bg-surface border border-border hover:border-rare/25"
              }`}
            >
              {/* "Most Popular" badge */}
              {card.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-iridescent-h text-white text-[10px] font-bold tracking-[0.08em] uppercase whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="text-xs tracking-[0.2em] uppercase text-muted mb-2">
                {card.tier}
              </div>
              <div className="text-2xl font-extrabold mb-5 text-text">
                {card.name}
              </div>

              <div
                className={`font-mono text-[42px] md:text-[48px] font-bold leading-none mb-2 ${
                  card.featured ? "text-gradient" : "text-text"
                }`}
              >
                {card.price}
              </div>
              <div className="text-sm text-muted mb-8">{card.period}</div>

              <ul className="flex flex-col gap-3 mb-8 list-none">
                {card.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-muted"
                  >
                    <span className="text-green text-xs">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={card.href}
                className={`block w-full py-3.5 rounded-full text-center font-bold text-[13px] uppercase tracking-[0.08em] no-underline transition-all duration-200 ${
                  card.featured
                    ? "bg-iridescent text-white hover:opacity-85"
                    : "border border-border-bright text-text hover:bg-glass-hover hover:border-rare/40"
                }`}
              >
                {card.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        ref={ctaRef}
        className="bg-surface border-t border-b border-border py-16 md:py-30 px-6 md:px-15 text-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(148,50,251,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-1 max-w-[700px] mx-auto">
          <motion.div
            {...fadeUp(ctaInView, 0)}
            className="font-mono text-[10px] tracking-[0.5em] uppercase text-rare mb-4 flex items-center gap-3 justify-center"
          >
            <span className="w-5 h-px bg-rare" />
            Not Sure Where To Start
            <span className="w-5 h-px bg-rare" />
          </motion.div>
          <motion.h2
            {...fadeUp(ctaInView, 0.1)}
            className="text-[clamp(28px,5vw,56px)] font-extrabold tracking-[-0.03em] mb-4"
          >
            New to crypto?
            <br />
            <em className="font-serif italic font-light text-[1.1em]">
              We&apos;ve got you.
            </em>
          </motion.h2>
          <motion.p
            {...fadeUp(ctaInView, 0.15)}
            className="text-base md:text-lg text-muted leading-[1.7] mb-10"
          >
            How to buy RARE in 3 steps. Full tutorials, FAQs, and a support
            community ready to help you make your first claim.
          </motion.p>
          <motion.div
            {...fadeUp(ctaInView, 0.2)}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
          >
            <Link
              href="#"
              className="px-7 py-4 rounded-full bg-iridescent text-white font-bold text-sm uppercase tracking-[0.08em] no-underline text-center transition-all hover:opacity-85 hover:scale-[0.97]"
            >
              New To Crypto Guide
            </Link>
            <Link
              href="#"
              className="px-7 py-4 rounded-full border border-border-bright bg-glass text-text font-semibold text-sm uppercase tracking-[0.08em] no-underline text-center backdrop-blur-sm transition-all hover:border-rare/50 hover:bg-rare/8"
            >
              Just Need Info
            </Link>
          </motion.div>

          {/* CTA cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ctaCards.map((card, i) => (
              <motion.a
                key={card.title}
                {...fadeUp(ctaInView, 0.25 + i * 0.06)}
                href="#"
                className="bg-panel border border-border rounded-2xl p-6 text-left no-underline transition-all duration-300 hover:border-rare/35 hover:-translate-y-0.5 group block"
              >
                <div className="font-bold text-base text-text mb-2">
                  {card.icon} {card.title}
                </div>
                <div className="text-[13px] text-muted leading-relaxed">
                  {card.desc}
                </div>
                <span className="text-rare text-lg mt-4 block opacity-60 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Base Migration Banner ── */}
      <section
        ref={baseRef}
        className="relative py-16 md:py-20 px-6 md:px-15 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(50,53,251,0.08), rgba(50,153,251,0.05))",
          borderTop: "1px solid rgba(50,153,251,0.2)",
          borderBottom: "1px solid rgba(50,153,251,0.2)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at 0% 50%, rgba(50,53,251,0.07) 0%, transparent 60%),
              radial-gradient(ellipse 40% 60% at 100% 50%, rgba(50,153,251,0.06) 0%, transparent 60%)
            `,
          }}
        />

        <div className="relative z-1 max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-15 items-start">
          {/* Left */}
          <motion.div {...fadeUp(baseInView, 0)}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rare-light/12 border border-rare-light/30 mb-5">
              <span>🔵</span>
              <span className="font-mono text-[11px] tracking-[0.2em] text-rare-light font-bold">
                WE MOVED TO BASE
              </span>
            </div>

            <h3 className="text-[clamp(24px,3.5vw,48px)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-5">
              Rare Coin has migrated to{" "}
              <em className="font-serif italic font-light text-[1.1em] text-gradient-blue">
                Base Chain
              </em>
            </h3>

            <p className="text-[14px] md:text-[15px] text-muted leading-[1.8] max-w-[560px] mb-3">
              We&apos;ve upgraded from our original chain to{" "}
              <strong className="text-text">Base</strong> — Coinbase&apos;s
              Ethereum Layer-2 — for dramatically faster transactions, sub-cent
              fees, and access to the world&apos;s largest crypto user base.
            </p>
            <p className="text-[14px] md:text-[15px] text-muted leading-[1.8] max-w-[560px]">
              <strong className="text-text">Holding v1 coins?</strong> Your
              original RARE coins are still valid. Use our v1-to-v2 conversion
              tool to migrate your balance to Base.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="#"
                className="px-7 py-4 rounded-full bg-iridescent text-white font-bold text-sm uppercase tracking-[0.08em] no-underline text-center transition-all hover:opacity-85 hover:scale-[0.97]"
              >
                Migrate v1 → v2 on Base
              </Link>
              <Link
                href="#"
                className="px-7 py-4 rounded-full border border-border-bright bg-glass text-text font-semibold text-sm uppercase tracking-[0.08em] no-underline text-center backdrop-blur-sm transition-all hover:border-rare/50 hover:bg-rare/8"
              >
                How To Claim on v2
              </Link>
            </div>
          </motion.div>

          {/* Right: Base chain card */}
          <motion.div
            {...fadeUp(baseInView, 0.15)}
            className="bg-surface border border-rare-light/20 rounded-3xl p-6 md:p-8 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(50,53,251,0.06), rgba(50,153,251,0.04))",
              }}
            />
            <div className="relative">
              <div className="text-[40px] mb-2">🔵</div>
              <div className="text-[28px] font-extrabold tracking-[-0.03em] text-gradient-blue">
                Base
              </div>
              <div className="text-[13px] text-muted mb-6">
                Ethereum Layer-2 by Coinbase
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {baseStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-panel rounded-xl p-3.5 border border-border"
                  >
                    <div className="font-mono text-lg font-bold text-gradient-blue">
                      {stat.val}
                    </div>
                    <div className="text-[11px] text-muted mt-0.5 tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-5">
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted mb-3">
                  Why Base?
                </div>
                {whyBase.map((item) => (
                  <div
                    key={item}
                    className="text-[13px] text-muted py-1.5 border-b border-white/4 last:border-b-0 leading-snug"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
