import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
  Space_Mono,
} from "next/font/google";
import CustomCursor from "@/components/cursor";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rare Coin | Fair is the Future",
  description:
    "Bot-proof distribution. Real utility. 3.65M ultra-rare tokens on Base Chain.",
  keywords: [
    "crypto",
    "token",
    "rare",
    "base chain",
    "bot-proof",
    "fair distribution",
  ],
  authors: [{ name: "Rare Coin" }],
  openGraph: {
    title: "Rare Coin | Fair is the Future",
    description:
      "Bot-proof distribution. Real utility. 3.65M ultra-rare tokens on Base Chain.",
    type: "website",
    locale: "en_US",
    siteName: "Rare Coin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rare Coin | Fair is the Future",
    description:
      "Bot-proof distribution. Real utility. 3.65M ultra-rare tokens on Base Chain.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${jakarta.variable} ${cormorant.variable} ${spaceMono.variable}`}
    >
      <body className="bg-void text-text antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
