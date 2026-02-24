"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        "px-3 py-2 rounded-full transition-all duration-500",
        scrolled
          ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg"
          : "bg-transparent border border-transparent"
      )}
    >
      <nav className="flex items-center gap-1">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/5 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-primary to-gold-dark flex items-center justify-center shadow-gold">
            <span className="text-sm font-semibold text-black">R</span>
          </div>
          <span
            className={cn(
              "font-medium tracking-tight transition-colors duration-500",
              scrolled ? "text-gold-primary" : "text-white"
            )}
          >
            Rare
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {["Features", "Protocol", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                scrolled
                  ? "text-gold-primary/80 hover:text-gold-primary hover:bg-white/5"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="https://rare.claims"
          className={cn(
            "ml-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
            scrolled
              ? "bg-gold-primary text-black hover:bg-gold-light shadow-gold"
              : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-gold-primary/40"
          )}
        >
          Start Claiming
        </Link>
      </nav>
    </motion.header>
  );
}
