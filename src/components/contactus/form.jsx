import React from "react";
import { useTheme } from "../../context/ThemeContext";

const FormPage = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-50'} flex items-center justify-center`}>
      <div className={`max-w-4xl w-full ${isDarkTheme ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-lg p-8 md:p-8`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="hidden md:flex flex-col justify-center">
            <img src="/contact-us.png" alt="Contact Us" className="w-full mb-4" />
          </div>
          {/* Form Section */}
          <div>
            <h1 className={`text-3xl font-bold ${isDarkTheme ? 'text-gray-200' : 'text-gray-800'} `}>
              Fill the form to <span className={`text-${isDarkTheme ? 'blue' : 'indigo'}-500`}>contact us.</span>
            </h1>
            <form className="mt-8 space-y-4">
              <div className="flex gap-4 flex-wrap">
                <div className="flex gap-4 w-full">
                  <div className="w-1/2">
                    <label className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} `} htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-${isDarkTheme ? 'blue' : 'indigo'}-500 focus:border-${isDarkTheme ? 'blue' : 'indigo'}-500 border-${isDarkTheme ? 'gray-600' : 'gray-300'} ${isDarkTheme ? 'text-gray-300 placeholder-gray-500' : 'text-gray-700 placeholder-gray-400'} `}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} `} htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-${isDarkTheme ? 'blue' : 'indigo'}-500 focus:border-${isDarkTheme ? 'blue' : 'indigo'}-500 border-${isDarkTheme ? 'gray-600' : 'gray-300'} ${isDarkTheme ? 'text-gray-300 placeholder-gray-500' : 'text-gray-700 placeholder-gray-400'} `}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} `} htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-${isDarkTheme ? 'blue' : 'indigo'}-500 focus:border-${isDarkTheme ? 'blue' : 'indigo'}-500 border-${isDarkTheme ? 'gray-600' : 'gray-300'} ${isDarkTheme ? 'text-gray-300 placeholder-gray-500' : 'text-gray-700 placeholder-gray-400'} `}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} `} htmlFor="message">
                  How can we help you? <br />
                  <span className={`text-${isDarkTheme ? 'gray-500' : 'gray-500'} text-sm`}>Describe here your problem</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your message here"
                  className={`mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-${isDarkTheme ? 'blue' : 'indigo'}-500 focus:border-${isDarkTheme ? 'blue' : 'indigo'}-500 border-${isDarkTheme ? 'gray-600' : 'gray-300'} ${isDarkTheme ? 'text-gray-300 placeholder-gray-500' : 'text-gray-700 placeholder-gray-400'} `}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`mt-4 w-full ${isDarkTheme ? 'bg-blue-500' : 'bg-indigo-500'} text-white font-medium px-4 py-2 rounded-lg hover:${isDarkTheme ? 'bg-blue-600' : 'bg-indigo-600'} transition duration-200`}
              >
                Send message
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
