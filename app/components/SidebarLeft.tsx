import Image from 'next/image';
import { bookmark, commit, rectangle, structure, problems } from '@/public/icons';

export default function Sidebar() {
  return (
    <div className="min-w-[41px] height bg-gray2 border-r-2 border-gray-primary">
      <div className="h-full flex flex-col justify-between items-center py-2">
        <div className="flex flex-col items-center gap-y-2">
          <div className="icon active">
            <Image src={rectangle} alt="icon" />
          </div>
          <div className="icon">
            <Image src={structure} alt="icon" />
          </div>
          <div className="icon">
            <Image src={commit} alt="icon" />
          </div>
          <div className="icon">
            <Image src={bookmark} alt="icon" />
          </div>
        </div>
        <div>
          <div className="icon">
            <Image src={problems} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}