"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const menuData = {
  About: [
    {
      icon: "🪙",
      title: "Coin",
      desc: "What is RARE COIN",
      href: "#about",
    },
    {
      icon: "👥",
      title: "Team",
      desc: "The builders behind RARE",
      href: "#team",
    },
  ],
  Learn: [
    {
      icon: "📚",
      title: "Tutorials",
      desc: "Step-by-step guides",
      href: "/blog?category=tutorial",
    },
    {
      icon: "🎓",
      title: "Learn",
      desc: "DeFi & Base education",
      href: "/blog?category=education",
    },
    {
      icon: "📰",
      title: "News",
      desc: "Updates & announcements",
      href: "/blog?category=news",
    },
  ],
  Apps: [
    {
      icon: "🎯",
      title: "Claim",
      desc: "Earn free RARE daily",
      href: "#claim",
    },
    {
      icon: "📈",
      title: "Stake",
      desc: "Earn staking rewards",
      href: "#stake",
    },
    {
      icon: "🎰",
      title: "Win",
      desc: "Rare Lotto",
      href: "#lotto",
    },
    {
      icon: "💱",
      title: "Trade",
      desc: "Buy & sell $RARE",
      href: "#trade",
    },
  ],
};

type MenuKey = keyof typeof menuData;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<MenuKey | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const megaTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMega(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMegaEnter = (key: MenuKey) => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setActiveMega(key);
  };

  const handleMegaLeave = () => {
    megaTimeoutRef.current = setTimeout(() => setActiveMega(null), 150);
  };

  const handlePanelEnter = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
  };

  const panelVariants = {
    hidden: { opacity: 0, y: -8, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
    exit: {
      opacity: 0,
      y: -4,
      filter: "blur(4px)",
      transition: { duration: 0.15 },
    },
  };

  const mobileDrawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" as const },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-24px)] max-w-[1100px]
          flex items-center justify-between px-4 py-3 md:px-6 md:py-3.5
          rounded-full backdrop-blur-xl border transition-all duration-400
          ${
            scrolled
              ? "bg-deep/85 border-border-bright shadow-[0_0_40px_rgba(148,50,251,0.18)]"
              : "bg-void/60 border-border"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline group">
          <div className="relative w-9 h-9">
            <Image
              src="/rare-logo.png"
              alt="Rare Coin"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-[15px] tracking-[0.08em] uppercase text-text hidden sm:block">
            Rare Coin
          </span>
        </Link>

        {/* Desktop nav triggers */}
        <ul className="hidden lg:flex items-center gap-7 list-none">
          {(Object.keys(menuData) as MenuKey[]).map((key) => (
            <li
              key={key}
              className="relative"
              onMouseEnter={() => handleMegaEnter(key)}
              onMouseLeave={handleMegaLeave}
            >
              <button
                className={`text-[13px] font-medium tracking-[0.04em] uppercase bg-transparent border-none cursor-pointer transition-colors duration-200
                  ${activeMega === key ? "text-text" : "text-muted hover:text-text"}`}
              >
                {key}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="#claim"
            className="px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-iridescent text-white font-bold text-[12px] md:text-[13px] uppercase tracking-[0.06em] no-underline transition-all duration-200 hover:opacity-85 hover:scale-[0.97]"
          >
            Claim Now
          </Link>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-[2px] bg-text rounded-full"
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-[2px] bg-text rounded-full"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-5 h-[2px] bg-text rounded-full"
              animate={
                mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* Page blur backdrop when mega menu is open */}
      <AnimatePresence>
        {activeMega && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[998] hidden lg:block pointer-events-none"
            style={{
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              background: "rgba(6,6,10,0.45)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Desktop mega-menu panels */}
      <AnimatePresence>
        {activeMega && (
          <motion.div
            key={activeMega}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handleMegaLeave}
            className="fixed top-[66px] left-1/2 -translate-x-1/2 z-[999] w-[calc(100%-40px)] max-w-[1100px] hidden lg:block"
          >
            {/* Iridescent top accent line */}
            <div
              className="absolute top-0 left-8 right-8 h-[1px] z-10"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #F633FF, #9432FB, #3235FB, #3299FB, transparent)",
              }}
            />

            {/* Glass panel */}
            <div
              className="mt-[1px] rounded-2xl overflow-hidden"
              style={{
                background: "rgba(6,6,10,0.97)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Section header */}
              <div className="flex items-center justify-between px-7 pt-6 pb-4">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-rare/80 mb-1">
                    {activeMega}
                  </div>
                  <div className="text-[13px] text-white/40">
                    {activeMega === "About" &&
                      "Discover what makes RARE different"}
                    {activeMega === "Learn" &&
                      "Guides, education & latest news"}
                    {activeMega === "Apps" &&
                      "The full suite of RARE applications"}
                  </div>
                </div>
                <a
                  href="#"
                  className="text-[12px] text-white/30 hover:text-white/70 no-underline transition-colors flex items-center gap-1.5"
                >
                  View all
                  <span className="text-rare">→</span>
                </a>
              </div>

              {/* Thin divider */}
              <div
                className="mx-7 mb-5"
                style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
              />

              {/* Items grid */}
              <div
                className={`px-5 pb-5 grid gap-2 ${
                  activeMega === "About"
                    ? "grid-cols-2"
                    : activeMega === "Learn"
                      ? "grid-cols-3"
                      : "grid-cols-4"
                }`}
              >
                {menuData[activeMega].map((item, i) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    onClick={() => setActiveMega(null)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}
                    className="group flex flex-row items-center justify-between gap-3 px-5 py-4 rounded-xl no-underline transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.055)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.10)";
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.02)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(0)";
                    }}
                  >
                    {/* Text */}
                    <div className="flex-1">
                      <div className="font-bold text-[13px] text-white mb-0.5">
                        {item.title}
                      </div>
                      <div
                        className="text-[11px] leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      >
                        {item.desc}
                      </div>
                    </div>
                    <span className="text-rare text-sm opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Bottom strip */}
              <div
                className="flex items-center justify-between px-7 py-3.5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-green"
                    style={{ boxShadow: "0 0 6px #10B981" }}
                  />
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    Base Network — Operational
                  </span>
                </div>
                <span
                  className="font-mono text-[10px]"
                  style={{ color: "rgba(255,255,255,0.18)" }}
                >
                  ESC to close
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-void/80 backdrop-blur-sm z-[998] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              variants={mobileDrawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-[85vw] max-w-[380px] bg-deep z-[9000] lg:hidden flex flex-col border-l border-border"
            >
              {/* Iridescent accent line on left edge */}
              <div className="absolute top-0 left-0 h-full w-[2px] bg-iridescent" />

              <div className="p-6 pt-20 flex-1 overflow-y-auto">
                {(Object.keys(menuData) as MenuKey[]).map((key, gi) => (
                  <div key={key} className="mb-4">
                    <motion.button
                      custom={gi}
                      variants={staggerItem}
                      initial="hidden"
                      animate="visible"
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-transparent border-none cursor-pointer text-left"
                      onClick={() =>
                        setMobileAccordion(mobileAccordion === key ? null : key)
                      }
                    >
                      <span className="font-bold text-base uppercase tracking-[0.1em] text-text">
                        {key}
                      </span>
                      <motion.span
                        className="text-muted text-sm"
                        animate={{
                          rotate: mobileAccordion === key ? 180 : 0,
                        }}
                      >
                        ▾
                      </motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {mobileAccordion === key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          {menuData[key].map((item, i) => (
                            <motion.a
                              key={item.title}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 px-4 py-3 no-underline text-text"
                              initial={{ opacity: 0, x: 12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <span className="text-lg">{item.icon}</span>
                              <div>
                                <div className="font-semibold text-sm">
                                  {item.title}
                                </div>
                                <div className="text-xs text-muted">
                                  {item.desc}
                                </div>
                              </div>
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Pinned CTA at bottom */}
              <div className="p-6 border-t border-border">
                <Link
                  href="#claim"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-4 rounded-full bg-iridescent text-white text-center font-bold text-sm uppercase tracking-[0.08em] no-underline"
                >
                  Claim Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
