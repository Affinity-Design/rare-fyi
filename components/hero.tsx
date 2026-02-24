"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-secondary z-10" />
        
        {/* Animated gold particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-primary/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Abstract mesh pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="meshGradient" cx="30%" cy="70%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#meshGradient)" />
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content - pushed to bottom-left */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full px-6 md:px-12 lg:px-24 pb-16 md:pb-24 lg:pb-32"
      >
        <div className="max-w-3xl">
          {/* Headline with dramatic contrast */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          >
            <span className="text-white">Fair is the</span>
            <br />
            <span
              className="font-serif italic text-gold-primary"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Future.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/70 mb-8 max-w-lg leading-relaxed"
          >
            Bot-proof distribution. Real utility. 1M ultra-rare tokens.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="https://rare.claims">
              <Button variant="gold" size="xl">
                Start Claiming
              </Button>
            </Link>
            <a href="#features">
              <Button variant="ghost" size="xl">
                Learn More
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
          >
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-gold-primary">1M</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">Total Supply</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-gold-primary">Base</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">Chain</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-gold-primary">Bot-Proof</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">Security</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
