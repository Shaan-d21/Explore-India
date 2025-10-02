import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {

    const categories = [
    { name: 'Nature'},
    { name: 'Historical'},
    { name: 'Adventure'},
    { name: 'Spiritual'},
    { name: 'Beaches'},
    { name: 'Hill Stations'},
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl">Explore India</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover the incredible diversity of India - from ancient temples
              to pristine beaches, from snow-capped mountains to vibrant
              cultures.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
              >
                Home
              </Link>
              <Link
                to="/destinations"
                className="block text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
              >
                All Destinations
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categories</h3>
            {categories.map((category) => {
              return (
                <Link
                  key={category.name}
                  to={`/destinations?category=${category.name}`}
                  className="space-y-2"
                >
                  <h3 className="block text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm">
                    {category.name}
                  </h3>
                </Link>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  info@exploreindia.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Indore (M.P.), India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Explore India. All rights reserved. Made with ❤️ for
            travelers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;