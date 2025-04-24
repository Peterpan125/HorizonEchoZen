
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="container flex justify-center items-center mx-auto">
        <div className="bg-echo-grid bg-opacity-60 rounded-full px-8 py-3 backdrop-blur-sm">
          <ul className="flex space-x-10">
            <li>
              <a href="#about" className="text-white hover:text-opacity-80 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#controls" className="text-white hover:text-opacity-80 transition-colors">
                Controls
              </a>
            </li>
            <li>
              <a href="#features" className="text-white hover:text-opacity-80 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#support" className="text-white hover:text-opacity-80 transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
