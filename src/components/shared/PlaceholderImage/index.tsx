type Aspect = 'square' | 'video' | 'portrait' | 'tall';

interface PlaceholderImageProps {
  gradient: string;
  aspect?: Aspect;
  label?: string;
  textSize?: 'xs' | 'sm' | 'lg';
  className?: string;
}

const aspectClasses: Record<Aspect, string> = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[4/5]',
  tall: 'aspect-[3/4]',
};

const textSizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  lg: 'text-lg',
};

const PlaceholderImage = ({
  gradient,
  aspect = 'square',
  label = 'Photo',
  textSize = 'sm',
  className = '',
}: PlaceholderImageProps) => {
  return (
    <div
      className={`${aspectClasses[aspect]} bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}
    >
      <span
        className={`text-cream/50 ${textSizeClasses[textSize]} font-display italic text-center`}
      >
        [ {label} ]
      </span>
    </div>
  );
};

export default PlaceholderImage;
