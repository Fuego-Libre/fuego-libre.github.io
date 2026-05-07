import SectionLabel from '@/components/ui/SectionLabel';

type LabelColor = 'terracotta' | 'sage' | 'clay' | 'ochre';
type Theme = 'light' | 'dark';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  labelColor?: LabelColor;
  theme?: Theme;
  className?: string;
}

const SectionHeading = ({
  label,
  title,
  description,
  centered = false,
  labelColor = 'terracotta',
  theme = 'light',
  className = '',
}: SectionHeadingProps) => {
  const titleColor = theme === 'dark' ? '' : 'text-deep-earth';
  const descriptionColor = theme === 'dark' ? 'text-warm-sand/80' : 'text-charcoal';

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <SectionLabel color={labelColor} centered={centered}>
          {label}
        </SectionLabel>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl font-normal ${titleColor} ${
          description ? 'mb-4' : ''
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed ${descriptionColor} font-light ${
            centered ? 'max-w-2xl mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
