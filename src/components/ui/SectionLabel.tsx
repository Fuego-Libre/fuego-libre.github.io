interface SectionLabelProps {
  children: string;
  color?: 'terracotta' | 'sage' | 'clay' | 'ochre';
  centered?: boolean;
}

const colorClasses = {
  terracotta: 'text-terracotta',
  sage: 'text-sage',
  clay: 'text-clay',
  ochre: 'text-ochre',
};

const bgClasses = {
  terracotta: 'bg-terracotta',
  sage: 'bg-sage',
  clay: 'bg-clay',
  ochre: 'bg-ochre',
};

const SectionLabel = ({ children, color = 'terracotta', centered = false }: SectionLabelProps) => {
  return (
    <p className={`flex items-center gap-4 text-xs tracking-[0.3em] uppercase ${colorClasses[color]} mb-6 ${centered ? 'justify-center' : ''}`}>
      <span className={`w-8 h-px ${bgClasses[color]}`}></span>
      {children}
      {centered && <span className={`w-8 h-px ${bgClasses[color]}`}></span>}
    </p>
  );
};

export default SectionLabel;
