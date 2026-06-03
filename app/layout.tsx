import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import SchemaMarkup, { generateLocalBusinessSchema } from "@/components/seo/SchemaMarkup";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: "Smart Pet Hub — Premium Pet Shop in Dehradun | Dogs, Cats, Fish & More",
  description: "Dehradun's most trusted pet store. Shop certified dog & cat breeds, premium pet food, aquarium setup, and expert consultations. WhatsApp: +919557208775",
  alternates: {
    canonical: 'https://smartpethub.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${notoSansDevanagari.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <SchemaMarkup type="LocalBusiness" data={generateLocalBusinessSchema()} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
