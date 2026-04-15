import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const BASE_URL = "https://myriadlc.org"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ]
}
