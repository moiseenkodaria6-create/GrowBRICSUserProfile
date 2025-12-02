import React from 'react';
import { Globe, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white px-8 py-3 flex justify-between items-center shadow-sm z-10 sticky top-0">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 text-[#2B7A78] font-bold text-xl">
          <div className="bg-[#E6F4F1] p-1.5 rounded-lg">
             <Globe className="w-6 h-6 text-[#2B7A78]" />
          </div>
          <span className="text-gray-800 hidden md:block">GrowBRICS</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600 text-sm cursor-pointer hover:text-gray-900">
          <Globe className="w-4 h-4" />
          <span>Русский</span>
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer">
          <Bell className="w-5 h-5 text-gray-500" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-3 h-3 flex items-center justify-center rounded-full"></span>
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 cursor-pointer">
          <img src="https://picsum.photos/id/64/100/100" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;