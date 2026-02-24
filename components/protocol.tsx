"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ProtocolCard({ 
  title, 
  description, 
  children,
  index 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="sticky top-20 min-h-[80vh] flex items-center justify-center p-6"
    >
      <motion.div
        style={{ filter: useTransform(blur, (v) => `blur(${v}px)`) }}
        className="w-full max-w-4xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-sm font-medium text-[#9D00FF] mb-2 block">
              Protocol {index + 1}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {title}
            </h3>
            <p className="text-white/60 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-center">
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Animated circle logo
function RotatingLogo() {
  return (
    <div className="relative w-48 h-48">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E91E63] via-[#9D00FF] to-[#00BCD4] opacity-50 blur-xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full bg-gradient-to-br from-[#E91E63] via-[#9D00FF] to-[#00BCD4] flex items-center justify-center shadow-lg shadow-[#9D00FF]/30"
      >
        <span className="text-6xl font-bold text-white">R</span>
      </motion.div>
    </div>
  );
}

// Scanning laser grid
function LaserGrid() {
  return (
    <div className="relative w-48 h-48 overflow-hidden rounded-2xl bg-[#111] border border-white/10">
      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="bg-white/5" />
        ))}
      </div>
      
      {/* Scanning line */}
      <motion.div
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00BCD4] to-transparent"
      />
      
      {/* Glowing dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          className="absolute w-2 h-2 rounded-full bg-[#9D00FF]"
          style={{
            left: `${10 + (i % 4) * 25}%`,
            top: `${10 + Math.floor(i / 4) * 50}%`,
          }}
        />
      ))}
    </div>
  );
}

// Pulsing EKG waveform
function EKGWave() {
  return (
    <div className="relative w-48 h-48 overflow-hidden rounded-2xl bg-[#111] border border-white/10">
      <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
        <motion.path
          d="M0 50 L30 50 L40 50 L50 20 L60 80 L70 50 L100 50 L110 50 L120 20 L130 80 L140 50 L200 50"
          stroke="url(#ekgGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="ekgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E91E63" />
            <stop offset="50%" stopColor="#9D00FF" />
            <stop offset="100%" stopColor="#00BCD4" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Pulse dot */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-[#E91E63] -translate-y-1/2"
      />
    </div>
  );
}

export default function Protocol() {
  return (
    <section id="protocol" className="relative bg-[#050505]">
      <div className="py-12">
        <div className="text-center mb-12 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            The <span className="bg-gradient-to-r from-[#E91E63] via-[#9D00FF] to-[#00BCD4] bg-clip-text text-transparent">Protocol</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our three-phase distribution system ensures fair and secure token allocation
          </p>
        </div>
      </div>

      <ProtocolCard
        title="Secure Distribution"
        description="Stake-to-Claim ensures only committed participants receive tokens. Our dual-pool system prevents gaming and ensures fair allocation across all participants."
        index={0}
      >
        <RotatingLogo />
      </ProtocolCard>

      <ProtocolCard
        title="Verified Participation"
        description="Cloudflare Turnstile verification combined with on-chain analysis prevents bot farming while maintaining a smooth user experience for real humans."
        index={1}
      >
        <LaserGrid />
      </ProtocolCard>

      <ProtocolCard
        title="Long-Term Value"
        description="With only 1M tokens ever created, early participants benefit from scarcity. Staking, lottery, and trading utilities create ongoing demand and ecosystem growth."
        index={2}
      >
        <EKGWave />
      </ProtocolCard>
    </section>
  );
}
