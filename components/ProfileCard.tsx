import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Edit3, CheckCircle, Eye } from 'lucide-react';

interface ProfileCardProps {
    onOpenAI: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ onOpenAI }) => {
  const data = [
    { name: 'Completed', value: 80 },
    { name: 'Remaining', value: 20 },
  ];
  const COLORS = ['#3B82F6', '#E5E7EB']; // Blue, Light Gray

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* User Info */}
      <div className="flex items-start gap-4 flex-1">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
             <img src="https://picsum.photos/id/64/200/200" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
            <h2 className="text-xl font-bold text-gray-900">Daria Moiseenko</h2>
            <p className="text-sm font-semibold text-gray-800">Accreditation Manager @ Universiade 2019</p>
            <p className="text-sm text-gray-500 mb-4">Krasnoyarsk</p>

            <div className="mb-2">
                <p className="text-sm font-bold text-gray-800">Where are you in your job search?</p>
                <p className="text-xs text-gray-500 mb-2">Keep your job status up-to-date to inform employers</p>
                
                <div className="inline-flex items-center gap-2 border border-green-200 bg-green-50 px-3 py-1.5 rounded-md text-sm cursor-pointer hover:bg-green-100 transition-colors">
                    <div className="w-4 h-4 rounded-full border-2 border-green-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-700">Ready to interview</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>
            
            <button 
                onClick={onOpenAI}
                className="mt-2 text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
            >
                ✨ Ask AI how to improve your profile
            </button>
        </div>
      </div>

      {/* Completion Gauge */}
      <div className="flex items-center gap-8 mt-6 md:mt-0">
         <div className="relative w-32 h-32 flex items-center justify-center">
            <PieChart width={128} height={128}>
                <Pie
                    data={data}
                    cx={60}
                    cy={60}
                    innerRadius={45}
                    outerRadius={60}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    stroke="none"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pr-2">
                <span className="text-2xl font-bold text-gray-800">80%</span>
                <span className="text-[10px] text-gray-500 text-center leading-tight">Profile<br/>Completion</span>
            </div>
         </div>
         
         <div className="flex flex-col gap-2 min-w-[140px]">
             <div className="text-sm font-bold text-gray-900 mb-1">Status</div>
             <div className="flex items-center justify-between border rounded-md px-3 py-2 bg-white text-sm text-gray-700 shadow-sm cursor-pointer">
                <span className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-500"></span>
                     Ready to interview
                </span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
             </div>
             
             <button className="text-xs text-right text-gray-500 hover:text-gray-800 mt-2 flex items-center justify-end gap-1">
                 View your public profile <span className="bg-gray-200 text-gray-600 text-[10px] px-1 rounded">Ext</span>
             </button>
         </div>
      </div>

      <div className="absolute top-4 right-4 text-xs text-gray-400">
         Profile last updated on: <span className="text-gray-800 font-medium">Oct 19, 2025</span>
      </div>
    </div>
  );
};

export default ProfileCard;