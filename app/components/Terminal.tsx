'use client';

import { useContext } from 'react';
import { Add, CloseSmall, Hide } from '@/public/icons';
import { SidebarContext } from '@/app/sidebar-provider';

export default function Terminal() {
  const { isTerminalOpen, setIsTerminalOpen }: any = useContext(SidebarContext);

  return (
    <div className={`${isTerminalOpen ? 'block' : 'hidden'} absolute bottom-0 left-[41px] right-0 lg:right-[41px]`}>
      <div className="text-medium font-medium text-gray12 bg-gray2">
        <div className="flex flex-col justify-start">
          <div className="h-[41px] px-2 flex justify-between items-center border-y-2 border-gray-primary">
            <ul className="flex justify-start items-center gap-x-2">
              <li className="font-semibold relative h-[41px] flex items-center px-2">
                Terminal
              </li>
              <li className="relative h-[41px] flex items-center px-2 gap-x-2 active-navbar">
                <span>Local</span>
                <CloseSmall />
              </li>
              <li className="icon">
                <Add />
              </li>
            </ul>
            <button
              aria-label="Close Terminal"
              onClick={() => setIsTerminalOpen(!isTerminalOpen)}
              type="button"
              className="icon"
            >
              <Hide />
            </button>
          </div>
        </div>
        <div className="w-full px-2 font-mono bg-gray-primary">
          <p className="py-6 overflow-x-auto whitespace-nowrap">
            D:\next.js\webstorm&gt;
            <span className="typing-text">
              {'Selamat datang di website saya '}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}