"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Card 1: Rotating Gold Coin
function GoldCoinCard() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12">
      <div className="relative">
        {/* Glow effect */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 60px rgba(212,175,55,0.3)",
              "0 0 100px rgba(212,175,55,0.5)",
              "0 0 60px rgba(212,175,55,0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-full"
        />
        
        {/* Coin */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="relative w-32 h-32 md:w-48 md:h-48"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-light via-gold-primary to-gold-dark flex items-center justify-center shadow-2xl">
            <span className="text-6xl md:text-8xl font-bold text-black/80">R</span>
          </div>
          {/* Edge effect */}
          <div className="absolute inset-0 rounded-full border-4 border-gold-light/50" />
        </motion.div>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-white mt-12 text-center">
        Ultra-Rare Distribution
      </h3>
      <p className="text-white/60 mt-4 text-center max-w-md">
        1 million tokens. No presale. No team allocation. Pure, bot-proof distribution.
      </p>
    </div>
  );
}

// Card 2: Scanning Laser Grid
function LaserGridCard() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12 relative overflow-hidden">
      {/* Blockchain nodes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + (i % 5) * 15}%`,
              top: `${20 + Math.floor(i / 5) * 20}%`,
            }}
          />
        ))}
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1={`${20 + (i % 5) * 15}%`}
              y1={`${20 + Math.floor(i / 5) * 20}%`}
              x2={`${35 + (i % 5) * 15}%`}
              y2={`${40 + Math.floor(i / 5) * 20}%`}
              stroke="#D4AF37"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* Scanning laser */}
      <motion.div
        animate={{ y: [-100, 400] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-60"
        style={{ boxShadow: "0 0 20px 5px rgba(212,175,55,0.5)" }}
      />

      <h3 className="text-2xl md:text-3xl font-bold text-white mt-auto relative z-10 text-center">
        Blockchain Verified
      </h3>
      <p className="text-white/60 mt-4 text-center max-w-md relative z-10">
        Every claim verified on Base chain. Transparent, immutable, and auditable.
      </p>
    </div>
  );
}

// Card 3: Pulsing Heartbeat
function HeartbeatCard() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12">
      <svg className="w-full max-w-lg h-32" viewBox="0 0 400 100">
        <motion.path
          d="M0 50 L50 50 L60 50 L70 30 L80 70 L90 20 L100 80 L110 40 L120 60 L130 50 L200 50 L210 50 L220 30 L230 70 L240 20 L250 80 L260 40 L270 60 L280 50 L350 50 L360 50 L370 30 L380 70 L390 20 L400 80"
          fill="none"
          stroke="url(#heartbeatGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="heartbeatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Pulsing dot */}
        <motion.circle
          cx="200"
          cy="50"
          r="6"
          fill="#D4AF37"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </svg>

      <h3 className="text-2xl md:text-3xl font-bold text-white mt-12 text-center">
        Real Human Verification
      </h3>
      <p className="text-white/60 mt-4 text-center max-w-md">
        Turnstile CAPTCHA and stake-to-claim ensure only real humans participate.
      </p>
    </div>
  );
}

const cards = [
  { component: GoldCoinCard, title: "Distribution" },
  { component: LaserGridCard, title: "Verification" },
  { component: HeartbeatCard, title: "Humanity" },
];

export default function Protocol() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="protocol" ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {cards.map((card, index) => {
          const CardComponent = card.component;
          const progress = useTransform(
            scrollYProgress,
            [index * 0.33, (index + 1) * 0.33],
            [0, 1]
          );
          
          const scale = useTransform(
            scrollYProgress,
            [0, index * 0.33, (index + 1) * 0.33, 1],
            [0.9, 1, 1, 0.9]
          );
          
          const blur = useTransform(
            scrollYProgress,
            [0, index * 0.33, (index + 1) * 0.33, 1],
            [20, 0, 0, 20]
          );
          
          const opacity = useTransform(
            scrollYProgress,
            [0, index * 0.33, (index + 1) * 0.33, 1],
            [0.5, 1, 1, 0.5]
          );

          return (
            <motion.div
              key={index}
              style={{
                scale,
                filter: `blur(${blur.get()}px)`,
                opacity,
              }}
              className={`absolute inset-0 flex items-center justify-center ${
                index === cards.length - 1 ? "z-10" : ""
              }`}
            >
              <div
                className={`w-full max-w-4xl mx-6 rounded-[3rem] border border-white/10 bg-bg-secondary/90 backdrop-blur-xl ${
                  index === 0 ? "h-[70vh]" : index === 1 ? "h-[75vh]" : "h-[80vh]"
                }`}
              >
                <CardComponent />
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Spacer for scroll */}
      <div className="h-[300vh]" />
    </section>
  );
}
