import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const AboutSection = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className={`bg-${isDarkTheme ? 'black' : 'white'} text-${isDarkTheme ? 'white' : 'black'} py-12`}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start px-6 lg:px-12">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="your-image-path.jpg"
            alt="Person working on a project"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <h2 className={`text-${isDarkTheme ? 'orange' : 'blue'}-500 uppercase tracking-wide text-sm font-semibold mb-2`}>
            About Us
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            We Always Make <br />
            The Best
          </h1>
          <p className={`text-${isDarkTheme ? 'gray-300' : 'gray-700'} mb-6`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            odio placerat, convallis neque quis, interdum leo. Nam hendrerit
            urna nibh, eget sagittis erat varius non. Duis ut varius augue.
            Donec tincidunt iaculis ligula, et maximus elit tincidunt eu.
          </p>
          <a href="/contactus" className={`bg-${isDarkTheme ? 'blue' : 'blue'}-500 hover:bg-${isDarkTheme ? 'blue' : 'blue'}-600 text-${isDarkTheme ? 'white' : 'white'} font-bold py-2 px-6 rounded-lg transition`}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
