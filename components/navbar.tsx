"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10"
          : "bg-transparent"
      } rounded-full px-6 py-3`}
    >
      <div className="flex items-center gap-6">
        {/* Circle Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E91E63] via-[#9D00FF] to-[#00BCD4] flex items-center justify-center shadow-lg shadow-[#9D00FF]/20">
            <span className="text-sm font-bold text-white">R</span>
          </div>
          <span className={`font-semibold transition-colors ${scrolled ? "text-white" : "text-white"}`}>
            Rare Coin
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-white/80 hover:text-white" : "text-white/80 hover:text-white"
            }`}
          >
            Features
          </a>
          <a
            href="#philosophy"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-white/80 hover:text-white" : "text-white/80 hover:text-white"
            }`}
          >
            Philosophy
          </a>
          <a
            href="#protocol"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-white/80 hover:text-white" : "text-white/80 hover:text-white"
            }`}
          >
            Protocol
          </a>
        </div>

        {/* CTA */}
        <a
          href="https://rare.claims"
          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#9D00FF] to-[#E91E63] text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Launch App
        </a>
      </div>
    </motion.nav>
  );
}
