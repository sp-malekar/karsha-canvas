import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
    return (
      <header className="bg-gray-800 text-white p-2">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="rounded-full overflow-hidden">
            <img
              src={logo}// Replace with the path to your logo
              alt="Logo"
              className="w-10 h-10 object-cover"
            />
          </div>
  
          {/* Navigation */}
          <nav className="space-x-4">
            <a href="#about" className="text-white">
              About Us
            </a>
            <a href="#gallery" className="text-white">
              Gallery
            </a>
            <a href="#contact" className="text-white">
              Contact
            </a>
            {/* Add more sections as needed */}
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
