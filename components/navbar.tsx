"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = ["Features", "Protocol", "Pricing"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50",
          "px-2 md:px-3 py-1.5 md:py-2 rounded-full transition-all duration-500",
          scrolled
            ? "bg-black/70 backdrop-blur-xl border border-white/10 shadow-lg"
            : "bg-transparent border border-transparent"
        )}
      >
        <nav className="flex items-center gap-1">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full hover:bg-white/5 transition-colors"
          >
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8952E] flex items-center justify-center shadow-[0_4px_12px_rgba(212,175,55,0.3)]">
              <span className="text-xs md:text-sm font-semibold text-black">R</span>
            </div>
            <span
              className={cn(
                "font-medium tracking-tight transition-colors duration-500 text-sm md:text-base",
                scrolled ? "text-[#D4AF37]" : "text-white"
              )}
            >
              Rare
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  scrolled
                    ? "text-white/70 hover:text-[#D4AF37] hover:bg-white/5"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Link
            href="https://rare.claims"
            className={cn(
              "hidden md:flex ml-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
              scrolled
                ? "bg-[#D4AF37] text-black hover:bg-[#E5C558] shadow-[0_4px_16px_rgba(212,175,55,0.4)]"
                : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-[#D4AF37]/40"
            )}
          >
            Start Claiming
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className={cn("flex flex-col gap-1.5", mobileMenuOpen && "hamburger-open")}>
              <span className={cn(
                "w-5 h-0.5 bg-white rounded-full transition-all duration-300",
                mobileMenuOpen && "rotate-45 translate-y-2"
              )} />
              <span className={cn(
                "w-5 h-0.5 bg-white rounded-full transition-all duration-300",
                mobileMenuOpen && "opacity-0"
              )} />
              <span className={cn(
                "w-5 h-0.5 bg-white rounded-full transition-all duration-300",
                mobileMenuOpen && "-rotate-45 -translate-y-2"
              )} />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="text-2xl font-medium text-white/80 hover:text-[#D4AF37] transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                <Link
                  href="https://rare.claims"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 px-8 py-3 rounded-full bg-[#D4AF37] text-black font-medium text-lg shadow-[0_4px_16px_rgba(212,175,55,0.4)]"
                >
                  Start Claiming
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
