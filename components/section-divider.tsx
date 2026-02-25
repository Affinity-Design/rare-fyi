"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionDivider({ label }: { label?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center h-14 max-w-[1100px] mx-auto px-6 md:px-10"
    >
      {/* Line left */}
      <motion.div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(148,50,251,0.25))",
          transformOrigin: "right center",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Center node */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.35, delay: 0.55 }}
        className="relative mx-4 flex-shrink-0"
      >
        {label ? (
          <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted/30 px-3 py-1 border border-border rounded-full">
            {label}
          </span>
        ) : (
          <div className="relative">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "rgba(148,50,251,0.7)",
                boxShadow:
                  "0 0 10px rgba(148,50,251,0.9), 0 0 30px rgba(148,50,251,0.3)",
              }}
            />
          </div>
        )}
      </motion.div>

      {/* Line right */}
      <motion.div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, rgba(148,50,251,0.25), transparent)",
          transformOrigin: "left center",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}
