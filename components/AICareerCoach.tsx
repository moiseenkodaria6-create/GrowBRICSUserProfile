import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send } from 'lucide-react';
import { getCareerAdvice } from '../services/geminiService';

interface AICareerCoachProps {
    onClose: () => void;
}

const AICareerCoach: React.FC<AICareerCoachProps> = ({ onClose }) => {
    const [advice, setAdvice] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdvice = async () => {
            // Mock profile context
            const result = await getCareerAdvice(
                "Daria", 
                "Accreditation Manager", 
                "key results and specific skill tags"
            );
            setAdvice(result || "Unable to generate advice.");
            setLoading(false);
        };
        fetchAdvice();
    }, []);

    return (
        <div className="bg-white w-80 rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-slide-up">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-bold text-sm">GrowBRICS AI Coach</span>
                </div>
                <button onClick={onClose} className="hover:bg-white/20 p-1 rounded">
                    <X className="w-4 h-4" />
                </button>
            </div>
            
            <div className="p-4 bg-gray-50 h-48 overflow-y-auto">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
                        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-xs">Analyzing profile...</span>
                    </div>
                ) : (
                    <div className="flex gap-3">
                         <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                             <Sparkles className="w-4 h-4 text-blue-600" />
                         </div>
                         <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-gray-700 leading-relaxed border border-gray-100">
                             {advice}
                         </div>
                    </div>
                )}
            </div>

            <div className="p-3 border-t border-gray-100 bg-white">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <input 
                        type="text" 
                        placeholder="Ask follow up..." 
                        className="bg-transparent border-none outline-none text-xs w-full text-gray-700 placeholder-gray-400"
                        disabled
                    />
                    <button className="text-blue-600">
                        <Send className="w-3 h-3" />
                    </button>
                </div>
                <div className="text-[10px] text-gray-400 text-center mt-2">
                    AI can make mistakes. Check important info.
                </div>
            </div>
        </div>
    );
};

export default AICareerCoach;