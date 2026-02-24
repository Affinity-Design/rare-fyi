"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#080808] to-[#0A0A0A] z-10" />
        
        {/* Animated particles - PINK/PURPLE/CYAN */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() > 0.5 ? '4px' : '2px',
                height: Math.random() > 0.5 ? '4px' : '2px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 
                  ? '#E91E63' 
                  : i % 3 === 1 
                    ? '#9D00FF' 
                    : '#00BCD4',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient mesh */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="purpleGlow" cx="30%" cy="70%">
              <stop offset="0%" stopColor="#9D00FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="pinkGlow" cx="70%" cy="30%">
              <stop offset="0%" stopColor="#E91E63" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cyanGlow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#00BCD4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#purpleGlow)" />
          <rect width="100%" height="100%" fill="url(#pinkGlow)" />
          <rect width="100%" height="100%" fill="url(#cyanGlow)" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full px-6 md:px-12 lg:px-24 py-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Circle Logo - PINK → PURPLE → CYAN gradient */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#E91E63] via-[#9D00FF] to-[#00BCD4] shadow-lg shadow-[#9D00FF]/30">
              <span className="text-4xl font-bold text-white">R</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Fair is the</span>
            <br />
            <span
              className="font-serif italic bg-gradient-to-r from-[#E91E63] via-[#9D00FF] to-[#00BCD4] bg-clip-text text-transparent"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Future.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Bot-proof distribution. Real utility.{' '}
            <span className="bg-gradient-to-r from-[#E91E63] to-[#9D00FF] bg-clip-text text-transparent font-medium">
              1M ultra-rare tokens
            </span>{' '}
            on Base Chain.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="https://rare.claims" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto min-w-[180px] btn-primary">
                Start Claiming
              </button>
            </Link>
            <a href="#features" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto min-w-[180px] btn-ghost">
                Learn More
              </button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          >
            <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E91E63] to-[#9D00FF] bg-clip-text text-transparent mb-1">1M</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Total Supply</div>
            </div>
            <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#9D00FF] to-[#00BCD4] bg-clip-text text-transparent mb-1">Base</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Chain</div>
            </div>
            <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00BCD4] to-[#E91E63] bg-clip-text text-transparent mb-1">Bot-Proof</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Security</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-[#9D00FF] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
