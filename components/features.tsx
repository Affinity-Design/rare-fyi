"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Card 1: Security Shuffler
function SecurityShuffler() {
  const securityLabels = [
    { title: "Stake-to-Claim", desc: "Lock tokens to participate" },
    { title: "Turnstile Verified", desc: "Cloudflare anti-bot" },
    { title: "Rate Limited", desc: "Fair claim windows" },
  ];

  const [cards, setCards] = useState(securityLabels);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const last = newCards.pop()!;
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-72 p-6 overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/10">
      <h3 className="text-lg font-semibold bg-gradient-to-r from-[#E91E63] to-[#9D00FF] bg-clip-text text-transparent mb-4">
        Bot-Proof Intelligence
      </h3>
      <div className="relative h-48">
        <AnimatePresence mode="popLayout">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ y: 60, opacity: 0, scale: 0.95 }}
              animate={{
                y: index * 28,
                opacity: 1 - index * 0.25,
                scale: 1 - index * 0.05,
                zIndex: 3 - index,
              }}
              exit={{ y: -60, opacity: 0, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="absolute left-0 right-0 bg-white/5 border border-[#9D00FF]/20 rounded-xl p-4"
            >
              <div className="text-white font-medium text-sm">{card.title}</div>
              <div className="text-white/50 text-xs mt-1">{card.desc}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Card 2: Telemetry Typewriter
function TelemetryTypewriter() {
  const messages = [
    "Distributing to verified humans...",
    "Scanning for bot activity...",
    "Claims processed: 847,293",
    "Stake pool active: 12.4M RARE",
    "Next distribution in 00:04:32",
    "Anti-sybil checks passed ✓",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const message = messages[currentMessage];
    let charIndex = 0;
    setDisplayedText("");

    const typeInterval = setInterval(() => {
      if (charIndex < message.length) {
        setDisplayedText(message.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentMessage((prev) => (prev + 1) % messages.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentMessage]);

  return (
    <div className="relative h-72 p-6 rounded-3xl bg-[#0A0A0A] border border-white/10">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-[#9D00FF] to-[#00BCD4] bg-clip-text text-transparent">
          Distribution Stream
        </h3>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E91E63] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E91E63]" />
        </span>
        <span className="text-xs text-white/40 ml-1">LIVE</span>
      </div>
      <div className="h-48 flex items-center">
        <div className="font-mono text-sm text-white/80 leading-relaxed">
          <span className="text-[#9D00FF] mr-2">&gt;</span>
          <span>{displayedText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-[#E91E63] ml-0.5 align-middle"
          />
        </div>
      </div>
    </div>
  );
}

// Card 3: Protocol Scheduler
function ProtocolScheduler() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -30, y: 20 });

  useEffect(() => {
    const phases = [
      { day: 3, duration: 1500 },
      { day: 3, click: true, duration: 500 },
      { day: 3, duration: 1000 },
      { target: "claim", duration: 1500 },
      { reset: true, duration: 2000 },
    ];

    let phaseIndex = 0;
    const runPhase = () => {
      const p = phases[phaseIndex];
      
      if (p.reset) {
        setActiveDay(null);
        setCursorPos({ x: -30, y: 20 });
      } else if (p.target === "claim") {
        setCursorPos({ x: 140, y: 70 });
      } else if (p.click) {
        setActiveDay(p.day!);
      } else if (p.day !== undefined) {
        const targetX = (p.day * 36) + 8;
        setCursorPos({ x: targetX, y: 20 });
      }

      setTimeout(() => {
        phaseIndex = (phaseIndex + 1) % phases.length;
        runPhase();
      }, p.duration);
    };

    const timeout = setTimeout(runPhase, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-72 p-6 rounded-3xl bg-[#0A0A0A] border border-white/10 overflow-hidden">
      <h3 className="text-lg font-semibold bg-gradient-to-r from-[#00BCD4] to-[#9D00FF] bg-clip-text text-transparent mb-4">
        Adaptive Protocol
      </h3>
      <div className="relative">
        {/* Week grid */}
        <div className="flex gap-2 mb-6">
          {days.map((day, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                activeDay === i
                  ? "bg-gradient-to-r from-[#E91E63] to-[#9D00FF] text-white"
                  : "bg-white/5 text-white/50"
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Claim button */}
        <button className="px-4 py-2 rounded-lg bg-[#9D00FF]/20 text-[#9D00FF] text-sm font-medium border border-[#9D00FF]/30 hover:bg-[#9D00FF]/30 transition-colors">
          Claim
        </button>

        {/* Animated cursor */}
        <motion.svg
          animate={{ x: cursorPos.x, y: cursorPos.y }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="absolute left-0 top-8 w-6 h-6 pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 2L5 18L9 14L12 22L16 20L13 12L19 12L5 2Z"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
          />
        </motion.svg>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Bot-Proof <span className="bg-gradient-to-r from-[#E91E63] via-[#9D00FF] to-[#00BCD4] bg-clip-text text-transparent">Micro-UI</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Interactive functional artifacts showcasing our security-first distribution system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SecurityShuffler />
          <TelemetryTypewriter />
          <ProtocolScheduler />
        </div>
      </div>
    </section>
  );
}
