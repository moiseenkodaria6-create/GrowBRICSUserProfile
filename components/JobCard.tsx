import React from 'react';
import { Job } from '../types';
import { MapPin, Briefcase } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-0 flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="p-5 flex-1">
        <div className="h-40 w-full rounded-lg overflow-hidden mb-4 relative">
             <img src={job.imageUrl} alt={job.title} className="w-full h-full object-cover" />
             <div className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm cursor-pointer hover:scale-105 transition-transform">
                 <svg className="w-4 h-4 text-gray-400 hover:text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
             </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
        <p className="text-sm font-semibold text-gray-700 mb-3">{job.company}</p>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-3 leading-relaxed">
          {job.description}
        </p>
        
        <div className="flex flex-col gap-2 mt-auto">
             <div className="flex items-center gap-2 text-sm text-gray-600">
                 <Briefcase className="w-4 h-4 text-gray-400" />
                 <span>{job.location}</span>
             </div>
             <div className="flex items-center gap-2 text-sm text-gray-600">
                 <MapPin className="w-4 h-4 text-gray-400" />
                 <span>{job.type}</span>
             </div>
        </div>
      </div>
      
      <div className="p-5 pt-0 mt-auto">
        <button className="w-full bg-[#1A1A1A] hover:bg-black text-white font-medium py-2.5 rounded-lg transition-colors">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;