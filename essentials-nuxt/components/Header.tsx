import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuActive(false);
  }, [location]);

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">E3</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Essentials 3PL
              </h1>
              <p className="text-xs text-gray-500 font-medium">Owned by Hassan Nasir LLC</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                location.pathname === '/services' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                location.pathname === '/about' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                location.pathname === '/contact' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-200/50">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-4">
              <h2 className="text-lg font-bold text-gray-900">Essentials 3PL</h2>
              <p className="text-sm text-gray-600">Owned by Hassan Nasir LLC</p>
            </div>
            
            <div className="space-y-2">
              <Link 
                to="/" 
                className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  location.pathname === '/' 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                🏠 Home
              </Link>
              <Link 
                to="/services" 
                className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  location.pathname === '/services' 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                🚚 Services
              </Link>
              <Link 
                to="/about" 
                className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  location.pathname === '/about' 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                ℹ️ About
              </Link>
              <Link 
                to="/contact" 
                className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  location.pathname === '/contact' 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                📞 Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;