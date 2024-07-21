import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="container flex items-center justify-between px-4 py-2 bg-white shadow-md border rounded-lg w-full">
            <div className="flex items-center">
                <Image src="/images/logo.png" alt="My Company Logo" height={60} width={174} />

            </div>
            <ul className="hidden md:flex space-x-4">
                <li><a href="#services" className="text-gray-600 hover:text-blue-500">Services</a></li>
                <li><a href="#media" className="text-gray-600 hover:text-blue-500">Media</a></li>
                <li><a href="#cases" className="text-gray-600 hover:text-blue-500">Cases</a></li>
                <li><a href="#faq" className="text-gray-600 hover:text-blue-500">FAQ</a></li>
                <li><a href="#contacts" className="text-gray-600 hover:text-blue-500">Contacts</a></li>
            </ul>
            <div className="hidden md:flex items-center space-x-4">
                <span className="flex items-center text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +91 000000000
                </span>
                <span className="flex items-center  text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    demo@gmail.com
                </span>
            </div>
        </nav>
    );
};

export default Navbar;