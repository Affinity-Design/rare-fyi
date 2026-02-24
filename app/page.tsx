import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto w-full">
          {/* Glass Card */}
          <div className="glass-card p-12 md:p-16 animate-fade-in">
            <div className="text-center">
              {/* Logo/Brand */}
              <div className="mb-8 animate-float">
                <div className="inline-block">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gold-primary to-gold-light flex items-center justify-center shadow-glow">
                    <span className="text-4xl md:text-5xl font-medium text-black">R</span>
                  </div>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-headline font-medium text-gradient mb-6">
                Rare Coin
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                Fair Distribution. Real Utility. On Base Chain.
              </p>

              {/* Description */}
              <p className="text-base text-text-tertiary mb-12 max-w-lg mx-auto">
                We reimagined crypto distribution with bot-proof claiming, staking rewards,
                and a trading ecosystem built for long-term value.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://rare.claims"
                  className="btn-glass inline-block text-center"
                >
                  Start Claiming
                </Link>
                <Link
                  href="/blog"
                  className="btn-ghost inline-block text-center"
                >
                  Learn More
                </Link>
              </div>

              {/* Stats/Fetch */}
              <div className="mt-16 pt-8 border-t border-glass-subtle">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-medium text-gold-primary mb-2">
                      Bot-Proof
                    </div>
                    <div className="text-sm text-text-muted uppercase tracking-wider">
                      Anti-sybil system
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-medium text-gold-primary mb-2">
                      Base Chain
                    </div>
                    <div className="text-sm text-text-muted uppercase tracking-wider">
                      Fast & affordable
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-medium text-gold-primary mb-2">
                      100M Supply
                    </div>
                    <div className="text-sm text-text-muted uppercase tracking-wider">
                      Total tokens
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-accent-pink to-accent-cyan opacity-10 blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-gold-primary to-gold-light opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue opacity-10 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center text-gradient mb-4">
            Built for Fairness
          </h2>
          <p className="text-text-tertiary text-center mb-16 max-w-2xl mx-auto">
            Our dual-pool distribution system prevents bot farming and ensures
            every real user gets their fair share.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="glass-card p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-primary to-gold-dark mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0m-6 0l-6 6m6-6l6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-text-primary">
                Bot-Proof Claiming
              </h3>
              <p className="text-text-tertiary text-base leading-relaxed">
                Stake-to-Claim system and CAPTCHA verification ensure only real humans
                can participate in distribution.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-pink to-accent-cyan mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 3 3 3 .895 0 3-.895 3-2-.895-3-3-3m0 8c.667 0 1.333-.021 1.988-.066L20 15l-2.5 2.5c-.66-.045-1.321-.066-1.988-.066-1.657 0-3 .895-3 2s1.343 3 3 3 .895 0 3-.895 3-2-.895-3-3-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-text-primary">
                Real Utility
              </h3>
              <p className="text-text-tertiary text-base leading-relaxed">
                Stake your RARE, play the lottery, and use the AI trading bot.
                Beyond just holding tokens.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7m0 0v4h7m-7 0v-4m-7 0h7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-text-primary">
                Dual Pool System
              </h3>
              <p className="text-text-tertiary text-base leading-relaxed">
                Two alternating claim pools ensure fairness and prevent
                coordinated exploitation of the distribution system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-glow to-transparent opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-medium text-gradient mb-6">
                Ready to Claim?
              </h2>
              <p className="text-lg text-text-tertiary mb-8 max-w-xl mx-auto">
                Join thousands of users claiming their fair share of RARE.
                No presale, no team allocation—pure distribution.
              </p>
              <Link
                href="https://rare.claims"
                className="btn-glass inline-block"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
