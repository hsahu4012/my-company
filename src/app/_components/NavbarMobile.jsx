"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const NavbarMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between px-4 py-2 bg-white shadow-md border rounded-lg w-full z-50">
            <div className="flex items-center justify-between px-4 py-2 w-full">
                <Image src="/images/logo.png" alt="My Company Logo" height={40} width={116} />
                <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                    {isMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>
            {isMenuOpen && (
                <div className="px-2 pt-2 pb-4">
                    <ul className="space-y-2">
                        <li><a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50">Services</a></li>
                        <li><a href="#media" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50">Media</a></li>
                        <li><a href="#cases" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50">Cases</a></li>
                        <li><a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50">FAQ</a></li>
                        <li><a href="#contacts" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50">Contacts</a></li>
                    </ul>
                    <div className="mt-4 space-y-2">
                        <a href="tel:+91000000000" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            +91 000000000
                        </a>
                        <a href="mailto:demo@gmail.com" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            demo@gmail.com
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarMobile;