import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  const customColorStyle = {
    color: '#C3E2C2',
  };

  return (
    <header className="bg-gray-800 text-white p-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Karsha Canvas */}
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden mr-2">
            <img
              src={logo} // Replace with the path to your logo
              alt="Logo"
              className="w-10 h-10 object-cover"
            />
          </div>
          <h4 style={customColorStyle} className="font-bold text-2xl sm:text-xl xs:text-lg">
            Karsha Canvas
          </h4>
        </div>

        {/* Navigation */}
        {/* <nav className="space-x-4">
            <a href="#about" className="text-white">
              About Us
            </a>
            <a href="#gallery" className="text-white">
              Gallery
            </a>
            <a href="#contact" className="text-white">
              Contact
            </a>
          </nav> */}

      </div>
    </header>
  );
};

export default Header;
