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

  // Generate particles with varied sizes for better visibility
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: 2 + Math.random() * 4, // 2-6px for better visibility
    left: 5 + Math.random() * 90,
    top: 10 + Math.random() * 80,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 3,
    opacity: 0.2 + Math.random() * 0.4,
  }));

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#080808] to-[#0A0A0A] z-10" />
        
        {/* Animated gold particles - now larger and more visible */}
        <div className="absolute inset-0 overflow-hidden z-[5]">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                background: `radial-gradient(circle, rgba(229, 197, 88, ${particle.opacity}) 0%, rgba(212, 175, 55, ${particle.opacity * 0.5}) 50%, transparent 100%)`,
                boxShadow: `0 0 ${particle.size * 2}px rgba(212, 175, 55, ${particle.opacity * 0.6})`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(particle.id) * 10, 0],
                opacity: [particle.opacity * 0.6, particle.opacity, particle.opacity * 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Abstract mesh pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="meshGradient" cx="30%" cy="70%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#meshGradient)" />
        </svg>
        
        {/* Subtle grid overlay for depth */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content - centered */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full px-6 md:px-12 lg:px-24 py-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8952E] shadow-lg shadow-[#D4AF37]/30">
              <span className="text-2xl md:text-3xl font-bold text-black">R</span>
            </div>
          </motion.div>

          {/* Headline with dramatic contrast */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            <span className="text-white block">Fair is the</span>
            <span
              className="block mt-2 text-[#D4AF37] font-serif italic"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Future.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Bot-proof distribution. Real utility.{" "}
            <span className="text-[#D4AF37] font-semibold">1M ultra-rare tokens</span>{" "}
            on Base Chain.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="https://rare.claims" className="w-full sm:w-auto">
              <Button variant="gold" size="xl" className="w-full sm:w-auto min-w-[200px] text-base">
                Start Claiming
              </Button>
            </Link>
            <a href="#features" className="w-full sm:w-auto">
              <Button variant="ghost" size="xl" className="w-full sm:w-auto min-w-[200px] text-base">
                Learn More
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-2xl mx-auto"
          >
            <div className="p-4 md:p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-1">1M</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Total Supply</div>
            </div>
            <div className="p-4 md:p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-1">Base</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Chain</div>
            </div>
            <div className="p-4 md:p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-300">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-1">Bot-Proof</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Security</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
