import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeSwitch from '../themeSwitch/theme';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-50 dark:bg-gray-900 p-4 transition-colors duration-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
                        <img
                            src="https://via.placeholder.com/24"
                            alt="PostHog Logo"
                            className="h-6 w-auto mr-2"
                        />
                        <span className="text-gray-800 dark:text-white font-semibold text-lg">VOLTEDGE</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
                        <a href="/about" className="hover:text-gray-900 dark:hover:text-white">About</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">Pricing</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">Docs</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">Community</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">Company</a>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-800 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-lg font-semibold">
                            Get started
                        </button>
                        <ThemeSwitch />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        <div className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300">
                            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Products</a>
                            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Pricing</a>
                            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Docs</a>
                            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Community</a>
                            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Company</a>
                            <button className="text-gray-800 bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-lg font-semibold w-full">
                                Get started
                            </button>
                            <ThemeSwitch />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
