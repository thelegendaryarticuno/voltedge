// links.jsx
import React from 'react';
import { ExternalLink, Clipboard, TrendingUp, FileText } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ImportantLinks = () => {
    const { theme } = useTheme();

    return (
        <div className={`max-w-sm mx-auto ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-lg rounded-lg h-full`}>
            {/* Header Section */}
            <div className={`bg-${theme === 'light' ? 'blue-600' : 'blue-700'} text-white text-lg font-semibold px-4 py-2 flex items-center`}>
                <ExternalLink className="mr-2" />
                IMPORTANT LINKS
            </div>

            {/* Links Content */}
            <div className={`p-4 space-y-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                <div className={`flex items-center space-x-3 cursor-pointer hover:bg-${theme === 'light' ? 'gray-100' : 'gray-700'} p-2 rounded-md`}>
                    <Clipboard className={`text-${theme === 'light' ? 'red-500' : 'red-400'}`} />
                    <span>Court Case Portal</span>
                </div>
                <div className={`flex items-center space-x-3 cursor-pointer hover:bg-${theme === 'light' ? 'gray-100' : 'gray-700'} p-2 rounded-md`}>
                    <Clipboard className={`text-${theme === 'light' ? 'red-500' : 'red-400'}`} />
                    <span>Appointments</span>
                </div>
                <div className={`flex items-center space-x-3 cursor-pointer hover:bg-${theme === 'light' ? 'gray-100' : 'gray-700'} p-2 rounded-md`}>
                    <TrendingUp className={`text-${theme === 'light' ? 'red-500' : 'red-400'}`} />
                    <span>Transfer & Promotion</span>
                </div>
                <div className={`flex items-center space-x-3 cursor-pointer hover:bg-${theme === 'light' ? 'gray-100' : 'gray-700'} p-2 rounded-md`}>
                    <FileText className={`text-${theme === 'light' ? 'red-500' : 'red-400'}`} />
                    <span>Financial Statements</span>
                </div>
            </div>
        </div>
    );
};

export default ImportantLinks;
