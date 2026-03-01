import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
  Space_Mono,
} from "next/font/google";
import Script from "next/script";
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
    "airdrop",
    "staking",
    "lottery",
  ],
  authors: [{ name: "Rare Coin" }],
  openGraph: {
    title: "Rare Coin | Fair is the Future",
    description:
      "Bot-proof distribution. Real utility. 3.65M ultra-rare tokens on Base Chain.",
    type: "website",
    locale: "en_US",
    siteName: "Rare Coin",
    images: [
      {
        url: "/rare-logo.png",
        width: 800,
        height: 600,
        alt: "Rare Coin Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rare Coin | Fair is the Future",
    description:
      "Bot-proof distribution. Real utility. 3.65M ultra-rare tokens on Base Chain.",
    images: ["/rare-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`scroll-smooth ${jakarta.variable} ${cormorant.variable} ${spaceMono.variable}`}
    >
      <body className="bg-void text-text antialiased">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
