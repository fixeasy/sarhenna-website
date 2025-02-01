import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className={`font-bold text-2xl ${
            isScrolled ? 'text-[#42312B]' : 'text-white'
          }`}>
            Sarhenna
          </a>

          <div className="hidden md:flex space-x-8">
            {['Services', 'Bougies', 'Histoire', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  isScrolled ? 'text-[#42312B]' : 'text-white'
                } hover:text-[#A18C85] transition-colors`}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={isScrolled ? 'text-[#42312B]' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-[#42312B]' : 'text-white'} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white">
            {['Services', 'Bougies', 'Histoire', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-[#42312B] hover:text-[#A18C85] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};