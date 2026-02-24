import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-headline font-medium text-gradient mb-4">
            Blog
          </h1>
          <p className="text-text-tertiary text-lg">
            Insights, updates, and stories from the Rare Coin journey.
          </p>
        </div>

        {/* Coming Soon */}
        <div className="glass-card p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-primary to-gold-light mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium text-text-primary mb-4">
            Coming Soon
          </h2>
          <p className="text-text-tertiary mb-8 max-w-md mx-auto">
            Our blog posts are being crafted with care. Check back soon for
            articles about fair distribution, Base Chain, and our journey.
          </p>
          <Link href="/" className="btn-glass inline-block">
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
