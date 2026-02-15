import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // اگر کوئی فولڈر چھپانا ہو
    },
    sitemap: 'https://saudirate.com/sitemap.xml',
  };
}