import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "pulizie condomini roma",
    "pulizie uffici roma",
    "impresa di pulizie",
    "giardinaggio roma",
    "disinfestazione roma",
    "pulizie professionali",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="min-h-screen font-sans flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
