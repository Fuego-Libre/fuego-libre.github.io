import { Link } from 'react-router';

interface CTASectionProps {
  title: string;
  description: string;
  primaryLink?: { to: string; label: string };
  secondaryLink?: { to: string; label: string };
  variant?: 'dark' | 'light';
}

const CTASection = ({
  title,
  description,
  primaryLink,
  secondaryLink,
  variant = 'dark'
}: CTASectionProps) => {
  const isDark = variant === 'dark';

  return (
    <section className={`px-6 lg:px-24 py-20 text-center ${isDark ? 'bg-deep-earth text-cream' : 'bg-warm-sand text-charcoal'}`}>
      <h2 className={`font-display text-3xl md:text-4xl font-normal mb-6 ${isDark ? 'text-cream' : 'text-deep-earth'}`}>
        {title}
      </h2>
      <p className={`text-base font-light max-w-xl mx-auto mb-8 ${isDark ? 'text-warm-sand/80' : 'text-charcoal'}`}>
        {description}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {primaryLink && (
          <Link
            to={primaryLink.to}
            className="bg-terracotta text-cream px-8 py-4 text-xs tracking-widest uppercase hover:bg-deep-earth transition-colors"
          >
            {primaryLink.label}
          </Link>
        )}
        {secondaryLink && (
          <Link
            to={secondaryLink.to}
            className={`border px-8 py-4 text-xs tracking-widest uppercase transition-colors ${
              isDark
                ? 'border-cream text-cream hover:bg-cream hover:text-deep-earth'
                : 'border-deep-earth text-deep-earth hover:bg-deep-earth hover:text-cream'
            }`}
          >
            {secondaryLink.label}
          </Link>
        )}
      </div>
    </section>
  );
};

export default CTASection;
