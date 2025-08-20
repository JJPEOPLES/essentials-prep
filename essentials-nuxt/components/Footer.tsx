import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-blue-400/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">E3</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Essentials 3PL
                </h2>
                <p className="text-xs text-gray-300">Owned by Hassan Nasir LLC</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted partner in logistics and supply chain management. We provide comprehensive 3PL solutions to help your business grow.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sm" />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  630 Rankin Ave, Schenectady, NY 12308
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faPhone} className="text-sm" />
                </div>
                <a 
                  href="tel:518-918-2695" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  518-918-2695
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                </div>
                <a 
                  href="mailto:essentials3pl@gmail.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  essentials3pl@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Warehousing</span>
              </li>
              <li className="text-gray-300 flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Inventory Management</span>
              </li>
              <li className="text-gray-300 flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Order Fulfillment</span>
              </li>
              <li className="text-gray-300 flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Distribution</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Essentials 3PL. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-gray-400">Owned by Hassan Nasir LLC</p>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">HN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;