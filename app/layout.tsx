import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rare Coin | Fair is the Future",
  description: "Bot-proof distribution. Real utility. 1M ultra-rare tokens on Base Chain.",
  keywords: ["crypto", "token", "rare", "base chain", "bot-proof", "fair distribution"],
  authors: [{ name: "Rare Coin" }],
  openGraph: {
    title: "Rare Coin | Fair is the Future",
    description: "Bot-proof distribution. Real utility. 1M ultra-rare tokens on Base Chain.",
    type: "website",
    locale: "en_US",
    siteName: "Rare Coin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rare Coin | Fair is the Future",
    description: "Bot-proof distribution. Real utility. 1M ultra-rare tokens on Base Chain.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg-primary text-white antialiased">
        {children}
      </body>
    </html>
  );
}
