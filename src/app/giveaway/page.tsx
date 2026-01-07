import type { Metadata } from "next";
import GiveawayHeroSection from "@/components/sections/GiveawayHeroSection";
import EntryFormSection from "@/components/sections/EntryFormSection";
import PrizeDetailsSection from "@/components/sections/PrizeDetailsSection";
import RulesSection from "@/components/sections/RulesSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Free Website Giveaway | IVB Digital",
  description:
    "Enter to win a free 3-page professional website for your Adult Family Home business. Includes custom design, hosting, maintenance, and SEO. No purchase necessary.",
  openGraph: {
    title: "Free Website Giveaway | IVB Digital",
    description:
      "Enter to win a free 3-page professional website for your Adult Family Home business. Includes custom design, hosting, maintenance, and SEO.",
    url: "https://ivbdigital.com/giveaway",
    siteName: "IVB Digital",
    type: "website",
    images: [
      {
        url: "https://ivbdigital.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "IVB Digital Free Website Giveaway",
      },
    ],
  },
  alternates: {
    canonical: "https://ivbdigital.com/giveaway",
  },
};

const giveawaySchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "IVB Digital Free Website Giveaway",
  description:
    "Enter to win a free 3-page professional website for your Adult Family Home business",
  sponsor: {
    "@type": "Organization",
    name: "IVB Digital",
    url: "https://ivbdigital.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function GiveawayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(giveawaySchema) }}
      />
      <GiveawayHeroSection />
      <EntryFormSection />
      <PrizeDetailsSection />
      <RulesSection />
      <CtaSection />
    </>
  );
}
