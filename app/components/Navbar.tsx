'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CloseSmall } from '@/public/icons';
import { navLinks } from '@/constant';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block sticky top-0 bg-gray-primary flex-1 h-[41px] border-b-2 border-gray2 overflow-y-hidden overflow-x-auto">
      <ul className="text-gray12 font-medium text-medium h-full flex justify-start items-center">
        {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <li
              key={link.title}
              className={`${link.path === pathname ? 'active-navbar' : ''} relative px-2 h-[41px]`}
            >
              <Link
                aria-label={link.name}
                title={link.name}
                className="h-full flex justify-center items-center gap-x-2"
                href={link.path}
                target={link.title === 'resume.pdf' ? '_blank' : '_self'}
              >
                <Icon />
                {link.title}
                <CloseSmall className={`${link.path === pathname ? 'visible' : 'invisible'}`} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}