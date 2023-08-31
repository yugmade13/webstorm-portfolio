import { allArticles, Article } from 'contentlayer/generated';
import Mdx from '@/app/components/Mdx';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const article: Article | undefined = allArticles.find((article: Article) => article._raw.flattenedPath === `articles/${slug}`);

  return {
    title: article?.title,
    description: article?.description
  }
}

export const generateStaticParams = async () => allArticles.map((article: Article) => ({ slug: article._raw.flattenedPath }))

export default function ArticleDetail({ params }: { params: { slug: string } } ) {
  const article: Article | undefined = allArticles.find((article: Article) => article._raw.flattenedPath === `articles/${params.slug}`);

  if(!article) {
    return notFound();
  }

  return (
    <section className="p-4 pb-[116px] min-w-[334px]">
      <div className="prose prose-sm prose-invert lg:prose-base w-full text-gray7">
        <Mdx code={article?.body.code} />
      </div>
    </section>
  );
}