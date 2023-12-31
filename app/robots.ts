import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://www.yugma.dev/sitemap.xml',
    host: 'https://www.yugma.dev',
  };
}