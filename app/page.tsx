import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Philosophy from "@/components/philosophy";
import Protocol from "@/components/protocol";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#050505]">
      {/* Global noise overlay is handled in globals.css */}
      
      {/* Floating Navigation */}
      <Navbar />
      
      {/* Hero Section - Full viewport cinematic experience */}
      <Hero />
      
      {/* Features - Bot-Proof Micro-UI Dashboard */}
      <Features />
      
      {/* Philosophy - The Manifesto */}
      <Philosophy />
      
      {/* Protocol - Sticky Stacking Cards */}
      <Protocol />
      
      {/* Pricing - Three-tier Membership */}
      <Pricing />
      
      {/* Footer with System Status */}
      <Footer />
    </main>
  );
}
