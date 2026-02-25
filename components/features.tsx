"use client";

import { useRef, useMemo } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const distBars = [
  { label: "Claimers Pool", width: 50, value: "100 RARE" },
  { label: "Stakers Pool", width: 50, value: "100 RARE" },
  { label: "Dev Fund", width: 0, value: "0 RARE" },
];

const quickStats = [
  { num: "<7s", desc: "Per transaction on Base" },
  { num: "<$0.001", desc: "Average Base txn fee" },
  { num: "Eco", desc: "Farmed, not mined" },
  { num: "Free", desc: "Wallet setup required" },
];

const diffCards = [
  {
    num: "01",
    icon: "🌱",
    title: "Eco Friendly",
    desc: "Farmed not mined. Zero energy waste vs Bitcoin's massive footprint.",
    accent: "#10B981",
  },
  {
    num: "02",
    icon: "⚡",
    title: "Near Instant",
    desc: "Sub-2 second finality on Base. Not hour-long Ethereum mainnet waits.",
    accent: "#9432FB",
  },
  {
    num: "03",
    icon: "💎",
    title: "Truly Rare",
    desc: "Only 3,650,000 RARE will ever exist. Final coins farmed in 2071.",
    accent: "#3299FB",
  },
  {
    num: "04",
    icon: "⚖️",
    title: "Fair Launch",
    desc: "No presale, no insiders. 200 RARE dripped daily from an immutable smart contract.",
    accent: "#F633FF",
  },
];

function ScarcityBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  const { coinsIssued, pct } = useMemo(() => {
    const genesis = new Date(2019, 0, 1).getTime();
    const now = Date.now();
    const days = Math.floor((now - genesis) / 86400000);
    const issued = Math.min(days * 200, 3650000);
    return {
      coinsIssued: issued,
      pct: ((issued / 3650000) * 100).toFixed(1),
    };
  }, []);

  return (
    <div
      ref={ref}
      className="px-6 md:px-15 py-12 md:py-16 max-w-[1100px] mx-auto"
    >
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-surface border border-border rounded-2xl p-6 md:p-8 lg:px-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
          <h3 className="font-bold text-base text-text">
            Seriously Rare — Total Supply Progress
          </h3>
          <div className="font-mono text-sm text-muted">
            <strong className="text-gradient text-lg">
              ~{coinsIssued.toLocaleString()}
            </strong>{" "}
            / 3,650,000 RARE Issued
          </div>
        </div>

        {/* Track */}
        <div className="h-3 bg-panel rounded-full overflow-hidden mb-3">
          <motion.div
            className="h-full rounded-full bg-iridescent"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${pct}%` } : {}}
            transition={{
              duration: reducedMotion ? 0 : 2.5,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          />
        </div>

        <div className="flex justify-between font-mono text-[10px] md:text-[11px] text-muted">
          <span>Genesis Block</span>
          <span>{pct}% distributed</span>
          <span>Final RARE — 2071</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: {
            duration: 0.6,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          },
        };

  return (
    <>
      <section
        ref={ref}
        id="about"
        className="px-6 py-16 md:px-15 md:py-30 max-w-[1100px] mx-auto"
      >
        {/* Header */}
        <motion.div {...fadeUp(0)}>
          <div className="font-mono text-[10px] tracking-[0.5em] uppercase text-rare mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-rare" />
            What Is Rare Coin
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
            Crypto for{" "}
            <em className="font-serif italic font-light text-[1.1em]">
              everyone
            </em>
            ,<br />
            not just miners.
          </h2>
          <p className="text-base md:text-lg text-muted leading-[1.7] max-w-[600px]">
            RARE COIN is an immutable self-distributing cryptocurrency easily
            accessible for anyone to earn. No expensive hardware. No energy
            waste. Just claim and collect.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-16 md:mt-20 items-start">
          {/* Left: Distribution card */}
          <motion.div {...fadeUp(0.1)}>
            <div className="bg-surface border border-border rounded-3xl p-6 md:p-8 relative overflow-hidden">
              {/* Subtle iridescent overlay */}
              <div className="absolute inset-0 bg-iridescent opacity-[0.03] pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-muted">
                    Daily Distribution Breakdown
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green/10 border border-green/20 text-green font-mono text-[10px] tracking-[0.1em]">
                    ● Live
                  </span>
                </div>

                {/* Distribution bars */}
                <div className="flex flex-col gap-3">
                  {distBars.map((bar) => (
                    <div
                      key={bar.label}
                      className="grid grid-cols-[100px_1fr_60px] md:grid-cols-[120px_1fr_70px] gap-3 items-center"
                    >
                      <span className="text-xs text-muted">{bar.label}</span>
                      <div className="h-2 rounded-full bg-panel overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-iridescent origin-left"
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : {}}
                          transition={{
                            duration: reducedMotion ? 0 : 1.5,
                            ease: [0.25, 0.46, 0.45, 0.94] as const,
                          }}
                          style={{ width: `${bar.width}%` }}
                        />
                      </div>
                      <span className="font-mono text-[11px] text-text text-right">
                        {bar.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {quickStats.map((stat) => (
                    <div
                      key={stat.num}
                      className="bg-panel border border-border rounded-2xl p-4 md:p-5"
                    >
                      <div className="font-mono text-xl md:text-2xl font-bold text-gradient">
                        {stat.num}
                      </div>
                      <div className="text-[11px] md:text-xs text-muted mt-1">
                        {stat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: About text + diff cards */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-6">
            <p className="text-[15px] md:text-base text-muted leading-[1.8]">
              Unlike{" "}
              <strong className="text-text font-semibold">
                Bitcoin or Ether
              </strong>
              , Rare Coin is eco friendly, cheap to transact with and are
              &quot;Farmed&quot; instead of &quot;Mined&quot;. This means you
              don&apos;t need to invest thousands into computer equipment to
              earn crypto dividends.
            </p>
            <p className="text-[15px] md:text-base text-muted leading-[1.8]">
              Just set up a free Base-compatible wallet, add a small amount of
              ETH on Base, prove you&apos;re human, and you can start{" "}
              <strong className="text-text font-semibold">
                collecting free crypto
              </strong>
              .
            </p>
            <p className="text-[15px] md:text-base text-muted leading-[1.8]">
              Rare Coin now lives on{" "}
              <strong className="text-text font-semibold">Base</strong> —
              Coinbase&apos;s Ethereum Layer-2 rollup. Base delivers
              sub-2-second finality and sub-cent fees, while inheriting
              Ethereum&apos;s security.
            </p>

            {/* Differentiator strip */}
            <div className="flex flex-col gap-0 mt-2 rounded-2xl overflow-hidden border border-border">
              {diffCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="group flex items-center gap-5 px-5 py-4 relative transition-all duration-250 cursor-default"
                  style={{
                    borderBottom:
                      i < diffCards.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                  }}
                  initial={reducedMotion ? {} : { opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.45 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }}
                >
                  {/* Left accent line */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: card.accent }}
                  />

                  {/* Number */}
                  <span
                    className="font-mono text-[11px] font-bold w-6 flex-shrink-0 select-none"
                    style={{ color: card.accent, opacity: 0.7 }}
                  >
                    {card.num}
                  </span>

                  {/* Icon */}
                  <span className="text-lg flex-shrink-0 w-6 text-center leading-none">
                    {card.icon}
                  </span>

                  {/* Title */}
                  <span className="font-bold text-[13px] text-text w-28 flex-shrink-0">
                    {card.title}
                  </span>

                  {/* Divider */}
                  <span className="hidden sm:block w-px h-4 bg-border flex-shrink-0" />

                  {/* Desc */}
                  <span className="text-[12px] text-muted leading-relaxed flex-1 hidden sm:block">
                    {card.desc}
                  </span>

                  {/* Arrow */}
                  <span
                    className="text-sm ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5"
                    style={{ color: card.accent }}
                  >
                    →
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ScarcityBar />
    </>
  );
}
