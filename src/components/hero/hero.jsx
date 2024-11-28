import React from 'react';
import EnergyMeter from '../acmodel/model';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToNextSection = () => {
    const heroHeight = document.querySelector('#hero').offsetHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div id="hero" className="relative bg-gradient-to-br from-sky-100 to-sky-300 dark:from-neutral-900 dark:to-gray-800 h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,197,253,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(66,240,240,0.05),transparent_50%)]" />
      <div className="h-full relative">
        
        {/* Combined Model and Text Container */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-20">
          {/* Text and Button */}
          <div className="w-full md:w-1/2 z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-cyan-300 mb-2 animate-fade-in-down">
              SMART AC ENERGY METER
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-300 dark:to-blue-500 mb-4 animate-slide-in-right">
              Smart Energy Monitoring for a Sustainable Future
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-lg animate-fade-in">
              Track, analyze, and optimize your energy consumption in real-time with our advanced smart meter technology.
            </p>
            <Link to="/login">
            <button className=" bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-xl  shadow-lg hover:shadow-blue-400/50 transition-all duration-300 animate-bounce-subtle">
              Get Started Now
            </button>
            </Link>
          </div>

          {/* 3D Model Container */}
          <div className="hidden md:flex w-1/2 h-[80vh] animate-spin-slow items-center justify-center">
            <EnergyMeter />
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
          <ChevronDown 
            onClick={scrollToNextSection}
            className="w-10 h-10 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
