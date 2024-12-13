export default function robots() {
    const baseUrl = process.env.NEXT_VERCEL_URL ;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}