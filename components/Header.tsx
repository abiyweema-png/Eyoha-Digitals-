import React, { useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#process', label: 'Process' },
  { href: '#portfolio', label: 'Our Work' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-5 h-20 flex justify-between items-center">
        <a href="#hero" className="flex-shrink-0">
          <img src="/assets/eyoha_logo.jpg" alt="Eyoha Digitals Logo" className="h-20" />
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-secondary font-medium hover:text-accent transition-colors duration-300 text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          <div className={`w-6 h-0.5 bg-primary transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-primary my-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-primary transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} className="text-2xl text-secondary font-medium hover:text-accent transition-colors duration-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;