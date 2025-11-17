import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ApproachSection from "@/components/sections/ApproachSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InsightsSection from "@/components/sections/InsightsSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Lead Generation for Service Businesses | IVB Digital",
  description:
    "We help service-based businesses generate more qualified leads and booked consultations through paid media, high-converting landing pages, funnels, SEO, and automation.",
  openGraph: {
    title: "Lead Generation for Service Businesses | IVB Digital",
    description:
      "Paid search & social, landing pages & CRO, offers & funnels, local/service SEO, and automation to turn clicks into booked calls.",
    url: "https://ivbdigital.com",
    siteName: "IVB Digital",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IVB Digital brand preview",
      },
    ],
  },
  alternates: {
    canonical: "https://ivbdigital.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IVB Digital",
  url: "https://ivbdigital.com",
  logo: "https://ivbdigital.com/og-image.jpg",
  description:
    "IVB Digital is a B2B digital marketing agency partnering with growth-minded teams to design data-driven customer experiences.",
  sameAs: [
    "https://www.linkedin.com/company/ivbdigital",
    "https://www.twitter.com/ivbdigital",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-360-606-7393",
      contactType: "sales",
      email: "ivbogdan@outlook.com",
      areaServed: "US",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <InsightsSection />
      <CtaSection />
    </>
  );
}
