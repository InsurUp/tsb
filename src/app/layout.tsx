import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import EmotionCache from "./theme/EmotionCache";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const currentLocale = params.locale === 'en' ? 'en' : 'tr';

  const title = currentLocale === 'tr'
    ? "Digital Futures: Teknoloji Sigorta Sektörünü Nasıl Değiştiriyor?"
    : "Digital Futures: How Technology Changes The Insurance Sector";

  const description = currentLocale === 'tr'
    ? "Uluslararası Sigorta Zirvesi, sigorta sektörünün geleceğini şekillendiren küresel liderleri, uzmanları ve karar vericileri bir araya getiriyor."
    : "The International Insurance Summit brings together global leaders, experts, and decision-makers who are shaping the future of the insurance industry.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'insurancesummit.tsb.org.tr',
      siteName: 'Digital Futures',
      locale: currentLocale === 'tr' ? 'tr-TR' : 'en-US',
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
      title,
      description,
      images: ['/images/tsb_logo.png'],
    },
    alternates: {
      canonical: 'insurancesummit.tsb.org.tr',
    },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}> 
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning={true}>
        <EmotionCache>
          <Header />
          {children}
          <Footer />
        </EmotionCache>
      </body>
    </html>
  );
}
