// services.jsx
import React from 'react';
import { Briefcase, BookOpen, Zap, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Services = () => {
    const { theme } = useTheme();

    return (
        <div className={`max-w-sm mx-auto h-80 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-lg rounded-lg`}>
            <div className={`bg-${theme === 'light' ? 'blue-600' : 'blue-700'} text-white text-lg font-semibold px-4 py-2 flex items-center`}>
                <Briefcase className="mr-2" />
                OTHER SERVICES
            </div>
            <div className="p-4 space-y-2">
                <div className="flex items-center space-x-3 cursor-pointer hover:bg-${theme === 'light' ? 'gray-100' : 'gray-700'} p-2 rounded-md hover:bg-${theme === 'light' ? 'gray-200' : 'gray-600'} transition duration-300 ease-in-out">
                    <div className={`bg-${theme === 'light' ? 'orange-500' : 'orange-400'} text-white p-2 rounded-md`}>
                        <Briefcase />
                    </div>
                    <span className={`text-${theme === 'light' ? 'gray-700' : 'gray-300'}`}>Ease of Doing Business</span>
                </div>
                <div className="flex items-center space-x-3 cursor-pointer hover:bg-${theme === 'light' ? 'gray-100' : 'gray-700'} p-2 rounded-md hover:bg-${theme === 'light' ? 'gray-200' : 'gray-600'} transition duration-300 ease-in-out">
                    <div className={`bg-${theme === 'light' ? 'green-500' : 'green-400'} text-white p-2 rounded-md`}>
                        <BookOpen />
                    </div>
                    <span className={`text-${theme === 'light' ? 'gray-700' : 'gray-300'}`}>Guidelines & Formats</span>
                </div>
                <div className="flex items-center space-x-3 cursor-pointer hover:bg-${theme === 'light' ? 'gray-100' : 'gray-700'} p-2 rounded-md hover:bg-${theme === 'light' ? 'gray-200' : 'gray-600'} transition duration-300 ease-in-out">
                    <div className={`bg-${theme === 'light' ? 'blue-500' : 'blue-400'} text-white p-2 rounded-md`}>
                        <Zap />
                    </div>
                    <span className={`text-${theme === 'light' ? 'gray-700' : 'gray-300'}`}>RE Project Connectivity</span>
                </div>
                <div className="flex items-center space-x-3 cursor-pointer hover:bg-${theme === 'light' ? 'gray-100' : 'gray-700'} p-2 rounded-md hover:bg-${theme === 'light' ? 'gray-200' : 'gray-600'} transition duration-300 ease-in-out">
                    <div className={`bg-${theme === 'light' ? 'teal-500' : 'teal-400'} text-white p-2 rounded-md`}>
                        <Mail />
                    </div>
                    <span className={`text-${theme === 'light' ? 'gray-700' : 'gray-300'}`}>HPSEBL Email</span>
                </div>
            </div>
        </div>
    );
};

export default Services;
