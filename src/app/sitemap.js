import { industries_const } from "@/constants/constvalues";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_VERCEL_URL ;

  // Generate dynamic URLs from industries_const
  const indUrls = industries_const.map((industry) => ({
    url: `${baseUrl}/${industry.slug}`,
    lastModified: new Date().toISOString(),
  }));

  // Static URLs
  const staticUrls = [
    { url: `${baseUrl}`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/services`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/careers`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
  ];

  // Combine static and dynamic URLs
  return [...staticUrls, ...indUrls];
}
