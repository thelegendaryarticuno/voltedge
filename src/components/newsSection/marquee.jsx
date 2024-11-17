// marquee.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Marquee = () => {
    const { theme } = useTheme();

    return (
        <div className={`whats-new max-w-sm mx-auto h-80 overflow-hidden border shadow relative ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
            {/* Header Section */}
            <div className={`header ${theme === 'light' ? 'bg-blue-600' : 'bg-blue-700'} text-white text-lg font-semibold px-4 py-2 flex items-center`}>
                <h2 className="text-lg font-bold flex items-center">
                    <span className="mr-2">🔗</span> WHATS NEW
                </h2>
            </div>

            {/* Marquee Section */}
            <div className="vertical-marquee h-full overflow-hidden relative">
                <div className="marquee-content flex flex-col animate-marquee">
                    {/* Update Items */}
                    <ol className="list-disc pl-5">
                        <li className={`py-2 border-b px-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                            Prospective bidders to visit <a
                                href="https://hptenders.gov.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-${theme === 'light' ? 'blue-500' : 'blue-400'} underline`}
                            >
                                https://hptenders.gov.in
                            </a> for new tenders of HPSEBL
                        </li>
                        <li className={`py-2 border-b px-4 font-bold ${theme === 'light' ? 'text-blue-600' : 'text-blue-500'}`}>
                            Director(Finance & Personnel)
                        </li>
                        <li className={`py-2 border-b px-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                            Another important update goes here.
                        </li>
                        <li className={`py-2 border-b px-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                            And another description to show in the list.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Marquee;
