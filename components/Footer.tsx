import React from 'react';
import { Globe, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-8 border-t border-gray-200 mt-auto">
      <div className="max-w-[1600px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1">
             <div className="flex items-center gap-2 text-[#2B7A78] font-bold text-xl mb-4">
                <div className="bg-[#E6F4F1] p-1.5 rounded-lg">
                    <Globe className="w-6 h-6 text-[#2B7A78]" />
                </div>
                <span className="text-gray-800">GrowBRICS</span>
             </div>
             <p className="text-xs text-gray-500 mb-4 leading-relaxed max-w-xs">
                 Mejduynarodnaya platforma dlya poiska raboty i sotrudnikov v stranakh BRICS
             </p>
             <p className="text-xs text-gray-500">
                 Email: contact@growbrics.ru
             </p>
        </div>

        <div>
            <h4 className="font-bold text-gray-900 text-sm mb-4">Platforma</h4>
            <ul className="space-y-3 text-xs text-gray-600 font-medium">
                <li><a href="#" className="hover:text-blue-600">Vakansii</a></li>
                <li><a href="#" className="hover:text-blue-600">Kadry</a></li>
                <li><a href="#" className="hover:text-blue-600">Vozmojnosti</a></li>
            </ul>
        </div>

        <div>
            <h4 className="font-bold text-gray-900 text-sm mb-4">Kompaniya</h4>
            <ul className="space-y-3 text-xs text-gray-600 font-medium">
                <li><a href="#" className="hover:text-blue-600">O nas</a></li>
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Kontakty</a></li>
                <li><a href="#" className="hover:text-blue-600">Dokumentaciya</a></li>
            </ul>
        </div>

        <div>
             <h4 className="font-bold text-gray-900 text-sm mb-4">My v seti</h4>
             <div className="space-y-3">
                 <a href="#" className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-blue-600">
                     <div className="w-5 h-5 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 font-bold">V</div>
                     <span>Vkontakte</span>
                 </a>
                 <a href="#" className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-green-600">
                     <div className="w-5 h-5 bg-green-100 rounded-md flex items-center justify-center text-green-600">
                        <MessageCircle className="w-3 h-3" />
                     </div>
                     <span>WhatsApp</span>
                 </a>
             </div>
        </div>

      </div>

      <div className="max-w-[1600px] mx-auto px-8 mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500">
         <p>© 2024 GrowBRICS. Vse prava zashishcheny.</p>
         <div className="flex gap-6 mt-4 md:mt-0 underline">
             <a href="#">Usloviya ispolzovaniya</a>
             <a href="#">Politika konfidencialnosti</a>
             <a href="#">Nastroyki cookie</a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;