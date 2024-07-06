// Footer.js
import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 mt-10" style={"font-size:20px}"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Left Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold mb-2">McDonald's</h2>
                        <p className="text-sm">Enjoy the McDonald's experience worldwide. Serving delicious food and creating feel-good moments since 1955.</p>
                        <p className="text-sm mt-2">Visit our <a href="#" className="underline hover:text-white">About Us</a> page to learn more about our journey.</p>
                    </div>

                    {/* Middle Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <p className="text-sm">123 McDonald's Street, City, Country</p>
                        <p className="text-sm">Phone: +123 456 7890</p>
                        <p className="text-sm mt-2">For inquiries, email us at <a href="mailto:info@mcdonalds.com" className="underline hover:text-white">info@mcdonalds.com</a></p>
                    </div>

                    {/* Right Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/mcdonalds/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="https://x.com/mcdonaldsindia?lang=en" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="https://www.facebook.com/McDonaldsIndia/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaFacebook />
                            </a>
                            <a href="https://www.linkedin.com/company/mcdonald's-india-pvt.-ltd./?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-400 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-1 md:col-span-1">
                            <p className="text-sm">&copy; 2024 McDonald's Corporation. All rights reserved.</p>
                        </div>
                        <div className="col-span-1 md:col-span-1">
                            <p className="text-sm"><a href="#" className="underline hover:text-white">Privacy Policy</a> | <a href="#" className="underline hover:text-white">Terms of Service</a></p>
                        </div>
                        <div className="col-span-1 md:col-span-1 text-right">
                            <p className="text-sm">Designed by <a href="#" className="underline hover:text-white">Your Company</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
