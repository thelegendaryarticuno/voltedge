import React from "react";

const AboutHero = () => {
  return (
    <div className="relative w-full h-[40vh] bg-black">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        {/* Title */}
        <h1 className="text-4xl font-bold">About Us</h1>

        {/* Breadcrumb */}
        <div className="flex items-center mt-4 text-sm text-gray-300">
          <span className="hover:text-gray-100 cursor-pointer transition">
            Home
          </span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-100">About Us</span>
        </div>
      </div>

      {/* Background Image */}
      <img
        src="/abouthero.jpg" // Corrected image path
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default AboutHero;
