
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Capability & Talent', path: '/capability' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'MILE (LMS)', path: '/mile' },
    { name: 'CARVE', path: '/carve' },
    { name: 'DATANIX', path: '/datanix' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-elevate-darkBg2/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="container-custom py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <span className="text-2xl font-bold text-elevate-orange">
            Elevate<span className="text-elevate-blue">Journeys</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-elevate-orange ${
                  isActive ? 'text-elevate-orange' : 'text-elevate-text'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button className="btn-primary ml-4">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-elevate-text hover:text-elevate-orange"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-elevate-darkBg2 border-t border-white/5 absolute w-full">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium py-2 transition-colors hover:text-elevate-orange ${
                    isActive ? 'text-elevate-orange' : 'text-elevate-text'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <button className="btn-primary self-start">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
