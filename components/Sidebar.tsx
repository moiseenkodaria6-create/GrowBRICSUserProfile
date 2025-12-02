import React from 'react';
import { Home, User, Briefcase, MessageSquare, BookOpen, Heart, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: Home, label: 'Главная' },
    { icon: User, label: 'Профиль', active: true },
    { icon: Briefcase, label: 'Отклики' },
    { icon: MessageSquare, label: 'Вакансии' },
    { icon: BookOpen, label: 'Курсы' }, // Using BookOpen as a placeholder for the suitcase/bag icon
    { icon: Heart, label: 'Избранное' },
  ];

  return (
    <aside className="w-24 bg-white flex flex-col items-center py-6 gap-2 h-[calc(100vh-80px)] sticky top-20 rounded-r-xl shadow-sm mr-4 hidden md:flex">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl cursor-pointer transition-colors
            ${item.active 
              ? 'bg-blue-100 text-blue-600' 
              : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
            }`}
        >
          <item.icon className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">{item.label}</span>
        </div>
      ))}
      <div className="mt-auto">
           <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl cursor-pointer text-gray-400 hover:bg-gray-50 hover:text-gray-600">
               <Settings className="w-6 h-6 mb-1" />
               <span className="text-[10px] font-medium">Settings</span>
           </div>
      </div>
    </aside>
  );
};

export default Sidebar;