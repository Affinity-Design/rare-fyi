export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "gnosis-to-base-migration-guide",
    title: "How to Claim Your Rare Coin on Base: The Gnosis Migration Guide",
    excerpt: "A step-by-step tutorial on how to bridge your legacy RARE tokens and LP stakes from Gnosis Chain to the new Rare Coin ecosystem on Base.",
    date: "2026-03-01",
    author: "Felix",
    readingTime: "5 min read",
    tags: ["tutorial", "migration", "news"],
  },
  {
    slug: "ai-trading-agents-utility",
    title: "AI Trading Agents: Why RARE has Real Utility",
    excerpt: "Discover how Rare Coin is moving beyond simple distribution to power a marketplace of AI trading agents designed to maximize profits on Base Chain.",
    date: "2026-03-01",
    author: "Felix",
    readingTime: "4 min read",
    tags: ["utility", "education"],
  },
  {
    slug: "stake-to-claim-anti-bot",
    title: "Stake-to-Claim: Our Nuclear Option Against Bots",
    excerpt: "Why Rare Coin is implementing an economic barrier to ensure tokens reach real humans, not bot farms. Introducing the 3-Tier Proof of Humanity.",
    date: "2026-03-01",
    author: "Felix",
    readingTime: "4 min read",
    tags: ["security", "education", "tutorial"],
  },
  {
    slug: "rare-lottery-v3-guide",
    title: "Rare Lottery: How to Turn Your Claims into Jackpots",
    excerpt: "Everything you need to know about the RareLotteryV3—the provably fair, high-stakes lottery for the Rare Coin community on Base Chain.",
    date: "2026-03-01",
    author: "Felix",
    readingTime: "3 min read",
    tags: ["tutorial", "utility"],
  },
  {
    slug: "why-rare-coin-failed",
    title: "Why Rare Coin Failed and How We're Fixing It",
    excerpt: "An honest look at what went wrong with the original Rare Coin distribution, and our plan to build something better.",
    date: "2026-02-24",
    author: "Felix",
    readingTime: "6 min read",
    tags: ["news", "education"],
  },
  {
    slug: "bot-problem-in-crypto-airdrops",
    title: "The Bot Problem in Crypto Airdrops",
    excerpt: "How bots are destroying fair distribution in crypto, and what we can do about it.",
    date: "2026-02-24",
    author: "Felix",
    readingTime: "7 min read",
    tags: ["security", "education"],
  },
];
