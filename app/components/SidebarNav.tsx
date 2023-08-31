'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { folder, chevronGap, typescript } from '@/public/icons'
import Link from 'next/link';
import { navLinks } from '@/constant';

export default function SideNavbar() {
  const [openFolder, setOpenFolder] = useState(true);
  const pathname = usePathname();

  return (
    <div className="mt-2">
      <button
        onClick={() => setOpenFolder(!openFolder)}
        className="flex items-center gap-x-2"
        type="button"
      >
        <div className="flex items-center gap-x-1">
          <Image className={`${openFolder ? 'rotate-90' : 'rotate-0'}`} src={chevronGap} alt="chevron gap icon" />
          <Image src={folder} alt="folder icon" />
        </div>
        <div className="flex gap-x-2">
          <span>webstorm</span>
          <span className="text-gray7">~/webstorm</span>
        </div>
      </button>
      <div className={`${openFolder ? 'h-auto' : 'h-0'} my-1 overflow-hidden`}>
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li
              key={link.title}
              className={`${link.path === pathname ? 'bg-blue2' : ''} pl-10 py-1 rounded-md hover:bg-blue2`}
            >
              <Link
                className="flex gap-x-2"
                href={link.path}
              >
                <Image src={link.icon} alt="typescript logo" />
                <span>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}