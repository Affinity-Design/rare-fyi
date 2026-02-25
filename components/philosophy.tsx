"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";

const beliefs = [
  { num: "3.65M", label: "Coins. Fixed. Forever.", note: "Not one more can ever be created by anyone." },
  { num: "0%", label: "Reserved for insiders", note: "No pre-mine, no VC allocation, no founders cut." },
  { num: "2071", label: "Final distribution year", note: "When the very last RARE coin is distributed." },
];

const questionWords = "Most crypto asks: How do I make the rich richer?".split(" ");
const answerWords = "We ask: How do we distribute wealth to everyone?".split(" ");

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  return (
    <section ref={ref} id="philosophy" className="relative py-28 md:py-44 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.6) 2px, rgba(255,255,255,0.6) 3px)",
          backgroundSize: "100% 3px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 70% at 5% 50%, rgba(246,51,255,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 45% 60% at 95% 50%, rgba(50,153,251,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 30% 40% at 50% 100%, rgba(148,50,251,0.05) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-15">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="font-mono text-[10px] tracking-[0.5em] uppercase text-rare mb-14 flex items-center gap-3"
        >
          <span className="w-5 h-px bg-rare" />
          Our Philosophy
        </motion.div>

        {/* VS Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_64px_1fr] gap-10 lg:gap-0 items-start mb-20 md:mb-28">
          {/* LEFT */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted/60 mb-2">Old paradigm</p>
            <p className="font-serif italic text-[clamp(20px,3.2vw,40px)] font-light leading-[1.35] text-muted">
              {questionWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={reducedMotion ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
                  animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>

          {/* CENTER — VS */}
          <div className="hidden lg:flex flex-col items-center justify-start pt-10 gap-3">
            <motion.div
              initial={reducedMotion ? false : { scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              style={{ transformOrigin: "top center" }}
              className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"
            />
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.6 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.65, ease: [0.34, 1.56, 0.64, 1] as const }}
              className="font-mono text-[11px] font-bold tracking-[0.2em] text-border-bright border border-border rounded-full px-3 py-1.5"
            >
              VS
            </motion.div>
            <motion.div
              initial={reducedMotion ? false : { scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              style={{ transformOrigin: "bottom center" }}
              className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-rare/70 mb-2">New paradigm</p>
            <p className="text-[clamp(22px,3.6vw,46px)] font-extrabold tracking-[-0.025em] leading-[1.15]">
              {answerWords.map((word, i) => {
                const isLast3 = i >= answerWords.length - 3;
                return (
                  <motion.span
                    key={i}
                    initial={reducedMotion ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
                    animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.6, delay: 0.55 + i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                    className={`inline-block mr-[0.25em] ${isLast3 ? "text-gradient" : ""}`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </p>
          </div>
        </div>

        {/* Body copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-28">
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="text-base md:text-[15px] text-muted leading-[1.85]"
          >
            Our philosophy is simple. Create an{" "}
            <strong className="text-text font-semibold">ultra-rare currency ANYONE can farm</strong>.
            {" "}By equally and freely distributing the currency, this ensures mass distribution for widespread ownership.
          </motion.p>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="text-base md:text-[15px] text-muted leading-[1.85]"
          >
            Just like in the early days of bitcoin, it was common for the average user to have many. Yet over time, those few dollars turned into thousands.{" "}
            <strong className="text-text font-semibold">There are no secret investors or holders.</strong>
            {" "}Rare Coin has been fairly distributing its supply since genesis.
          </motion.p>
        </div>

        {/* Belief stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden mb-16 md:mb-20">
          {beliefs.map((b, i) => (
            <motion.div
              key={b.num}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="relative bg-surface p-8 md:p-10 flex flex-col gap-3 group overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "radial-gradient(circle at 0% 0%, rgba(148,50,251,0.12) 0%, transparent 60%)" }}
              />
              <span className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-0.04em] text-gradient leading-none">{b.num}</span>
              <span className="font-semibold text-text text-sm leading-tight">{b.label}</span>
              <span className="text-xs text-muted leading-[1.7]">{b.note}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="flex flex-wrap items-center gap-5"
        >
          <Link
            href="#claim"
            className="inline-block px-8 py-4 rounded-full bg-iridescent text-white font-bold text-sm uppercase tracking-[0.08em] no-underline transition-all hover:opacity-85 hover:scale-[0.97]"
          >
            Start Claiming
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted no-underline hover:text-text transition-colors group flex items-center gap-2"
          >
            Read the whitepaper
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
