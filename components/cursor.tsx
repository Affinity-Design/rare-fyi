"use client";

import { useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
const trailSpringConfig = { damping: 20, stiffness: 150, mass: 0.8 };

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, trailSpringConfig);
  const trailY = useSpring(cursorY, trailSpringConfig);
  const cursorScale = useSpring(1, springConfig);
  const cursorOpacity = useSpring(1, springConfig);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY],
  );

  useEffect(() => {
    // Only enable on devices with fine pointer (desktop)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", onMouseMove);

    const links = document.querySelectorAll("a, button, [role='button']");
    const enter = () => {
      cursorScale.set(2);
      cursorOpacity.set(0.5);
    };
    const leave = () => {
      cursorScale.set(1);
      cursorOpacity.set(1);
    };

    links.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    // Observe for dynamically added links
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      observer.disconnect();
    };
  }, [onMouseMove, cursorScale, cursorOpacity]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none rounded-full bg-iridescent mix-blend-screen hidden md:block"
        style={{
          width: 20,
          height: 20,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: cursorScale,
          opacity: cursorOpacity,
        }}
      />
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[99998] pointer-events-none rounded-full border border-rare/40 hidden md:block"
        style={{
          width: 40,
          height: 40,
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
