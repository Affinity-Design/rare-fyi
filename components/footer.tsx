"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const madeWith = [
  { label: "About Rare", href: "#" },
  { label: "News", href: "#" },
  { label: "Team", href: "#" },
  { label: "Price Chart", href: "#" },
  { label: "Change Log", href: "#" },
];

const support = [
  { label: "FAQs", href: "#" },
  { label: "Tutorials", href: "#" },
  { label: "Roadmap", href: "#" },
  { label: "Support Group", href: "#" },
];

const apps = [
  { label: "Claiming App", href: "#", isNew: false },
  { label: "Staking App", href: "#", isNew: false },
  { label: "Rare Lotto App", href: "#", isNew: true },
];

const socials = [
  { label: "𝕏", href: "#", title: "Twitter / X" },
  { label: "💬", href: "#", title: "Telegram" },
  { label: "📊", href: "#", title: "Chart" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: {
            duration: 0.5,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          },
        };

  return (
    <footer
      ref={ref}
      className="bg-void border-t border-border px-6 md:px-15 pt-14 md:pt-20 pb-8"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-border">
          {/* Brand */}
          <motion.div
            {...fadeUp(0)}
            className="col-span-2 md:col-span-1 max-w-[280px]"
          >
            <Link
              href="/"
              className="no-underline inline-flex items-center gap-2 mb-4"
            >
              <div className="relative w-8 h-8">
                <Image
                  src="/rare-logo.png"
                  alt="Rare Coin"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-text font-extrabold tracking-[-0.02em] text-lg">
                Rare
              </span>
            </Link>
            <p className="text-[13px] text-muted leading-[1.7] mb-5">
              The world&apos;s rarest cryptocurrency. 3.65M total supply,
              forever. Fair distribution by design.
            </p>
            {/* Network status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green/8 border border-green/25 text-[11px] font-mono text-green tracking-wide">
              <span className="relative flex items-center justify-center w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green/60 animate-[pulseDot_2s_ease-in-out_infinite]" />
                <span className="inline-flex w-1.5 h-1.5 rounded-full bg-green" />
              </span>
              Base Network — Operational
            </div>
          </motion.div>

          {/* Made Possible */}
          <motion.div {...fadeUp(0.08)}>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-5">
              Made Possible
            </h4>
            <ul className="list-none space-y-3">
              {madeWith.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-text/70 no-underline transition-colors hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div {...fadeUp(0.14)}>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-5">
              Support
            </h4>
            <ul className="list-none space-y-3">
              {support.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-text/70 no-underline transition-colors hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Apps */}
          <motion.div {...fadeUp(0.2)}>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-5">
              Apps
            </h4>
            <ul className="list-none space-y-3">
              {apps.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-text/70 no-underline transition-colors hover:text-text inline-flex items-center gap-2"
                  >
                    {item.label}
                    {item.isNew && (
                      <span className="text-[9px] font-bold tracking-[0.1em] uppercase px-1.5 py-0.5 rounded-full bg-green/15 text-green border border-green/30">
                        new
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          {...fadeUp(0.25)}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7"
        >
          <div className="text-[12px] text-muted/60 tracking-wide">
            © 2025 Rare Coin. Built on Base.
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                title={s.title}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center no-underline text-muted hover:border-rare/50 hover:text-text transition-all duration-200"
              >
                <span className="text-sm">{s.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
