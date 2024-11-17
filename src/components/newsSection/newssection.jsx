import React from 'react';
import Marquee from './marquee';
import ImportantLinks from './links';
import Services from './services';
import { useTheme } from '../../context/ThemeContext';

const NewSection = () => {
  const { theme } = useTheme();

  return (
    <section className={`max-w-7xl h-[20%] mx-auto px-4 sm:px-6 lg:px-8 py-8 ${theme === 'light' ? 'bg-white' : 'bg-neutral-900'}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Marquee Section */}
        <div className="col-span-1">
          <Marquee />
        </div>

        {/* Important Links Section */}
        <div className="col-span-1">
          <ImportantLinks />
        </div>

        {/* Other Services Section */}
        <div className="col-span-1">
          <Services />
        </div>
      </div>
    </section>
  );
};

export default NewSection;
