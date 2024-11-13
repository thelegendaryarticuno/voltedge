import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-4 sm:p-6 lg:p-8 transition-colors duration-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Section Links */}
                <div className="text-center sm:text-left">
                    <h3 className="text-gray-900 dark:text-white font-semibold text-base lg:text-lg mb-3 lg:mb-4">Section</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Home</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Features</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Pricing</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">FAQs</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">About</a></li>
                    </ul>
                </div>

                {/* Duplicate Section Links for Layout */}
                <div className="text-center sm:text-left">
                    <h3 className="text-gray-900 dark:text-white font-semibold text-base lg:text-lg mb-3 lg:mb-4">Section</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Home</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Features</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Pricing</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">FAQs</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">About</a></li>
                    </ul>
                </div>

                <div className="text-center sm:text-left">
                    <h3 className="text-gray-900 dark:text-white font-semibold text-base lg:text-lg mb-3 lg:mb-4">Section</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Home</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Features</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Pricing</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">FAQs</a></li>
                        <li><a href="#" className="hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">About</a></li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div className="text-center sm:text-left col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
                    <h3 className="text-gray-900 dark:text-white font-semibold text-base lg:text-lg mb-3 lg:mb-4">Subscribe to our newsletter</h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm lg:text-base">Monthly digest of what's new and exciting from us.</p>
                    <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 px-3 lg:px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 text-sm lg:text-base w-full"
                        />
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm lg:text-base whitespace-nowrap">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 my-4 sm:my-6 lg:my-8"></div>

            {/* Footer Bottom */}
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                    © 2024 Company, Inc. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
