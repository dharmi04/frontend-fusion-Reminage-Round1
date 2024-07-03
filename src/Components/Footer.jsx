// Footer.js
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-footer text-gray-300 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Left Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold mb-2">McDonald's</h2>
                        <p className="text-sm">Enjoy the McDonald's experience worldwide.</p>
                    </div>

                    {/* Middle Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <p className="text-sm">123 McDonald's Street, City, Country</p>
                        <p className="text-sm">Phone: +123 456 7890</p>
                    </div>

                    {/* Right Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                               <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
