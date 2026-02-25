import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Philosophy from "@/components/philosophy";
import Protocol from "@/components/protocol";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import SectionDivider from "@/components/section-divider";

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#050505]">
      {/* Global noise overlay is handled in globals.css */}

      {/* Floating Navigation */}
      <Navbar />

      {/* Hero Section - Full viewport cinematic experience */}
      <Hero />

      <SectionDivider label="Features" />

      {/* Features - Bot-Proof Micro-UI Dashboard */}
      <Features />

      <SectionDivider label="Philosophy" />

      {/* Philosophy - The Manifesto */}
      <Philosophy />

      <SectionDivider label="Protocol" />

      {/* Protocol - Sticky Stacking Cards */}
      <Protocol />

      <SectionDivider label="Pricing" />

      {/* Pricing - Three-tier Membership */}
      <Pricing />

      {/* Footer with System Status */}
      <Footer />
    </main>
  );
}
