import type { ReactNode } from 'react';

type Bg = 'cream' | 'warm-sand' | 'deep-earth' | 'sage-soft' | 'sage' | 'transparent';
type Padding = 'sm' | 'md' | 'lg';

interface SectionProps {
  children: ReactNode;
  bg?: Bg;
  padding?: Padding;
  id?: string;
  className?: string;
  textColor?: 'charcoal' | 'cream';
}

const bgClasses: Record<Bg, string> = {
  cream: 'bg-cream',
  'warm-sand': 'bg-warm-sand',
  'deep-earth': 'bg-deep-earth',
  'sage-soft': 'bg-sage/20',
  sage: 'bg-sage',
  transparent: '',
};

const paddingClasses: Record<Padding, string> = {
  sm: 'py-8',
  md: 'py-16',
  lg: 'py-20 lg:py-28',
};

const Section = ({
  children,
  bg = 'cream',
  padding = 'lg',
  id,
  className = '',
  textColor,
}: SectionProps) => {
  const text = textColor === 'cream' ? 'text-cream' : '';
  return (
    <section
      id={id}
      className={`px-6 lg:px-24 ${paddingClasses[padding]} ${bgClasses[bg]} ${text} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
