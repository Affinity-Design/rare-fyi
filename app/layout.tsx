import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rare Coin | Fair Distribution on Base Chain",
  description: "Rare Coin is redefining fair crypto distribution with bot-proof claiming, real utility, and community-driven growth on Base Chain.",
  keywords: ["crypto", "airdrop", "fair distribution", "Base Chain", "Rare Coin", "DeFi"],
  authors: [{ name: "Rare Coin Team" }],
  openGraph: {
    title: "Rare Coin | Fair Distribution on Base Chain",
    description: "Redefining fair crypto distribution with bot-proof claiming and real utility.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
