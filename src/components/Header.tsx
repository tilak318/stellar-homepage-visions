import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur shadow' : ''}`}>
      <div className="container mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-serif text-gray-900 tracking-wider">
            TRYZENIQ
          </Link>
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-purple-600 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:shadow-lg text-white font-bold py-3 px-6 rounded-lg">
            BOOK DEMO
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
