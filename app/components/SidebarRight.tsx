import { Notifications, Database } from '@/public/icons';

export default function SidebarRight() {
  return (
    <div className="hidden lg:block min-w-[41px] height bg-gray2 border-x-2 border-gray-primary">
      <div className="h-full flex flex-col items-center gap-y-2 py-2">
        <div className="icon">
          <Notifications />
        </div>
        <div className="icon">
          <Database />
        </div>
      </div>
    </div>
  );
}