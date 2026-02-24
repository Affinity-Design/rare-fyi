"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Parallax background mesh */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-20"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="meshPurple" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#9D00FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#meshPurple)" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* First line */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/60 mb-6">
            Modern crypto asks:
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 mb-12">
            "How do I farm it?"
          </h2>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#E91E63] via-[#9D00FF] to-[#00BCD4] mx-auto mb-12 rounded-full" />

          {/* Second line */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/60 mb-6">
            We ask:
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#E91E63] via-[#9D00FF] to-[#00BCD4] bg-clip-text text-transparent">
            "How do I protect it?"
          </h2>
        </motion.div>

        {/* Philosophy points */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9D00FF] flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Bot-Proof</h3>
            <p className="text-white/60 text-sm">
              Stake-to-Claim ensures only real humans participate
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9D00FF] to-[#00BCD4] flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Ultra-Rare</h3>
            <p className="text-white/60 text-sm">
              Only 1M tokens will ever exist
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00BCD4] to-[#E91E63] flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c-1.657 0-3 .895-3 2s1.343 3 3 3 .895 0 3-.895 3-2-.895 3-3-3-3m0 8c.667 0 1.333-.021 1.988-.066L20 15l-2.5 2.5c-.66-.045-1.321-.066-1.657 0-3 .895-3 2s1.343 3 3 3 .895 0 3-.895 3-2-.895 3-3-3-3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Real Utility</h3>
            <p className="text-white/60 text-sm">
              Staking, lottery, and trading bot ecosystem
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
