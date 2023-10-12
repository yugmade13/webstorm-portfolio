import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Saya Yugma Dewangga, Saya adalah seorang Web Developer yang berpengalaman mengembangkan web menggunakan bahasa pemrograman JavaScript, TypeScript dan PHP.',
};

export default function About() {
  return (
    <section className="p-4 min-w-[334px]">
      <div className="font-mono text-base text-gray12">
        <div className="min-h-[calc(100vh-38px-39px-34px-32px-104px)] flex flex-col justify-center sm:items-center">
          <h1 className="text-3xl">Selemat Datang!👋</h1>
          <p className="text-gray7 sm:text-center max-w-[400px] mt-4">
            Hai.. Saya Yugma Dewangga, Saya adalah seorang Web Developer yang berpengalaman mengembangkan web menggunakan bahasa pemrograman JavaScript, TypeScript dan PHP.
          </p>
        </div>
      </div>
    </section>
  );
}