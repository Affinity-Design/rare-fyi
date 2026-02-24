"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Standard",
    price: "Free",
    description: "Start your journey with Rare",
    features: [
      "Basic claiming access",
      "Community support",
      "Standard rate limits",
      "Base tier staking",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "1,000 RARE",
    description: "Unlock full potential",
    features: [
      "Priority claiming queue",
      "Enhanced staking rewards",
      "AI trading bot access",
      "Lottery participation",
      "Exclusive governance rights",
      "Premium support",
    ],
    cta: "Upgrade Now",
    highlighted: true,
  },
  {
    name: "Whale",
    price: "10,000 RARE",
    description: "Maximum benefits & influence",
    features: [
      "All Premium benefits",
      "Direct protocol influence",
      "Custom rate limits",
      "Early feature access",
      "Exclusive events access",
      "1-on-1 support",
      "Founder community",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Membership Tiers
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Choose your level of engagement in the Rare ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-[2rem] p-8 transition-all duration-300 ${
                tier.highlighted
                  ? "bg-gradient-to-b from-[#D4AF37] to-[#B8952E] text-black md:-mt-4 md:mb-4 shadow-[0_8px_40px_rgba(212,175,55,0.4)]"
                  : "bg-white/5 border border-white/10 backdrop-blur-xl"
              }`}
            >
              {tier.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1">
                  Most Popular
                </Badge>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    tier.highlighted ? "text-black" : "text-white"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${
                      tier.highlighted ? "text-black" : "text-[#D4AF37]"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.price !== "Free" && (
                    <span
                      className={tier.highlighted ? "text-black/70" : "text-white/50"}
                    >
                      stake
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    tier.highlighted ? "text-black/80" : "text-white/60"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 text-sm ${
                      tier.highlighted ? "text-black/90" : "text-white/80"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        tier.highlighted ? "text-black" : "text-[#D4AF37]"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "default" : "ghost"}
                className={`w-full ${
                  tier.highlighted
                    ? "bg-black hover:bg-black/90 text-[#D4AF37] border border-black"
                    : ""
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
