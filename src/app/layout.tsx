import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ivbdigital.com"),
  title: {
    default: "IVB Digital | B2B Digital Marketing Agency",
    template: "%s | IVB Digital",
  },
  description:
    "IVB Digital is a B2B digital marketing agency helping growth-minded teams build trust, accelerate pipeline, and convert demand through modern web experiences.",
  keywords: [
    "B2B marketing agency",
    "digital marketing strategy",
    "demand generation",
    "growth marketing",
    "IVB Digital",
  ],
  openGraph: {
    title: "IVB Digital | B2B Digital Marketing Agency",
    description:
      "Partner with IVB Digital to architect data-backed marketing experiences that convert enterprise buyers.",
    url: "https://ivbdigital.com",
    siteName: "IVB Digital",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVB Digital - B2B Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IVB Digital | B2B Digital Marketing Agency",
    description:
      "We design data-driven marketing systems that build trust and accelerate revenue for B2B teams.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ivbdigital.com",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-[#171717] antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
