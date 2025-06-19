import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <img 
                src="/lovable-uploads/cb926fe6-418f-46ac-b33c-3175bab09138.png" 
                alt="TryZeniq Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="ml-3 text-2xl font-bold">TryzenIQ</span>
            </div>
            <p className="text-gray-300 mb-6 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Automate your clinic and maximize your bookings with our cutting-edge AI solutions. 
              Streamline your entire journey from lead generation to loyal customers.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/tryzeniq" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/tryzen_iq" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 max-w-sm mx-auto lg:mx-0">
              <a href="mailto:tryzeniq@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group justify-center lg:justify-start">
                <Mail className="w-5 h-5 text-purple-400 group-hover:text-purple-600 transition-colors flex-shrink-0" />
                <span className="text-gray-300 text-base group-hover:text-purple-600 transition-colors">tryzeniq@gmail.com</span>
              </a>
              <a href="tel:+916359185945" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group justify-center lg:justify-start">
                <Phone className="w-5 h-5 text-purple-400 group-hover:text-purple-600 transition-colors flex-shrink-0" />
                <span className="text-gray-300 text-base group-hover:text-purple-600 transition-colors">+91 63591 85945</span>
              </a>
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-base">317, Shivalik, Dabholi, Surat, Gujarat 395004</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm text-center w-full">
              © 2025 TryzenIQ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
