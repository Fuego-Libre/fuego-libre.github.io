import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/offerings', label: 'Offerings' },
  { to: '/events', label: 'Events' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`${
          mobileMenuOpen ? 'fixed' : 'sticky'
        } top-0 left-0 right-0 w-full px-6 lg:px-16 py-5 flex justify-between items-center z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-sand/50`}
      >
        <Link to="/" className="font-display text-2xl font-semibold text-deep-earth tracking-wide">
          Fuego Libre
        </Link>

        <ul className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`nav-link relative text-xs font-normal tracking-widest uppercase transition-colors duration-300 ${
                  isActive(link.to) ? 'text-terracotta' : 'text-charcoal hover:text-terracotta'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex bg-deep-earth text-cream px-6 py-3 text-xs tracking-widest uppercase hover:bg-terracotta transition-colors duration-300"
        >
          Book Now
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-deep-earth transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-deep-earth transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-deep-earth transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-cream z-40 flex flex-col items-center justify-start gap-6 pt-12 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg tracking-widest uppercase ${
                isActive(link.to) ? 'text-terracotta' : 'text-charcoal hover:text-terracotta'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 bg-deep-earth text-cream px-8 py-4 text-sm tracking-widest uppercase"
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
