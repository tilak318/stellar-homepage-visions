
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = ['Home', 'Pricing', 'Solutions', 'About', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CA</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ClinicAI</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeLink === link 
                    ? 'text-purple-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link}
                {activeLink === link && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                )}
              </button>
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
