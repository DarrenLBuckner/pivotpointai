import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../public/tailwind.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PivotPoint AI - AI Implementation for SMEs in Emerging Markets",
  description: "Practical, low-cost AI solutions to grow sales and cut costs. WhatsApp-first. Hands-on delivery for Caribbean and African markets.",
  keywords: "AI implementation, business automation, Caribbean AI, African AI, SME technology, AI training, business growth",
  authors: [{ name: "PivotPoint AI" }],
  openGraph: {
    title: "PivotPoint AI - AI Implementation for SMEs",
    description: "Practical, low-cost AI solutions for emerging markets",
    url: "https://pivotpointai.io",
    siteName: "PivotPoint AI",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
