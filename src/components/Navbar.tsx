import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InstagramIcon, YouTubeIcon, FacebookIcon } from './Icons';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Messages', path: '/messages' },
    { name: 'Herdentity', path: 'https://herdentity.vercel.app' }, // External link
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full max-w-full bg-background-light/90 backdrop-blur-md border-b border-primary/10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 z-20">
          <Link to="/" className="serif-heading text-2xl font-bold tracking-tighter text-primary">
            DAMI OLATUNJI
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            link.path.startsWith('http') ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300 text-neutral-deep"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-primary transition-colors duration-300 ${isActive(link.path) ? 'text-primary' : 'text-neutral-deep'}`}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center z-20">
          <Link
            to="/contact"
            className="bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Bookings
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-30 p-2 text-neutral-deep hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-icons text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed top-0 right-0 bottom-0 left-0 bg-background-light z-20 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden overflow-y-auto max-w-full`}>
          <div className="flex flex-col min-h-full items-center justify-start space-y-8 p-8 pt-24 max-w-full">
            {navLinks.map((link) => (
              link.path.startsWith('http') ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-neutral-deep hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-serif transition-colors duration-300 ${isActive(link.path) ? 'text-primary' : 'text-neutral-deep hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest mt-8 shadow-xl shadow-primary/20"
            >
              Bookings
            </Link>

            <div className="flex space-x-6 mt-8">
              <a
                href="https://www.instagram.com/damiolatunji_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-deep hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/@damiolatunji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-deep hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">YouTube</span>
                <YouTubeIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/damilola.oladele.9026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-deep hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;