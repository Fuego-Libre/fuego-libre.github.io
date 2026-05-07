import type { ReactNode } from 'react';

type BorderColor = 'terracotta' | 'sage' | 'clay' | 'ochre';
type Bg = 'cream' | 'warm-sand' | 'cream-translucent';
type Padding = 'sm' | 'md';

interface BorderedCardProps {
  children: ReactNode;
  borderColor: BorderColor;
  bg?: Bg;
  padding?: Padding;
  className?: string;
}

const borderClasses: Record<BorderColor, string> = {
  terracotta: 'border-terracotta',
  sage: 'border-sage',
  clay: 'border-clay',
  ochre: 'border-ochre',
};

const bgClasses: Record<Bg, string> = {
  cream: 'bg-cream',
  'warm-sand': 'bg-warm-sand',
  'cream-translucent': 'bg-cream/10',
};

const paddingClasses: Record<Padding, string> = {
  sm: 'p-6',
  md: 'p-8',
};

const BorderedCard = ({
  children,
  borderColor,
  bg = 'warm-sand',
  padding = 'sm',
  className = '',
}: BorderedCardProps) => {
  return (
    <div
      className={`${bgClasses[bg]} ${paddingClasses[padding]} border-l-4 ${borderClasses[borderColor]} ${className}`}
    >
      {children}
    </div>
  );
};

export default BorderedCard;
