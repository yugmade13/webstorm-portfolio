import { allArticles, Article } from 'contentlayer/generated';
import Mdx from '@/app/components/Mdx';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const article: Article | undefined = allArticles.find((article: Article) => article._raw.flattenedPath === `articles/${slug}`);

  if (!article) {
    return notFound();
  }

  const ogImage = 'https://www.yugma.dev' + article.image;

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.yugma.dev/${article?.path}`,
      images: [
        {
          url: ogImage
        }
      ],
    },
  }
}

export const generateStaticParams = async () => allArticles.map((article: Article) => ({ slug: article._raw.flattenedPath }))

export default function ArticleDetail({ params }: { params: { slug: string } } ) {
  const article: Article | undefined = allArticles.find((article: Article) => article._raw.flattenedPath === `articles/${params.slug}`);

  if(!article) {
    return notFound();
  }

  function formatDate(date: string | undefined) {
    if (!date) {
      return Date.now();
    }

    const currentDate = new Date();
    const targetDate = new Date(date);

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    const daysAgo = currentDate.getDate() - targetDate.getDate();

    let formattedDate = '';

    if (yearsAgo > 0) {
      formattedDate = `${yearsAgo} tahun yang lalu`;
    } else if (monthsAgo > 0) {
      formattedDate = `${monthsAgo} bulan yang lalu`;
    } else if (daysAgo > 0) {
      formattedDate = `${daysAgo} hari yang lalu`;
    } else {
      formattedDate = 'Hari ini';
    }

    const fullDate = targetDate.toLocaleString('id-ID', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    return `${fullDate} (${formattedDate})`;
  }

  return (
    <section className="p-4 pb-[116px] min-w-[334px]">
      <div className="prose prose-sm prose-invert w-full text-gray7 mx-auto">
        <div className="flex flex-col gap-y-4">
         <div className="flex flex-col gap-y-2">
           <h1 className="m-0 text-center">{article.title}</h1>
           <p className="m-0 text-xs text-center">{`${formatDate(article.date)} - Yugma Dewangga`}</p>
         </div>
          <p className="m-0">{article.description}</p>
        </div>
        <Mdx code={article?.body.code} />
      </div>
    </section>
  );
}