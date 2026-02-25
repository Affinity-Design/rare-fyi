"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const tickerItems = [
  { dot: true, label: "$RARE", value: "Now Live on Base Chain 🔵" },
  { label: "Transaction Speed", value: "< 2 seconds", green: true },
  { label: "Tx Cost", value: "< $0.001 on Base", green: true },
  { label: "Total Supply", value: "3,650,000 RARE" },
  { label: "Daily Release", value: "200 RARE / Day" },
  { label: "Final Distribution", value: "Year 2071" },
  { dot: true, label: "Base Chain Status", value: "Operational", green: true },
];

const heroStats = [
  { value: "3,650,000", label: "Total Supply Ever" },
  { value: "200/day", label: "Daily Distribution" },
  { value: "2071", label: "Final Coin Year" },
];

const heroLinks = [
  "New To Crypto?",
  "What Is Rare Coin?",
  "How To Make Your First Claim",
  "How To Get Verified",
  "How To Add ETH on Base",
  "How To Buy $RARE",
];

function TickerStrip() {
  const items = [...tickerItems, ...tickerItems]; // duplicate for loop

  return (
    <div className="bg-deep border-t border-b border-border py-3 overflow-hidden relative">
      <div className="flex gap-12 animate-ticker w-max">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && i % tickerItems.length !== 0 && (
              <span className="text-white/10 text-base mx-2">◆</span>
            )}
            {item.dot && (
              <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_var(--color-green)]" />
            )}
            <span className="font-mono text-xs text-muted whitespace-nowrap">
              {item.label}
            </span>
            <span
              className={`font-mono text-xs whitespace-nowrap ${
                item.green ? "text-green" : "text-text"
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

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
    <>
      <section
        ref={ref}
        className="relative min-h-dvh flex items-end px-6 pt-28 pb-32 md:px-10 md:pb-28 overflow-hidden"
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

        {/* Floating orb — parallax */}
        <motion.div
          className="absolute -top-24 -right-24 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full animate-orb-float opacity-10 pointer-events-none"
          style={{
            y: orbY,
            background:
              "conic-gradient(from 0deg, #F633FF, #9432FB, #3235FB, #3299FB, #9432FB, #F633FF)",
            filter: "blur(100px)",
          }}
        />

        {/* Content + Coin — scroll fade & lift */}
        <motion.div
          style={reducedMotion ? {} : { y: contentY, opacity: heroOpacity }}
          className="relative z-2 w-full max-w-[1100px] mx-auto flex items-center justify-between gap-8 lg:gap-16"
        >
          {/* Text content */}
          <div className="flex-1 max-w-[580px]">
            <motion.div
              {...fadeUp(0)}
              className="font-mono text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-rare mb-5 flex items-center gap-3"
            >
              <span className="w-6 md:w-8 h-px bg-rare" />
              Collaborative Wealth Protocol
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-[clamp(42px,8vw,96px)] leading-[0.95] tracking-[-0.03em] font-extrabold mb-2"
            >
              Earn.
              <br />
              <em className="font-serif italic font-light text-[1.15em] text-gradient">
                Stake.
              </em>
              <br />
              Own.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-base md:text-lg text-muted leading-relaxed mb-8 md:mb-10 max-w-[500px]"
            >
              RARE COIN is an immutable self-distributing cryptocurrency now
              live on Base — Coinbase&apos;s high-speed Ethereum Layer-2. 200
              RARE are distributed every day, equally shared among claimers.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <Link
                href="#claim"
                className="px-7 py-4 rounded-full bg-iridescent text-white font-bold text-sm uppercase tracking-[0.08em] no-underline text-center transition-all hover:opacity-85 hover:scale-[0.97]"
              >
                Claim $RARE
              </Link>
              <Link
                href="#stake"
                className="px-7 py-4 rounded-full border border-border-bright bg-glass text-text font-semibold text-sm uppercase tracking-[0.08em] no-underline text-center backdrop-blur-sm transition-all hover:border-rare/50 hover:bg-rare/8"
              >
                Stake Now
              </Link>
              <Link
                href="#trade"
                className="px-7 py-4 rounded-full border border-border-bright bg-glass text-text font-semibold text-sm uppercase tracking-[0.08em] no-underline text-center backdrop-blur-sm transition-all hover:border-rare/50 hover:bg-rare/8"
              >
                Buy $RARE
              </Link>
            </motion.div>

            <motion.p
              {...fadeUp(0.35)}
              className="text-xs text-muted mb-8 tracking-wide"
            >
              Do you own v1 coins?{" "}
              <Link
                href="#"
                className="text-shade1 no-underline border-b border-shade1/30 pb-px transition-colors hover:text-shade2 hover:border-shade2/60"
              >
                Claim conversion →
              </Link>
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="grid grid-cols-3 gap-4 md:gap-10"
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-lg md:text-[22px] font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-[11px] tracking-[0.1em] uppercase text-muted mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          {/* end text content */}

          {/* Coin (desktop only) */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0">
            <div className="relative">
              {/* Orbital rings */}
              <div
                className="absolute rounded-full border border-rare/8 pointer-events-none"
                style={{
                  inset: "-28px",
                  animation: "spin 18s linear infinite",
                }}
              />
              <div
                className="absolute rounded-full border border-rare-pink/5 pointer-events-none"
                style={{
                  inset: "-52px",
                  animation: "spin 28s linear infinite reverse",
                }}
              />
              <div
                className="absolute rounded-full border border-rare-blue/4 pointer-events-none"
                style={{
                  inset: "-76px",
                  animation: "spin 40s linear infinite",
                }}
              />
              <motion.div
                className="w-[280px] h-[280px] xl:w-[340px] xl:h-[340px] rounded-full p-[2px] animate-coin-glow"
                style={{
                  background:
                    "linear-gradient(135deg, #F633FF, #9432FB, #3235FB, #3299FB)",
                }}
                animate={reducedMotion ? {} : { rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="w-full h-full rounded-full bg-void flex items-center justify-center p-7"
                  animate={reducedMotion ? {} : { rotate: [0, -360] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Image
                    src="/rare-logo.png"
                    alt="Rare Coin"
                    width={220}
                    height={220}
                    className="w-full h-full object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* end content + coin container */}

        {/* Bottom link pills */}
        <motion.div
          {...fadeUp(0.5)}
          className="absolute bottom-5 md:bottom-8 left-0 right-0 flex flex-col md:flex-row items-center justify-center gap-3 px-6 md:px-15"
        >
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-muted whitespace-nowrap">
            Get Started
          </span>
          <div className="flex gap-2 flex-wrap justify-center">
            {heroLinks.map((text) => (
              <Link
                key={text}
                href="#"
                className="px-3 py-1.5 rounded-full border border-border bg-glass text-muted text-[10px] md:text-[11px] no-underline whitespace-nowrap transition-all hover:text-text hover:border-rare/40 hover:bg-rare/7"
              >
                {text}
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <TickerStrip />
    </>
  );
}
