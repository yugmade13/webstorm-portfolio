import {
  Three,
  Application,
  ChevronDown,
  Debug,
  Run,
  Search,
  Settings,
  UserPlus,
  Vcs,
  Ws
} from '@/public/icons';

export default function Header() {
  return (
    <header className="w-full max-w-[1536px] mx-auto h-[40px] border-b-2 border-gray-primary">
      <div className="text-medium font-medium text-gray12 h-full bg-gray2 flex justify-between items-center px-1.5">
        <div className="h-full w-full md:max-w-[500px] flex justify-start items-center gap-x-3 header-gradient">
          <div className="hidden md:flex items-center gap-x-2">
            <span className="circle bg-red-500"></span>
            <span className="circle bg-yellow-500"></span>
            <span className="circle bg-green-500"></span>
          </div>
          <div className="flex items-center gap-x-2 text-icon">
            <Ws />
            <div className="flex items-center">
              <span>webstorm</span>
              <ChevronDown />
            </div>
          </div>
          <div className="flex items-center gap-x-2 text-icon">
            <Vcs />
            <div className="flex items-center">
              <span>main</span>
              <ChevronDown />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-12">
          <div className="hidden md:flex items-center gap-x-2">
            <div className="flex items-center gap-x-2 text-icon">
              <Application />
              <div className="flex items-center">
                <span>IDE Community</span>
                <ChevronDown />
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="icon">
                <Run />
              </div>
              <div className="icon">
                <Debug />
              </div>
              <div className="icon">
                <Three />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-x-1">
            <div className="icon">
              <UserPlus />
            </div>
            <div className="icon">
              <Search />
            </div>
            <div className="icon">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}