import { allArticles, Article } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artikel',
  description: 'Baca beberapa tulisan saya',
};

export default function Articles() {
  const articles: Article[] = allArticles.filter((article) => article.published);

  return (
    <section className="p-4 pb-[116px] min-w-[334px]">
      <div className="font-mono text-gray12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((article: Article, index) => (
            <Link
              aria-label={article.title}
              title={article.title}
              key={index}
              href={article.path}
            >
              <div className="relative h-[175px]">
                <Image
                  src={article.image}
                  alt="image article"
                  fill={true}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col gap-y-3">
                <h3 className="text-base text-gray9">{article.title}</h3>
                <p className="text-paragraph text-gray7 line-clamp-3">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}