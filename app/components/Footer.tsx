'use client';

import { usePathname} from 'next/navigation';
import { Module, Unlock, ChevronGap } from '@/public/icons';
import DynamicClock from '@/app/components/DynamicClock';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full max-w-[1536px] mx-auto h-[29px] border-t-2 border-gray-primary">
      <div className="text-medium font-medium text-gray12 h-full bg-gray2 flex justify-between items-center px-2">
        <div className="px-1.5 py-1 cursor-pointer rounded-md hover:bg-gray8 hover:bg-opacity-30">
          <div className="flex items-center justify-start gap-x-1">
            <div className="flex items-center gap-x-1.5">
              <Module />
              <span>webstorm</span>
            </div>
            <ChevronGap />
            <div className="flex items-center gap-x-1.5">
              <Module />
              <span className="block">{pathname === '/' ? 'index' : pathname.split('/')[1]}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-3">
          <DynamicClock />
          <span>LF</span>
          <span>UTF</span>
          <div className="p-1 rounded-md hover:bg-gray8 hover:bg-opacity-30">
            <Unlock />
          </div>
        </div>
      </div>
    </footer>
  );
}