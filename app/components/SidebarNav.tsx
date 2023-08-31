'use client';

import { useContext } from 'react';
import { SidebarContext } from '@/app/sidebar-provider';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Folder, ChevronGap } from '@/public/icons'
import Link from 'next/link';
import { navLinks } from '@/constant';

export default function SidebarNav() {
  const pathname = usePathname();
  let { isFolderOpen, setIsFolderOpen }: any = useContext(SidebarContext);

  return (
    <div className="mt-2">
      <button
        onClick={() => setIsFolderOpen(!isFolderOpen)}
        className="flex items-center gap-x-2"
        type="button"
      >
        <div className="flex items-center gap-x-1">
          <ChevronGap className={`${isFolderOpen? 'rotate-90' : 'rotate-0'}`} />
          <Folder />
        </div>
        <div className="flex gap-x-2">
          <span>webstorm</span>
          <span className="text-gray7">~/webstorm</span>
        </div>
      </button>
      <div className={`${isFolderOpen ? 'h-auto' : 'h-0'} my-1 overflow-hidden`}>
        <ul className="flex flex-col">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <li
                key={link.title}
                className={`${link.path === pathname ? 'bg-blue2' : ''} pl-10 py-1 rounded-md hover:bg-gray8 hover:bg-opacity-30`}
              >
                <Link
                  className="flex gap-x-2"
                  href={link.path}
                >
                  <Icon />
                  <span>{link.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}