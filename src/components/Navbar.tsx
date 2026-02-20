import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import PromoBanner from './PromoBanner';
import { InstagramIcon, YouTubeIcon, FacebookIcon, TikTokIcon } from './Icons';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Messages', path: '/messages' },
  { name: 'Herdentity', path: 'https://herdentity.vercel.app', external: true },
];

const SOCIAL_LINKS = [
  { icon: InstagramIcon, href: "https://www.instagram.com/damiolatunji_", label: "Instagram" },
  { icon: YouTubeIcon, href: "https://youtube.com/@damiolatunji", label: "YouTube" },
  { icon: FacebookIcon, href: "https://www.facebook.com/damilola.oladele.9026", label: "Facebook" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@damiolatunji_", label: "TikTok" }
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b flex flex-col',
        isMobileMenuOpen
          ? 'bg-background-light border-transparent'
          : (scrolled
            ? 'bg-background-light/80 backdrop-blur-xl border-neutral-muted/50'
            : 'bg-transparent border-transparent'),
      )}
    >
      <PromoBanner />
      <div className={clsx(
        "w-full transition-all duration-300",
        (scrolled || isMobileMenuOpen) ? 'py-4' : 'py-6'
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="z-50 relative">
            <Link to="/" className="group" onClick={() => setIsMobileMenuOpen(false)}>
              <span className={clsx(
                "serif-heading text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary",
                (!scrolled && !isMobileMenuOpen) ? "text-white" : "text-neutral-deep"
              )}>
                DAMI OLATUNJI
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <React.Fragment key={link.name}>
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      "text-xs font-bold uppercase tracking-[0.15em] hover:text-primary transition-colors duration-300 relative group",
                      !scrolled ? "text-white/90" : "text-neutral-deep/80"
                    )}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={clsx(
                      'text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 relative group',
                      isActive(link.path)
                        ? (!scrolled ? 'text-white' : 'text-primary')
                        : (!scrolled ? 'text-white/90 hover:text-primary' : 'text-neutral-deep/80 hover:text-primary')
                    )}
                  >
                    {link.name}
                    <span
                      className={clsx(
                        'absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300',
                        isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </Link>
                )}
              </React.Fragment>
            ))}

            <Link
              to="/contact"
              className="ml-4 bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={clsx(
              "md:hidden z-50 relative p-2 -mr-2 transition-colors focus:outline-none hover:text-primary",
              isMobileMenuOpen
                ? "text-neutral-deep"
                : (!scrolled ? "text-white" : "text-neutral-deep")
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                className="absolute left-0 top-1/2 w-6 h-0.5 bg-current transform -translate-y-1/2 origin-center transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute left-0 top-1/2 w-6 h-0.5 bg-current transform -translate-y-1/2 transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                className="absolute left-0 top-1/2 w-6 h-0.5 bg-current transform -translate-y-1/2 origin-center transition-all"
              />
            </div>
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-0 bg-background-light z-40 md:hidden flex flex-col pt-32 px-8"
              >
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />

                <nav className="flex flex-col space-y-8">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      {link.external ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between text-3xl font-serif text-neutral-deep hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                          <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all text-primary" />
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={clsx(
                            'group flex items-center justify-between text-3xl font-serif transition-colors',
                            isActive(link.path) ? 'text-primary' : 'text-neutral-deep hover:text-primary'
                          )}
                        >
                          {link.name}
                          <ChevronRight
                            className={clsx(
                              'w-6 h-6 transition-all transform',
                              isActive(link.path)
                                ? 'opacity-100 translate-x-0 text-primary'
                                : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-primary'
                            )}
                          />
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center bg-primary text-white py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl shadow-primary/20 active:scale-95 transition-all"
                  >
                    Contact
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-auto mb-12 flex justify-center space-x-8"
                >
                  {SOCIAL_LINKS.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-deep/60 hover:text-primary transition-colors p-2 hover:bg-neutral-light rounded-full"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;