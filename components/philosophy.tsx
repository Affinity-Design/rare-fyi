"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const meshY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-bg-secondary overflow-hidden"
    >
      {/* Parallaxing gold mesh texture */}
      <motion.div
        style={{ y: meshY }}
        className="absolute inset-0 opacity-20"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="goldMesh"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 L50 0 L100 50 L50 100 Z"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <circle cx="50" cy="50" r="2" fill="#D4AF37" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#goldMesh)" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Left: The question */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">
              The Status Quo
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/50 leading-tight">
              Modern crypto asks:
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/30 mt-4"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
              }}
            >
              "How do I farm it?"
            </motion.p>
          </motion.div>

          {/* Right: Our answer */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-gold-primary/60 text-sm uppercase tracking-widest mb-4">
              Our Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              We ask:
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-primary mt-4"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
              }}
            >
              "How do I protect it?"
            </motion.p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent my-16 md:my-24 origin-center"
        />

        {/* Bottom quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
            "In a world of automated farming and sybil attacks, true fairness requires{" "}
            <span className="text-gold-primary font-semibold">deliberate protection</span>—
            not just clever tokenomics."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
