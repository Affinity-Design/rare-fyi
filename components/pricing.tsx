"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Start claiming Rare Coin today",
    features: [
      "Daily claims",
      "Basic staking",
      "Lottery entry",
      "Community access",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "1,000 RARE",
    description: "Unlock premium features and rewards",
    features: [
      "Priority claims",
      "Enhanced staking APY",
      "VIP lottery odds",
      "Trading bot access",
      "Early feature access",
    ],
    cta: "Stake Now",
    highlighted: true,
  },
  {
    name: "Whale",
    price: "10,000 RARE",
    description: "Maximum rewards and exclusivity",
    features: [
      "Instant claims",
      "Maximum staking APY",
      "Guaranteed lottery entries",
      "Full trading bot suite",
      "Governance voting",
      "Direct team access",
    ],
    cta: "Go Whale",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your <span className="bg-gradient-to-r from-[#E91E63] via-[#9D00FF] to-[#00BCD4] bg-clip-text text-transparent">Level</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Stake more RARE to unlock premium features and higher rewards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                tier.highlighted
                  ? "bg-gradient-to-br from-[#9D00FF]/20 to-[#E91E63]/20 border-2 border-[#9D00FF]/50 scale-105"
                  : "bg-[#0A0A0A] border border-white/10"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#E91E63] to-[#9D00FF] text-white text-sm font-medium">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#E91E63] to-[#9D00FF] bg-clip-text text-transparent mb-2">
                {tier.price}
              </div>
              <p className="text-white/60 text-sm mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80 text-sm">
                    <svg className="w-5 h-5 text-[#00BCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-all ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-[#E91E63] to-[#9D00FF] text-white hover:opacity-90"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
