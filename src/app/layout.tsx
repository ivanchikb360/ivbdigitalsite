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
    default:
      "IVB Digital | Lead Generation & Web Design for Service Businesses",
    template: "%s | IVB Digital",
  },
  description:
    "We help service-based businesses generate more qualified leads and booked consultations through paid media, high-converting landing pages, funnels, SEO, automation, and professional web design.",
  keywords: [
    "lead generation for service businesses",
    "service business marketing",
    "web design for service businesses",
    "funnel design",
    "landing page design",
    "PPC for service businesses",
    "local SEO",
    "marketing automation",
    "IVB Digital",
  ],
  openGraph: {
    title: "IVB Digital | Lead Generation & Web Design for Service Businesses",
    description:
      "We generate qualified leads and booked consultations for service businesses through paid media, high-converting landing pages, funnels, SEO, and automation.",
    url: "https://ivbdigital.com",
    siteName: "IVB Digital",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IVB Digital - Lead Generation & Web Design for Service Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IVB Digital | Lead Generation & Web Design for Service Businesses",
    description:
      "We help service businesses generate more qualified leads and booked consultations through paid media, funnels, landing pages, and professional web design.",
    images: ["/og-image.png"],
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
