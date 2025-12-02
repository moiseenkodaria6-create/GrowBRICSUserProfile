import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import JobCard from './components/JobCard';
import Footer from './components/Footer';
import AICareerCoach from './components/AICareerCoach';
import { MOCK_JOBS } from './constants';
import { User } from 'lucide-react';

const App: React.FC = () => {
  const [showAICoach, setShowAICoach] = useState(false);

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans text-gray-800">
      {/* Top Navigation */}
      <Header />

      <div className="flex flex-1 max-w-[1600px] mx-auto w-full pt-4">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 px-6 pb-12">
          {/* Profile Section */}
          <section className="mb-8 relative">
            {/* Top Green Progress Bar */}
            <div className="flex gap-1 mb-2">
               {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full ${i < 4 ? 'bg-green-600' : 'bg-gray-300'}`}></div>
               ))}
            </div>
            
            <div className="bg-white rounded-lg p-3 mb-4 border border-gray-200 shadow-sm flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700 font-medium">Your profile can't be found by recruiters because it's missing key information</span>
                </div>
                <button className="text-gray-500 hover:text-gray-700 text-xs font-medium flex items-center gap-1">
                    4 steps to complete <span className="text-lg">›</span>
                </button>
            </div>

            <ProfileCard onOpenAI={() => setShowAICoach(!showAICoach)} />
          </section>

          {/* Jobs Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Recommended Jobs</h2>
                <p className="text-sm text-gray-500 mt-1">Jobs where you're a top applicant based on your profile job search</p>
              </div>
              <button className="text-sm text-gray-500 hover:text-gray-900">Change job preferences</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOCK_JOBS.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer />

      {/* AI Assistant Overlay */}
      {showAICoach && (
        <div className="fixed bottom-4 right-4 z-50">
            <AICareerCoach onClose={() => setShowAICoach(false)} />
        </div>
      )}
    </div>
  );
};

export default App;