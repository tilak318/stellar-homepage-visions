import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/cb926fe6-418f-46ac-b33c-3175bab09138.png" 
              alt="TryZeniq Logo" 
              className="w-40 object-contain filter invert"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-purple-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>
          
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
            SCHEDULE FREE MEETING
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
