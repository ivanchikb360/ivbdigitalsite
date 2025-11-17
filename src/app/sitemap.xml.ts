import type { MetadataRoute } from "next";
import { servicesContent } from "@/data/services";
import { caseStudiesContent } from "@/data/caseStudies";
import { insightsContent } from "@/data/insights";

const baseUrl = "https://ivbdigital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/approach",
    "/case-studies",
    "/insights",
    "/about",
    "/contact",
    "/sitemap",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const serviceRoutes = Object.values(servicesContent).map(
    (service) => `/services/${service.slug}`,
  );

  const caseStudyRoutes = Object.values(caseStudiesContent).map(
    (study) => `/case-studies/${study.slug}`,
  );

  const insightRoutes = Object.values(insightsContent).map(
    (insight) => `/insights/${insight.slug}`,
  );

  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...insightRoutes,
  ];

  return allRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }));
}


