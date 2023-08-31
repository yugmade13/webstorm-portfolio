'use client';

import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { SidebarContext } from '@/app/sidebar-provider';
import Link from 'next/link';
import { sidebarLinks } from '@/constant';
import {
  Rectangle,
  Terminal,
  Refresh,
} from '@/public/icons';

export default function SidebarLeft() {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    isTerminalOpen,
    setIsTerminalOpen,
  }: any = useContext(SidebarContext);
  const pathname = usePathname();

  return (
    <div className="min-w-[41px] height bg-gray2 border-r-2 border-gray-primary">
      <div className="h-full flex flex-col justify-between items-center py-2">
        <div className="flex flex-col items-center gap-y-2">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            type="button"
            className={`${pathname === '/' ? 'active' : ''} icon`}
          >
            <Rectangle />
          </button>
          {sidebarLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.title}
                href={link.path}
                className={`${pathname === link.path ? 'active' : ''} icon`}
                >
                <Icon />
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <button
            onClick={() => setIsTerminalOpen(!isTerminalOpen)}
            type="button"
            className="icon"
          >
            <Terminal />
          </button>
          <button
            onClick={() => window.location.reload()}
            type="button"
            className="icon"
          >
            <Refresh />
          </button>
        </div>
      </div>
    </div>
  );
}