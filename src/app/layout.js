import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ocean Tech Zone - Digital Marketing Agency in Delhi, India",
  description:
    "Drive traffic, boost conversions, and dominate rankings with our digital marketing agency. Contact us today to elevate your online strategy and grow success.",
  keywords:
    "Digital Marketing Agency,Digital Marketing Agency in Delhi,Digital Marketing Solutions,Search Engine Optimization,website Desiging,Delhi-NCR,SEO Services,PPC Advertising,Social Media Marketing,Content Marketing,Email Marketing,Online Marketing,Digital Strategy,Marketing Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://oceantechzone.in",
  },
  icons: {
    icon: "/meta.ico",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  verification: {
    google: "lPHNTvgJ0OGhwK75Y7vjisPzK59Km_eoymKvRRQGn1I",
  },
  other: {
    Keywords: "ocean tech zone",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S5ZC74ZVD0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S5ZC74ZVD0');
          `}
        </Script>

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Umyfbo9vPrMDCRAyXI40zA"
          async
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
