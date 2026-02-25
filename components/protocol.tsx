"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";

const pools = [
  {
    badge: "Pool A",
    icon: "🎯",
    name: "Claimers",
    tagline: "// equal_weight_dist.sol",
    desc: "Claimers receive an equally distributed portion of the pool's daily supply. One coin is split fairly among all daily claimers — ensuring no whale advantage.",
    spinDuration: 9,
    requirements: [
      "Connected to Base (Ethereum L2)",
      "Small amount of ETH on Base for gas",
      "BrightID verified human",
      "One claim per wallet per day",
    ],
    gradient: "conic-gradient(from 0deg at 50% 50%, transparent 300deg, rgba(246,51,255,0.8) 340deg, rgba(148,50,251,0.5) 360deg)",
  },
  {
    badge: "Pool B",
    icon: "📈",
    name: "Stakers",
    tagline: "// stake_weighted_yield.sol",
    desc: "Stakers earn daily interest from accrued trading network fees and receive additional Rare Coin for a set number of weeks by staking their collected RARE.",
    spinDuration: 12,
    requirements: [
      "Must hold collected RARE coins",
      "Weighted distribution by stake size",
      "Earn trading fee dividends daily",
      "Flexible unstaking available",
    ],
    gradient: "conic-gradient(from 0deg at 50% 50%, transparent 300deg, rgba(50,53,251,0.8) 340deg, rgba(50,153,251,0.5) 360deg)",
  },
];

export default function Protocol() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
        };

  return (
    <section ref={ref} id="distribution" className="relative bg-deep py-24 md:py-40 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(148,50,251,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,50,251,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 75% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(148,50,251,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-15">
        <motion.div {...fadeUp(0)}>
          <div className="font-mono text-[10px] tracking-[0.5em] uppercase text-rare mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-rare" />
            Distribution Mechanics
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
            Two pools.
            <br />
            <em className="font-serif italic font-light text-[1.1em]">Infinite opportunity.</em>
          </h2>
          <p className="text-base md:text-lg text-muted leading-[1.7] max-w-[600px]">
            200 RARE are released and distributed daily on Base. The system is elegantly simple and entirely on-chain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 md:mt-20">
          {pools.map((pool, i) => (
            <motion.div key={pool.name} {...fadeUp(0.1 + i * 0.15)}>
              {/* Spinning border wrapper */}
              <div className="relative rounded-3xl p-px overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                {/* Spinning gradient ring */}
                {!reducedMotion && (
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      inset: "-100%",
                      background: pool.gradient,
                      borderRadius: "inherit",
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: pool.spinDuration, repeat: Infinity, ease: "linear" }}
                  />
                )}

                {/* Card content */}
                <div className="relative bg-surface rounded-[22px] p-7 md:p-10 overflow-hidden">
                  {/* Inner corner glow */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-30"
                    style={{
                      background: i === 0
                        ? "radial-gradient(circle at 100% 0%, rgba(246,51,255,0.3) 0%, transparent 60%)"
                        : "radial-gradient(circle at 100% 0%, rgba(50,53,251,0.3) 0%, transparent 60%)",
                    }}
                  />

                  {/* Pool badge + icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-panel border border-border-bright flex items-center justify-center text-xl">
                        {pool.icon}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted/60 block">
                          {pool.badge}
                        </span>
                        <h3 className="text-xl font-extrabold tracking-[-0.02em]">
                          <span className="text-gradient">{pool.name}</span>{" "}Pool
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="font-mono text-[11px] text-muted/50 mb-4">{pool.tagline}</p>

                  <p className="text-[14px] md:text-[15px] text-muted leading-[1.7] mb-7">{pool.desc}</p>

                  {/* Requirements */}
                  <div className="flex flex-col gap-3 mb-7">
                    {pool.requirements.map((req, ri) => (
                      <motion.div
                        key={req}
                        initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.3 + i * 0.1 + ri * 0.07, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                        className="flex items-center gap-3 text-[13px] text-muted"
                      >
                        <span className="w-4 h-4 rounded-full border border-rare/40 flex items-center justify-center flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-rare/70" />
                        </span>
                        {req}
                      </motion.div>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-rare no-underline uppercase tracking-[0.04em] transition-all duration-200 hover:gap-3 group"
                  >
                    Learn More <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
