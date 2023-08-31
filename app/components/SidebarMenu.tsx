'use client';

import { useContext } from 'react';
import { SidebarContext } from '@/app/sidebar-provider';
import { ExpandAll, CollapseAll, Hide } from '@/public/icons';
import SidebarNav from '@/app/components/SidebarNav';

export default function SidebarMenu() {
  let { setIsFolderOpen, isSidebarOpen, setIsSidebarOpen }: any = useContext(SidebarContext);

  return (
    <div className={`${isSidebarOpen ? 'hidden md:block' : 'block md:hidden'} w-auto lg:w-[300px] height bg-gray2`}>
      <div className="text-gray12 text-medium font-medium h-full flex flex-col px-3">
        <div className="h-[41px] flex justify-between items-center">
          <span className="font-semibold">Project</span>
          <div className="flex items-center">
            <button
              onClick={() => setIsFolderOpen(true)}
              type="button"
              className="icon"
            >
              <CollapseAll />
            </button>
            <button
              onClick={() => setIsFolderOpen(false)}
              type="button"
              className="icon"
            >
              <ExpandAll />
            </button>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              type="button"
              className="icon"
            >
              <Hide />
            </button>
          </div>
        </div>
        <SidebarNav />
      </div>
    </div>
  );
}