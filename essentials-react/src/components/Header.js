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
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="logo">
          <h1>Essentials 3PL</h1>
          <p className="llc-ownership">Owned by Hassan Nasir LLC</p>
        </div>
        <div className="header-right">
          <div className="mobile-menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <nav className={isMenuActive ? 'active' : ''}>
            <div className="mobile-nav-header">
              <h2>Essentials 3PL</h2>
              <p className="mobile-llc-ownership">Owned by Hassan Nasir LLC</p>
            </div>
            <ul>
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;