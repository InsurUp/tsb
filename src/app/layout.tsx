import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import EmotionCache from "./theme/EmotionCache";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Digital Futures: How Technology Changes The Insurance Sector",
  description: "The International Insurance Summit brings together global leaders, experts, and decision-makers who are shaping the future of the insurance industry.",
  openGraph: {
    title: 'Digital Futures: How Technology Changes The Insurance Sector',
    description: 'The International Insurance Summit brings together global leaders, experts, and decision-makers who are shaping the future of the insurance industry.',
    type: 'website',
    url: 'insurancesummit.tsb.org.tr',
    siteName: 'Digital Futures',
    locale: 'tr-TR',
    images: [
      {
        url: "/images/tsb_logo.png",
        width: 1200,
        height: 630,
        alt: "Digital Futures Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Futures: How Technology Changes The Insurance Sector',
    description: 'The International Insurance Summit brings together global leaders, experts, and decision-makers who are shaping the future of the insurance industry.',
    images: ['/images/tsb_logo.png'], 
  },
  alternates: {
    canonical: 'insurancesummit.tsb.org.tr',
  }, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr"> 
      <body className={inter.className}>
        <EmotionCache>
          <Header />
          {children}
          <Footer />
        </EmotionCache>
      </body>
    </html>
  );
}
