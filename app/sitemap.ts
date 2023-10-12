import { MetadataRoute } from 'next'
import { allArticles, Article } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = allArticles.map((article: Article) => ({
    url: `https://www.yugma.dev/${article.path}`,
    lastModified: new Date(article.date as string).toISOString().split('T')[0],
  }));

  const routes = ['', 'articles', 'projects'].map(
    (route) => ({
      url: `https://www.yugma.dev/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }),
  );

  return [...routes, ...articles];
}