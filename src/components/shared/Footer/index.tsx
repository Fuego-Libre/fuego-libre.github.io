import { Link } from 'react-router';
import { InstagramIcon, FacebookIcon } from '@/components/icons';

const Footer = () => {
  return (
    <footer className="bg-deep-earth text-cream px-6 lg:px-24 pt-16 pb-8">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
        <div>
          <Link to="/" className="font-display text-2xl font-semibold text-cream tracking-wide mb-4 block">
            Fuego Libre
          </Link>
          <p className="font-display text-lg italic text-clay mb-4">Where healing becomes liberation.</p>
          <p className="text-sm text-warm-sand/70">Chicago, Illinois</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-clay mb-6">Explore</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/about" className="text-warm-sand text-sm hover:text-terracotta transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/offerings" className="text-warm-sand text-sm hover:text-terracotta transition-colors">
                  Offerings
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-warm-sand text-sm hover:text-terracotta transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-warm-sand text-sm hover:text-terracotta transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-clay mb-6">Connect</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/contact" className="text-warm-sand text-sm hover:text-terracotta transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-warm-sand text-sm hover:text-terracotta transition-colors">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-warm-sand text-sm hover:text-terracotta transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-warm-sand/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-clay">&copy; {new Date().getFullYear()} Fuego Libre Wellness. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" aria-label="Instagram" className="text-warm-sand hover:text-terracotta transition-colors">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="Facebook" className="text-warm-sand hover:text-terracotta transition-colors">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
