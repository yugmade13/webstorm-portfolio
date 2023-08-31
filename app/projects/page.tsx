import { projects } from '@/constant';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyek',
  description: 'Beberapa proyek yang pernah saya buat',
};

export default function Projects() {
  return (
    <section className="p-4 pb-[116px] min-w-[334px]">
      <div className="font-sans text-gray12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <li key={project.title} className="p-4 bg-gray2 rounded-md">
              <div>
                <h3 className="text-white text-base font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-gray9 mt-2">
                  {project.description}
                </p>
              </div>
              <Link
                target="_blank"
                className="inline-block mt-4 text-medium text-white px-6 py-1.5 bg-gray4 rounded-md"
                href={project.link}
              >
                Go it
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}