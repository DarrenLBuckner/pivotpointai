import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../public/tailwind.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "../components/CookieBanner";

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
  keywords: "AI implementation, business automation, Caribbean AI, African AI, SME technology, AI training, business growth, emerging markets AI, WhatsApp automation, AI consulting",
  authors: [{ name: "PivotPoint AI" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "PivotPoint AI - AI Implementation for SMEs in Emerging Markets",
    description: "Practical, low-cost AI solutions to grow sales and cut costs. WhatsApp-first. Hands-on delivery for Caribbean and African markets.",
    url: "https://pivotpointai.io",
    siteName: "PivotPoint AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://pivotpointai.io/images/pivotpointlogo.jpg",
        width: 1200,
        height: 630,
        alt: "PivotPoint AI - AI Implementation for SMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PivotPoint AI - AI Implementation for SMEs",
    description: "Practical, low-cost AI solutions for emerging markets",
    images: ["https://pivotpointai.io/images/pivotpointlogo.jpg"],
  },
  alternates: {
    canonical: "https://pivotpointai.io",
  },
  verification: {
    google: "RT9O_dYq27a7U3qtTDd66CDi2f2KqTu56W35g1CNHTc",
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
                <meta name="google-site-verification" content="RT9O_dYq27a7U3qtTDd66CDi2f2KqTu56W35g1CNHTc" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-462H8MHEEB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-462H8MHEEB');
            `,
          }}
        />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PivotPoint AI",
              "url": "https://pivotpointai.io",
              "logo": "https://pivotpointai.io/images/pivotpointlogo.jpg",
              "description": "AI implementation and automation solutions for SMEs in emerging markets",
              "sameAs": [
                "https://www.linkedin.com/company/pivotpoint-ai",
                "https://twitter.com/pivotpointai"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-xxx-xxx-xxxx",
                "contactType": "Customer Service",
                "availableLanguage": "English"
              },
              "areaServed": [
                "Caribbean",
                "Africa",
                "Emerging Markets"
              ],
              "serviceType": [
                "AI Implementation",
                "Business Automation", 
                "AI Training",
                "WhatsApp Automation"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
